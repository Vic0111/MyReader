var app = angular.module("storyApp", []);
app.controller("storyCtrl", function($scope) {
    $scope.title = "";
    $scope.summary = "";
    $scope.clear = function() {
        $scope.title = "";
        $scope.summary = "";
    };
    $scope.save  = function() {
        tinyMCE.triggerSave();
        var summary = $('[name=summary]').val();
        var story = {title : $scope.title, summary : summary};
        $.post("/story/createnew",story,function(data){
            alert(data);
        }).fail(function(xhr, textStatus, errorThrown){
            alert(errorThrown);
        });
    };
});