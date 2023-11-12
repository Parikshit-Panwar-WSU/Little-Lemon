import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Main from "./Main";
import Logo from '../Assets/lemon dessert.jpg';
import Header from "./Header";

const Specials = () => {
    const cardArray = [];
    const specialItems = [
        {
            name: 'Greek Salad',
            price: 12.99
        },

        {
            name: 'Bruchetta',
            price: 5.99
        },

        {
            name: 'Lemon Dessert',
            price: 5.00
        }
    ];

    for (let i = 0; i < specialItems.length; i++) {
        cardArray.push(
            <Card key = {i} style={{ width: 200}}>
                <Card.Img variant="top" src={Logo} />
                <Card.Body>
                    <Card.Title style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <Card.Title style={{fontSize: 20}}>{specialItems[i].name}</Card.Title>
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
                <Header classes="flex-container specialsMobile" headerStyles={{gap: 500, marginTop: 50, marginBottom: 30}}>
                    <h1>Specials</h1>
                    <Button className="button-class">Order Menu</Button>
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