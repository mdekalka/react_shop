export const filterByName = (list, query) => {
  return list.filter(listItem => {
    return listItem.name.toLowerCase().includes(query);
  })
};
