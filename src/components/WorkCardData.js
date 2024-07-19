import pro1 from "../assets/rubbishradar.png";
import pro2 from "../assets/ARTSCII.png"


const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Rubbish Radar",
        text: "I Worked with team to develop web application using Vue.js as a framework to display garbage disposal around Tokyo, Japan. I used Firebase as both our user authentication and database. I used HTML and CSS to build the front end of the web application. I developed the implementation of our map using Google Maps API; stored lat and long in a database which was then displayed on the site in real-time with high efficiency.",
        view: "https://rubbishradar-695ae.web.app/",
        source: "https://github.com/Rubbish-Radar/RubbishRadar"
    },
    {
        imgsrc: pro2,
        title: "ARTSCII",
        text: "I worked on a C++ program that takes PNG file and returns an image in ASCII in .TXT or in terminal. I developed a feature that changed the “chunk size” of each pixel; changed the 2-D Array storing characters based on the size of set chunk size by user input; then changed the output.",
        view: "https://github.com/cs100/final-project-gmere001-apham159-akang048-abhal003/blob/master/README.md",
        source: "https://github.com/cs100/final-project-gmere001-apham159-akang048-abhal003"
    }

];

export default ProjectCardData;