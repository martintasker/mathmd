'use strict';

/* jshint jasmine:true */
/* global inject */

describe('mathmd tag without MathJax installed', function() {

  var MARKDOWN_DATA = "" +
    "# About\n" +
    "\n" +
    "This is maths: $E=mc^2$\n" +
    "\n" +
    "And this is _prose_." +
    "";

  var MARKDOWN_RESULT_CONTENT_NO_MATHJAX = "" +
    "About\n" +
    "This is maths: $E=mc^2$\n" +
    "And this is prose.\n" +
    "";

  var MARKDOWN_RESULT_HTML_NO_MATHJAX = "" +
    "<h1 id=\"about\">About</h1>\n" +
    "<p>This is maths: $E=mc^2$</p>\n" +
    "<p>And this is <em>prose</em>.</p>\n" +
    "";

  var scope;
  var $compile, $timeout;
  var $httpBackend;
  var domElement, ngElement;

  beforeEach(module('mpt.mathmd'));

  beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_, _$httpBackend_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $timeout = _$timeout_;
    $httpBackend = _$httpBackend_;
  }));

  function compile() {
    $httpBackend.expectGET("test-mathmd.md").respond(MARKDOWN_DATA);
    ngElement = $compile('<mathmd id="that" src="test-mathmd.md"></mathmd>')(scope);
    $httpBackend.flush();

    angular.element(document.getElementsByTagName('body')[0]).append(ngElement);
    scope.$apply();
    $timeout.flush();
    domElement = document.getElementById('that');
  }

  describe('basic tests', function() {
    it('should not be running with MathJax defined)', function() {
      expect(typeof MathJax).toEqual('undefined');
    });
    it('should build text content with no math', function() {
      compile();
      expect(domElement.textContent).toEqual(MARKDOWN_RESULT_CONTENT_NO_MATHJAX);
    });
    it('should build HTML content with no math', function() {
      compile();
      expect(domElement.innerHTML.indexOf(MARKDOWN_RESULT_HTML_NO_MATHJAX)).toBeGreaterThan(-1);
    });
  });

  describe('options tests', function() {
    beforeEach(function() {
      angular.module('mpt.mathmd').config(function() {});
    });
    it('should not distort the universe', function() {
      expect(1 + 1).toEqual(2);
    });
  });
});

xdescribe('Markdown tests with MathJax included', function() {
  // todo: suitable tests
});
