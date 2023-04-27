module.exports = (sequelize, Sequelize) => {
  const LayoutContent = sequelize.define('layoutContent', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    content_areas: {
      type: Sequelize.STRING,
    },
    content_style: {
      type: Sequelize.INTEGER,
    },
  })

  return LayoutContent;
};
