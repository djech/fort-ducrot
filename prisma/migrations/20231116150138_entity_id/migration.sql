/*
  Warnings:

  - The primary key for the `members` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `members` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `photo_id` column on the `members` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `photos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `photos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `author_id` column on the `photos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_photo_id_fkey";

-- DropForeignKey
ALTER TABLE "photos" DROP CONSTRAINT "photos_author_id_fkey";

-- AlterTable
ALTER TABLE "members" DROP CONSTRAINT "members_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "photo_id",
ADD COLUMN     "photo_id" INTEGER,
ADD CONSTRAINT "members_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "photos" DROP CONSTRAINT "photos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "author_id",
ADD COLUMN     "author_id" INTEGER,
ADD CONSTRAINT "photos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "members_photo_id_key" ON "members"("photo_id");

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_photo_id_fkey" FOREIGN KEY ("photo_id") REFERENCES "photos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
