import Post from './Post';
import './styles/main';
import './styles/less';

import * as d3 from "d3";

d3.select('h1').style('color', 'green');
d3.selectAll('p').style('color', () => {
    return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
});