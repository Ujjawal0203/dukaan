import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Home",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "customers",
    label: "Delivery",
    path: "/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "transactions",
    label: "Marketing",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Analytics",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "transactions",
    label: "Payouts",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Discounts",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Appearance",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Plugins",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
