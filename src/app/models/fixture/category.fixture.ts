import { Category } from "../category.model";

export function createCategoriesFixture(): Category[] {
  return [
    {
      id: 1,
      name: "Clothe",
      image: "https://picsum.photos/640/640?r=7126",
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T05:11:48.000Z")
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://picsum.photos/640/640?r=5305",
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z")
    },
    {
      id: 3,
      name: "Furniture",
      image: "https://picsum.photos/640/640?r=7847",
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z")
    },
    {
      id: 4,
      name: "Shoes",
      image: "https://picsum.photos/640/640?r=9906",
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z")
    },
    {
      id: 5,
      name: "Others",
      image: "https://picsum.photos/640/640?r=4533",
      creationAt: new Date("2023-07-04T02:12:35.000Z"),
      updatedAt: new Date("2023-07-04T02:12:35.000Z")
    },
    {
      id: 40,
      name: "Janes Categoy",
      image: "https://placeimg.com/640/480/any",
      creationAt: new Date("2023-07-04T07:00:33.000Z"),
      updatedAt: new Date("2023-07-04T07:00:33.000Z")
    }
  ];
}

export function createCategoryById(id: number): Category {
  return {
    id,
    name: "Janes Categoy",
    image: "https://placeimg.com/640/480/any",
    creationAt: new Date("2023-07-04T07:00:33.000Z"),
    updatedAt: new Date("2023-07-04T07:00:33.000Z")
  }
}