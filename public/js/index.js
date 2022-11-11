import Item , {linkItem as link , addEvent as listner , select , Project , addProject , contactList} from "./elements.mjs";
const app = document.getElementById('main')

const title = new Item('h1',"title",`Hello,\nI<span>'</span>m \n <br /> <span id=\"name\">Mohamed</span>`)
link(title,app)
/***   nav menu items   ****/ 
const nav = new Item('nav','nav-menu')
const navUl = new Item('ul','nav-ul')
const burger = new Item('div','burger')
const bar1 = new Item('div','bar1')
const bar2 = new Item('div','bar2')
const bar3 = new Item('div','bar3')
const projectLi = new Item('li','project',"<a href=#projects>Projects</a>",'show-menu')
const aboutLi = new Item('li','about-me',"<a href=#about>About Me</a>",'show-menu')

link(nav,app)
link(burger,nav)
link(bar1,burger)
link(bar2,burger)
link(bar3,burger)
link(navUl,nav)
link(projectLi,navUl)
link(aboutLi,navUl)

listner(burger,'click',burgerMenu)
listner(projectLi,'click',burgerMenu)
listner(aboutLi,'click',burgerMenu)

function burgerMenu(e) 
{
    select(bar1).classList.toggle(`bar1-dark`)
    select(bar2).classList.toggle(`bar2-dark`)
    select(bar3).classList.toggle(`bar3-dark`)
    select(projectLi).classList.toggle('show-menu')
    select(aboutLi).classList.toggle('show-menu')
    select(contact).classList.toggle('show-contact')
}

/* end of nav menu items */

/*** projetcs items  ***/
const projectTitle = new Item('h2','project-title','Projects')
const projects = new Item('div','projects')

link(projectTitle , app)

link(projects,app)

const twitter = new Project('Twitter-Clone','twitterclone.cyclic.app','twitter-clone.png')
const clock = new Project('Digital-Clock','mosalah001.github.io/Digital-Clock/','Digital-Clock.png')
const tictac = new Project('Tic-Tac-Toe','mosalah001.github.io/Tic-Tac-Toe/','tictac.png')
const landing = new Project('Landing-Page','mosalah001.github.io/landing-page/','Land.png')
const weather = new Project('Weather-Project','openweather-app-demo.herokuapp.com/','weather.png')
const portfolio = new Project('Portfolio','mosalah001.github.io','portfolio.png')

twitter.desc('Twitter Mock-up project')
clock.desc("Digital Clock Project")
tictac.desc("Tic Tac Toe Game")
landing.desc('Landing Page Project')
weather.desc('Open Weather Api Project')
portfolio.desc('Old Portfolio Contains Old Projects')

addProject(twitter,projects)
addProject(clock,projects)
addProject(tictac,projects)
addProject(landing,projects)
addProject(weather,projects)
addProject(portfolio,projects)

/*** End of projects ***/

/*** contact ***/

const contact = new Item('div', 'contact')
link(contact,app)
const contactLinks = 
[
    {
        name : 'git',
        url :'https://github.com/MoSalah001'
    },

    {
        name : 'fb',
        url :'https://fb.com/MoSalah001'
    },

    {
        name : 'twitter',
        url :'https://twitter.com/MoSalah001'
    },

    {
        name :'linkedin',
        url :'https://www.linkedin.com/in/mosalah001/'
    },

    {
        name : 'freelancer',
        url : 'https://www.freelancer.com/u/mosalah01'
    },

    {
        name : 'gmail',
        url : 'mailto:mhmdsalah707@gmail.com'
    }
];

contactList(contactLinks);