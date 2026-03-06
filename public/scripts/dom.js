export const createFragment = ([tag, attrs, ...content]) => {
  const element = document.createElement(tag);
  for (const attr of Object.entries(attrs)) {
    element.setAttribute(...attr);
  }

  if (content.length === 1 && !Array.isArray(content[0])) {
    element.textContent = content.toString();
    return element;
  }

  element.append(...content.map(createFragment));
  return element;
};

export const cls = (value) => ({ class: value });

export const ELEMENTS = {};
