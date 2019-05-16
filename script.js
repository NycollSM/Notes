(function(){
  const createBtn = document.getElementById('createBtn');

  function newNote(){
    //disable button
    createBtn.setAttribute('disabled', true);

    class Note{
      constructor (inputTitle, contentInput){
        this.inputTitle = inputTitle;
        this.contentInput = contentInput;
      }
     /*s get Values{
        
      }*/
    }
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

    //events
    deleteBtn.addEventListener('click', function(){
      event.preventDefault();
      document.removeChild(dialog); 
    });
  }

  function list( newNote){
  const listContainer = document.getElementById('list');
  //const prueba = newNote(dialog);
  //console.log(prueba);
  } list();


  createBtn.addEventListener('click', newNote);
})();