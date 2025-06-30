import NumberBox from './NumberBox';

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31,
];

const NumberGrid = () => {
  return (
    <div className="grid">
      {numbers.map((num) => (
        <NumberBox key={num} number={num} />
      ))}
    </div>
  );
};

export default NumberGrid;