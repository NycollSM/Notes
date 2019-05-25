(function(){
  const createBtn = document.getElementById('createBtn');

  const Data = [];

  function newNote(){
    //disable button
    createBtn.setAttribute('disabled', true);
    //elements
    const title= document.getElementById('inputTile');
    const description = document.getElementById('description');


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