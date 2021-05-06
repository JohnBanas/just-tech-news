const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');
//create associations

//user has many posts connected through
//Post foreign key 'user_id'
User.hasMany(Post, {
  foreignKey: 'user_id'
});

//Post only has one connection to User in this instance
//through foreign key 'user_id'
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

//connection between User & Post via
//Vote through foreign key 'user_id'
//Vote is referenced as 'voted_posts'
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

//connection between User & Post via
//Vote through foreign key 'user_id'
//Vote is referenced as 'voted_posts'
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

//Vote's one connection to User
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

//Vote's one connection to Post
Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

//User can have multiple Vote
User.hasMany(Vote, {
  foreignKey: 'user_id'
});

//Post can have multiple votes
Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };
