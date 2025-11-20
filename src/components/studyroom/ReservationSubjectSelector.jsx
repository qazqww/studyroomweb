import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

export default function ReservationSubjectSelector({ subjects, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const addSubject = (subject) => {
    if (selectedSubjects.find((s) => s.id === subject.id)) return; // 중복 방지

    const newList = [...selectedSubjects, subject];
    setSelectedSubjects(newList);
    onChange(newList.map((s) => s.id)); // 부모에게 id 배열 전달
  };

  const removeSubject = (id) => {
    const newList = selectedSubjects.filter((s) => s.id !== id);
    setSelectedSubjects(newList);
    onChange(newList.map((s) => s.id));
  };

  return (
    <div className='space-y-3'>
      {/* 커스텀 드롭다운 */}
      <div className='relative'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full flex items-center justify-between border rounded p-2 bg-white'
        >
          <span className='text-gray-700'>과목 선택</span>
          <LuChevronDown
            className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className='absolute w-full bg-white border rounded shadow-md mt-1 z-20 max-h-48 overflow-y-auto'>
            {subjects.length === 0 ? (
              <div className='p-3 text-sm text-gray-500'>과목이 없습니다.</div>
            ) : (
              subjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => addSubject(subject)}
                  className='w-full text-left px-3 py-2 hover:bg-gray-100'
                >
                  {subject.name}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* 선택된 과목 태그들 */}
      <div className='flex flex-wrap gap-2'>
        {selectedSubjects.map((subject) => (
          <div
            key={subject.id}
            className='relative group bg-blue-100 text-blue-800 px-3 py-1 rounded-lg'
          >
            {subject.name}

            {/* Hover 시 나오는 삭제 버튼 */}
            <button
              onClick={() => removeSubject(subject.id)}
              className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs hidden group-hover:flex items-center justify-center'
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
