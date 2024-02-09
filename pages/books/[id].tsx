// pages/books/[id].js

import { useRouter } from 'next/router';

export default function Book() {
    const router = useRouter();
    const { id, name, image } = router.query;

    return (
        <div>
            <h1>Book</h1>
            <p>Book ID: {id}</p>
            <p>Book Name: {name}</p>
            <img src={image} alt={name} />
        </div>
    );
}
