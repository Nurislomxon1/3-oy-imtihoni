const siteBody = document.querySelector("body")
const siteHeader = document.querySelector(".site-header")
const siteNav = document.querySelector(".site-nav")
const navBtn = document.querySelector(".nav-open-btn")

navBtn.addEventListener("click", function () {
    siteHeader.classList.toggle("site-nav-on")
    siteBody.classList.toggle("body-off")
}
)