import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Post from './models/post.js';

dotenv.config();

const posts = Array.from({ length: 10 }, (_, index) => ({
  authorName: `Test Author ${index + 1}`,
  title: `Test Post ${index + 1}`,
  imageLink: `https://example.com/test-post-${index + 1}.jpg`,
  categories: ['Nature'],
  description: `Test description for post ${index + 1}`,
  isFeaturedPost: index < 5,
  timeOfPost: new Date(Date.now() - index * 1000),
}));

try {
  await mongoose.connect(process.env.MONGODB_URI);

  await Post.deleteMany({});
  await Post.insertMany(posts);

  console.log('Test data seeded successfully');
  console.log('Created 10 posts');
  console.log('Created 5 featured posts');

  await mongoose.disconnect();
} catch (error) {
  console.error('Failed to seed test data:', error);
  process.exit(1);
}
