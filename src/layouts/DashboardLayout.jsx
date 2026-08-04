import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiCalendar,
  FiHeart,
  FiBell,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import "./DashboardLayout.css";

const LINKS = [
  { to: "/dashboard", label: "Overview", icon: FiGrid, end: true },
  { to: "/bookings", label: "Bookings", icon: FiCalendar },
  { to: "/wishlist", label: "Wishlist", icon: FiHeart },
  { to: "/notifications", label: "Notifications", icon: FiBell },
  { to: "/profile", label: "Profile", icon: FiUser },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="dashboard container">
      <aside className="dashboard-sidebar glass-panel">
        <div className="dashboard-user">
          <div className="dashboard-user__avatar">
            {user?.photoURL ? (
              <img src={user.photoURL} alt={user.displayName} />
            ) : (
              <span>{user?.displayName?.[0]?.toUpperCase() || "G"}</span>
            )}
          </div>
          <div>
            <span className="dashboard-user__name">{user?.displayName || "Guest"}</span>
            <span className="dashboard-user__email">{user?.email}</span>
          </div>
        </div>

        <nav className="dashboard-nav">
          {LINKS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `dashboard-nav__link ${isActive ? "is-active" : ""}`}
            >
              <Icon /> {label}
            </NavLink>
          ))}
        </nav>

        <button className="dashboard-nav__link dashboard-logout" onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>
      </aside>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
