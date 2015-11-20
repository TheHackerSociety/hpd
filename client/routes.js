/**
* Created with the-hacker-society.
* User: lablancas
* Date: 2015-10-21
* Time: 12:37 AM
* To change this template use Tools | Templates.
*/

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.redirect('/categories');
});

Router.route('/categories', {
    name: 'category.list',
    template: 'showCategories'
});

Router.route('/categories/:_id', {
    name: 'category.show',
    template: 'showCategory',
    data: function() {
        return {_id: this.params._id, back: 'category.list'};
    }
});

