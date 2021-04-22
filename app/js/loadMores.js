jQuery(function($){
    $('#rubricLoad').click(function(){
        $('#rubricLoad > span').text('Загружаю...');
        var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page' : current_page
        };
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    $('#rubricLoad > span').text('Загрузить ещё')
                    $('.rubric__topLeft .horizontalBar').append(data);
                    current_page++;
                    if (current_page == max_pages) $("#rubricLoad").remove();
                } else {
                    $('#rubricLoad').remove();
                }
            }
        });
    });
});

jQuery(function($){
    $('#journalLoad').click(function(){
        $('#journalLoad > span').text('Загружаю...');
        var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page' : current_page,
            'filter' : true
        };
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    $('#journalLoad > span').text('Загрузить ещё')
                    $('.journal__block2 .horizontalBar').append(data);
                    current_page++;
                    if (current_page == max_pages) $("#journalLoad").remove();
                } else {
                    $('#journalLoad').remove();
                }
            }
        });
    });
})

jQuery(function($){
    $('#newsLoad').click(function(){
        $('#newsLoad > span').text('Загружаю...');
        var data = {
            'action': '404_news',
            'offset' : offset,
        };
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    $('#newsLoad > span').text('Загрузить ещё')
                    $('.page404__newsLeft .horizontalBar').append(data);
                    offset+=7;
                    if (current_page == max_pages) $("#newsLoad").remove();
                } else {
                    $('#newsLoad').remove();
                }
            }
        });
    });
});

jQuery(function($){
    $('#eventsLoad').click(function(){
        $('#eventsLoad > span').text('Загружаю...');
        var data = {
            'action': 'events',
        };
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    $('#eventsLoad').remove();
                    $('.events__block1List .horizontalBar').append(data);
                }
            }
        });
    });
});

jQuery(function($){
    $('#loadmoreSpec').click(function(){
        let blocks = document.querySelector('.spec__block2Blocks')

        if(blocks !== null) {
            blocks.classList.add('visible')
        }

        $('#loadmoreSpec > span').text('Загружаю...');
        var data = {
            'action': 'spec',
            'query': true_posts3,
            'offset' : offset,
        };
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    $('#loadmoreSpec > span').text('Загрузить ещё')
                    $('.spec__block2Blocks').append(data);
                    offset += 12;
                    current_page++;
                    if (current_page == max_pages3) $("#loadmoreSpec").remove();
                } else {
                    $('#loadmoreSpec').remove();
                }
            }
        });
    });
});

jQuery(function($){
    $('#loadmoreSpec2').click(function(){
        $('#loadmoreSpec2 > span').text('Загружаю...');
        let offset = 5;
        var data = {
            'dateAndViews': true,
            'action': 'loadmore',
            'query': true_posts,
            'page' : current_page
        };
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    $('#loadmoreSpec2 > span').text('Загрузить ещё')
                    $('.spec__block3Bars .horizontalBar').append(data);
                    offset += 5;
                    current_page++;
                    if (current_page == max_pages) $("#loadmoreSpec2").remove();
                } else {
                    $('#loadmoreSpec2').remove();
                }
            }
        });
    });
});

jQuery(function($){
    $('#loadmoreSpecMWR').click(function(){
        let blocks = document.querySelector('.spec__block2Blocks')

        if(blocks !== null) {
            blocks.classList.add('visible')
        }

        $('#loadmoreSpecMWR > span').text('Загружаю...');
        var data = {
            'action': 'specMWR',
            'query': true_posts4,
            'offset' : offset2,
        };
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    $('#loadmoreSpecMWR > span').text('Загрузить ещё')
                    $('.blockWithoutImg').append(data);
                    offset2 += 8;
                    current_page4++;
                    if (current_page4 == max_pages4) $("#loadmoreSpec").remove();
                } else {
                    $('#loadmoreSpecMWR').remove();
                }
            }
        });
    });
});

jQuery(function($){
    $('#archiveLoad').click(function(){
        $('#archiveLoad > span').text('Загружаю...'); // изменяем текст кнопки, вы также можете добавить прелоадер
        var data = {
            'action': 'archiveloadmore',
            'offset': offset,
        };
        $.ajax({
            url:ajaxurl, // обработчик
            data:data, // данные
            type:'POST', // тип запроса
            success:function(data){
                if( data ) {
                    $('#archiveLoad > span').text('Загрузить ещё')
                    $('.magazine2').append(data);
                    offset += 9;
                } else {
                    $('#archiveLoad').remove();
                }
            }
        });
    });
});

let similar = function($){

    var data = {
        'action': 'similar',
        'tags': alltags
    };
    $.ajax({
        url:ajaxurl,
        data:data,
        type:'POST',
        success:function(data){
            if( data ) {

                $('.part3 .horizontalBar').append(data);

            }
        }
    });
}