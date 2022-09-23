import React from 'react';
import styled from 'styled-components';

interface BookImageProps {
  id: string | null;
}

const BookImageContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;

  img {
    width: 200px;
  }
`;

const getImageURL = (id: string) =>
  `https://books.google.com/books/publisher/content/images/frontcover/${id}?w=300&usc=0`;

export function BookImage({ id }: BookImageProps) {
  if (id == null) {
    return null;
  }

  const imageURL = getImageURL(id);
  return (
    <BookImageContainer>
      <img src={imageURL} alt="book-cover" />
    </BookImageContainer>
  );
}
