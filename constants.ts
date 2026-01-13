import { MenuItem, Review } from './types';
import maradona from './assets/maradona_vert.jpg';

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

const DATA = {
  fr: {
    PIZZAS: [
      {
        id: 'cheese-avalanche',
        name: 'Cheese Avalanche',
        ingredients: 'Mozzarella, cheddar, parmesan, gouda, ricotta, sauce marinara, origan',
        price: '14.99€',
        image: 'https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png?width=1200',
        orderUrl: '#'
      },
      {
        id: 'truffle-temptation',
        name: 'Truffle Temptation',
        ingredients: 'Huile de truffe, champignons sauvages, mozzarella, parmesan, roquette, sauce crème à l\'ail',
        price: '16.99€',
        image: 'https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png?width=1200',
        orderUrl: '#'
      },
      {
        id: 'bbq-blaze',
        name: 'BBQ Blaze',
        ingredients: 'Poulet grillé, oignons rouges, sauce BBQ fumée, cheddar, mozzarella, coriandre',
        price: '15.99€',
        image: 'https://framerusercontent.com/images/dQKnVrygQTPBTqZDioB8akNs.png?width=1200',
        orderUrl: '#'
      }
    ],
    DESSERTS: [
      {
        id: 'tiramisu',
        name: 'Tiramisu Maison',
        ingredients: 'Mascarpone, café espresso, biscuits à la cuillère, cacao',
        price: '6.99€',
        image: 'https://images.unsplash.com/photo-1586040140375-b82736e44b94?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'lava-cake',
        name: 'Fondant au Chocolat',
        ingredients: 'Cœur coulant, chocolat noir belge, crème anglaise',
        price: '7.99€',
        image: 'https://images.unsplash.com/photo-1619985920703-a1515bb5649e?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'cannoli',
        name: 'Cannoli Sicilien',
        ingredients: 'Coquilles de cannoli, ricotta, sucre glace, pépites de chocolat, vanille',
        price: '5.99€',
        image: 'https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png?width=1200',
        orderUrl: '#'
      },
    ],
    DRINKS: [
      {
        id: 'strawberry-smoothie',
        name: 'Smoothie Fraise',
        ingredients: 'Fraises, bananes, yaourt, miel, glace',
        price: '4.99€',
        image: 'https://framerusercontent.com/images/iK4nikPZd41d6ONam9M77AuwI.png?width=1200',
        orderUrl: '#'
      },
      {
        id: 'green-detox',
        name: 'Green Detox',
        ingredients: 'Épinards, pomme, concombre, citron, menthe',
        price: '5.50€',
        image: 'https://images.unsplash.com/photo-1516629986345-5d519b7d56e9?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'mango-smoothie',
        name: 'Smoothie Mangue',
        ingredients: 'Mangue fraîche, yaourt, glace, miel',
        price: '4.99€',
        image: 'https://framerusercontent.com/images/M1MzsJOs5zYPAhZxzEc3a4ANDrw.png?width=1200',
        orderUrl: '#'
      }
    ],
    REVIEWS: [
      {
        id: '1',
        author: 'Des pizzas faites avec ❤️',
        text: "“Très bonne pizza. Une pâte légère et gourmande qui se digère très facilement. Des ingrédients de qualité, le lard et le fromage étaient vraiment excellents. Le tout pour un rapport qualité/prix de haut niveau. Grazie mille!”",
        image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
      },
      {
        id: '2',
        author: 'À la napolitaine !',
        text: "“Di passage à Nice, découverte par hasard de cette pizzeria napolitaine : très très bonne adresse ! Les pizza sont généreuses et excellentes. Le personnel est très sympathique avec les clients. Bref, certainement une des meilleures pizzeria de Nice !”",
        image: maradona
      },
      {
        id: '3',
        author: 'Lucas van den Berg',
        role: 'Critique Culinaire',
        text: "“Leur pizza Mediterranean Marvel m'a transporté directement sur la côte grecque. Il est clair qu'ils sont passionnés par la qualité et l'authenticité, chaque bouchée offrant une explosion d'ingrédients frais et vibrants.”",
        image: "https://framerusercontent.com/images/th2iELXOzEME2cqduvrTZtJsM.png?width=896"
      },
      {
        id: '4',
        author: 'Sophie Martin',
        text: "“L'ambiance est incroyable et les cocktails sont délicieux. Je recommande vivement la pizza à la truffe !”",
        image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
      }
    ]
  },
  en: {
    PIZZAS: [
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
    ],
    DESSERTS: [
      {
        id: 'tiramisu',
        name: 'Homemade Tiramisu',
        ingredients: 'Mascarpone, espresso coffee, ladyfingers, cocoa',
        price: '6.99€',
        image: 'https://images.unsplash.com/photo-1586040140375-b82736e44b94?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'lava-cake',
        name: 'Chocolate Lava Cake',
        ingredients: 'Molten center, Belgian dark chocolate, custard',
        price: '7.99€',
        image: 'https://images.unsplash.com/photo-1619985920703-a1515bb5649e?auto=format&fit=crop&q=80&w=800',
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
    ],
    DRINKS: [
      {
        id: 'strawberry-smoothie',
        name: 'Strawberry Banana',
        ingredients: 'Strawberries, bananas, yogurt, honey, ice',
        price: '4.99€',
        image: 'https://framerusercontent.com/images/iK4nikPZd41d6ONam9M77AuwI.png?width=1200',
        orderUrl: '#'
      },
      {
        id: 'green-detox',
        name: 'Green Detox',
        ingredients: 'Spinach, apple, cucumber, lemon, mint',
        price: '5.50€',
        image: 'https://images.unsplash.com/photo-1516629986345-5d519b7d56e9?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'mango-smoothie',
        name: 'Mango Smoothie',
        ingredients: 'Fresh mango, yogurt, ice, honey',
        price: '4.99€',
        image: 'https://framerusercontent.com/images/M1MzsJOs5zYPAhZxzEc3a4ANDrw.png?width=1200',
        orderUrl: '#'
      }
    ],
    REVIEWS: [
      {
        id: '1',
        author: 'Pizzas made with ❤️',
        text: "“Very good pizza. Light and delicious dough that is very easy to digest. Quality ingredients, the bacon and cheese were really excellent. All for a top-level quality/price ratio. Grazie mille!”",
        image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
      },
      {
        id: '2',
        author: 'Neapolitan Style!',
        text: "“Passing through Nice, discovered this Neapolitan pizzeria by chance: very very good address! The pizzas are generous and excellent. The staff is very friendly with customers. In short, certainly one of the best pizzerias in Nice!”",
        image: maradona
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
        text: "“The atmosphere is incredible and the cocktails are delicious. I highly recommend the truffle pizza!”",
        image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
      }
    ]
  },
  it: {
    PIZZAS: [
      {
        id: 'cheese-avalanche',
        name: 'Cheese Avalanche',
        ingredients: 'Mozzarella, cheddar, parmigiano, gouda, ricotta, salsa marinara, origano',
        price: '14.99€',
        image: 'https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png?width=1200',
        orderUrl: '#'
      },
      {
        id: 'truffle-temptation',
        name: 'Truffle Temptation',
        ingredients: 'Olio al tartufo, funghi selvatici, mozzarella, parmigiano, rucola, crema all\'aglio',
        price: '16.99€',
        image: 'https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png?width=1200',
        orderUrl: '#'
      },
      {
        id: 'bbq-blaze',
        name: 'BBQ Blaze',
        ingredients: 'Pollo grigliato, cipolle rosse, salsa BBQ affumicata, cheddar, mozzarella, coriandolo',
        price: '15.99€',
        image: 'https://framerusercontent.com/images/dQKnVrygQTPBTqZDioB8akNs.png?width=1200',
        orderUrl: '#'
      }
    ],
    DESSERTS: [
      {
        id: 'tiramisu',
        name: 'Tiramisù della Casa',
        ingredients: 'Mascarpone, caffè espresso, savoiardi, cacao',
        price: '6.99€',
        image: 'https://images.unsplash.com/photo-1586040140375-b82736e44b94?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'lava-cake',
        name: 'Tortino al Cioccolato',
        ingredients: 'Cuore fondente, cioccolato nero belga, crema inglese',
        price: '7.99€',
        image: 'https://images.unsplash.com/photo-1619985920703-a1515bb5649e?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'cannoli',
        name: 'Cannoli Siciliani',
        ingredients: 'Cialde di cannoli, ricotta, zucchero a velo, gocce di cioccolato, vaniglia',
        price: '5.99€',
        image: 'https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png?width=1200',
        orderUrl: '#'
      },
    ],
    DRINKS: [
      {
        id: 'strawberry-smoothie',
        name: 'Frullato di Fragola',
        ingredients: 'Fragole, banane, yogurt, miele, ghiaccio',
        price: '4.99€',
        image: 'https://framerusercontent.com/images/iK4nikPZd41d6ONam9M77AuwI.png?width=1200',
        orderUrl: '#'
      },
      {
        id: 'green-detox',
        name: 'Green Detox',
        ingredients: 'Spinaci, mela, cetriolo, limone, menta',
        price: '5.50€',
        image: 'https://images.unsplash.com/photo-1516629986345-5d519b7d56e9?auto=format&fit=crop&q=80&w=800',
        orderUrl: '#'
      },
      {
        id: 'mango-smoothie',
        name: 'Frullato di Mango',
        ingredients: 'Mango fresco, yogurt, ghiaccio, miele',
        price: '4.99€',
        image: 'https://framerusercontent.com/images/M1MzsJOs5zYPAhZxzEc3a4ANDrw.png?width=1200',
        orderUrl: '#'
      }
    ],
    REVIEWS: [
      {
        id: '1',
        author: 'Pizze fatte con ❤️',
        text: "“Pizza buonissima. Impasto leggero e goloso, digeribilissimo. Ingredienti di qualità, pancetta e formaggio davvero ottimi. Il tutto per un rapporto qualità/prezzo di alto livello. Grazie mille!”",
        image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
      },
      {
        id: '2',
        author: 'Alla napoletana!',
        text: "“Di passaggio a Nizza, ho scoperto per caso questa pizzeria napoletana: indirizzo molto molto buono! Le pizze sono generose ed eccellenti. Il personale è molto gentile con i clienti. Insomma, sicuramente una delle migliori pizzerie di Nizza!”",
        image: maradona
      },
      {
        id: '3',
        author: 'Lucas van den Berg',
        role: 'Critico Gastronomico',
        text: "“La loro pizza Mediterranean Marvel mi ha portato direttamente sulla costa greca. È chiaro che sono appassionati di qualità e autenticità, con ogni morso che offre un'esplosione di ingredienti vivaci e freschi.”",
        image: "https://framerusercontent.com/images/th2iELXOzEME2cqduvrTZtJsM.png?width=896"
      },
      {
        id: '4',
        author: 'Sophie Martin',
        text: "“L'atmosfera è incredibile e i cocktail sono deliziosi. Consiglio vivamente la pizza al tartufo!”",
        image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170"
      }
    ]
  }
};

export const getData = (lang: string) => {
  return DATA[lang as keyof typeof DATA] || DATA['en'];
};