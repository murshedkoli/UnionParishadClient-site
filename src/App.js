import Home from "./pages/home/Home";
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { Routes, Route } from "react-router-dom";
import './style/dark.css'
import { createContext, useContext, useState } from "react";
import { DarkModeContext } from "./components/context/darkModeContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AddAdmin from "./pages/addAdmin/AddAdmin";
import AdminList from "./pages/adminList/AdminList";
import SingleAdmin from "./pages/singleAdmin/SingleAdmin";
import NationalityCertificate from "./components/services/natinalityCertificate/NationalityCertificate";
import OarishSanad from "./components/services/oarishSanad/OarishSanad";
import Taxreceipt from "./components/services/taxreceipt/Taxreceipt";
import CharitrikSanad from "./components/services/charitrikSanad/CharitrikSanad";
import TradeLicense from "./components/services/tradeLicense/TradeLicense";
import TradeLicenseList from "./pages/tradeLicenses/TradeLicenseList";
import LicenseSingle from "./pages/tradeLicenses/LicenseSingle";


export const mainUser = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "App dark" : "App"}>
      <mainUser.Provider value={[loggedInUser, setLoggedInUser]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/">
              <Route index element={<Home />} />

              <Route path="citizens">
                <Route index element={<List />} />
                <Route path=":nid"  >
                  <Route index element={<Single />} />
                  <Route path="ncertificate" element={<NationalityCertificate />} />
                  <Route path="oarish" element={<OarishSanad />} />
                  <Route path="taxreceipt" element={<Taxreceipt />} />
                  <Route path="charitrtiksanad" element={<CharitrikSanad />} />
                  <Route path="tradelicense" element={<TradeLicense />} />
                  <Route path="licenselist"  >
                    <Route index element={<TradeLicenseList />} />
                    <Route path=":lincesKey" element={<LicenseSingle />} />
                  </Route>


                </Route>

                <Route path="new" element={<New />} />
              </Route>

              <Route path="licenselist"  >
                <Route index element={<TradeLicenseList />} />
                <Route path=":lincesKey" element={<LicenseSingle />} />
              </Route>




              <Route path="admins">

                <Route index element={<AdminList />} />

                <Route path=":username" element={<SingleAdmin />} />
                <Route path="new" element={<AddAdmin />} />
              </Route>
              <Route path="tradeLicenses" element={<TradeLicenseList />} />

            </Route>
          </Route>

        </Routes>
      </mainUser.Provider>
    </div >
  );
}

export default App;
