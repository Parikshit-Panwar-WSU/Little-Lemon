import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Main from "./Main";
import Logo from '../Assets/lemon dessert.jpg';
import Header from "./Header";

const Specials = () => {
    const cardMenu = ['Greek Salad', 'Bruchetta', 'Lemon Dessert'];
    const itemPrice = ['$12.99', '$5.99', '$5.00'];
    const cardArray = [];

    for (let i = 0; i < cardMenu.length; i++) {
        cardArray.push(
            <Card key = {i} style={{ width: 200}}>
                <Card.Img variant="top" src={Logo} />
                <Card.Body>
                    <Card.Title style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <Card.Title style={{fontSize: 20}}>{cardMenu[i]}</Card.Title>
                        <Card.Text style={{fontSize: 15}}>{itemPrice[i]}</Card.Text>
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