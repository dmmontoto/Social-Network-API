const users = [
    {
      username: 'David-Montoto',
      email: 'dmontoto@outlook.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'Michael-Davidson',
      email: 'miked@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'Jeffery-Smith',
      email: 'smithjr@icloud.com',
      thoughts: [],
      friends: [],
    },
  ];
  
  const thoughts = [
    {
      thoughtText: 'This api is very interesting in my opinion',
      username: 'David-Montoto',
      reactions: [],
    },
    {
      thoughtText: 'I am enjoying my UCSD Extension bootcamp.',
      username: 'David-Montoto',
      reactions: [],
    },
    {
      thoughtText: 'My favorite sunsets are in San Diego',
      username: 'Michael-Davidson',
      reactions: [],
    },
    {
      thoughtText: 'Main Chick is better than Chic Fil A.',
      username: 'Jeffery-Smith',
      reactions: [],
    },
  ];
  
  const reactions = [
    {
      reactionBody: 'Nice thought!',
      username: 'Michael-Davidson',
    },
    {
      reactionBody: 'I agree!',
      username: 'David-Montoto',
    },
    {
      reactionBody: 'Interesting.',
      username: 'Jeffery-Smith',
    },
    {
      reactionBody: 'Great point!',
      username: 'Jeffery-Smith',
    },
  ];
  
  module.exports = { users, thoughts, reactions };
  