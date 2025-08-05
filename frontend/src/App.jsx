import { useState } from "react";
import React from "react";
import {
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import Homepage from "./pages/homepage";
import PlayerPage from "./pages/PlayerPage";
import SignUpPage from "./pages/signuppage";
import SubscriptionPage from "./pages/subscription";
import MovieDetailPage from "./pages/MovieDetail";
import BrowsePage from "./pages/BrowsePage";
import ProfilePage from "./pages/Profile";
import SearchPage from "./pages/Search";
import SettingsPage from "./pages/SettingsPage";
import FaqPage from "./pages/services/faq";
import PrivacyPolicy from "./pages/services/PrivacyPolicy";
import HelpCenter from "./pages/services/HelpCenter";
import ContactUs from "./pages/services/ContactUs";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/services/Careers";
import Press from "./pages/services/Press";
import Cookies from "./pages/services/Cookies";
import Terms from "./pages/services/Terms";
import Header from "./components/header";
import Footer from "./components/footer";
import useAuthStore from "./store/authStore";
import UserDashboard from "./pages/UserDashboard";
import MovieListPage from "./pages/MovieList";
// admin pages
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ManageMovies from "./pages/admin/ManageMovies";
import ManageBanners from "./pages/admin/ManageBanners";
import ManageGenres from "./pages/admin/ManageGenres";
import ManageLanguages from "./pages/admin/ManageLanguages";
import ManageTrending from "./pages/admin/ManageTrending";
import ManageFAQs from "./pages/admin/ManageFAQs";
import Users from "./pages/admin/Users";

// 🔒 Protected route component for premium-only access
function ProtectedRoute({ children }) {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated || user.subscription !== "premium") {
    return <Navigate to="/subscription" replace />;
  }
  return children;
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("English");

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "black",
          color: "white",
          minHeight: "100vh",
        },
        fonts: {
          heading: `'Bebas Neue', sans-serif`,
          body: `'Inter', sans-serif`,
        },
      },
    },
  });

  return (
    <main>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/movielist" element={<MovieListPage />} />
            <Route
              path="/watch/:id"
              element={
                <ProtectedRoute>
                  <PlayerPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/browse"
              element={
                <ProtectedRoute>
                  <BrowsePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Routes>
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/movies" element={<ManageMovies />} />
            <Route path="/admin/banners" element={<ManageBanners />} />
            <Route path="/admin/genres" element={<ManageGenres />} />
            <Route path="/admin/languages" element={<ManageLanguages />} />
            <Route path="/admin/trending" element={<ManageTrending />} />
            <Route path="/admin/faqs" element={<ManageFAQs />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </main>
  );
}

export default App;
