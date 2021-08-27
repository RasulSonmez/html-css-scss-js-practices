
[...document.querySelectorAll('.component--3')].forEach(component => {
    new tagsInput(component.querySelector('.tags'), {
        name: 'product_tags',
        minLength: 3,
        maxLength: 20,
        maxTags: 3
    })
})