const Course = ({ courses }) => (
    <div>
        {courses.map((course) => (
            <div key={course.id}>
                <Header course={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </div>
        ))}
    </div>
)

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => (
    <ul>
        {parts.map((part) => (
            <li key={part.name}>
                <Part part={part} />
            </li>
        ))}
    </ul>
)

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

const Total = ({ parts }) => (
    <p>
        <b>
            total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </b>
    </p>
)

export default Course
