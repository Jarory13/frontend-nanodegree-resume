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
	"location": "Tampa, FL",
	"linkedin": "http://bit.ly/1SXe370"
	},
	"biopic" : "http://bit.ly/1LxKYXH",
	"skills" : ["Web Development", "Android", "Java", "XML", "C++", 
"C", "C#", "HTML/CSS", "PHP", "JavaScript", "Unity", "Copy Writing", 
"WordPress", "Excel", "Project Management", ],
	"welcome": "From ideas to development, I'm the guy you want on the job."

};

var work = {
	"jobs" :[ {
"position" :"Freelancer",
"employer" : "Self",
"years" : "October 2015 - Current",
"city" : "New York, NY/ Tampa, FL",
"description" : "I currently freelance as a web and mobile developer."
},
	
{
"position" : "Epidemiology Intern",
"employer" : "Florida Department of health",
"years" : "May 2015 - July 2015",
"city" : "Tampa, FL",
"description" : "Working with the DOH, I shadowed the team during epidemiological investigations and monitored potential ebola cases in Florida."
},

{
"position" : "Ethnographer",
"employer" : "Smart Revenue",
"years" : "October 2012 - Octoer 2015",
"city" : "Tampa, FL/ New York, NY",
"description" : "As an Ethnographer I gathered data on consumers by observing them in client locations. I used survies and interviews to ascertain their purchasing logic and returned that data to our clients."
},


{
"position" : "Graduate Assistant",
"employer" : "Binghamton University",
"years" : "August 2014 - May 2015",
"city" : "Binghamton, NY",
"description" : "I managed a team of 20 students, oversaw the booking and planning of events in the C4 MP Room, served as technical support for the A/V equipment, and managed a budget of $45,000."
},

{
"position" : "Data Research Analyst",
"employer" : "BayForce",
"years" : "December 2013 - July 2014",
"city" : "Tampa, FL",
"description" : "I worked in SalesForce to maintain our client records so that our sales time had the most up to date data."
},

{
"position" : "Course Developer",
"employer" : "You Can Learn Inc.",
"years" : "November 2011 - October 2012",
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
		"description" : "An augmetned reality start up I pioneered. Queslty was intended to push gaming experiences to the next level. By using location based technology to generate an MMO style game, we sought to blur reality and the real world in new and interesting ways.",
		"links" : ["https://pbs.twimg.com/media/CTZFxNlVEAADF0s.png"]
	},

	{
		"title" : "Roll A Ball",
		"dates" : "2016",
		"description" : "My first ever game crafted in Unity. My implementation added a few features, such as resetting, to the tutorial version.",
		"links" : ["https://unity3d.com/sites/default/files/learn-playlist/icon/rollaball-thumb1.jpg"]
	},

	{
		"title" : "EpiQuick",
		"dates" : "2016",
		"description" : "My first Android project. EpiQuick utilized information from the CDC to inform users about the most common infectious diseases.",
		"links" : ["https://raw.githubusercontent.com/Jarory13/EpiQuick/master/app/src/main/res/drawable/intro.jpg"]
	}

	]
}

//Get skills into resume. 
if ('skills' in bio && bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);

	for(var i = 0; i < bio.skills.length; i++) {

		var formattedskills = HTMLskills.replace("%data%", 
			bio.skills[i]);
	$("#skills").append(formattedskills);
	}
	
} else {
	console.log("skills not found");
}

//Get work into reusme
function displaywork () {
for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var newemploy = HTMLworkEmployer.replace("%data%",  
		work.jobs[job].employer);

	var newtitle = HTMLworkTitle.replace("%data%",  
		work.jobs[job].position);

	var newdates = HTMLworkDates.replace("%data%",  
		work.jobs[job].years);

	var newcity = HTMLworkLocation.replace("%data%",  
		work.jobs[job].city);

	var newdescription = HTMLworkDescription.replace("%data%",  
		work.jobs[job].description);


var formattedEmployTitle = newemploy + newtitle;
	$(".work-entry:last").append(formattedEmployTitle);
	$(".work-entry:last").append(newdates);
	$(".work-entry:last").append(newcity);
	$(".work-entry:last").append(newdescription);
}

}

projects.display = function() {
	for(gig in projects.project) {
	$("#projects").append(HTMLprojectStart);

	var projectTitles = HTMLprojectTitle.replace("%data%",  
		projects.project[gig].title);

	var projectDates = HTMLprojectDates.replace("%data%",  
		projects.project[gig].dates);

	var projectDescription = HTMLprojectDescription.replace("%data%",  
		projects.project[gig].description);

	var projectImages = HTMLprojectImage.replace("%data%",  
		projects.project[gig].links);

	$(".project-entry:last").append(projectTitles);
	$(".project-entry:last").append(projectDates);
	$(".project-entry:last").append(projectDescription);
	$(".project-entry:last").append(projectImages);
}

}



displaywork();

projects.display();
$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY);
});


/*

$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	var nameleng = name.length;
	name[nameleng-1] = name[nameleng-1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
	name[0].slice(1).toLowerCase();

	var fullname = "";

	for(var i = 0; i < nameleng; i++) {
		fullname = fullname + name[i] + " ";
	}

	return fullname;
	
}
*/


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







