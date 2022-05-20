export const Galleries = (items) => {
  return {
    photo: items.filter(item => item.type_id === '1' || item.type_id === 1).map(item => item) || [],
    media: items.filter(item => item.type_id === '2' || item.type_id === 2).map(item => item) || [],
  };
};
