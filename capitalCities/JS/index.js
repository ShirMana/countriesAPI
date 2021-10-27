$(function () {
    $('button').on('click', function () {
        let capital = $('input').val(),
            capitalUrl = 'https://restcountries.com/v2/capital/' + capital;

        $.ajax({
            url: capitalUrl,
            method: 'GET',
            datatype: 'json'
        })
            .done(function (response) {
                console.log(response);
                let str = '';
                

                //this loop was created to deal with capitals which have more than 1 country (Rome)
                $.each(response, function (key, value) {
                    str += '<h3>' + response[key].name + " " + response[key].nativeName + '</h3>';
                    str += '<img src = ' + response[key].flag + ' width=278.5px>';
                    str += '<p>Population: ' + response[key].population;
                    str += '<p>Languages: ' + response[key].languages[0].name + '</p>';
                    str += '<p>Continent: ' + response[key].region + '</p>';
                });

                $('#output').html(str);
            })
            .fail(function (error) {
                console.log("Please enter correct Capital name.");
                $('#output').html('Please enter correct Capital name.');
            });
    });
});