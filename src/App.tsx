import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import DashboardLayout from "./layouts/DashboardLayout";
import Wallet from "./pages/Wallet";
import Transactions from "./pages/Transactions";
import Referral from "./pages/Referral";
import Profile from "./pages/Profile";
import Help from "./pages/Help";

const App = () => {
  return (
    <BrowserRouter>
      <AppWithRoutes />
    </BrowserRouter>
  );
};

export default App;

const AppWithRoutes = () => {
  // const checkAuth = useAuthStore((state) => state.checkAuth);

  // const navigate = useNavigate();
  // const logout = useAuthStore((state) => state.logout);
  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // useIdleTimer(() => logout(navigate), 10 * 60 * 1000);

  return (
    <>
      {/* <RouteChangeHandler /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        {/* <Route path="/success" element={<RegSuccessful />} /> */}

        <Route path="/reset_password" element={<ResetPassword />} />
        {/* <Route
          path="/auth-account"
          element={
            <ProtectPassReset>
              <RecoverAccount />
            </ProtectPassReset>
          }
        /> */}
        {/* <Route
          path="/reset_password"
          element={
            <ProtectPassReset>
              <ResetPasswordInput />
            </ProtectPassReset>
          }
        /> */}
        {/* <Route
          path="/verify-otp"
          element={
            <ProtectedRoute>
              <VerifyOtp />
            </ProtectedRoute>
          }
        /> */}

        {/* Protected Dashboard with Nested Routes */}
        {/* <Route
          element={
            <ErrorBoundary>
              <ProtectedDashboard>
                <DashboardLayoutt />
              </ProtectedDashboard>
            </ErrorBoundary>
          }
        > */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Help />} />
          {/* More routes */}
        </Route>
      </Routes>
    </>
  );
};
