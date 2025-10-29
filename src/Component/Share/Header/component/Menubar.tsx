'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, Waypoints, SmartphoneNfc, User, BriefcaseBusiness,ChartCandlestick,FileUser } from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
  },
  {
    icon: <Waypoints className="h-5 w-5" />,
    label: "Services",
    href: "/services",
    iconColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
  },
  {
    icon: <FileUser className="h-5 w-5" />,
    label: "About",
    href: "/about",
    iconColor: "group-hover:text-green-500 dark:group-hover:text-green-400",
  },
  {
    icon: <ChartCandlestick className="h-5 w-5" />,
    label: "Portfolio",
    href: "/portfolio",
    iconColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Team",
    href: "/team",
    iconColor: "group-hover:text-pink-500 dark:group-hover:text-pink-400",
  },
  {
    icon: <SmartphoneNfc className="h-5 w-5" />,
    label: "Contact",
    href: "/contact",
    iconColor: "group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    label: "Careers",
    href: "/careers",
    iconColor: "group-hover:text-yellow-500 dark:group-hover:text-yellow-400",
  },
];


const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function MenuBar(): React.JSX.Element {
  return (
    <motion.nav
      className=" relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <ul className="flex items-center gap-1  relative z-10">
        {menuItems.map((item: MenuItem) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              {/* Front-facing menu item */}
              <motion.a
                href={item.href}
                className="flex items-center gap-1 px-2 py-2 relative z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom"
                }}
              >
                <span className={`transition-colors duration-300 ${item.iconColor}`}>
                  {item.icon}
                </span>
                <span className="font-medium ">{item.label}</span>
              </motion.a>

              {/* Back-facing menu item for 3D flip effect */}
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)"
                }}
              >
                <span className={`transition-colors duration-300 ${item.iconColor}`}>
                  {item.icon}
                </span>
                <span className="font-medium text-white">{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default MenuBar;
