import React from "react";

export default function Alerts(probs) {
  return (
    probs.newalert && <div className='mx-auto my-1 shadow-md shadow-gray-600 rounded-lg'>
      <div class={`bg-${probs.newalert.color}-100 border-2 border-${probs.newalert.color}-400 text-${probs.newalert.color}-700 px-4 py-3 rounded relative hover:opacity-50`} role="alert">
        <strong class="font-bold mr-2">{probs.newalert.type}:</strong>
        <span class="block sm:inline">{probs.newalert.message}</span>
      </div>
      {/* the below line is just to import classses from tailwind */}
      {/* <div className="hidden bg-red-100 border-red-400 text-red-700 bg-green-100 border-green-400 text-green-700 bg-yellow-100 border-yellow-400 text-yellow-700 bg-blue-100 border-blue-400 text-blue-700"></div>  */}
    </div>
  );
}
