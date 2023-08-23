import React from 'react';
import TypingCard from '@/components/TypingCard'
const Doc = () => {
   const cardContent = `
     Please poke here for the author's blog <a href="https://nlrx-wjc.github.io/Blog/" target="_blank">Blog that is difficult to cool and warm blood</a>.
     Everyone is welcome to communicate with me. If you think the blog is good, please give the blog a star.
   `
   return (
     <div className="app-container">
       <TypingCard title='Author Blog' source={cardContent}/>
     </div>
   );
}

export default Doc;