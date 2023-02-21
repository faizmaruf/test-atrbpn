//import data, asumsi data di get dari database
import dataPegawai from "./data.js"


//fungsi membuar table
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
        $('tr').attr('id', 'test');
    });
    table.append(tbody);

    // Menambahkan tabel ke dalam dokumen
    $('div.container').append(table);
    $('table').addClass('table table-bordered fade-in');

});

// toogle button untuk hide dan show table
$(document).ready(function () {
    $('#toggle-btn').click(function () {
        $(this).toggleClass('btn-danger btn-success');
        if ($(this).text() == "Hide") {
            $(this).text("Show");
            $('table').addClass('hidden')
        } else {
            $(this).text("Hide");
            $('table').removeClass('hidden');
        }
    });
});

$("h2").click(function () {
    alert("asdas");
});