import React from 'react';

import Card from './Card';

import '../assets/styles/components/SimilarListings.scss';

const SimilarListings2 = (photo, bed, bathroom, area) => (
  <div className='Cards'>
    <Card title='Tu Lugar ideal' photo='https://s3.amazonaws.com/assets.moveglobally.com/property_images/1505145/22581459/EB-ET5145.jpg?1584998904' />
    <Card title='Tu nueva casa' photo='https://s3.amazonaws.com/assets.moveglobally.com/property_images/1506800/22609739/EB-ET6800.jpg?1585106808'/>
    <Card title='Ya mudate' photo='https://s3.amazonaws.com/assets.moveglobally.com/property_images/1590982/23940245/EB-FC0982.jpg?1591402099' />
  </div>

);

export default SimilarListings2;
