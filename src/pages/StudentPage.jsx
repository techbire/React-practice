function StudentPage() {
  const students = [
    { name: 'Ansh', hobbies: ['Coding', 'Music', 'Reading'] },
    { name: 'John', hobbies: ['Gaming', 'Sports'] },
    { name: 'Sarah', hobbies: ['Dancing', 'Painting'] }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Students List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">👨‍🎓 {student.name}</h2>
            <p className="font-medium text-gray-700 mb-2">Hobbies:</p>
            <ul className="list-disc list-inside space-y-1">
              {student.hobbies.map((hobby, hobbyIdx) => (
                <li key={hobbyIdx} className="text-gray-600">{hobby}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentPage
