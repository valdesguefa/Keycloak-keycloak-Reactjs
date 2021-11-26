
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookList from "./BookList";
import RolesRoute from './RolesRoute';
import SecretBooks from './SecretBooks';
import NoMatch from "./NoMatch"
import Menu from './Menu';
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
        <BrowserRouter>
          <Menu name={name} keycloak1={keycloak1} />

          <Switch>
            <Route keycloak={keycloak1} exact path="/">
              <BookList keycloak={keycloak1} setBooks={props.setBooks} books={props.books} />
            </Route>

            <RolesRoute keycloak={keycloak1} exact path="/books/new" roles="bibliothécaire">
              <BookForm  setBooks={props.setBooks} books={props.books} />
            </RolesRoute>
            <Route path="/books/:bookId">
              <BookDetails bool={true} setBooks={props.setBooks} books={props.books} />
            </Route>
            <RolesRoute keycloak={keycloak1} exact path="/secret" roles={["bibliothécaire","VIP"]}>
              <SecretBooks keycloak={keycloak1} setBooks={setSecretbooks} books={secretbooks}/>
            </RolesRoute>
            <Route path="/secretBooks/:bookId">
              <BookDetails bool={false} setBooks={setSecretbooks} books={secretbooks} />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
        : <div style={{paddingLeft:'35%',marginTop:'20%'}}>  <strong style={{fontSize:"40px"}}>keycloak Loading ... </strong></div>}
    </React.Fragment>
  )

}
export default BookBox
