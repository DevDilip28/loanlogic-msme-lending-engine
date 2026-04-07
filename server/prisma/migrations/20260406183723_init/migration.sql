-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pan" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "monthlyRevenue" DOUBLE PRECISION NOT NULL,
    "loanAmount" DOUBLE PRECISION NOT NULL,
    "tenure" INTEGER NOT NULL,
    "decision" TEXT NOT NULL,
    "creditScore" INTEGER NOT NULL,
    "reasons" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
