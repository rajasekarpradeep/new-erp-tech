import React from 'react';
import content from '../data/content.json';

const Header = () => {
  const { logo, navigation } = content.header;

  return (
    <header>
      <h1>FutureEdge</h1>
      <nav>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}><a href={item.link}>{item.name}</a></li>
          ))}
        </ul>
      </nav>
      <div className='login-nav'>
      <button className='primary-btn-no-bg'>Sign in</button>
      <button className='primary-btn-dark'>SIgn up</button>
      </div>
    </header>
  );
};

export default Header;
