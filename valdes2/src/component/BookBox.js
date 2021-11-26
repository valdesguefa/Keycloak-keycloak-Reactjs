import React, { useEffect, useState } from "react";
import Keycloak from 'keycloak-js';

const BookBox = (props) => {
  const [keycloak1, setKeycloak] = useState(null)

  const [secretbooks, setSecretbooks]=useState([{
    id: 1,
    title: "la bible de gutenberg",
    author: "J.K.Rowling"
  },
  {
    id: 2,
    title: "les comptes de beedle the Bard",
    author: "Gutenberg"
  },
  {
    id: 3,
    title: "premier Folio",
    author: "William Shapespeare"
  }])
   /* },
  {
    id: 3,
    title: "premier Folio",
    author: "William Shapespeare"
  }])
  */


  const [name, setName] = useState("")
  const [authenticate, setAuthenticate] = useState(false)
  useEffect(() => {
    const keycloak = new Keycloak("./keycloak.json");
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
     console.log("keycloak",keycloak)
      setKeycloak(keycloak)
     if (keycloak.authenticated ) { keycloak.loadUserInfo().then(user => setName(user.name)) } 
      setAuthenticate(keycloak.authenticated)
    })
  }, [])
  return (
  
    <React.Fragment>
 
      {authenticate ?
     
       <div style={{paddingLeft:'35%',marginTop:'20%'}}>  <strong style={{fontSize:"40px"}}>
         <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0,marginRight:'40px' }} onClick={() => keycloak1.logout()}>
          Logout
        </button>
         hello! {name} </strong></div>
        : <div style={{paddingLeft:'35%',marginTop:'20%'}}>  <strong style={{fontSize:"40px"}}>keycloak Loading ... </strong></div>}
    </React.Fragment>
  )

}
export default BookBox
