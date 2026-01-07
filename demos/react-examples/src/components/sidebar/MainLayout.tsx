import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import routes from '../../router/routes';

console.log(routes)
const MainLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ccc' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {routes.map(({ path, name }) => (
              <li key={path} style={{ margin: '10px 0' }}>
                <NavLink 
                  to={path} 
                  style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none'
                  })}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
