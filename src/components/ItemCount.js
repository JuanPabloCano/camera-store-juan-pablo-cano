import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Canon from '../assets/images/Canon-2000D-con-lente-PgBlanca.jpg'
import { Container } from '@mui/material';

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("CONTROL")
    }, [count])

    const addStock = () => {
        if (count < stock) {
            setCount(stock + 1);
        }
    }

    const subtractStock = () => {
        if (count === stock || count < stock) {
            setCount(stock - 1);
        }
    }

    return (
        <>
            <Container>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="canon camera"
                        height="400"
                        image={Canon} width={10}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Canon 2000D
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={subtractStock}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addStock}>+</Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

export default ItemCount
