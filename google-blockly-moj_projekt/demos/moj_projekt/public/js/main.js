$(document).ready(function(){
    $('.delete-block').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/blocks/'+id,
            success: function(response){
                alert('Deleting Block');
                window.location.href='/';
            },
            error: function(err){
                console.log(err);
            }
        });
    });
});