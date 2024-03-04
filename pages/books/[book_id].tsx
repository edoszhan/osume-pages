"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookDetails = () => {
    const router = useRouter();
    const { book_id} = router.query;
    console.log(book_id);
    const [bookDetails, setBookDetails] = useState(null);

    useEffect(() => {
        if (!book_id) return;
        const fetchData = async () => {
            const data = await fetchBookDetails(book_id);
            setBookDetails(data);
            console.log("data", data);
        };
        fetchData();
    }, [book_id]);

    if (!bookDetails) return <div>Loading...</div>;

    return (
        <div>
            <h1>{bookDetails.volumeInfo.title}</h1>
            <p>Authors: {bookDetails.volumeInfo.authors.join(', ')}</p>
            <p>Published Date: {bookDetails.volumeInfo.publishedDate}</p>
        </div>
    );
};

async function fetchBookDetails(book_id) {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${book_id}?key=AIzaSyBIODMSnPXpcnSvhMGk-FpSlw9RXEMqVJs`);
        const data = await response.json();
        console.log("fefef");
        return data;
    } catch (error) {
        console.error('Error fetching book details:', error);
        return null;
    }
}

export default BookDetails;
