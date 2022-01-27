import React from 'react';
import GlobalStyle from '../components/GlobalStyle';


const MyApp = ({ Component, pageProps}) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
