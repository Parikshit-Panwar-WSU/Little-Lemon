import Logo from '../Assets/lemon dessert.jpg';

const About = () => {
    const littleLemonHeading = {
        marginTop: 0,
        marginBottom: 0,
        fontSize: 40
    };

    const chicagoHeading = {
        marginTop: 0,
        fontSize: 20,
        fontWeight: 'normal'
    };

    return (
        <section role='About' style={{display: 'flex', width:'100%', justifyContent: 'center', padding: 40}}>
            <main className='flex-container' style={{width: 800, gap: 20}}>
                <article style={{width: 400}}>
                    <header>
                        <h1 style={littleLemonHeading}>Little Lemon</h1>
                        <h4 style={chicagoHeading}>Chicago</h4>
                    </header>
                    <p style={{marginTop: 20, fontWeight: 'bolder'}}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur.
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur.
                </p>
                </article>
                <img src={Logo} alt='Image' style={{borderRadius: 10}} />
            </main>
        </section>
    );
};

export default About;