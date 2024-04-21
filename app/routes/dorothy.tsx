import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import ItemGrid from "./components/ItemGrid";
import NewItemModal from "./components/NewItemModal";
import { CreateItem, ListItem } from "~/service/item";
import { Link, useLoaderData } from "@remix-run/react";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import sugar from "~/img/sugar.png";
import { authenticator } from "~/service/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  console.log("SUBMITTED THE FORM");
  const body = await request.formData();
  const data = {
    itemName: body.get("itemName")?.toString(),
    itemDescription: body.get("itemDescription")?.toString(),
    uploadImage: body.get("uploadImage")?.toString(),
  };
  console.log("Item added", data);

  const item = await CreateItem({
    title: data.itemName || "",
    description: data.itemDescription || "",
    tag: [],
    available: true,
    imageUrl: data.uploadImage || "",
    userId: "dorothy",
  });

  return null;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const items = await ListItem("dorothy");

  console.log(items);
  const user = await authenticator.isAuthenticated(request);

  return json({ items, user });
};

export default function Dorothy() {
  const data = useLoaderData<typeof loader>();
  const isAuthed = data.user?.userId === "dorothy";
  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            Cup of Sugar
          </Link>
          <Link to="/">
            <img src={sugar} alt="Cup of Sugar" className="w-14 h-14" />
          </Link>
        </div>
        <div className="navbar-end">
          {isAuthed || <Link to="/login" className="btn w-20 btn-secondary mr-8">
            Log In
          </Link>}
          <ThemeToggle className="mr-4" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-base-100">
        <h1 className="text-4xl font-bold text-center text-base-content mb-8">
          Dorothy's Stuff
        </h1>
        <p className="py-4">
          Hi, I'm Dorothy! I'm a software engineer and I love to code. I'm
          currently learning how to use Remix and I'm excited to build some cool
          projects with it.
        </p>
        <div className="py-8 flex flex-col items-center">
          <ItemGrid items={data.items} />
          <div className="my-4" />
          {isAuthed && <NewItemModal />}
        </div>
      </div>
    </div>
  );
}
