var element = document.getElementById("No");

// The moving and changing text along with some like just saying stuff
let texts = ["pakka?", "Plez", "100% pakka?", "esa mat kro na :(", "I'll kiss you", "Pls", "Maybe press the other one", "Dang I don't have enough prompts", "Please press the other one", "Ideas running low", "I want you :(", "One more chance", "last chance", "You thought", "Jk this is last chance", "Plsplspslpsl", "I'll be very sad", "pls say yes", "I'm begging", ":(((", "have mercy", "god will bless u", "PLEASE", "DDDDDDDDD:", "*sobs*", "pwease pookie bear", "WIFEEYYY PLZZZ", "😩", "or else(?)", "peewoop", "xoxo gossip gurl", "ill buy you shawarma deary", "i got $$$", "my mom will love you", "ill give u the lasT PIECE OF MY PANEER TIKKA", "niacinamide", "nitroglycerin", "wow",, "you must rlly hate me", "i promise we'll be good together"];
let index = 0;

document.getElementById('theButton').addEventListener('click', function() {
    this.innerHTML = texts[index];
    index = (index+1) % texts.length;
});

// The event listener
element.addEventListener("mousemove", function(){
    // Debugging
    console.log("it worked!!!")

    // Change the text of the button inside the div
    document.getElementById('theButton').textContent = texts[index];
    index = (index + 1) % texts.length;

    // The button movement section
    document.body.appendChild(element);
    var xCoordinate = Math.random() * (window.innerWidth - 300);
    var yCoordinate = Math.random() * (window.innerHeight - 100);
    // console.log(xCoordinate)
    // console.log(yCoordinate)
    element.style.left = xCoordinate + "px";
    element.style.top = yCoordinate + "px";
});

// Testing for coordinates
// document.addEventListener('click', function(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log('X: ' + x + ', Y: ' + y);
// });