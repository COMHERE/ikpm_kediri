function format($t) {
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Jenis Kelamin:</td>' +
        '<td>' + $t.gsx$jeniskelamin.$t + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Alamat:</td>' +
        '<td>' + $t.gsx$alamatrumah.$t + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Pekerjaan:</td>' +
        '<td>' + $t.gsx$profesikerja.$t + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Bisnis:</td>' +
        '<td>' + $t.gsx$jenisusahabisnis.$t + '</td>' +
        '</tr>' +
        '<td>Karya/Prestasi:</td>' +
        '<td>' + $t.gsx$karyaprestasilain.$t + '</td>' +
        '</tr>' +
        '</table>';
}

$(document).ready(function () {
    var table = $('#data_ikpm_kediri').DataTable({
        "responsive": true,
        "searchable": false,
        "orderable": false,
        "target": 0,
        "bServerSide": false,
        "bProcessing": true,
        "sAjaxDataProp": "feed.entry",
        "sAjaxSource": "https://spreadsheets.google.com/feeds/list/19O0NeamiZGJ8tpqSRw37hVY7yOh9TVEg4TSVj4WtdMs/1/public/values?alt=json",
        "aoColumns": [{
            "mDataProp": null
        },
        {
            "mDataProp": "gsx$namalengkapanggota.$t"
        },
        {
            "mDataProp": "gsx$tahunangkatanalumnigontor.$t"
        },
        {
            "mDataProp": "gsx$nostambuk.$t"
        },
        {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        }
        ],
        "order": [
            [1, 'asc']
        ]
    });

    table.on('order.dt search.dt', function () {
        table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();

    $('#data_ikpm_kediri tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {

            row.child.hide();
            tr.removeClass('shown');
        } else {

            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});
