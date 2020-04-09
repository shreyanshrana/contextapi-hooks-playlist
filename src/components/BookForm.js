import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'addBook', book: { title, author } });
        setTitle("");
        setAuthor("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book Name"
                value={title}
                required
                onChange={(e) => { setTitle(e.target.value) }} />
            <input
                type="text"
                placeholder="Author Name"
                value={author}
                required
                onChange={(e) => { setAuthor(e.target.value) }} />
            <input type="submit" value="Add Book" />
        </form>
    );
}

export default BookForm;