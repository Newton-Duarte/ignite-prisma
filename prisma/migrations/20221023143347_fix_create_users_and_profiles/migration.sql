/*
  Warnings:

  - You are about to drop the column `userEmail` on the `profiles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profile_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userEmail_fkey";

-- DropIndex
DROP INDEX "profiles_userEmail_key";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "userEmail",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "profile_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_profile_id_key" ON "users"("profile_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
