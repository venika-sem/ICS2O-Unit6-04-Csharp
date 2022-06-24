/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-HTML/sw.js", {
    scope: "/ICS2O-Unit6-04-HTML/",
  })
}

window.onload = function() {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')
  console.log(radius)

  // process
  const volume = (4/3)* Math.PI * Math.pow(radius, 3)
  const dimension = "<ul>\n<li>radius = " + radius + "</li>"

  // output
  document.getElementById('dimension').innerHTML = dimension
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' mm³'
}