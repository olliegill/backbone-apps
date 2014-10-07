
/* global Backbone, _, $ */
'use strict';

var BlogCollections = Backbone.Collection.extend({
  model: BlogModel,
  url: '//tiny-pizza-server.herokuapp.com/collections/people'
});

var BlogModel = Backbone.Model.extend({

  validate: function(attributes){
    if (!attributes.firstName){
      return "First name is required.";
    }
    if(!attributes.lastName){
      return "Last name is required.";
    }
    if(!attributes.phone){
      return "Phone number is required";
    }
    if(!attributes.address){
      return "Address is required";
    }
    if(!attributes.zipcode){
      return "Zipcode is required";
    }
  },
});
var BlogView = Backbone.View.extend({
  tagName: 'div',
  className: 'blog-view',
  template: _.template($('#form-template').text()),

  events: {
    'click .save': 'saveForm',
  },

  saveForm: function(){
    var data = $('form').serializeObject();
    this.model.save(data);
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'invalid', this.invalidUser);
  },

  render: function(){
    $('body').append(this.$el.html(this.template()));
  },

  invalidUser: function(model,error){
			// add class to highlight validation errors.
			$('form input').addClass('invalid');
			alert(error);
		},

});

	$.fn.serializeObject = function(){
	  return this.serializeArray().reduce(function(acum, i){
	    acum[i.name] = i.value;
	    return acum;
	  }, {});
	};


$(document).ready(function(){




});
