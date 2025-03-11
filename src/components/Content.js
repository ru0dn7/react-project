import React from 'react';
import {Routes, Route} from 'react-router-dom';
import routes from '../config/Page-route.js';

function Content() {

    return (
        <article id="content">
            <h2 className='hidden'>본문콘텐츠</h2>
            <Routes>
            {
                routes.map((route, index) => {
                    return (
                        <Route 
                            key={index} 
                            path={route.path} 
                            element={<route.component />}
                            exact >
                        </Route>
                    )
                })
            }
            </Routes>   
        </article>   
    );
  }

  export default Content;