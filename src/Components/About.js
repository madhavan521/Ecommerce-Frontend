import React from 'react';
import Navabar from './Navabar';

const About = () => {
  return (
    <div>
    <Navabar />
    <div className=" mx-auto p-4">  
                <h1 className="text-3xl font-bold mb-4">About Me</h1>  
                <p className="mb-4">  
                    Hi, I'm C. Madhavan, the creator of Just E-Commerce. I have a passion for technology and a desire to provide a great online shopping experience.  
               
                 </p>  
               
                <h2 className="text-2xl font-semibold mb-2">Technology Used</h2>  
                <ul className="list-disc list-inside mb-4">  
                    <li><strong>MongoDB</strong>: For flexible data storage.</li>  
                    <li><strong>Express.js</strong>: To handle server-side logic.</li>  
                    <li><strong>React</strong>: For a dynamic user interface.</li>  
                    <li><strong>Node.js</strong>: For scalable server-side applications.</li>  
                </ul>  
                
                <p className="mt-4">Thank you for visiting  E-Commerce!</p>  
            </div>  
      
    </div>
  );
}

export default About;
