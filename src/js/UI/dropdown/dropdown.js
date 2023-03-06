export const dropdown = ({ dropdownContent, id }) => {
  const options = dropdownContent.map(
    (item) => `<option value='${item.value}'>${item.title}</option>`
  );

  return `<select id="${id}">${options.join("")}</select>`;
};
