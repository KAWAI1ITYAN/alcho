import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/main-page/main-page';
import { AboutPage } from 'pages/about-page/about-page';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
};
