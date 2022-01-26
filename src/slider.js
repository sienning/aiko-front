class Carousel {

    constructor (element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slideToScroll: 1,
            slideVisible: 1,
        }, options)
        let children = [].slice.call(element.children)
        this.currentItem = 0
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel_container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel_item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle ()
        this.createNavigation ()
        this.setTime ()
    }

    setStyle () {
        let ratio = this.items.length / this.options.slideVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.options.slideVisible) / ratio) + "%")
    }

    createNavigation () {
        let nextButton = this.createDivWithClass('carousel_next')
        let prevButton = this.createDivWithClass('carousel_prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
    }

    next () {
       this.gotoItem(this.currentItem + this.options.slideToScroll)
    }

    prev() {
        this.gotoItem(this.currentItem - this.options.slideToScroll)
    }

    gotoItem (index) {
        if (index < 0) {
            index = this.items.length - this.options.slideVisible
        } else if (index >= this.items.length || this.items[this.currentItem + this.options.slideVisible] === undefined) {
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0 , 0)'
        this.currentItem = index
    }

    setTime () {
        window.setInterval(this.next.bind(this), 5000)
    }

    createDivWithClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

}

document.addEventListener('DOMContentLoaded', function() {
    new Carousel(document.querySelector('#carousel1'), {
        slideToScroll: 1,
        slideVisible: 1
    })
})