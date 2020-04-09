import React from 'react';

class BookList extends React.Component {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>Oathbringer</li>
                    <li>Warbreaker</li>
                    <li>Name of the Wind</li>
                </ul>
            </div>
        );
    }
}

export default BookList;