const randomCardGenerator = () => {
  let cards = [
    {
      order: 0,
      shape: "circle",
      hidden: true,
    },
    {
      order: 1,
      shape: "circle",
      hidden: true,
    },
    {
      order: 2,
      shape: "triangle",
      hidden: true,
    },
    { order: 3, shape: "square", hidden: true },
    {
      order: 4,
      shape: "triangle",
      hidden: true,
    },
    {
      order: 5,
      shape: "square",
      hidden: true,
    },
  ];
  // generate random number between min and max
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  //   generate unique numbers
  let numbers = [];
  for (let i = 0; i < cards.length; i++) {
    let number = getRandomIntInclusive(0, 5);
    if (!numbers.includes(number)) {
      numbers.push(number);
    } else {
      i--;
    }
  }
  // assign random numbers to cards (order)
  for (let i = 0; i < cards.length; i++) {
    cards[i].order = numbers[i];
  }

  return cards;
};

export default randomCardGenerator;
