import './numberBox.css';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const getClass = (number) => {
    if(isPrime(number)) return 'box red';
    if(number % 2 == 0) return 'box green';
    return 'box yellow' 
}

const NumberBox = ({number}) => {
    return <div className={getClass(number)}>{number}</div>
}

export default NumberBox;