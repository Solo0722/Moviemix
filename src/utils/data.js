import {
  FaFilm,
  FaLayerGroup,
  FaList,
  FaSignInAlt,
  FaStackpath,
  FaStar,
  FaTv,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";

export const navLinks = [
  {
    title: "Movies",
    link: "/movies",
    icon: <FaFilm style={{ marginRight: "20px" }} />,
  },
  {
    title: "Watchlist",
    link: "/watchlist",
    icon: <FaList style={{ marginRight: "20px" }} />,
  },
  {
    title: "Favorites",
    link: "/favorites",
    icon: <FaStar style={{ marginRight: "20px" }} />,
  },
  {
    title: "About",
    link: "/about",
    icon: <FaUser style={{ marginRight: "20px" }} />,
  },
  {
    title: "Sign in",
    link: "/auth",
    icon: <FaSignInAlt style={{ marginRight: "20px" }} />,
  },
];
