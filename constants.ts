import { MenuItem, Review } from './types';

export const ASSETS = {
  basil: "https://framerusercontent.com/images/kP2NqpJxzs3mxd89TNdxyZvyms.png?width=1200",
  basil2: "https://framerusercontent.com/images/WSIxf52atDWJJfphIQ7KE7eYvM.png?width=1200",
  jalapeno: "https://framerusercontent.com/images/Oh7T6jN4XYvDVriZHd3zwKwGrUs.png?width=1200",
  garlic: "https://framerusercontent.com/images/5gHI1hMjMHXnIKWwZWDGepesMS4.png?width=1200",
  olive: "https://framerusercontent.com/images/Okjb0nB1GOkYPwcntjxG2t9dOU.png?width=1200",
  mushroom: "https://framerusercontent.com/images/NeeY359LTfhcwSN6JhuBh0Y8Bac.png?width=1200",
  tomato: "https://framerusercontent.com/images/PhZZgLMJNd9CBnmdNFn6oZ4geIo.png?width=1200",
  heroPizza: "https://framerusercontent.com/images/TselH8OEkb2YNE35eIM1vVAfb6s.png?width=1024",
};

export const PIZZAS: MenuItem[] = [
  {
    id: 'cheese-avalanche',
    name: 'Cheese Avalanche',
    ingredients: 'Mozzarella, cheddar, Parmesan, gouda, ricotta, marinara sauce, oregano',
    price: '14.99€',
    image: 'https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png?width=1200',
    orderUrl: '#'
  },
  {
    id: 'truffle-temptation',
    name: 'Truffle Temptation',
    ingredients: 'Truffle oil, wild mushrooms, mozzarella, Parmesan, arugula, garlic cream sauce',
    price: '16.99€',
    image: 'https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png?width=1200',
    orderUrl: '#'
  },
  {
    id: 'bbq-blaze',
    name: 'BBQ Blaze',
    ingredients: 'Grilled chicken, red onions, smoky BBQ sauce, cheddar cheese, mozzarella, cilantro',
    price: '15.99€',
    image: 'https://framerusercontent.com/images/dQKnVrygQTPBTqZDioB8akNs.png?width=1200',
    orderUrl: '#'
  }
];

export const DESSERTS: MenuItem[] = [
  {
    id: 'strawberry-smoothie',
    name: 'Strawberry Banana',
    ingredients: 'Strawberries, bananas, yogurt, honey, ice',
    price: '4.99€',
    image: 'https://framerusercontent.com/images/iK4nikPZd41d6ONam9M77AuwI.png?width=1200',
    orderUrl: '#'
  },
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie',
    ingredients: 'Fresh mango, yogurt, ice, honey',
    price: '4.99€',
    image: 'https://framerusercontent.com/images/M1MzsJOs5zYPAhZxzEc3a4ANDrw.png?width=1200',
    orderUrl: '#'
  },
  {
    id: 'cannoli',
    name: 'Classic Cannoli',
    ingredients: 'Cannoli shells, ricotta cheese, powdered sugar, chocolate chips, vanilla',
    price: '5.99€',
    image: 'https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png?width=1200',
    orderUrl: '#'
  },
];

export const WINES: MenuItem[] = [
  {
    id: 'chianti-classico',
    name: 'Chianti Classico',
    ingredients: 'Sangiovese grapes, hints of cherry and earth, full-bodied',
    price: '24.99€',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    orderUrl: '#'
  },
  {
    id: 'pinot-grigio',
    name: 'Pinot Grigio',
    ingredients: 'Crisp and refreshing, notes of green apple and citrus',
    price: '19.99€',
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=800',
    orderUrl: '#'
  },
  {
    id: 'prosecco',
    name: 'Prosecco DOC',
    ingredients: 'Sparkling, aromatic, peach and pear undertones',
    price: '22.99€',
    image: 'https://images.unsplash.com/photo-1598155523122-38423ad4d618?auto=format&fit=crop&q=80&w=800',
    orderUrl: '#'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Des pizzas faites avec ❤️',
    text: "“Très bonne pizza. Une pâte légère et gourmande qui se digère très facilement. Des ingrédients de qualité, le lard et le fromage étaient vraiment excellents. Le tout pour un rapport qualité/prix de haut niveau. Grazie mille!”",
    image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
  },
  {
    id: '2',
    author: 'À la napolitaine !',
    text: "“De passage à Nice, découverte par hasard de cette pizzeria napolitaine : très très bonne adresse ! Les pizza sont généreuses et excellentes. Le personnel est très sympathique avec les clients. Bref, certainement une des meilleures pizzeria de Nice !”",
    image: "https://framerusercontent.com/images/11zQ8oHas5fnqMFob2YkExGRjk.jpg?width=1170"
  },
  {
    id: '3',
    author: 'Lucas van den Berg',
    role: 'Restaurant Critic',
    text: "“Their Mediterranean Marvel pizza took me straight to the coast of Greece. It’s clear they’re passionate about quality and authenticity, with every bite delivering a burst of vibrant, fresh ingredients.”",
    image: "https://framerusercontent.com/images/th2iELXOzEME2cqduvrTZtJsM.png?width=896"
  },
  {
    id: '4',
    author: 'Sophie Martin',
    text: "“L'ambiance est incroyable et les cocktails sont délicieux. Je recommande vivement la pizza à la truffe !”",
    image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
  }
];