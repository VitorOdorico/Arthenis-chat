jQuery('document').ready(function() {
    var sqls;
    function sql(query){
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            dataType: "json",
            data: {},
            async: false,
            success:function(dados){
                sqls = dados;
                console.log('callback');
            }
        });
        return sqls;
    }
});