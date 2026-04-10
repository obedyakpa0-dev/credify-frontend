import CourseList from '../../components/course/CourseList';

const Courses = () => {
  const courses = []; // fetch courses
  return (
    <div className="courses">
      <h1>Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;