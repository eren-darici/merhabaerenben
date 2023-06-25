// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Eren",
  middleName: "",
  lastName: "Darıcı",
  message: " Industrial Engineer. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/eren-darici",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ed.erendarici/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eren-darici-29503819a/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/eren.png"),
  imageSize: 375,
  message:
    "My name is Eren Darıcı. I have graduated from Industrial Engineering @ Eskisehir Technical University at June 2023. I am interested in Data Science, Machine Learning and their intersections with manufacturing.",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "eren-darici", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["enm428-niosh-mocap", "googlelyrics-API", "tabu-search", "COMSOAL-Solver"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/eren.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/eren.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Java", value: 80 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 0 },
    { name: "Collaboration", value: 0 },
    { name: "Adaptability", value: 0 },
    { name: "Problem Solving", value: 0 },
    { name: "Organization", value: 0 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to contact me via email or other social media platforms. I will try to get back to you as soon as possible!",
  email: "hi@merhabaerenben.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Candidate Industrial Engineer',// Here Add Company Name
      companylogo: require('../assets/img/otosan.png'),
      date: 'March 2023 – June 2023',
    },
    {
      role: 'IT Supply Chain Planning Intern',
      companylogo: require('../assets/img/arcelik.png'),
      date: 'May 2022 – September 2022',
    },
    {
      role: 'Product Development Intern',
      companylogo: require('../assets/img/werk.png'),
      date: 'June 2021 – July 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
