import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProduct from '@/components/home/FeaturedProduct';
import RecentProduct from '@/components/home/RecentProduct';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <RecentProduct />
    </>
  );
}
