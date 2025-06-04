import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";



import Products from "./pages/Products";
import Customer from "./pages/Customers";
import AdminUsers from "./pages/AdminUsers";
import Orders from "./pages/Orders";
import Category from "./pages/Category";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import Brand from "./pages/Brand";
import Pages from "./pages/Pages";
import AddBrand from "./pages/AddBrand";
import OurStore from "./pages/OurStore"
import Account from "./pages/Account";
import Ourstaff from "./pages/Ourstaff";

/******************* Realty Focus ********************/
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { AuthProvider } from "./auth/auth";
import RequireAuth from "./auth/RequireAuth";
import RedirectIfLoggedIn from "./auth/RedirectIfLoggedIn";
import Coupons from "./pages/Coupons";
import Events from "./pages/Event";
import Blogs from "./pages/Blogs";
import SubBrand from "./pages/SubBrand";
import Banners from "./pages/Banners";
import Microsite from "./pages/Microsite";
import Builder from "./pages/Builder";
import MicrositeDetails from "./pages/MicrositeDetails";
import FloorPlan from "./pages/FloorPlan";
import Amenities from "./pages/Amenities";
import Specifications from "./pages/Specifications";
import BankApproval from "./pages/BankApproval";
import LegalApproval from "./pages/LegalApproval";
import PropStatus from "./pages/PropStatus";
import PropType from "./pages/PropType";
import MicrositeMetaTag from "./pages/MicrositeMetaTag";
import MicrositePrice from "./pages/MicrositePrice";
import AccessControl from "./pages/AccessControl";
import UserList from "./pages/UserList";
import SpecificationsDetail from "./pages/specificationsDetail";


const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectIfLoggedIn>
                  <Login />
                </RedirectIfLoggedIn>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products"
              element={
                <RequireAuth>
                  <Products />
                </RequireAuth>
              }
            />
            <Route
              path="/add-product"
              element={
                <RequireAuth>
                  <AddProduct />
                </RequireAuth>
              }
            />

            <Route
              path="/customer"
              element={
                <RequireAuth>
                  <Customer />
                </RequireAuth>
              }
            />
            <Route
              path="/orders"
              element={
                <RequireAuth>
                  <Orders />
                </RequireAuth>
              }
            />
            <Route
              path="/pages"
              element={
                <RequireAuth>
                  <Pages />
                </RequireAuth>
              }
            />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <AdminUsers />
                </RequireAuth>
              }
            />
            <Route
              path="/category"
              element={
                <RequireAuth>
                  <Category />
                </RequireAuth>
              }
            />
            <Route
              path="/add-category"
              element={
                <RequireAuth>
                  <AddCategory />
                </RequireAuth>
              }
            />
            <Route
              path="/brand"
              element={
                <RequireAuth>
                  <Brand />
                </RequireAuth>
              }
            />
            <Route
              path="/sub-brand"
              element={
                <RequireAuth>
                  <SubBrand />
                </RequireAuth>
              }
            />
            <Route
              path="/add-brand"
              element={
                <RequireAuth>
                  <AddBrand />
                </RequireAuth>
              }
            />
            <Route
              path="/our-store"
              element={
                <RequireAuth>
                  <OurStore />
                </RequireAuth>
              }
            />
            <Route
              path="/staff"
              element={
                <RequireAuth>
                  <Ourstaff />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/coupons"
              element={
                <RequireAuth>
                  <Coupons />
                </RequireAuth>
              }
            />
            <Route
              path="/events"
              element={
                <RequireAuth>
                  <Events />
                </RequireAuth>
              }
            />
            <Route
              path="/blogs"
              element={
                <ProtectedRoute>
                  <Blogs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/banners"
              element={
                <RequireAuth>
                  <Banners />
                </RequireAuth>
              }
            />
            <Route
              path="/microsite"
              element={
                <ProtectedRoute>
                  <Microsite />
                </ProtectedRoute>
              }
            />
            <Route
              path="/microsite-meta-tag"
              element={
                <ProtectedRoute>
                  <MicrositeMetaTag />
                </ProtectedRoute>
              }
            />
            <Route
              path="/microsite-details"
              element={
                <ProtectedRoute>
                  <MicrositeDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/builder"
              element={
                <ProtectedRoute>
                  <Builder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/floor-plan"
              element={
                <ProtectedRoute>
                  <FloorPlan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/amenities"
              element={
                <ProtectedRoute>
                  <Amenities />
                </ProtectedRoute>
              }
            />
            <Route
              path="/specifications"
              element={
                <ProtectedRoute>
                  <Specifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/specifications-detail"
              element={
                <ProtectedRoute>
                  <SpecificationsDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bank-approval"
              element={
                <ProtectedRoute>
                  <BankApproval />
                </ProtectedRoute>
              }
            />
            <Route
              path="/legal-approval"
              element={
                <ProtectedRoute>
                  <LegalApproval />
                </ProtectedRoute>
              }
            />
            <Route
              path="/property-type"
              element={
                <ProtectedRoute>
                  <PropType />
                </ProtectedRoute>
              }
            />
            <Route
              path="/property-status"
              element={
                <ProtectedRoute>
                  <PropStatus />
                </ProtectedRoute>
              }
            />
            <Route
              path="/microsite-price"
              element={
                <ProtectedRoute>
                  <MicrositePrice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/access-control"
              element={
                <ProtectedRoute>
                  <AccessControl />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
