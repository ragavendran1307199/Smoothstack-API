import {useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AdminPanel } from "./pages/adminPanel";
import { Login } from "./pages/login";
import CreateNewPassword from "./pages/createNewPassword";
import { useState } from "react";
import ProtectedRoutes from "./utils/protectedRoutes";
import withNavbar from "./utils/navRender";
import Cookies from 'js-cookie';

function App() {

  const [flag, setFlag] = useState(false)
  useEffect(() => {
    const token = Cookies.get('auth');
    if (token){
      // console.log(token)
      setFlag(true)
    }
  }, [])
  
  const HomeWithNavbar = withNavbar(Home);
  const AdminPanelWithNavbar = withNavbar(AdminPanel);
  const CreateNewPasswordWithNavbar = withNavbar(CreateNewPassword);
  return (
    <>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomeWithNavbar adminBool={flag}/>} />
            <Route path="/admin" element={<AdminPanelWithNavbar  adminBool={flag}/>} />
            <Route path="/createpass" element={<CreateNewPasswordWithNavbar adminBool={flag}/>} />
          </Route>
        </Routes>
    </>
  )
}

export default App


{/* <>
<Navbar adminBool={true} />
<Container className="mb-8">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<AdminPanel />} />
    <Route path="/createPassword" element={<CreateNewPassword/>}/>
  </Routes>
</Container>
</> */}


{/* <Container className="mb-4 bg-secondary">
        <Routes>
          {
            ['/admin', '/', '/login'].map(
              (path, i) => {
                return <Route key={i} path={path} element={<Login flag={flag} setFlag={setFlag}/>} />
              }
            )
          }
        </Routes>
      </Container> */}