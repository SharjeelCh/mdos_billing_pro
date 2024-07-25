import React from 'react';
import Card from './Card';
import '../Styles/CardList.css';
import { useNavigate } from 'react-router-dom';

const CardList = () => {
  const navigation=useNavigate();
    const handleClick = (title) => {
        navigation('/Appointment')
      }
    const cards = [
        {
          image: 'https://via.placeholder.com/200x150?text=Consult+Online+Now',
          title: 'Consult Online Now',
          description: 'Instantly connect with Specialists through Video call.',
        },
        {
          image: 'https://via.placeholder.com/200x150?text=In-Clinic+Appointments',
          title: 'In-Clinic Appointments',
          description: 'Book an In-Person visit to doctor\'s clinic.',
        },
        {
          image: 'https://via.placeholder.com/200x150?text=Laboratory+Tests',
          title: 'Laboratory Tests',
          description: 'Avail Exclusive discounts on lab tests.',
        },
        {
          image: 'https://via.placeholder.com/200x150?text=Procedures+%26+Surgeries',
          title: 'Procedures & Surgeries',
          description: 'Plan your surgeries at discounted rates.',
        },
        {
          image: 'https://via.placeholder.com/200x150?text=BOLO+Health',
          title: 'BOLO Health',
          description: 'Family planning and reproductive health services for youth.',
        },
      ];

  return (
    <div className="card-list">
    {cards.map((card, index) => (
      <Card
        key={index}
        image={card.image}
        title={card.title}
        description={card.description}
        onClick={() => handleClick(card.title)}
      />
    ))}
  </div>
  );
};

export default CardList;
