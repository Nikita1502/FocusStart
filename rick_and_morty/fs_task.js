window.onload = function() {
    let fsTask = document.querySelector('.fs-task');

    let searchDiv = document.createElement('div');
    searchDiv.setAttribute('id','searchDiv');
    fsTask.appendChild(searchDiv);

    let search = document.createElement('input');
    search.setAttribute('id','inputSearch');
    searchDiv.appendChild(search);

    let found = document.createElement('span');
    found.setAttribute('id','found');
    searchDiv.appendChild(found);

    let searchList = document.createElement('ul');
    searchList.setAttribute('id','searchList');
    fsTask.appendChild(searchList);

    let allLinks = document.querySelectorAll('a');

    search.oninput = function(){
        let word = search.value;
        let links = [];
        searchList.innerHTML = '';

        allLinks.forEach(function (item) {
            if ((search.value !== '')&&(search.value !== ' ')&&(item.innerText.toUpperCase().search(word.toUpperCase()) != -1)) {
                links.push(item);
            }
        })

        found.innerHTML = 'найдено ' + links.length;

        links.forEach(function (item) {
            let foundLink = document.createElement('li');
            foundLink.setAttribute('class','searchResults');

            let linkText = item.innerText.replace(RegExp(`(${word})`, 'gi'), '<mark>$1</mark>');
            foundLink.innerHTML = `<a href="${item.href}">${linkText}</a>`
            searchList.appendChild(foundLink);
        })
    }
}
