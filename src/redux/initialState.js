export const initialState = {
  products: [
    {
      id: '1',
      title: 'Nazwa produktu',
      description: 'Opis produktu',
      price: '21,15',
    },
    {
      id: '2',
      title: 'Nazwa produktu',
      description: 'Opis produktu',
      price: '33,33',
    },
  ],

  loading: {
    active: false,
    error: false,
  },
};
