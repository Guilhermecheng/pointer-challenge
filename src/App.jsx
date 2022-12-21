import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Dot } from './components/Dot';

function App() {
  const unDoButton = useRef();
  const reDoButton = useRef();
  const [pointList, setPointList] = useState([]);
  const [unDoed, setunDoed] = useState([]);

  function clickListener(event) {
    if (unDoButton.current.contains(event.target)) {
      return;
    } else if (reDoButton.current.contains(event.target)) {
      return;
    } else {
      setunDoed([]);
    }

    let x = event.pageX;
    let y = event.pageY;
    let points = { x, y };
    setPointList((pointList) => [...pointList, points]);
    // console.log(pointList);
  }

  function unDo() {
    if (pointList.length > 0) {
      let lastitem = pointList[pointList.length - 1];
      setunDoed((unDoed) => [...unDoed, lastitem]);
    }

    setPointList((list) => {
      let arrayRemove = list.length - 1;
      return list.filter((_, i) => i !== arrayRemove);
    });
    console.log(pointList);
  }

  function reDo() {
    if (unDoed.length > 0) {
      setPointList((pointList) => [...pointList, unDoed[unDoed.length - 1]]);
      setunDoed((list) => {
        let arrayRemove = list.length - 1;
        return list.filter((_, i) => i !== arrayRemove);
      });
    }
  }

  useEffect(() => {
    document.addEventListener('click', clickListener);
  }, []);

  return (
    <div className="App">
      {pointList.map((pointUnit, index) => {
        return <Dot key={index} location={pointUnit} />;
      })}

      <div className="menu">
        <button onClick={unDo} ref={unDoButton}>
          Undo
        </button>
        <button onClick={reDo} ref={reDoButton}>
          Re do
        </button>
      </div>
    </div>
  );
}

export default App;
