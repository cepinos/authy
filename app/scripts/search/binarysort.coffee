# BinarySearch

binarysearch = (list, search) ->
  imin = 0
  imid = 0
  imax = list.length - 1

  while imin <= imax
    imid = middle imin, imax

    if list[imid] == search
      return imid
    else if list[imid] < search
      imin = imid + 1
    else
      imax = imid - 1

  -1

middle = (imin, imax)->
  imid = imin + (imax - imin) / 2
  return Math.floor imid

window.binarysearch = binarysearch
window.binarysearch.middle = middle