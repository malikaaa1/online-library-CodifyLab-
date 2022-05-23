import React, { useState } from 'react';
import ButtonComponent from '../../button';
import axios from 'axios'
import './index.scss'

function BooksCard() {
    const [book,setBook] =useState('');
    const [result,setResult]=useState([])
    const [apiKey,setApiKey]= useState('AIzaSyARKYu5NZy7Pd04rweTFmin7jFj1_VkpMQ')
    
    function handleChange(event:any){
       const book = event.target.value;
       setBook(book);

    }

    function handleClick(event:any){
        event.preventDefault();
        
        
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=5")
        .then(data=>{
           setResult(data.data.items);
           console.log(data.data.items)
        })

    }
    return (
        <div className='container'>
            <h2>Search more other books</h2>
             <form >
                 <div className='form-group'>
                 <input onChange={handleChange} type="text" className='form-control' placeholder='Search for Books' autoComplete='off' />
                 </div>
               <ButtonComponent onClick={handleClick} className='btn'>Search</ButtonComponent>
             </form>
             {result.map((book:any)=>(
                 <img className='card_img' key={book.id} src={book.volumeInfo.imageLinks.smallThumbnail} alt='books'/>
             ))}
        </div>
    );
};

export default BooksCard;