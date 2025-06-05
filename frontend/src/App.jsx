import { useState,useEffect } from 'react'
import './App.css'
import { FaPlus } from "react-icons/fa";
import AuthorForm from './components/AuthorForm'
import Authors from './components/Authors'
import { API_BASE_URL } from './api/api';

function App() {
  const api = API_BASE_URL
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  const [authors, setAuthors] = useState([]);
  const [formdata,setFormdata] = useState({
    firstName: '',
    lastName: '',
    title: '',
    profilePhoto: '',
    linkedIn: '',
    twitter: ''
  });
 

  const fetchData = () => {
       let res = fetch(`${api}/profile/getUsers`)
      .then(res => {
       return res.json()
        // console.log(res.json())
      })
      .then((data)=>{
        console.log(data);
        setAuthors(data);
      })
      .catch(err => console.error(err));
     }
   useEffect(() => {
   fetchData()
  
  }, []);
const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/profile/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      })
      console.log("Event responce",res);
       fetchData()
       handleCloseForm();
       setFormdata({
    firstName: '',
    lastName: '',
    title: '',
    profilePhoto: '',
    linkedIn: '',
    twitter: ''
  })
      
    } catch (error) {
      console.log(error)
      
    }
  };
  return (
    <div className="App">
      <h2 className="authors-title">Authors</h2>
      <Authors authors={authors} setAuthors={setAuthors} />
      <div>
        {
          showForm ? (<div className="modal-backdrop">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseForm}>X</button>
            <AuthorForm formdata={formdata} setFormdata={setFormdata} handleSubmit={handleSubmit} />
          </div>
        </div>):
        
        <div className="add-author-button" onClick={handleOpenForm}>
          <FaPlus className='fa-fa-button' />
          </div>
        }
        
      </div>
    </div>
  )
}

export default App
