import Course from './Course';
import c from './assets/c.jpeg';
import cpp from './assets/cpp.jpeg';
import java from './assets/java.jpeg';
import {useState} from 'react';

function CourseList(){
    const [courses , setCourses] = useState([
        {
            id:1,
           name:"c",
            price:"$4",
             image:c ,
             rating:5 
    },
    {   id:2,
        name:"c++",
            price:"$5",
             image:cpp ,
             rating:4 
    },
    {    id:3,
        name:"java",
            price:"$6",
             image:java ,
             rating:4.5
    },
        {
            id:5,
        name:"c#",
            price:"$7",
             image:java ,
             rating:3.5
    }
]);
function HandleDelete(id){
    const newCourse= courses.filter((course)=>course.id!=id)
    setCourses(newCourse)
}
   const CoursesList = courses.map((course)=><Course key={course.id} name={course.name} image={course.image} price={course.price} rating={course.rating} delete={HandleDelete} id={course.id}/>)
    return(
         <>
         {CoursesList}
         </>
    );
}
export default CourseList