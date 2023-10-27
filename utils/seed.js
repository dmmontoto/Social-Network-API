const connection = require('./connection'); 
const { users, thoughts, reactions } = require('./data'); 
const { User, Thought, Reaction } = require('../models'); 

// Start the seeding runtime timer
console.time('seeding');

// Use the established connection for MongoDB
connection.once('open', async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();
    await Reaction.deleteMany();

    // Seed users
    const createdUsers = await User.insertMany(users);

    // Assign users to thoughts and reactions
    const thoughtsWithUsers = thoughts.map((thought, index) => ({
      ...thought,
      username: createdUsers[index % createdUsers.length].username,
    }));

    const reactionsWithUsers = reactions.map((reaction, index) => ({
      ...reaction,
      username: createdUsers[index % createdUsers.length].username,
    }));

    // Seed thoughts and reactions
    const createdThoughts = await Thought.insertMany(thoughtsWithUsers);
    const createdReactions = await Reaction.insertMany(reactionsWithUsers);

    console.log('Database seeded successfully!');
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
});
