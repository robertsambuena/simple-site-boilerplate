(function () {
    'use strict';

    angular.module('test', ['ui.bootstrap'])
        .controller('mainController', mainController);

    function mainController($http) {
        var vm = this;

        vm.testheader = 'Nice';
        vm.myInterval = 5000;
        vm.noWrapSlides = false;
        vm.slides = [
            {
              id: 1,
              image: 'cat1.jpg',
              text: 'fuckthisshit'
            },
            {
              id: 2,
              image: 'cat2.jpg',
              text: 'pusang badtrip'
            },
            {
              id: 3,
              image: 'cat3.jpg',
              text: 'nicela'
            },
            {
              id: 4,
              image: 'cat4.jpg',
              text: 'fabulous'
            },
            {
              id: 5,
              image: 'cat5.jpg',
              text: '...'
            },
        ];

        $http({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/posts'
        }).then(function (res) {
            console.log(res.data);
            vm.articles = res.data;
        }).catch(function (err) {
            console.log(err);
        });
    }
})();
