import scrollama from 'https://cdn.skypack.dev/pin/scrollama@v3.2.0-5bIKOOErRMQZ69OSSOyY/mode=imports,min/optimized/scrollama.js'
class ScrollyPhotos extends HTMLElement {
    constructor() {
        if (typeof scrollama === 'undefined') {
            throw new Error('Scrollama is required for <scrolly-photo />, falling back to a vertical stack of photos')
        }

        super();

        const s = `
  <style>
    .photo-container {
      display: block;
      height: 100vh;
      overflow: hidden;
      position: sticky;
      top: 0;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      width: 100vw;
    }

    .photo-container .photos {
      display: flex;
      width: calc(100vw * var(--photo-count));
      transform: translate(var(--translate-x), 0);
    }
    
    .photo-container .photo {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      width: 100vw;
    }
    
    .scrolly-photo-container .step {
      font-size: 2rem;
      height: 90vh;
    }
  </style>
  `

        const children = [...this.children]
        const images = children.filter(d => d.tagName === 'IMG')
        const photos = images.map(d => {
            const alt = d.getAttribute('alt')
            const src = d.getAttribute('src')

            return {
                alt,
                src
            }
        })
        const shadow = this.attachShadow({
            mode: 'open'
        });
        const scrollyContainer = document.createElement('div')
        const photoContainer = document.createElement('div')
        const photosDiv = document.createElement('div')
        const stepContainer = document.createElement('div')

        scrollyContainer.classList.add('scrolly-photo-container')
        photoContainer.classList.add('photo-container')
        photosDiv.classList.add('photos')
        photosDiv.style.setProperty('--photo-count', photos.length)

        photos.forEach(photo => {
            const d = document.createElement('div')
            d.classList.add('photo')
            d.setAttribute('aria-label', photo.alt)
            d.style.backgroundImage = `url('${photo.src}')`

            photosDiv.appendChild(d)

            const step = document.createElement('div')
            step.classList.add('step')

            stepContainer.appendChild(step)
        })

        shadow.innerHTML = s
        shadow.appendChild(scrollyContainer)

        photoContainer.appendChild(photosDiv)
        scrollyContainer.appendChild(photoContainer)
        scrollyContainer.appendChild(stepContainer)

        const scroller = scrollama();

        scroller
            .setup({
                parent: this.shadowRoot, //.querySelector('.scrolly-photo-container'),
                offset: 0.5,
                progress: true,
                step: '.step'
            })
            .onStepProgress((response) => {
                const {
                    index,
                    progress
                } = response;
                if (index + 1 === photos.length) return

                const translateX = (index * 100) + Math.floor(progress * 100)
                photosDiv.style.setProperty('--translate-x', `${-1 * translateX}vw`)
            });
    }
}

customElements.define("scrolly-photos", ScrollyPhotos);