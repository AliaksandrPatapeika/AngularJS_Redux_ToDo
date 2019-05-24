describe('Example Service', () => {
  beforeEach(angular.mock.module('app'));

  beforeEach(inject(_exampleService_ => {
    exampleService = _exampleService_;
  }));

  it('should exist', () => {
    expect(exampleService).toBeDefined();
  });

  it('should expose getName()', () => {
    expect(exampleService.getName).toBeDefined();
  });

  it('getName() should return a name string', () => {
    expect(exampleService.getName()).toEqual('ExampleServiceTest');
  });

  it('items in constructor should be exposed', () => {
    expect(exampleService.name).toEqual('ExampleServiceTest');
  });
});
