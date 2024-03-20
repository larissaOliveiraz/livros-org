export type Book = {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  description: string;
  status: "WANT" | "READING" | "READ";
  readingYear: string;
  readingMonth: string;
  score: string;
};