import DS from 'ember-data';

let Idea = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  cost: DS.attr("number")
  // look up validation ember
});

Idea.reopenClass({
  FIXTURES: [
    { id: 1, title: "first Idea", body: "Lorem ipsum", cost: 40 },
    { id: 2, title: "second Idea", body: "Lorem ipsum", cost: 70 },
    { id: 3, title: "third Idea", body: "Lorem ipsum…", cost: 60 },
    { id: 4, title: "zirst Idea", body: "Lorem ipsum…", cost: 40 },
    { id: 5, title: "yirst Idea", body: "Lorem ipsum…", cost: 80 }
  ]
});

export default Idea;
