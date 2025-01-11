import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
async function main() {
  const users = await prisma.user.createMany({
   data: [
      {
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04', //md5 - --adm2@21!!--
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6', // md5 - fulana@123
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '1c37466c159755ce1fa181bd247cb925', // md5 - $#zebirita#$
        role: 'customer',
      },
    ],
    skipDuplicates: true,
  });
  const products = await prisma.product.createMany({
      data: [
        {
          id: 1,
          name: 'Skol Lata 250ml',
          price: 2.20,
          urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
        },
        {
          id: 2,
          name: 'Heineken 600ml',
          price: 7.50,
          urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
        },
        {
          id: 3,
          name: 'Antarctica Pilsen 300ml',
          price: 2.49,
          urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
        },
        {
          id: 4,
          name: 'Brahma 600ml',
          price: 7.50,
          urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
        },
        {
          id: 5,
          name: 'Skol 269ml',
          price: 2.19,
          urlImage: 'http://localhost:3001/images/skol_269ml.jpg',
        },
        {
          id: 6,
          name: 'Skol Beats Senses 313ml',
          price: 4.49,
          urlImage:
            'httphttp://localhost:3001/images/skol_beats_senses_313ml.jpg',
        },
        {
          id: 11,
          name: 'Stella Artois 275ml',
          price: 3.49,
          urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
        },
        {
          id: 10,
          name: 'Skol Beats Senses 269ml',
          price: 3.57,
          urlImage: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
        },
        {
          id: 9,
          name: 'Becks 600ml',
          price: 8.89,
          urlImage: 'http://localhost:3001/images/becks_600ml.jpg',
        },
        {
          id: 8,
          name: 'Brahma Duplo Malte 350ml',
          price: 2.79,
          urlImage:
            'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
        },
        {
          id: 7,
          name: 'Becks 330ml',
          price: 4.99,
          urlImage: 'http://localhost:3001/images/becks_330ml.jpg',
        },
      ]}
    );
    console.log(users, products);
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
 