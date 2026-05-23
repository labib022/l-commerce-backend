const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Category = require('./models/Category');

dotenv.config();

const seedProducts = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected');

  // Categories নাও
  const categories = await Category.find({});
  const electronics = categories.find(c => c.name === 'Electronics')._id;
  const clothing = categories.find(c => c.name === 'Clothing')._id;
  const books = categories.find(c => c.name === 'Books')._id;
  const home = categories.find(c => c.name === 'Home & Kitchen')._id;
  const sports = categories.find(c => c.name === 'Sports')._id;
  const beauty = categories.find(c => c.name === 'Beauty & Health')._id;

  const products = [
    {
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with A17 Pro chip, titanium design',
      price: 999,
      discountPrice: 949,
      stock: 50,
      category: electronics,
      images: [{ url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500', public_id: 'iphone15' }]
    },
    {
      name: 'Samsung Galaxy S24',
      description: 'Samsung flagship phone with AI features and stunning display',
      price: 899,
      discountPrice: 849,
      stock: 30,
      category: electronics,
      images: [{ url: 'https://images.unsplash.com/photo-1706439136316-e4b0b3a1e7c0?w=500', public_id: 'samsung_s24' }]
    },
    {
      name: 'MacBook Pro M3',
      description: 'Apple MacBook Pro with M3 chip, 16GB RAM, 512GB SSD',
      price: 1999,
      discountPrice: 1899,
      stock: 20,
      category: electronics,
      images: [{ url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500', public_id: 'macbook' }]
    },
    {
      name: 'Sony WH-1000XM5',
      description: 'Industry leading noise canceling wireless headphones',
      price: 399,
      discountPrice: 349,
      stock: 75,
      category: electronics,
      images: [{ url: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500', public_id: 'sony_headphone' }]
    },
    {
      name: "Men's Cotton T-Shirt",
      description: 'Premium quality cotton t-shirt for everyday wear',
      price: 25,
      discountPrice: 20,
      stock: 200,
      category: clothing,
      images: [{ url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', public_id: 'tshirt' }]
    },
    {
      name: "Women's Summer Dress",
      description: 'Light and comfortable summer dress in multiple colors',
      price: 45,
      discountPrice: 35,
      stock: 150,
      category: clothing,
      images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500', public_id: 'dress' }]
    },
    {
      name: 'Nike Air Max 270',
      description: 'Comfortable running shoes with air cushioning technology',
      price: 150,
      discountPrice: 120,
      stock: 100,
      category: sports,
      images: [{ url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', public_id: 'nike' }]
    },
    {
      name: 'Yoga Mat Premium',
      description: 'Non-slip premium yoga mat with carrying strap',
      price: 35,
      discountPrice: 28,
      stock: 200,
      category: sports,
      images: [{ url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500', public_id: 'yoga_mat' }]
    },
    {
      name: 'The Alchemist',
      description: 'Bestselling novel by Paulo Coelho about following your dreams',
      price: 15,
      stock: 500,
      category: books,
      images: [{ url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', public_id: 'alchemist' }]
    },
    {
      name: 'Atomic Habits',
      description: 'Tiny changes, remarkable results by James Clear',
      price: 18,
      discountPrice: 15,
      stock: 300,
      category: books,
      images: [{ url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500', public_id: 'atomic_habits' }]
    },
    {
      name: 'Air Fryer 5.5L',
      description: 'Digital air fryer with 8 cooking presets, easy to clean',
      price: 89,
      discountPrice: 75,
      stock: 60,
      category: home,
      images: [{ url: 'https://images.unsplash.com/photo-1648650395575-1e26bbbe9f1b?w=500', public_id: 'air_fryer' }]
    },
    {
      name: 'Face Serum Vitamin C',
      description: 'Brightening vitamin C serum for glowing skin',
      price: 29,
      discountPrice: 24,
      stock: 180,
      category: beauty,
      images: [{ url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500', public_id: 'serum' }]
    }
  ];

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('✅ 12 Products seeded successfully!');
  process.exit();
};

seedProducts().catch(err => {
  console.error(err);
  process.exit(1);
});