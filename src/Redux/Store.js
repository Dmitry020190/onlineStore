import Jacket01 from "../Img/main/Jackets/Jackets_1/Jacket_1.jpeg";
import Jacket01_1 from "../Img/main/Jackets/Jackets_1/Jacket_1.1.jpeg";
import Jacket01_2 from "../Img/main/Jackets/Jackets_1/Jacket_1.2.jpeg";
import Jacket01_3 from "../Img/main/Jackets/Jackets_1/Jacket_1.3.jpeg";
import Jacket02 from "../Img/main/Jackets/Jackets_2/Jacket_2.jpeg";
import Jacket02_1 from "../Img/main/Jackets/Jackets_2/Jacket_2.1.jpeg";
import Jacket02_2 from "../Img/main/Jackets/Jackets_2/Jacket_2.2.jpeg";
import Jacket03 from "../Img/main/Jackets/Jackets_3/Jacket_3.jpeg";
import Jacket03_1 from "../Img/main/Jackets/Jackets_3/Jacket_3.1.jpeg";
import Jacket03_2 from "../Img/main/Jackets/Jackets_3/Jacket_3.2.jpeg";
import Jacket04 from "../Img/main/Jackets/Jackets_4/Jacket_4.jpeg";
import Jacket04_1 from "../Img/main/Jackets/Jackets_4/Jacket_4.1.jpeg";
import Jacket04_2 from "../Img/main/Jackets/Jackets_4/Jacket_4.2.jpeg";
import Jacket04_3 from "../Img/main/Jackets/Jackets_4/Jacket_4.3.jpeg";
import Jacket04_4 from "../Img/main/Jackets/Jackets_4/Jacket_4.4.jpeg";
import Jacket05 from "../Img/main/Jackets/Jackets_5/Jacket_5.jpeg";
import Jacket05_1 from "../Img/main/Jackets/Jackets_5/Jacket_5.1.jpeg";
import Jacket05_2 from "../Img/main/Jackets/Jackets_5/Jacket_5.2.jpeg";
import Jacket05_3 from "../Img/main/Jackets/Jackets_5/Jacket_5.3.jpeg";
import Jacket05_4 from "../Img/main/Jackets/Jackets_5/Jacket_5.4.jpeg";
import Bag01 from "../Img/main/Bags/Bag_1.jpeg";
import Bag02 from "../Img/main/Bags/Bag_2.jpeg";
import Bag03 from "../Img/main/Bags/Bag_3.jpeg";
import Footwear01 from "../Img/main/Footwear/Footwear_1.jpeg";
import Footwear02 from "../Img/main/Footwear/Footwear_2.jpeg";
import Footwear03 from "../Img/main/Footwear/Footwear_3.jpeg";
import Footwear04 from "../Img/main/Footwear/Footwear_4.jpeg";
import Parks01 from "../Img/main/Parks/Parks01.jpeg";
import Parks02 from "../Img/main/Parks/Parks02.jpeg";
import Parks03 from "../Img/main/Parks/Parks03.jpeg";
import Parks04 from "../Img/main/Parks/Parks04.jpeg";
import Logo from "../Img/main/logo.jpeg";

const Store = {
  _state: {
    
    main: {
      jacket: [
        {
          id: 1,
          ItemPhoto: [`${Jacket01}`, `${Jacket01_1}`, `${Jacket01_2}`, `${Jacket01_3}`,`${Logo}`],
          name: "DAVID OUTWEAR KINGDOM",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: 94.95,
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 2,
          ItemPhoto: [`${Jacket02}`, `${Jacket02_1}`, `${Jacket02_2}`, `${Logo}`],
          name: "DAVID OUTWEAR BONANZA",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: 94.95,
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 3,
          ItemPhoto: [`${Jacket03}`, `${Jacket03_1}`, `${Jacket03_2}`, `${Logo}`],
          name: "DAVID OUTWEAR BOULEVARD",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: 94.95,
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 4,
          ItemPhoto: [`${Jacket04}`, `${Jacket04_1}`, `${Jacket04_2}`, `${Jacket04_3}`, `${Jacket04_4}`, `${Logo}`],
          name: "DAVID OUTWEAR TITAN",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: 94.95,
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 5,
          ItemPhoto: [`${Jacket05}`, `${Jacket05_1}`, `${Jacket05_2}`, `${Jacket05_3}`, `${Jacket05_4}`, `${Logo}`],
          name: "DAVID OUTWEAR SALVADOR",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: 94.95,
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },
      ],

      parks: [
        {
          id: 1,
          Item: `${Parks01}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "WALL PARKA",
          review: "review",
          cost: 94.95,
          currency: "USD",  
        },

        {
          id: 2,
          Item: `${Parks02}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "INFERNO FLEECE PARKA",
          review: "review",
          cost: 94.95,
          currency: "USD",  
        },

        {
          id: 3,
          Item: `${Parks03}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "SURVIVAL COTTON JACKET",
          review: "review",
          cost: 94.95,
          currency: "USD",  
        },

        {
          id: 1,
          Item: `${Parks04}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "WINTER FLEECE JACKET",
          review: "review",
          cost: 89.95,
          currency: "USD",  
        }
      ],

      bag: [
        {
          id: 6,
          Item: `${Bag01}`,
          name: "DAVID OUTWEAR LARGE",
          typeOfClothing: "CAPACITY BAG",
          review: "review",
          cost: 84.95,
          currency: "USD",
        },

        {
          id: 7,
          Item: `${Bag02}`,
          name: "DAVID OUTWEAR OFFICE BAG",
          typeOfClothing: "OUTWEAR OFFICE BAG",
          review: "review",
          cost: 79.95,
          currency: "USD",
        },

        {
          id: 8,
          Item: `${Bag03}`,
          name: "DAVID OUTWEAR TRAVEL LEATHER BAG",
          typeOfClothing: "OUTWEAR OFFICE BAG",
          review: "review",
          cost: 79.95,
          currency: "USD",
        },
      ],

      shoes: [
        {
          id: 9,
          Item: `${Footwear01}`,
          name: "DAVID OUTWEAR COMFORTABLE DAILY SHOES",
          cost: 69.95,
          currency: "USD",
        },

        {
          id: 10,
          Item: `${Footwear02}`,
          name: "DAVID OUTWEAR SNAKE EMBOSSED DRESS SHOES",
          cost: 69.95,
          currency: "USD",
        },

        {
          id: 11,
          Item: `${Footwear03}`,
          name: "DAVID OUTWEAR OXFORD LEATHER SHOES",
          cost: 69.95,
          currency: "USD",
        },

        {
          id: 14,
          Item: `${Footwear04}`,
          name: "DAVID OUTWEAR CLASSIC LEATHER MOCCASINS",
          cost: 59.95,
          currency: "USD",
        },
      ],        
    },
  }
}

export default Store;