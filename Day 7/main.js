function fountainActivation(locations) {
  // Write your code here

  let arrLength = locations.length,
      range = Array(arrLength).fill(0),
      numFountain = 0;

  //Get the positions to get the activable fountains
  locations.forEach((currentLocation, index) => {
      let indexLeft = Math.max(index-currentLocation,0);
      let indexRight = Math.min(index+(currentLocation+1),arrLength);

      range[indexLeft] = Math.max(range[indexLeft], indexRight)
  });

  let indexStart = range[0], indexNext = 0;

  //Calculate the number of fountains needed based in range array
  for( let i = 0; i <= arrLength; i++) {
      indexNext = Math.max(indexNext, range[i]);

      if(i === indexStart) {
          numFountain++;
          indexStart = indexNext;
      }
  }

  return numFountain;
}

module.exports = fountainActivation;
