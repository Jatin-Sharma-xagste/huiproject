import gsap from 'gsap';

const circle = document.getElementById('circle');
/* window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

 
if (circle) {
  // The element with ID 'circle' exists, so you can safely access and modify its style property
  circle.style.top = `${yValue}px`;
  circle.style.left = `${xValue}px`;
} else {
  // Handle the case where the element doesn't exist, e.g., show an error message or perform some other action
  console.error("Element with ID 'circle' not found");
}
}); */

 window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;
    circle.style.top=`${yValue}px`;
    circle.style.left=`${xValue}px`;
});


/* const btn = document.querySelector('#btn');
const svgelem = document.querySelector('svg');

var tl = gsap.timeline();



window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
});


btn.addEventListener('mousemove', function(){
    tl.reverse();
    setTimeout(function(){
        svgelem.classList.add('animate');
    }, 3500)
});







tl
.from('#wrapper', {
    duration: 4,
    scale: .7,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#whitestrip', {
    duration: 2,
    width: 0,
    ease: 'Expo.easeInOut',
}, '-=2.5')
.from('#blackcard', {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=1')
.from('#linelem', {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=1')
.from('#linelem .line', {
    duration: 2,
    width: 0,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=1')
.from('#blackcard p', {
    duration: 1.2,
    y: 30,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=2')
.from('#sideelem', {
    duration: 2,
    x: 30,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=2') */
/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */


console.log(circle); // Check what 'circle' contains

// Rest of your code
/* Check HTML Structure: Verify that the HTML structure and the placement of elements in your HTML file match your expectations. Elements with IDs should be defined before the JavaScript code that references them.

By carefully examining the timing and conditions under which the circle element is selected and accessed, you should be able to identify the root cause of the issue and resolve the "Cannot read properties of null (reading 'style')" error.
 */




