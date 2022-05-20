export const Books = (items) => {
  return {
    authored: items.filter(item => item.type_id === '1' || item.type_id === 1).map(item => item) || [],
    edited: items.filter(item => item.type_id === '2' || item.type_id === 2).map(item => item) || [],
    confirenced: items.filter(item => item.type_id === '3' || item.type_id === 3).map(item => item) || [],
  };
};
