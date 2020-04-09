import React, { createContext, useReducer } from 'react';

export const BookContext = createContext();

const bookReducer = (bookList, action) => {
    switch (action.type) {
        case "addBook":
            return [...bookList, { title: action.book.title, author: action.book.author, id: Date.now() }]
        case "removeBook":
            return bookList.filter((book => book.id !== action.id))
        default:
            return bookList
    }
}

const BookContextProvider = (props) => {

    const [bookList, dispatch] = useReducer(bookReducer,
        [
            { title: "Name Of The Wind", author: "Patrick Rothfuss", id: 1 },
            { title: "Wise Man's Fear", author: "Patrick Rothfuss", id: 2 }
        ]
    )



    return (
        <BookContext.Provider value={{ bookList, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;