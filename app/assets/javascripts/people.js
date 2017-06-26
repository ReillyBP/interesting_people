document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Interesting People',
      people: [{name: "Sami", bio: "super cool", bioVisible: true}, {name: "Sylvester", bio: "is a cat", bioVisible: true}, {name: "Kyle McLaughlin", bio: "is the mayor of Portlandia and is in Twin Peaks", bioVisible: true}],
    },
    methods: {
      toggleBio: function(person) {
        person.bioVisible = !person.bioVisible;
      },

      addPerson: function () {
      this.people.push({name: this.newName, bio: this.newBio, bioVisible: false});
      this.newBio = "";
      this.newName = ""; },
    },
  });
});