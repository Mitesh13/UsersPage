import '../Stylesheets/header.css'

const Header = ({getUsers}) => {

    return (
        <div className="header">
            <h1>Stylex.</h1>
            <button onClick={getUsers}>Get Users</button>
        </div>
    )
}

export default Header
