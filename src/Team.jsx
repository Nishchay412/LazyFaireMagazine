import React from "react";
import { Header } from "./components/Header";
import { team_info } from "./components/teaminfo";
export function Team(){
    return(
        <div>
            <Header/>
            <div className=" grid grid-rows-6 items-center ">
            {team_info.executives.map((executive, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
        >
          <h3 className="text-lg font-bold text-gray-800">{executive.position}</h3>
          <p className="text-gray-600 mt-2">{executive.name}</p>
          <a
            href={`mailto:${executive.email}`}
            className="text-blue-500 mt-2 block"
          >
            {executive.email}
          </a>
          <p className="text-gray-500 mt-2">{executive.faculty}</p>
        </div>
      ))}
            </div>
        </div>
    )
}