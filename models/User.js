module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
 });

//   User.associate = (models) => {
//     User.hasMany(models.blogposts,
//       { foreignKey: 'userId', as: 'user' });
// };
  return User;
};