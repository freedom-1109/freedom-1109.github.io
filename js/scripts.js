function getPrice() {
    $('#price').text(`${$('#mv').text() * 120 + $('#cv').text() * 110 + $('#clv').text() * 100} руб`)
}

$(document).on('click', '#mp', function () {
    let obj = $('#mv');
    let v = +obj.text();
    obj.text(`${v + 1}`);
    getPrice()
})

$(document).on('click', '#mm', function () {
    let obj = $('#mv');
    let v = +obj.text();
    if (v > 0) obj.text(`${v - 1}`);
    getPrice()
})

$(document).on('click', '#cp', function () {
    let obj = $('#cv');
    let v = +obj.text();
    obj.text(`${v + 1}`);
    getPrice()
})

$(document).on('click', '#cm', function () {
    let obj = $('#cv');
    let v = +obj.text();
    if (v > 0) obj.text(`${v - 1}`);
    getPrice()
})

$(document).on('click', '#clp', function () {
    let obj = $('#clv');
    let v = +obj.text();
    obj.text(`${v + 1}`);
    getPrice()
})

$(document).on('click', '#clm', function () {
    let obj = $('#clv');
    let v = +obj.text();
    if (v > 0) obj.text(`${v - 1}`);
    getPrice()
})

$(document).on('click', '#makeOrder', function () {
    let order = ''
    if ($('#mv').text() != 0) order += `\tМексиканская ${$('#mv').text()}\n`
    if ($('#cv').text() != 0) order += `\tСырная  ${$('#cv').text()}\n`
    if ($('#clv').text() != 0) order += `\tКласическая   ${$('#clv').text()}\n`
    if (order)
        confirm(`Ваш заказ: \n${order} С вас: ${$('#price').text()}`)
})
