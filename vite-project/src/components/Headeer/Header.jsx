



export default function Header() {
    return (
        <>
            <header>
                <img src="" alt="" className="logo"/>
                <nav className="header__nav">
                    <button onClick={() => setFlex('flex')} href="" className="header__nav-link">Who we are</button>
                    <button onClick={() => setFlex('flex')} href="" className="header__nav-link">Contacts</button>
                    <button onClick={() => setFlex('flex')} href="" className="header__nav-link">Menu</button>
                    <button onClick={() => setFlex('flex')} href="" className="header__nav-link">contact us</button>
                </nav>
                <div className="header__signup">
                            <a href="" className="header__signup-link">Sign up</a>
                        </div>
            </header>
        </>
    )
}