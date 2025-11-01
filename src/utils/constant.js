export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_AUTHORIZATION,
  },
};


export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "TV Shows", href: "/tv-shows" },
  { name: "Movie", href: "/movie" },
  { name: "Upcoming", href: "/upcoming" },
];