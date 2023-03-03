import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./modules/auth/pages/login.page";
import HomePage from "./modules/home/pages/home.page";
import ProtectRoutes from "./routes/protect";
import PublicRoutes from "./routes/public";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectRoutes />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
