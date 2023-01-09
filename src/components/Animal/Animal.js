import animals from '../../data.js';
import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`/animals/${props.type}.svg`} />
      <h2>{props.name}</h2>
    </div>
  );
}
