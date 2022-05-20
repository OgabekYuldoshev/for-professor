export const Professional = (items) => {
  return {
    editor: items.filter(item => item.type_id === '1' || item.type_id === 1).map(item => item) || [],
    organizing: items.filter(item => item.type_id === '2' || item.type_id === 2).map(item => item) || [],
  };
};
