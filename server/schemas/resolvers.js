const { User } = require("../models");
const {signToken }= require("../utils/auth");
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      try {
        if (context.user) {
          const userData = await User.findById(context.user._id).select('-__v -password');
          return userData;
        } else {
          throw new AuthenticationError('Not logged in');
        }
      } catch (err) {
        console.error(err);
        throw new Error('An error occurred while fetching user data');
      }
    },
  },




    
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, {input },context) => {
  try{
if(context.user){

  const updatedUser = await User.findByIdAndUpdate(
    { _id:context.user._id},
    { $push: {savedBooks: input} },
    { new: true }
  );

  return updatedUser;
}
    
  }catch(err){
console.error(err)
  
  }

},

    
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
          );
          
          return updatedUser;
        }
        
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  };
  
  module.exports = resolvers;
