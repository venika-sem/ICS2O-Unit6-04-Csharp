/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-Csharp/sw.js", {
    scope: "/ICS2O-Unit6-04-Csharp/",
  })
}

window.onload = function() {
  // this calculates area of a square

  const params = new URLSearchParams(document.location.search)
  
  // input
  const side = params.get('a')

  // process
  const area = side * side
  const dimension = "<ul>\n<li>side = " + side + "</li>"
  
  // output
  document.getElementById('dimension').innerHTML = dimension
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}