import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,useLocation} from 'react-router-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/public/Home';
import Login from './components/public/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Users from './pages/admin/users/Users';
import UserDetails from './pages/admin/userDetails/UserDetails';
import Transactions from './pages/admin/transactions/Transactions';
import LoansInAdmin from './pages/admin/loans/LoansInAdmin';
import AdminSettings from './pages/admin/settings/AdminSettings';
import Application from './pages/admin/applications/Application';
import Signup from './components/public/Signup';
import NavbarUserOutlet from './pages/user/NavbarUserOutlet';
import UserDashboard from './pages/user/UserDashboard';
import ApplicationForm from './pages/user/ApplicationForm';
import PaymentSection from "./pages/user/PaymentSection";
import UserAnalysis from "./pages/user/UserAnalysis";
import EditProfile from "./pages/user/EditProfile";
import ApplicationFormContinued from "./components/user/ApplicationFormContinued";
import Logout from "./pages/user/Logout";
import AdminNavbar from './components/admin/AdminNavbar';
import LoansInUser from './pages/user/LoansInUser';
// import UserDetails from './UserDetails';

function App() {
    // const url='public';
    // const router=createBrowserRouter(
    // createRoutesFromElements(
    //   url==='public' ?
    //   <Route path="/" element={<Navbar/>} >
    //     <Route index element={<Home/>}/>
    //     <Route path='/register' element={<Register/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //   </Route>
    //   : url==='admin' ?
    //   <Route path="/" element={<AdminNavbar/>}>
    //     <Route index element={<Dashboard/>}/>
    //     <Route path='/users' element={<Users/>}/>
    //     <Route path='/user/:userId' element={<UserDetails/>}/>
    //     <Route path='/transactions' element={<Transactions/>}/>
    //     <Route path='/applications' element={<Application/>}/>
    //     <Route path='/admin-loans' element={<LoansInAdmin/>}/>
    //     <Route path='/settings' element={<AdminSettings/>}/>
    //   </Route>
    //   :
    //   <Route path='/' element={<AdminNavbar/>}>

    //   </Route>
   // )
  //)
  return (
    <>
    {/* <RouterProvider router={router}/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/admin' element={<AdminNavbar/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='user/:userId' element={<UserDetails/>}/>
          <Route path='transactions' element={<Transactions/>}/>
          <Route path='applications' element={<Application/>}/>
          <Route path='loans' element={<LoansInAdmin/>}/>
          <Route path='settings' element={<AdminSettings/>}/>
        </Route>
        <Route path="/user" element={<NavbarUserOutlet />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="loans" element={<LoansInUser />} />
          <Route path='applicationform/:loanId' element={<ApplicationForm />} />
          <Route
            path="applicationformcontinue/:loanId"
            element={<ApplicationFormContinued />}
          />
          <Route path="analysis" element={<UserAnalysis />} />
          <Route path="payment" element={<PaymentSection />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
