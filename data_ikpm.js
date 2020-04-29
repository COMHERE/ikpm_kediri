$(document).ready(function() {
            if ($(window).width() <= 1024) {
                $("#data_ikpm_kediri").attr('class', '');
            } else {
                $("#data_ikpm_kediri").attr('class', 'nowrap');
            }

            var table = $('#data_ikpm_kediri').DataTable({
                "scrollX": true,
                "scrollY": "250px",
                "scrollCollapse": true,
                "responsive": true,
                "searchable": false,
                "orderable": false,
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
                        "mDataProp": "gsx$jeniskelamin.$t"
                    },
                    {
                        "mDataProp": "gsx$profesikerja.$t"
                    },
                    {
                        "mDataProp": "gsx$jenisusahabisnis.$t"
                    },
                    {
                        "mDataProp": "gsx$karyaprestasilain.$t"
                    },
                    {
                        "mDataProp": "gsx$alamatrumah.$t"
                    },

                ],
                order: [1, 'asc'],

                fixedHeader: {
                    headerOffset: 50
                }
            });

            table.on('order.dt search.dt', function() {
                table.column(0, {
                    search: 'applied',
                    order: 'applied'
                }).nodes().each(function(cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();

        });
