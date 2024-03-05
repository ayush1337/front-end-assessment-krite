import DataTable from './components/DataTable';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=" p-20  tracking-tight ">
      <Navbar />
      <div className="py-4 w-full h-full border rounded-md border-[#e5e7eb]">
        <DataTable />
      </div>
    </div>
  );
}

export default App;
