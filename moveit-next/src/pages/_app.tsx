import { useState } from 'react';

import '../styles/globals.css'

import { ChallegenProvider } from '../contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallegenProvider>
      <Component {...pageProps} />
    </ChallegenProvider>
  );
}

export default MyApp
