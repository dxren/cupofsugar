import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import Footer from "./components/Footer";
import { CreateItem } from "~/service/item";

interface InputFieldProps{
  name: string,
  label: string,
  placeholder: string,
  type?: string,
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("SUBMITTED THE FORM")
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
    userId: "clv8uen4w0000iaqot8072h99",
})
  
  return redirect("/success");
}

// Form input component
const InputField = ({ name, label, placeholder, type = "text" }:InputFieldProps) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500"
    />
  </div>
);

export default function NewItem() {
  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow">
      <Form method="post" className="space-y-6">
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          Add New Item
        </h1>
        <InputField
          name="itemName"
          label="Item Name:"
          placeholder="Item Name"
        />
        <InputField
          name="itemDescription"
          label="Item Description:"
          placeholder="Describe your item"
        />
        <InputField
          name="uploadImage"
          label="Upload Image:"
          placeholder="Upload Image URL"
          type="url"
        />
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Item
        </button>
      </Form>
      <Footer />
    </div>
  );
}
