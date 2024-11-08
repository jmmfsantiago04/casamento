/*
  Warnings:

  - A unique constraint covering the columns `[fullName]` on the table `ConfirmationForm` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationForm_fullName_key" ON "ConfirmationForm"("fullName");
