import DataTable from './components/DataTable';
import Filter from './components/Filter';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <main className="p-4 tracking-tight flex gap-4 mx-auto h-full w-full flex-col xl:flex-row relative overflow-x-hidden">
        <Navbar />
        <section className=" w-full h-full min-h-screen border rounded-xl border-[#e5e7eb]">
          <Header />
          <Filter />
          <DataTable />
        </section>
      </main>
    </>
  );
}

export default App;
