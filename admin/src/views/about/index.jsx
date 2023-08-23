import React from "react";
import TypingCard from "@/components/TypingCard";
import wechat from "@/assets/images/wechat.jpg";
import reward from "@/assets/images/reward.jpg";
const About = () => {
   const cardContent = `
     <p>Hello everyone, I am a hot-blooded person. </p>
     <p>A code farmer under Zhongnan Mountain, under the tutelage of Taoist Wang Chongyang, loves coding, advocates the spirit of open source, and is willing to share. </p>
     <p>In 2005, he served in the Langya Special Brigade of the Southeast Theater of the Chinese People's Liberation Army as a sniper. </p>
     <p>In 2008, he was invited by Russia's Alpha Special Forces to teach in the first brigade of the special forces to teach its members the theory of socialism with Chinese characteristics and Mao Zedong Thought. </p>
     <p>In 2011, he ran for the US President and lost the election, so he was disheartened, put aside all honors, and lived in seclusion at the foot of Zhongnan Mountain. </p>
     <p>In 2015, entrusted by Taoist priest Wang Chongyang to develop an incense management system for Taoist temples, he became addicted to IT and couldn't extricate himself. </p>
     <p>Like tossing and playing with machines, pursuing new technologies. </p>
     <p>The following is my WeChat, welcome to tree (tree) new (new) style (bee) with my friends! ! ! </p>
     <p>If you think this project is helpful to you, please appreciate it. </p>
     <p>Your appreciation is the driving force for me to keep moving forward! </p>
     <p>Ps: Recently, a lot of friends added me to WeChat to ask me some questions, but they didn’t even give me a star after asking, so I’m so sorry~~~</p>
     <p>Please give me a star, thank you~~</p>
     <img src="${wechat}" alt="wechat" style="height:550px"/>
     <img src="${reward}" alt="reward" style="height:550px"/>
   `;
   return (
     <div className="app-container">
       <TypingCard title="About the author" source={cardContent} />
     </div>
   );
};

export default About;