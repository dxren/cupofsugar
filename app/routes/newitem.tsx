import { redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { FormEvent, useRef } from "react";
import sugar from "~/img/sugar.png";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export async function action({
    request,
}: ActionFunctionArgs) {
    const body = await request.formData();

    const addItem = () => {
        const data = {
            itemName: body.get('itemName'),
            itemDescription: body.get('itemDescription'),
            uploadImage: body.get('uploadImage'),
        }
        console.log("Item added", data);
    };

    addItem()

    return redirect("/success")
}



export default function newItem() {

    return (
        <Form method="post">
            <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", textAlign: "left", paddingLeft: "40px" }}>
                <br />
                <div className="flex flex-row">
                    <div className="w-8" style={{ fontSize: "1.2rem" }}> Add New Item </div>
                </div>
                <br />
                <div style={{ textAlign: "left", maxWidth: "300px" }}>
                    <label htmlFor="itemName" style={{ marginBottom: "5px" }}>Item Name:</label>
                    <div style={{ textAlign: "left", maxWidth: "300px", maxHeight: "500px", border: "1px solid #000", borderRadius: "5px" }}>
                        <input type="text" name="itemName" placeholder="Item Name" required></input>
                    </div>
                </div>
                <div style={{ textAlign: "left", maxWidth: "300px" }}>
                    <label htmlFor="itemDescription">Item Description:</label>
                    <div style={{ textAlign: "left", maxWidth: "300px", maxHeight: "500px", border: "1px solid #000", borderRadius: "5px" }}>
                        <input type="text" name="itemDescription" placeholder="Describe your item" ></input>
                    </div>
                </div>
                <div style={{ textAlign: "left", maxWidth: "300px" }}>
                    <label htmlFor="uploadImage">Upload Image</label>
                    <div style={{ textAlign: "left", maxWidth: "300px", maxHeight: "500px", border: "1px solid #000", borderRadius: "5px" }}>
                        <input type="text" name="uploadImage" placeholder="Upload Image URL" ></input>
                    </div>
                    <div style={{ textAlign: "left", marginTop: "10px" }}>
                        <button type="submit" style={{ border: "1px solid #000", borderRadius: "5px", backgroundColor: "#ccc", padding: "3px 10px" }}>Add Item</button>
                    </div>
                    <footer style={{ position: "fixed", bottom: 0, left: 0, width: "100%", background: "#f5f5f5", padding: "10px 0", textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={sugar} style={{ width: "80px", height: "80px" }} alt="Sugar" />
                        </div>
                    </footer>
                </div>
            </div>
        </Form>
    );
}

