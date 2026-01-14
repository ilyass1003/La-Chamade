import { MenuItem, Review } from './types';
import maradona from './assets/maradona_vert.jpg';
import rocher from './assets/rocher.png';
import pastiera from './assets/pastiera.png';
import aperol from './assets/aperol.png';
import prosecco from './assets/prosecco.png';
import moretti from './assets/moretti.png';

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

const MENU_ITEMS = {
  STARTERS: [
    { id: 'bruschette-classiche', name: 'Bruschette Classiche', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'bruschette-gustose', name: 'Bruschette Gustose', ingredients: '', price: '9.00€', image: '', orderUrl: '#' },
    { id: 'tagliere-chamade', name: 'Tagliere Chamade', ingredients: 'Charcuterie de fromage', price: '20.00€', image: '', orderUrl: '#' },
    { id: 'polpette', name: 'Le Polpette della Nonna', ingredients: 'Boulette de viande', price: '11.00€', image: '', orderUrl: '#' },
    { id: 'parmigiana', name: 'La Parmigiana', ingredients: 'Aubergines et focaccia maison', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'cuppetiell', name: 'O\' Cuppetiell', ingredients: 'Friture Napolitaine', price: '10.00€', image: '', orderUrl: '#' },
    { id: 'cuoppo-mare', name: 'O\' Cuoppo e mare', ingredients: 'Friture de poisson', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'patatine', name: 'Patatine Fritte', ingredients: 'Frites', price: '5.00€', image: '', orderUrl: '#' },
    { id: 'formaggiose', name: 'Le Formaggiose', ingredients: 'Avec fromage fondu', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'patata-snack', name: 'Patata Snack', ingredients: 'Avec saucisse', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'lasagne-pistaches', name: 'Suggestions: Lasagne au Pistaches', ingredients: '', price: '20.00€', image: '', orderUrl: '#' },
    { id: 'gnocchi-tegamino', name: 'Suggestions: Gnocchi al Tegamino', ingredients: '', price: '16.00€', image: '', orderUrl: '#' }
  ],
  SALADS: [
    { id: 'cetara', name: 'La Cetara', ingredients: 'Salade, thon, olives, tomates demi-séchées, oignons rouges', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'vegetariana', name: 'La Vegetariana', ingredients: 'Salade, légumes grillés, burrata', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'prosciutto-mozzarella', name: 'Prosciutto e Mozzarella', ingredients: 'Jambon avec mozzarella', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'caprese', name: 'Caprese', ingredients: 'Mozzarella di Bufala, tomate, origan, basilic, huile d\'olive', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'salmone-salad', name: 'Salmone', ingredients: 'Salade, saumon, ricotta, tomate cerise, olives', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'carpaccio-bresaola', name: 'Carpaccio di bresaola', ingredients: 'Roquette, bresaola, parmesan, tomates sèches', price: '15.00€', image: '', orderUrl: '#' }
  ],
  METER_PIZZAS: [
    { id: 'metro-margherita', name: 'MARGHERITA', ingredients: '50cm (20€) / 75cm (30€) / 100cm (40€)', price: 'dès 20€', image: '', orderUrl: '#' },
    { id: 'metro-2gouts', name: '2 GOÛTS', ingredients: 'Margherita + 1 goût au choix. 50cm (22€) / 75cm (32€) / 100cm (42€)', price: 'dès 22€', image: '', orderUrl: '#' },
    { id: 'metro-3gouts', name: '3 GOÛTS', ingredients: 'Margherita + 2 goûts au choix. 50cm (24€) / 75cm (34€) / 100cm (44€)', price: 'dès 24€', image: '', orderUrl: '#' },
    { id: 'metro-4gouts', name: '4 GOÛTS', ingredients: 'Margherita + 3 goûts au choix. 50cm (26€) / 75cm (36€) / 100cm (46€)', price: 'dès 26€', image: '', orderUrl: '#' },
    { id: 'metro-9gouts', name: '9 GOÛTS (Au goût du Chef)', ingredients: '50cm (28€) / 75cm (38€) / 100cm (48€)', price: 'dès 28€', image: '', orderUrl: '#' },
    { id: 'saltimbocca', name: 'Saltimbocca', ingredients: 'Sandwich de pâte à pizza avec garniture au choix. Normal (14€) / 50cm (26€)', price: 'dès 14€', image: '', orderUrl: '#' }
  ],
  CLASSICS: [
    { id: 'margherita', name: 'Margherita', ingredients: 'Mozzarella, tomate, huile d\'olive, basilic', price: '10.00€', image: '', orderUrl: '#' },
    { id: 'marinara', name: 'Marinara', ingredients: 'Tomate, huile d’olive, ail, origan', price: '9.50€', image: '', orderUrl: '#' },
    { id: 'capricciosa', name: 'Capricciosa', ingredients: 'Mozzarella, tomate, jambon, artichauts, olives, champignons, saucisson, huile, basilic', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'reginella', name: 'Reginella', ingredients: 'Mozzarella, tomate, jambon, champignons, huile d’olive, basilic', price: '13.00€', image: '', orderUrl: '#' },
    { id: '4formaggi', name: '4 Formaggi', ingredients: 'Mozzarella, crème au 4 fromages, huile d’olive, basilic', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'diavola', name: 'Diavola', ingredients: 'Mozzarella, tomate, chorizo, huile d’olive, basilic', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'calzone', name: 'Calzone', ingredients: 'Mozzarella, tomate, ricotta, saucisson, jambon, poivre, basilic', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'calzone-fritto', name: 'Calzone fritto', ingredients: 'Mozzarella, tomate, ricotta, saucisson, jambon, poivre, basilic (frit)', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'bufalina', name: 'Bufalina', ingredients: 'Mozzarella de bufala, tomate, huile d’olive, basilic', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'contadina', name: 'Contadina', ingredients: 'Mozzarella, tomate, courgettes, aubergines, poivrons, basilic', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'romana', name: 'Romana', ingredients: 'Tomate, anchois, huile d’olive, origan', price: '11.00€', image: '', orderUrl: '#' },
    { id: 'filetto', name: 'Filetto', ingredients: 'Mozzarella, tomate cerise, huile d’olive, basilic', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'cipollina', name: 'Cipollina', ingredients: 'Mozzarella, tomate, oignons, thon, huile d’olive, basilic', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'americana', name: 'Américana', ingredients: 'Mozzarella, saucisse de Strasbourg, frites, huile d’olive, basilic', price: '12.00€', image: '', orderUrl: '#' }
  ],
  SPECIALS: [
    { id: 'chamade', name: 'Chamade', ingredients: 'Bresaola, roquette, tomates cerises, parmesan, mozzarella', price: '16.00€', image: 'https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png?width=1200', orderUrl: '#' },
    { id: 'pummaro', name: 'Pummaró', ingredients: 'Tomate cerise, boules de mozzarella, roquette, parmesan, huile d’olive, basilic', price: '15.00€', image: 'https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png?width=1200', orderUrl: '#' },
    { id: 'fresca-fresca', name: 'Fresca fresca', ingredients: 'Crème 4 fromages, tomate cerise, champignons, parmesan, mozzarella, roquette, huile d’olive', price: '15.00€', image: 'https://framerusercontent.com/images/dQKnVrygQTPBTqZDioB8akNs.png?width=1200', orderUrl: '#' },
    { id: 'guancia', name: 'Guancia a guancia', ingredients: 'Crème d’artichauts, tomate cerise, provola, guanciale, crème de pecorino, huile d’olive', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'radicchio', name: 'Radicchio', ingredients: 'Crème 4 fromages, chicorée rouge, provola, speck, parmesan, huile d’olive', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'molisana', name: 'Molisana', ingredients: 'Pommes de terre au four, provola, lard maigre, crème de pecorino, huile d’olive, basilic', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'special', name: 'Spécial', ingredients: 'Tomate cerise, jambon cru, parmesan, mozzarella, roquette, huile d’olive', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'vesuvio', name: 'Vesuvio', ingredients: 'Double calzone avec ricotta, mozzarella, saucisson, jambon, champignon, poivre, tomate, basilic', price: '17.00€', image: '', orderUrl: '#' },
    { id: 'estate', name: 'Estate', ingredients: 'Tomate, fruits de mer, origan, huile d’olive', price: '17.00€', image: '', orderUrl: '#' },
    { id: 'mimosa', name: 'Mimosa', ingredients: 'Crème, jambon, mozzarella, maïs, huile d’olive', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'focaccia-chamade', name: 'Focaccia Chamade', ingredients: 'Tomate cerise, boules de mozzarella, salade, légumes grillées, huile d’olive', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'italia', name: 'Italia', ingredients: 'Tomate cerise, mozzarella, pesto, huile d’olive, basilic', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'scarallo', name: 'Scarallo', ingredients: 'Scarole Napolitaine, anchois, olives noires, mozzarella, parmesan, tarallo émietté', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'bionda-truffe', name: 'Bionda “Truffe”', ingredients: 'Jambon cuit, tomate jaune, provola, crème truffe', price: '16.00€', image: '', orderUrl: '#' },
    { id: 'nanni', name: 'La Nanni', ingredients: 'Stracchino, provola, roquette, jambon cru, parmesan, tomate rouge demi sec', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'pistacchio', name: 'Pistacchio', ingredients: 'Crème de pistaches, mozzarella, mortadella, zeste de citron, huile d’olive', price: '16.00€', image: '', orderUrl: '#' },
    { id: 'partenopea', name: 'Partenopea', ingredients: 'Saucisse de Naples, mozzarella, friarielli, huile d’olive', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'carbonara', name: 'Carbonara', ingredients: 'Crème 4 fromages, mozzarella, crème, lard maigre, œuf, parmesan', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'zucchina', name: 'Zucchina', ingredients: 'Courgettes frites, mozzarella, speck, parmesan', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'salmone', name: 'Salmone', ingredients: 'Salade verte, saumon fumé, tomate cerise, mozzaella, ricotta', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'zucca', name: 'Zucca', ingredients: 'Crème de potiron, saucisse de Naples, provola, parmesan', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'nocilla', name: 'Nocilla', ingredients: 'Crème de noix, cèpes, provola, parmesan', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'gustosa', name: 'Gustosa 3 tomates', ingredients: '3 Types de tomates du Vésuve (jaune, rouge, demi-sec), mozzarella, huile d’olive', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'genovese', name: 'La Genovese', ingredients: 'Crème d\'oignon, provola, parmesan, basilic', price: '15.00€', image: '', orderUrl: '#' }
  ],
  DESSERTS: [
    { id: 'baba', name: 'Babà', ingredients: '', price: '7.00€', image: 'https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png?width=1200', orderUrl: '#' },
    { id: 'pastiera', name: 'Pastiera Napoletana', ingredients: '', price: '7.00€', image: pastiera, orderUrl: '#' },
    { id: 'rocher', name: 'Rocher', ingredients: '', price: '7.00€', image: rocher, orderUrl: '#' },
    { id: 'gateau-pistache', name: 'Gâteau au pistache', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'fuffoli', name: 'Fuffoli', ingredients: 'Morceaux de pâte à pizza avec de la Nutella', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'tiramisu', name: 'Tiramisu', ingredients: 'Fait maison', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'gateau-citron', name: 'Gâteau au citron', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'pizza-nutella', name: 'Pizza au Nutella', ingredients: '', price: '8.00€', image: '', orderUrl: '#' }
  ],
  DRINKS: [
    { id: 'eau', name: 'Eau Naturelle / Pétillante', ingredients: '50cl (3.00€) / 1L (5.00€)', price: 'dès 3.00€', image: '', orderUrl: '#' },
    { id: 'coca', name: 'Coca-Cola, Coca Zéro', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'orangina', name: 'Orangina', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'ice-tea', name: 'Ice thè', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'jus', name: 'Jus', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'sprite', name: 'Sprite', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'sirop', name: 'Sirop', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'aperol', name: 'Apéritif: Aperol Spritz', ingredients: '25cl', price: '7.00€', image: aperol, orderUrl: '#' },
    { id: 'pastis', name: 'Apéritif: Pastis', ingredients: '3cl', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'kir', name: 'Apéritif: Kir cassis', ingredients: '25cl', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'prosecco', name: 'Apéritif: Prosecco', ingredients: '12cl (6.00€) / 75cl (25.00€)', price: 'dès 6.00€', image: prosecco, orderUrl: '#' },
    { id: 'vins', name: 'Vins', ingredients: 'Verre (6.00€) / Pichet (14.00€)', price: 'dès 6.00€', image: '', orderUrl: '#' },
    { id: 'moretti', name: 'Bière: Moretti blonde Pression', ingredients: '25cl (5.00€) / 50cl (9.00€)', price: 'dès 5.00€', image: moretti, orderUrl: '#' },
    { id: 'nastro', name: 'Bière: Nastro Azzurro', ingredients: '', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'icnusa', name: 'Bière Bouteille: Icnusa non filtrè', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'blue-coast-ambre', name: 'Bière Bouteille: Blue coast ambre', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'blue-coast-blonde', name: 'Bière Bouteille: Blue coast blonde', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'limoncello', name: 'Digestif: Limoncello', ingredients: '3cl', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'amaro', name: 'Digestif: Amaro', ingredients: '3cl', price: '5.00€', image: '', orderUrl: '#' },
    { id: 'cafe', name: 'Café', ingredients: '', price: '2.00€', image: '', orderUrl: '#' }
  ]
};

const MENU_ITEMS_EN = {
  STARTERS: [
    { id: 'bruschette-classiche', name: 'Bruschette Classiche', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'bruschette-gustose', name: 'Bruschette Gustose', ingredients: '', price: '9.00€', image: '', orderUrl: '#' },
    { id: 'tagliere-chamade', name: 'Tagliere Chamade', ingredients: 'Mixed Cheese and Charcuterie', price: '20.00€', image: '', orderUrl: '#' },
    { id: 'polpette', name: 'Le Polpette della Nonna', ingredients: 'Meatballs', price: '11.00€', image: '', orderUrl: '#' },
    { id: 'parmigiana', name: 'La Parmigiana', ingredients: 'Eggplant Parmigiana with homemade focaccia', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'cuppetiell', name: 'O\' Cuppetiell', ingredients: 'Neapolitan Fried Mix', price: '10.00€', image: '', orderUrl: '#' },
    { id: 'cuoppo-mare', name: 'O\' Cuoppo e mare', ingredients: 'Fried Seafood Mix', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'patatine', name: 'Patatine Fritte', ingredients: 'French Fries', price: '5.00€', image: '', orderUrl: '#' },
    { id: 'formaggiose', name: 'Le Formaggiose', ingredients: 'With melted cheese', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'patata-snack', name: 'Patata Snack', ingredients: 'With sausage', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'lasagne-pistaches', name: 'Suggestions: Pistachio Lasagna', ingredients: '', price: '20.00€', image: '', orderUrl: '#' },
    { id: 'gnocchi-tegamino', name: 'Suggestions: Baked Gnocchi', ingredients: '', price: '16.00€', image: '', orderUrl: '#' }
  ],
  SALADS: [
    { id: 'cetara', name: 'La Cetara', ingredients: 'Salade, tuna, olives, semi-dried tomatoes, red onions', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'vegetariana', name: 'La Vegetariana', ingredients: 'Salad, grilled vegetables, burrata', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'prosciutto-mozzarella', name: 'Prosciutto e Mozzarella', ingredients: 'Ham with mozzarella', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'caprese', name: 'Caprese', ingredients: 'Buffalo Mozzarella, tomato, oregano, basil, olive oil', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'salmone-salad', name: 'Salmone', ingredients: 'Salad, salmon, ricotta, cherry tomatoes, olives', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'carpaccio-bresaola', name: 'Carpaccio di bresaola', ingredients: 'Arugula, bresaola, parmesan, sun-dried tomatoes', price: '15.00€', image: '', orderUrl: '#' }
  ],
  METER_PIZZAS: [
    { id: 'metro-margherita', name: 'MARGHERITA', ingredients: '50cm (20€) / 75cm (30€) / 100cm (40€)', price: 'from 20€', image: '', orderUrl: '#' },
    { id: 'metro-2gouts', name: '2 FLAVORS', ingredients: 'Margherita + 1 flavor of choice. 50cm (22€) / 75cm (32€) / 100cm (42€)', price: 'from 22€', image: '', orderUrl: '#' },
    { id: 'metro-3gouts', name: '3 FLAVORS', ingredients: 'Margherita + 2 flavors of choice. 50cm (24€) / 75cm (34€) / 100cm (44€)', price: 'from 24€', image: '', orderUrl: '#' },
    { id: 'metro-4gouts', name: '4 FLAVORS', ingredients: 'Margherita + 3 flavors of choice. 50cm (26€) / 75cm (36€) / 100cm (46€)', price: 'from 26€', image: '', orderUrl: '#' },
    { id: 'metro-9gouts', name: '9 FLAVORS (Chef\'s Choice)', ingredients: '50cm (28€) / 75cm (38€) / 100cm (48€)', price: 'from 28€', image: '', orderUrl: '#' },
    { id: 'saltimbocca', name: 'Saltimbocca', ingredients: 'Pizza dough sandwich with choice of filling. Normal (14€) / 50cm (26€)', price: 'from 14€', image: '', orderUrl: '#' }
  ],
  CLASSICS: [
    { id: 'margherita', name: 'Margherita', ingredients: 'Mozzarella, tomato, olive oil, basil', price: '10.00€', image: '', orderUrl: '#' },
    { id: 'marinara', name: 'Marinara', ingredients: 'Tomato, olive oil, garlic, oregano', price: '9.50€', image: '', orderUrl: '#' },
    { id: 'capricciosa', name: 'Capricciosa', ingredients: 'Mozzarella, tomato, ham, artichokes, olives, mushrooms, salami, oil, basil', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'reginella', name: 'Reginella', ingredients: 'Mozzarella, tomato, ham, mushrooms, olive oil, basil', price: '13.00€', image: '', orderUrl: '#' },
    { id: '4formaggi', name: '4 Cheeses', ingredients: 'Mozzarella, 4 cheese cream, olive oil, basil', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'diavola', name: 'Diavola', ingredients: 'Mozzarella, tomato, spicy salami, olive oil, basil', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'calzone', name: 'Calzone', ingredients: 'Mozzarella, tomato, ricotta, salami, ham, pepper, basil', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'calzone-fritto', name: 'Fried Calzone', ingredients: 'Mozzarella, tomato, ricotta, salami, ham, pepper, basil (fried)', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'bufalina', name: 'Bufalina', ingredients: 'Buffalo mozzarella, tomato, olive oil, basil', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'contadina', name: 'Contadina', ingredients: 'Mozzarella, tomato, zucchini, eggplant, peppers, basil', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'romana', name: 'Romana', ingredients: 'Tomato, anchovies, olive oil, oregano', price: '11.00€', image: '', orderUrl: '#' },
    { id: 'filetto', name: 'Filetto', ingredients: 'Mozzarella, cherry tomato, olive oil, basil', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'cipollina', name: 'Cipollina', ingredients: 'Mozzarella, tomato, onions, tuna, olive oil, basil', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'americana', name: 'Americana', ingredients: 'Mozzarella, frankfurter sausage, french fries, olive oil, basil', price: '12.00€', image: '', orderUrl: '#' }
  ],
  SPECIALS: [
    { id: 'chamade', name: 'Chamade', ingredients: 'Bresaola, arugula, cherry tomatoes, parmesan, mozzarella', price: '16.00€', image: 'https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png?width=1200', orderUrl: '#' },
    { id: 'pummaro', name: 'Pummaró', ingredients: 'Cherry tomato, mozzarella balls, arugula, parmesan, olive oil, basil', price: '15.00€', image: 'https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png?width=1200', orderUrl: '#' },
    { id: 'fresca-fresca', name: 'Fresca fresca', ingredients: '4 cheese cream, cherry tomato, mushrooms, parmesan, mozzarella, arugula, olive oil', price: '15.00€', image: 'https://framerusercontent.com/images/dQKnVrygQTPBTqZDioB8akNs.png?width=1200', orderUrl: '#' },
    { id: 'guancia', name: 'Guancia a guancia', ingredients: 'Artichoke cream, cherry tomato, provola, guanciale, pecorino cream, olive oil', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'radicchio', name: 'Radicchio', ingredients: '4 cheese cream, red chicory, provola, speck, parmesan, olive oil', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'molisana', name: 'Molisana', ingredients: 'Baked potatoes, provola, lean bacon, pecorino cream, olive oil, basil', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'special', name: 'Spécial', ingredients: 'Cherry tomato, raw ham, parmesan, mozzarella, arugula, olive oil', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'vesuvio', name: 'Vesuvio', ingredients: 'Double calzone with ricotta, mozzarella, salami, ham, mushroom, pepper, tomato, basil', price: '17.00€', image: '', orderUrl: '#' },
    { id: 'estate', name: 'Estate', ingredients: 'Tomato, seafood, oregano, olive oil', price: '17.00€', image: '', orderUrl: '#' },
    { id: 'mimosa', name: 'Mimosa', ingredients: 'Cream, ham, mozzarella, corn, olive oil', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'focaccia-chamade', name: 'Focaccia Chamade', ingredients: 'Cherry tomato, mozzarella balls, salad, grilled vegetables, olive oil', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'italia', name: 'Italia', ingredients: 'Cherry tomato, mozzarella, pesto, olive oil, basil', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'scarallo', name: 'Scarallo', ingredients: 'Neapolitan Escarole, anchovies, black olives, mozzarella, parmesan, crumbled tarallo', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'bionda-truffe', name: 'Bionda “Truffle”', ingredients: 'Cooked ham, yellow tomato, provola, truffle cream', price: '16.00€', image: '', orderUrl: '#' },
    { id: 'nanni', name: 'La Nanni', ingredients: 'Stracchino, provola, arugula, raw ham, parmesan, semi-dried red tomato', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'pistacchio', name: 'Pistacchio', ingredients: 'Pistachio cream, mozzarella, mortadella, lemon zest, olive oil', price: '16.00€', image: '', orderUrl: '#' },
    { id: 'partenopea', name: 'Partenopea', ingredients: 'Naples sausage, mozzarella, friarielli, olive oil', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'carbonara', name: 'Carbonara', ingredients: '4 cheese cream, mozzarella, cream, lean bacon, egg, parmesan', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'zucchina', name: 'Zucchina', ingredients: 'Fried zucchini, mozzarella, speck, parmesan', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'salmone', name: 'Salmone', ingredients: 'Green salad, smoked salmon, cherry tomato, mozzarella, ricotta', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'zucca', name: 'Zucca', ingredients: 'Pumpkin cream, Naples sausage, provola, parmesan', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'nocilla', name: 'Nocilla', ingredients: 'Walnut cream, porcini mushrooms, provola, parmesan', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'gustosa', name: 'Gustosa 3 Tomatoes', ingredients: '3 Types of Vesuvius tomatoes (yellow, red, semi-dry), mozzarella, olive oil', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'genovese', name: 'La Genovese', ingredients: 'Onion cream, provola, parmesan, basil', price: '15.00€', image: '', orderUrl: '#' }
  ],
  DESSERTS: [
    { id: 'baba', name: 'Babà', ingredients: '', price: '7.00€', image: 'https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png?width=1200', orderUrl: '#' },
    { id: 'pastiera', name: 'Pastiera Napoletana', ingredients: '', price: '7.00€', image: pastiera, orderUrl: '#' },
    { id: 'rocher', name: 'Rocher', ingredients: '', price: '7.00€', image: rocher, orderUrl: '#' },
    { id: 'gateau-pistache', name: 'Pistachio Cake', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'fuffoli', name: 'Fuffoli', ingredients: 'Pizza dough pieces with Nutella', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'tiramisu', name: 'Tiramisu', ingredients: 'Homemade', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'gateau-citron', name: 'Lemon Cake', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'pizza-nutella', name: 'Nutella Pizza', ingredients: '', price: '8.00€', image: '', orderUrl: '#' }
  ],
  DRINKS: [
    { id: 'eau', name: 'Natural / Sparkling Water', ingredients: '50cl (3.00€) / 1L (5.00€)', price: 'from 3.00€', image: '', orderUrl: '#' },
    { id: 'coca', name: 'Coca-Cola, Coca Zero', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'orangina', name: 'Orangina', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'ice-tea', name: 'Ice Tea', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'jus', name: 'Juice', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'sprite', name: 'Sprite', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'sirop', name: 'Syrup', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'aperol', name: 'Aperitif: Aperol Spritz', ingredients: '25cl', price: '7.00€', image: aperol, orderUrl: '#' },
    { id: 'pastis', name: 'Aperitif: Pastis', ingredients: '3cl', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'kir', name: 'Aperitif: Kir Cassis', ingredients: '25cl', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'prosecco', name: 'Aperitif: Prosecco', ingredients: '12cl (6.00€) / 75cl (25.00€)', price: 'from 6.00€', image: prosecco, orderUrl: '#' },
    { id: 'vins', name: 'Wines', ingredients: 'Glass (6.00€) / Pitcher (14.00€)', price: 'from 6.00€', image: '', orderUrl: '#' },
    { id: 'moretti', name: 'Beer: Moretti Draught', ingredients: '25cl (5.00€) / 50cl (9.00€)', price: 'from 5.00€', image: moretti, orderUrl: '#' },
    { id: 'nastro', name: 'Beer: Nastro Azzurro', ingredients: '', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'icnusa', name: 'Bottled Beer: Icnusa Unfiltered', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'blue-coast-ambre', name: 'Bottled Beer: Blue Coast Amber', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'blue-coast-blonde', name: 'Bottled Beer: Blue Coast Blonde', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'limoncello', name: 'Digestif: Limoncello', ingredients: '3cl', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'amaro', name: 'Digestif: Amaro', ingredients: '3cl', price: '5.00€', image: '', orderUrl: '#' },
    { id: 'cafe', name: 'Coffee', ingredients: '', price: '2.00€', image: '', orderUrl: '#' }
  ]
};

const MENU_ITEMS_IT = {
  STARTERS: [
    { id: 'bruschette-classiche', name: 'Bruschette Classiche', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'bruschette-gustose', name: 'Bruschette Gustose', ingredients: '', price: '9.00€', image: '', orderUrl: '#' },
    { id: 'tagliere-chamade', name: 'Tagliere Chamade', ingredients: 'Tagliere di Formaggi e Salumi', price: '20.00€', image: '', orderUrl: '#' },
    { id: 'polpette', name: 'Le Polpette della Nonna', ingredients: 'Polpette al sugo', price: '11.00€', image: '', orderUrl: '#' },
    { id: 'parmigiana', name: 'La Parmigiana', ingredients: 'Parmigiana di Melanzane e focaccia fatta in casa', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'cuppetiell', name: 'O\' Cuppetiell', ingredients: 'Frittura Napoletana', price: '10.00€', image: '', orderUrl: '#' },
    { id: 'cuoppo-mare', name: 'O\' Cuoppo e mare', ingredients: 'Frittura di Pesce', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'patatine', name: 'Patatine Fritte', ingredients: 'Patatine Fritte', price: '5.00€', image: '', orderUrl: '#' },
    { id: 'formaggiose', name: 'Le Formaggiose', ingredients: 'Con formaggio fuso', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'patata-snack', name: 'Patata Snack', ingredients: 'Con salsiccia', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'lasagne-pistaches', name: 'Suggestions: Lasagna al Pistacchio', ingredients: '', price: '20.00€', image: '', orderUrl: '#' },
    { id: 'gnocchi-tegamino', name: 'Suggestions: Gnocchi al Tegamino', ingredients: '', price: '16.00€', image: '', orderUrl: '#' }
  ],
  SALADS: [
    { id: 'cetara', name: 'La Cetara', ingredients: 'Insalata, tonno, olive, pomodori semi-secchi, cipolle rosse', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'vegetariana', name: 'La Vegetariana', ingredients: 'Insalata, verdure grigliate, burrata', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'prosciutto-mozzarella', name: 'Prosciutto e Mozzarella', ingredients: 'Prosciutto e Mozzarella', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'caprese', name: 'Caprese', ingredients: 'Mozzarella di Bufala, pomodoro, origano, basilico, olio d\'oliva', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'salmone-salad', name: 'Salmone', ingredients: 'Insalata, salmone, ricotta, pomodorini, olive', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'carpaccio-bresaola', name: 'Carpaccio di bresaola', ingredients: 'Rucola, bresaola, parmigiano, pomodori secchi', price: '15.00€', image: '', orderUrl: '#' }
  ],
  METER_PIZZAS: [
    { id: 'metro-margherita', name: 'MARGHERITA', ingredients: '50cm (20€) / 75cm (30€) / 100cm (40€)', price: 'da 20€', image: '', orderUrl: '#' },
    { id: 'metro-2gouts', name: '2 GUSTI', ingredients: 'Margherita + 1 gusto a scelta. 50cm (22€) / 75cm (32€) / 100cm (42€)', price: 'da 22€', image: '', orderUrl: '#' },
    { id: 'metro-3gouts', name: '3 GUSTI', ingredients: 'Margherita + 2 gusti a scelta. 50cm (24€) / 75cm (34€) / 100cm (44€)', price: 'da 24€', image: '', orderUrl: '#' },
    { id: 'metro-4gouts', name: '4 GUSTI', ingredients: 'Margherita + 3 gusti a scelta. 50cm (26€) / 75cm (36€) / 100cm (46€)', price: 'da 26€', image: '', orderUrl: '#' },
    { id: 'metro-9gouts', name: '9 GUSTI (A scelta dello Chef)', ingredients: '50cm (28€) / 75cm (38€) / 100cm (48€)', price: 'da 28€', image: '', orderUrl: '#' },
    { id: 'saltimbocca', name: 'Saltimbocca', ingredients: 'Panino di pasta per pizza con ripieno a scelta. Normale (14€) / 50cm (26€)', price: 'da 14€', image: '', orderUrl: '#' }
  ],
  CLASSICS: [
    { id: 'margherita', name: 'Margherita', ingredients: 'Mozzarella, pomodoro, olio d\'oliva, basilico', price: '10.00€', image: '', orderUrl: '#' },
    { id: 'marinara', name: 'Marinara', ingredients: 'Pomodoro, olio d\'oliva, aglio, origano', price: '9.50€', image: '', orderUrl: '#' },
    { id: 'capricciosa', name: 'Capricciosa', ingredients: 'Mozzarella, pomodoro, prosciutto cotto, carciofini, olive, funghi, salame, olio, basilico', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'reginella', name: 'Reginella', ingredients: 'Mozzarella, pomodoro, prosciutto cotto, funghi champignon, olio d\'oliva, basilico', price: '13.00€', image: '', orderUrl: '#' },
    { id: '4formaggi', name: '4 Formaggi', ingredients: 'Mozzarella, crema ai 4 formaggi, olio d\'oliva, basilico', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'diavola', name: 'Diavola', ingredients: 'Mozzarella, pomodoro, salame piccante, olio d\'oliva, basilico', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'calzone', name: 'Calzone', ingredients: 'Mozzarella, pomodoro, ricotta, salame, prosciutto cotto, pepe, basilico', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'calzone-fritto', name: 'Calzone fritto', ingredients: 'Mozzarella, pomodoro, ricotta, salame, prosciutto cotto, pepe, basilico (fritto)', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'bufalina', name: 'Bufalina', ingredients: 'Mozzarella di bufala, pomodoro, olio d\'oliva, basilico', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'contadina', name: 'Contadina', ingredients: 'Mozzarella, pomodoro, zucchine, melanzane, peperoni, basilico', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'romana', name: 'Romana', ingredients: 'Pomodoro, acciughe, olio d\'oliva, origano', price: '11.00€', image: '', orderUrl: '#' },
    { id: 'filetto', name: 'Filetto', ingredients: 'Mozzarella, pomodorini, olio d\'oliva, basilico', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'cipollina', name: 'Cipollina', ingredients: 'Mozzarella, pomodoro, cipolle, tonno, olio d\'oliva, basilico', price: '12.00€', image: '', orderUrl: '#' },
    { id: 'americana', name: 'Américana', ingredients: 'Mozzarella, wurstel, patatine fritte, olio d\'oliva, basilico', price: '12.00€', image: '', orderUrl: '#' }
  ],
  SPECIALS: [
    { id: 'chamade', name: 'Chamade', ingredients: 'Bresaola, rucola, pomodorini, parmigiano, mozzarella', price: '16.00€', image: 'https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png?width=1200', orderUrl: '#' },
    { id: 'pummaro', name: 'Pummaró', ingredients: 'Pomodorini, bocconcini di mozzarella, rucola, parmigiano, olio d\'oliva, basilico', price: '15.00€', image: 'https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png?width=1200', orderUrl: '#' },
    { id: 'fresca-fresca', name: 'Fresca fresca', ingredients: 'Crema ai 4 formaggi, pomodorini, funghi, parmigiano, mozzarella, rucola, olio d\'oliva', price: '15.00€', image: 'https://framerusercontent.com/images/dQKnVrygQTPBTqZDioB8akNs.png?width=1200', orderUrl: '#' },
    { id: 'guancia', name: 'Guancia a guancia', ingredients: 'Crema di carciofi, pomodorini, provola, guanciale, crema di pecorino, olio d\'oliva', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'radicchio', name: 'Radicchio', ingredients: 'Crema ai 4 formaggi, radicchio rosso, provola, speck, parmigiano, olio d\'oliva', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'molisana', name: 'Molisana', ingredients: 'Patate al forno, provola, pancetta magra, crema di pecorino, olio d\'oliva, basilico', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'special', name: 'Spécial', ingredients: 'Pomodorini, prosciutto crudo, parmigiano, mozzarella, rucola, olio d\'oliva', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'vesuvio', name: 'Vesuvio', ingredients: 'Doppio calzone con ricotta, mozzarella, salame, prosciutto cotto, funghi, pepe, pomodoro, basilico', price: '17.00€', image: '', orderUrl: '#' },
    { id: 'estate', name: 'Estate', ingredients: 'Pomodoro, frutti di mare, origano, olio d\'oliva', price: '17.00€', image: '', orderUrl: '#' },
    { id: 'mimosa', name: 'Mimosa', ingredients: 'Panna, prosciutto cotto, mozzarella, mais, olio d\'oliva', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'focaccia-chamade', name: 'Focaccia Chamade', ingredients: 'Pomodorini, bocconcini di mozzarella, insalata, verdure grigliate, olio d\'oliva', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'italia', name: 'Italia', ingredients: 'Pomodorini, mozzarella, pesto, olio d\'oliva, basilico', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'scarallo', name: 'Scarallo', ingredients: 'Scarola Napoletana, acciughe, olive nere, mozzarella, parmigiano, tarallo sbriciolato', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'bionda-truffe', name: 'Bionda “Truffle”', ingredients: 'Prosciutto cotto, pomodoro giallo, provola, crema di tartufo', price: '16.00€', image: '', orderUrl: '#' },
    { id: 'nanni', name: 'La Nanni', ingredients: 'Stracchino, provola, rucola, prosciutto crudo, parmigiano, pomodoro rosso semi-secco', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'pistacchio', name: 'Pistacchio', ingredients: 'Crema di pistacchio, mozzarella, mortadella, scorza di limone, olio d\'oliva', price: '16.00€', image: '', orderUrl: '#' },
    { id: 'partenopea', name: 'Partenopea', ingredients: 'Salsiccia di Napoli, mozzarella, friarielli, olio d\'oliva', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'carbonara', name: 'Carbonara', ingredients: 'Crema ai 4 formaggi, mozzarella, panna, pancetta magra, uovo, parmigiano', price: '14.50€', image: '', orderUrl: '#' },
    { id: 'zucchina', name: 'Zucchina', ingredients: 'Zucchine fritte, mozzarella, speck, parmigiano', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'salmone', name: 'Salmone', ingredients: 'Insalata verde, salmone affumicato, pomodorini, mozzarella, ricotta', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'zucca', name: 'Zucca', ingredients: 'Crema di zucca, salsiccia di Napoli, provola, parmigiano', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'nocilla', name: 'Nocilla', ingredients: 'Crema di noci, funghi porcini, provola, parmigiano', price: '15.00€', image: '', orderUrl: '#' },
    { id: 'gustosa', name: 'Gustosa 3 Pomodori', ingredients: '3 Tipi di pomodori del Vesuvio (giallo, rosso, semi-secco), mozzarella, olio d\'oliva', price: '14.00€', image: '', orderUrl: '#' },
    { id: 'genovese', name: 'La Genovese', ingredients: 'Crema di cipolla, provola, parmigiano, basilico', price: '15.00€', image: '', orderUrl: '#' }
  ],
  DESSERTS: [
    { id: 'baba', name: 'Babà', ingredients: '', price: '7.00€', image: 'https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png?width=1200', orderUrl: '#' },
    { id: 'pastiera', name: 'Pastiera Napoletana', ingredients: '', price: '7.00€', image: pastiera, orderUrl: '#' },
    { id: 'rocher', name: 'Rocher', ingredients: '', price: '7.00€', image: rocher, orderUrl: '#' },
    { id: 'gateau-pistache', name: 'Gâteau au pistache', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'fuffoli', name: 'Fuffoli', ingredients: 'Pezzi di pasta per pizza con Nutella', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'tiramisu', name: 'Tiramisu', ingredients: 'Fatto in casa', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'gateau-citron', name: 'Gâteau au citron', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'pizza-nutella', name: 'Pizza alla Nutella', ingredients: '', price: '8.00€', image: '', orderUrl: '#' }
  ],
  DRINKS: [
    { id: 'eau', name: 'Acqua Naturale / Frizzante', ingredients: '50cl (3.00€) / 1L (5.00€)', price: 'da 3.00€', image: '', orderUrl: '#' },
    { id: 'coca', name: 'Coca-Cola, Coca Zero', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'orangina', name: 'Orangina', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'ice-tea', name: 'Ice thè', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'jus', name: 'Succo', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'sprite', name: 'Sprite', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'sirop', name: 'Sciroppo', ingredients: '', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'aperol', name: 'Aperitivo: Aperol Spritz', ingredients: '25cl', price: '7.00€', image: aperol, orderUrl: '#' },
    { id: 'pastis', name: 'Aperitivo: Pastis', ingredients: '3cl', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'kir', name: 'Aperitivo: Kir cassis', ingredients: '25cl', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'prosecco', name: 'Aperitivo: Prosecco', ingredients: '12cl (6.00€) / 75cl (25.00€)', price: 'da 6.00€', image: prosecco, orderUrl: '#' },
    { id: 'vins', name: 'Vini', ingredients: 'Calice (6.00€) / Caraffa (14.00€)', price: 'da 6.00€', image: '', orderUrl: '#' },
    { id: 'moretti', name: 'Birra: Moretti alla Spina', ingredients: '25cl (5.00€) / 50cl (9.00€)', price: 'da 5.00€', image: moretti, orderUrl: '#' },
    { id: 'nastro', name: 'Birra: Nastro Azzurro', ingredients: '', price: '6.00€', image: '', orderUrl: '#' },
    { id: 'icnusa', name: 'Birra in Bottiglia: Icnusa non filtrata', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'blue-coast-ambre', name: 'Birra in Bottiglia: Blue coast ambre', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'blue-coast-blonde', name: 'Birra in Bottiglia: Blue coast blonde', ingredients: '', price: '7.00€', image: '', orderUrl: '#' },
    { id: 'limoncello', name: 'Digestivo: Limoncello', ingredients: '3cl', price: '4.00€', image: '', orderUrl: '#' },
    { id: 'amaro', name: 'Digestivo: Amaro', ingredients: '3cl', price: '5.00€', image: '', orderUrl: '#' },
    { id: 'cafe', name: 'Caffè', ingredients: '', price: '2.00€', image: '', orderUrl: '#' }
  ]
};

const DATAFR = {
  ...MENU_ITEMS,
  REVIEWS: [
    { id: '1', author: 'Des pizzas faites avec ❤️', text: "“Très bonne pizza. Une pâte légère et gourmande qui se digère très facilement. Des ingrédients de qualité, le lard et le fromage étaient vraiment excellents. Le tout pour un rapport qualité/prix de haut niveau. Grazie mille!”", image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170" },
    { id: '2', author: 'À la napolitaine !', text: "“Di passage à Nice, découverte par hasard de cette pizzeria napolitaine : très très bonne adresse ! Les pizza sont généreuses et excellentes. Le personnel est très sympathique avec les clients. Bref, certainement une des meilleures pizzeria de Nice !”", image: maradona },
    { id: '3', author: 'Lucas van den Berg', role: 'Critique Culinaire', text: "“Leur pizza Mediterranean Marvel m'a transporté directement sur la côte grecque. Il est clair qu'ils sont passionnés par la qualité et l'authenticité, chaque bouchée offrant une explosion d'ingrédients frais et vibrants.”", image: "https://framerusercontent.com/images/th2iELXOzEME2cqduvrTZtJsM.png?width=896" },
    { id: '4', author: 'Sophie Martin', text: "“L'ambiance est incroyable et les cocktails sont délicieux. Je recommande vivement la pizza à la truffe !”", image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170" }
  ]
};

const DATA = {
  fr: DATAFR,
  en: {
    ...MENU_ITEMS_EN,
    REVIEWS: [
      { id: '1', author: 'Pizzas made with ❤️', text: "“Very good pizza. Light and delicious dough that is very easy to digest. Quality ingredients, the bacon and cheese were really excellent. All for a top-level quality/price ratio. Grazie mille!”", image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170" },
      { id: '2', author: 'Neapolitan Style!', text: "“Passing through Nice, discovered this Neapolitan pizzeria by chance: very very good address! The pizzas are generous and excellent. The staff is very friendly with customers. In short, certainly one of the best pizzerias in Nice!”", image: maradona },
      { id: '3', author: 'Lucas van den Berg', role: 'Restaurant Critic', text: "“Their Mediterranean Marvel pizza took me straight to the coast of Greece. It’s clear they’re passionate about quality and authenticity, with every bite delivering a burst of vibrant, fresh ingredients.”", image: "https://framerusercontent.com/images/th2iELXOzEME2cqduvrTZtJsM.png?width=896" },
      { id: '4', author: 'Sophie Martin', text: "“The atmosphere is incredible and the cocktails are delicious. I highly recommend the truffle pizza!”", image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170" }
    ]
  },
  it: {
    ...MENU_ITEMS_IT,
    REVIEWS: [
      { id: '1', author: 'Pizze fatte con ❤️', text: "“Pizza buonissima. Impasto leggero e goloso, digeribilissimo. Ingredienti di qualità, pancetta e formaggio davvero ottimi. Il tutto per un rapporto qualità/prezzo di alto livello. Grazie mille!”", image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170" },
      { id: '2', author: 'Alla napoletana!', text: "“Di passaggio a Nizza, ho scoperto per caso questa pizzeria napoletana: indirizzo molto molto buono! Le pizze sono generose ed eccellenti. Il personale è molto gentile con i clienti. Insomma, sicuramente una delle migliori pizzerie di Nizza!”", image: maradona },
      { id: '3', author: 'Lucas van den Berg', role: 'Critico Gastronomico', text: "“La loro pizza Mediterranean Marvel mi ha portato direttamente sulla costa greca. È chiaro che sono appassionati di qualità e autenticità, con ogni morso che offre un'esplosione di ingredienti vivaci e freschi.”", image: "https://framerusercontent.com/images/th2iELXOzEME2cqduvrTZtJsM.png?width=896" },
      { id: '4', author: 'Sophie Martin', text: "“L'atmosfera è incredibile e i cocktail sono deliziosi. Consiglio vivamente la pizza al tartufo!”", image: "https://framerusercontent.com/images/2GmzZQcJVmUPxETW8ubgALmfc.jpg?width=1170" }
    ]
  }
};

export const getData = (lang: string) => {
  return DATA[lang as keyof typeof DATA] || DATA['en'];
};