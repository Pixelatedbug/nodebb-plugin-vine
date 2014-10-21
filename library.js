(function(module) {
    "use strict";

    var Vine = {},
        embed = '<iframe class="vine-embed" src="https://vine.co/$1/postcard" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>'


    Vine.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:vine\.co)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = Vine;
}(module));
