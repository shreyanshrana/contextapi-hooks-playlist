import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext"

const Navbar = () => {
    const { bookList } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>Currently you have {bookList.length} books in your list.</p>
        </div>
    );
}

export default Navbar;