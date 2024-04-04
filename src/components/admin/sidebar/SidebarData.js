import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoCube } from "react-icons/io5";


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: <IoCube />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: '/admin/orders',
    icon: <IoCart />,
    cName: "nav-text",
  },
  {
    title: "Categories",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

export const SidebarUserData = [
  {
    title: "Orders",
    path: '/user/orders',
    icon: <IoCart />,
    cName: "nav-text",
  },

]