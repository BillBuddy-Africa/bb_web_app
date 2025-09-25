import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ForgotPassword from "./auth/ForgotPassword";

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
           {/*  <Route path="/referrals" element={<Referals />} />
          <Route path="/support" element={<Help />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/crypto" element={<Crypto />}>
            <Route path="buycrypto" element={<BuyCrypto />} />
            <Route path="sellcrypto" element={<SellCrypto />} />
            <Route path="swapcrypto" element={<SwapCrypto />} />
          </Route>
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="account_upgrade" element={<AccountUpgrade />} />
          </Route>
          <Route path="/rates" element={<Rates />} /> */}
        </Route>
      </Routes>
    </>
  );
};
