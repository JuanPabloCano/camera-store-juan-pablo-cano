import {
    Button,
    Card,
    Container,
    CardMedia,
    CardContent,
    Typography,
    CardActions
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import React from 'react'

const Item = ({ item }) => {
    const { title, price, image } = item;

    return (
        <Container className="general-container">
            <Row>
                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="400"
                        />
                        <CardContent>
                            <img src={`${image}`} alt={title} />
                            <Typography gutterBottom variant="h5" component="div">
                                <h2>{title}</h2>
                                <p> Precio: {price}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">Comprar</Button>
                        </CardActions>
                    </Card >
                </Col>
            </Row>
        </Container>
    )
}
export default Item
