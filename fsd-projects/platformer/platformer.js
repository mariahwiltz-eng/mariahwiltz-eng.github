$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 700, 410, "black");
createPlatform(1300, 500, 600, 50, "red");
createPlatform(420, 600, 880, 50, "black");
createPlatform(1100, 360, 200, 50, "yellow");
createPlatform(1300, 220, 200, 50, "lime");
createPlatform(20, 540, 400, 50, "violet");
createPlatform(100, 400, 200, 50, "blue");
createPlatform(200, 250, 300, 50, "orange");
createPlatform(10,  100, 300, 50, "red");



    // TODO 3 - Create Collectables
createCollectable("diamond", 1350, 50);
createCollectable("diamond", 10, 50, 0.5, 0.7);
createCollectable("diamond", 200, 150, 0.5, 0.7);


    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
