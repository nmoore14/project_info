module.exports = (sequelize, Sequelize) => {
  const Layout = sequelize.define('layout', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    layout_content: {
      type: Sequelize.INTEGER,
    },
  })

  return Layout;
};
