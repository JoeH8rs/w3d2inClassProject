angular.module('myApp').controller('mainControl', function ($scope) {
    $scope.test = "Donzo"
    $scope.niceList = [];
    $scope.naughtyList = [];

    $scope.addNewPerson = function () {
        var differenceScore = $scope.niceScore - $scope.naughtyScore;

        if (differenceScore >= 10) {
            $scope.niceList.push(buildPerson(differenceScore));
        } else {
            $scope.naughtyList.push(buildPerson(differenceScore));
        }
    };

    function buildPerson(differenceScore) {
        return {
            name: $scope.name,
            score: differenceScore
        };
    }
    
    /*
         {
             name: 'Luke Skywalker',
             niceScore: (0-100)
             naughtyScore: (0-100)
             
         }
    */
});