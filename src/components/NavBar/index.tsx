import classNames from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";
import routes from "../../routes";

const nav = [
  {
    path: routes.CATALOGUE,
    name: "Catalogue",
  },
  {
    path: routes.COLLECTION,
    name: "Collection",
  },
  {
    path: routes.WISHLIST,
    name: "Wishlist",
  },
];

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="py-3 w-full bg-primary-dark fixed top-0 border-b border-slate-200 z-50 shadow-xl">
      <div className="container m-auto flex justify-between">
        <div className="text-lg">Vinyl Tracker</div>
        <nav className="flex gap-3">
          {nav.map((item) => {
            const active = item.path === location.pathname;

            return (
              <a
                key={item.path}
                href={item.path}
                className={classNames("px-2", {
                  active,
                })}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
