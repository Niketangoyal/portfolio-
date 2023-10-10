// scroll section
let section=document.querySelectorAll('section')
let navlinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
section.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>=offset&&top<offset+height){
        // active navbar 
        navlinks.forEach(links=>{
            links.classList.remove('active')
            document.querySelector('header nav a[href*='+ id + ']').classList.add('active')
        })
        sec.classList.add('show-animate');
    }
    else{
        sec.classList.remove('show-animate');

    }
   
    
})
let header=document.getElementById("header");
header.classList.toggle('sticky',window.scrollY>100);
    //remove toggle icon and navbar when clikc navbar links
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
    let footer =document.querySelector('footer')
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight)
    console.log(this.innerHeight,this.scrollY,document.scrollingElement.scrollHeight)
    
}
// // Get all the navigation links
// const navLinks = document.querySelectorAll('.navbar a');

// // Add a click event listener to each link
// navLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         // Prevent the default link behavior
//         event.preventDefault();

//         // Remove the "active" class from all links
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add the "active" class to the clicked link
//         link.classList.add('active');

//         // Scroll to the target section (optional)
//         const targetId = link.getAttribute('href').substring(1);
//         console.log(targetId)
//         const targetSection = document.getElementById(targetId);
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });
//toogle icon bar
let menuicon=document.querySelector('#menu-icon')
let navbar=document.querySelector('.navbar')
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
