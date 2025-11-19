export default function RoomInfoModal({ room, onClose }) {
  if (!room) return null;

  return (
    <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
      <div className='bg-white rounded-2xl p-6 w-96 shadow-xl relative'>
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
        >
          ✕
        </button>

        <h2 className='text-2xl font-bold mb-3'>Room {room.roomNo}</h2>
        <p className='text-gray-600 mb-4'>
          상태:{' '}
          <span
            className={
              room.status === 'AVAILABLE'
                ? 'text-green-600'
                : room.status === 'RESERVED'
                ? 'text-blue-600'
                : 'text-orange-600'
            }
          >
            {room.status}
          </span>
        </p>

        {/* 상태별 분기 */}
        {room.status === 'RESERVED' && (
          <div>
            <p>예약자: {room.userName}</p>
            <p>예약 시간: {room.reservedTime}</p>
          </div>
        )}

        {room.status === 'USING' && (
          <div>
            <p>사용자: {room.userName}</p>
            <p>공부 시작 시간: {room.startTime}</p>
            <p>공부 과목: {room.subject}</p>
          </div>
        )}

        {room.status === 'AVAILABLE' && (
          <div className='flex justify-end gap-3 mt-6'>
            <button className='bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition'>
              입장
            </button>
            <button className='bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition'>
              예약
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
