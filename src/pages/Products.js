import React from 'react'
import { Container } from 'react-bootstrap'
import ItemListContainer from '../components/ItemListContainer';
import ItemList from '../components/ItemList';

const Products = () => {
    return (
        <Container>
            <ItemListContainer products="Cámaras " />
            <ItemList />
        </Container>
    )
}

export default Products;
