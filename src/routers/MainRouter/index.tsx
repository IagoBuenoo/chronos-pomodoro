import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { NotFound } from '../../pages/NotFound';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { Home } from '../../pages/Home';
import { History } from '../../pages/History';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/history/' element={<History />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
