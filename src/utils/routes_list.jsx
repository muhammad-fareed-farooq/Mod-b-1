// const navItems = ["Home", "About", "Contact"];

export const navItems = [
  {
    label: "Home",
    link: "/",
    both: true,
  },
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
  {
    label: "Donate",
    link: "/donate",
    auth_required: true,
  },
  {
    label: "Dashboard",
    link: "/dashboard",
    auth_required: true,
  },
];
