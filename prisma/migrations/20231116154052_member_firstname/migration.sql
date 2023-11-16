/*
  Warnings:

  - You are about to drop the column `fistname` on the `members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "fistname",
ADD COLUMN     "firstname" TEXT,
ALTER COLUMN "name" DROP NOT NULL;
