import { useState } from 'react';
import DataTable from './components/DataTable';
import Filter from './components/Filter';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { SearchContext } from './utils/Context';

function App() {
  const [context, setContext] = useState('');
  return (
    <>
      <main className="p-4 tracking-tight flex gap-4 mx-auto h-full w-full flex-col xl:flex-row relative overflow-x-hidden">
        <Navbar />
        <section className=" w-full h-full min-h-screen border rounded-xl border-[#e5e7eb]">
          <SearchContext.Provider value={[context, setContext]}>
            <Header />
            <Filter />
            <DataTable />
          </SearchContext.Provider>
        </section>
      </main>
    </>
  );
}

export default App;
