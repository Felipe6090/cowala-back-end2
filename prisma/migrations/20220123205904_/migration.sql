-- CreateTable
CREATE TABLE "Conversions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "originalCoin" TEXT NOT NULL,
    "conversionCoin" TEXT NOT NULL,
    "originalValue" TEXT NOT NULL,
    "finalValue" TEXT NOT NULL
);
