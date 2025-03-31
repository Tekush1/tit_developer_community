import React from 'react';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Events } from '../components/Events';
import { Mentors } from '../components/Mentors';
import { HallOfFame } from '../components/HallOfFame';
import { Join } from '../components/Join';

export const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Events />
      <Mentors />
      <HallOfFame />
      <Join />
    </>
  );
};