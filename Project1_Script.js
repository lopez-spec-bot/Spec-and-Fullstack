const tableKey = 'cms-table'; 

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
  localStorage.removeItem(tableKey);
});

let cmsTable; 
leycmsTableDemo = {
  'Presbo': {
    'email': 'presbo@columbia.edu'
  },

  'Joemama': {
    'email': 'joemama@columbia.edu'
  }

};

let refreshDOMTable = () => {
  let cmsTableKeys = Object.keys(cmsTable); 
  let tableContainer = document.getElementById('cmsTableContainer');
  let oldTableBody = document.getElementById('tableBody'); 
  tableContainer.removeChild(oldTableBody); 
  let newTablBody = document.getElementById('span'); 
  newTableBody.id = 'tableBody'; 
  tableContainer.appendChild(newTableBody); 

  for(let i = 0; i < cmsTableKeys.length; i++){
    let currentRow = document.createElement('div'); 
    let currentNameCol = document.createElement('div'); 
    let currentEmailCol = document.createElement('div'); 
    let currentEditBtn = document.createElement('div'); 
    let currentDeleteBtn = document.createElement('div'); 

    currentRow.className = 'cms-table-row'; 
    currentNameCol.className = 'cms-table-column cms-name';
    currentEmailCol.className = 'cms-table-column cms-email';
    currentEditBtn.className = 'cms-table-column cms-edit'; 
    currentDeleteBtn.className = 'cms-table-column cms-delete'; 

    currentNameCol.innerHTML = cmsTableKeys[i]; 
    currentEmailCol.innerHTML = cmsTable[cmsTableKeys[i]].email; 

    currentEditBtn.innerHTML = '<i class="far fa-edit"></i>'; 
    currentDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; 

    currentRow.appendChild(currentNameCol); 
    currentRow.appendChild(currentPhoneCol); 
    currentRow.appendChild(currentEditBtn); 
    currentRow.appendChild(currentDeleteBtn); 

    newTableBody.appendChild(currentRow); 

  }

  let enableDisableNewUserModal = (option) => {
    let newPersonName = document.getElementById('newPersonName'); 
    let newPersonEmail = document.getElementById('newPersonEmail'); 
    newPersonName.value = ''; 
    newPersonEmail.value = ''; 

    let newPersonModal = document.getElementById('newPersonModal'); 
    let backdrop = document.getElementById('backdrop'); 

    newPersonModal.className = '$[option]'-modal;  
    backdrop.className = '$[optionl]'-modal; 
 }

  let addNewEntryBtn = document.getElementById('cmsAddNewEntry'); 
  let editBtns = document.getElementsByClassName('cms-edit'); 
  let deleteStns = document.getElementsByClassName('cms-delete'); 
  let newPersonSubmitBtn = document.getElementById('newPersonSubmitBtn'); 
  let newPersonCancelBtn = document.getElementById('newPersonCancelBtn'); 
  
  newPersonSubmitBtn.addEventListener('click',  () => { 
     let newPersonName = document.getElementById('newPersonName').value.trim(); 
     let newPersonEmail = document.getElementById('newPersonEmail').value.trim(); 

     if(newPersonName == '')
        newPersonName.className = 'input-err';
     else
       newPersonName.className = '';
      
        

    


     

  
  }

    

    









  }


}