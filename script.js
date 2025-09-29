const thumb = document.querySelector('.fake-thumb');

function updateScrollbar() {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // thumb height proportional to visible area
    const thumbHeight = (winHeight / docHeight) * winHeight;
    thumb.style.height = `${thumbHeight}px`;

    // thumb position proportional to scroll
    const scrollRatio = scrollTop / (docHeight - winHeight);
    const thumbTop = scrollRatio * (winHeight - thumbHeight);
    thumb.style.top = `${thumbTop}px`;
}

window.addEventListener('scroll', updateScrollbar);
window.addEventListener('resize', updateScrollbar);
updateScrollbar();