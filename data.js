import { v4 as uuidv4 } from 'uuid';

const books = [
    {
      title: "Dom Quixote",
      author: "Miguel de Cervantes",
      year: 1605,
      id: uuidv4()
    },
    {
      title: "Cem Anos de Solidão",
      author: "Gabriel García Márquez",
      year: 1967,
      id: uuidv4()
    },
    {
      title: "A Revolução dos Bichos",
      author: "George Orwell",
      year: 1945,
      id: uuidv4()
    },
    {
      title: "O Pequeno Príncipe",
      author: "Antoine de Saint-Exupéry",
      year: 1943,
      id: uuidv4()
    }
];
  
export default books;