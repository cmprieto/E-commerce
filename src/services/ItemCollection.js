import { getItems } from '../app/api'
import { useState } from 'react';
import { useEffect } from 'react';

const ItemCollection = () => {
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        getItems().then(data => setCollection(data))
    }, []);


    return (
        <div>
            {collection.map(collection => <p>{collection.id} - {collection.title}</p>)}
        </div>
    )
}

export default ItemCollection;