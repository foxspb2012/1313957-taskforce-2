import {PrismaClient, Status} from '@prisma/client';
import {faker} from '@faker-js/faker/locale/ru';

const prisma = new PrismaClient();

const MOCK_COUNT = 10;
const SUB_MOCK_COUNT = 5;

const userIds = faker.helpers.uniqueArray(
  faker.database.mongodbObjectId,
  MOCK_COUNT
);

const categories: { title: string }[] = faker.helpers.uniqueArray(
  () => ({
    title: faker.random.word().toLowerCase(),
  }),
  SUB_MOCK_COUNT
);

const tags: { title: string }[] = faker.helpers.uniqueArray(
  () => ({
    title: faker.random.word().toLowerCase(),
  }),
  SUB_MOCK_COUNT
);

const tagsOnTasks: { taskId: number, tagId: number, assignedBy: string }[] = faker.helpers.uniqueArray(
  () => ({
    tagId: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    taskId: faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    assignedBy: faker.lorem.word().toLowerCase(),
  }),
  SUB_MOCK_COUNT
);

const cities = ['Москва', 'Санкт-Петербург', 'Владивосток'];

async function fillDb() {
  await prisma.category.createMany({
    data: categories,
  });
  console.info('Categories were created');

  await prisma.tag.createMany({
    data: tags,
  });
  console.info('Tags were created');

  const categoryIds = await prisma.category.findMany({select: {id: true}});

  for (let i = 1; i <= MOCK_COUNT; i++) {
    const currentUserIds = faker.helpers.shuffle(userIds);

    await prisma.task.upsert({
      where: {id: i},
      update: {},
      create: {
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        category: {
          connect: faker.helpers.arrayElement(categoryIds),
        },
        picture: faker.helpers.maybe(() => faker.image.imageUrl(), {
          probability: 0.5,
        }),
        status: faker.helpers.maybe(
          () => Status[faker.helpers.arrayElement(Object.keys(Status))],
          {probability: 0.7}
        ),
        authorId: currentUserIds[0],
        address: `${faker.helpers.arrayElement(
          cities
        )} ${faker.address.streetAddress()}`,
        dueDate: faker.helpers.maybe(() => faker.date.soon(5), {
          probability: 0.3,
        }),
        price: faker.helpers.maybe(() => Number(faker.commerce.price()), {
          probability: 0.7,
        }),
        comments: {
          createMany: {
            data: Array.from(
              {length: Number(faker.random.numeric())},
              () => ({
                text: faker.lorem.sentence(),
                userId: faker.helpers.arrayElement(currentUserIds.slice(1)),
              })
            ),
          },
        },
        responses: {
          createMany: {
            data: Array.from(
              {length: Number(faker.random.numeric())},
              () => ({
                text: faker.lorem.sentence(),
                price: faker.helpers.maybe(
                  () => Number(faker.commerce.price()),
                  {
                    probability: 0.7,
                  }
                ),
                userId: faker.helpers.arrayElement(currentUserIds.slice(1)),
              })
            ),
          },
        },
      },
    });
  }

  await prisma.tagsOnTasks.createMany({
    data: tagsOnTasks,
  });
  console.info('Tags on tasks were created');

  console.info('🤘️ Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect;
    process.exit(1);
  });
