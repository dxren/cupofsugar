import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import ItemGrid from "./components/ItemGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Cup of Sugar" },
    { name: "description", content: "Welcome to Cup of Sugar!" },
  ];
};

const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="coffee" />
      {/* sun icon */}
      <svg
        className="swap-off fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
      {/* moon icon */}
      <svg
        className="swap-on fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
};

function Item({ item, onClick }) {
  return (
    <div className="p-4 border shadow rounded" onClick={() => onClick(item)}>
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

// export default function Index() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <ThemeToggle />
//       <h1>Welcome to Cup of Sugar</h1>

//     </div>
//   );
// }

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
        <div className="bg-red-500 text-5xl">TEXT HERE</div>
        <ItemGrid items={items} />;
      </div>
    );
  }
}
