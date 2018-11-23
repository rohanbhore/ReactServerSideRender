import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
export default (props) => {

    const content = renderToString(<Home toDoData={props}/>);
    console.log(content);
    return `
        <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(props).replace(
                    /</g,
                    '\\u003c'
                  )}
            </script>
            <script src="bundle.js"></script>
            
        </body>
        </html>
     `;
};