"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function MainPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [bookData, setBookData] = useState([]);

    const handleChange = async (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Fetch book data from Google Books API
        try {
            if (value.trim() === '') {
                // Clear book data if the input is empty
                setBookData([]);
                return;
            }

            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyBIODMSnPXpcnSvhMGk-FpSlw9RXEMqVJs`);
            const data = await response.json();
            if (data && data.items) {
                // Extract image and name pairs from the response
                const bookInfo = data.items.slice(0, 4).map(item => ({
                    image: item.volumeInfo.imageLinks?.thumbnail,
                    name: item.volumeInfo.title
                }));
                setBookData(bookInfo);
            } else {
                setBookData([]);
            }
        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    };

    return (
        <>
            <div id="MainPage">
                <div className="container mx-auto py-4">
                    <div>
                        <h1 className="text-2xl font-bold mr-0 mt-2">Explore Books</h1>
                        <br/>
                        <input
                            className="
                                w-full
                                placeholder-gray-400
                                border
                                border-black
                                rounded
                                text-sm
                                pl-3
                                focus:outline-none
                            "
                            placeholder="Search for book name"
                            type="text"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        {searchTerm.trim() !== '' && (
                            <table className="absolute bg-white border border-black mt-2 w-30 h-1">
                                <thead>
                                    <tr>
                                        <th className="px-2 py-2">Search Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookData.map((book, index) => (
                                        <tr key={index} className='hover:bg-gray-200'>
                                             <td className="px-4 py-2">
                                                <Link href={`/books/${book.name}`}>
                                                        <img src={book.image} alt={book.name} className="w-16 h-auto mx-auto" />
                                                </Link>
                                            </td>
                                            <td className="px-4 py-2 text-red-400 font-bold break-all">
                                                <Link href={`/books/${book.name}`}>
                                                        {book.name}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        <br/>
                        <br/>
                        <p className="text-lg">This is the main page of the app.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
