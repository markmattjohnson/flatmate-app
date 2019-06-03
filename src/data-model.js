import uid from "uid";

export const shoppingItems = [
  {
    id: uid(),
    name: "Banane",
    image: "images/banana.jpg",
    category: "fruit"
  },
  {
    id: uid(),
    name: "Brot",
    image: "images/bread.jpg",
    category: "bread"
  },
  {
    id: uid(),
    name: "Strawberry",
    image: "images/strawberries.jpg",
    category: "fruit"
  },
  {
    id: uid(),
    name: "Milch",
    image: "images/rocher.jpg",
    category: "dairy"
  }
];

export const categories = [
  {
    id: "fruit",
    name: "Frucht"
  },
  {
    id: "bread",
    name: "Brot"
  },
  {
    id: "dairy",
    name: "Milch"
  }
];

/*
const [cards, setCards] = useState([
  {
    name: "Ananas",
    id: uid(),
    image: "./images/pineapple.jpg"
  },
  {
    name: "Apfel",
    id: uid(),
    image: "./images/apple.jpg"
  },
  {
    name: "Brot",
    id: uid(),
    image: "./images/bread.jpg"
  },
  {
    name: "Aprikose",
    id: uid(),
    image: "./images/apricot.jpg"
  },
  {
    name: "Blaubeere",
    id: uid(),
    image: "./images/blueberries.jpg"
  },
  {
    name: "Avokado",
    id: uid(),
    image: "./images/avocado.jpg"
  },
  {
    name: "Banane",
    id: uid(),
    image: "./images/banana.jpg"
  },
  {
    name: "Birne",
    id: uid(),
    image: "./images/pear.jpg"
  },
  {
    name: "Rhabarber",
    id: uid(),
    image: "./images/rhuburb.jpg"
  },
  {
    name: "Gurke",
    id: uid(),
    image: "./images/cucumber.jpg"
  },
  {
    name: "Erdbeere",
    id: uid(),
    image: "./images/strawberries.jpg"
  },
  {
    name: "watermelon",
    id: uid(),
    image: "./images/watermelon.jpg"
  },
  {
    name: "Nutella",
    id: uid(),
    image: "./images/nutella.jpg"
  },
  {
    name: "Kaffeebohnen",
    id: uid(),
    image: "./images/coffeebeans.jpg"
  },
  {
    name: "Apfelfächer",
    id: uid(),
    image: "./images/apfelfächer.jpg"
  }
]);
*/
