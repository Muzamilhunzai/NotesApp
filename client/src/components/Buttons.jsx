export const Button = ({ text, onClick, type = "primary" }) => {
  const baseStyles =
    "px-5 py-2 rounded-2xl font-semibold transition-all duration-300 shadow-md";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:scale-95",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 active:scale-95",
    danger:
      "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg active:scale-95",
    success:
      "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg active:scale-95",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[type]}`}
    >
      {text}
    </button>
  );
};

export default Button;