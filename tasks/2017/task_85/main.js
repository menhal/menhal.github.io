var page = require("webpage").create();
// page.viewportSize = { width: 1440, height: 1080 };


phantom.addCookie({
    'name': 'BDUSS', /* required property */
    'value': 'UVHUX5La1hmb0NXZjFmRzhkNHp3S0p6ZFlMSUllcjF5NS0xanRKblVyYlBzaE5aSVFBQUFBJCQAAAAAAAAAAAEAAABD4J8BbWVuaGFsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM8l7FjPJexYN', /* required property */
    'domain': '.baidu.com',
    'path': '/', /* required property */
    'httponly': true,
    'secure': false,
    'expires': (new Date()).getTime() + (1000 * 60 * 60)   /* <-- expires in 1 hour */
});


page.open('https://www.baidu.com/s?wd=abcd', function (status) {


    var title = page.evaluate(function () {
        var list = []
        $(".c-gap-bottom-small").each(function (index, el) {
            list.push($(el).text())
        })
        return list;
    });

    console.log(title);

    if (status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});