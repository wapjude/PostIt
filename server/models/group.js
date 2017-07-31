export default (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    groupName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Group name must not be empty'
        },
      },
    },
    createdby: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
  // ,{
  //   classMethods: {
  //     associate: (models) => {
  //       // Groups.hasMany(models.Messages, {
  //       //   onDelete: 'CASCADE'
  //       // });
  //       // Groups.belongsToMany(models.Users, {
  //       //   through: models.userGroups,
  //       //   as: 'users',
  //       //   foreignKey: 'groupId'
  //       // });
  //     },
  //   },
  // }
);
  Groups.associate = (models) => {
   Groups.belongsToMany(models.Users, {
     through: 'userGroups',
     as: 'users',
     foreignKey: 'groupId'
   });
   Groups.hasMany(models.Messages, {
     onDelete: 'CASCADE'
   });
 };
  return Groups;
};
