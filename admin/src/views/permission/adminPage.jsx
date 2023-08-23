import React from 'react';
import TypingCard from '@/components/TypingCard'
const AdminPage = () => {
   const cardContent = `This page can only be accessed by the admin role, guest and editor roles cannot see`
   return (
     <div className="app-container">
       <TypingCard title='admin page' source={cardContent}/>
     </div>
   );
}
 
export default AdminPage;