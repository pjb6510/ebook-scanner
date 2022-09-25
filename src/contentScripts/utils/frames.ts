const TOP_FRAME_URL = 'play.google.com/books/reader';
const BOOK_READER_FRAME_URL = 'books.googleusercontent.com';

export function isBookReaderFrame(url: string): boolean {
  return url.includes(BOOK_READER_FRAME_URL);
}

export function isTopFrame(url: string): boolean {
  return url.includes(TOP_FRAME_URL);
}
