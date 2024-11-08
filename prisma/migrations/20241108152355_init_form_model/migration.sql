-- CreateTable
CREATE TABLE "ConfirmationForm" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "attendance" TEXT NOT NULL,
    "adultsCount" TEXT NOT NULL,
    "childrenCount" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConfirmationForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationForm_email_key" ON "ConfirmationForm"("email");
