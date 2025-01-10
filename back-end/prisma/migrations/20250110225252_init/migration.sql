/*
  Warnings:

  - You are about to drop the column `urlImage` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryAddress` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryNumber` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `saleDate` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Sale` table. All the data in the column will be lost.
  - The primary key for the `SaleProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `SaleProduct` table. All the data in the column will be lost.
  - You are about to drop the column `saleId` on the `SaleProduct` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url_image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delivery_address` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delivery_number` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `SaleProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sale_id` to the `SaleProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_userId_fkey";

-- DropForeignKey
ALTER TABLE "SaleProduct" DROP CONSTRAINT "SaleProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "SaleProduct" DROP CONSTRAINT "SaleProduct_saleId_fkey";

-- DropIndex
DROP INDEX "Sale_userId_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "urlImage",
ADD COLUMN     "url_image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "deliveryAddress",
DROP COLUMN "deliveryNumber",
DROP COLUMN "saleDate",
DROP COLUMN "totalPrice",
DROP COLUMN "userId",
ADD COLUMN     "delivery_address" TEXT NOT NULL,
ADD COLUMN     "delivery_number" TEXT NOT NULL,
ADD COLUMN     "sale_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "total_price" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SaleProduct" DROP CONSTRAINT "SaleProduct_pkey",
DROP COLUMN "productId",
DROP COLUMN "saleId",
ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD COLUMN     "sale_id" INTEGER NOT NULL,
ADD CONSTRAINT "SaleProduct_pkey" PRIMARY KEY ("sale_id", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_user_id_key" ON "Sale"("user_id");

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleProduct" ADD CONSTRAINT "SaleProduct_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleProduct" ADD CONSTRAINT "SaleProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
