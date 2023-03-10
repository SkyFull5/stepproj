export const input = ({ type, placeholder, name, value, checked }) => {
    const placeholderInput = type !== 'radio' ? `placeholder="${placeholder}"` : '';
    const classInput = type !== 'radio' ? "class='input'" : '';

    return `<input ${classInput} type="${type}" ${placeholderInput} name="${name}" value="${value || ''}" ${checked || ''}>`;
};
