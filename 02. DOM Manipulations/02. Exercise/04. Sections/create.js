function create(sentences) {
    sentences.forEach(s => {
       let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = s;
        p.style.display = 'none';
        div.addEventListener('click', function () {
            this.firstChild.style.display = 'block';
        });
        div.appendChild(p);
        document.getElementById('content').appendChild(div);
    });
}