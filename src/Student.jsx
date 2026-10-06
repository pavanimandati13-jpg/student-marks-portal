import { useState } from "react";

function Student(props) {

  // State
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => {
    setMarks(marks + 1);
  };

  const decreaseMarks = () => {
    setMarks(marks - 1);
  };

  return (
    <div>
      <h2>Student Marks</h2>

      {/* Props */}
      <p>Student Name: {props.name}</p>
      <p>Subject: {props.subject}</p>

      {/* State */}
      <p>Marks: {marks}</p>

      <button onClick={increaseMarks}>
        Increase Marks
      </button>

      <button onClick={decreaseMarks}>
        Decrease Marks
      </button>
    </div>
  );
}

export default Student;