'use strict';

/* global marked */

angular.module('mpt.mathmd', [])

.directive('mathmd', function($q, $http) {

  function link(scope, element, attrs) {

    var originalDisplayStyle;

    // flow
    fetchContent(attrs.src)
      .then(formatMathJax)
      .then(formatMarkdown);

    // implementation
    function fetchContent(src) {
      return $http.get(src)
        .then(function(response) {
          return response.data;
        });
    }

    function formatMathJax(mdText) {
      var domElement = element[0];
      var result = $q.defer();
      domElement.textContent = mdText;
      originalDisplayStyle = domElement.style.display;
      domElement.style.display = "none";
      if (typeof MathJax !== 'undefined') {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, domElement]);
        MathJax.Hub.Queue(result.resolve);
      } else {
        result.resolve();
      }
      return result.promise;
    }

    function formatMarkdown() {
      var domElement = element[0];
      var sourceHTML = domElement.innerHTML;
      var resultHTML = marked(sourceHTML);
      domElement.innerHTML = resultHTML;
      domElement.style.display = originalDisplayStyle;
      var result = $q.defer();
      result.resolve();
      return result.promise;
    }
  }

  // public interface
  return {
    restrict: 'E',
    link: link,
  };
})

;
