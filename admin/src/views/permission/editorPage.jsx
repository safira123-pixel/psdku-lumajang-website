import React from 'react';
import TypingCard from '@/components/TypingCard'
const GuestPage = () => {
   const cardContent = `This page can only be accessed by admin and editor roles, guest roles cannot see`
   return (
     <div className="app-container">
       <TypingCard title='editor page' source={cardContent}/>
     </div>
   );
}
 
export default GuestPage;