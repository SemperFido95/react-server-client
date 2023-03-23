function Header(props) {

    return (
        <header>
            <h1 style={{color: props.textColor}}>{props.headerTextProp}</h1>
        </header>  
    );
}

export default Header;