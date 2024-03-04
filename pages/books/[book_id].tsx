"use client";
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function BookPage() {
    const router = useRouter();
    const { book_id, book_name, book_image, description } = router.query;

    return (    
        <div>
            <h1>Book Page</h1>
            <p>Book ID: {book_id}</p>
            <p>Book Name: {book_name}</p>
            <p>Book Description: {description}</p>

            <div className='mx-auto'>
                <Image src={book_image} alt={book_name} width={500} height={300} />
            </div>
        </div>
    );
}
