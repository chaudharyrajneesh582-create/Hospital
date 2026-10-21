const StatusBadge = ({ status }) => {
  const styles = {
    Waiting: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
    "In Consultation": "bg-blue-100 text-blue-700",
    "Your Turn Soon": "bg-purple-100 text-purple-700",
    Delayed: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        inline-flex
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        ${styles[status] || "bg-gray-100 text-gray-700"}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;