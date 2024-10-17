// get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHtml = "\n<h2><b>Resume</b></h2>\n<h3>personal information</h3>\n<p><b> Nmae: </b>".concat(name, "</p>\n<p><b> email: </b>").concat(email, "</p>\n<p><b> phone: </b>").concat(phone, "</p>\n\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>skills</h3>\n<p>").concat(skills, "</p>");
    //Genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The Resume Display element is Missing');
    }
});