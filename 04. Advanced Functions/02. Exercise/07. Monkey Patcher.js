function solution(action) {

    let actions = {
        upvote,
        downvote,
        score
    };

    function upvote(post) {
        post.upvotes++;
    }
    function downvote(post) {
        post.downvotes++;
    }
    function score(post) {
        let upvotes = post.upvotes;
        let downvotes = post.downvotes;
        let totalVotes = upvotes + downvotes;
        let rating;
        let balance = upvotes - downvotes;

        if ((upvotes / totalVotes) * 100 > 66) {
            rating = 'hot';
        } else if (balance >= 0 && totalVotes >= 200) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }

        if (post.upvotes > 50) {
            let obfuscatedValue = Math.round(Math.max(upvotes, downvotes) * 0.25);
            upvotes += obfuscatedValue;
            downvotes += obfuscatedValue;
        }
        balance = upvotes - downvotes;

        return [upvotes, downvotes, balance, rating]
    }

    return actions[action](this);
}

let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(post, 'upvote');
let score = solution.call(post, 'score');

console.log(score);


