import React from 'react';

import ButtonMenu from '../components/ButtonMenu';
import ActionButton from '../components/ActionButton';
import StateMenu from '../components/StateMenu';
import CityMenu from '../components/CityMenu';
import TypeOfAdd from '../components/TypeOfAdd';
import CostMenu from '../components/CostMenu';
import HomeMenu from '../components/HomeMenu';

import { COLOMBIA, MEXICO } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='Search'>
    <h1>¡¡Busca tu Holmes ideal ahora!!</h1>
    <div className='Search__Filter'>
      <ButtonMenu description='Busca por País' label='País' id='country' type='country'/>
      <StateMenu description='Busca por Estado o Departamento' label='Estado' id='state' type='state'/>
      <CityMenu description='Busca por Ciudad' label='Ciudad' id='city' type='city' />
    </div>
    <div className='Search__Filter'>
      <TypeOfAdd description='¿Buscas Comprar o Rentar?' label='Venta o renta' id='sell' type='sell'/>
      <HomeMenu description='¿Que tipo de Holmes buscas?' label='Tipo' id='home' type='home'/>
      <CostMenu description='Rango de Precio' label='Costo' id='cost' type='cost'/>
    </div>
    <ActionButton text='Buscar' />
    <br/><br/>
    <h2>Tenemos estas Opciones para ti</h2>
  </section>

);

export default Search;
