import DataTable from './components/DataTable';
import Filter from './components/Filter';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=" lg:p-20 p-4 tracking-tight ">
      <Navbar />
      <div className="py-4 w-full h-full min-h-screen border rounded-md border-[#e5e7eb]">
        <Header />
        <Filter />
        <DataTable />
      </div>
    </div>
  );
}

export default App;
