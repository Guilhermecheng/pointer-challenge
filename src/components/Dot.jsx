import '../App.css';

export function Dot({ location }) {
  const { x, y } = location;
  return <div className="dot" style={{ top: y, left: x }}></div>;
}
