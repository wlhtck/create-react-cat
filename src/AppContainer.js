import React from 'react';
import useCatApi from './hooks/useCatApi'

const AppContainer = ({Component}) => {
  const {requestCat, src, loading} = useCatApi();

  return (
    <Component src={src} loading={loading} onClickButton={requestCat} buttonText="Load Cat" />
  );
}

export default AppContainer;
