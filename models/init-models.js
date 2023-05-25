var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _categorie = require("./categorie");
var _scategorie = require("./scategorie");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var scategorie = _scategorie(sequelize, DataTypes);

  scategorie.belongsTo(categorie, { as: "categorie", foreignKey: "categorieID"});
  categorie.hasMany(scategorie, { as: "scategories", foreignKey: "categorieID"});
  article.belongsTo(scategorie, { as: "scat", foreignKey: "scatID"});
  scategorie.hasMany(article, { as: "articles", foreignKey: "scatID"});

  return {
    article,
    categorie,
    scategorie,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
