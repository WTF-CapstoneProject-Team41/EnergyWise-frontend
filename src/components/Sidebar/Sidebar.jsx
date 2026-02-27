import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SidebarData = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
      >
        <path
          fill="#03302A"
          d="M16 4 2.666 16h4v10.667h8v-8h2.667v8h8V16h4L16 4Zm6.666 20H20v-8h-8v8H9.333V13.587l6.667-6 6.666 6V24Z"
        />
        <path
          fill="#F59E0B"
          d="M9.334 13.587V24H12v-8h8v8h2.667V13.587l-6.667-6-6.666 6Z"
          opacity=".3"
        />
      </svg>
    ),
  },
  {
    to: "/my-energy",
    label: "My Energy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
      >
        <path
          fill="#F59E0B"
          d="m18.604 2.022-2.256 11.856 8.174.027-11.127 16.072 2.257-13.043-8.174-.028L18.604 2.022Zm.002-2c-.054 0-.108.002-.161.006-.353.029-.587.147-.865.333a2.01 2.01 0 0 0-.521.507L5.852 15.7a1.99 1.99 0 0 0-.167 2.076 2.01 2.01 0 0 0 1.778 1.099l5.773.041-1.815 10.694a2.007 2.007 0 0 0 1.973 2.367c.63 0 1.146-.294 1.533-.825l11.22-16.072a1.99 1.99 0 0 0 .168-2.076 2.01 2.01 0 0 0-1.778-1.098l-5.773-.01 1.795-9.403a2.003 2.003 0 0 0-1.883-2.47h-.07Z"
        />
      </svg>
    ),
  },
  {
    to: "/insights",
    label: "Insights",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
      >
        <path
          fill="#066055"
          d="M4 5.333h1.333V24l7.44-12.893 8.014 4.626 4.826-8.346 1.147.666-5.48 9.507-8.013-4.627-7.934 13.734h21.334V28H4V5.333Z"
        />
      </svg>
    ),
  },
  {
    to: "/services",
    label: "Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="#623F04"
            d="M1.383 2.578a22.78 22.78 0 0 0-.551 1.008c-.164.32-.312.644-.445.973a4.588 4.588 0 0 0-.282 1.02C.051 5.928.015 6.32 0 6.75a6.695 6.695 0 0 0 .914 3.398c.297.508.652.965 1.066 1.371.415.407.872.758 1.372 1.055.5.297 1.035.524 1.605.68.57.156 1.168.238 1.793.246a6.23 6.23 0 0 0 1.09-.094l9.445 9.446c.375.375.8.66 1.277.855.477.195.981.293 1.512.293a3.845 3.845 0 0 0 2.766-1.148c.351-.36.633-.778.844-1.254.21-.477.316-.985.316-1.524 0-.523-.098-1.023-.293-1.5a3.996 3.996 0 0 0-.855-1.289L13.406 7.84a6.37 6.37 0 0 0 .094-1.09 6.693 6.693 0 0 0-.914-3.398A6.52 6.52 0 0 0 11.52 1.98 7.195 7.195 0 0 0 10.148.926a6.485 6.485 0 0 0-1.605-.68A7.094 7.094 0 0 0 6.75 0c-.422 0-.809.031-1.16.094-.352.062-.695.16-1.031.293a12.22 12.22 0 0 0-1.98.996L7.194 6 6 7.195 1.383 2.578ZM6.75 12a5.084 5.084 0 0 1-2.04-.41A5.304 5.304 0 0 1 1.923 8.8 5.258 5.258 0 0 1 1.5 6.75c0-.57.094-1.121.281-1.652L6 9.305 9.305 6 5.098 1.781A4.929 4.929 0 0 1 6.75 1.5c.727 0 1.406.137 2.04.41a5.305 5.305 0 0 1 2.788 2.79c.274.632.414 1.316.422 2.05 0 .273-.023.54-.07.797-.047.258-.102.516-.164.773l10.02 10.032a2.437 2.437 0 0 1 .526 2.66c-.125.297-.3.554-.527.773-.226.219-.484.39-.773.516a2.484 2.484 0 0 1-.938.199 2.437 2.437 0 0 1-1.723-.715l-10.03-10.02c-.258.063-.516.118-.774.165-.258.047-.524.07-.797.07Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M24 0H0v24h24z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    to: "/account",
    label: "Account",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
      >
        <path
          fill="#623F04"
          fillRule="evenodd"
          d="M10.666 12a5.333 5.333 0 1 0 10.667 0 5.333 5.333 0 0 0-10.667 0Zm2.667 0a2.667 2.667 0 1 0 5.334 0 2.667 2.667 0 0 0-5.334 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#066055"
          fillRule="evenodd"
          d="M16 1.333C24.1 1.333 30.666 7.9 30.666 16S24.1 30.667 16 30.667C7.9 30.667 1.333 24.1 1.333 16S7.9 1.333 16 1.333ZM28 16c0 2.787-.95 5.352-2.544 7.39a11.986 11.986 0 0 0-9.543-4.723 11.973 11.973 0 0 0-9.456 4.61A12 12 0 1 1 28 16ZM16 28a11.947 11.947 0 0 0 7.563-2.683 9.32 9.32 0 0 0-7.65-3.984 9.32 9.32 0 0 0-7.585 3.894A11.946 11.946 0 0 0 16 28Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      {isOpen && <div className={styles.overlay} onClick={close} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
            >
              <rect width="40" height="40" fill="#008070" rx="12" />
              <path
                fill="#F59E0B"
                stroke="#F59E0B"
                strokeWidth=".047"
                d="m24.97 10.023-1.735 6.971-.006.03h4.975L16.068 29.917l2.715-10.912.008-.03H14.79l2.229-8.953h7.952Z"
              />
            </svg>
          </div>
          <span className={styles.brandName}>EnergyWise</span>
        </div>
        <nav className={styles.nav}>
          {SidebarData.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={close}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <span className={styles.icon}>{icon}</span>
              <span className={styles.label}>{label}</span>
            </NavLink>
          ))}
        </nav>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
}
