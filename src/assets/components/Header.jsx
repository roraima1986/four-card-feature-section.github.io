const Header = () => {
    const title = 'Reliable, efficient delivery';
    const subtitle = 'Powered by Technology';
    const description = 'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful';
    
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <h2 className="header__subtitle">{subtitle}</h2>
            <p className="header__description">{description}</p>
        </header>
    );
}

export default Header;