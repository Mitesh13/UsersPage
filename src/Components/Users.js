import User from './User'
import "../Stylesheets/user.css"

const Users = ({users}) => {
    return (
        <div className="user-container">
            
            {
                users.length > 0 ?
                
                (users.map((user)=>{
                    
                    return (
                        
                            <User key={user.id} user={user} />

                    )
                })) : <p style={{padding: "20px", color:"red"}}>Oops! No Users found</p>
            }                
        
        </div>
    )
}

export default Users
