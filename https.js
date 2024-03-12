var app = angular.module('bookSearchApp', []);
 
app.controller('BookSearchController', function ($scope, $http) {
    $scope.searchQuery = '';
    $scope.books = [];
    $scope.loading = false;
    $scope.error = '';
 
    $scope.searchBooks = function () {
        $scope.loading = true;
        $scope.error = '';
 
        var apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent($scope.searchQuery);
 
        $http.get(apiUrl)
            .then(function (response) {
                $scope.books = response.data.items || [];
            })
            .catch(function (error) {
                $scope.error = 'Error fetching data. Please try again.';
                console.error('Error fetching data:', error);
            })
            .finally(function () {
                $scope.loading = false;
            });
    };
});