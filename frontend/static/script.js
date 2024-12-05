async function loadData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    const container = document.getElementById('data-container');
    container.innerHTML = data.map(item =>
        `<div>Name: ${item.name}, Value: ${item.value}</div>`
    ).join('');
}

async function addData(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;

    await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, value })
    });

    loadData();
}

document.addEventListener('DOMContentLoaded', loadData);