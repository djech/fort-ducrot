/*
  Warnings:

  - You are about to drop the column `photo_id` on the `members` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_photo_id_fkey";

-- DropIndex
DROP INDEX "members_photo_id_key";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "photo_id",
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
