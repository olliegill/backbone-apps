/* global Backbone, _, $ */
'use strict';

var Blog = Backbone.Model.extend({
  defaults: {
    title: "",
    body: ""
  },

  url: "http://tiny-pizza-server.herokuapp.com/collections/posts",
});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: "http://tiny-pizza-server.herokuapp.com/collections/posts",

});

var BlogView = Backbone.View.extend({
  tagName: 'div',
  className: 'post',
  template: _.template($('#blog-template').text()),

  events: {
    'click .post-button': 'addToCollection',
  },

  initialize: function(){
    this.render();
  },

  addToCollection: function(){
    var title = $('.title').val();
    var body = $('.body').val();
    this.collection.create([{title: title, body: body}]);
    //this.model.create(post);
  },

  render: function(){
    $('body').append(this.$el.html(this.template()));
  }
});




$(document).ready(function(){

var post = new BlogCollection();
var publish = new BlogView({collection: post});

});
