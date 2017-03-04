/// <reference path="angular.js" />
var AuthorApp = angular.module('AuthorApp', []);
AuthorApp.controller("MyController", function ($scope) {
    $scope.authors =
    [
        { 'name': 'Jenny Cooke' },
        { 'name': 'Charles Darwin' },
        { 'name': 'Santa Claus' },
        { 'name': 'Deapool' }
    ];
});