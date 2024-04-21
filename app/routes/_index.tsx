import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import ItemGrid from "./components/ItemGrid";
import ThemeToggle from "./components/ThemeToggle";
import sugar from "~/img/sugar2.png";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Cup of Sugar" },
    { name: "description", content: "Welcome to Cup of Sugar!" },
  ];
};

export default function Index() {
  {
    return (
      <div>
        <div className="navbar bg-primary text-primary-content">
          <div className="navbar-start">
            <button className="btn btn-ghost text-xl">Cup of Sugar</button>
            <img src={sugar} alt="Cup of Sugar" className="w-14 h-14" />
          </div>
          <div className="navbar-end">
            <Link to="/login" className="btn w-20 btn-secondary mr-8">
              Log In
            </Link>
            <ThemeToggle className="mr-4" />
          </div>
        </div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={sugar} className="max-w-sm rounded-lg" />
            <div>
              <h1 className="text-5xl font-bold">We love sharing.</h1>
              <p className="pt-6">
                The only problem is: we have too many things to share.
              </p>
              <p className="pb-6">
                Cup of Sugar is a simple link to share with your friends.
              </p>
              <Link to="/login" className="btn btn-primary">
                Get Started
              </Link>
              <div className="my-4" />
              <Link to="/dorothy" className="btn btn-primary">
                My Stuff
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
