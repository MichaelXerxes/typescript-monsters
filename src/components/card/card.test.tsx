import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card.component';
import userEvent from '@testing-library/user-event';

test('Test Card- checking functions', () => {
   // render(<Card monster={{id:'6',name:'SomeName',email:'someEmail@.com'}} number={}/>);

   
  });


  test('Test Card - button',async()=>{
    render(<Card monster={{id:'6',name:`https://robohash.org/6?set=set2&size=180x180`,email:'w'}}/>);
    const user=userEvent;
    
  const cardButtonDown = screen.getByRole('button', {
    name: 'Hello Button',
  });
  const cardButtonTop = screen.getByRole('button', {
    name: 'https://robohash.org/6?set=set2&size=180x180',
  });
  
  //await user.click(cardButton);
  expect(cardButtonDown).toBeEnabled();
  expect(cardButtonTop).toBeEnabled();
  expect(cardButtonTop).toHaveAccessibleName('https://robohash.org/6?set=set2&size=180x180');
 
  });
  test('Test Card - incrising value ',async()=>{
    render(<Card monster={{id:'6',name:`https://robohash.org/6?set=set2&size=180x180`,email:'w'}}/>);
    const user=userEvent;
    const paragraphDisplayName=screen.queryByRole('paragraph',{
        name:'0', 
      });
      expect(screen.getByText('0')).toBeInTheDocument();

      const cardButtonDown = screen.getByRole('button', {
        name: 'Hello Button',
      });
      user.click(cardButtonDown);
     expect(screen.getByText('1')).toBeInTheDocument();
     user.click(cardButtonDown);
     expect(screen.getByText('2')).toBeInTheDocument();
     user.click(cardButtonDown);
     expect(screen.getByText('3')).toBeInTheDocument();
    // checking current value for var number
    const newParagraphDisplayName=screen.getByText('3');

      expect(newParagraphDisplayName).toBeInTheDocument();
  });
  test('Test Card - card hover',()=>{
    render(<Card monster={{id:'6',name:`https://robohash.org/6?set=set2&size=180x180`,email:'w'}}/>);
    
});