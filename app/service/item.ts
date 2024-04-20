import type { Item } from '@prisma/client'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface SearchItemOptions {
  title: string;
  tags: string[];
  userId: string;
}

export async function ListItem(userId: string): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: {
      userId: userId,
    }
  })
  return items;
}

export async function CreateItem(item: Item): Promise<Item> {
  return prisma.item.create({
    data: item,
  });
}

export async function UpdateItem(newItem: Item): Promise<Item> {
  return prisma.item.update({
    data: newItem,
    where: {
      id: newItem.id,
    }
  })
}

export async function DeleteItem(itemID: string): Promise<boolean> {
  const res = await prisma.item.delete({
    where: {
      id: itemID,
    }
  });
  return (res.id || "" )!== "";
}