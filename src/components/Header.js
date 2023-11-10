const Header = ({classes, children, headerStyles}) => {
    return (
        <header className={classes} style={headerStyles}>
            {children}
        </header>
    );
}

export default Header;