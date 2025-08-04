import React from 'react'
import {Anime} from "@/app/api/projects/route";
interface Props {
    project: Anime;
}
const AnimeCard = ({project}:Props) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group max-w-md">
            {/* Header with gradient background */}
            <div className="relative h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-4xl font-bold opacity-30">
                        {project.name.charAt(0)}
                    </div>
                </div>

                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Title Section */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                        {project.name}
                    </h3>

                    <div className="text-gray-500 text-sm font-medium bg-gray-50 px-3 py-1 rounded-full inline-block">
                        {project.name_kanji}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {project.about}
                    </p>
                </div>

                {/* Simple action button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105">
                    View Details
                </button>
            </div>
        </div>

    )
}
export default AnimeCard
