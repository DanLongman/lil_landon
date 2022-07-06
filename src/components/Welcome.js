import React, { useState, useEffect } from 'react';
// import galleryImagesData from './data/gallery_images.json'

const Welcome = () => {
    const [galleryImagesData, setGalleryImagesData] = useState([]);
    // Load the menu links data from the API Gateway
    const loadGalleryImagesData = async () => {
        // Query the APO Gateway
        const resp = await fetch('https://8j8ej1ioj3.execute-api.us-east-1.amazonaws.com/Production/galleryImages');
        let jsonData = await resp.json();
        // Assign response data to our state variable
        setGalleryImagesData(jsonData);
    }

    useEffect(() => {
        loadGalleryImagesData();

    }, []);
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {
            galleryImagesData.map((image) =>
            <img className={image.className} src={image.src} alt={image.alt} />
            )
          }
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
      </article>
    </div>
  );
}

export default Welcome;