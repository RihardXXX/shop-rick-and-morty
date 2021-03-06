import React from 'react';

import { ShopContextConsumer } from '../shop-context';

const WithServicesShop = () => (Wrapped) => {
  return (props) => {
    return (
      <ShopContextConsumer>
        {(shopservice) => {
          return <Wrapped {...props} shopservice={shopservice} />;
        }}
      </ShopContextConsumer>
    );
  };
};

export default WithServicesShop;
