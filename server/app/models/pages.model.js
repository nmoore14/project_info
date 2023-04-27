module.exports = (sequelize, Sequelize) => {
  const Page = sequelize.define('page', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    style: {
      type: Sequelize.TEXT,
    },
  })

  return Page;
};
