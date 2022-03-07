import ChurrasList from "./pages/ChurrasList";
import ChurrasAgenda from "./pages/ChurrasAgenda";
import Login from "./pages/Login";
import NewChurrasEvent from "./pages/NewChurrasEvent";
import { GlobalStyle } from "./styles/global";
import { Routes, Route } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/agenda" element={<ChurrasAgenda />} />
        <Route path="/lista/:churrasId" element={<ChurrasList />} />
        <Route path="/novochurras" element={<NewChurrasEvent />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
