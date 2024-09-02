import logo from './logo.svg';
import './App.css';
import Vertical_menu from './components/vertical_menu';
import Horizontal_menu from './components/horizontal_menu';
import Card from './components/card';




import img1 from './assets/img1.jpg'
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";


function App() {
  return (
    <div className="App">
      <div className="Primary_head">
        <Horizontal_menu />
      </div>
      <div className="Main_body">
        <Vertical_menu />
        <div className="Main_content">
          <Card title="boom" img={img1} creator="dsfdsf" time={1} />
          <Card title="boom" img={img2} creator="dsfdsf" time={1} />
          <Card title="boom" img={img3} creator="dsfdsf" time={1} />
          <Card title="boom" img={img4} creator="dsfdsf" time={1} />
          <Card title="boom" img={img5} creator="dsfdsf" time={1} />
          <Card title="boom" img={img6} creator="dsfdsf" time={1} />
          <Card title="boom" img={img7} creator="dsfdsf" time={1} />
          <Card title="boom" img={img8} creator="dsfdsf" time={1} />
          <Card title="boom" img={img9} creator="dsfdsf" time={1} />
          <Card title="boom" img={img10} creator="dsfdsf" time={1} />
          <Card title="boom" img={img11} creator="dsfdsf" time={1} />
          <Card title="boom" img={img12} creator="dsfdsf" time={1} />
         
        </div>
      </div>
    </div>
  );
}

export default App;
