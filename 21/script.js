document.addEventListener('DOMContentLoaded', function() {
    var addCustomerButton = document.getElementById('add-customer-button');
    var removeCustomerButton = document.getElementById('remove-customer-button');
    var firstNameInput = document.getElementById('first-name-input');
    var lastNameInput = document.getElementById('last-name-input');


    var addressInput = document.getElementById('address-input');
    var customerTableBody = document.querySelector('#customer-table tbody');
  
    // добавяме инфо
    addCustomerButton.addEventListener('click', function() {
      var firstName = firstNameInput.value;
      var lastName = lastNameInput.value;
      var address = addressInput.value;
  
      if (firstName && lastName && address) {
        var tableRow = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var lastNameCell = document.createElement('td');
        var addressCell = document.createElement('td');
  
        firstNameCell.textContent = firstName;
        console.log(firstName)
        lastNameCell.textContent = lastName;
        console.log(lastName)
        addressCell.textContent = address;
        console.log(address)
  
        tableRow.appendChild(firstNameCell);
        tableRow.appendChild(lastNameCell);
        tableRow.appendChild(addressCell);
  
        customerTableBody.appendChild(tableRow);
  
        // чистим inpunt-тите
        firstNameInput.value = '';
        lastNameInput.value = '';
        addressInput.value = '';
      }
    });
  
    // Махаме всичко
    removeCustomerButton.addEventListener('click', function() {
      var lastCustomerRow = customerTableBody.lastElementChild;
      if (lastCustomerRow) {
        customerTableBody.removeChild(lastCustomerRow);
      }
    });
  });