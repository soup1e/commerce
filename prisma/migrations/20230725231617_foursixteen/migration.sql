-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER;

-- CreateTable
CREATE TABLE "Emails" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "Emails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emails_token_key" ON "Emails"("token");
