import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ id, title, author }) => {
    const { dispatch } = useContext(BookContext)
    return (
        <li onClick={() => dispatch({ type: 'removeBook', id })}>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
        </li>
    );
}

export default BookDetails;