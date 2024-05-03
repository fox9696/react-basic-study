import React from 'react';
// import './CourseList.css';
import CourseItem from './CourseItem';

const CourseUl = styled.ul`
  .goal-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const CourseList = ({ items, onDelete }) => {
  return (
    <CourseUl>
      {items.map((item) => {
        return <CourseItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </CourseUl>
  );
};

export default CourseList;
