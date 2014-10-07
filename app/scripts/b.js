(function(){
  'use strict';

   window.Ass = {};
  Ass.Views = {};
  Ass.Models = {};
  Ass.Collections = {};


Ass.Collections.Person = Backbone.Collection.extend({
  model: Ass.Models.Person,
  url: ' http://tiny-pizza-server.herokuapp.com/collections/people'
});

Ass.Models.Person = Backbone.Model.extend({

  validate: function(attirbutes){
    if (!attributes.firstName)
      return "First name is required.";

    if (!attributes.lastName)
      return "Last name is required.";

    if (!attributes.phone)
      return "Phone number is required.";

    if (!attributes.address)
      return "Address is required.";

    if (!attributes.zipcode)
      return "Zipcode is required.";
  },
  idAttribute: '_id',

});


Ass.Views.Person = Backbone.View.extend({
  tagName: 'form',
  className: 'form',
  template: _.template($('#form-template').text()),

  events: {
    'click .save': 'saveForm'
  },

  initialize: function(options){
    options = options || {};
    this.$container = options.$container ||$('body');
    this.template = options.$template;
    this.container.append(this.el);
    this.render();
    this.listenTo(this.collection, 'invalid', this.error);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});





}());
