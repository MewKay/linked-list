const Node = function NodeFactory(value = null) {
  let nextNode = null;

  return {
    value,
    nextNode,
  };
};

const LinkedList = function LinkedListFactory() {
  let head = null;

  const isEmpty = function checkIfListEmpty() {
    return head === null;
  };

  const getTail = function getLastElementOfList() {
    let tail = head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    return tail;
  };

  const prepend = function addNodeToStart(value) {
    const previousHead = head;
    head = Node(value);
    head.nextNode = previousHead;
  };

  const append = function addNodeToEnd(value) {
    if (isEmpty()) {
      prepend(value);
      return;
    }

    const tail = getTail();
    const nodeToAppend = Node(value);
    tail.nextNode = nodeToAppend;
  };

  const size = function getTotalSizeOftheList() {
    let currentNode = head;
    let counter = 0;

    while (currentNode !== null) {
      counter += 1;
      currentNode = currentNode.nextNode;
    }

    return counter;
  };

  const at = function getNodeAt(index) {
    if (isEmpty() || size() < index || !index) {
      return null;
    }

    let currentIndex = 1;
    let nodeToGet = head;

    while (currentIndex !== index) {
      nodeToGet = nodeToGet.nextNode;
      currentIndex += 1;
    }

    return nodeToGet;
  };

  const pop = function removeTailFromList() {
    if (isEmpty()) {
      return;
    }

    const newTail = at(size() - 1);
    newTail.nextNode = null;
  };

  const contains = function checkIfValueIsInsideList(value) {
    if (isEmpty()) {
      return false;
    }

    let nodeToCheck = head;

    while (nodeToCheck.nextNode !== null) {
      if (nodeToCheck.value === value) {
        return true;
      }

      nodeToCheck = nodeToCheck.nextNode;
    }

    return false;
  };

  const find = function getIndexOfNodeWith(value) {
    if (isEmpty()) {
      return null;
    }

    let currentNode = head;
    let currentIndex = 1;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    return null;
  };

  const toString = function formatListToString() {
    if (isEmpty()) {
      return null;
    }

    let currentNode = head;
    let stringList = `( ${currentNode.value} )`;

    while (currentNode.nextNode !== null) {
      stringList = stringList + ` -> ( ${currentNode.nextNode.value} )`;
      currentNode = currentNode.nextNode;
    }

    stringList = stringList + " -> null";
    return stringList;
  };

  const insertAt = function insertValueAtIndex(value, index) {
    if (isEmpty() || size() < index || !index) {
      return;
    }

    if (index === 1) {
      prepend(value);
    } else {
      const nodeToInsert = Node(value);
      const previousNode = at(index - 1);
      const nextNode = previousNode.nextNode;
      previousNode.nextNode = nodeToInsert;
      nodeToInsert.nextNode = nextNode;
    }
  };

  const removeAt = function removeNodeAtIndex(index) {
    if (isEmpty() || size() < index || !index) {
      return;
    }

    if (index === 1) {
      head = at(2);
    } else {
      const previousNode = at(index - 1);
      previousNode.nextNode = previousNode.nextNode.nextNode;
    }
  };

  return {
    get head() {
      return head;
    },
    get tail() {
      return getTail();
    },
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const List = LinkedList();
List.append(15);
List.prepend(154);
List.append(18);
List.prepend(51);
List.append(1887);
List.append(1544);
List.append(1854848);
console.log(List.toString());

List.removeAt(1);
console.log(List.toString());
console.log(List.head);
console.log(List.contains(51));
