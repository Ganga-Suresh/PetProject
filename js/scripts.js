window.onload = function () {
   const form = document.getElementById('bookForm');
   const titleInput = document.getElementById('title');
   const toBeReadList = document.getElementById('toBeReadList');
   const readingList = document.getElementById('readingList');
   const readedList = document.getElementById('readList');

   form.addEventListener('submit', function (event) {
      event.preventDefault();

      const title = titleInput.value.trim();
      
      if (title) {
         const listItem = createListItem(title);
         toBeReadList.appendChild(listItem);
         titleInput.value = '';
      }
   });


   // function for creating list of TBR
   function createListItem(title) {
      const listItem = document.createElement('li');
      listItem.classList.add('book-item');
      listItem.textContent = title;
      
      const moveBtn = createButton('Start Reading', moveToList);
      const finishBtn = createButton('Finish Reading', moveToListFinished);
      
      listItem.appendChild(moveBtn);
      listItem.appendChild(finishBtn);
      
      return listItem;
   }


   // moving a list to currently reading
   function moveToList() {
      const listItem = this.parentElement;
      const progressInput = document.createElement('input');
      progressInput.type = 'number';
      progressInput.classList.add('progress-input');
      progressInput.placeholder = 'Page';
      listItem.appendChild(progressInput);
      readingList.appendChild(listItem);
      this.remove();
   }

   // moving to finished books
   function moveToListFinished() {
      const listItem = this.parentElement;
      readedList.appendChild(listItem);
      this.remove();
      listItem.querySelector('.progress-input').remove();
   }

   function createButton(text, clickHandler) {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.classList.add('move-btn');
      btn.addEventListener('click', clickHandler.bind(btn));
      return btn;
   }
};
