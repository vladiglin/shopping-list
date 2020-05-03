

function registerEvent() {
    
    $("#js-shopping-list-form").on('submit', function(event){
        var text = $('#shopping-list-entry').val()
        $(".shopping-list").append('<li>' + '<span class="shopping-item">'+ text + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
           '<span class="button-label">delete</span>' +
          '</button>'+
        '</div>' + '</li>');
    
       
        $('#shopping-list-entry').val('');
    
        event.preventDefault();
    });
    
    $('.shopping-list').on('click', 'button.shopping-item-delete', function(event){
        $(event.target).closest('li').remove();
    });
    
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
      });
}



$(registerEvent);