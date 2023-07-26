/*
  Warnings:

  - You are about to drop the column `token` on the `Emails` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Emails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Emails` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Emails_token_key";

-- AlterTable
ALTER TABLE "Emails" DROP COLUMN "token",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Emails_email_key" ON "Emails"("email");
