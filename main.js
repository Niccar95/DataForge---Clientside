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
    row.classList.add("row");
    row.innerHTML = `
      <td>${application.companyName}</td>
      <td>${application.applicationStatus}</td>
      <td>${application.response}</td>
    `;
    console.log(row.classList.contains("row"));
    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", updateTable);
