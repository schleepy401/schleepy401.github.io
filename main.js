const button = document.getElementById('button')
let isDark = false
let list = document.body.getElementsByClassName('links')
let links = document.body.getElementsByTagName('a')

button.addEventListener('click', function onClick(event)
{
    if(isDark === false)
    {
        document.body.style.backgroundColor = '#333'
        document.body.style.color = 'white'
        for(let i = 0; i < links.length; i++) links[i].style.color = '#ecb3ff'
        isDark = true
    }
    else
    {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        for(let i = 0; i < links.length; i++) links[i].style.color = '#9900cc' 
        isDark = false
    }
})

for(let i = 0; i < list.length; i++)
{
    list[i].style.display = 'inline-block';
    list[i].style.align = 'center'
}