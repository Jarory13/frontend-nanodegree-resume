/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Define the basic values for a header bio.
var bio = {
	"name" : "E. Jarory de Jesus",
	"role": "Web Developer, Android Developer, Copy Writer, and Project Manager", 
	"contact": {
	"email": "Jarory13@gmail.com",
	"phone": "813-440-9573",
	"github": "www.github.com/Jarory13",
	"location": "New York, NY / Tampa, FL",
	"linkedin": "http://bit.ly/1SXe370"
	},
	"biopic" : "http://bit.ly/1LxKYXH",
	"skills" : ["Web Development", "Android", "Java", "XML", "C++", 
"C", "C#", "HTML/CSS", "PHP", "JaaScript", "Unity", "Copy Writing", 
"WordPress", "Project Management", "Excel", "Word"],
	"welcome": "This is place holder text for a welcome message."

}

//pass those values into a formattted verion.
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var imageURL = HTMLbioPic.replace("%data%", bio.biopic);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
var formatedphone = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedgit = HTMLgithub.replace("%data%", bio.contact.github);
var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedlinked = HTMLlinkedin.replace("%data%", bio.contact.linkedin);


var skillswithspace = bio.skills.join(", ")

var formattedskills = HTMLskills.replace("%data%", skillswithspace);


//append or prepend them to the header. 
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(imageURL);
$("#header").append(formattedemail);
$("#header").append(formatedphone);
$("#header").append(formattedgit);
$("#header").append(formattedlinked);
$("#header").append(formattedskills);
$("#header").append(formattedwelcome);
$("#header").append(formattedlocation);





