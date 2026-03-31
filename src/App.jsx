
import React from "react";
import Card from "./components/Card";
import "./App.css"

const App = () => {

  return (
    <>
      <div className="mobile-phone">

        <div className="heading">
          <span className="category">Mobile Phone</span>
          <span className="view-more">view More</span>
        </div>

        {/* cards container */}
        <div className="card-container">

          <Card
            src='https://images.olx.com.pk/thumbnails/596451505-800x600.webp'
            price='53,000'
            about='Iphone Xs Max PTA Approved - 64GB'
            location=' saddar, karachi'
            time='1 day ago'
          />

          <Card
            src='https://images.olx.com.pk/thumbnails/606357246-800x600.webp'
            price='53,000' 
            about='Iphone Xs Max PTA Approved - 64GB'
            location=' saddar, karachi'
            time='1 day ago' 
          />
        
          <Card
            src='https://images.olx.com.pk/thumbnails/606282237-800x600.webp' price='53,000' svg='dil' about='Iphone Xs Max PTA Approved-64GB'
            location=' saddar, karachi'
            time='1 day ago'
          />
      
          <Card
            src='https://images.olx.com.pk/thumbnails/606260259-800x600.webp' price='53,000' svg='dil' about='Iphone Xs Max PTA Approved-64GB'
            location=' saddar, karachi'
            time='1 day ago' 
          />
        </div>

      </div>
    </>
  );
}

export default App
