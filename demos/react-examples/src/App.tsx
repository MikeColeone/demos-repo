import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/sidebar/MainLayout';
import routes from './router/routes';
// import Count from './examples/count-example'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path === '/' ? '' : path.slice(1)} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
    // <Count/>
  );
};



export default App;
