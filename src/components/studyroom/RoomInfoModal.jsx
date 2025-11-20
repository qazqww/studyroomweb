import RoomInfoContent from './InfoModalContent';
import ReserveModalContent from './ReserveModalContent';

export default function RoomInfoModal({
  room,
  modalType,
  setModalType,
  onClose,
  onAddReservation,
}) {
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

        {modalType === 'INFO' && (
          <RoomInfoContent room={room} setModalType={setModalType} />
        )}
        {modalType === 'RESERVE' && (
          <ReserveModalContent
            room={room}
            setModalType={setModalType}
            onAddReservation={onAddReservation}
          />
        )}
      </div>
    </div>
  );
}
