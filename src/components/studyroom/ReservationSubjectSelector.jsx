import { useState } from 'react';
import { LuChevronDown, LuCheck } from 'react-icons/lu';

export default function ReservationSubjectSelector({ subjects, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const toggleSubject = (subject) => {
    const exists = selectedSubjects.find((s) => s.id === subject.id);

    let newList;
    if (exists) {
      newList = selectedSubjects.filter((s) => s.id !== subject.id);
    } else {
      newList = [...selectedSubjects, subject];
    }

    setSelectedSubjects(newList);
    onChange(newList.map((s) => s.id));
  };

  const removeSubject = (id) => {
    const newList = selectedSubjects.filter((s) => s.id !== id);
    setSelectedSubjects(newList);
    onChange(newList.map((s) => s.id));
  };

  return (
    <div className='space-y-3'>
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
              subjects.map((subject) => {
                const isSelected = selectedSubjects.some(
                  (s) => s.id === subject.id
                );

                return (
                  <button
                    key={subject.id}
                    onClick={() => toggleSubject(subject)}
                    className='w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100'
                  >
                    <span>{subject.name}</span>

                    <span
                      className={`border rounded w-5 h-5 flex items-center justify-center ${
                        isSelected ? 'bg-blue-500 border-blue-500' : 'bg-white'
                      }`}
                    >
                      {isSelected && <LuCheck className='w-4 h-4 text-white' />}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>

      <div className='flex flex-wrap gap-2'>
        {selectedSubjects.map((subject) => (
          <div
            key={subject.id}
            className='relative group bg-blue-100 text-blue-800 px-3 py-1 rounded-lg'
          >
            {subject.name}

            <button
              onClick={() => removeSubject(subject.id)}
              className='absolute -top-2 -right-3 text-black rounded-full w-0.5 h-1 text-xs hidden group-hover:flex items-center justify-center'
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
