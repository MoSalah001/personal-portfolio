import Item , {linkItem as item , addEvent as listner , select } from "./elements.mjs";
const app = document.getElementById('main')

const title = new Item('h1',"title","Hello,\nI<span>'</span>m \n <span id=\"name\">Mohamed</span>")
item(title,app)

const nav = new Item('nav','nav-menu')
const navUl = new Item('ul','nav-ul')
const burger = new Item('div','burger')
const bar1 = new Item('div','bar1')
const bar2 = new Item('div','bar2')
const bar3 = new Item('div','bar3')
const projectLi = new Item('li','project',"Projects",'show-menu')
const contactLi = new Item('li','contact',"Contact Me",'show-menu')

item(nav,app)
item(burger,nav)
item(bar1,burger)
item(bar2,burger)
item(bar3,burger)
item(navUl,nav)
item(projectLi,navUl)
item(contactLi,navUl)

listner(burger,'click',burgerMenu)

function burgerMenu(e) 
{
    select(bar1).classList.toggle(`bar1-dark`)
    select(bar2).classList.toggle(`bar2-dark`)
    select(bar3).classList.toggle(`bar3-dark`)
    select(projectLi).classList.toggle('show-menu')
    select(contactLi).classList.toggle('show-menu')
}