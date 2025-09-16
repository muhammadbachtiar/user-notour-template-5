import React from "react";

export default function FooterSkeleton() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo dan Social Media */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gray-700 rounded w-10 h-10" />
              <div>
                <div className="h-4 bg-gray-700 rounded w-32 mb-2" />
                <div className="h-3 bg-gray-600 rounded w-24" />
              </div>
            </div>
            <div className="flex space-x-4 mt-2">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="h-5 w-5 bg-gray-700 rounded-full" />
              ))}
            </div>
          </div>

          {/* Tautan Cepat */}
          <div>
            <div className="h-4 bg-gray-600 w-32 mb-4 rounded" />
            <ul className="space-y-2">
              {[...Array(4)].map((_, idx) => (
                <li key={idx} className="h-3 bg-gray-700 rounded w-24" />
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <div className="h-4 bg-gray-600 w-24 mb-4 rounded" />
            <ul className="space-y-2">
              {[...Array(4)].map((_, idx) => (
                <li key={idx} className="h-3 bg-gray-700 rounded w-28" />
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <div className="h-4 bg-gray-600 w-20 mb-4 rounded" />
            <ul className="space-y-4">
              {[...Array(3)].map((_, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="h-5 w-5 mr-3 bg-gray-700 rounded" />
                  <div className="h-3 bg-gray-700 rounded w-32" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-sm">
          <div className="h-3 bg-gray-700 rounded w-48 mx-auto" />
        </div>
      </div>
    </footer>
  );
}
