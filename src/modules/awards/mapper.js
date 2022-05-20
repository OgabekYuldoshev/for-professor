export const Awards = (items) => {
  return {
    awards: items.filter(item => item.type_id === '1' || item.type_id === 1).map(item => item) || [],
    recognations: items.filter(item => item.type_id === '2' || item.type_id === 2).map(item => item) || [],
    travels: items.filter(item => item.type_id === '3' || item.type_id === 3).map(item => item) || [],
    bestPaper: items.filter(item => item.type_id === '4' || item.type_id === 4).map(item => item) || [],
  };
};
