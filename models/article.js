const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    designation: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    reference: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    marque: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    qtestock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prix: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    imageart: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    scatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'scategorie',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'article',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "scatID",
        using: "BTREE",
        fields: [
          { name: "scatID" },
        ]
      },
    ]
  });
};
