function tagsInput(el, options = {}) {
    this.options = options
    this.el = el
    this.input = el.querySelector('.tags-input')
    this.tags = []

    const hiddenInput = document.createElement('input')
    hiddenInput.type = 'hidden'
    hiddenInput.name = options.name || 'tags'
    this.el.appendChild(hiddenInput)

    this.hiddenInput = hiddenInput

    const defaultTags = this.options.values || this.el.dataset.values || null

    if (defaultTags) {
        defaultTags.split(',').forEach(value => this.addTag(value))
    }

    this.input.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {

        if (e.target.value.trim() === '') {
            alert('Lütfen bir etiket girin')
            return
        }

        if (e.target.value.trim().length < this.options.minLength) {
            alert(`Minimum ${this.options.minLength} karakter olmalıdır.`)
            return
        }

        if (e.target.value.trim().length > this.options.maxLength) {
            alert(`Maksimum ${this.options.maxLength} karakter olmalıdır.`)
            return
        }

        if (this.tags.length + 1 > this.options.maxTags) {
            alert('Maksimum etiket sayısına ulaştınız, daha fazla ekleyemezsiniz!')
            return
        }

        if (this.tags.includes(e.target.value)) {
            alert(`${e.target.value} değeri zaten eklenmiş!`)
            return
        }

        this.addTag(e.target.value)
        e.target.value = ''
      }
    }.bind(this))
}

tagsInput.prototype.addTag = function(tag) {
    const span = document.createElement('span')
    span.className = 'tag'
    span.innerText = tag

    const button = document.createElement('button')
    button.innerText = 'x'
    span.appendChild(button)

    button.addEventListener('click', function() {
        span.remove()
        this.tags = this.tags.filter(t => t !== tag)
        this.hiddenInput.value = this.tags.join(',')
    }.bind(this))

    this.tags.push(tag)
    this.el.insertBefore(span, this.el.firstChild)
    this.hiddenInput.value = this.tags.join(',')
}

tagsInput.prototype.showTags = function() {
    return this.tags
}

