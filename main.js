const method = { get: 'GET', put: 'PUT', delete: 'DELETE', post: 'POST' };

function getData(link, funct, method) {
  fetch(link, {
    method: method,
  })
    .then((r) => r.json())
    .then((data) => {
      funct(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function showData(dataSet) {
  console.log(dataSet);
  showInTable(dataSet);
}

function showInTable(array) {
  const tableContainer = document.getElementById('tableContainer');
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  const keys = Object.keys(array[0]);

  keys.forEach((key) => {
    let th = document.createElement('th');
    th.textContent = key;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');

  array.forEach((object) => {
    tr = document.createElement('tr');

    keys.forEach((key) => {
      let td = document.createElement('td');
      td.textContent = object[key];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

let getdata = document.getElementById('getdata');

getdata.addEventListener('click', () => {
  console.log('hlola');
  let showEventsLink = 'http://localhost:3000/api/v1/events';
  getData(showEventsLink, showData, method.get);
});
