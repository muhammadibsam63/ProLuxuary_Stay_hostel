import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Loader from "./components/common/Loader";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";

const Home = lazy(() => import("./pages/Home"));
const Hotels = lazy(() => import("./pages/Hotels"));
const HotelDetails = lazy(() => import("./pages/HotelDetails"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Offers = lazy(() => import("./pages/Offers"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Overview = lazy(() => import("./pages/dashboard/Overview"));
const Bookings = lazy(() => import("./pages/dashboard/Bookings"));
const Wishlist = lazy(() => import("./pages/dashboard/Wishlist"));
const Notifications = lazy(() => import("./pages/dashboard/Notifications"));
const Profile = lazy(() => import("./pages/dashboard/Profile"));

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "#15181e",
                  color: "#eeece6",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "0.875rem",
                },
                success: { iconTheme: { primary: "#c9a227", secondary: "#15181e" } },
              }}
            />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route element={<RootLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/hotels" element={<Hotels />} />
                  <Route path="/hotels/:id" element={<HotelDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/offers" element={<Offers />} />
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />

                  <Route
                    element={
                      <ProtectedRoute>
                        <DashboardLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="/dashboard" element={<Overview />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/profile" element={<Profile />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </WishlistProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
