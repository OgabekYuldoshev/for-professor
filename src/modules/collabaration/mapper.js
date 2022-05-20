export const Сollabaration = (items) => {
  return {
    national: items.filter(item => item.type_id === '1' || item.type_id === 1).map(item => item) || [],
    international: items.filter(item => item.type_id === '2' || item.type_id === 2).map(item => item) || [],
  };
};
