import React from 'react';
import SlideShow from './SlideShow';
import UpcomingAuction from './UpcomingAuction';
import PrivateSales from './PrivateSales';
import Antique from './Antique';
import Furniture from './Furniture';
import Collectibles from './Collectibles';

function Home({ auctions, privateSale, antiQue, furniTure, collecTible  }) {
  return (
    <div>
      {/* <Breadcrumb/> */}
      <SlideShow />
      <UpcomingAuction auctions={auctions} />
      <PrivateSales privateSale={privateSale}/>
      <Antique antiQue={antiQue}/>
      <Furniture furniTure={furniTure}/>
      <Collectibles collecTible={collecTible}/>
    </div>
  );
}

export default Home;
