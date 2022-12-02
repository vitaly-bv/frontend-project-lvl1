// вынос функции для генерации случайных чисел

const getRandomNumber = (begin, end) => {
  const randomNum = Math.floor(Math.random() * end + begin);
  return randomNum;
};

export default getRandomNumber;
