describe('Testing angular JS Test Suite', function () {

    beforeEach( module('testingAngularApp'));


   describe('Testing angular js controller', function () {
       var scope;
       var ctrl;
       beforeEach( inject(function ($controller, $rootScope) {
           scope = $rootScope.$new();
           ctrl = $controller('testingAngularCtrl', {$scope : scope})
       }));
       afterEach(function () {
           //Cleane
       });

       it('ahould initialize the title in the scope', function () {
          expect(scope.title).toBeDefined();
          expect(scope.title).toBe('testin angularjs');
       });

       it('should add two destinations to the destination list', function () {
           expect(scope.destinations).toBeDefined();
           expect(scope.destinations.length).toBe(0);

           scope.newDestination = {
               city: 'London',
               country : 'England'
           };

           scope.addDestination();

           expect(scope.destinations.length).toBe(1);
           expect(scope.destinations[0].city).toBe('London');
           expect(scope.destinations[0].country).toBe('England');

           scope.newDestination = {
               city: 'Minsk',
               country : 'Belarus'
           };
           scope.addDestination();
           expect(scope.destinations.length).toBe(2);
           expect(scope.destinations[1].city).toBe('Minsk');
           expect(scope.destinations[1].country).toBe('Belarus');

           expect(scope.destinations[0].city).toBe('London');
           expect(scope.destinations[0].country).toBe('England');
       });

       it('should remove a destination from the destinations list', function () {
           scope.destinations = [
               {
                   city: 'London',
                   country : 'England'
               },
               {
                   city: 'Varshava',
                   country : 'Poland'
               }
           ];
           expect(scope.destinations.length).toBe(2);
           scope.removeDestination(0);
           expect(scope.destinations.length).toBe(1);
           expect(scope.destinations[0].city).toBe('Varshava');
           expect(scope.destinations[0].country).toBe('Poland')
       });


   }) ;
});