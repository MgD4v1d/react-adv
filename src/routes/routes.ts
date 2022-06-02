import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


type JSXComponent = () => JSX.Element;


interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}


const Laz1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1'));
const Laz2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2'));
const Laz3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3'));

export const routes:Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Laz1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Laz2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Laz3,
        name: 'Lazy 3'
    },
];