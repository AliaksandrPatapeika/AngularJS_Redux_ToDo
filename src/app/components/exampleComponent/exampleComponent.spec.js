describe('Component: exampleComponent', () => {
  beforeEach(angular.mock.module('app'));

  let element;
  let scope;
  let controller;

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    element = angular.element('<example-component></example-component>');
    element = $compile(element)(scope);
    controller = element.taskItemController('exampleComponent');
    // scope.attr-value = 'test'; //if component has attributes
    scope.$apply();
  }));

  it('should have text binding set', () => {
    expect(controller.text).toEqual('Angular 1.6 Webpack Seed Project');
  });
});
