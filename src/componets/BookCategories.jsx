import React from 'react';
import "./BookCategories.css"

const BookCategories = () => {
    const books = [
        {
            image: 'https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png',
            title: 'Science Fiction',
            description: 'As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands...',
            link: '#'
        },
        {
            image: 'https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/mist.png',
            title: 'Mystery',
            description: 'The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light...',
            link: '#'
        },
        {
            image: 'https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/ecos.png',
            title: 'Fantasy',
            description: 'The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath...',
            link: '#'
        }
    ];

    return (
        <div className="book-categories-container">
            <h2>Explore some of the captivating books created using our AI technology.</h2>
            <div className="book-cards">
                {books.map((book, index) => (
                    <div className="book-card" key={index}>
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                        <a href={book.link} className="read-more">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategories;
