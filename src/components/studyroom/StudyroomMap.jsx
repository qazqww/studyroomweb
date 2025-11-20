import { useState } from 'react';
import Room from './Room';
import RoomInfoModal from './RoomInfoModal';

export default function StudyroomMap({
  rooms,
  selectedRoom,
  modalType,
  setModalType,
  onRoomClick,
  onClose,
  onAddReservation,
}) {
  return (
    <div>
      <div className='grid grid-cols-5 gap-4 p-4 bg-gray-100 rounded-2xl'>
        {rooms.map((room) => (
          <Room
            key={room.roomNo}
            roomNo={room.roomNo}
            status={room.status}
            onClick={onRoomClick}
          />
        ))}
      </div>
      {selectedRoom && (
        <RoomInfoModal
          room={selectedRoom}
          modalType={modalType}
          setModalType={setModalType}
          onClose={onClose}
          onAddReservation={onAddReservation}
        />
      )}
    </div>
  );
}
