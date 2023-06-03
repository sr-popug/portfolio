

var tl = gsap.timeline();
tl.from('#first', {duration: 1, delay: 1, opacity: 0})
tl.from('#second', {duration: 1, opacity: 0})
tl.from('#third', {duration: 1, opacity: 0})
tl.fromTo('#arrow', {opacity: 0, }, {duration: 1, opacity: 1})



let arrow = document.querySelector("#arrow")

function manifest () {
    var tl2 = gsap.timeline()
    tl2.to('#photo_knowlebge', { duration: 1, right: 0,})

    var tl3 = gsap.timeline()
    tl3.to('strong', { duration: 1, left: 0})

    tl3.to('li', { duration: 1, stagger: 0.2, left: 0})
}
arrow.addEventListener('click', manifest)



arrow.addEventListener('click',()=>{
   gsap.to(window,{duration: 1, scrollTo: "#info",})
   })

   const tl3=gsap.timeline({
    scrollTrigger:{
      trigger: "#info",
      start: "top 30%",
     
      onEnter:(manifest)
    }
  })

function manifest2 () {
    var tl3 = gsap.timeline()
    tl3.to('h3', { duration:1, opacity: 1})
    tl3.to('.project', { duration:2, stagger: 0.2, opacity: 1})
    
}


  const tl4=gsap.timeline({
    scrollTrigger:{
      trigger: "h3",
      start: "top 45%",
     
      onEnter:(manifest2)
    }
  })

// let body = document.querySelector('body')
// window.addEventListener('scroll', () => {
//     body.style.cssText = ` --scrolTop: ${scrollY}`
//     if (scrollY == 0) {
//         console.log("Scroll = 0")
//     }
// })


