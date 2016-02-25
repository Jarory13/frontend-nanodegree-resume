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
	"welcome": "From ideas to development, I'm the guy you want on the job."

};

var work = {
	"current" : {
"position" :"Freelancer",
"employer" : "Self",
"years" : "1",
"city" : "New York, NY/ Tampa, FL",
"description" : "I currently freelance as a web and mobile developer."
},
	
	"previous" :[
{
"position" : "Intern",
"employer" : "Florida Department of health",
"years" : "0.25",
"city" : "Tampa, FL",
"description" : "Working with the DOH, I shadowed the team during epidemiological investigations and monitored potential ebola cases in Florida."
},

{
"position" : "Ethnographer",
"employer" : "Smart Revenue",
"years" : "3",
"city" : "Tampa, FL/ New York, NY",
"description" : "As an Ethnographer I gathered data on consumers by observing them in client locations. I used survies and interviews to ascertain their purchasing logic and returned that data to our clients."
},

{
"position" : "Data Research Analyst",
"employer" : "BayForce",
"years" : "1",
"city" : "Tampa, FL",
"description" : "I worked in SalesForce to maintain our client records so that our sales time had the most up to date data."
},

{
"position" : "Course Developer",
"employer" : "You Can Learn Inc.",
"years" : "1",
"city" : "Tampa, FL",
"description" : "I researched and wrote the content for our educaitonal apps. Each assignment required that I do indepth research on subjects ranging from Greek Mythology to the History of Japan. I then wrote the content and quizzes for the app."
}

	]

}

var education = {
	"schools" :[
	{
"name" : "University of South Florida",
"startYear" : 2009,
"endYear" : 2014,
"city" : "Tampa, FL",
"degree" : "BA", 
"major" : "Biological Anthropology",
"minor" : "Creative Writing",
"url" : "http://www.usf.edu/"
},

{
"name" : "Binghamton University",
"startYear" : 2014,
"endYear" : 2015,
"city" : "Binghamton, NY",
"degree" : "MS, MA/Ph.D", 
"major" : "Biomedical Anthropology",
"url" : "http://binghamton.edu/"
}
],

"onlineCourses" : [
	{
		"title" : "Harvard's CS50x",
		"school" : "Edx/Harvard",
		"year" : "2015",
		"url" : "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
	},

	{
		"title" : "Front-End NanoDegree",
		"school" : "Udacity",
		"year" : "2015-2016",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},

	{
		"title" : "Unity Tutorials",
		"school" : "Unity",
		"year" : "2016",
		"url" : "https://unity3d.com/learn/tutorials"
	}

	]
}

var projects = {
	"project" : [

	{
		"title" : "Questly",
		"dates" : "2015-2016",
		"descriptions" : "An augmetned reality start I pioneered. Queslty was intended to push gaming experiences to the next level. By using location based technology to generate an MMO style game, we sought to blur reality and the real world in new and interesting ways.",
		"links" : ["https://github.com/Questlyap/questly-android-prototype"]
	},

	{
		"title" : "Roll A Ball",
		"dates" : "2016",
		"descriptions" : "My first ever game crafted in Unity. My implementation added a few features, such as resetting, to the tutorial version.",
		"links" : ["https://github.com/Jarory13/RollABall"]
	},

	{
		"title" : "EpiQuick",
		"dates" : "2016",
		"descriptions" : "My first Android project. EpiQuick utilized information from the CDC to inform users about the most common infectious diseases.",
		"links" : ["https://github.com/Jarory13/EpiQuick"]
	}

	]
}


if ('skills' in bio ) {
	$("#header").append(HTMLskillsStart);

	var skillswithspace = bio.skills.join(", ")

	var formattedskills = HTMLskills.replace("%data%", skillswithspace);
	$("#header").append(formattedskills);
	

} else {
	console.log("skills not found");
}















/*
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

$("#header").append(formattedwelcome);
$("#header").append(formattedlocation);

//Work on the main body 
$("#main").append(work.current.position);
$("#main").append(education.schools[0].name);
*/







