import React from 'react';

import Card from './Card';

import '../assets/styles/components/SimilarListings.scss';

const SimilarListings3 = (photo, bed, bathroom, area) => (
  <div className='Cards'>
    <Card title='Ven a vivir aquí' photo='https://s3.amazonaws.com/assets.moveglobally.com/property_images/1508693/22640329/EB-ET8693.jpg?1585251637' />
    <Card title='Tu nueva casa te espera' photo='https://s3.amazonaws.com/assets.moveglobally.com/property_images/1520706/22834933/EB-EV0706.JPG?1586389797'/>
    <Card title='Serás felíz aquí' photo='https://cdn.casasyterrenos.com/img_casas/casas-venta-altabrisa-residencial-mazatlan-sinaloa-3277612-5dd5f051375ef.jpg' />
  </div>

);

export default SimilarListings3;
