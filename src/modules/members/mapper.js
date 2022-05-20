// import { get } from "lodash";

export const Memebers = (items) => {
  return {
    currentMembers: {
      has: items.filter(item => item.type_id === '1' || item.type_id === 1).length ? true : false,
      facultyGuides: items.filter(item => item.type_id === '1' || item.type_id === 1).filter(item => item.member_type === '1' || item.member_type === 1).map(item => item) || [],
      phdStudents: items.filter(item => item.type_id === '1' || item.type_id === 1).filter(item => item.member_type === '2' || item.member_type === 2).map(item => item) || [],
      pgStudents: items.filter(item => item.type_id === '1' || item.type_id === 1).filter(item => item.member_type === '3' || item.member_type === 3).map(item => item) || [],
      ugstudents: items.filter(item => item.type_id === '1' || item.type_id === 1).filter(item => item.member_type === '4' || item.member_type === 4).map(item => item) || []
    },
    secondaryMembers: {
      has: items.filter(item => item.type_id === '2' || item.type_id === 2).length ? true : false,
      facultyGuides: items.filter(item => item.type_id === '2' || item.type_id === 2).filter(item => item.member_type === '1' || item.member_type === 1).map(item => item) || [],
      phdStudents: items.filter(item => item.type_id === '2' || item.type_id === 2).filter(item => item.member_type === '2' || item.member_type === 2).map(item => item) || [],
      pgStudents: items.filter(item => item.type_id === '2' || item.type_id === 2).filter(item => item.member_type === '3' || item.member_type === 3).map(item => item) || [],
      ugstudents: items.filter(item => item.type_id === '2' || item.type_id === 2).filter(item => item.member_type === '4' || item.member_type === 4).map(item => item) || []
    },
  };
};
