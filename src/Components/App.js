import {useState,useEffect} from 'react'
import Users from './Users'
import Header from './Header'
import '../Stylesheets/App.css'

function App() {

  const [users,setUsers] = useState([])
  const [showLoading,setShowLoading] = useState()
  
  const getUsers = async () =>{

    setShowLoading(true)
    let usersData 
    if('caches' in window)
    {
      try
      {
        let cache = await caches.open('users')
        let usersCache = await cache.match('https://reqres.in/api/users?page=1')
        
        if(usersCache)
        {
          usersData = await (await usersCache.json()).data
        }
          
        else
          usersData = await  fetchUsers()
        
      }
      catch(err)
      {
        alert("something went wrong")
      }
    }
    else
      usersData = await fetchUsers()  
      
    setUsers(usersData)
    setShowLoading(false)
    
  }

  const fetchUsers = async() =>
  {
    const res = await fetch('https://reqres.in/api/users?page=1',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const {data} = await res.json()

    if('caches' in window)
    {
      try
      {
        let cache = await caches.open('users')
        await cache.add('https://reqres.in/api/users?page=1')
        
      }
      catch(err)
      {
        console.log("something went wrong while caching:",err);
      }  
    }
    return data  
  }
  

  useEffect(()=>{
    let throttling
    const headerLogo = document.querySelector(".header h1")
    const headerBtn = document.querySelector(".header button")
    
    window.addEventListener('scroll',(e)=>{
      
      if(!throttling)
      {
        
        throttling = setTimeout(()=>{
        
          if(window.pageYOffset <= 100)
          {
            headerLogo.classList.remove("small-logo") 
            headerBtn.classList.remove("small-btn") 
            
          }
            
          else if(window.pageYOffset >= 140)
          {
            headerLogo.classList.add("small-logo") 
            headerBtn.classList.add("small-btn") 
            
          }
          throttling=null
        },300)
      }
      
    })
  },[])

  return (
    
      <div className="App">
          
        <Header getUsers={getUsers}/>
        
        {
          showLoading ?
          <span className="loading"></span> :
          
          showLoading===false?
          <Users users={users} /> : 
          <div className="info-text">Click on "Fetch Users" to display users</div>
                    
        }
        
      </div>

  );
}

export default App;
