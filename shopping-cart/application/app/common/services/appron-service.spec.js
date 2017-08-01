describe('Appron Service', function() {
  var appronService;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('common.services'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_AppronService_) {
    appronService = _AppronService_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(appronService).toBeDefined();
  });
});