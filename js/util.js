function createIdGenerator() {
  let lastGeneratedId = 0;

  return function() {
    return lastGeneratedId++;
  };
}

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export { createIdGenerator, getRandomInteger, getRandomArrayElement };
