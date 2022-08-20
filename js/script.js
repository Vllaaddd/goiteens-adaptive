const filterBox = document.querySelectorAll('.example-card');

document.querySelector('.filters_div').addEventListener('click', event => {
    if (event.target.tagName !== 'A') return false;

    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide')
        }
    });
});