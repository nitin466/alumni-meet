import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Layout from './Layout';
import { routes } from './constents';
import Loader from './Components/Loader';

const RenderRoutes = props => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index)=>{
                    const Component = route.component;
                     return (
                        <Route key={index} path={route.path} exact={route.exact} element={
                            <Layout data={route}>
                                <Helmet>
                                <meta charSet="utf-8" />
                                <title>{route.title}</title>
                                </Helmet>
                                <Suspense fallback={<Loader/>}>
                                    <Component/>
                                </Suspense>
                            </Layout>
                        }/>
                     )   
                })}
            </Routes>
        </BrowserRouter>
    )
}
export default RenderRoutes;