import logo from './logo.svg';
import './App.css';
import Vertical_menu from './components/vertical_menu';
import Horizontal_menu from './components/horizontal_menu';
import Card from './components/card';
function App() {
  return (
    <div className="App">
      <div className="Primary_head">
        <Horizontal_menu />
      </div>
      <div className="Main_body">
        <Vertical_menu />
        <div className="Main_content">
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
          <Card title="boom" img={logo} creator="dsfdsf" time={1} />
        </div>
      </div>
    </div>
  );
}

export default App;
