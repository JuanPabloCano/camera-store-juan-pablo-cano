import * as React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ({ items }) => {
    const items_list = [
        {
            id: uuidv4(),
            title: 'Canon 2000D',
            price: 2000,
            image: 'Canon-2000D-con-lente-PgBlanca.jpg'
        },
        {
            id: uuidv4(),
            title: 'Nikon D850',
            price: 2800,
            image: 'Nikon-D850-SóloCuerpo-PgBlanco.jpg'
        },
        {
            id: uuidv4(),
            title: 'Sony a7 IV',
            price: 3200,
            image: 'Sony-a7-IV-Sólo-Cuerpo-PgBlanca'
        },
        {
            id: uuidv4(),
            title: 'Canon 77D',
            price: 1850,
            image: 'Canon-77D-con-18-55-PgBlanca-1.jpg'
        },
        {
            id: uuidv4(),
            title: 'Nikon Z6 II',
            price: 3150,
            image: 'Nikon-Z6-II-con-Lente-24-70mm-PgBlanca-1.jpg'
        }
    ]

    useEffect(() => {
        getCamaras().then((cameras) => {
            setTimeout(() => {
                setCamaras(cameras)
            }, 2000)
        }).catch((err) => {
            console.log("Error: ", err);
        }).finally(() => {
            console.log("Ha finalizado el llamado");
        })
    }, [])

    const [camaras, setCamaras] = useState([]);

    const getCamaras = () => {
        return new Promise((resolve, reject) => {
            return resolve(items_list)
        })
    }

    return (
        <Container fluid = 'md'>
            <Row>
                <Col>
                    {camaras.map((camara, id) => {
                        return (
                            <Item item={camara} key={id} />
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}
export default ItemList;