var ko = require('knockout');

function HelloViewModel() {
  var self = this;

  // Data
  self.tabs = ['Home', 'Link', 'About'];
  self.chosenTabId = ko.observable();

  self.homeData = ko.observable({title: "home"});
  self.linkData = ko.observable({content: "link"});
  self.aboutData = ko.observable({description: "about"});

  self.chosenTabData = ko.computed(function() {
    var tab = self.chosenTabId();
    if( tab == 'Home' ) {
      return self.homeData();
    } else if( tab == 'Link' ) {
      return self.linkData();
    } else if( tab == 'About' ) {
      return self.aboutData();
    }
    return {};
  });

  // Behaviours
  self.goToTab = function(tab) { self.chosenTabId(tab); }

  self.goToTab('Home');
}

ko.applyBindings(new HelloViewModel());

