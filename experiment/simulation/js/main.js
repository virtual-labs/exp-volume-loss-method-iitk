const slideshowImage = document.querySelector('.discImage');
// changedcode
document.getElementById("CleanSample").style.display="none";
document.getElementById("MeasureMass").style.display="none";
document.getElementById("table").style.display="none";


const slideshowImagesArray = [
    '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
    '../simulation/disc/8-1.png',
    '../simulation/disc/9-1.png',
    '../simulation/disc/10-1.png',
    '../simulation/disc/11-1.png',
    '../simulation/disc/12-1.png',
    '../simulation/disc/13-1.png',
    '../simulation/disc/14-1.png',
    '../simulation/disc/15-1.png',
    '../simulation/disc/16-1.png',
    '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
];

slideshowImage.style.width = "150px";
slideshowImage.style.height = "130px";
slideshowImage.setAttribute('x', '1610');
slideshowImage.setAttribute('y', '1002');

let slideshowCurrentIndex = 0;
let slideshowIntervalId;

function updateSlideshowImage() {
    slideshowCurrentIndex = (slideshowCurrentIndex + 1) % slideshowImagesArray.length;
    slideshowImage.setAttribute('href', slideshowImagesArray[slideshowCurrentIndex]);
}

function startImageSlideshow() {
    clearInterval(slideshowIntervalId);
    slideshowIntervalId = setInterval(updateSlideshowImage, 0.1);

    setTimeout(() => {
        clearInterval(slideshowIntervalId);
    }, 5000);
}





//Your JavaScript goes in here
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

var flag_material1=false;
var flag_material2=false;

// Button 1 move
const moveButton = document.getElementById('moveButton');
    const objectToMove = document.getElementById('objectToMove');
    const targetObject = document.getElementById('targetObject');

    function moveObject() {
        document.getElementById("hidetxt").style.display="none";
        flag_material1=true;
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;
        // Move the object to the target position
        objectToMove.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove.style.transform = `translate(-439px, -272px)`;
    }

    moveButton.addEventListener('click', moveObject);

    // Button 2 move
    // const moveButton2 = document.getElementById('moveButton2');
    // const objectToMove2 = document.getElementById('objectToMove2');
    // const targetObject2 = document.getElementById('targetObject2');

    // function moveObject2() {
        // flag_material1=true;
    //     // Get the position of the target object
    //     const targetRect = targetObject.getBoundingClientRect();
    //     // const targetX = targetRect.left;
    //     // const targetY = targetRect.top;

    //     // Move the object to the target position
    //     objectToMove2.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    //     objectToMove2.style.transform = `translate(-265px, -340px)`;
    // }

    // moveButton2.addEventListener('click', moveObject2);

    // Button 3 move
    const moveButton3 = document.getElementById('moveButton3');
    const objectToMove3 = document.getElementById('objectToMove3');
    const targetObject3 = document.getElementById('targetObject3');

    function moveObject3() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove3.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove3.style.transform = `translate(1605px, 430px)`;
    }

    moveButton3.addEventListener('click', moveObject3);

    // Button 4 ball opicity
const moveButton4 = document.getElementById('moveButton4');
function moveObject4() {
    objectToMove3.style.opacity=0;
}
moveButton4.addEventListener('click', moveObject4);


// Button 5 move
const moveButton5 = document.getElementById('moveButton5');
    const objectToMove5 = document.getElementById('objectToMove5');
    const targetObject5 = document.getElementById('targetObject5');

    function moveObject5() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove5.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove5.style.transform = `translate(-405px, -17px)`;
}

    moveButton5.addEventListener('click', moveObject5);

    // Button 6 move
const moveButton6 = document.getElementById('moveButton6');
const objectToMove6 = document.getElementById('objectToMove6');
const targetObject6 = document.getElementById('targetObject6');

function moveObject6() {
    // Get the position of the target object
    const targetRect = targetObject.getBoundingClientRect();
    // const targetX = targetRect.left;
    // const targetY = targetRect.top;

    // Move the object to the target position
    objectToMove6.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    objectToMove6.style.transform = `translate(-90px, -705px)`;
}

moveButton6.addEventListener('click', moveObject6);


// material button disable

// moveButton.addEventListener('click', () => {
//     moveButton2.disabled = true;
//     moveButton.disabled = false;
// });

// moveButton2.addEventListener('click', () => {
//     moveButton.disabled = true;
//     moveButton2.disabled = false;
// });

// button one by one open


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    
  function revealNextButton(currentButtonIndex) {
    // Reveal the next button in sequence, if available
    if (currentButtonIndex < buttons.length - 1) {
        buttons[currentButtonIndex + 1].classList.remove('hidden');
    }
}


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            revealNextButton(i);
      });
  }
});


// const pngElement = document.querySelector('.png-element');
// const popup = document.getElementById('popup');
// const popupText = document.getElementById('popup-text');

// pngElement.addEventListener('mouseover', () => {
//     const name = pngElement.getAttribute('alt');
//     popupText.textContent = name;
//     popup.style.display = 'block';
// });

// pngElement.addEventListener('mouseout', () => {
//     // popup.style.display = 'none';
// });


// popup all Element

const svgContainer = document.getElementById("svgContainer");
const elementName = document.getElementById("elementName");

svgContainer.addEventListener("mouseover", (e) => {
    if (e.target.dataset.name) {
        elementName.innerText = e.target.dataset.name;
        elementName.style.left = e.clientX + "-5px";
        elementName.style.top = e.clientY + "-4px";
        elementName.style.display = "block";
    }
});

svgContainer.addEventListener("mouseout", () => {
    elementName.style.display = "none";
});

// rotation base

 // JavaScript code for the rotation animation
 const svgImages = document.querySelectorAll('.svg-image');
 const moveButton7 = document.getElementById('moveButton7');
 let currentIndex = 0;
 let intervalId;


  // Function to display the next SVG image
  function showNextImage() {
    svgImages[currentIndex].style.display = 'none'; // Hide the current image
    currentIndex = (currentIndex + 1) % svgImages.length; // Move to the next image
    svgImages[currentIndex].style.display = 'block'; // Display the next image
}

// Function to start the animation
function startAnimation() {
    intervalId = setInterval(showNextImage, 0.1); // Change the interval as needed (in milliseconds)
}

// Function to stop the animation after 5 seconds
function stopAnimation() {
    clearInterval(intervalId);
}

// Add a click event listener to start the animation
moveButton7.addEventListener('click', () => {
    startAnimation();
    setTimeout(stopAnimation, 5000); 
setTimeout(() => {
    document.getElementById("CleanSample").style.display = "block";
    document.getElementById("MeasureMass").style.display = "block";
        document.getElementById("calculationBtn").style.display = "block";

}, 5000); // 5000 milliseconds = 5 seconds

});

moveButton7.addEventListener('click', startImageSlideshow);
// JavaScript logic
// const material1Button = document.getElementById('moveButton');
// const material2Button = document.getElementById('moveButton2');
const moveButton8 = document.getElementById('moveButton8');
const resultContainer = document.getElementById('resultContainer');
const material1Photo = document.getElementById('material1Photo');
const material2Photo = document.getElementById('material2Photo');

// Function to show the result photo based on the choice of material
function showResult() {
    document.getElementById("resultSlider").style.display="block";
    document.getElementById("table").style.display="block";
        document.getElementById("myBox").style.display="none";
        document.getElementById("panelImage").style.display="none";
    if (flag_material1) {

        resultContainer.style.display = 'block';
        material1Photo.style.display = 'block';
        material2Photo.style.display = 'none';
    }
    if (flag_material2) {
            resultContainer.style.display = 'block';
            material1Photo.style.display = 'none';
            material2Photo.style.display = 'block';
        }
    //  else if (moveButton2.checked) {
    //     resultContainer.style.display = 'block';
    //     material1Photo.style.display = 'none';
    //     material2Photo.style.display = 'block';
    if(!flag_material1 && !flag_material2){
        alert('Please select a material first.');

    }
    
}
console.log(moveButton8.addEventListener('click', showResult)
)
// Add click event listener to the Show Result button
moveButton8.addEventListener('click', showResult);



// Help! video

// document.getElementById("playButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "block";
// });

// document.getElementById("closeButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "none";
    
//     // Pause the video when closing
//     var video = document.getElementById("video");
//     video.pause();
// });


// button open in 5 sec

document.getElementById("moveButton7").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton8").style.display = "block";
      document.getElementById("out").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  });

// button open in 1 sec

  document.getElementById("moveButton3").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton4").style.display = "block";
    }, 1000); // 5000 milliseconds = 5 seconds
  });



//   this is the new code 

const items = [

  {
    title: "Sample clean",
    image: "../simulation/calculationImg/clean.png",
    description: "The sample is clean"
  },
  {
    title: "Mass Comparison",
    image: "../simulation/calculationImg/m2.png",
    description: "m2 = 16.1350 g  <br>Δm = m1-m2 = 0.0095 g"
  }
];

const panel = document.getElementById("contentPanel");
const panelImg = document.getElementById("panelImage");
// const panelHeading = document.getElementById("panelHeading");
const panelDesc = document.getElementById("panelDescription");

function displayPanel(index) {
  const selected = items[index];
  
// document.getElementById("initialmassm1").style.display="block";
  // Hide image first
  panelImg.classList.add("hidden-image");

  // Set text immediately
  // panelHeading.textContent = selected.title;
panelDesc.innerHTML = selected.description;


document.getElementById("panelDescription").style.display="block";
  // Small delay to allow class to apply before changing image
  setTimeout(() => {
    panelImg.src = selected.image;

    // Once the new image loads, fade it in
    panelImg.onload = () => {
      panelImg.classList.remove("hidden-image");
    };
  }, 100);

  // Show panel
  panel.classList.remove("panel-hidden");
}

function closePanel() {
  panel.classList.add("panel-hidden");
}
















let selectedRPM = null;
  let xImage = null;
  let yImage = null;
  let originalImage = null;

  function selectRPM(rpm) {
    selectedRPM = rpm;
    document.getElementById("moveButton8").classList.remove("hidden");
  }
function showResult() {
  selectedRPM = "25"; // fixed RPM
  document.querySelectorAll('.materialPhoto').forEach(img => img.style.display = "none");

  originalImage = document.querySelector('img[src="../simulation/output/mainprofile.png"]');
  xImage = document.querySelector('img[src="../simulation/output/d1 (Youtube Banner) (3).png"]');
  yImage = document.querySelector('img[src="../simulation/output/d1 (Youtube Banner) (2).png"]');

  showImage(originalImage); // Show original image by default
  toggleButtons(true, true, false); // Enable X and Y profile buttons
  document.getElementById("resultContainer").style.display = "block";
}


  function showImage(img) {
    document.querySelectorAll('.materialPhoto').forEach(i => i.style.display = "none");
    if (img) {
      img.style.display = "block";
      document.getElementById("imageLabel").innerHTML = `<b>${img.dataset.label}</b>`;
      document.getElementById("imageDescription").innerText = img.dataset.desc;
    }
  }

  function toggleButtons(xEnabled, yEnabled, origEnabled) {
    document.getElementById("nextBtn").disabled = !xEnabled;
    document.getElementById("prevBtn").disabled = !yEnabled;
    document.getElementById("origBtn").disabled = !origEnabled;
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
  showImage(yImage);
  toggleButtons(true, false, true);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  showImage(xImage);
  toggleButtons(false, true, true);
});

document.getElementById("origBtn").addEventListener("click", () => {
  showImage(originalImage);
  toggleButtons(true, true, false);
});








function display1(){
  document.getElementById("initialmassm1").style.display="block";
};










function showCalculation() {
  const container = document.getElementById("calculationContainer");
  container.style.display = "block";

  // Always show the table for 25 RPM
  container.innerHTML = generateTable({
    testNumber: "2",
    sample: "28",
    load: "58 µm",
  SpWr1:"2.7×10⁻³",
    Δm: "0.01",
    cof: "0.40±0.06",
  });
}

function generateTable(data) {
  return `
    <table style="width:100%;height:300px; border-collapse:collapse; margin-top:10px;" border="2px solid black ;padding:5px;">
      <tr style="background:#eee; text-align:center; vertical-align:middle;">
        <th>Parameter</th>
        <th>Value</th>
      </tr>
      <tr style="text-align:center; vertical-align:middle;"><td>Sample<br>(Ra = Sample roughness)</td><td>${data.sample}</td></tr>
      <tr style="text-align:center; vertical-align:middle;"><td>dmax.</td><td>${data.load}</td></tr>
      <tr style="text-align:center; vertical-align:middle;"><td>Coefficient of Friction (cof)</td><td>${data.cof}</td></tr>
      <tr style="text-align:center; vertical-align:middle;"><td>Specific Wear Rate (Sp. Wr)</td><td>${data.SpWr1} mm³/N·m</td></tr>
      <tr style="text-align:center; vertical-align:middle;"><td>Mass loss (Δm)</td><td>${data.Δm} g</td></tr>
    </table>
  `;
}









function showcMessage() {
  document.getElementById("cMessage").style.display = "block";
}




function openFormulaModal() {
  document.getElementById("formulaModal").style.display = "block";

  // 🔁 Ask MathJax to re-typeset formulas inside modal
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function closeFormulaModal() {
  document.getElementById("formulaModal").style.display = "none";
}
