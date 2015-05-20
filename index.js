var ko = require('knockout');

function HelloViewModel() {
  var self = this;

  // Data
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

ko.components.register('nav-bar', {
  viewModel: function(params) {
    var self = this;
    self.tabs = ['Home', 'Link', 'About'];
  },
  template: '<nav class="navbar navbar-default">\
    <div class="container-fluid">\
      <div class="navbar-collapse">\
        <ul class="nav navbar-nav" data-bind="foreach: tabs">\
          <li data-bind="css: { active: $data == $root.chosenTabId() }">\
            <a href="#" data-bind="text: $data, click: $root.goToTab"></a>\
          </li>\
        </ul>\
      </div>\
    </div>\
  </nav>'
});

ko.applyBindings(new HelloViewModel());

