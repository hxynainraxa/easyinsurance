import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import logo from "../../assets/logo.svg";
import {
  smartchoiceMenuData,
  supportPhone,
} from "../data/smartchoice-menu-data";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="w-full bg-[#dfeafd]">
      <div className="mx-auto flex h-[64px] max-w-[1360px] items-stretch">
        {/* Logo */}
        <div className="flex shrink-0 items-center border-r border-[#ddd] px-6">
          <Link to="/">
            <img
              src={logo}
              alt="smartchoice"
              className="h-[31px] w-[241px]  object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Nav links */}
        <div className="flex min-w-0 flex-1 items-stretch">
          {smartchoiceMenuData.map((item) => (
            <div
              key={item.label}
              className="relative flex shrink-0"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div
                className="relative flex h-[64px] cursor-pointer items-center gap-1 border-r border-[#ddd] px-4 text-[15px] font-medium text-[#25408f] transition-colors duration-300 hover:text-[#f4a018]
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ef9807]
                after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="whitespace-nowrap">{item.label}</span>
                {item.hasDropdown && <ChevronDown size={16} />}
              </div>
              {item.hasDropdown && activeMenu === item.label && (
                <div className="absolute left-0 top-full z-50 w-[280px] bg-white shadow-md">
                  {item.sections?.map((section, i) => (
                    <div key={i}>
                      {/* Section Title */}
                      {section.title && (
                        <div className="px-4 py-2 text-xs font-semibold text-orange-500">
                          {section.title}
                        </div>
                      )}

                      {/* Links */}
                      {section.links.map((link, index) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
            border-b border-gray-200 last:border-b-0
            ${index === 0 ? "font-bold text-black" : ""}`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}{" "}
            </div>
          ))}
        </div>

        {/* Phone */}
        <div className="flex shrink-0 items-center border-l border-[#ddd] px-5 text-[#ef9807]">
          <Phone size={16} />
          <span className="ml-2 whitespace-nowrap">{supportPhone}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
