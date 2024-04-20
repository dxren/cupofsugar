import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ListItem } from "~/service/item";
import ImageGrid from "./components/ItemGrid";
import { Item } from "@prisma/client";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    // getItems
    if(params.userId) {
        try{
            const items = await ListItem(params.userId);
            return json({ items });
        } catch(e) {
            return redirect("/error")
        }
    }
    return redirect("/404")
  };

export default function Pantry() {
    const { items } = useLoaderData<typeof loader>();

    return (
        <div>
            <ImageGrid items={items} />
        </div>
    )
}