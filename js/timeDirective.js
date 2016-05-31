angular.module("timeApp").directive("showTime", function() {
  return {
    restrict: 'E',
    template: "<div>The current time is {{time}}</div>",
    scope: {},
    link: function(scope, element, attrs) {
        var currentTime = new Date();
        scope.time = currentTime.toString();
        element.css({
          color: attrs.color,
        });
      }
  };
});
