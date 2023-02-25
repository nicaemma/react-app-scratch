const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});

const seed = async () => {
  try {
    await db.sync({ force: true });

    const monstera = await Plant.create({
      name: Monstera,
      light: medium,
      toxic: yes,
    });
    console.log("Seeded!");
  } catch (err) {
    console.log("Seeding unsuccessful");
    console.log(err.message);
  }
};

db.seed();
