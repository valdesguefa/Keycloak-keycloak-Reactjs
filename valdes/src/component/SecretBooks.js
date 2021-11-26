
import { Link, NavLink } from "react-router-dom";

const SecretBooks = (props) => {

  const deleteBook=(book)=>{
    var boooks=props.books.filter(b=>b.id!==book.id)
    props.setBooks(boooks)
      }

  return(
  <div className="jumbotron">
    <h1>️️⚡️ Here are some secret books! ⚡️</h1>
    
    <div className="row">
      <div className="col-sm-12">
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
           {  props.keycloak.hasRealmRole("bibliothécaire") ? <th>Action</th> : null}
          </tr>
          </thead>
          <tbody>
          {props.books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <Link to={`/secretBooks/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              
              {
                props.keycloak.hasRealmRole("bibliothécaire") ?
                <td>
                <button className="btn btn-xs btn-danger" onClick={()=>deleteBook(book)} >
                  Delete Book
                </button>
              </td> :null
              }
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
          }
export default SecretBooks
