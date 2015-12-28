angular.module('myApp').service('niceService', function () {
    this.niceList = [];
    this.naughtyList = [];

    this.addPerson = function (personObj) {
        var differenceScore = personObj.niceScore - personObj.naughtyScore;

        var person = buildPerson(personObj.name, differenceScore);
        if (differenceScore >= 10) {
            this.niceList.push(person);
        } else {
            this.naughtyList.push(person);
        }
    };
    function buildPerson(name, differenceScore) {
        return {
            name: name,
            score: differenceScore
        };
    }
});