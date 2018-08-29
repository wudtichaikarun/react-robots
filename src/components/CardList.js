import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log('cardlist');
  return (
    <div>
      {robots.map(users => (
        <Card
          key={users.id}
          id={users.id}
          name={users.name}
          email={users.email}
        />
      ))}
    </div>
  );
};

export default CardList;
