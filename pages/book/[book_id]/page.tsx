"use client";
import { useRouter } from 'next/router';

const PageComponent = () => {
  const router = useRouter();
  const { book_id, book_image, book_name } = router.query;
  console.log(router.query);

  return (
    <div>
      <h1>Page of the {book_id} </h1>
      <img src={book_image} alt={book_name} />
    </div>
  );
};

export default PageComponent;
