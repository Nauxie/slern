import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// ---------------------------------------------
export default class CustomDocument extends Document {
    render() {
        const divStyle = {
            margin: '100px', // note the capital 'W' here
            background: 'red',
        };
        return (<html lang='en-US'>
            <Head>
            </Head>
            <body className='hello'>
                <Main />
                <NextScript />
                <style jsx global>{`
                /* Other global styles such as 'html, body' etc... */
                .hello {
                    background-color: green;
                }
                body {
                background-color: green;
                }
          `}</style>
            </body>
        </html >)
    }
}