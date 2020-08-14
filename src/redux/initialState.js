export const initialState = {
  products: [
    {
      id: '1',
      title: 'Nazwa produktu',
      category: 'T-shirt',
      description: 'Opis produktu',
      price: '21,15',
    },
    {
      id: '2',
      title: 'Nazwa produktu',
      category: 'T-shirt',
      description: 'Opis produktu',
      price: '33,33',
    },
    {
      id: '3',
      title: 'Nazwa produktu',
      category: 'Hoodie',
      description: 'Opis produktu',
      price: '21,15',
    },
    {
      id: '4',
      title: 'Nazwa produktu',
      category: 'Hoodie',
      description: 'Opis produktu',
      price: '33,33',
    },
  ],

  loading: {
    active: false,
    error: false,
  },
};
