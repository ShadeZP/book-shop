import { IBook, BookCategory } from './modeles/book';

export const books: IBook[] = [
  {
    name: 'Books #1',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 42,
    category: BookCategory.fantasy,
    createDate: 10,
    isAvailable: true,
    id: 1,
  },
  {
    name: 'Books #2',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 44,
    category: BookCategory.scientific,
    createDate: 13,
    isAvailable: false,
    id: 2,
  },
  {
    name: 'Books #3',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 22,
    category: BookCategory.detective,
    createDate: 12,
    isAvailable: true,
    id: 3,
  },
  {
    name: 'Books #4',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 25,
    category: BookCategory.detective,
    createDate: 14,
    isAvailable: true,
    id: 4,
  },
  {
    name: 'Books #5',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 77,
    category: BookCategory.detective,
    createDate: 16,
    isAvailable: true,
    id: 5,
  },
];
