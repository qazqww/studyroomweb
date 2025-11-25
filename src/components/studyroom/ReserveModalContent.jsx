import { useState } from 'react';
import ReservationSubjectSelector from './ReservationSubjectSelector';

export default function ReserveModalContent({
  room,
  setModalType,
  onAddReservation,
}) {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const dummySubjects = [
    { id: 1, name: '수학' },
    { id: 2, name: '영어' },
    { id: 3, name: '프로그래밍' },
  ];

  return (
    <div>
      <h2 className='text-2xl font-bold mb-3'>Room {room.roomNo}</h2>
      <div className='flex flex-col'>
        <label className='text-sm font-medium'>시작 시간</label>
        <input
          type='time'
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className='border rounded p-2'
        />
      </div>

      <div className='flex flex-col'>
        <label className='text-sm font-medium'>끝 시간</label>
        <input
          type='time'
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className='border rounded p-2'
        />
      </div>

      <div className='flex flex-col'>
        <label className='text-sm font-medium'>공부 과목 선택</label>
        <ReservationSubjectSelector
          subjects={dummySubjects}
          onChange={(e) => {
            setSelectedSubjects(e.target.value);
          }}
        />
      </div>

      <div className='flex justify-end gap-3 mt-6'>
        <button
          onClick={() => setModalType('INFO')}
          className='px-4 py-2 rounded-lg transition'
        >
          뒤로
        </button>

        <button
          onClick={() =>
            onAddReservation({
              roomNo: room.roomNo,
              startTime,
              endTime,
              reservationSubjects: selectedSubjects,
            })
          }
          className='px-4 py-2 rounded-lg transition'
        >
          예약
        </button>
      </div>
    </div>
  );
}
