function getArticleGenerator(articles) {
    let div = $('#content');

    return function () {
        if (articles.length > 0) {
            let article = $(`<article>${articles.shift()}</article>`);
            div.append(article);
        }
    }

}