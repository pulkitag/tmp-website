//in somefile.js, please note that you should namespace your modules
var Author = {
    //default config
    config: {
        el: '#author',
        name: 'Author Name',
        url: 'empty.com'
    },

    init: function (config) {
        var cfg = this.config = $.extend({}, this.config, config);
        $(cfg.el).html('<a href=' + cfg.url + '>' + cfg.name + '</a>');
    }
};

Object.create(Author).init({
    el: '#taochen',
    name: 'Tao Chen',
    url: "https://taochenshh.github.io/"
});

Object.create(Author).init({
    el: '#jacobhuh',
    name: 'Jacob Huh',
    url: "http://minyounghuh.com/"
});

$(function () {
    Object.create(Author).init({
        el: '#taochen',
        name: 'Tao Chen',
        url: "https://taochenshh.github.io/"
    });

    Object.create(Author).init({
        el: '#jacobhuh',
        name: 'Jacob Huh',
        url: "http://minyounghuh.com/"
    });
});
