import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Main from "./Main";
import Header from "./Header";
import LemonDessertIImg from '../Assets/lemon dessert.jpg';
import BruchettaImg from '../Assets/bruchetta.svg';
import GreekSaladImg from '../Assets/greek salad.jpg';

const Specials = () => {
    const cardArray = [];
    const specialItems = [
        {
            name: 'Greek Salad',
            price: 12.99,
            image: GreekSaladImg
        },

        {
            name: 'Bruchetta',
            price: 5.99,
            image: BruchettaImg
        },

        {
            name: 'Lemon Dessert',
            price: 5.00,
            image: LemonDessertIImg
        }
    ];

    const cardStyle = {
        display: 'grid',
        gridTemplateColumns: 'auto',
        justifyContent: 'space-between',
        backgroundColor: '#edefee'
    }

    const cardTitleStyle = {
        display: 'flex',
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-between'
    }

    for (let i = 0; i < specialItems.length; i++) {
        cardArray.push(
            <Card key = {i} style={{ width: 200}}>
                <Card.Img variant="top" src={specialItems[i].image} style={{height: 133}} />
                <Card.Body style={cardStyle}>
                    <Card.Title style={cardTitleStyle}>
                        <Card.Title style={{fontSize: 'fit-height'}}>{specialItems[i].name}</Card.Title>
                        <Card.Text style={{fontSize: 15}}>${specialItems[i].price.toFixed(2)}</Card.Text>
                    </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button className='button-class'>Order a delivery</Button>
                </Card.Body>
            </Card>
        );
    }

    return (
        <section role='specials'>
            <header style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                <Header classes="flex-container specialMobile" headerStyles={{display: 'flex', width: 750, margin: 30, justifyContent: 'space-between'}}>
                    <h1>Specials!</h1>
                    <Button className="button-class" style={{marginTop: 10}}>Order Menu</Button>
                </Header>
            </header>
            <main style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                <Main classes='flex-container' mainStyles={{width: 800}}>
                    {cardArray}
                </Main>
            </main>
        </section>
    );
}

export default Specials;