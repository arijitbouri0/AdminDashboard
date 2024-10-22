import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarItems = ({icon,text,expanded,path}) => {
    return (
            <NavLink
                className={({ isActive }) =>
                    `relative flex items-center py-3 px-3 my-1 font-medium rounded-s-full cursor-pointer transition-colors group ${isActive
                        ? "bg-white text-black"
                        : "hover:bg-pink-300 hover:text-black    text-white"
                    }`
                }
                to={path}
            >
                <span className="">{icon}</span>
                <span
                    className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                        }`}
                >
                    {text}
                </span>

                {!expanded && (
                    <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100  text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                        {text}
                    </div>
                )}
            </NavLink>
    )
}

export default SideBarItems
