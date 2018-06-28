import React from 'react';
import Navigation from '../common/components/navigation';

const MainLayout = (props) => (
  <div>
    <Navigation />
    <main>
      <div className="container">
        {props.children}
      </div>
    </main>
  </div>
);

export default MainLayout;
