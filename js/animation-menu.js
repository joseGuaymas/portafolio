const sections = document.querySelectorAll('.section')
const menu__items = document.querySelectorAll('.menu-item')

let functionObserver = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menu__items.forEach(item => {
                let i = item.dataset.url
                if (entry.target.id === i) {
                    history.pushState(null, "", i)
                    if (i === 'home') {
                        item.classList.add('active')
                    }
                    if (i === 'about') {
                        item.classList.add('active')
                    }
                    if (i === 'portfolio') {
                        item.classList.add('active')
                    }
                    if (i === 'formation') {
                        item.classList.add('active')
                    }
                    if (i === 'contact') {
                        item.classList.add('active')
                    }
                } else {
                    item.classList.remove('active')
                }            
            })
        } 
    });
}

let observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
})

for (let section of sections) {
    observer.observe(section)
}
