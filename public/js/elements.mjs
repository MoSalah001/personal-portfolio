export default class Item 
{
    constructor(_element,_id , _value , _class) 
    {
        this.element = document.createElement(_element),
        this.style = this.element.setAttribute('id',_id),
        this.id = _id,
        this.element.innerHTML = !_value || _value == "" ? "": this.value(_value),
        this.class = _class == "" || !_class ? "" : this.class(_class)
    }
    class(_class)
    {
        this.class = this.element.setAttribute('class',_class)
    } 
    value(_value)
    {
        this.value = _value
        return this.element.innerHTML = _value
    }
}

export function linkItem(item , parent) 
{
    document.getElementById(parent.id).appendChild(item.element)
}


export function addEvent(element, eventType , func) 
{
    let target = document.getElementById(element.id)
    target.addEventListener(eventType,func)
}

export function select(element) 
{
    return document.getElementById(element.id)
}

function make(element)
{
    return document.createElement(element)
}

export class Project 
{
    constructor(_name,_url,_img)
    {
        this.id = _name,
        this.url = _url,
        this.img = _img
    }
    desc(_desc)
    {
        this.desc = _desc;
    }
}

export function addProject(project,app) 
{
    let figure = make('figure')
    let img = make('img')
    img.src = `./public/img/${project.img}`
    let caption = make('figcaption')
    caption.innerHTML= project.desc = "" ? "" : project.desc
    let link = make('a')
    link.setAttribute('href',`https://${project.url}`)
    link.setAttribute('target',`_blank`)
    link.appendChild(img)
    link.appendChild(caption)
    figure.appendChild(link)
    let parent = document.getElementById(app.id)
    parent.appendChild(figure)
}

export function contactList(arr)
{
    let parent = document.getElementById('contact')
    arr.forEach(element => 
        {
           let link = document.createElement('a');
           let logo = document.createElement('img');
           link.setAttribute('href',element.url);
           link.setAttribute('target','_blank');
           logo.setAttribute('src',`./public/css/icons/${element.name}.png`);
           logo.setAttribute('id',element.name);
           logo.setAttribute('alt',element.name);
           link.appendChild(logo);
           parent.appendChild(link);
        })
}