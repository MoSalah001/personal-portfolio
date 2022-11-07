import Item , {linkItem as link , addEvent as listner , select } from "./elements.mjs";
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
const contactLi = new Item('li','contact',"<a href=#contact>Contact Me</a>",'show-menu')

link(nav,app)
link(burger,nav)
link(bar1,burger)
link(bar2,burger)
link(bar3,burger)
link(navUl,nav)
link(projectLi,navUl)
link(contactLi,navUl)

listner(burger,'click',burgerMenu)

function burgerMenu(e) 
{
    select(bar1).classList.toggle(`bar1-dark`)
    select(bar2).classList.toggle(`bar2-dark`)
    select(bar3).classList.toggle(`bar3-dark`)
    select(projectLi).classList.toggle('show-menu')
    select(contactLi).classList.toggle('show-menu')
}


/* end of nav menu items */

/*** projetcs items  ***/
const projectTitle = new Item('h2','project-title','Projects')
const projects = new Item('div','projects')

link(projectTitle , app)

link(projects,app)

const projetcs =[];