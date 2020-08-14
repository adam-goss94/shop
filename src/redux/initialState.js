export const initialState = {
  products: [
    {
      id: '1',
      title: 'Nazwa produktu',
      category: 'T-shirt',
      description: 'Opis produktu',
      price: '21,15',
      image: 'src do zdjecia',
    },
    {
      id: '2',
      title: 'Nazwa produktu',
      category: 'T-shirt',
      description: 'Opis produktu',
      price: '33,33',
      image: 'src do zdjecia',
    },
    {
      id: '3',
      title: 'Nazwa produktu',
      category: 'Hoodie',
      description: 'Opis produktu',
      price: '21,15',
      image: 'src do zdjecia',
    },
    {
      id: '4',
      title: 'Nazwa produktu',
      category: 'Hoodie',
      description: 'Opis produktu',
      price: '33,33',
      image: 'src do zdjecia',
    },
  ],

  loading: {
    active: false,
    error: false,
  },
};
