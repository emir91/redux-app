import logo from '../assets/images/paragon.png';

const AppHeader = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="title">
                    <h2>React-Redux-App</h2>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;