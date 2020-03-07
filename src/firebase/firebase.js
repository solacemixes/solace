

import React, { createContext } from 'react';
import app from 'firebase/app';

import config from './config';


// Creation of the context.

const FirebaseContext = createContext(null);
export { FirebaseContext };


// Creation of the provider

const FirebaseProvider = props => {


  const { children } = props;

  if (!app.apps.length) {
    app.initializeApp(config);
  }

  return (
    <FirebaseContext.Provider value={app}>
      { children }
    </FirebaseContext.Provider>
  )

}

export default FirebaseProvider;