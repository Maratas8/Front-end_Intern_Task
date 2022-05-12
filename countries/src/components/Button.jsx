import React from "react";

function Button({ text, onClick, className }) {
  return (
    <div>
      <button
        className={`bg-emerald-700 m-2 mt-8 px-4 py-2 rounded-lg hover:bg-emerald-400 w-52 ${className}`}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
