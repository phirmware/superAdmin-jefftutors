export const filterFunction = (element: any, content: string) => {
  element.forEach((x: any) => {
    const shouldShow = x.textContent.indexOf(content) > -1;
    x.style.display = shouldShow ? '' : 'none';
  });
};
