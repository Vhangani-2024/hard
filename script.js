const form = document.getElementById('recycleForm');
const tableBody = document.querySelector('#dataTable tbody')                  
let data = JSON.parse(localStorage.getItem('recycleData')) || [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const entry = {
    name: document.getElementById('name').value.trim(),
    time: document.getElementById('time').value,
    date: document.getElementById('date').value,
    income: document.getElementById('income').value,
    bottles: document.getElementById('bottles').value,
    amount: document.getElementById('amount').value,
    stock1: document.getElementById('stock1').value,
    stock2: document.getElementById('stock2').value,
    total: document.getElementById('total').value,
  };
  if (entry.name && entry.time) {
    data.push(entry);
    localStorage.setItem('recycleData', JSON.stringify(data));
    addRow(entry);
    form.reset();
  } else {
    alert('Fill required fields!');
  }
});

                                            
data.sort((a, b) => new Date(a.date) - new Date(b.date));
data.forEach(addRow);

function addRow(entry) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${entry.name}</td>
    <td>${entry.time}</td>
    <td>${entry.date}</td>
    <td>${entry.income}</td>
    <td>${entry.bottles}</td>
    <td>${entry.amount}</td>
    <td>${entry.stock1}</td>
    <td>${entry.stock2}</td>
    <td>${entry.total}</td>
  `;
  tableBody.appendChild(row);
}

document.getElementById('clearBtn').addEventListener('click', () => {
  localStorage.removeItem('recycleData');
  data = [];
  tableBody.innerHTML = ''; // Clear table rows
  alert('Data cleared!');
});