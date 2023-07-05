import { SearchProductDto } from "../DTO";
import { Product } from "../product.model";

export function createProductFixture(): Product {
  return {
    id: 14,
    title: "Intelligent Bronze Mouse",
    price: 595,
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    images: [
      "https://picsum.photos/640/640?r=5484",
      "https://picsum.photos/640/640?r=2583",
      "https://picsum.photos/640/640?r=4811"
    ],
    creationAt: new Date("2023-07-04T02:12:35.000Z"),
    updatedAt: new Date("2023-07-04T02:12:35.000Z"),
    category: {
      id: 3,
      name: "Furniture",
      image: "https://picsum.photos/640/640?r=7847",
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z")
    }
  }
}

export function createProductsFixture(): Product[] {
  return [
    {
      id: 14,
      title: "Intelligent Bronze Mouse",
      price: 595,
      description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      images: [
        "https://picsum.photos/640/640?r=5484",
        "https://picsum.photos/640/640?r=2583",
        "https://picsum.photos/640/640?r=4811"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 20,
      title: "Intelligent Concrete Bike",
      price: 851,
      description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      images: [
        "https://picsum.photos/640/640?r=4400",
        "https://picsum.photos/640/640?r=1614",
        "https://picsum.photos/640/640?r=8226"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 21,
      title: "Elegant Concrete Towels",
      price: 644,
      description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      images: [
        "https://picsum.photos/640/640?r=4008",
        "https://picsum.photos/640/640?r=1384",
        "https://picsum.photos/640/640?r=8793"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T11:53:42.000Z"),
      category: {
        id: 4,
        name: "Shoes",
        image: "https://picsum.photos/640/640?r=9906",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 22,
      title: "Sleek Rubber Soap",
      price: 819,
      description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      images: [
        "https://picsum.photos/640/640?r=6348",
        "https://picsum.photos/640/640?r=455",
        "https://picsum.photos/640/640?r=9635"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T12:24:22.000Z"),
      category: {
        id: 5,
        name: "Others",
        image: "https://picsum.photos/640/640?r=4533",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 23,
      title: "Elegant Cotton Mouse",
      price: 234,
      description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      images: [
        "https://picsum.photos/640/640?r=9852",
        "https://picsum.photos/640/640?r=1912",
        "https://picsum.photos/640/640?r=4979"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 24,
      title: "Incredible Fresh Shirt",
      price: 925,
      description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      images: [
        "https://picsum.photos/640/640?r=11",
        "https://picsum.photos/640/640?r=2683",
        "https://picsum.photos/640/640?r=69"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 4,
        name: "Shoes",
        image: "https://picsum.photos/640/640?r=9906",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 25,
      title: "Electronic Soft Towels",
      price: 902,
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      images: [
        "https://picsum.photos/640/640?r=8419",
        "https://picsum.photos/640/640?r=9664",
        "https://picsum.photos/640/640?r=5358"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 1,
        name: "Clothe",
        image: "https://picsum.photos/640/640?r=7126",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T05:11:48.000Z")
      }
    },
    {
      id: 27,
      title: "Awesome Steel Hat",
      price: 620,
      description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      images: [
        "https://picsum.photos/640/640?r=5699",
        "https://picsum.photos/640/640?r=822",
        "https://picsum.photos/640/640?r=6129"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 28,
      title: "Tasty Concrete Keyboard",
      price: 808,
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      images: [
        "https://picsum.photos/640/640?r=9843",
        "https://picsum.photos/640/640?r=5922",
        "https://picsum.photos/640/640?r=3518"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 4,
        name: "Shoes",
        image: "https://picsum.photos/640/640?r=9906",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 29,
      title: "Ergonomic Steel Sausages",
      price: 623,
      description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      images: [
        "https://picsum.photos/640/640?r=2552",
        "https://picsum.photos/640/640?r=2652",
        "https://picsum.photos/640/640?r=8473"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 4,
        name: "Shoes",
        image: "https://picsum.photos/640/640?r=9906",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 32,
      title: "Ergonomic Steel Fish",
      price: 440,
      description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      images: [
        "https://picsum.photos/640/640?r=3034",
        "https://picsum.photos/640/640?r=4313",
        "https://picsum.photos/640/640?r=7083"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 1,
        name: "Clothe",
        image: "https://picsum.photos/640/640?r=7126",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T05:11:48.000Z")
      }
    },
    {
      id: 33,
      title: "Practical Bronze Pizza",
      price: 575,
      description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      images: [
        "https://picsum.photos/640/640?r=2834",
        "https://picsum.photos/640/640?r=3729",
        "https://picsum.photos/640/640?r=5019"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 34,
      title: "Bespoke Cotton Shirt",
      price: 156,
      description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      images: [
        "https://picsum.photos/640/640?r=7457",
        "https://picsum.photos/640/640?r=8990",
        "https://picsum.photos/640/640?r=8328"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 1,
        name: "Clothe",
        image: "https://picsum.photos/640/640?r=7126",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T05:11:48.000Z")
      }
    },
    {
      id: 35,
      title: "Fantastic Soft Cheese",
      price: 604,
      description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      images: [
        "https://picsum.photos/640/640?r=1406",
        "https://picsum.photos/640/640?r=1983",
        "https://picsum.photos/640/640?r=5166"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 36,
      title: "Practical Fresh Sausages",
      price: 217,
      description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      images: [
        "https://picsum.photos/640/640?r=8005",
        "https://picsum.photos/640/640?r=9914",
        "https://picsum.photos/640/640?r=9464"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 2,
        name: "Electronics",
        image: "https://picsum.photos/640/640?r=5305",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 37,
      title: "Refined Concrete Pants",
      price: 400,
      description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      images: [
        "https://picsum.photos/640/640?r=8499",
        "https://picsum.photos/640/640?r=1601",
        "https://picsum.photos/640/640?r=9774"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 2,
        name: "Electronics",
        image: "https://picsum.photos/640/640?r=5305",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 38,
      title: "Handmade Frozen Bacon",
      price: 115,
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      images: [
        "https://picsum.photos/640/640?r=1081",
        "https://picsum.photos/640/640?r=63",
        "https://picsum.photos/640/640?r=5725"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 39,
      title: "Awesome Soft Mouse",
      price: 531,
      description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      images: [
        "https://picsum.photos/640/640?r=388",
        "https://picsum.photos/640/640?r=1916",
        "https://picsum.photos/640/640?r=6547"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 2,
        name: "Electronics",
        image: "https://picsum.photos/640/640?r=5305",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 40,
      title: "Intelligent Fresh Mouse",
      price: 698,
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      images: [
        "https://picsum.photos/640/640?r=1200",
        "https://picsum.photos/640/640?r=5871",
        "https://picsum.photos/640/640?r=8149"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 3,
        name: "Furniture",
        image: "https://picsum.photos/640/640?r=7847",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 41,
      title: "Elegant Frozen Bacon",
      price: 973,
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      images: [
        "https://picsum.photos/640/640?r=6586",
        "https://picsum.photos/640/640?r=2968",
        "https://picsum.photos/640/640?r=2845"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 2,
        name: "Electronics",
        image: "https://picsum.photos/640/640?r=5305",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    },
    {
      id: 42,
      title: "Luxurious Soft Hat",
      price: 492,
      description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      images: [
        "https://picsum.photos/640/640?r=2367",
        "https://picsum.photos/640/640?r=1685",
        "https://picsum.photos/640/640?r=6307"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 1,
        name: "Clothe",
        image: "https://picsum.photos/640/640?r=7126",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T05:11:48.000Z")
      }
    },
    {
      id: 43,
      title: "Sleek Bronze Fish",
      price: 706,
      description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      images: [
        "https://picsum.photos/640/640?r=1930",
        "https://picsum.photos/640/640?r=5014",
        "https://picsum.photos/640/640?r=350"
      ],
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z"),
      category: {
        id: 2,
        name: "Electronics",
        image: "https://picsum.photos/640/640?r=5305",
        creationAt: new Date("2023-07-04T02:12:35.000Z"),
        updatedAt: new Date("2023-07-04T02:12:35.000Z")
      }
    }
  ];
}

export function getProductsByCategoryIdFixture(id: number, offset: number, limit: number): Product[] {
  return createProductsFixture()
    .filter(product => product.category.id === id)
    .slice(offset, offset + limit);
}

export function getProductsBySearch(search: SearchProductDto): Product[] {
  const products = createProductsFixture()
    .filter((product) => {
      return !search.title ||
        product.title.toLowerCase().includes(search.title?.toLowerCase())
    });

  return products;
}

export function getProductByIdFixture(id: number): Product {
  const products = createProductsFixture().filter(product => product.id === id);

  return products[0] ?? null;
}