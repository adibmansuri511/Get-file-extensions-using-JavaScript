// program to get the URL

// Get button element and add click event listener on it and assign to element variable.
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", checkFileExtension);


function checkFileExtension(e) {
    e.preventDefault();

    // Show the result on this #h5 id.
    const output = document.querySelector('#output');

    // Get file name from form input
    const fileName = document.getElementById("formFile").value;

    // By the help of split() method, we will split the filename into 2 parts.The first part will be the filename and the second part will be the extension of the file.
    // The extension can then be got by popping from the array the last string with the pop() method.This is hence the file extension of the file selected.
    extension = fileName.split('.').pop();

    output.innerHTML = extension;
    console.log(extension);
}










function getUrl(e) {


    // window.location.href: HTML DOM Window.location property returns a Location object that contains information about the current location of the document.
    const url1 = window.location.href;

    // Document.URL: The DOM URL property in HTML is used to return a string that contains the complete URL of the current document. The string also includes the HTTP protocol such as ( http://).
    const url2 = document.URL;


};

