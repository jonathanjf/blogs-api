const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  const userId = user.dataValues.id;
  return userId;
};

const createBlogPost = async (title, categoryIds, content, user) => {
  const userEmail = user.email;
  const userId = await getUserByEmail(userEmail);
  await BlogPost.create({ title, categoryIds, content, userId });
  const createdPost = await BlogPost.findOne({ where: { title } });
  return createdPost;
};

const getAllPosts = async (_user) => {
  const allPosts = await BlogPost.findAll({ 
    include: [
    { model: User, 
      as: 'user',
      attributes: 
        { exclude: ['password'] } }, 
    { model: Category,
      as: 'categories', 
      through: { attributes: [] } },
  ] });
  return allPosts;
};

module.exports = {
  createBlogPost,
  getAllPosts,
};