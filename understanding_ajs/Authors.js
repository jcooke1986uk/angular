/// <reference path="angular.js" />
var AuthorApp = angular.module('AuthorApp', []);
AuthorApp.controller("MyController", function ($scope) {
    $scope.authors =
    [
        { 'name': 'Jenny Cooke','age': '19' },
        { 'name': 'Charles Darwin', 'age': '45' },
        { 'name': 'Santa Claus', 'age': '76' },
        { 'name': 'Deapool', 'age': '36' }
    ];
});