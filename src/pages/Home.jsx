import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <main>
        <h1>Welcome to Thoughtly</h1>
        <p>Your AI-powered productivity tool.</p>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;