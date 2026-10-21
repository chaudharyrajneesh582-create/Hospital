const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) => {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-slate-100 text-slate-700 hover:bg-slate-200",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
    success:
      "bg-green-600 text-white hover:bg-green-700",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2.5
        rounded-lg
        font-medium
        transition
        duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;