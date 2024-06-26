// Routes
// GET /item?user_id=1234
//    List all item from one user
//  return: Item[]
//
// POST /item - json = Item object
//    Create item
//  return: Item
//
// PATCH /item - json = Item object
//    Update item
//  return: Item
//
//
// DELETE /item?item_id=1234
//    Delete item
//  return: true/false (was deleted?)
//
// If error: response JSON will have this format:
// { 'error': 'error is abcd' }

import { Item } from '@prisma/client';
import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { CreateItem, ListItem, SearchItemOptions, UpdateItem, DeleteItem } from "~/service/item";

function getParamFromURL(request: Request, param: string ): string {
  let { searchParams } = new URL(request.url);
  const result =  searchParams.getAll(param);
  if (result.length === 0) {
    return "";
  }
  return result[0];
}

// get
export async function loader( request : ActionFunctionArgs) {
  return await work(request);
}

// everything else
export async function action(request : ActionFunctionArgs) {
  return await work(request);
}

async function work({ request }: ActionFunctionArgs) {
  try {
    switch (request.method) {
      case "GET": {
        // list item
        const userID = getParamFromURL(request, "user_id")
        if (userID === "") {
          return json({error: "user_id parameter missing"})
        }
        const item = await ListItem(userID as string);
        return json(item);
      }
      case "POST": {
        // create item
        let item = await request.json() as unknown as Item;
        item = await CreateItem(item);
        return json(item);
      }
      case "PATCH": {
        let item = await request.json() as unknown as Item;
        item = await UpdateItem(item);
        return json(item);
      }
      case "DELETE": {
        const itemID = getParamFromURL(request, "item_id")
        if (itemID === "") {
          return json({error: "item_id parameter missing"})
        }
        const wasDeleted = await DeleteItem(itemID);
        return json({
          success: wasDeleted,
        });
      }
    }
  } catch (error: any) {
    return json({error: error.toString()}, { status: 500 })
  }
}
