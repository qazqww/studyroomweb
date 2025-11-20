import { useState } from 'react';
import * as rsvApi from '../api/reservationApi';
import StudyroomMap from '../components/studyroom/StudyroomMap';

export default function StudyroomPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [modalType, setModalType] = useState('null');
  const [rooms, setRooms] = useState([
    { roomNo: 1, status: 'AVAILABLE' },
    {
      roomNo: 2,
      status: 'USING',
      userName: '김로이',
      startTime: '13:10',
      subject: '자료구조',
    },
    {
      roomNo: 3,
      status: 'RESERVED',
      reservedTime: '14:00',
      userName: '박그래',
    },
    { roomNo: 4, status: 'AVAILABLE' },
    {
      roomNo: 5,
      status: 'USING',
      userName: '이주원',
      startTime: '15:00',
      subject: '자바',
    },
    { roomNo: 6, status: 'AVAILABLE' },
  ]);

  const handleRoomClick = (roomNo) => {
    setSelectedRoom(rooms.find((room) => room.roomNo === roomNo));
    setModalType('INFO');
  };

  const handleRoomClose = () => {
    setSelectedRoom(null);
    setModalType('null');
  };

  const handleAddReservation = (rsv) => {
    rsvApi.createReservation(rsv).then((res) => {
      rooms.push(rsv);
    });
  };

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>스터디룸 단면도</h2>
      <StudyroomMap
        rooms={rooms}
        selectedRoom={selectedRoom}
        modalType={modalType}
        setModalType={setModalType}
        onRoomClick={handleRoomClick}
        onClose={handleRoomClose}
        onAddReservation={handleAddReservation}
      />
    </div>
  );
}
