"use client";
import { useSearchParams } from 'react-router-dom';

export default function BookPage() {
    const searchParams = useSearchParams();
    const book_id = searchParams.get('book_id');
    const book_name = searchParams.get('book_name');
    const book_image = searchParams.get('book_image');

    return (
        <div>
            <h1>Book Page</h1>
            <p>Book ID: {book_id}</p>
            <p>Book Name: {book_name}</p>
            <img src={book_image} alt={book_name} />
        </div>
    );
}
