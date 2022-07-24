import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Grid from '../Components/Grid';
import Header from '../Components/Header';
import Products from '../Components/Products';
import SectionTitle from '../Components/UI/title/SectionTitle';

const Main = function(props) {

  return (
    <div>
      <div className={props.classScroll}>
        <Header
          displayBack={{display:'none'}}
          displayRules={{display:'inline-block'}}
          displayCart={{marginLeft:'20px'}}/>
        <SectionTitle title='Категории' subtitle={{firstRow: 'Выберите категорию'}}/>
        <Grid/>
        <Products/>
      
      </div>
      <Footer classFooter={props.classFooter} classContact={props.classContact}/>
    </div>  
  )}

export default Main