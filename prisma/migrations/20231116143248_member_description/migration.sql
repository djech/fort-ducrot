/*
  Warnings:

  - You are about to drop the column `email` on the `members` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "members_email_key";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "email",
ADD COLUMN     "description" TEXT;
