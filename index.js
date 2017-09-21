function getFirstSelector(selector) {
  const match = document.querySelector(selector);
  return match;
}

function nestedTarget() {
  const pulled = document.getElementById('nested');
  return pulled;
}

function deepestChild() {
  const depth = document.getElementById('grand-node').querySelectorAll('div');
  var solution = '';

  for (var i = 0; i < depth.length; i++) {
    solution = depth[i]
  }

  return solution;
}

function increaseRankBy(n) {
  const nodeList = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n;
  }
}
