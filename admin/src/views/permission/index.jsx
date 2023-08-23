import React from "react";
import TypingCard from "@/components/TypingCard";
export default () => {
   const cardContent = `
     The menu permissions and routing permissions in this project are assigned based on the user's role. There are three built-in roles in this project, namely:
    
     <ul>
       <li>Administrator admin: This role has the authority of all menus and routes in the system. </li>
       <li>Editor editor: This role has the authority of all menus and routes in the system except the user management page. </li>
       <li>Visitor guest: This role only has the permissions of three pages: Dashboard, Author Blog, Authorization Test and About Author. </li>
     </ul>
    
     You can dynamically add or delete users and edit an existing user through the <a href="#/user">User Management</a> page, such as modifying its permissions.
   `;
   return (
     <div className="app-container">
       <TypingCard title="Permission Description" source={cardContent} />
     </div>
   );
};