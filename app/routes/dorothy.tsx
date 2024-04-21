import { ActionFunctionArgs } from "@remix-run/node";
import ItemGrid from "./components/ItemGrid";
import NewItemModal from "./components/NewItemModal";
import { CreateItem } from "~/service/item";



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

    return null;
}

export default function Dorothy() {

    return (
        <div>
            <h1>Dorothy</h1>
            <p>Hi, I'm Dorothy! I'm a software engineer and I love to code. I'm currently learning how to use Remix and I'm excited to build some cool projects with it.</p>
            <div className="flex flex-col items-center">
                <ItemGrid />
                <NewItemModal />
            </div>
        </div>
    )
}