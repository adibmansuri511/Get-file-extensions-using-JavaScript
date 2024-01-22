// program to get the URL

// Get button element and add click event listener on it and assign to element variable.
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", randomNumber);


function randomNumber(e) {
    e.preventDefault();

    // Show the result on this #h5 id.
    let result = document.querySelector('#h4');

    // Get Minimum value from input
    let minValue = Number(document.getElementById("minValue").value);

    // Get Maximum value from input
    let maxValue = Number(document.getElementById("maxValue").value);

    // Random number generation equation
    let randomNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

    randomNumber = `The random number between <span style="color: #ffffff">${minValue}</span> and <span style="color: #ffffff">${maxValue}</span> is : <span style="color: #ffffff">${randomNumber}</span>`;

    result.innerHTML = randomNumber;
    console.log(randomNumber);

}










function getUrl(e) {


    // window.location.href: HTML DOM Window.location property returns a Location object that contains information about the current location of the document.
    const url1 = window.location.href;

    // Document.URL: The DOM URL property in HTML is used to return a string that contains the complete URL of the current document. The string also includes the HTTP protocol such as ( http://).
    const url2 = document.URL;


};

