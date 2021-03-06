export const filterFunction = (element: any, content: string) => {
  element.forEach((x: any) => {
    const shouldShow = x.textContent.toLowerCase().indexOf(content.toLowerCase()) > -1;
    x.style.display = shouldShow ? '' : 'none';
  });
};
