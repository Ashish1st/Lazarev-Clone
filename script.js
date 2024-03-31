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
navAnimation()