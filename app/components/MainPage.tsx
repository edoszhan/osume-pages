"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MainPage() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [bookData, setBookData] = useState([]);


    const [trendingBooks, setTrendingBooks] = useState([
        // Step 2: Sample data for trending books
        { id: '1', image: 'https://via.assets.so/game.png?id=1&q=95&w=360&h=360', name: 'Trending Book 1' },
        { id: '2', image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360', name: 'Trending Book 2' },
        { id: '3', image: 'https://via.assets.so/game.png?id=5&q=95&w=360&h=360', name: 'Trending Book 3' },
    ]);

    const [allTimeBooks, setAllTimeBooks] = useState([
        // Step 2: Sample data for trending books
        { id: '1', image: 'https://via.assets.so/game.png?id=7&q=95&w=360&h=360&fit=fill', name: 'All TIME POPULAR 1' },
        { id: '2', image: 'https://via.assets.so/game.png?id=8&q=95&w=360&h=360&fit=fill', name: 'All TIME POPULAR 2' },
        { id: '3', image: 'https://via.assets.so/game.png?id=9&q=95&w=360&h=360&fit=fill', name: 'All TIME POPULAR 3' },
    ]);

    // const handleBookClick = (book) => {
    //     router.push({
    //         pathname: '/books/[book_id]',
    //         query: { book_id: book.id, book_image: book.image, book_name: book.name },
    //     });
    // };

    

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
                    id: item.id || '',
                    image: item.volumeInfo.imageLinks?.thumbnail || '',
                    name: item.volumeInfo.title || '',
                    authors: item.volumeInfo.authors || [], 
                    publication_date: item.volumeInfo.publishedDate || '',
                    description: item.volumeInfo.description || '',
                }));
                console.log("bookInfo", bookInfo)
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
                                text-lg
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
                                        console.log("book", book),
                                        <tr key={index} className='hover:bg-gray-200'>
                                             <td className="px-4 py-2">
                                                <Link href={`/books/${book.name}`}>
                                                        <img src={book.image} alt={book.name} className="w-16 h-auto mx-auto" />
                                                </Link>
                                            </td>
                                            <td className="px-4 py-2 text-red-400 font-bold break-all">
                                                <Link href={{
                                                    pathname: '/books/[book_id]',
                                                    // query: { book_id: book.id, book_image: book.image, book_name: book.name },
                                                    query: { 
                                                        book_image: book.image, 
                                                        book_name: book.name,
                                                        authors: book.authors.join(','),
                                                        publication_date: book.publication_date,
                                                        description: book.description,
                                                    },
                                                }} as={`/books/${book.id}}`}>
                                                      <div>
                                                        {book.name}
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        <br/>
                        <br/>
                        <div>
                            <h2 className="text-xl font-bold mb-4">TRENDING NOW</h2>
                            <div className="flex overflow-x-scroll pb-4">
                                {trendingBooks.map((book, index) => (
                                    <div key={index} className="flex-none w-48 h-64 mr-4">
                                        <img src={book.image} alt={book.name} className="w-full h-auto" />
                                        <div className="text-center mt-2">{book.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-1">
                            <h2 className="text-xl font-bold mb-4">ALL TIME POPULAR</h2>
                            <div className="flex overflow-x-scroll pb-4">
                                {allTimeBooks.map((book, index) => (
                                    <div key={index} className="flex-none w-48 h-64 mr-4">
                                        <img src={book.image} alt={book.name} className="w-full h-auto" />
                                        <div className="text-center mt-2">{book.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
