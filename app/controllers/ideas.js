import Ember from 'ember';

export default Ember.Controller.extend({

  title: null,
  body: null,
  // model [all the ideas]
  actions: {
    addNewIdea: function () {
      let idea = this.getProperties('title', 'body'); // lets you get more than one property at a time.
      this.store.createRecord('idea', idea).save();
    },
    changeSort: function(type) {
      this.set("sortedProperties", [type])
    }
  },
  sortedIdeas: Ember.computed.sort("model", "sortedProperties"),
  /*sortedProperties has to be an array. Ember.computed actually has a built in observes in it which looks at sortedProperties.
  it fires the method sortedIdeas again when sortedProperties changes
  */

  sortedProperties: ["cost:desc"]
});



/* the component handls action local to component, but when that needs to bubble up, you send that to the controller
the controller handles action for the whole page. Think of an email component and does validation for whether its a valid email.
While you're typing, you have the ocmpoennt validate teh text taht's being input. If there is a button that's associated with it
that says submit email, that is handled in the controller because that's a page wide action. The controller shouldn't handle
minutae of component. The controller is more like something needs to happen that affects the page so I need to do thi saction... like
sorting here. The ocmponent shouldnt' worry about sort. The controller handles actions like sort. The controlelr also serves
to glue and transform data so that your view can just use it like sortedIdeas and sortedProperties.


something else the controller can do is send action back to the router. The controller can take in inputs from the form,
valid the form inputs in teh controller, and send the data back to the router which then hits the backend. That's another
the router can talk to the api and tlak to the backhand and save it.
*/
