// Generated by CoffeeScript 1.10.0
(function() {
  var binarysearch, middle;

  binarysearch = function(list, search) {
    var imax, imid, imin;
    imin = 0;
    imid = 0;
    imax = list.length - 1;
    while (imin <= imax) {
      imid = middle(imin, imax);
      if (list[imid] === search) {
        return imid;
      } else if (list[imid] < search) {
        imin = imid + 1;
      } else {
        imax = imid - 1;
      }
    }
    return -1;
  };

  middle = function(imin, imax) {
    var imid;
    imid = imin + (imax - imin) / 2;
    return Math.floor(imid);
  };

  window.binarysearch = binarysearch;

  window.binarysearch.middle = middle;

}).call(this);
