import _ from 'lodash';
import {add, subtract} from './math';
import "./main.scss";
import Logo from "./node_logo.svg";

let lodashOutput = document.getElementById("lodash-output");
let addOutput = document.getElementById("add-output");
let subtractOutput = document.getElementById("subtract-output");
let imageContainer = document.createElement('div');
let myLogo = new Image();

lodashOutput.innerHTML = _.join(['Hello', 'from', 'the', 'lodash', 'library.'], ' ');
addOutput.innerHTML = add(2,2);
subtractOutput.innerHTML = subtract(2,1);

myLogo.src = Logo;
imageContainer.appendChild(myLogo);
document.body.appendChild(imageContainer);
