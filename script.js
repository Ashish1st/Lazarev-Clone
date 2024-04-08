function navAnimation() {
    let nav = document.querySelector('nav')

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "22vh",
        })

        tl.to(".nav-part2 h5", {
            display: "block",
        })

        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.7
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.4
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: .2,
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.3,
        })
    })

}
// navAnimation()

const rightElem = document.querySelectorAll('.right-elem')

rightElem.forEach((val) => {
    val.addEventListener('mouseenter', (e) => {
        gsap.to(val.childNodes[3], {
            opacity: 1,
            scale: 1
        })
    })
    val.addEventListener('mouseleave', () => {
        gsap.to(val.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })

    val.addEventListener("mousemove", (dets) => {
        gsap.to(val.childNodes[3], {
            x: dets.x - val.getBoundingClientRect().x - 50,
            y: dets.y - val.getBoundingClientRect().y - 140,
        })
    })

})