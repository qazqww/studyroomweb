export default function Room({ roomNo, status, onClick }) {
  const statusColors = {
    AVAILABLE: 'bg-green-400',
    USING: 'bg-orange-400',
    RESERVED: 'bg-blue-400',
  };

  return (
    <div
      onClick={() => onClick?.(roomNo)}
      className={`w-24 h-24 flex flex-col justify-center items-center rounded-xl shadow-md cursor-pointer transition-all duration-200 hover:scale-105 ${statusColors[status]}`}
    >
      <span className='text-sm font-semibold text-white'>Room {roomNo}</span>
      <span className='text-xs text-white mt-1'>{status}</span>
    </div>
  );
}
