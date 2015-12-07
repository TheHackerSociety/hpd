/**
* Created with the-hacker-society.
* User: lablancas
* Date: 2015-10-21
* Time: 12:06 AM
* To change this template use Tools | Templates.
*/



Template.showCategories.helpers({
    categories: Categories
});

Template.showCategory.helpers({
    links: function() {
        return _.findWhere(categories, {_id: this._id}).links;
    }
});


