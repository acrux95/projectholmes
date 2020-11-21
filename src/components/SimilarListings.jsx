import React from 'react';

import Card from './Card';

import '../assets/styles/components/SimilarListings.scss';

const SimilarListings = (photo, bed, bathroom, area) => (
  <div className='Cards'>
    <Card title='Ideal para vacacionar' photo='https://s3.amazonaws.com/assets.moveglobally.com/property_images/1705441/26225318/EB-FN5441.jpeg?1598971758' />
    <Card title='Excelente Oportunidad' photo='https://cdn.casasyterrenos.com/img_casas/0a874304-488c-4346-b0d2-a3428a721682-Casas-Venta-Fraccionamiento-Residencial-Santa-Sofia-Culiacan-Sinaloa-3325784.jpeg'/>
    <Card title='Te gustará vivir aquí' photo='https://s3.amazonaws.com/assets.moveglobally.com/property_images/1529703/24523080/EB-EV9703.JPG?1593558199' />
  </div>

);

export default SimilarListings;
