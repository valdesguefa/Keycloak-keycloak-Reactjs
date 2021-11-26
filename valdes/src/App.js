//import logo from './logo.svg';
import './App.css';
//import './style/style.css';
import { useEffect, useState } from 'react';
import BookBox from './component/BookBox';
//import ddxc from "../public/keycloak.json"

function App() {
  const [books, setBooks] = useState([{
    id: 1,
    title: "snake eyes",
    author: "se"
  }])


 
  
  return (

    <div className="container">

     
          <BookBox setBooks={setBooks} books={books} />
       
        </div>
        );
}

        export default App;
