/*
  Warnings:

  - You are about to drop the column `sessionKey` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Item_userId_key";

-- DropIndex
DROP INDEX "User_sessionKey_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "sessionKey";

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
