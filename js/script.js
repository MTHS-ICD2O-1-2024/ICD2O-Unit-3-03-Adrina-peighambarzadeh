// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved

//

// Created by: Adrina peighambarzadeh

// Created on: Apr 2025

// This file contains the JS functions for index.html

"use strict"

/**


* This function calculates the area of a triangle.


*/

function calculateVolumesphere() {
  // input

  const radiusOfsphere = parseFloat(
    document.getElementById("radius-of-sphere").value
  )

  // process

  const volumeOfsphere =
    (4/3) * Math.PI * (radiusOfsphere ** 3)

  // output

  document.getElementById("answer").innerHTML =
    "Volume is: " + volumeOfsphere.toFixed(2) + " mm³"
}
