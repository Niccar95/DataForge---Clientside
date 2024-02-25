async function fetchData() {
  const response = await fetch("http://localhost:3000/applications");
  const data = await response.json();
  return data;
}

async function updateTable() {
  const applications = await fetchData();
  const tableBody = document.querySelector(".tableBody");

  applications.forEach((application) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${application.companyName}</td>
      <td>${application.applicationStatus}</td>
      <td>${application.response}</td>
    `;
    tableBody.appendChild(row);
  });
}

const addButton = document.querySelector(".addButton");

function createDataModal() {
  addButton.addEventListener("click", () => {
    const createModal = document.getElementById("createModal");
    createModal.classList.add(".visible");
    createModal.classList.toggle("visible");
  });
}
createDataModal();

const addDataButtom = document.getElementById("addDataButton");

async function createData() {}

document.addEventListener("DOMContentLoaded", updateTable);
