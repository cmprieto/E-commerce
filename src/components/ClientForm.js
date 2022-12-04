import { Fragment } from 'react';
import { FormClient, InputForm, LabelForm, Button, Title } from '../app/styles';
import { useCartContext } from "../app/CartContext";

const ClientForm = () => {
    const { comprador, setComprador, terminarCompra, state } = useCartContext();

    const hacerPedido = ({ props }) => {
        if (comprador.nombre !== '' && comprador.phone !== '' && comprador.mail !== '') {
            terminarCompra();
        }
        else alert('faltan los datos del cliente')
    }

    return (
        <Fragment>
            <Title>Introduce tus DATOS</Title>
            <form>
                <FormClient>
                    <LabelForm>nombre</LabelForm>
                    <InputForm type="text" placeholder="nombre" name="nombre" onChange={(e) => { setComprador({ ...comprador, nombre: e.target.value }) }} />
                </FormClient>
                <FormClient>
                    <LabelForm>teléfono</LabelForm>
                    <InputForm type="phone" placeholder="teléfono" name="telefono" onChange={(e) => { setComprador({ ...comprador, phone: e.target.value }) }} />
                </FormClient>
                <FormClient >
                    <LabelForm>eMail</LabelForm>
                    <InputForm type="mail" placeholder="eMail" name="email" onChange={(e) => { setComprador({ ...comprador, mail: e.target.value }) }} />
                </FormClient>
                <FormClient >
                    {state.length > 0 && <Button type="button" onClick={hacerPedido}>Realiza el pedido</Button>}
                </FormClient>
            </form>
        </Fragment >
    )
}

export default ClientForm;