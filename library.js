(function(module) {
    "use strict";

    var Vine = {},
        embed = '<iframe width="480" height="480" src="https://vine.co/v/$1/embed/simple" frameborder="0" scrolling="no" allowtransparency="true"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>';
    var link = /<a href="(?:https?:\/\/)?(?:vine\.co)\/v\/?(.+)">.+<\/a>/g;

    Vine.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(link)) {
            data.postData.content = data.postData.content.replace(link, embed);
        }
        callback(null, data);

    };

    module.exports = Vine;
}(module));
