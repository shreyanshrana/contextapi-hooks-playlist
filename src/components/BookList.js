import React, { useContext } from 'react';
import BookDetails from "../components/BookDetails"
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const { bookList } = useContext(BookContext);
    return bookList.length ? (
        <div className="book-list">
            {
                bookList.map(({ title, author, id }) => {
                    return <BookDetails id={id} title={title} author={author} />
                }
                )
            }
        </div >) : (
            <div className="empty">Nothing to read..</div>
        )

}

export default BookList;