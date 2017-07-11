function wikiParser(id) {
    let textBox = $(id);
    let text = $(id).text();
    let boldPattern = /'''([^'=\[\]\|]+)'''/g;
    text = text.replace(boldPattern, `<b>$1</b>`);
    let italicsPattern = /''([^'=\[\]\|]+)''/g;
    text = text.replace(italicsPattern, `<i>$1</i>`);
    let headingsPattern1 = /(?:^|\s)=([^'=\[\]\|]+)=(?:$|\s)/g;
    text = text.replace(headingsPattern1, `<h1>$1</h1>`);
    let headingsPattern2 = /(?:^|\s)==([^'=\[\]\|]+)==(?:$|\s)/g;
    text = text.replace(headingsPattern2, `<h2>$1</h2>`);
    let headingsPattern3 = /(?:^|\s)===([^'=\[\]\|]+)===(?:$|\s)/g;
    text = text.replace(headingsPattern3, `<h3>$1</h3>`);
    let firstLinkPattern = /\[\[([^\]\|]+)\]\]/g;
    text = text.replace(firstLinkPattern, `<a href="/wiki/$1">$1</a>`);
    let secondLinkPattern = /\[\[([^\]]+)\|([^\]]+)\]\]/g;
    text = text.replace(secondLinkPattern, `<a href="/wiki/$1">$2</a>`);

    textBox.html(text);
}