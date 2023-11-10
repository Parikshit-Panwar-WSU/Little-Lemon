const Main = ({classes, children, mainStyles}) => {
    return (
        <main className={classes} style={mainStyles}>
            {children}
        </main>
    );
}

export default Main;