const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.yearMonth').textContent = '${viewYear}년 ${viewMonth}'