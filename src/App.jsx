import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./app.css";
import MainLayout from "./pages/MainLayout";
import Error from "./pages/Error";
import OrderList from "./components/OrderList";
import AddCpu from "./components/AddCpu";
import CpuList from "./components/CpuList";
import MonitorList from "./components/MonitorList";
import AddMonitor from "./components/AddMonitor";
import PrinterList from "./components/PrinterList";
import AddPrinter from "./components/AddPrinter";
import ScannerList from "./components/ScannerList";
import AddScanner from "./components/AddScanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/add-cpu" element={<AddCpu />} />
          <Route path="/cpu-list" element={<CpuList />} />
          <Route path="/monitor-list" element={<MonitorList />} />
          <Route path="/add-monitor" element={<AddMonitor />} />
          <Route path="/printer-list" element={<PrinterList />} />
          <Route path="/add-printer" element={<AddPrinter />} />
          <Route path="/scanner-list" element={<ScannerList />} />
          <Route path="/add-scanner" element={<AddScanner />} />
          <Route path="/order-list" element={<OrderList />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
