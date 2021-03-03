import "../Stylesheets/user.css"

const User = ({user}) => {
    return (
        <div className="user">

            <img alt="User" src={user.avatar} />  
            
            <div className="user-info">

                <p>{user.first_name} {user.last_name}</p>  
                <p>{user.email}</p> 
                
            </div> 
            
        </div>
    )
}

export default User
