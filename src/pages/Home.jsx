import React from 'react';
import Cover from '../components/Cover';
import Information from '../components/Information';
import Search from '../components/Search';
import Footer from '../components/Footer';
import SimilarListings from '../components/SimilarListings';
import SimilarListings2 from '../components/SimilarListings2';
import SimilarListings3 from '../components/SimilarListings3';
import Datos from '../hooks/UseState';

const Home = () => (
  <>
    <Datos />
    <Cover />
    <Search />
    <SimilarListings />
    <SimilarListings2 />
    <br/><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Te sugerimos ver</h2>
    <SimilarListings3 />
    <br/><br/>
    <Information title='Trabaja con nosotros' />
    <Footer title='Haz tus sueños una realidad' />
  </>
);

export default Home;
