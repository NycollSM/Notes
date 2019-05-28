(function(){
  const Data = [];


  function newNote(){

    //elements
    const dialog = document.getElementById('dialog');
    const title= document.getElementById('inputTile');
    const description = document.getElementById('description');
    const createBtn = document.getElementById('createBtn');
    const saveBtn = document.getElementById('saveBtn');
    const closeBtn = document.getElementById('closeBtn');
    const reset = document.getElementById('resetBtn');

    dialog.style.display = 'block';

    function getValues (){
      event.preventDefault();
      let Note = {
        title : title.value,
        description : description.value,
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
      dialog.style.display = 'none';
    });

    //reset textarea
    reset.addEventListener('click', function(){
      event.preventDefault();
      title.value= '';
      description.value = '';
    })
  }

  function list(){
    const listContainer = document.getElementById('list');
    const lastItem = Data[Data.length -1].title;
    const titles = document.createElement('li');
    titles.innerText = lastItem;  
    listContainer.appendChild(titles);
    listContainer.insertBefore(titles, listContainer.childNodes[0]);
  }

  createBtn.addEventListener('click', newNote);
})();