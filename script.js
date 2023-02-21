//import data, asumsi data di get dari database
import dataPegawai from "./data.js"

//fungsi membuat table
$(document).ready(function () {
    // Mendapatkan referensi ke tabel
    var table = $('<table>');

    // Menambahkan header ke tabel
    var headerRow = $('<tr>');
    headerRow.append($('<th>').text('Nomor'));
    headerRow.append($('<th>').text('Kode Unit Kerja'));
    headerRow.append($('<th>').text('Unit Kerja'));
    table.append($('<thead>').append(headerRow));

    // Menambahkan data ke tabel

    var tbody = $('<tbody>');
    $.each(dataPegawai, function (i, rowData) {
        var dataRow = $('<tr>');

        dataRow.append($('<td>').text(i + 1));
        dataRow.append($('<td>').text(rowData.kodeUnitKerja));
        dataRow.append($('<td>').text(rowData.UnitKerja));
        tbody.append(dataRow);
    });
    table.append(tbody);


    // Menambahkan tabel ke dalam dokumen
    $('div.container').append(table);
    $('table').addClass('table table-bordered fade-in');

});

//menambahkan id di tiap table row
$(document).ready(function () {
    let j = 1;
    $.each(dataPegawai, function (i, rowData) {
        $('tbody tr:nth-of-type(' + j + ')').attr('id', rowData.id);
        j++
    });
});


// toogle button untuk hide dan show table
$(document).ready(function () {
    $('#toggle-btn').click(function () {
        $(this).toggleClass('btn-danger btn-success');
        if ($(this).text() == "Hide") {
            $(this).text("Show");
            $('table').addClass('d-none')
        } else {
            $(this).text("Hide");
            $('table').removeClass('d-none');
        }
    });
});

//click alert
$(document).ready(function () {
    $("tr").click(function () {
        let id = $(this).attr('id');
        const kodeUnitKerja = dataPegawai.filter((data) => data.id == id)[0].kodeUnitKerja
        alert("Kode Unit Kerja : " + kodeUnitKerja);
    });
})