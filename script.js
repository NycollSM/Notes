(function(){
  const createBtn = document.getElementById('createBtn');

  const Data = [];

  function newNote(){
    //disable button
    createBtn.setAttribute('disabled', true);
    //elements
    const dialog = document.createElement('dialog');
    dialog.setAttribute('open', open);
    const form = document.createElement('form');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title';

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('maxlength', 25);

    const content = document.createElement('label');
    content.innerText = 'Description';

    const contentInput = document.createElement('input');
    contentInput.setAttribute('type', 'text');

    //buttons
    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'X';

    //add to dom
    const container = document.getElementById('mainContainer');
    form.appendChild(titleLabel);
    form.appendChild(inputTitle);
    form.appendChild(content);
    form.appendChild(contentInput);
    form.appendChild(saveBtn);
    form.appendChild(deleteBtn);
    form.appendChild(closeBtn);
    dialog.appendChild(form);
    container.appendChild(dialog);

    function getValues (){
      event.preventDefault();
      let Note = {
        title : inputTitle.value,
        description : contentInput.value,
        date : new Date(), 
        id : null
      }
      Data.push(Note);
      return Note;
    } 

    //events 
    saveBtn.addEventListener('click', ()=> {
      getValues();
      list();
      dialog.close();
      createBtn.removeAttribute('disabled');
    });
    //close the dialog 
    closeBtn.addEventListener('click', function(){
      event.preventDefault();
      dialog.close();
      createBtn.removeAttribute('disabled');
      container.removeChild(dialog);
    });
  }

  function list(){
    const listContainer = document.getElementById('list');
    const lastItem = Data[Data.length -1].title;
   /* for (let item in lastItem){
      //console.log(lastItem);
      console.log(item);
    } */
      const titles = document.createElement('li');
      titles.innerText = lastItem;  
      listContainer.appendChild(titles);
    
  }
  createBtn.addEventListener('click', newNote);
})();