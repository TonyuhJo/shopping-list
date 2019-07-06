//adds an item to the bottom of the list
//either by clicking or w/ Enter key
$('#js-shopping-list-form').on('submit', function(event){
    event.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">'${newItem}'</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span> 
          </button> 
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
  });
  
  //checks and unchecks (line-through) the list item
  //when check button is clicked
  //works w/ Space and Enter keys
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  
  //deletes an item from the list
  //when delete button is clicked
  //works w/ Space and Enter keys
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(this).closest('li').remove();
  });