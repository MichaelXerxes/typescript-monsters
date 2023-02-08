import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card.component';
import userEvent from '@testing-library/user-event';

test('Test Card- checking functions', () => {
    render(<Card monster={{id:'6',name:'SomeName',email:'someEmail@.com'}}/>);
   


  });


  test('Test Card - button',async()=>{
    render(<Card monster={{id:'6',name:`https://robohash.org/6?set=set2&size=180x180`,email:'w'}}/>);
    const user=userEvent;
    
  const cardButton = screen.getByRole(`https://robohash.org/6?set=set2&size=180x180`, {
    name: 'SomeName',
  });
  await user.click(cardButton);
  expect(cardButton).toBeCalled();
  });