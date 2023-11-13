import Main from "./Main";
import photo from '../Assets/restaurant chef B.jpg';

const Testimonials = () => {
    const testimonialArray = [];

    const reviewCardStyle = {
        display: 'flex',
        width: 200,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    };

    const testimonialsStyle = {
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#edefee'
    };

    for (let i = 0; i < 3; i++)
        testimonialArray.push(
            <div role='reviewCard' key={i} style={reviewCardStyle}>
                <div style={{width: 150}}>
                    <section style={{display: 'flex', alignItems: 'center'}}>
                        <main>
                            <h6>Rating</h6>
                            <img src={photo} width='80' height='80'/>
                        </main>
                        <h6 style={{marginLeft: 20}}>Name</h6>
                    </section>
                    <p style={{marginTop: 10}}>Some quick example text to build on the card title.</p>
                </div>
            </div>
        );

    return (
        <section role='testimonials' style={testimonialsStyle}>
            <header style={{marginTop: 10, marginBottom: 20}}>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>Testimonials</h1>
            </header>
            <main style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                <Main classes='flex-container' mainStyles={{width: 800, gap: 30}}>
                    {testimonialArray}
                </Main>
            </main>
        </section>
    );
}

export default Testimonials;