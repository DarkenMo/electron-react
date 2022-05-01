import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer />
    </div>
  );
}

export default App;