const Node = function NodeFactory() {
  let value = null;
  let nextNode = null;

  return {
    value,
    nextNode,
  };
};

export default Node;
