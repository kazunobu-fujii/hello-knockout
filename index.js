var ko = require('knockout');

function HelloViewModel() {
  var self = this;

  // Data
  self.tabs = ['Home', 'Link', 'About'];
  self.chosenTabId = ko.observable();
  self.homeData = ko.observable();
  self.linkData = ko.observable();
  self.aboutData = ko.observable();

  // Behaviours
  self.goToTab = function(tab) {
    self.chosenTabId(tab);

    self.homeData(null);
    self.linkData(null);
    self.aboutData(null);
    if( tab == 'Home' ) {
      self.homeData({title: "home"});
    } else if( tab == 'Link' ) {
      self.linkData({content: "link"});
    } else if( tab == 'About' ) {
      self.aboutData({description: "about"});
    }
  }

  self.goToTab('Home');
}

ko.applyBindings(new HelloViewModel());

