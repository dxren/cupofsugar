import { Item } from "@prisma/client";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import ItemGrid from "./components/ItemGrid";
import ThemeToggle from "./components/ThemeToggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Cup of Sugar" },
    { name: "description", content: "Welcome to Cup of Sugar!" },
  ];
};

export default function Index() {
  {
    const [items] = useState([
      {
        id: 1,
        name: "Camera",
        description: "Bouncy castle taking up closet space.",
        imageUrl:
          "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/bouncy-castle.jpg",
      },
      {
        id: 2,
        name: "Dehumidifier",
        description: "A gently used dehumidifier.",
        imageUrl:
          "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/dehumidifier.jpg",
      },
      {
        id: 3,
        name: "Drill",
        description: "Nice Dewalt drill",
        imageUrl:
          "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/drill.jpg",
      },
      {
        id: 4,
        name: "Eloquent JS book",
        description: "Javascript programming book",
        imageUrl:
          "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/eloquentjs.jpg",
      },
      {
        id: 5,
        name: "Tent",
        description: "tent",
        imageUrl:
          "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/tent.jpg",
      },
    ]);

    return (
      <div>
        <ThemeToggle />
        <h1 className="text-5xl text-center p-3">Welcome to Cup of Sugar</h1>
      </div>
    );
  }
}
