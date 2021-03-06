const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false, tableName: 'Users',
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPosts, 
      { foreignKey: 'userId', as: 'BlogPosts' }); 
  };

  return user;
};

module.exports = User;