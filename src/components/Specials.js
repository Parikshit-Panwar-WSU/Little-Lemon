import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Main from "./Main";
import Logo from '../Assets/lemon dessert.jpg';
import Header from "./Header";
import { WrapItem, flexbox } from "@chakra-ui/react";
import { wrap } from "framer-motion";

const Specials = () => {
    return (
        <section>
            <Header classes="flex-container specialsMobile" headerStyles={{gap: 500, marginTop: 50, marginBottom: 30}}>
                <h1>Specials</h1>
                <Button className="button-class">Order Menu</Button>
            </Header>
            <Main classes='flex-container'>
                <Card style={{ width: 200}}>
                    <Card.Img variant="top" src={Logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button className='button-class'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: 200}}>
                    <Card.Img variant="top" src={Logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button className='button-class'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: 200}}>
                    <Card.Img variant="top" src={Logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button className='button-class'>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Main>
        </section>
    );
}

export default Specials;