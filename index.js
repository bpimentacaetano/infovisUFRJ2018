

$(document).ready(function() {

    var data = [{"uf":"PA","hc-key":"br-pa","value":7581051,"id":"PA"},{"uf":"ES","hc-key":"br-es","value":3514952,"id":"ES"},{"uf":"RS","hc-key":"br-rs","value":10693929,"id":"RS"},{"uf":"AM","hc-key":"br-am","value":3483985,"id":"AM"},{"uf":"MT","hc-key":"br-mt","value":3035122,"id":"MT"},{"uf":"MG","hc-key":"br-mg","value":19597330,"id":"MG"},{"uf":"CE","hc-key":"br-ce","value":8452381,"id":"CE"},{"uf":"PR","hc-key":"br-pr","value":10444526,"id":"PR"},{"uf":"BA","hc-key":"br-ba","value":14016906,"id":"BA"},{"uf":"AL","hc-key":"br-al","value":3120494,"id":"AL"},{"uf":"PI","hc-key":"br-pi","value":3118360,"id":"PI"},{"uf":"SP","hc-key":"br-sp","value":41262199,"id":"SP"},{"uf":"GO","hc-key":"br-go","value":6003788,"id":"GO"},{"uf":"MS","hc-key":"br-ms","value":2449024,"id":"MS"},{"uf":"AC","hc-key":"br-ac","value":733559,"id":"AC"},{"uf":"SE","hc-key":"br-se","value":2068017,"id":"SE"},{"uf":"PE","hc-key":"br-pe","value":8796448,"id":"PE"},{"uf":"DF","hc-key":"br-df","value":2570160,"id":"DF"},{"uf":"RJ","hc-key":"br-rj","value":15989929,"id":"RJ"},{"uf":"RR","hc-key":"br-rr","value":450479,"id":"RR"},{"uf":"AP","hc-key":"br-ap","value":669526,"id":"AP"},{"uf":"SC","hc-key":"br-sc","value":6248436,"id":"SC"},{"uf":"RO","hc-key":"br-ro","value":1562409,"id":"RO"},{"uf":"TO","hc-key":"br-to","value":1383445,"id":"TO"},{"uf":"PB","hc-key":"br-pb","value":3766528,"id":"PB"},{"uf":"RN","hc-key":"br-rn","value":3168027,"id":"RN"},{"uf":"MA","hc-key":"br-ma","value":6574789,"id":"MA"}];
    map(data);


    bar(data);

});



function map(data) {
        var mapChart = new Highcharts.Map({
            chart: {
                renderTo: 'mapContainer'
            },
            title: {
                text: 'População Residentes por UF'
            },
            mapNavigation: {
                enabled: false
            },
            legend: {
                align: "right",
                x: -210
            },
            colorAxis: {
                min: 0,
                minColor: '#E6E7E8',
                maxColor: '#009A6F'
            },
            plotOptions: {
                series: {
                    point: {
                        events: {
                            select: function () {
                                selectUf(this.uf);
                            },
                            unselect: function () {
                            }
                        }
                    }
                }
            },
            series: [{
                data: data,
                mapData: Highcharts.maps['countries/br/br-all'],
                joinBy: 'hc-key',
                name: 'Quantidade Residentes',
                allowPointSelect: true,
                cursor: 'pointer',
                states: {
                    hover: {
                        color: '#003626'
                    },
                    select: {
                        color: '#003626'
                    },
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.uf}',
                    color: '#000000'
                }
            }]
        });

        // if (scope.uf != "") {
        //     if (mapChart.get(scope.uf)) {
        //         mapChart.get(scope.uf).color = '#003626';
        //     }
        // }

    }


function selectUf(uf){
    var categories = new Array();
    var data = new Array();
    var dataPie = new Array();


    dataCidade.forEach(function (element) {
        if(element.uf == uf){
            categories.push(element.cidade);    
            data.push(element.value);
        };
    });

    // console.log(categories);
    // console.log(data);

    bar(categories, data);

    dataRural.forEach(function (element) {
        if(element.uf == uf){
            dataPie.push({
                name: 'Urbana',
                y: element.urbana
            });
            dataPie.push({
                name: 'Rural',
                y: element.rural
            });
        };
    });

    pie(dataPie);

}

    


function bar(categories, data) {
        var barChart = new Highcharts.Chart({
             chart: {
                type: 'column',
                renderTo: 'barContainer'
            },
            title: {
                text: 'População Residente por Município'
            },
            xAxis: {
                categories: categories.slice(0,14)
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Censo de 2010',
                data: data.slice(0,14)
            }]  
      });
}


function pie(data) {
    var pieChart = new Highcharts.Chart({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            renderTo: 'pieContainer'
        },
        title: {
            text: 'Tipo de População Residente'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data
        }]           
    });
}

var dataRural=[
{
uf: "PA",
urbana: 5191559,
rural: 2389492
},
{
uf: "ES",
urbana: 2931472,
rural: 583480
},
{
uf: "RS",
urbana: 9100291,
rural: 1593638
},
{
uf: "AM",
urbana: 2755490,
rural: 728495
},
{
uf: "MT",
urbana: 2482801,
rural: 552321
},
{
uf: "MG",
urbana: 16715216,
rural: 2882114
},
{
uf: "CE",
urbana: 6346557,
rural: 2105824
},
{
uf: "PR",
urbana: 8912692,
rural: 1531834
},
{
uf: "BA",
urbana: 10102476,
rural: 3914430
},
{
uf: "AL",
urbana: 2297860,
rural: 822634
},
{
uf: "PI",
urbana: 2050959,
rural: 1067401
},
{
uf: "SP",
urbana: 39585251,
rural: 1676948
},
{
uf: "GO",
urbana: 5420714,
rural: 583074
},
{
uf: "MS",
urbana: 2097238,
rural: 351786
},
{
uf: "AC",
urbana: 532279,
rural: 201280
},
{
uf: "SE",
urbana: 1520366,
rural: 547651
},
{
uf: "PE",
urbana: 7052210,
rural: 1744238
},
{
uf: "DF",
urbana: 2482210,
rural: 87950
},
{
uf: "RJ",
urbana: 15464239,
rural: 525690
},
{
uf: "RR",
urbana: 344859,
rural: 105620
},
{
uf: "AP",
urbana: 601036,
rural: 68490
},
{
uf: "SC",
urbana: 5247913,
rural: 1000523
},
{
uf: "RO",
urbana: 1149180,
rural: 413229
},
{
uf: "TO",
urbana: 1090106,
rural: 293339
},
{
uf: "PB",
urbana: 2838678,
rural: 927850
},
{
uf: "RN",
urbana: 2464991,
rural: 703036
},
{
uf: "MA",
urbana: 4147149,
rural: 2427640
}
];


var dataCidade= [
{
uf: "PA",
value: 0,
cidade: "Mojuí dos Campos"
},
{
uf: "MS",
value: 0,
cidade: "Paraíso das Águas"
},
{
uf: "RS",
value: 0,
cidade: "Pinto Bandeira"
},
{
uf: "SC",
value: 0,
cidade: "Balneário Rincão"
},
{
uf: "SC",
value: 0,
cidade: "Pescaria Brava"
},
{
uf: "SP",
value: 11253503,
cidade: "São Paulo"
},
{
uf: "RJ",
value: 6320446,
cidade: "Rio de Janeiro"
},
{
uf: "BA",
value: 2675656,
cidade: "Salvador"
},
{
uf: "DF",
value: 2570160,
cidade: "Brasília"
},
{
uf: "CE",
value: 2452185,
cidade: "Fortaleza"
},
{
uf: "MG",
value: 2375151,
cidade: "Belo Horizonte"
},
{
uf: "AM",
value: 1802014,
cidade: "Manaus"
},
{
uf: "PR",
value: 1751907,
cidade: "Curitiba"
},
{
uf: "PE",
value: 1537704,
cidade: "Recife"
},
{
uf: "RS",
value: 1409351,
cidade: "Porto Alegre"
},
{
uf: "PA",
value: 1393399,
cidade: "Belém"
},
{
uf: "GO",
value: 1302001,
cidade: "Goiânia"
},
{
uf: "SP",
value: 1221979,
cidade: "Guarulhos"
},
{
uf: "SP",
value: 1080113,
cidade: "Campinas"
},
{
uf: "MA",
value: 1014837,
cidade: "São Luís"
},
{
uf: "RJ",
value: 999728,
cidade: "São Gonçalo"
},
{
uf: "AL",
value: 932748,
cidade: "Maceió"
},
{
uf: "RJ",
value: 855048,
cidade: "Duque de Caxias"
},
{
uf: "PI",
value: 814230,
cidade: "Teresina"
},
{
uf: "RN",
value: 803739,
cidade: "Natal"
},
{
uf: "RJ",
value: 796257,
cidade: "Nova Iguaçu"
},
{
uf: "MS",
value: 786797,
cidade: "Campo Grande"
},
{
uf: "SP",
value: 765463,
cidade: "São Bernardo do Campo"
},
{
uf: "PB",
value: 723515,
cidade: "João Pessoa"
},
{
uf: "SP",
value: 676407,
cidade: "Santo André"
},
{
uf: "SP",
value: 666740,
cidade: "Osasco"
},
{
uf: "PE",
value: 644620,
cidade: "Jaboatão dos Guararapes"
},
{
uf: "SP",
value: 629921,
cidade: "São José dos Campos"
},
{
uf: "SP",
value: 604682,
cidade: "Ribeirão Preto"
},
{
uf: "MG",
value: 604013,
cidade: "Uberlândia"
},
{
uf: "MG",
value: 603442,
cidade: "Contagem"
},
{
uf: "SP",
value: 586625,
cidade: "Sorocaba"
},
{
uf: "SE",
value: 571149,
cidade: "Aracaju"
},
{
uf: "BA",
value: 556642,
cidade: "Feira de Santana"
},
{
uf: "MT",
value: 551098,
cidade: "Cuiabá"
},
{
uf: "MG",
value: 516247,
cidade: "Juiz de Fora"
},
{
uf: "SC",
value: 515288,
cidade: "Joinville"
},
{
uf: "PR",
value: 506701,
cidade: "Londrina"
},
{
uf: "RJ",
value: 487562,
cidade: "Niterói"
},
{
uf: "PA",
value: 471980,
cidade: "Ananindeua"
},
{
uf: "RJ",
value: 469332,
cidade: "Belford Roxo"
},
{
uf: "RJ",
value: 463731,
cidade: "Campos dos Goytacazes"
},
{
uf: "RJ",
value: 458673,
cidade: "São João de Meriti"
},
{
uf: "GO",
value: 455657,
cidade: "Aparecida de Goiânia"
},
{
uf: "RS",
value: 435564,
cidade: "Caxias do Sul"
},
{
uf: "RO",
value: 428527,
cidade: "Porto Velho"
},
{
uf: "SC",
value: 421240,
cidade: "Florianópolis"
},
{
uf: "SP",
value: 419400,
cidade: "Santos"
},
{
uf: "SP",
value: 417064,
cidade: "Mauá"
},
{
uf: "ES",
value: 414586,
cidade: "Vila Velha"
},
{
uf: "ES",
value: 409267,
cidade: "Serra"
},
{
uf: "SP",
value: 408258,
cidade: "São José do Rio Preto"
},
{
uf: "AP",
value: 398204,
cidade: "Macapá"
},
{
uf: "SP",
value: 387779,
cidade: "Mogi das Cruzes"
},
{
uf: "SP",
value: 386089,
cidade: "Diadema"
},
{
uf: "PB",
value: 385213,
cidade: "Campina Grande"
},
{
uf: "MG",
value: 378089,
cidade: "Betim"
},
{
uf: "PE",
value: 377779,
cidade: "Olinda"
},
{
uf: "SP",
value: 370126,
cidade: "Jundiaí"
},
{
uf: "SP",
value: 369584,
cidade: "Carapicuíba"
},
{
uf: "SP",
value: 364571,
cidade: "Piracicaba"
},
{
uf: "MG",
value: 361915,
cidade: "Montes Claros"
},
{
uf: "PR",
value: 357077,
cidade: "Maringá"
},
{
uf: "ES",
value: 348738,
cidade: "Cariacica"
},
{
uf: "SP",
value: 343937,
cidade: "Bauru"
},
{
uf: "AC",
value: 336038,
cidade: "Rio Branco"
},
{
uf: "GO",
value: 334613,
cidade: "Anápolis"
},
{
uf: "SP",
value: 332445,
cidade: "São Vicente"
},
{
uf: "RS",
value: 328275,
cidade: "Pelotas"
},
{
uf: "ES",
value: 327801,
cidade: "Vitória"
},
{
uf: "CE",
value: 325441,
cidade: "Caucaia"
},
{
uf: "RS",
value: 323827,
cidade: "Canoas"
},
{
uf: "SP",
value: 321770,
cidade: "Itaquaquecetuba"
},
{
uf: "SP",
value: 318640,
cidade: "Franca"
},
{
uf: "PE",
value: 314912,
cidade: "Caruaru"
},
{
uf: "PR",
value: 311611,
cidade: "Ponta Grossa"
},
{
uf: "SC",
value: 309011,
cidade: "Blumenau"
},
{
uf: "BA",
value: 306866,
cidade: "Vitória da Conquista"
},
{
uf: "PE",
value: 300466,
cidade: "Paulista"
},
{
uf: "MG",
value: 296317,
cidade: "Ribeirão das Neves"
},
{
uf: "MG",
value: 295988,
cidade: "Uberaba"
},
{
uf: "RJ",
value: 295917,
cidade: "Petrópolis"
},
{
uf: "PA",
value: 294580,
cidade: "Santarém"
},
{
uf: "PE",
value: 293962,
cidade: "Petrolina"
},
{
uf: "SP",
value: 290752,
cidade: "Guarujá"
},
{
uf: "PR",
value: 286205,
cidade: "Cascavel"
},
{
uf: "RR",
value: 284313,
cidade: "Boa Vista"
},
{
uf: "SP",
value: 278686,
cidade: "Taubaté"
},
{
uf: "SP",
value: 276022,
cidade: "Limeira"
},
{
uf: "PR",
value: 264210,
cidade: "São José dos Pinhais"
},
{
uf: "MG",
value: 263689,
cidade: "Governador Valadares"
},
{
uf: "SP",
value: 262480,
cidade: "Suzano"
},
{
uf: "SP",
value: 262051,
cidade: "Praia Grande"
},
{
uf: "RS",
value: 261031,
cidade: "Santa Maria"
},
{
uf: "RN",
value: 259815,
cidade: "Mossoró"
},
{
uf: "RJ",
value: 257803,
cidade: "Volta Redonda"
},
{
uf: "PR",
value: 256088,
cidade: "Foz do Iguaçu"
},
{
uf: "RS",
value: 255660,
cidade: "Gravataí"
},
{
uf: "MT",
value: 252596,
cidade: "Várzea Grande"
},
{
uf: "CE",
value: 249939,
cidade: "Juazeiro do Norte"
},
{
uf: "MA",
value: 247505,
cidade: "Imperatriz"
},
{
uf: "SP",
value: 244528,
cidade: "Taboão da Serra"
},
{
uf: "BA",
value: 242970,
cidade: "Camaçari"
},
{
uf: "SP",
value: 241311,
cidade: "Sumaré"
},
{
uf: "SP",
value: 240749,
cidade: "Barueri"
},
{
uf: "SP",
value: 240230,
cidade: "Embu das Artes"
},
{
uf: "MG",
value: 239468,
cidade: "Ipatinga"
},
{
uf: "RS",
value: 239384,
cidade: "Viamão"
},
{
uf: "RS",
value: 238940,
cidade: "Novo Hamburgo"
},
{
uf: "PA",
value: 233669,
cidade: "Marabá"
},
{
uf: "TO",
value: 228332,
cidade: "Palmas"
},
{
uf: "RJ",
value: 227322,
cidade: "Magé"
},
{
uf: "SP",
value: 221950,
cidade: "São Carlos"
},
{
uf: "RJ",
value: 218008,
cidade: "Itaboraí"
},
{
uf: "SP",
value: 216745,
cidade: "Marília"
},
{
uf: "MG",
value: 214152,
cidade: "Sete Lagoas"
},
{
uf: "RS",
value: 214087,
cidade: "São Leopoldo"
},
{
uf: "AL",
value: 214006,
cidade: "Arapiraca"
},
{
uf: "MG",
value: 213016,
cidade: "Divinópolis"
},
{
uf: "PR",
value: 212967,
cidade: "Colombo"
},
{
uf: "SP",
value: 211214,
cidade: "Jacareí"
},
{
uf: "SP",
value: 210638,
cidade: "Americana"
},
{
uf: "SC",
value: 209804,
cidade: "São José"
},
{
uf: "CE",
value: 209057,
cidade: "Maracanaú"
},
{
uf: "SP",
value: 208662,
cidade: "Araraquara"
},
{
uf: "SP",
value: 207610,
cidade: "Presidente Prudente"
},
{
uf: "RJ",
value: 206728,
cidade: "Macaé"
},
{
uf: "BA",
value: 204667,
cidade: "Itabuna"
},
{
uf: "MG",
value: 202942,
cidade: "Santa Luzia"
},
{
uf: "RN",
value: 202456,
cidade: "Parnamirim"
},
{
uf: "SP",
value: 201619,
cidade: "Indaiatuba"
},
{
uf: "SP",
value: 201150,
cidade: "Cotia"
},
{
uf: "SP",
value: 200769,
cidade: "Itapevi"
},
{
uf: "BA",
value: 197965,
cidade: "Juazeiro"
},
{
uf: "RS",
value: 197228,
cidade: "Rio Grande"
},
{
uf: "MS",
value: 196035,
cidade: "Dourados"
},
{
uf: "RS",
value: 195673,
cidade: "Alvorada"
},
{
uf: "MT",
value: 195476,
cidade: "Rondonópolis"
},
{
uf: "SP",
value: 192692,
cidade: "Hortolândia"
},
{
uf: "SC",
value: 192308,
cidade: "Criciúma"
},
{
uf: "ES",
value: 189889,
cidade: "Cachoeiro de Itapemirim"
},
{
uf: "CE",
value: 188233,
cidade: "Sobral"
},
{
uf: "SP",
value: 186253,
cidade: "Rio Claro"
},
{
uf: "RJ",
value: 186227,
cidade: "Cabo Frio"
},
{
uf: "PE",
value: 185025,
cidade: "Cabo de Santo Agostinho"
},
{
uf: "RS",
value: 184826,
cidade: "Passo Fundo"
},
{
uf: "BA",
value: 184236,
cidade: "Ilhéus"
},
{
uf: "SC",
value: 183530,
cidade: "Chapecó"
},
{
uf: "SC",
value: 183373,
cidade: "Itajaí"
},
{
uf: "RJ",
value: 182082,
cidade: "Nova Friburgo"
},
{
uf: "SP",
value: 181579,
cidade: "Araçatuba"
},
{
uf: "SP",
value: 180009,
cidade: "Santa Bárbara d'Oeste"
},
{
uf: "RJ",
value: 177813,
cidade: "Barra Mansa"
},
{
uf: "GO",
value: 176424,
cidade: "Rio Verde"
},
{
uf: "GO",
value: 174531,
cidade: "Luziânia"
},
{
uf: "PA",
value: 173149,
cidade: "Castanhal"
},
{
uf: "RJ",
value: 169511,
cidade: "Angra dos Reis"
},
{
uf: "RJ",
value: 168376,
cidade: "Mesquita"
},
{
uf: "SP",
value: 168306,
cidade: "Ferraz de Vasconcelos"
},
{
uf: "PR",
value: 167328,
cidade: "Guarapuava"
},
{
uf: "RJ",
value: 163746,
cidade: "Teresópolis"
},
{
uf: "BA",
value: 163449,
cidade: "Lauro de Freitas"
},
{
uf: "MA",
value: 163045,
cidade: "São José de Ribamar"
},
{
uf: "SE",
value: 160827,
cidade: "Nossa Senhora do Socorro"
},
{
uf: "GO",
value: 159378,
cidade: "Águas Lindas de Goiás"
},
{
uf: "MG",
value: 158954,
cidade: "Ibirité"
},
{
uf: "RJ",
value: 157425,
cidade: "Nilópolis"
},
{
uf: "SC",
value: 156727,
cidade: "Lages"
},
{
uf: "MA",
value: 155460,
cidade: "Timon"
},
{
uf: "MA",
value: 155129,
cidade: "Caxias"
},
{
uf: "SP",
value: 154472,
cidade: "Francisco Morato"
},
{
uf: "SP",
value: 154147,
cidade: "Itu"
},
{
uf: "PA",
value: 153908,
cidade: "Parauapebas"
},
{
uf: "SP",
value: 152614,
cidade: "Itapecerica da Serra"
},
{
uf: "MG",
value: 152435,
cidade: "Poços de Caldas"
},
{
uf: "BA",
value: 151895,
cidade: "Jequié"
},
{
uf: "TO",
value: 150484,
cidade: "Araguaína"
},
{
uf: "SP",
value: 149263,
cidade: "São Caetano do Sul"
},
{
uf: "SP",
value: 146995,
cidade: "Pindamonhangaba"
},
{
uf: "SP",
value: 146744,
cidade: "Bragança Paulista"
},
{
uf: "PI",
value: 145705,
cidade: "Parnaíba"
},
{
uf: "PE",
value: 144466,
cidade: "Camaragibe"
},
{
uf: "SP",
value: 144377,
cidade: "Itapetininga"
},
{
uf: "SC",
value: 143123,
cidade: "Jaraguá do Sul"
},
{
uf: "BA",
value: 141949,
cidade: "Alagoinhas"
},
{
uf: "ES",
value: 141306,
cidade: "Linhares"
},
{
uf: "PA",
value: 141100,
cidade: "Abaetetuba"
},
{
uf: "PR",
value: 140469,
cidade: "Paranaguá"
},
{
uf: "MG",
value: 138710,
cidade: "Patos de Minas"
},
{
uf: "BA",
value: 138341,
cidade: "Teixeira de Freitas"
},
{
uf: "RJ",
value: 137962,
cidade: "Queimados"
},
{
uf: "BA",
value: 137427,
cidade: "Barreiras"
},
{
uf: "SC",
value: 137334,
cidade: "Palhoça"
},
{
uf: "SP",
value: 137245,
cidade: "Mogi Guaçu"
},
{
uf: "MG",
value: 134745,
cidade: "Teófilo Otoni"
},
{
uf: "GO",
value: 132982,
cidade: "Valparaíso de Goiás"
},
{
uf: "SP",
value: 131604,
cidade: "Franco da Rocha"
},
{
uf: "SP",
value: 131040,
cidade: "Jaú"
},
{
uf: "RS",
value: 130957,
cidade: "Sapucaia do Sul"
},
{
uf: "MG",
value: 130615,
cidade: "Pouso Alegre"
},
{
uf: "PE",
value: 129974,
cidade: "Vitória de Santo Antão"
},
{
uf: "PE",
value: 129408,
cidade: "Garanhuns"
},
{
uf: "RJ",
value: 127461,
cidade: "Maricá"
},
{
uf: "SP",
value: 127328,
cidade: "Botucatu"
},
{
uf: "BA",
value: 126929,
cidade: "Porto Seguro"
},
{
uf: "SP",
value: 126603,
cidade: "Atibaia"
},
{
uf: "MG",
value: 126284,
cidade: "Barbacena"
},
{
uf: "MG",
value: 126269,
cidade: "Sabará"
},
{
uf: "RS",
value: 125435,
cidade: "Uruguaiana"
},
{
uf: "MG",
value: 123081,
cidade: "Varginha"
},
{
uf: "CE",
value: 121428,
cidade: "Crato"
},
{
uf: "PR",
value: 120919,
cidade: "Apucarana"
},
{
uf: "PA",
value: 120896,
cidade: "Cametá"
},
{
uf: "PB",
value: 120310,
cidade: "Santa Rita"
},
{
uf: "RJ",
value: 119769,
cidade: "Resende"
},
{
uf: "PR",
value: 119313,
cidade: "Toledo"
},
{
uf: "PR",
value: 119123,
cidade: "Araucária"
},
{
uf: "SP",
value: 118843,
cidade: "Araras"
},
{
uf: "SP",
value: 118720,
cidade: "Cubatão"
},
{
uf: "RS",
value: 118374,
cidade: "Santa Cruz do Sul"
},
{
uf: "RS",
value: 118278,
cidade: "Cachoeirinha"
},
{
uf: "BA",
value: 118047,
cidade: "Simões Filho"
},
{
uf: "MA",
value: 118038,
cidade: "Codó"
},
{
uf: "PR",
value: 117008,
cidade: "Pinhais"
},
{
uf: "RS",
value: 116794,
cidade: "Bagé"
},
{
uf: "RO",
value: 116610,
cidade: "Ji-Paraná"
},
{
uf: "MG",
value: 116512,
cidade: "Conselheiro Lafaiete"
},
{
uf: "CE",
value: 116065,
cidade: "Itapipoca"
},
{
uf: "CE",
value: 113561,
cidade: "Maranguape"
},
{
uf: "PA",
value: 113227,
cidade: "Bragança"
},
{
uf: "MT",
value: 113099,
cidade: "Sinop"
},
{
uf: "SP",
value: 113068,
cidade: "Ribeirão Pires"
},
{
uf: "SP",
value: 112820,
cidade: "Catanduva"
},
{
uf: "PR",
value: 112377,
cidade: "Campo Largo"
},
{
uf: "SP",
value: 112101,
cidade: "Barretos"
},
{
uf: "SP",
value: 112072,
cidade: "Guaratinguetá"
},
{
uf: "RJ",
value: 112008,
cidade: "Araruama"
},
{
uf: "ES",
value: 111788,
cidade: "Colatina"
},
{
uf: "SP",
value: 110074,
cidade: "Sertãozinho"
},
{
uf: "MG",
value: 109801,
cidade: "Araguari"
},
{
uf: "MG",
value: 109783,
cidade: "Itabira"
},
{
uf: "RJ",
value: 109091,
cidade: "Itaguaí"
},
{
uf: "ES",
value: 109028,
cidade: "São Mateus"
},
{
uf: "SP",
value: 108813,
cidade: "Santana de Parnaíba"
},
{
uf: "SP",
value: 108809,
cidade: "Votorantim"
},
{
uf: "SP",
value: 108728,
cidade: "Birigui"
},
{
uf: "BA",
value: 108396,
cidade: "Paulo Afonso"
},
{
uf: "SP",
value: 108344,
cidade: "Jandira"
},
{
uf: "PA",
value: 108246,
cidade: "Marituba"
},
{
uf: "SC",
value: 108089,
cidade: "Balneário Camboriú"
},
{
uf: "SP",
value: 107326,
cidade: "Tatuí"
},
{
uf: "RS",
value: 107278,
cidade: "Bento Gonçalves"
},
{
uf: "SP",
value: 107089,
cidade: "Várzea Paulista"
},
{
uf: "SP",
value: 106793,
cidade: "Valinhos"
},
{
uf: "MG",
value: 106290,
cidade: "Passos"
},
{
uf: "SP",
value: 106013,
cidade: "Poá"
},
{
uf: "RJ",
value: 105676,
cidade: "Rio das Ostras"
},
{
uf: "SP",
value: 105516,
cidade: "Salto"
},
{
uf: "SC",
value: 105503,
cidade: "Brusque"
},
{
uf: "ES",
value: 105286,
cidade: "Guarapari"
},
{
uf: "MA",
value: 105121,
cidade: "Paço do Lumiar"
},
{
uf: "MG",
value: 104527,
cidade: "Vespasiano"
},
{
uf: "GO",
value: 104488,
cidade: "Trindade"
},
{
uf: "PR",
value: 104150,
cidade: "Arapongas"
},
{
uf: "MA",
value: 104047,
cidade: "Açailândia"
},
{
uf: "MS",
value: 103703,
cidade: "Corumbá"
},
{
uf: "MG",
value: 103694,
cidade: "Coronel Fabriciano"
},
{
uf: "PR",
value: 103204,
cidade: "Almirante Tamandaré"
},
{
uf: "SP",
value: 103035,
cidade: "Ourinhos"
},
{
uf: "PE",
value: 102895,
cidade: "São Lourenço da Mata"
},
{
uf: "AM",
value: 102033,
cidade: "Parintins"
},
{
uf: "PE",
value: 102021,
cidade: "Igarassu"
},
{
uf: "MS",
value: 101791,
cidade: "Três Lagoas"
},
{
uf: "MG",
value: 101519,
cidade: "Ubá"
},
{
uf: "SP",
value: 101471,
cidade: "Itatiba"
},
{
uf: "AP",
value: 101262,
cidade: "Santana"
},
{
uf: "SP",
value: 100840,
cidade: "Caraguatatuba"
},
{
uf: "MG",
value: 100765,
cidade: "Muriaé"
},
{
uf: "PR",
value: 100676,
cidade: "Umuarama"
},
{
uf: "PB",
value: 100674,
cidade: "Patos"
},
{
uf: "BA",
value: 100196,
cidade: "Eunápolis"
},
{
uf: "GO",
value: 100085,
cidade: "Formosa"
},
{
uf: "MA",
value: 100014,
cidade: "Bacabal"
},
{
uf: "PA",
value: 99859,
cidade: "Barcarena"
},
{
uf: "PB",
value: 99716,
cidade: "Bayeux"
},
{
uf: "PA",
value: 99075,
cidade: "Altamira"
},
{
uf: "PA",
value: 97819,
cidade: "Paragominas"
},
{
uf: "PA",
value: 97493,
cidade: "Itaituba"
},
{
uf: "SC",
value: 97235,
cidade: "Tubarão"
},
{
uf: "MG",
value: 97171,
cidade: "Ituiutaba"
},
{
uf: "PA",
value: 97128,
cidade: "Tucuruí"
},
{
uf: "PR",
value: 96733,
cidade: "Cambé"
},
{
uf: "CE",
value: 96495,
cidade: "Iguatu"
},
{
uf: "RS",
value: 96087,
cidade: "Erechim"
},
{
uf: "RJ",
value: 95841,
cidade: "Itaperuna"
},
{
uf: "RJ",
value: 95492,
cidade: "Japeri"
},
{
uf: "RS",
value: 95204,
cidade: "Guaíba"
},
{
uf: "SP",
value: 95144,
cidade: "Assis"
},
{
uf: "GO",
value: 95018,
cidade: "Novo Gama"
},
{
uf: "SE",
value: 94861,
cidade: "Lagarto"
},
{
uf: "RJ",
value: 94778,
cidade: "Barra do Piraí"
},
{
uf: "PE",
value: 94429,
cidade: "Abreu e Lima"
},
{
uf: "MG",
value: 93672,
cidade: "Araxá"
},
{
uf: "PR",
value: 93207,
cidade: "Piraquara"
},
{
uf: "GO",
value: 92883,
cidade: "Itumbiara"
},
{
uf: "PA",
value: 92860,
cidade: "Breves"
},
{
uf: "MG",
value: 92200,
cidade: "Lavras"
},
{
uf: "SP",
value: 91756,
cidade: "Leme"
},
{
uf: "PA",
value: 91340,
cidade: "São Félix do Xingu"
},
{
uf: "BA",
value: 90985,
cidade: "Santo Antônio de Jesus"
},
{
uf: "MG",
value: 90658,
cidade: "Itajubá"
},
{
uf: "RO",
value: 90353,
cidade: "Ariquemes"
},
{
uf: "BA",
value: 88673,
cidade: "Valença"
},
{
uf: "GO",
value: 88006,
cidade: "Jataí"
},
{
uf: "MT",
value: 87942,
cidade: "Cáceres"
},
{
uf: "RJ",
value: 87875,
cidade: "São Pedro da Aldeia"
},
{
uf: "SP",
value: 87753,
cidade: "Itapeva"
},
{
uf: "RN",
value: 87668,
cidade: "São Gonçalo do Amarante"
},
{
uf: "PE",
value: 87582,
cidade: "Santa Cruz do Capibaribe"
},
{
uf: "PR",
value: 87194,
cidade: "Campo Mourão"
},
{
uf: "SP",
value: 87057,
cidade: "Itanhaém"
},
{
uf: "SE",
value: 86967,
cidade: "Itabaiana"
},
{
uf: "AM",
value: 86839,
cidade: "Itacoatiara"
},
{
uf: "GO",
value: 86647,
cidade: "Catalão"
},
{
uf: "SP",
value: 86529,
cidade: "Caieiras"
},
{
uf: "SP",
value: 86505,
cidade: "Mogi Mirim"
},
{
uf: "MG",
value: 85463,
cidade: "Itaúna"
},
{
uf: "MG",
value: 85239,
cidade: "Caratinga"
},
{
uf: "AM",
value: 85141,
cidade: "Manacapuru"
},
{
uf: "SP",
value: 84752,
cidade: "Caçapava"
},
{
uf: "MG",
value: 84718,
cidade: "Paracatu"
},
{
uf: "SP",
value: 84692,
cidade: "Votuporanga"
},
{
uf: "MG",
value: 84469,
cidade: "São João del Rei"
},
{
uf: "GO",
value: 84443,
cidade: "Senador Canedo"
},
{
uf: "MG",
value: 84215,
cidade: "Pará de Minas"
},
{
uf: "RS",
value: 83827,
cidade: "Cachoeira do Sul"
},
{
uf: "SP",
value: 83639,
cidade: "São João da Boa Vista"
},
{
uf: "MA",
value: 83528,
cidade: "Balsas"
},
{
uf: "MT",
value: 83431,
cidade: "Tangará da Serra"
},
{
uf: "BA",
value: 83158,
cidade: "Candeias"
},
{
uf: "SP",
value: 82934,
cidade: "Avaré"
},
{
uf: "PR",
value: 82847,
cidade: "Sarandi"
},
{
uf: "MA",
value: 82830,
cidade: "Barra do Corda"
},
{
uf: "SP",
value: 82537,
cidade: "Lorena"
},
{
uf: "MG",
value: 82471,
cidade: "Patrocínio"
},
{
uf: "RS",
value: 82464,
cidade: "Sant'Ana do Livramento"
},
{
uf: "SP",
value: 82146,
cidade: "Paulínia"
},
{
uf: "ES",
value: 81832,
cidade: "Aracruz"
},
{
uf: "PR",
value: 81675,
cidade: "Fazenda Rio Grande"
},
{
uf: "GO",
value: 81649,
cidade: "Planaltina"
},
{
uf: "PR",
value: 81590,
cidade: "Paranavaí"
},
{
uf: "MG",
value: 81243,
cidade: "Timóteo"
},
{
uf: "MG",
value: 80998,
cidade: "Nova Lima"
},
{
uf: "SP",
value: 80956,
cidade: "Mairiporã"
},
{
uf: "RS",
value: 80755,
cidade: "Esteio"
},
{
uf: "PE",
value: 80637,
cidade: "Ipojuca"
},
{
uf: "CE",
value: 80604,
cidade: "Quixadá"
},
{
uf: "MG",
value: 79574,
cidade: "Manhuaçu"
},
{
uf: "PA",
value: 79297,
cidade: "Tailândia"
},
{
uf: "BA",
value: 79247,
cidade: "Jacobina"
},
{
uf: "PE",
value: 79232,
cidade: "Serra Talhada"
},
{
uf: "PR",
value: 78943,
cidade: "Francisco Beltrão"
},
{
uf: "RS",
value: 78915,
cidade: "Ijuí"
},
{
uf: "SE",
value: 78864,
cidade: "São Cristóvão"
},
{
uf: "BA",
value: 78833,
cidade: "Guanambi"
},
{
uf: "SP",
value: 78821,
cidade: "São Roque"
},
{
uf: "SP",
value: 78801,
cidade: "Ubatuba"
},
{
uf: "RO",
value: 78574,
cidade: "Cacoal"
},
{
uf: "AC",
value: 78507,
cidade: "Cruzeiro do Sul"
},
{
uf: "RJ",
value: 78186,
cidade: "Seropédica"
},
{
uf: "MA",
value: 78162,
cidade: "Pinheiro"
},
{
uf: "MS",
value: 77872,
cidade: "Ponta Porã"
},
{
uf: "RS",
value: 77653,
cidade: "Alegrete"
},
{
uf: "MG",
value: 77565,
cidade: "Unaí"
},
{
uf: "RJ",
value: 77432,
cidade: "Três Rios"
},
{
uf: "PE",
value: 77302,
cidade: "Araripina"
},
{
uf: "MA",
value: 77282,
cidade: "Santa Inês"
},
{
uf: "SP",
value: 77039,
cidade: "Cruzeiro"
},
{
uf: "SP",
value: 76786,
cidade: "Matão"
},
{
uf: "BA",
value: 76762,
cidade: "Serrinha"
},
{
uf: "TO",
value: 76755,
cidade: "Gurupi"
},
{
uf: "PE",
value: 76458,
cidade: "Gravatá"
},
{
uf: "RS",
value: 76275,
cidade: "Santo Ângelo"
},
{
uf: "RO",
value: 76202,
cidade: "Vilhena"
},
{
uf: "AM",
value: 75965,
cidade: "Coari"
},
{
uf: "PE",
value: 75644,
cidade: "Goiana"
},
{
uf: "PA",
value: 75556,
cidade: "Redenção"
},
{
uf: "SP",
value: 75035,
cidade: "Bebedouro"
},
{
uf: "RS",
value: 74985,
cidade: "Sapiranga"
},
{
uf: "SP",
value: 74905,
cidade: "Arujá"
},
{
uf: "PE",
value: 74858,
cidade: "Carpina"
},
{
uf: "SC",
value: 74801,
cidade: "São Bento do Sul"
},
{
uf: "CE",
value: 74473,
cidade: "Canindé"
},
{
uf: "BA",
value: 74419,
cidade: "Senhor do Bonfim"
},
{
uf: "RJ",
value: 74234,
cidade: "Saquarema"
},
{
uf: "MG",
value: 74219,
cidade: "Curvelo"
},
{
uf: "SP",
value: 74074,
cidade: "Campo Limpo Paulista"
},
{
uf: "MA",
value: 74043,
cidade: "Santa Luzia"
},
{
uf: "SP",
value: 73942,
cidade: "São Sebastião"
},
{
uf: "MG",
value: 73774,
cidade: "Alfenas"
},
{
uf: "MG",
value: 73699,
cidade: "Nova Serrana"
},
{
uf: "MG",
value: 73610,
cidade: "João Monlevade"
},
{
uf: "PI",
value: 73414,
cidade: "Picos"
},
{
uf: "MA",
value: 73350,
cidade: "Chapadinha"
},
{
uf: "CE",
value: 72812,
cidade: "Crateús"
},
{
uf: "MG",
value: 72765,
cidade: "Três Corações"
},
{
uf: "CE",
value: 72628,
cidade: "Aquiraz"
},
{
uf: "PE",
value: 72432,
cidade: "Belo Jardim"
},
{
uf: "PR",
value: 72370,
cidade: "Pato Branco"
},
{
uf: "CE",
value: 72299,
cidade: "Pacatuba"
},
{
uf: "MG",
value: 72220,
cidade: "Viçosa"
},
{
uf: "CE",
value: 71887,
cidade: "Quixeramobim"
},
{
uf: "RJ",
value: 71843,
cidade: "Valença"
},
{
uf: "SP",
value: 71662,
cidade: "Jaboticabal"
},
{
uf: "RS",
value: 71445,
cidade: "Lajeado"
},
{
uf: "SP",
value: 71432,
cidade: "Lins"
},
{
uf: "SP",
value: 71217,
cidade: "Ibiúna"
},
{
uf: "SC",
value: 70762,
cidade: "Caçador"
},
{
uf: "GO",
value: 70473,
cidade: "Caldas Novas"
},
{
uf: "AL",
value: 70368,
cidade: "Palmeira dos Índios"
},
{
uf: "MG",
value: 70281,
cidade: "Ouro Preto"
},
{
uf: "SP",
value: 70081,
cidade: "Pirassununga"
},
{
uf: "PA",
value: 70018,
cidade: "Moju"
},
{
uf: "PR",
value: 69958,
cidade: "Cianorte"
},
{
uf: "PR",
value: 69872,
cidade: "Telêmaco Borba"
},
{
uf: "CE",
value: 69833,
cidade: "Russas"
},
{
uf: "MG",
value: 69757,
cidade: "Cataguases"
},
{
uf: "RN",
value: 69467,
cidade: "Macaíba"
},
{
uf: "CE",
value: 69159,
cidade: "Aracati"
},
{
uf: "CE",
value: 68892,
cidade: "Tianguá"
},
{
uf: "PE",
value: 68793,
cidade: "Arcoverde"
},
{
uf: "SC",
value: 68621,
cidade: "Concórdia"
},
{
uf: "RS",
value: 68587,
cidade: "Santa Rosa"
},
{
uf: "SP",
value: 68537,
cidade: "Itapira"
},
{
uf: "AL",
value: 68481,
cidade: "Rio Largo"
},
{
uf: "BA",
value: 68273,
cidade: "Itapetinga"
},
{
uf: "RN",
value: 68141,
cidade: "Ceará-Mirim"
},
{
uf: "PR",
value: 67084,
cidade: "Castro"
},
{
uf: "MG",
value: 66803,
cidade: "Janaúba"
},
{
uf: "BA",
value: 66616,
cidade: "Campo Formoso"
},
{
uf: "MT",
value: 66521,
cidade: "Sorriso"
},
{
uf: "BA",
value: 66440,
cidade: "Dias d'Ávila"
},
{
uf: "SP",
value: 66290,
cidade: "Mococa"
},
{
uf: "BA",
value: 66181,
cidade: "Irecê"
},
{
uf: "CE",
value: 66142,
cidade: "Cascavel"
},
{
uf: "RS",
value: 65946,
cidade: "Venâncio Aires"
},
{
uf: "SP",
value: 65829,
cidade: "Amparo"
},
{
uf: "PB",
value: 65803,
cidade: "Sousa"
},
{
uf: "MG",
value: 65463,
cidade: "Januária"
},
{
uf: "CE",
value: 65456,
cidade: "Icó"
},
{
uf: "MA",
value: 65237,
cidade: "Buriticupu"
},
{
uf: "MG",
value: 65128,
cidade: "Formiga"
},
{
uf: "ES",
value: 65001,
cidade: "Viana"
},
{
uf: "MG",
value: 64980,
cidade: "São Sebastião do Paraíso"
},
{
uf: "BA",
value: 64940,
cidade: "Casa Nova"
},
{
uf: "SP",
value: 64696,
cidade: "Fernandópolis"
},
{
uf: "BA",
value: 64602,
cidade: "Brumado"
},
{
uf: "SE",
value: 64409,
cidade: "Estância"
},
{
uf: "PE",
value: 64358,
cidade: "Ouricuri"
},
{
uf: "SP",
value: 64114,
cidade: "Cajamar"
},
{
uf: "PA",
value: 63639,
cidade: "Capanema"
},
{
uf: "RS",
value: 63635,
cidade: "Farroupilha"
},
{
uf: "SP",
value: 63611,
cidade: "Vinhedo"
},
{
uf: "PE",
value: 63517,
cidade: "Escada"
},
{
uf: "BA",
value: 63480,
cidade: "Bom Jesus da Lapa"
},
{
uf: "SP",
value: 63476,
cidade: "Tupã"
},
{
uf: "GO",
value: 63248,
cidade: "Santo Antônio do Descoberto"
},
{
uf: "BA",
value: 63069,
cidade: "Itamaraju"
},
{
uf: "PE",
value: 62931,
cidade: "Pesqueira"
},
{
uf: "RS",
value: 62821,
cidade: "Cruz Alta"
},
{
uf: "PA",
value: 62794,
cidade: "Oriximiná"
},
{
uf: "SP",
value: 62769,
cidade: "Embu-Guaçu"
},
{
uf: "RS",
value: 62764,
cidade: "Camaquã"
},
{
uf: "RN",
value: 62709,
cidade: "Caicó"
},
{
uf: "SC",
value: 62361,
cidade: "Camboriú"
},
{
uf: "AL",
value: 62358,
cidade: "União dos Palmares"
},
{
uf: "MA",
value: 62110,
cidade: "Itapecuru Mirim"
},
{
uf: "MA",
value: 62093,
cidade: "Grajaú"
},
{
uf: "CE",
value: 62065,
cidade: "Morada Nova"
},
{
uf: "PA",
value: 62050,
cidade: "Novo Repartimento"
},
{
uf: "BA",
value: 62040,
cidade: "Conceição do Coité"
},
{
uf: "CE",
value: 61838,
cidade: "Pacajus"
},
{
uf: "PI",
value: 61834,
cidade: "Piripiri"
},
{
uf: "MA",
value: 61725,
cidade: "Coroatá"
},
{
uf: "RS",
value: 61671,
cidade: "São Borja"
},
{
uf: "BA",
value: 61631,
cidade: "Itaberaba"
},
{
uf: "AM",
value: 61453,
cidade: "Tefé"
},
{
uf: "SP",
value: 61428,
cidade: "Lençóis Paulista"
},
{
uf: "RS",
value: 61342,
cidade: "Vacaria"
},
{
uf: "SC",
value: 61310,
cidade: "Araranguá"
},
{
uf: "SC",
value: 61198,
cidade: "Rio do Sul"
},
{
uf: "SC",
value: 60556,
cidade: "Navegantes"
},
{
uf: "RS",
value: 60425,
cidade: "São Gabriel"
},
{
uf: "AL",
value: 60378,
cidade: "Penedo"
},
{
uf: "MG",
value: 60271,
cidade: "Esmeraldas"
},
{
uf: "CE",
value: 60158,
cidade: "Camocim"
},
{
uf: "BA",
value: 60105,
cidade: "Luís Eduardo Magalhães"
},
{
uf: "RS",
value: 60074,
cidade: "Campo Bom"
},
{
uf: "SP",
value: 59773,
cidade: "Peruíbe"
},
{
uf: "GO",
value: 59549,
cidade: "Goianésia"
},
{
uf: "PE",
value: 59526,
cidade: "Palmares"
},
{
uf: "PA",
value: 59466,
cidade: "Santa Izabel do Pará"
},
{
uf: "RS",
value: 59415,
cidade: "Montenegro"
},
{
uf: "BA",
value: 59343,
cidade: "Ipirá"
},
{
uf: "RS",
value: 59317,
cidade: "Carazinho"
},
{
uf: "SC",
value: 58833,
cidade: "Içara"
},
{
uf: "SP",
value: 58827,
cidade: "Cosmópolis"
},
{
uf: "MG",
value: 58740,
cidade: "Pedro Leopoldo"
},
{
uf: "PE",
value: 58668,
cidade: "Bezerros"
},
{
uf: "BA",
value: 58606,
cidade: "Cruz das Almas"
},
{
uf: "PE",
value: 58515,
cidade: "Surubim"
},
{
uf: "SP",
value: 58510,
cidade: "Penápolis"
},
{
uf: "PB",
value: 58446,
cidade: "Cajazeiras"
},
{
uf: "SC",
value: 58206,
cidade: "Biguaçu"
},
{
uf: "PA",
value: 58077,
cidade: "Igarapé-Miri"
},
{
uf: "SC",
value: 57981,
cidade: "Gaspar"
},
{
uf: "PB",
value: 57944,
cidade: "Cabedelo"
},
{
uf: "PR",
value: 57862,
cidade: "Rolândia"
},
{
uf: "BA",
value: 57800,
cidade: "Santo Amaro"
},
{
uf: "PI",
value: 57690,
cidade: "Floriano"
},
{
uf: "CE",
value: 57551,
cidade: "Acaraú"
},
{
uf: "MG",
value: 57390,
cidade: "Ponte Nova"
},
{
uf: "PA",
value: 56716,
cidade: "Viseu"
},
{
uf: "PE",
value: 56696,
cidade: "Moreno"
},
{
uf: "PE",
value: 56629,
cidade: "Salgueiro"
},
{
uf: "MT",
value: 56560,
cidade: "Barra do Garças"
},
{
uf: "PA",
value: 56518,
cidade: "Tomé-Açu"
},
{
uf: "SP",
value: 56476,
cidade: "Batatais"
},
{
uf: "BA",
value: 56289,
cidade: "Euclides da Cunha"
},
{
uf: "CE",
value: 56264,
cidade: "Limoeiro do Norte"
},
{
uf: "PR",
value: 56207,
cidade: "Irati"
},
{
uf: "PA",
value: 56153,
cidade: "Santana do Araguaia"
},
{
uf: "GO",
value: 55915,
cidade: "Cidade Ocidental"
},
{
uf: "CE",
value: 55716,
cidade: "Tauá"
},
{
uf: "RJ",
value: 55551,
cidade: "Rio Bonito"
},
{
uf: "PA",
value: 55462,
cidade: "Monte Alegre"
},
{
uf: "PE",
value: 55439,
cidade: "Limoeiro"
},
{
uf: "SP",
value: 55334,
cidade: "Andradina"
},
{
uf: "PB",
value: 55326,
cidade: "Guarabira"
},
{
uf: "CE",
value: 55323,
cidade: "Barbalha"
},
{
uf: "CE",
value: 55187,
cidade: "Horizonte"
},
{
uf: "CE",
value: 54955,
cidade: "Viçosa do Ceará"
},
{
uf: "MA",
value: 54930,
cidade: "Barreirinhas"
},
{
uf: "SC",
value: 54854,
cidade: "Indaial"
},
{
uf: "RS",
value: 54643,
cidade: "Taquara"
},
{
uf: "AL",
value: 54577,
cidade: "São Miguel dos Campos"
},
{
uf: "RJ",
value: 54273,
cidade: "Cachoeiras de Macacu"
},
{
uf: "SP",
value: 54261,
cidade: "Registro"
},
{
uf: "MG",
value: 54219,
cidade: "Mariana"
},
{
uf: "SP",
value: 53988,
cidade: "Taquaritinga"
},
{
uf: "MG",
value: 53860,
cidade: "Três Pontas"
},
{
uf: "MG",
value: 53828,
cidade: "São Francisco"
},
{
uf: "PE",
value: 53825,
cidade: "Timbaúba"
},
{
uf: "SP",
value: 53792,
cidade: "Mirassol"
},
{
uf: "PA",
value: 53569,
cidade: "Acará"
},
{
uf: "MG",
value: 53468,
cidade: "Frutal"
},
{
uf: "MG",
value: 53368,
cidade: "Pirapora"
},
{
uf: "RS",
value: 53259,
cidade: "Canguçu"
},
{
uf: "PE",
value: 53242,
cidade: "São Bento do Una"
},
{
uf: "RN",
value: 53227,
cidade: "Açu"
},
{
uf: "SP",
value: 53158,
cidade: "Ibitinga"
},
{
uf: "GO",
value: 52935,
cidade: "Mineiros"
},
{
uf: "SC",
value: 52912,
cidade: "Mafra"
},
{
uf: "MA",
value: 52788,
cidade: "Tutóia"
},
{
uf: "SC",
value: 52765,
cidade: "Canoinhas"
},
{
uf: "PR",
value: 52735,
cidade: "União da Vitória"
},
{
uf: "CE",
value: 52645,
cidade: "Granja"
},
{
uf: "PA",
value: 52626,
cidade: "Alenquer"
},
{
uf: "MG",
value: 52520,
cidade: "Lagoa Santa"
},
{
uf: "CE",
value: 52498,
cidade: "Boa Viagem"
},
{
uf: "PA",
value: 52493,
cidade: "Breu Branco"
},
{
uf: "BA",
value: 52418,
cidade: "Tucano"
},
{
uf: "BA",
value: 52338,
cidade: "Monte Santo"
},
{
uf: "AM",
value: 52272,
cidade: "Tabatinga"
},
{
uf: "AM",
value: 52236,
cidade: "Maués"
},
{
uf: "PA",
value: 52172,
cidade: "Portel"
},
{
uf: "SP",
value: 52143,
cidade: "Piedade"
},
{
uf: "AL",
value: 52130,
cidade: "Coruripe"
},
{
uf: "PE",
value: 52105,
cidade: "Buíque"
},
{
uf: "MT",
value: 52066,
cidade: "Primavera do Leste"
},
{
uf: "RO",
value: 52005,
cidade: "Jaru"
},
{
uf: "SP",
value: 51900,
cidade: "São José do Rio Pardo"
},
{
uf: "PA",
value: 51893,
cidade: "Capitão Poço"
},
{
uf: "BA",
value: 51651,
cidade: "Araci"
},
{
uf: "PA",
value: 51651,
cidade: "Benevides"
},
{
uf: "PA",
value: 51567,
cidade: "São Miguel do Guamá"
},
{
uf: "SC",
value: 51562,
cidade: "Laguna"
},
{
uf: "MG",
value: 51544,
cidade: "Campo Belo"
},
{
uf: "RS",
value: 51502,
cidade: "Parobé"
},
{
uf: "RJ",
value: 51483,
cidade: "Guapimirim"
},
{
uf: "CE",
value: 51422,
cidade: "Trairi"
},
{
uf: "SP",
value: 51400,
cidade: "Porto Ferreira"
},
{
uf: "PA",
value: 51360,
cidade: "Jacundá"
},
{
uf: "PE",
value: 51357,
cidade: "Paudalho"
},
{
uf: "PA",
value: 51319,
cidade: "Dom Eliseu"
},
{
uf: "PA",
value: 51309,
cidade: "Ipixuna do Pará"
},
{
uf: "SP",
value: 51242,
cidade: "Nova Odessa"
},
{
uf: "PA",
value: 51220,
cidade: "Itupiranga"
},
{
uf: "CE",
value: 51160,
cidade: "Acopiara"
},
{
uf: "MG",
value: 51130,
cidade: "Leopoldina"
},
{
uf: "BA",
value: 51077,
cidade: "Catu"
},
{
uf: "BA",
value: 51011,
cidade: "Jaguaquara"
},
{
uf: "AL",
value: 50816,
cidade: "Campo Alegre"
},
{
uf: "RO",
value: 50648,
cidade: "Rolim de Moura"
},
{
uf: "SP",
value: 50453,
cidade: "Santa Isabel"
},
{
uf: "MA",
value: 50173,
cidade: "Zé Doca"
},
{
uf: "PB",
value: 50143,
cidade: "Sapé"
},
{
uf: "SP",
value: 50024,
cidade: "Olímpia"
},
{
uf: "MA",
value: 49496,
cidade: "Viana"
},
{
uf: "MG",
value: 49430,
cidade: "Guaxupé"
},
{
uf: "MA",
value: 49412,
cidade: "Vargem Grande"
},
{
uf: "PA",
value: 49333,
cidade: "Óbidos"
},
{
uf: "BA",
value: 49325,
cidade: "Barra"
},
{
uf: "CE",
value: 49311,
cidade: "Beberibe"
},
{
uf: "MT",
value: 49164,
cidade: "Alta Floresta"
},
{
uf: "TO",
value: 49146,
cidade: "Porto Nacional"
},
{
uf: "RS",
value: 49071,
cidade: "Santiago"
},
{
uf: "SP",
value: 48949,
cidade: "Monte Mor"
},
{
uf: "SP",
value: 48893,
cidade: "Porto Feliz"
},
{
uf: "PR",
value: 48792,
cidade: "Prudentópolis"
},
{
uf: "SP",
value: 48576,
cidade: "Capivari"
},
{
uf: "MG",
value: 48519,
cidade: "Congonhas"
},
{
uf: "CE",
value: 48350,
cidade: "Itapajé"
},
{
uf: "SP",
value: 48314,
cidade: "Boituva"
},
{
uf: "GO",
value: 48246,
cidade: "Inhumas"
},
{
uf: "PR",
value: 48198,
cidade: "Ibiporã"
},
{
uf: "AL",
value: 48096,
cidade: "Delmiro Gouveia"
},
{
uf: "SE",
value: 48040,
cidade: "Tobias Barreto"
},
{
uf: "SP",
value: 47934,
cidade: "Itararé"
},
{
uf: "PA",
value: 47889,
cidade: "Vigia"
},
{
uf: "BA",
value: 47880,
cidade: "Santo Estêvão"
},
{
uf: "SP",
value: 47789,
cidade: "Campos do Jordão"
},
{
uf: "SP",
value: 47645,
cidade: "Bertioga"
},
{
uf: "BA",
value: 47518,
cidade: "Ribeira do Pombal"
},
{
uf: "BA",
value: 47515,
cidade: "Caetité"
},
{
uf: "SC",
value: 47188,
cidade: "Videira"
},
{
uf: "RJ",
value: 47124,
cidade: "Paracambi"
},
{
uf: "PA",
value: 47086,
cidade: "Juruti"
},
{
uf: "BA",
value: 47051,
cidade: "Macaúbas"
},
{
uf: "AM",
value: 47017,
cidade: "Manicoré"
},
{
uf: "SP",
value: 47012,
cidade: "Jales"
},
{
uf: "PA",
value: 46964,
cidade: "Rondon do Pará"
},
{
uf: "PR",
value: 46928,
cidade: "Cornélio Procópio"
},
{
uf: "PR",
value: 46819,
cidade: "Marechal Cândido Rondon"
},
{
uf: "MA",
value: 46750,
cidade: "Coelho Neto"
},
{
uf: "MG",
value: 46654,
cidade: "Bocaiúva"
},
{
uf: "SP",
value: 46642,
cidade: "Monte Alto"
},
{
uf: "GO",
value: 46580,
cidade: "Cristalina"
},
{
uf: "SP",
value: 46512,
cidade: "São Joaquim da Barra"
},
{
uf: "MS",
value: 46424,
cidade: "Naviraí"
},
{
uf: "SP",
value: 46293,
cidade: "Mongaguá"
},
{
uf: "MG",
value: 46284,
cidade: "Santos Dumont"
},
{
uf: "SP",
value: 46178,
cidade: "Capão Bonito"
},
{
uf: "MA",
value: 46083,
cidade: "Lago da Pedra"
},
{
uf: "CE",
value: 46033,
cidade: "Eusébio"
},
{
uf: "ES",
value: 46031,
cidade: "Nova Venécia"
},
{
uf: "MG",
value: 45984,
cidade: "Lagoa da Prata"
},
{
uf: "AL",
value: 45977,
cidade: "Marechal Deodoro"
},
{
uf: "MG",
value: 45880,
cidade: "Diamantina"
},
{
uf: "SC",
value: 45797,
cidade: "Itapema"
},
{
uf: "MG",
value: 45772,
cidade: "Monte Carmelo"
},
{
uf: "MG",
value: 45624,
cidade: "Bom Despacho"
},
{
uf: "MS",
value: 45614,
cidade: "Aquidauana"
},
{
uf: "MS",
value: 45585,
cidade: "Nova Andradina"
},
{
uf: "PA",
value: 45557,
cidade: "Conceição do Araguaia"
},
{
uf: "MT",
value: 45556,
cidade: "Lucas do Rio Verde"
},
{
uf: "BA",
value: 45536,
cidade: "Xique-Xique"
},
{
uf: "PE",
value: 45503,
cidade: "Bom Conselho"
},
{
uf: "MG",
value: 45449,
cidade: "Itabirito"
},
{
uf: "MG",
value: 45260,
cidade: "João Pinheiro"
},
{
uf: "CE",
value: 45193,
cidade: "Brejo Santo"
},
{
uf: "PE",
value: 45180,
cidade: "Brejo da Madre de Deus"
},
{
uf: "PI",
value: 45177,
cidade: "Campo Maior"
},
{
uf: "AL",
value: 44932,
cidade: "Santana do Ipanema"
},
{
uf: "PR",
value: 44932,
cidade: "Lapa"
},
{
uf: "SP",
value: 44859,
cidade: "Itupeva"
},
{
uf: "PI",
value: 44850,
cidade: "Barras"
},
{
uf: "PA",
value: 44789,
cidade: "Uruará"
},
{
uf: "MA",
value: 44731,
cidade: "Presidente Dutra"
},
{
uf: "BA",
value: 44701,
cidade: "Poções"
},
{
uf: "PE",
value: 44439,
cidade: "Ribeirão"
},
{
uf: "TO",
value: 44417,
cidade: "Paraíso do Tocantins"
},
{
uf: "BA",
value: 44390,
cidade: "Ipiaú"
},
{
uf: "AL",
value: 44322,
cidade: "Atalaia"
},
{
uf: "SP",
value: 44311,
cidade: "Jaguariúna"
},
{
uf: "CE",
value: 44240,
cidade: "Mauriti"
},
{
uf: "AM",
value: 44227,
cidade: "Humaitá"
},
{
uf: "CE",
value: 44178,
cidade: "São Benedito"
},
{
uf: "SP",
value: 44177,
cidade: "Artur Nogueira"
},
{
uf: "SC",
value: 44128,
cidade: "Xanxerê"
},
{
uf: "SP",
value: 43974,
cidade: "Rio Grande da Serra"
},
{
uf: "SP",
value: 43921,
cidade: "Santa Cruz do Rio Pardo"
},
{
uf: "CE",
value: 43890,
cidade: "São Gonçalo do Amarante"
},
{
uf: "PA",
value: 43341,
cidade: "Ulianópolis"
},
{
uf: "SP",
value: 43258,
cidade: "Dracena"
},
{
uf: "SP",
value: 43223,
cidade: "Mairinque"
},
{
uf: "GO",
value: 43220,
cidade: "Quirinópolis"
},
{
uf: "SP",
value: 43115,
cidade: "Garça"
},
{
uf: "RS",
value: 43111,
cidade: "São Lourenço do Sul"
},
{
uf: "SP",
value: 42997,
cidade: "Vargem Grande Paulista"
},
{
uf: "PR",
value: 42888,
cidade: "Palmas"
},
{
uf: "BA",
value: 42815,
cidade: "Maragogipe"
},
{
uf: "CE",
value: 42763,
cidade: "Santa Quitéria"
},
{
uf: "PR",
value: 42707,
cidade: "Santo Antônio da Platina"
},
{
uf: "BA",
value: 42693,
cidade: "Livramento de Nossa Senhora"
},
{
uf: "CE",
value: 42690,
cidade: "Mombaça"
},
{
uf: "PI",
value: 42654,
cidade: "União"
},
{
uf: "RN",
value: 42652,
cidade: "Currais Novos"
},
{
uf: "RS",
value: 42574,
cidade: "Estância Velha"
},
{
uf: "SC",
value: 42520,
cidade: "São Francisco do Sul"
},
{
uf: "MA",
value: 42505,
cidade: "Araioses"
},
{
uf: "GO",
value: 42361,
cidade: "Niquelândia"
},
{
uf: "GO",
value: 42355,
cidade: "Porangatu"
},
{
uf: "PB",
value: 42303,
cidade: "Mamanguape"
},
{
uf: "SP",
value: 42278,
cidade: "Paraguaçu Paulista"
},
{
uf: "BA",
value: 42153,
cidade: "São Sebastião do Passé"
},
{
uf: "MS",
value: 42132,
cidade: "Sidrolândia"
},
{
uf: "RS",
value: 42040,
cidade: "Capão da Canoa"
},
{
uf: "SP",
value: 41907,
cidade: "Espírito Santo do Pinhal"
},
{
uf: "CE",
value: 41890,
cidade: "Pedra Branca"
},
{
uf: "GO",
value: 41870,
cidade: "Jaraguá"
},
{
uf: "PR",
value: 41817,
cidade: "Medianeira"
},
{
uf: "BA",
value: 41798,
cidade: "Seabra"
},
{
uf: "MG",
value: 41657,
cidade: "São Lourenço"
},
{
uf: "RO",
value: 41656,
cidade: "Guajará-Mirim"
},
{
uf: "SP",
value: 41604,
cidade: "Cabreúva"
},
{
uf: "RS",
value: 41585,
cidade: "Tramandaí"
},
{
uf: "SP",
value: 41558,
cidade: "Pedreira"
},
{
uf: "SP",
value: 41497,
cidade: "Pederneiras"
},
{
uf: "GO",
value: 41460,
cidade: "Morrinhos"
},
{
uf: "MT",
value: 41408,
cidade: "Pontes e Lacerda"
},
{
uf: "RJ",
value: 41354,
cidade: "São Francisco de Itabapoana"
},
{
uf: "SP",
value: 41318,
cidade: "Presidente Epitácio"
},
{
uf: "PR",
value: 41257,
cidade: "São Mateus do Sul"
},
{
uf: "AL",
value: 41152,
cidade: "Teotônio Vilela"
},
{
uf: "RJ",
value: 41084,
cidade: "Paraíba do Sul"
},
{
uf: "PB",
value: 41049,
cidade: "Queimadas"
},
{
uf: "SP",
value: 40984,
cidade: "Tremembé"
},
{
uf: "RS",
value: 40906,
cidade: "Osório"
},
{
uf: "MG",
value: 40834,
cidade: "Nanuque"
},
{
uf: "AM",
value: 40781,
cidade: "Iranduba"
},
{
uf: "MG",
value: 40750,
cidade: "Caeté"
},
{
uf: "MA",
value: 40736,
cidade: "São Bento"
},
{
uf: "PE",
value: 40732,
cidade: "Barreiros"
},
{
uf: "ES",
value: 40649,
cidade: "Barra de São Francisco"
},
{
uf: "RJ",
value: 40589,
cidade: "Santo Antônio de Pádua"
},
{
uf: "PA",
value: 40573,
cidade: "Xinguara"
},
{
uf: "PA",
value: 40497,
cidade: "Augusto Corrêa"
},
{
uf: "BA",
value: 40309,
cidade: "Santa Maria da Vitória"
},
{
uf: "PE",
value: 40296,
cidade: "Sirinhaém"
},
{
uf: "CE",
value: 40296,
cidade: "Ipu"
},
{
uf: "SP",
value: 40244,
cidade: "Pontal"
},
{
uf: "PE",
value: 40235,
cidade: "Águas Belas"
},
{
uf: "MS",
value: 40192,
cidade: "Paranaíba"
},
{
uf: "BA",
value: 40183,
cidade: "Mata de São João"
},
{
uf: "SC",
value: 40170,
cidade: "Imbituba"
},
{
uf: "SP",
value: 40132,
cidade: "Salto de Pirapora"
},
{
uf: "PA",
value: 40087,
cidade: "Rurópolis"
},
{
uf: "SP",
value: 40051,
cidade: "Itápolis"
},
{
uf: "PA",
value: 39979,
cidade: "Pacajá"
},
{
uf: "AP",
value: 39942,
cidade: "Laranjal do Jari"
},
{
uf: "BA",
value: 39872,
cidade: "Entre Rios"
},
{
uf: "SC",
value: 39846,
cidade: "Rio Negrinho"
},
{
uf: "SP",
value: 39781,
cidade: "Orlândia"
},
{
uf: "RN",
value: 39776,
cidade: "São José de Mipibu"
},
{
uf: "RS",
value: 39707,
cidade: "Rosário do Sul"
},
{
uf: "RS",
value: 39685,
cidade: "Santo Antônio da Patrulha"
},
{
uf: "SP",
value: 39617,
cidade: "Cerquilho"
},
{
uf: "MA",
value: 39576,
cidade: "Rosário"
},
{
uf: "MG",
value: 39466,
cidade: "Oliveira"
},
{
uf: "MA",
value: 39448,
cidade: "Pedreiras"
},
{
uf: "PE",
value: 39435,
cidade: "Santa Maria da Boa Vista"
},
{
uf: "SP",
value: 39266,
cidade: "Vargem Grande do Sul"
},
{
uf: "MT",
value: 39255,
cidade: "Juína"
},
{
uf: "CE",
value: 39232,
cidade: "Amontada"
},
{
uf: "RS",
value: 39229,
cidade: "Canela"
},
{
uf: "MA",
value: 39183,
cidade: "Tuntum"
},
{
uf: "MG",
value: 39178,
cidade: "Salinas"
},
{
uf: "MA",
value: 39132,
cidade: "Colinas"
},
{
uf: "PR",
value: 39121,
cidade: "Jacarezinho"
},
{
uf: "MA",
value: 39110,
cidade: "Santa Helena"
},
{
uf: "MA",
value: 39093,
cidade: "São Mateus do Maranhão"
},
{
uf: "MA",
value: 39049,
cidade: "Bom Jardim"
},
{
uf: "BA",
value: 38957,
cidade: "Remanso"
},
{
uf: "SE",
value: 38910,
cidade: "Itabaianinha"
},
{
uf: "RS",
value: 38898,
cidade: "Dom Pedrito"
},
{
uf: "SP",
value: 38878,
cidade: "Serrana"
},
{
uf: "PI",
value: 38822,
cidade: "Altos"
},
{
uf: "MG",
value: 38775,
cidade: "Almenara"
},
{
uf: "PR",
value: 38769,
cidade: "Campina Grande do Sul"
},
{
uf: "SE",
value: 38702,
cidade: "Simão Dias"
},
{
uf: "SP",
value: 38695,
cidade: "Ituverava"
},
{
uf: "MG",
value: 38688,
cidade: "Machado"
},
{
uf: "BA",
value: 38556,
cidade: "Nova Viçosa"
},
{
uf: "MG",
value: 38516,
cidade: "Boa Esperança"
},
{
uf: "CE",
value: 38434,
cidade: "Várzea Alegre"
},
{
uf: "SP",
value: 38342,
cidade: "São Manuel"
},
{
uf: "RS",
value: 38159,
cidade: "Itaqui"
},
{
uf: "RS",
value: 38058,
cidade: "Panambi"
},
{
uf: "AC",
value: 38029,
cidade: "Sena Madureira"
},
{
uf: "MG",
value: 37942,
cidade: "Visconde do Rio Branco"
},
{
uf: "MA",
value: 37932,
cidade: "Amarante do Maranhão"
},
{
uf: "RO",
value: 37928,
cidade: "Ouro Preto do Oeste"
},
{
uf: "SP",
value: 37910,
cidade: "Presidente Venceslau"
},
{
uf: "AM",
value: 37896,
cidade: "São Gabriel da Cachoeira"
},
{
uf: "CE",
value: 37862,
cidade: "Ipueiras"
},
{
uf: "PE",
value: 37826,
cidade: "Bom Jardim"
},
{
uf: "PE",
value: 37820,
cidade: "Catende"
},
{
uf: "CE",
value: 37775,
cidade: "Guaraciaba do Norte"
},
{
uf: "PI",
value: 37767,
cidade: "Esperantina"
},
{
uf: "MG",
value: 37754,
cidade: "Santa Rita do Sapucaí"
},
{
uf: "SC",
value: 37748,
cidade: "Curitibanos"
},
{
uf: "AM",
value: 37701,
cidade: "Lábrea"
},
{
uf: "BA",
value: 37680,
cidade: "Jeremoabo"
},
{
uf: "SP",
value: 37661,
cidade: "Jardinópolis"
},
{
uf: "MG",
value: 37627,
cidade: "Porteirinha"
},
{
uf: "RS",
value: 37591,
cidade: "Rio Pardo"
},
{
uf: "BA",
value: 37567,
cidade: "Vera Cruz"
},
{
uf: "PE",
value: 37566,
cidade: "Bonito"
},
{
uf: "RJ",
value: 37543,
cidade: "São Fidélis"
},
{
uf: "RJ",
value: 37533,
cidade: "Paraty"
},
{
uf: "PI",
value: 37496,
cidade: "Pedro II"
},
{
uf: "CE",
value: 37471,
cidade: "Itarema"
},
{
uf: "BA",
value: 37425,
cidade: "Sento Sé"
},
{
uf: "PA",
value: 37421,
cidade: "Salinópolis"
},
{
uf: "PE",
value: 37415,
cidade: "Aliança"
},
{
uf: "MS",
value: 37405,
cidade: "Maracaju"
},
{
uf: "SP",
value: 37404,
cidade: "Guaíra"
},
{
uf: "MG",
value: 37270,
cidade: "Andradas"
},
{
uf: "BA",
value: 37164,
cidade: "Rio Real"
},
{
uf: "SP",
value: 37125,
cidade: "Louveira"
},
{
uf: "PI",
value: 37085,
cidade: "José de Freitas"
},
{
uf: "GO",
value: 36929,
cidade: "Uruaçu"
},
{
uf: "PA",
value: 36882,
cidade: "Baião"
},
{
uf: "SP",
value: 36835,
cidade: "Tietê"
},
{
uf: "SC",
value: 36774,
cidade: "Timbó"
},
{
uf: "SP",
value: 36686,
cidade: "Socorro"
},
{
uf: "PE",
value: 36628,
cidade: "Lajedo"
},
{
uf: "AL",
value: 36600,
cidade: "Girau do Ponciano"
},
{
uf: "MG",
value: 36597,
cidade: "Arcos"
},
{
uf: "SP",
value: 36593,
cidade: "Novo Horizonte"
},
{
uf: "GO",
value: 36469,
cidade: "Santa Helena de Goiás"
},
{
uf: "RJ",
value: 36456,
cidade: "Mangaratiba"
},
{
uf: "RS",
value: 36364,
cidade: "Marau"
},
{
uf: "SC",
value: 36306,
cidade: "São Miguel do Oeste"
},
{
uf: "BA",
value: 36306,
cidade: "Inhambupe"
},
{
uf: "PR",
value: 36179,
cidade: "Dois Vizinhos"
},
{
uf: "BA",
value: 36113,
cidade: "Itiúba"
},
{
uf: "BA",
value: 36026,
cidade: "Mucuri"
},
{
uf: "MG",
value: 36013,
cidade: "Araçuaí"
},
{
uf: "PR",
value: 35936,
cidade: "Paiçandu"
},
{
uf: "PA",
value: 35887,
cidade: "Igarapé-Açu"
},
{
uf: "MA",
value: 35835,
cidade: "Estreito"
},
{
uf: "CE",
value: 35817,
cidade: "Itaitinga"
},
{
uf: "MG",
value: 35809,
cidade: "Várzea da Palma"
},
{
uf: "RN",
value: 35797,
cidade: "Santa Cruz"
},
{
uf: "SP",
value: 35674,
cidade: "Promissão"
},
{
uf: "PI",
value: 35640,
cidade: "Oeiras"
},
{
uf: "AC",
value: 35590,
cidade: "Tarauacá"
},
{
uf: "PE",
value: 35554,
cidade: "Toritama"
},
{
uf: "RN",
value: 35490,
cidade: "Nova Cruz"
},
{
uf: "SP",
value: 35486,
cidade: "Guariba"
},
{
uf: "RJ",
value: 35411,
cidade: "Bom Jesus do Itabapoana"
},
{
uf: "CE",
value: 35400,
cidade: "Pentecoste"
},
{
uf: "PE",
value: 35398,
cidade: "Itambé"
},
{
uf: "GO",
value: 35371,
cidade: "Itaberaí"
},
{
uf: "RJ",
value: 35347,
cidade: "Casimiro de Abreu"
},
{
uf: "RS",
value: 35320,
cidade: "Charqueadas"
},
{
uf: "SP",
value: 35307,
cidade: "Pitangueiras"
},
{
uf: "PE",
value: 35274,
cidade: "São Caitano"
},
{
uf: "MG",
value: 35268,
cidade: "Ouro Branco"
},
{
uf: "SP",
value: 35246,
cidade: "Barra Bonita"
},
{
uf: "CE",
value: 35191,
cidade: "Massapê"
},
{
uf: "BA",
value: 35180,
cidade: "Camamu"
},
{
uf: "SC",
value: 35172,
cidade: "Guaramirim"
},
{
uf: "BA",
value: 35164,
cidade: "Morro do Chapéu"
},
{
uf: "PE",
value: 35158,
cidade: "Bodocó"
},
{
uf: "PE",
value: 35088,
cidade: "Afogados da Ingazeira"
},
{
uf: "PA",
value: 35042,
cidade: "Afuá"
},
{
uf: "SP",
value: 35007,
cidade: "Aparecida"
},
{
uf: "AM",
value: 34961,
cidade: "Borba"
},
{
uf: "MG",
value: 34851,
cidade: "Igarapé"
},
{
uf: "MG",
value: 34803,
cidade: "Capelinha"
},
{
uf: "BA",
value: 34788,
cidade: "Barra do Choça"
},
{
uf: "RN",
value: 34763,
cidade: "Apodi"
},
{
uf: "ES",
value: 34747,
cidade: "Castelo"
},
{
uf: "MS",
value: 34730,
cidade: "Amambai"
},
{
uf: "RS",
value: 34656,
cidade: "Torres"
},
{
uf: "MA",
value: 34586,
cidade: "Parnarama"
},
{
uf: "RS",
value: 34556,
cidade: "São Luiz Gonzaga"
},
{
uf: "SC",
value: 34553,
cidade: "Fraiburgo"
},
{
uf: "SP",
value: 34524,
cidade: "Agudos"
},
{
uf: "SP",
value: 34478,
cidade: "Américo Brasiliense"
},
{
uf: "MG",
value: 34456,
cidade: "Iturama"
},
{
uf: "RJ",
value: 34410,
cidade: "Vassouras"
},
{
uf: "CE",
value: 34409,
cidade: "Jaguaribe"
},
{
uf: "BA",
value: 34351,
cidade: "Amargosa"
},
{
uf: "MG",
value: 34349,
cidade: "Além Paraíba"
},
{
uf: "RS",
value: 34343,
cidade: "Eldorado do Sul"
},
{
uf: "RS",
value: 34328,
cidade: "Palmeira das Missões"
},
{
uf: "PA",
value: 34294,
cidade: "Curuçá"
},
{
uf: "CE",
value: 34274,
cidade: "Missão Velha"
},
{
uf: "MA",
value: 34267,
cidade: "Penalva"
},
{
uf: "PA",
value: 34204,
cidade: "Muaná"
},
{
uf: "ES",
value: 34176,
cidade: "Santa Maria de Jetibá"
},
{
uf: "ES",
value: 34140,
cidade: "Marataízes"
},
{
uf: "GO",
value: 34060,
cidade: "Goianira"
},
{
uf: "MG",
value: 33973,
cidade: "Brumadinho"
},
{
uf: "PA",
value: 33956,
cidade: "Porto de Moz"
},
{
uf: "MG",
value: 33955,
cidade: "Matozinhos"
},
{
uf: "MA",
value: 33933,
cidade: "Turiaçu"
},
{
uf: "PE",
value: 33855,
cidade: "Custódia"
},
{
uf: "BA",
value: 33838,
cidade: "Santaluz"
},
{
uf: "RO",
value: 33822,
cidade: "Pimenta Bueno"
},
{
uf: "SP",
value: 33797,
cidade: "Adamantina"
},
{
uf: "PE",
value: 33787,
cidade: "Sertânia"
},
{
uf: "PA",
value: 33690,
cidade: "Tucumã"
},
{
uf: "RS",
value: 33690,
cidade: "Caçapava do Sul"
},
{
uf: "PA",
value: 33614,
cidade: "Almeirim"
},
{
uf: "MA",
value: 33607,
cidade: "São Domingos do Maranhão"
},
{
uf: "MG",
value: 33587,
cidade: "Jaíba"
},
{
uf: "SC",
value: 33493,
cidade: "Porto União"
},
{
uf: "AM",
value: 33411,
cidade: "Benjamin Constant"
},
{
uf: "MA",
value: 33359,
cidade: "Brejo"
},
{
uf: "CE",
value: 33321,
cidade: "Baturité"
},
{
uf: "AL",
value: 33305,
cidade: "Pilar"
},
{
uf: "BA",
value: 33283,
cidade: "São Gonçalo dos Campos"
},
{
uf: "BA",
value: 33183,
cidade: "São Francisco do Conde"
},
{
uf: "BA",
value: 33172,
cidade: "Riachão do Jacuípe"
},
{
uf: "PE",
value: 33095,
cidade: "Água Preta"
},
{
uf: "BA",
value: 33066,
cidade: "Pojuca"
},
{
uf: "PR",
value: 33025,
cidade: "Assis Chateaubriand"
},
{
uf: "BA",
value: 32908,
cidade: "Cansanção"
},
{
uf: "BA",
value: 32860,
cidade: "Pilão Arcado"
},
{
uf: "SC",
value: 32824,
cidade: "Campos Novos"
},
{
uf: "BA",
value: 32802,
cidade: "Esplanada"
},
{
uf: "MT",
value: 32791,
cidade: "Juara"
},
{
uf: "SP",
value: 32763,
cidade: "José Bonifácio"
},
{
uf: "RJ",
value: 32747,
cidade: "São João da Barra"
},
{
uf: "AM",
value: 32734,
cidade: "Careiro"
},
{
uf: "PR",
value: 32658,
cidade: "Mandaguari"
},
{
uf: "MA",
value: 32652,
cidade: "Cururupu"
},
{
uf: "PR",
value: 32638,
cidade: "Pitanga"
},
{
uf: "PE",
value: 32617,
cidade: "São José do Belmonte"
},
{
uf: "PR",
value: 32606,
cidade: "Jaguariaíva"
},
{
uf: "SE",
value: 32497,
cidade: "Nossa Senhora da Glória"
},
{
uf: "GO",
value: 32492,
cidade: "Goiatuba"
},
{
uf: "PE",
value: 32492,
cidade: "Petrolândia"
},
{
uf: "AL",
value: 32412,
cidade: "São Luís do Quitunde"
},
{
uf: "AC",
value: 32412,
cidade: "Feijó"
},
{
uf: "RO",
value: 32383,
cidade: "Buritis"
},
{
uf: "MA",
value: 32366,
cidade: "Santa Rita"
},
{
uf: "BA",
value: 32336,
cidade: "Canavieiras"
},
{
uf: "PI",
value: 32327,
cidade: "São Raimundo Nonato"
},
{
uf: "BA",
value: 32300,
cidade: "Cícero Dantas"
},
{
uf: "MG",
value: 32296,
cidade: "Carangola"
},
{
uf: "PI",
value: 32289,
cidade: "Miguel Alves"
},
{
uf: "RS",
value: 32273,
cidade: "Gramado"
},
{
uf: "BA",
value: 32261,
cidade: "Itapicuru"
},
{
uf: "CE",
value: 32236,
cidade: "Jaguaruana"
},
{
uf: "RN",
value: 32227,
cidade: "João Câmara"
},
{
uf: "MT",
value: 32216,
cidade: "Guarantã do Norte"
},
{
uf: "PR",
value: 32184,
cidade: "Bandeirantes"
},
{
uf: "MG",
value: 32175,
cidade: "Itamarandiba"
},
{
uf: "BA",
value: 32168,
cidade: "Curaçá"
},
{
uf: "MS",
value: 32159,
cidade: "Coxim"
},
{
uf: "SP",
value: 32148,
cidade: "Aguaí"
},
{
uf: "AM",
value: 32135,
cidade: "Autazes"
},
{
uf: "PR",
value: 32123,
cidade: "Palmeira"
},
{
uf: "PB",
value: 32110,
cidade: "Pombal"
},
{
uf: "PR",
value: 32095,
cidade: "Guaratuba"
},
{
uf: "BA",
value: 32026,
cidade: "Cachoeira"
},
{
uf: "AL",
value: 32010,
cidade: "São Sebastião"
},
{
uf: "PR",
value: 31959,
cidade: "Marialva"
},
{
uf: "MG",
value: 31883,
cidade: "Piumhi"
},
{
uf: "ES",
value: 31859,
cidade: "São Gabriel da Palha"
},
{
uf: "ES",
value: 31847,
cidade: "Domingos Martins"
},
{
uf: "PE",
value: 31829,
cidade: "São José do Egito"
},
{
uf: "MG",
value: 31819,
cidade: "São Gotardo"
},
{
uf: "PR",
value: 31816,
cidade: "Ivaiporã"
},
{
uf: "MT",
value: 31793,
cidade: "Barra do Bugres"
},
{
uf: "CE",
value: 31787,
cidade: "Ubajara"
},
{
uf: "PA",
value: 31786,
cidade: "Eldorado do Carajás"
},
{
uf: "MT",
value: 31779,
cidade: "Poconé"
},
{
uf: "MA",
value: 31738,
cidade: "Monção"
},
{
uf: "MA",
value: 31702,
cidade: "Arame"
},
{
uf: "SP",
value: 31691,
cidade: "Cravinhos"
},
{
uf: "SP",
value: 31662,
cidade: "São Pedro"
},
{
uf: "RS",
value: 31660,
cidade: "Igrejinha"
},
{
uf: "MA",
value: 31658,
cidade: "Vitorino Freire"
},
{
uf: "MT",
value: 31649,
cidade: "Nova Mutum"
},
{
uf: "BA",
value: 31638,
cidade: "Serra do Ramalho"
},
{
uf: "PE",
value: 31636,
cidade: "Exu"
},
{
uf: "CE",
value: 31636,
cidade: "Paracuru"
},
{
uf: "SP",
value: 31593,
cidade: "Bariri"
},
{
uf: "MT",
value: 31589,
cidade: "Campo Verde"
},
{
uf: "MG",
value: 31568,
cidade: "Ouro Fino"
},
{
uf: "BA",
value: 31472,
cidade: "Camacan"
},
{
uf: "SP",
value: 31450,
cidade: "São Miguel Arcanjo"
},
{
uf: "AM",
value: 31422,
cidade: "São Paulo de Olivença"
},
{
uf: "GO",
value: 31419,
cidade: "Posse"
},
{
uf: "PA",
value: 31364,
cidade: "Irituia"
},
{
uf: "TO",
value: 31329,
cidade: "Araguatins"
},
{
uf: "CE",
value: 31309,
cidade: "Parambu"
},
{
uf: "GO",
value: 31274,
cidade: "Iporá"
},
{
uf: "PR",
value: 31274,
cidade: "Rio Negro"
},
{
uf: "MG",
value: 31262,
cidade: "Guanhães"
},
{
uf: "BA",
value: 31249,
cidade: "Correntina"
},
{
uf: "MA",
value: 31217,
cidade: "Vitória do Mearim"
},
{
uf: "MG",
value: 31213,
cidade: "Brasília de Minas"
},
{
uf: "GO",
value: 31154,
cidade: "Minaçu"
},
{
uf: "MA",
value: 31152,
cidade: "Pindaré-Mirim"
},
{
uf: "RO",
value: 31135,
cidade: "Machadinho D'Oeste"
},
{
uf: "MG",
value: 31113,
cidade: "Espinosa"
},
{
uf: "PB",
value: 31095,
cidade: "Esperança"
},
{
uf: "ES",
value: 31091,
cidade: "Afonso Cláudio"
},
{
uf: "CE",
value: 31090,
cidade: "Lavras da Mangabeira"
},
{
uf: "RN",
value: 31089,
cidade: "Touros"
},
{
uf: "MA",
value: 31057,
cidade: "Alto Alegre do Pindaré"
},
{
uf: "SP",
value: 31056,
cidade: "Descalvado"
},
{
uf: "MA",
value: 31015,
cidade: "Matões"
},
{
uf: "RS",
value: 30990,
cidade: "Santa Vitória do Palmar"
},
{
uf: "ES",
value: 30988,
cidade: "Itapemirim"
},
{
uf: "CE",
value: 30965,
cidade: "Nova Russas"
},
{
uf: "SC",
value: 30960,
cidade: "Tijucas"
},
{
uf: "RS",
value: 30920,
cidade: "Portão"
},
{
uf: "MG",
value: 30917,
cidade: "Taiobeiras"
},
{
uf: "SP",
value: 30917,
cidade: "Osvaldo Cruz"
},
{
uf: "RN",
value: 30916,
cidade: "Canguaretama"
},
{
uf: "SE",
value: 30880,
cidade: "Poço Redondo"
},
{
uf: "PB",
value: 30879,
cidade: "São Bento"
},
{
uf: "CE",
value: 30878,
cidade: "Bela Cruz"
},
{
uf: "PE",
value: 30873,
cidade: "Cabrobó"
},
{
uf: "PB",
value: 30852,
cidade: "Monteiro"
},
{
uf: "TO",
value: 30838,
cidade: "Colinas do Tocantins"
},
{
uf: "MT",
value: 30812,
cidade: "Peixoto de Azevedo"
},
{
uf: "PE",
value: 30796,
cidade: "Nazaré da Mata"
},
{
uf: "MG",
value: 30794,
cidade: "Minas Novas"
},
{
uf: "PR",
value: 30777,
cidade: "Laranjeiras do Sul"
},
{
uf: "ES",
value: 30768,
cidade: "Alegre"
},
{
uf: "MT",
value: 30766,
cidade: "Colíder"
},
{
uf: "SE",
value: 30761,
cidade: "Capela"
},
{
uf: "PE",
value: 30743,
cidade: "João Alfredo"
},
{
uf: "SP",
value: 30734,
cidade: "Ibaté"
},
{
uf: "RJ",
value: 30732,
cidade: "Tanguá"
},
{
uf: "PE",
value: 30732,
cidade: "Vicência"
},
{
uf: "MG",
value: 30725,
cidade: "Novo Cruzeiro"
},
{
uf: "PR",
value: 30704,
cidade: "Guaíra"
},
{
uf: "AM",
value: 30696,
cidade: "Nova Olinda do Norte"
},
{
uf: "RS",
value: 30689,
cidade: "Garibaldi"
},
{
uf: "AM",
value: 30665,
cidade: "Eirunepé"
},
{
uf: "MS",
value: 30663,
cidade: "Rio Brilhante"
},
{
uf: "PR",
value: 30650,
cidade: "Rio Branco do Sul"
},
{
uf: "BA",
value: 30646,
cidade: "Riacho de Santana"
},
{
uf: "AM",
value: 30632,
cidade: "Boca do Acre"
},
{
uf: "RS",
value: 30619,
cidade: "Estrela"
},
{
uf: "PR",
value: 30605,
cidade: "Quedas do Iguaçu"
},
{
uf: "SP",
value: 30597,
cidade: "Guararapes"
},
{
uf: "PA",
value: 30436,
cidade: "Goianésia do Pará"
},
{
uf: "SE",
value: 30419,
cidade: "Itaporanga d'Ajuda"
},
{
uf: "BA",
value: 30343,
cidade: "Jaguarari"
},
{
uf: "BA",
value: 30336,
cidade: "Gandu"
},
{
uf: "PR",
value: 30208,
cidade: "Pinhão"
},
{
uf: "RS",
value: 30171,
cidade: "Candelária"
},
{
uf: "BA",
value: 30123,
cidade: "Conceição do Jacuípe"
},
{
uf: "SP",
value: 30091,
cidade: "Cachoeira Paulista"
},
{
uf: "AL",
value: 30088,
cidade: "São José da Tapera"
},
{
uf: "RS",
value: 30044,
cidade: "Soledade"
},
{
uf: "CE",
value: 30041,
cidade: "Paraipaba"
},
{
uf: "GO",
value: 30034,
cidade: "São Luís de Montes Belos"
},
{
uf: "CE",
value: 29946,
cidade: "Santana do Acaraú"
},
{
uf: "SP",
value: 29932,
cidade: "Santa Cruz das Palmeiras"
},
{
uf: "BA",
value: 29887,
cidade: "Ruy Barbosa"
},
{
uf: "SP",
value: 29884,
cidade: "Cândido Mota"
},
{
uf: "PA",
value: 29846,
cidade: "São Domingos do Capim"
},
{
uf: "MG",
value: 29735,
cidade: "Carmo do Paranaíba"
},
{
uf: "BA",
value: 29504,
cidade: "Paratinga"
},
{
uf: "SP",
value: 29501,
cidade: "Rio das Pedras"
},
{
uf: "PR",
value: 29428,
cidade: "Matinhos"
},
{
uf: "PA",
value: 29349,
cidade: "Prainha"
},
{
uf: "PE",
value: 29285,
cidade: "Floresta"
},
{
uf: "SP",
value: 29239,
cidade: "Santa Fé do Sul"
},
{
uf: "CE",
value: 29204,
cidade: "Tabuleiro do Norte"
},
{
uf: "MA",
value: 29191,
cidade: "Santa Quitéria do Maranhão"
},
{
uf: "SP",
value: 29116,
cidade: "Morro Agudo"
},
{
uf: "MG",
value: 29105,
cidade: "Pompéu"
},
{
uf: "MG",
value: 29099,
cidade: "Rio Pardo de Minas"
},
{
uf: "ES",
value: 29081,
cidade: "Baixo Guandu"
},
{
uf: "PA",
value: 29062,
cidade: "Gurupá"
},
{
uf: "PE",
value: 29019,
cidade: "Glória do Goitá"
},
{
uf: "PR",
value: 29018,
cidade: "Goioerê"
},
{
uf: "SC",
value: 29018,
cidade: "Braço do Norte"
},
{
uf: "RN",
value: 28954,
cidade: "Macau"
},
{
uf: "BA",
value: 28899,
cidade: "Muritiba"
},
{
uf: "RS",
value: 28843,
cidade: "Frederico Westphalen"
},
{
uf: "SP",
value: 28841,
cidade: "Iguape"
},
{
uf: "SP",
value: 28804,
cidade: "Rancharia"
},
{
uf: "RJ",
value: 28783,
cidade: "Itatiaia"
},
{
uf: "GO",
value: 28762,
cidade: "Pires do Rio"
},
{
uf: "PB",
value: 28759,
cidade: "Catolé do Rocha"
},
{
uf: "PR",
value: 28751,
cidade: "Ibaiti"
},
{
uf: "AL",
value: 28749,
cidade: "Maragogi"
},
{
uf: "SP",
value: 28737,
cidade: "Juquitiba"
},
{
uf: "RO",
value: 28729,
cidade: "Espigão D'Oeste"
},
{
uf: "PR",
value: 28683,
cidade: "Palotina"
},
{
uf: "PE",
value: 28628,
cidade: "Passira"
},
{
uf: "MG",
value: 28599,
cidade: "Extrema"
},
{
uf: "PA",
value: 28595,
cidade: "Oeiras do Pará"
},
{
uf: "SP",
value: 28575,
cidade: "Biritiba-Mirim"
},
{
uf: "PA",
value: 28549,
cidade: "Curralinho"
},
{
uf: "SP",
value: 28496,
cidade: "Barrinha"
},
{
uf: "MA",
value: 28488,
cidade: "Arari"
},
{
uf: "PB",
value: 28479,
cidade: "Alagoa Grande"
},
{
uf: "SP",
value: 28475,
cidade: "Piraju"
},
{
uf: "MA",
value: 28459,
cidade: "Bom Jesus das Selvas"
},
{
uf: "PR",
value: 28455,
cidade: "Imbituva"
},
{
uf: "SE",
value: 28451,
cidade: "Propriá"
},
{
uf: "ES",
value: 28449,
cidade: "Conceição da Barra"
},
{
uf: "MG",
value: 28442,
cidade: "Barão de Cocais"
},
{
uf: "PI",
value: 28406,
cidade: "Luís Correia"
},
{
uf: "BA",
value: 28390,
cidade: "Itabela"
},
{
uf: "BA",
value: 28380,
cidade: "Carinhanha"
},
{
uf: "PA",
value: 28376,
cidade: "Maracanã"
},
{
uf: "SP",
value: 28372,
cidade: "Cajati"
},
{
uf: "MG",
value: 28318,
cidade: "Três Marias"
},
{
uf: "CE",
value: 28316,
cidade: "Milagres"
},
{
uf: "SP",
value: 28307,
cidade: "Casa Branca"
},
{
uf: "SP",
value: 28300,
cidade: "Iperó"
},
{
uf: "PA",
value: 28216,
cidade: "Concórdia do Pará"
},
{
uf: "SP",
value: 28196,
cidade: "Ilhabela"
},
{
uf: "PE",
value: 28120,
cidade: "Ipubi"
},
{
uf: "BA",
value: 28090,
cidade: "Campo Alegre de Lourdes"
},
{
uf: "MA",
value: 27997,
cidade: "Timbiras"
},
{
uf: "SP",
value: 27952,
cidade: "Igarapava"
},
{
uf: "RS",
value: 27931,
cidade: "Jaguarão"
},
{
uf: "BA",
value: 27918,
cidade: "Cândido Sales"
},
{
uf: "PE",
value: 27912,
cidade: "Gameleira"
},
{
uf: "PA",
value: 27904,
cidade: "Mãe do Rio"
},
{
uf: "MG",
value: 27876,
cidade: "Santa Bárbara"
},
{
uf: "MG",
value: 27856,
cidade: "Mateus Leme"
},
{
uf: "ES",
value: 27851,
cidade: "Guaçuí"
},
{
uf: "BA",
value: 27778,
cidade: "Paripiranga"
},
{
uf: "SC",
value: 27759,
cidade: "Pomerode"
},
{
uf: "RN",
value: 27745,
cidade: "Pau dos Ferros"
},
{
uf: "RJ",
value: 27715,
cidade: "Arraial do Cabo"
},
{
uf: "GO",
value: 27671,
cidade: "Padre Bernardo"
},
{
uf: "BA",
value: 27659,
cidade: "São Desidério"
},
{
uf: "BA",
value: 27627,
cidade: "Prado"
},
{
uf: "MG",
value: 27600,
cidade: "Campos Gerais"
},
{
uf: "MT",
value: 27577,
cidade: "Campo Novo do Parecis"
},
{
uf: "RS",
value: 27572,
cidade: "Dois Irmãos"
},
{
uf: "RJ",
value: 27560,
cidade: "Armação dos Búzios"
},
{
uf: "PI",
value: 27553,
cidade: "Piracuruca"
},
{
uf: "MG",
value: 27547,
cidade: "Coromandel"
},
{
uf: "RS",
value: 27525,
cidade: "Lagoa Vermelha"
},
{
uf: "SP",
value: 27483,
cidade: "Mirandópolis"
},
{
uf: "BA",
value: 27466,
cidade: "Irará"
},
{
uf: "PA",
value: 27455,
cidade: "Tracuateua"
},
{
uf: "CE",
value: 27453,
cidade: "Novo Oriente"
},
{
uf: "PA",
value: 27359,
cidade: "Ourilândia do Norte"
},
{
uf: "AM",
value: 27355,
cidade: "Barreirinha"
},
{
uf: "ES",
value: 27328,
cidade: "Iúna"
},
{
uf: "PA",
value: 27328,
cidade: "Medicilândia"
},
{
uf: "SP",
value: 27299,
cidade: "Araçoiaba da Serra"
},
{
uf: "BA",
value: 27274,
cidade: "Nazaré"
},
{
uf: "RS",
value: 27272,
cidade: "Teutônia"
},
{
uf: "MG",
value: 27265,
cidade: "Santana do Paraíso"
},
{
uf: "BA",
value: 27228,
cidade: "Quijingue"
},
{
uf: "AM",
value: 27175,
cidade: "Presidente Figueiredo"
},
{
uf: "SE",
value: 27146,
cidade: "Porto da Folha"
},
{
uf: "RS",
value: 27126,
cidade: "Flores da Cunha"
},
{
uf: "MG",
value: 27111,
cidade: "Mantena"
},
{
uf: "PB",
value: 27032,
cidade: "Pedras de Fogo"
},
{
uf: "SC",
value: 27020,
cidade: "Joaçaba"
},
{
uf: "MA",
value: 27013,
cidade: "Buriti"
},
{
uf: "AL",
value: 26992,
cidade: "Limoeiro de Anadia"
},
{
uf: "PE",
value: 26954,
cidade: "Ibimirim"
},
{
uf: "MG",
value: 26922,
cidade: "Buritizeiro"
},
{
uf: "SE",
value: 26902,
cidade: "Laranjeiras"
},
{
uf: "RJ",
value: 26843,
cidade: "Miracema"
},
{
uf: "PA",
value: 26731,
cidade: "Mocajuba"
},
{
uf: "PA",
value: 26716,
cidade: "Canaã dos Carajás"
},
{
uf: "AL",
value: 26710,
cidade: "Murici"
},
{
uf: "PB",
value: 26693,
cidade: "Solânea"
},
{
uf: "CE",
value: 26688,
cidade: "Jardim"
},
{
uf: "PA",
value: 26674,
cidade: "Santo Antônio do Tauá"
},
{
uf: "MG",
value: 26661,
cidade: "Mutum"
},
{
uf: "PR",
value: 26615,
cidade: "Nova Esperança"
},
{
uf: "SC",
value: 26613,
cidade: "Sombrio"
},
{
uf: "PA",
value: 26605,
cidade: "Marapanim"
},
{
uf: "BA",
value: 26591,
cidade: "Ituberá"
},
{
uf: "BA",
value: 26577,
cidade: "Capim Grosso"
},
{
uf: "PE",
value: 26577,
cidade: "Caetés"
},
{
uf: "PA",
value: 26546,
cidade: "Aurora do Pará"
},
{
uf: "CE",
value: 26506,
cidade: "Campos Sales"
},
{
uf: "MG",
value: 26488,
cidade: "Cambuí"
},
{
uf: "PA",
value: 26484,
cidade: "Cachoeira do Piriá"
},
{
uf: "SP",
value: 26478,
cidade: "Santa Rita do Passa Quatro"
},
{
uf: "MA",
value: 26476,
cidade: "São Bernardo"
},
{
uf: "BA",
value: 26475,
cidade: "Miguel Calmon"
},
{
uf: "CE",
value: 26469,
cidade: "Senador Pompeu"
},
{
uf: "PE",
value: 26427,
cidade: "Tabira"
},
{
uf: "CE",
value: 26415,
cidade: "Redenção"
},
{
uf: "SP",
value: 26406,
cidade: "Pilar do Sul"
},
{
uf: "CE",
value: 26393,
cidade: "Caririaçu"
},
{
uf: "SP",
value: 26387,
cidade: "Serra Negra"
},
{
uf: "MT",
value: 26381,
cidade: "Colniza"
},
{
uf: "RJ",
value: 26359,
cidade: "Paty do Alferes"
},
{
uf: "MA",
value: 26327,
cidade: "Raposa"
},
{
uf: "RJ",
value: 26314,
cidade: "Piraí"
},
{
uf: "BA",
value: 26264,
cidade: "Santa Cruz Cabrália"
},
{
uf: "SC",
value: 26260,
cidade: "São João Batista"
},
{
uf: "PE",
value: 26256,
cidade: "Itaíba"
},
{
uf: "BA",
value: 26250,
cidade: "Santa Rita de Cássia"
},
{
uf: "MA",
value: 26189,
cidade: "Humberto de Campos"
},
{
uf: "GO",
value: 26125,
cidade: "Itapuranga"
},
{
uf: "PE",
value: 26116,
cidade: "Trindade"
},
{
uf: "RS",
value: 26092,
cidade: "Taquari"
},
{
uf: "PI",
value: 26036,
cidade: "Cocal"
},
{
uf: "MG",
value: 26033,
cidade: "Coração de Jesus"
},
{
uf: "PA",
value: 25999,
cidade: "Ponta de Pedras"
},
{
uf: "MG",
value: 25975,
cidade: "Santo Antônio do Monte"
},
{
uf: "ES",
value: 25902,
cidade: "Mimoso do Sul"
},
{
uf: "PB",
value: 25900,
cidade: "Lagoa Seca"
},
{
uf: "PR",
value: 25855,
cidade: "Arapoti"
},
{
uf: "SP",
value: 25844,
cidade: "Guararema"
},
{
uf: "MG",
value: 25814,
cidade: "Sarzedo"
},
{
uf: "MG",
value: 25802,
cidade: "Prata"
},
{
uf: "RS",
value: 25793,
cidade: "Triunfo"
},
{
uf: "AL",
value: 25776,
cidade: "Boca da Mata"
},
{
uf: "AM",
value: 25774,
cidade: "Carauari"
},
{
uf: "PI",
value: 25774,
cidade: "Batalha"
},
{
uf: "MG",
value: 25771,
cidade: "Cláudio"
},
{
uf: "PR",
value: 25769,
cidade: "São Miguel do Iguaçu"
},
{
uf: "MS",
value: 25767,
cidade: "Caarapó"
},
{
uf: "BA",
value: 25736,
cidade: "Iaçu"
},
{
uf: "MG",
value: 25733,
cidade: "Nepomuceno"
},
{
uf: "AM",
value: 25719,
cidade: "Rio Preto da Eva"
},
{
uf: "AM",
value: 25718,
cidade: "Barcelos"
},
{
uf: "SC",
value: 25713,
cidade: "Xaxim"
},
{
uf: "AL",
value: 25708,
cidade: "Porto Calvo"
},
{
uf: "BA",
value: 25705,
cidade: "Iguaí"
},
{
uf: "AL",
value: 25702,
cidade: "Traipu"
},
{
uf: "PA",
value: 25695,
cidade: "Bujaru"
},
{
uf: "MT",
value: 25647,
cidade: "Jaciara"
},
{
uf: "BA",
value: 25646,
cidade: "Lapão"
},
{
uf: "PE",
value: 25645,
cidade: "Panelas"
},
{
uf: "MS",
value: 25595,
cidade: "Miranda"
},
{
uf: "PA",
value: 25587,
cidade: "São Geraldo do Araguaia"
},
{
uf: "CE",
value: 25573,
cidade: "Independência"
},
{
uf: "MG",
value: 25537,
cidade: "São Joaquim de Bicas"
},
{
uf: "SE",
value: 25533,
cidade: "Boquim"
},
{
uf: "BA",
value: 25516,
cidade: "Anagé"
},
{
uf: "RS",
value: 25503,
cidade: "São José do Norte"
},
{
uf: "CE",
value: 25451,
cidade: "Tamboril"
},
{
uf: "BA",
value: 25424,
cidade: "Ibotirama"
},
{
uf: "BA",
value: 25408,
cidade: "Castro Alves"
},
{
uf: "PI",
value: 25407,
cidade: "Corrente"
},
{
uf: "AL",
value: 25407,
cidade: "Viçosa"
},
{
uf: "MA",
value: 25401,
cidade: "Governador Nunes Freire"
},
{
uf: "CE",
value: 25391,
cidade: "Aracoiaba"
},
{
uf: "MG",
value: 25358,
cidade: "São João da Ponte"
},
{
uf: "RJ",
value: 25333,
cidade: "Bom Jardim"
},
{
uf: "RN",
value: 25315,
cidade: "Areia Branca"
},
{
uf: "MG",
value: 25311,
cidade: "Pitangui"
},
{
uf: "MT",
value: 25299,
cidade: "Mirassol d'Oeste"
},
{
uf: "MA",
value: 25291,
cidade: "Anajatuba"
},
{
uf: "SP",
value: 25251,
cidade: "Laranjal Paulista"
},
{
uf: "SP",
value: 25229,
cidade: "Conchal"
},
{
uf: "MG",
value: 25220,
cidade: "Elói Mendes"
},
{
uf: "RS",
value: 25192,
cidade: "Carlos Barbosa"
},
{
uf: "SP",
value: 25191,
cidade: "Apiaí"
},
{
uf: "BA",
value: 25190,
cidade: "Amélia Rodrigues"
},
{
uf: "AL",
value: 25188,
cidade: "Igaci"
},
{
uf: "PR",
value: 25172,
cidade: "Reserva"
},
{
uf: "MA",
value: 25145,
cidade: "Icatu"
},
{
uf: "SC",
value: 25141,
cidade: "Penha"
},
{
uf: "PA",
value: 25124,
cidade: "Novo Progresso"
},
{
uf: "MT",
value: 25124,
cidade: "Confresa"
},
{
uf: "SP",
value: 25116,
cidade: "Piracaia"
},
{
uf: "SP",
value: 25064,
cidade: "Ilha Solteira"
},
{
uf: "PA",
value: 25057,
cidade: "Água Azul do Norte"
},
{
uf: "MG",
value: 25057,
cidade: "São João Nepomuceno"
},
{
uf: "PA",
value: 25034,
cidade: "Garrafão do Norte"
},
{
uf: "PA",
value: 25021,
cidade: "Limoeiro do Ajuru"
},
{
uf: "BA",
value: 25004,
cidade: "Ubatã"
},
{
uf: "SE",
value: 24976,
cidade: "Barra dos Coqueiros"
},
{
uf: "SP",
value: 24962,
cidade: "Pereira Barreto"
},
{
uf: "MG",
value: 24959,
cidade: "Aimorés"
},
{
uf: "BA",
value: 24943,
cidade: "Olindina"
},
{
uf: "MA",
value: 24928,
cidade: "São João dos Patos"
},
{
uf: "MG",
value: 24912,
cidade: "Francisco Sá"
},
{
uf: "PE",
value: 24903,
cidade: "Taquaritinga do Norte"
},
{
uf: "MA",
value: 24863,
cidade: "Itinga do Maranhão"
},
{
uf: "PR",
value: 24843,
cidade: "Campo Magro"
},
{
uf: "SC",
value: 24812,
cidade: "São Joaquim"
},
{
uf: "SC",
value: 24810,
cidade: "Araquari"
},
{
uf: "PA",
value: 24808,
cidade: "Melgaço"
},
{
uf: "SP",
value: 24761,
cidade: "Dois Córregos"
},
{
uf: "PA",
value: 24759,
cidade: "Anajás"
},
{
uf: "BA",
value: 24750,
cidade: "Santana"
},
{
uf: "GO",
value: 24735,
cidade: "Ipameri"
},
{
uf: "GO",
value: 24727,
cidade: "Goiás"
},
{
uf: "PI",
value: 24721,
cidade: "Luzilândia"
},
{
uf: "CE",
value: 24703,
cidade: "Marco"
},
{
uf: "PR",
value: 24698,
cidade: "Astorga"
},
{
uf: "AL",
value: 24698,
cidade: "Mata Grande"
},
{
uf: "SP",
value: 24694,
cidade: "Pirapozinho"
},
{
uf: "SE",
value: 24686,
cidade: "Canindé de São Francisco"
},
{
uf: "ES",
value: 24678,
cidade: "Jaguaré"
},
{
uf: "RJ",
value: 24642,
cidade: "Miguel Pereira"
},
{
uf: "BA",
value: 24613,
cidade: "Maracás"
},
{
uf: "BA",
value: 24602,
cidade: "Queimadas"
},
{
uf: "MA",
value: 24599,
cidade: "Alto Alegre do Maranhão"
},
{
uf: "SE",
value: 24580,
cidade: "Nossa Senhora das Dores"
},
{
uf: "MA",
value: 24573,
cidade: "Urbano Santos"
},
{
uf: "RN",
value: 24569,
cidade: "Extremoz"
},
{
uf: "CE",
value: 24566,
cidade: "Aurora"
},
{
uf: "BA",
value: 24560,
cidade: "Valente"
},
{
uf: "GO",
value: 24554,
cidade: "Bela Vista de Goiás"
},
{
uf: "RS",
value: 24534,
cidade: "Encruzilhada do Sul"
},
{
uf: "CE",
value: 24527,
cidade: "Cedro"
},
{
uf: "PE",
value: 24521,
cidade: "Canhotinho"
},
{
uf: "PB",
value: 24481,
cidade: "Itabaiana"
},
{
uf: "BA",
value: 24481,
cidade: "Planalto"
},
{
uf: "AM",
value: 24481,
cidade: "Santo Antônio do Içá"
},
{
uf: "MA",
value: 24427,
cidade: "Miranda do Norte"
},
{
uf: "PE",
value: 24425,
cidade: "Tupanatinga"
},
{
uf: "BA",
value: 24395,
cidade: "Mundo Novo"
},
{
uf: "RO",
value: 24392,
cidade: "Alta Floresta D'Oeste"
},
{
uf: "MS",
value: 24346,
cidade: "Jardim"
},
{
uf: "BA",
value: 24318,
cidade: "Itacaré"
},
{
uf: "RS",
value: 24298,
cidade: "Capão do Leão"
},
{
uf: "MG",
value: 24294,
cidade: "Inhapim"
},
{
uf: "BA",
value: 24294,
cidade: "Uauá"
},
{
uf: "PE",
value: 24282,
cidade: "Condado"
},
{
uf: "RR",
value: 24279,
cidade: "Rorainópolis"
},
{
uf: "BA",
value: 24272,
cidade: "Ibicaraí"
},
{
uf: "SP",
value: 24219,
cidade: "Martinópolis"
},
{
uf: "GO",
value: 24210,
cidade: "Nerópolis"
},
{
uf: "MG",
value: 24188,
cidade: "Tupaciguara"
},
{
uf: "PE",
value: 24186,
cidade: "Quipapá"
},
{
uf: "RN",
value: 24182,
cidade: "Baraúna"
},
{
uf: "BA",
value: 24136,
cidade: "Nova Soure"
},
{
uf: "MG",
value: 24131,
cidade: "Jequitinhonha"
},
{
uf: "BA",
value: 24110,
cidade: "Una"
},
{
uf: "CE",
value: 24091,
cidade: "Guaiúba"
},
{
uf: "BA",
value: 24067,
cidade: "Canarana"
},
{
uf: "SP",
value: 24055,
cidade: "Tanabi"
},
{
uf: "PE",
value: 24046,
cidade: "Pombos"
},
{
uf: "GO",
value: 24026,
cidade: "Piracanjuba"
},
{
uf: "SP",
value: 24008,
cidade: "Itaí"
},
{
uf: "CE",
value: 24007,
cidade: "Ocara"
},
{
uf: "RS",
value: 23983,
cidade: "Vera Cruz"
},
{
uf: "RS",
value: 23965,
cidade: "Três Passos"
},
{
uf: "MA",
value: 23959,
cidade: "Carolina"
},
{
uf: "MA",
value: 23952,
cidade: "Aldeias Altas"
},
{
uf: "PA",
value: 23934,
cidade: "Placas"
},
{
uf: "AM",
value: 23930,
cidade: "Careiro da Várzea"
},
{
uf: "PE",
value: 23925,
cidade: "Macaparana"
},
{
uf: "MG",
value: 23914,
cidade: "Corinto"
},
{
uf: "MG",
value: 23906,
cidade: "São Gonçalo do Sapucaí"
},
{
uf: "ES",
value: 23902,
cidade: "Anchieta"
},
{
uf: "MG",
value: 23896,
cidade: "Sacramento"
},
{
uf: "ES",
value: 23895,
cidade: "Pinheiros"
},
{
uf: "PR",
value: 23887,
cidade: "Itaperuçu"
},
{
uf: "PR",
value: 23886,
cidade: "Cambará"
},
{
uf: "PA",
value: 23864,
cidade: "Bagre"
},
{
uf: "SP",
value: 23862,
cidade: "Santa Rosa de Viterbo"
},
{
uf: "RS",
value: 23848,
cidade: "Três Coroas"
},
{
uf: "SP",
value: 23847,
cidade: "Jarinu"
},
{
uf: "BA",
value: 23846,
cidade: "Presidente Tancredo Neves"
},
{
uf: "ES",
value: 23843,
cidade: "Sooretama"
},
{
uf: "MG",
value: 23839,
cidade: "Pedra Azul"
},
{
uf: "AL",
value: 23836,
cidade: "Junqueiro"
},
{
uf: "MS",
value: 23835,
cidade: "Anastácio"
},
{
uf: "PB",
value: 23829,
cidade: "Areia"
},
{
uf: "MG",
value: 23818,
cidade: "Raul Soares"
},
{
uf: "GO",
value: 23814,
cidade: "Alexânia"
},
{
uf: "AL",
value: 23811,
cidade: "Pão de Açúcar"
},
{
uf: "CE",
value: 23808,
cidade: "Ibiapina"
},
{
uf: "CE",
value: 23807,
cidade: "Jucás"
},
{
uf: "RS",
value: 23798,
cidade: "São Sepé"
},
{
uf: "ES",
value: 23794,
cidade: "Pedro Canário"
},
{
uf: "AL",
value: 23785,
cidade: "Matriz de Camaragibe"
},
{
uf: "RN",
value: 23784,
cidade: "Nísia Floresta"
},
{
uf: "PE",
value: 23769,
cidade: "Itapissuma"
},
{
uf: "BA",
value: 23766,
cidade: "Encruzilhada"
},
{
uf: "RS",
value: 23726,
cidade: "Três de Maio"
},
{
uf: "BA",
value: 23620,
cidade: "Conde"
},
{
uf: "SP",
value: 23513,
cidade: "Álvares Machado"
},
{
uf: "PR",
value: 23424,
cidade: "Piraí do Sul"
},
{
uf: "PR",
value: 23413,
cidade: "Santa Helena"
},
{
uf: "MG",
value: 23397,
cidade: "Belo Oriente"
},
{
uf: "PE",
value: 23390,
cidade: "Cupira"
},
{
uf: "PR",
value: 23380,
cidade: "Ortigueira"
},
{
uf: "SP",
value: 23371,
cidade: "Cajuru"
},
{
uf: "SP",
value: 23362,
cidade: "Igaraçu do Tietê"
},
{
uf: "MG",
value: 23346,
cidade: "Carandaí"
},
{
uf: "GO",
value: 23338,
cidade: "Palmeiras de Goiás"
},
{
uf: "AL",
value: 23292,
cidade: "Igreja Nova"
},
{
uf: "MG",
value: 23218,
cidade: "Ibiá"
},
{
uf: "ES",
value: 23212,
cidade: "Ecoporanga"
},
{
uf: "AM",
value: 23206,
cidade: "Codajás"
},
{
uf: "TO",
value: 23200,
cidade: "Guaraí"
},
{
uf: "PB",
value: 23192,
cidade: "Itaporanga"
},
{
uf: "MS",
value: 23181,
cidade: "Bela Vista"
},
{
uf: "PA",
value: 23130,
cidade: "São Domingos do Araguaia"
},
{
uf: "BA",
value: 23089,
cidade: "Itambé"
},
{
uf: "AL",
value: 23045,
cidade: "Piranhas"
},
{
uf: "MG",
value: 23043,
cidade: "Conceição das Alagoas"
},
{
uf: "PA",
value: 23026,
cidade: "Santa Maria do Pará"
},
{
uf: "RS",
value: 23021,
cidade: "Quaraí"
},
{
uf: "GO",
value: 23006,
cidade: "Pirenópolis"
},
{
uf: "PA",
value: 23001,
cidade: "Soure"
},
{
uf: "PB",
value: 22976,
cidade: "Rio Tinto"
},
{
uf: "PA",
value: 22904,
cidade: "São Sebastião da Boa Vista"
},
{
uf: "RJ",
value: 22899,
cidade: "Itaocara"
},
{
uf: "MA",
value: 22899,
cidade: "Buriti Bravo"
},
{
uf: "PE",
value: 22878,
cidade: "Orobó"
},
{
uf: "BA",
value: 22874,
cidade: "Rafael Jambeiro"
},
{
uf: "MG",
value: 22856,
cidade: "Espera Feliz"
},
{
uf: "RJ",
value: 22851,
cidade: "Iguaba Grande"
},
{
uf: "MA",
value: 22846,
cidade: "Turilândia"
},
{
uf: "RS",
value: 22830,
cidade: "Nova Prata"
},
{
uf: "AM",
value: 22817,
cidade: "Fonte Boa"
},
{
uf: "RS",
value: 22814,
cidade: "Guaporé"
},
{
uf: "RS",
value: 22810,
cidade: "Veranópolis"
},
{
uf: "MG",
value: 22809,
cidade: "Itambacuri"
},
{
uf: "AM",
value: 22801,
cidade: "Manaquiri"
},
{
uf: "MG",
value: 22772,
cidade: "Jacutinga"
},
{
uf: "PE",
value: 22760,
cidade: "Lagoa Grande"
},
{
uf: "MG",
value: 22737,
cidade: "Buritis"
},
{
uf: "MG",
value: 22734,
cidade: "Bambuí"
},
{
uf: "MA",
value: 22732,
cidade: "Pedro do Rosário"
},
{
uf: "RJ",
value: 22719,
cidade: "Pinheiral"
},
{
uf: "RS",
value: 22716,
cidade: "Nova Santa Rita"
},
{
uf: "SP",
value: 22704,
cidade: "Pirajuí"
},
{
uf: "MG",
value: 22690,
cidade: "Abaeté"
},
{
uf: "AL",
value: 22686,
cidade: "São José da Laje"
},
{
uf: "MA",
value: 22681,
cidade: "Dom Pedro"
},
{
uf: "PE",
value: 22679,
cidade: "Agrestina"
},
{
uf: "MA",
value: 22644,
cidade: "Santa Luzia do Paruá"
},
{
uf: "AL",
value: 22641,
cidade: "Craíbas"
},
{
uf: "PI",
value: 22629,
cidade: "Bom Jesus"
},
{
uf: "TO",
value: 22619,
cidade: "Tocantinópolis"
},
{
uf: "BA",
value: 22601,
cidade: "Iraquara"
},
{
uf: "BA",
value: 22598,
cidade: "Ibirapitanga"
},
{
uf: "SP",
value: 22576,
cidade: "Valparaíso"
},
{
uf: "AL",
value: 22575,
cidade: "Joaquim Gomes"
},
{
uf: "MG",
value: 22563,
cidade: "Paraopeba"
},
{
uf: "BA",
value: 22549,
cidade: "João Dourado"
},
{
uf: "SC",
value: 22548,
cidade: "Forquilhinha"
},
{
uf: "RO",
value: 22546,
cidade: "Nova Mamoré"
},
{
uf: "BA",
value: 22528,
cidade: "Formosa do Rio Preto"
},
{
uf: "RN",
value: 22481,
cidade: "Goianinha"
},
{
uf: "CE",
value: 22479,
cidade: "Cruz"
},
{
uf: "CE",
value: 22445,
cidade: "Assaré"
},
{
uf: "SE",
value: 22434,
cidade: "Umbaúba"
},
{
uf: "SP",
value: 22406,
cidade: "Tambaú"
},
{
uf: "BA",
value: 22401,
cidade: "Coração de Maria"
},
{
uf: "BA",
value: 22399,
cidade: "Piritiba"
},
{
uf: "SC",
value: 22386,
cidade: "Barra Velha"
},
{
uf: "ES",
value: 22366,
cidade: "Ibatiba"
},
{
uf: "PE",
value: 22353,
cidade: "Altinho"
},
{
uf: "PR",
value: 22345,
cidade: "Colorado"
},
{
uf: "MG",
value: 22343,
cidade: "Caraí"
},
{
uf: "MS",
value: 22341,
cidade: "Ivinhema"
},
{
uf: "CE",
value: 22324,
cidade: "Irauçuba"
},
{
uf: "MS",
value: 22320,
cidade: "Aparecida do Taboado"
},
{
uf: "MG",
value: 22319,
cidade: "São João do Paraíso"
},
{
uf: "RO",
value: 22319,
cidade: "Presidente Médici"
},
{
uf: "SP",
value: 22291,
cidade: "Taquarituba"
},
{
uf: "GO",
value: 22283,
cidade: "São Miguel do Araguaia"
},
{
uf: "RS",
value: 22281,
cidade: "Tupanciretã"
},
{
uf: "AM",
value: 22254,
cidade: "Ipixuna"
},
{
uf: "SC",
value: 22250,
cidade: "Ituporanga"
},
{
uf: "MG",
value: 22242,
cidade: "Conselheiro Pena"
},
{
uf: "BA",
value: 22236,
cidade: "Caculé"
},
{
uf: "PR",
value: 22220,
cidade: "Mandirituba"
},
{
uf: "RN",
value: 22216,
cidade: "Santo Antônio"
},
{
uf: "SP",
value: 22210,
cidade: "Angatuba"
},
{
uf: "MS",
value: 22203,
cidade: "São Gabriel do Oeste"
},
{
uf: "MG",
value: 22202,
cidade: "Juatuba"
},
{
uf: "BA",
value: 22201,
cidade: "Laje"
},
{
uf: "BA",
value: 22189,
cidade: "Wenceslau Guimarães"
},
{
uf: "PE",
value: 22169,
cidade: "Flores"
},
{
uf: "BA",
value: 22165,
cidade: "Guaratinga"
},
{
uf: "RN",
value: 22157,
cidade: "São Miguel"
},
{
uf: "PE",
value: 22151,
cidade: "Rio Formoso"
},
{
uf: "RS",
value: 22134,
cidade: "São Jerônimo"
},
{
uf: "SC",
value: 22101,
cidade: "Maravilha"
},
{
uf: "PE",
value: 22068,
cidade: "Tacaratu"
},
{
uf: "BA",
value: 22037,
cidade: "Boquira"
},
{
uf: "MA",
value: 22016,
cidade: "Pio XII"
},
{
uf: "MA",
value: 22006,
cidade: "Carutapera"
},
{
uf: "BA",
value: 22000,
cidade: "Sobradinho"
},
{
uf: "MG",
value: 21994,
cidade: "Monte Azul"
},
{
uf: "SE",
value: 21983,
cidade: "Poço Verde"
},
{
uf: "PE",
value: 21955,
cidade: "Sanharó"
},
{
uf: "CE",
value: 21954,
cidade: "Coreaú"
},
{
uf: "PE",
value: 21939,
cidade: "Amaraji"
},
{
uf: "BA",
value: 21937,
cidade: "Riachão das Neves"
},
{
uf: "RS",
value: 21932,
cidade: "São Sebastião do Caí"
},
{
uf: "MA",
value: 21885,
cidade: "Matinha"
},
{
uf: "PE",
value: 21884,
cidade: "Ilha de Itamaracá"
},
{
uf: "SP",
value: 21866,
cidade: "Cunha"
},
{
uf: "PB",
value: 21851,
cidade: "Bananeiras"
},
{
uf: "MA",
value: 21851,
cidade: "Alcântara"
},
{
uf: "BA",
value: 21831,
cidade: "Oliveira dos Brejinhos"
},
{
uf: "RO",
value: 21828,
cidade: "São Miguel do Guaporé"
},
{
uf: "ES",
value: 21823,
cidade: "Santa Teresa"
},
{
uf: "BA",
value: 21798,
cidade: "Belmonte"
},
{
uf: "SC",
value: 21792,
cidade: "São Lourenço do Oeste"
},
{
uf: "CE",
value: 21786,
cidade: "Forquilha"
},
{
uf: "PR",
value: 21749,
cidade: "Coronel Vivida"
},
{
uf: "SP",
value: 21746,
cidade: "Monte Aprazível"
},
{
uf: "MG",
value: 21705,
cidade: "Caxambu"
},
{
uf: "SC",
value: 21674,
cidade: "Capivari de Baixo"
},
{
uf: "SP",
value: 21634,
cidade: "Santa Gertrudes"
},
{
uf: "SP",
value: 21580,
cidade: "Brotas"
},
{
uf: "BA",
value: 21560,
cidade: "Medeiros Neto"
},
{
uf: "PR",
value: 21558,
cidade: "Ubiratã"
},
{
uf: "ES",
value: 21548,
cidade: "Pancas"
},
{
uf: "MA",
value: 21530,
cidade: "Porto Franco"
},
{
uf: "CE",
value: 21514,
cidade: "Barro"
},
{
uf: "BA",
value: 21482,
cidade: "Teofilândia"
},
{
uf: "AM",
value: 21451,
cidade: "Novo Aripuanã"
},
{
uf: "BA",
value: 21449,
cidade: "Mutuípe"
},
{
uf: "BA",
value: 21414,
cidade: "Caravelas"
},
{
uf: "PB",
value: 21400,
cidade: "Conde"
},
{
uf: "AC",
value: 21398,
cidade: "Brasiléia"
},
{
uf: "SC",
value: 21393,
cidade: "Orleans"
},
{
uf: "CE",
value: 21389,
cidade: "Orós"
},
{
uf: "SP",
value: 21386,
cidade: "Teodoro Sampaio"
},
{
uf: "MG",
value: 21382,
cidade: "Manhumirim"
},
{
uf: "MT",
value: 21382,
cidade: "Vila Rica"
},
{
uf: "MG",
value: 21377,
cidade: "Itapecerica"
},
{
uf: "RJ",
value: 21349,
cidade: "Silva Jardim"
},
{
uf: "AL",
value: 21321,
cidade: "Feira Grande"
},
{
uf: "PE",
value: 21312,
cidade: "São João"
},
{
uf: "RS",
value: 21285,
cidade: "Sarandi"
},
{
uf: "PB",
value: 21283,
cidade: "Princesa Isabel"
},
{
uf: "BA",
value: 21271,
cidade: "Alcobaça"
},
{
uf: "SC",
value: 21239,
cidade: "Herval d'Oeste"
},
{
uf: "MG",
value: 21234,
cidade: "Monte Santo de Minas"
},
{
uf: "RJ",
value: 21211,
cidade: "Conceição de Macabu"
},
{
uf: "MG",
value: 21203,
cidade: "Monte Sião"
},
{
uf: "PR",
value: 21201,
cidade: "Loanda"
},
{
uf: "MA",
value: 21201,
cidade: "Peritoró"
},
{
uf: "BA",
value: 21187,
cidade: "Barra da Estiva"
},
{
uf: "SP",
value: 21186,
cidade: "Palmital"
},
{
uf: "PB",
value: 21176,
cidade: "Mari"
},
{
uf: "SP",
value: 21107,
cidade: "Brodowski"
},
{
uf: "BA",
value: 21081,
cidade: "Itajuípe"
},
{
uf: "SP",
value: 21080,
cidade: "Cordeirópolis"
},
{
uf: "MG",
value: 21080,
cidade: "Camanducaia"
},
{
uf: "MG",
value: 21026,
cidade: "Medina"
},
{
uf: "PA",
value: 21005,
cidade: "Chaves"
},
{
uf: "MG",
value: 21001,
cidade: "Itaobim"
},
{
uf: "BA",
value: 21001,
cidade: "Paramirim"
},
{
uf: "MS",
value: 20966,
cidade: "Cassilândia"
},
{
uf: "BA",
value: 20964,
cidade: "Coaraci"
},
{
uf: "MS",
value: 20946,
cidade: "Ribas do Rio Pardo"
},
{
uf: "PE",
value: 20944,
cidade: "Pedra"
},
{
uf: "PR",
value: 20920,
cidade: "Pontal do Paraná"
},
{
uf: "MS",
value: 20865,
cidade: "Itaporã"
},
{
uf: "MA",
value: 20863,
cidade: "São Vicente Ferrer"
},
{
uf: "MT",
value: 20856,
cidade: "Água Boa"
},
{
uf: "PR",
value: 20841,
cidade: "Santa Terezinha de Itaipu"
},
{
uf: "MG",
value: 20835,
cidade: "Serro"
},
{
uf: "BA",
value: 20775,
cidade: "Palmas de Monte Alto"
},
{
uf: "SC",
value: 20769,
cidade: "Capinzal"
},
{
uf: "GO",
value: 20727,
cidade: "Bom Jesus de Goiás"
},
{
uf: "BA",
value: 20725,
cidade: "Itaparica"
},
{
uf: "GO",
value: 20722,
cidade: "Ceres"
},
{
uf: "PE",
value: 20715,
cidade: "Tamandaré"
},
{
uf: "CE",
value: 20700,
cidade: "Morrinhos"
},
{
uf: "BA",
value: 20691,
cidade: "Ubaitaba"
},
{
uf: "MG",
value: 20686,
cidade: "Campestre"
},
{
uf: "CE",
value: 20685,
cidade: "Araripe"
},
{
uf: "RN",
value: 20685,
cidade: "Monte Alegre"
},
{
uf: "TO",
value: 20684,
cidade: "Miracema do Tocantins"
},
{
uf: "PE",
value: 20659,
cidade: "Lagoa de Itaenga"
},
{
uf: "SP",
value: 20650,
cidade: "Santo Antônio de Posse"
},
{
uf: "PA",
value: 20647,
cidade: "São João de Pirabas"
},
{
uf: "PR",
value: 20610,
cidade: "Andirá"
},
{
uf: "SP",
value: 20592,
cidade: "Miracatu"
},
{
uf: "PE",
value: 20571,
cidade: "Feira Nova"
},
{
uf: "PA",
value: 20543,
cidade: "Anapu"
},
{
uf: "RS",
value: 20537,
cidade: "São Francisco de Paula"
},
{
uf: "PR",
value: 20516,
cidade: "Altônia"
},
{
uf: "RS",
value: 20510,
cidade: "Encantado"
},
{
uf: "AP",
value: 20509,
cidade: "Oiapoque"
},
{
uf: "PE",
value: 20488,
cidade: "São Joaquim do Monte"
},
{
uf: "SP",
value: 20475,
cidade: "Santo Anastácio"
},
{
uf: "MA",
value: 20452,
cidade: "Mirador"
},
{
uf: "SP",
value: 20451,
cidade: "Miguelópolis"
},
{
uf: "MA",
value: 20448,
cidade: "Cantanhede"
},
{
uf: "ES",
value: 20447,
cidade: "Venda Nova do Imigrante"
},
{
uf: "SP",
value: 20445,
cidade: "Bastos"
},
{
uf: "PA",
value: 20443,
cidade: "Cachoeira do Arari"
},
{
uf: "MG",
value: 20430,
cidade: "Muzambinho"
},
{
uf: "RJ",
value: 20430,
cidade: "Cordeiro"
},
{
uf: "MG",
value: 20426,
cidade: "Carmo do Rio Claro"
},
{
uf: "PR",
value: 20416,
cidade: "Cruzeiro do Oeste"
},
{
uf: "AL",
value: 20409,
cidade: "Cajueiro"
},
{
uf: "RS",
value: 20406,
cidade: "Butiá"
},
{
uf: "BA",
value: 20391,
cidade: "Conceição da Feira"
},
{
uf: "MA",
value: 20381,
cidade: "João Lisboa"
},
{
uf: "AL",
value: 20364,
cidade: "Olho d'Água das Flores"
},
{
uf: "PB",
value: 20362,
cidade: "Caaporã"
},
{
uf: "RN",
value: 20354,
cidade: "Parelhas"
},
{
uf: "MA",
value: 20344,
cidade: "Bequimão"
},
{
uf: "MT",
value: 20341,
cidade: "Diamantino"
},
{
uf: "PI",
value: 20326,
cidade: "Valença do Piauí"
},
{
uf: "BA",
value: 20305,
cidade: "São Felipe"
},
{
uf: "SC",
value: 20301,
cidade: "Itaiópolis"
},
{
uf: "GO",
value: 20279,
cidade: "Acreúna"
},
{
uf: "PR",
value: 20269,
cidade: "Jandaia do Sul"
},
{
uf: "PE",
value: 20253,
cidade: "Belém do São Francisco"
},
{
uf: "RJ",
value: 20251,
cidade: "São José do Vale do Rio Preto"
},
{
uf: "MG",
value: 20245,
cidade: "Paraguaçu"
},
{
uf: "RJ",
value: 20242,
cidade: "Quissamã"
},
{
uf: "GO",
value: 20239,
cidade: "Anicuns"
},
{
uf: "PE",
value: 20224,
cidade: "Parnamirim"
},
{
uf: "SC",
value: 20223,
cidade: "Urussanga"
},
{
uf: "BA",
value: 20216,
cidade: "Itanhém"
},
{
uf: "MA",
value: 20209,
cidade: "Riachão"
},
{
uf: "PA",
value: 20183,
cidade: "Salvaterra"
},
{
uf: "AC",
value: 20179,
cidade: "Senador Guiomard"
},
{
uf: "PA",
value: 20158,
cidade: "Nova Esperança do Piriá"
},
{
uf: "MA",
value: 20153,
cidade: "São Luís Gonzaga do Maranhão"
},
{
uf: "PI",
value: 20149,
cidade: "Uruçuí"
},
{
uf: "PE",
value: 20137,
cidade: "Chã Grande"
},
{
uf: "BA",
value: 20121,
cidade: "Pindobaçu"
},
{
uf: "RS",
value: 20103,
cidade: "São Marcos"
},
{
uf: "MA",
value: 20103,
cidade: "Paraibano"
},
{
uf: "MG",
value: 20087,
cidade: "Perdões"
},
{
uf: "MA",
value: 20079,
cidade: "Paulo Ramos"
},
{
uf: "MG",
value: 20069,
cidade: "Carlos Chagas"
},
{
uf: "BA",
value: 20060,
cidade: "Baixa Grande"
},
{
uf: "SE",
value: 20056,
cidade: "Aquidabã"
},
{
uf: "BA",
value: 20046,
cidade: "Crisópolis"
},
{
uf: "SP",
value: 20029,
cidade: "Iracemápolis"
},
{
uf: "CE",
value: 20020,
cidade: "Caridade"
},
{
uf: "PI",
value: 20020,
cidade: "Canto do Buriti"
},
{
uf: "AL",
value: 20019,
cidade: "Colônia Leopoldina"
},
{
uf: "BA",
value: 20013,
cidade: "Tanhaçu"
},
{
uf: "MG",
value: 20012,
cidade: "Carmo do Cajuru"
},
{
uf: "SE",
value: 20007,
cidade: "Carira"
},
{
uf: "PB",
value: 19978,
cidade: "Cuité"
},
{
uf: "SP",
value: 19964,
cidade: "Pompéia"
},
{
uf: "CE",
value: 19921,
cidade: "Quiterianópolis"
},
{
uf: "MA",
value: 19920,
cidade: "São João Batista"
},
{
uf: "BA",
value: 19914,
cidade: "Itororó"
},
{
uf: "SP",
value: 19882,
cidade: "Lucélia"
},
{
uf: "RS",
value: 19874,
cidade: "Ivoti"
},
{
uf: "RO",
value: 19874,
cidade: "Nova Brasilândia D'Oeste"
},
{
uf: "SP",
value: 19858,
cidade: "Guará"
},
{
uf: "PR",
value: 19851,
cidade: "Quatro Barras"
},
{
uf: "RS",
value: 19841,
cidade: "Piratini"
},
{
uf: "MS",
value: 19839,
cidade: "Bataguassu"
},
{
uf: "BA",
value: 19837,
cidade: "Uruçuca"
},
{
uf: "RJ",
value: 19830,
cidade: "Cantagalo"
},
{
uf: "SC",
value: 19823,
cidade: "Santo Amaro da Imperatriz"
},
{
uf: "BA",
value: 19818,
cidade: "Governador Mangabeira"
},
{
uf: "MG",
value: 19813,
cidade: "Manga"
},
{
uf: "MG",
value: 19799,
cidade: "São José da Lapa"
},
{
uf: "PI",
value: 19785,
cidade: "Paulistana"
},
{
uf: "PR",
value: 19781,
cidade: "Mandaguaçu"
},
{
uf: "RO",
value: 19779,
cidade: "Candeias do Jamari"
},
{
uf: "CE",
value: 19765,
cidade: "Uruburetama"
},
{
uf: "BA",
value: 19750,
cidade: "Ubaíra"
},
{
uf: "MG",
value: 19723,
cidade: "Vazante"
},
{
uf: "MA",
value: 19708,
cidade: "Poção de Pedras"
},
{
uf: "SP",
value: 19708,
cidade: "Bom Jesus dos Perdões"
},
{
uf: "MS",
value: 19695,
cidade: "Costa Rica"
},
{
uf: "SP",
value: 19691,
cidade: "Rosana"
},
{
uf: "PB",
value: 19681,
cidade: "Alagoa Nova"
},
{
uf: "PR",
value: 19679,
cidade: "Chopinzinho"
},
{
uf: "MS",
value: 19648,
cidade: "Chapadão do Sul"
},
{
uf: "MT",
value: 19643,
cidade: "Nova Xavantina"
},
{
uf: "MG",
value: 19619,
cidade: "Monte Alegre de Minas"
},
{
uf: "MS",
value: 19617,
cidade: "Ladário"
},
{
uf: "MG",
value: 19609,
cidade: "Lajinha"
},
{
uf: "BA",
value: 19600,
cidade: "Buritirama"
},
{
uf: "MG",
value: 19599,
cidade: "Barroso"
},
{
uf: "PE",
value: 19593,
cidade: "Capoeiras"
},
{
uf: "MS",
value: 19587,
cidade: "Bonito"
},
{
uf: "RS",
value: 19579,
cidade: "Júlio de Castilhos"
},
{
uf: "RN",
value: 19576,
cidade: "Caraúbas"
},
{
uf: "CE",
value: 19573,
cidade: "Barreira"
},
{
uf: "MG",
value: 19554,
cidade: "Lambari"
},
{
uf: "PI",
value: 19548,
cidade: "São João do Piauí"
},
{
uf: "RS",
value: 19485,
cidade: "Rolante"
},
{
uf: "CE",
value: 19455,
cidade: "Reriutaba"
},
{
uf: "PA",
value: 19424,
cidade: "Santa Luzia do Pará"
},
{
uf: "CE",
value: 19412,
cidade: "Quixeré"
},
{
uf: "SP",
value: 19397,
cidade: "Potim"
},
{
uf: "SE",
value: 19386,
cidade: "Riachão do Dantas"
},
{
uf: "MG",
value: 19379,
cidade: "Paraisópolis"
},
{
uf: "AL",
value: 19377,
cidade: "Água Branca"
},
{
uf: "SE",
value: 19365,
cidade: "Salgado"
},
{
uf: "PR",
value: 19344,
cidade: "Tibagi"
},
{
uf: "AL",
value: 19334,
cidade: "Porto Real do Colégio"
},
{
uf: "BA",
value: 19326,
cidade: "Mairi"
},
{
uf: "CE",
value: 19325,
cidade: "Hidrolândia"
},
{
uf: "MG",
value: 19324,
cidade: "Campina Verde"
},
{
uf: "RS",
value: 19310,
cidade: "Ibirubá"
},
{
uf: "PR",
value: 19298,
cidade: "Wenceslau Braz"
},
{
uf: "MT",
value: 19290,
cidade: "Paranatinga"
},
{
uf: "RS",
value: 19254,
cidade: "São Francisco de Assis"
},
{
uf: "RS",
value: 19250,
cidade: "Tapejara"
},
{
uf: "SP",
value: 19246,
cidade: "Juquiá"
},
{
uf: "SP",
value: 19180,
cidade: "Nova Granada"
},
{
uf: "PR",
value: 19163,
cidade: "Carambeí"
},
{
uf: "PE",
value: 19162,
cidade: "Riacho das Almas"
},
{
uf: "MA",
value: 19155,
cidade: "Maracaçumé"
},
{
uf: "GO",
value: 19153,
cidade: "Jussara"
},
{
uf: "MA",
value: 19134,
cidade: "Nova Olinda do Maranhão"
},
{
uf: "MG",
value: 19133,
cidade: "Divino"
},
{
uf: "ES",
value: 19130,
cidade: "Vargem Alta"
},
{
uf: "MG",
value: 19116,
cidade: "Varzelândia"
},
{
uf: "TO",
value: 19112,
cidade: "Dianópolis"
},
{
uf: "BA",
value: 19101,
cidade: "Maraú"
},
{
uf: "PB",
value: 19096,
cidade: "São José de Piranhas"
},
{
uf: "GO",
value: 19089,
cidade: "Silvânia"
},
{
uf: "PB",
value: 19082,
cidade: "Aroeiras"
},
{
uf: "PE",
value: 19081,
cidade: "Inajá"
},
{
uf: "AM",
value: 19077,
cidade: "Tapauá"
},
{
uf: "PI",
value: 19074,
cidade: "Buriti dos Lopes"
},
{
uf: "BA",
value: 19064,
cidade: "Santa Bárbara"
},
{
uf: "RS",
value: 19045,
cidade: "Nova Petrópolis"
},
{
uf: "MS",
value: 19035,
cidade: "Fátima do Sul"
},
{
uf: "AL",
value: 19020,
cidade: "Taquarana"
},
{
uf: "CE",
value: 19007,
cidade: "Farias Brito"
},
{
uf: "MT",
value: 18998,
cidade: "São José dos Quatro Marcos"
},
{
uf: "BA",
value: 18964,
cidade: "Sátiro Dias"
},
{
uf: "MA",
value: 18953,
cidade: "Trizidela do Vale"
},
{
uf: "BA",
value: 18943,
cidade: "Ibirataia"
},
{
uf: "SP",
value: 18931,
cidade: "Monte Azul Paulista"
},
{
uf: "CE",
value: 18915,
cidade: "Chorozinho"
},
{
uf: "GO",
value: 18915,
cidade: "Rubiataba"
},
{
uf: "AL",
value: 18897,
cidade: "Major Isidoro"
},
{
uf: "CE",
value: 18894,
cidade: "Itatira"
},
{
uf: "PR",
value: 18893,
cidade: "Santo Antônio do Sudoeste"
},
{
uf: "PR",
value: 18891,
cidade: "Antonina"
},
{
uf: "MS",
value: 18890,
cidade: "Rio Verde de Mato Grosso"
},
{
uf: "PB",
value: 18879,
cidade: "Araruna"
},
{
uf: "MG",
value: 18849,
cidade: "Padre Paraíso"
},
{
uf: "PE",
value: 18819,
cidade: "Cachoeirinha"
},
{
uf: "CE",
value: 18802,
cidade: "Umirim"
},
{
uf: "RS",
value: 18783,
cidade: "Arroio do Meio"
},
{
uf: "MG",
value: 18776,
cidade: "Malacacheta"
},
{
uf: "MA",
value: 18764,
cidade: "Palmeirândia"
},
{
uf: "MT",
value: 18754,
cidade: "Canarana"
},
{
uf: "BA",
value: 18748,
cidade: "Taperoá"
},
{
uf: "CE",
value: 18745,
cidade: "Catarina"
},
{
uf: "SP",
value: 18726,
cidade: "Junqueirópolis"
},
{
uf: "MG",
value: 18714,
cidade: "Guaranésia"
},
{
uf: "CE",
value: 18683,
cidade: "Pindoretama"
},
{
uf: "MT",
value: 18656,
cidade: "Aripuanã"
},
{
uf: "CE",
value: 18626,
cidade: "Itapiúna"
},
{
uf: "MS",
value: 18614,
cidade: "Itaquiraí"
},
{
uf: "BA",
value: 18605,
cidade: "Buerarema"
},
{
uf: "MA",
value: 18601,
cidade: "Olho d'Água das Cunhãs"
},
{
uf: "RO",
value: 18591,
cidade: "Colorado do Oeste"
},
{
uf: "MG",
value: 18577,
cidade: "Presidente Olegário"
},
{
uf: "PE",
value: 18574,
cidade: "Carnaíba"
},
{
uf: "CE",
value: 18567,
cidade: "Cariús"
},
{
uf: "SP",
value: 18563,
cidade: "Buri"
},
{
uf: "BA",
value: 18539,
cidade: "Itarantim"
},
{
uf: "SP",
value: 18538,
cidade: "Caconde"
},
{
uf: "PR",
value: 18526,
cidade: "Capanema"
},
{
uf: "SE",
value: 18506,
cidade: "Neópolis"
},
{
uf: "MA",
value: 18505,
cidade: "Cândido Mendes"
},
{
uf: "SP",
value: 18494,
cidade: "Regente Feijó"
},
{
uf: "MG",
value: 18488,
cidade: "Alpinópolis"
},
{
uf: "MG",
value: 18479,
cidade: "Águas Formosas"
},
{
uf: "RS",
value: 18470,
cidade: "Arroio Grande"
},
{
uf: "MT",
value: 18463,
cidade: "Santo Antônio do Leverger"
},
{
uf: "GO",
value: 18458,
cidade: "Itapaci"
},
{
uf: "PR",
value: 18454,
cidade: "Siqueira Campos"
},
{
uf: "MA",
value: 18452,
cidade: "Esperantinópolis"
},
{
uf: "SP",
value: 18446,
cidade: "Pariquera-Açu"
},
{
uf: "SC",
value: 18430,
cidade: "Guabiruba"
},
{
uf: "TO",
value: 18427,
cidade: "Formoso do Araguaia"
},
{
uf: "BA",
value: 18427,
cidade: "São Gabriel"
},
{
uf: "PR",
value: 18414,
cidade: "Sengés"
},
{
uf: "GO",
value: 18410,
cidade: "Campos Belos"
},
{
uf: "RR",
value: 18398,
cidade: "Caracaraí"
},
{
uf: "ES",
value: 18397,
cidade: "Muniz Freire"
},
{
uf: "CE",
value: 18392,
cidade: "Icapuí"
},
{
uf: "PB",
value: 18363,
cidade: "Conceição"
},
{
uf: "PE",
value: 18360,
cidade: "Iati"
},
{
uf: "RS",
value: 18348,
cidade: "Horizontina"
},
{
uf: "CE",
value: 18347,
cidade: "Cariré"
},
{
uf: "RS",
value: 18346,
cidade: "Nova Hartz"
},
{
uf: "MA",
value: 18338,
cidade: "Cajari"
},
{
uf: "PI",
value: 18336,
cidade: "Castelo do Piauí"
},
{
uf: "PE",
value: 18331,
cidade: "Serrita"
},
{
uf: "MG",
value: 18307,
cidade: "Baependi"
},
{
uf: "GO",
value: 18305,
cidade: "Aragarças"
},
{
uf: "MG",
value: 18298,
cidade: "Simonésia"
},
{
uf: "PA",
value: 18288,
cidade: "Curionópolis"
},
{
uf: "AM",
value: 18278,
cidade: "Nhamundá"
},
{
uf: "SP",
value: 18269,
cidade: "Ribeirão Branco"
},
{
uf: "AL",
value: 18250,
cidade: "Lagoa da Canoa"
},
{
uf: "PB",
value: 18222,
cidade: "Picuí"
},
{
uf: "PE",
value: 18222,
cidade: "Vertentes"
},
{
uf: "PB",
value: 18201,
cidade: "São João do Rio do Peixe"
},
{
uf: "PE",
value: 18180,
cidade: "São José da Coroa Grande"
},
{
uf: "PB",
value: 18180,
cidade: "Ingá"
},
{
uf: "MT",
value: 18178,
cidade: "Comodoro"
},
{
uf: "BA",
value: 18173,
cidade: "Utinga"
},
{
uf: "MG",
value: 18170,
cidade: "Ipanema"
},
{
uf: "AM",
value: 18166,
cidade: "Pauini"
},
{
uf: "PE",
value: 18156,
cidade: "Araçoiaba"
},
{
uf: "BA",
value: 18153,
cidade: "Cocos"
},
{
uf: "AM",
value: 18146,
cidade: "Santa Isabel do Rio Negro"
},
{
uf: "MG",
value: 18138,
cidade: "Santa Vitória"
},
{
uf: "SC",
value: 18138,
cidade: "Garopaba"
},
{
uf: "PI",
value: 18134,
cidade: "São Miguel do Tapuio"
},
{
uf: "SC",
value: 18129,
cidade: "Três Barras"
},
{
uf: "BA",
value: 18127,
cidade: "Ituaçu"
},
{
uf: "ES",
value: 18123,
cidade: "Piúma"
},
{
uf: "BA",
value: 18112,
cidade: "Serra Dourada"
},
{
uf: "MT",
value: 18094,
cidade: "Sapezal"
},
{
uf: "CE",
value: 18088,
cidade: "Madalena"
},
{
uf: "PE",
value: 18083,
cidade: "Manari"
},
{
uf: "MA",
value: 18067,
cidade: "Pastos Bons"
},
{
uf: "MG",
value: 18055,
cidade: "Turmalina"
},
{
uf: "SP",
value: 18052,
cidade: "Itatinga"
},
{
uf: "PR",
value: 18040,
cidade: "Cruz Machado"
},
{
uf: "PI",
value: 18035,
cidade: "Jaicós"
},
{
uf: "PB",
value: 18007,
cidade: "Alhandra"
},
{
uf: "AM",
value: 18007,
cidade: "Apuí"
},
{
uf: "SP",
value: 18003,
cidade: "Castilho"
},
{
uf: "MA",
value: 17998,
cidade: "Senador La Rocque"
},
{
uf: "SP",
value: 17998,
cidade: "Guapiara"
},
{
uf: "AM",
value: 17992,
cidade: "Jutaí"
},
{
uf: "BA",
value: 17991,
cidade: "Boa Vista do Tupim"
},
{
uf: "BA",
value: 17982,
cidade: "Piatã"
},
{
uf: "MG",
value: 17946,
cidade: "Ervália"
},
{
uf: "RJ",
value: 17935,
cidade: "Mendes"
},
{
uf: "SC",
value: 17928,
cidade: "Papanduva"
},
{
uf: "MG",
value: 17908,
cidade: "Conceição do Mato Dentro"
},
{
uf: "AL",
value: 17898,
cidade: "Inhapi"
},
{
uf: "BA",
value: 17889,
cidade: "Conceição do Almeida"
},
{
uf: "SP",
value: 17869,
cidade: "Guapiaçu"
},
{
uf: "CE",
value: 17863,
cidade: "Jaguaretama"
},
{
uf: "SP",
value: 17858,
cidade: "Itaberá"
},
{
uf: "ES",
value: 17849,
cidade: "Montanha"
},
{
uf: "MA",
value: 17841,
cidade: "Barão de Grajaú"
},
{
uf: "BA",
value: 17840,
cidade: "Ibititá"
},
{
uf: "AM",
value: 17837,
cidade: "Urucurituba"
},
{
uf: "MT",
value: 17821,
cidade: "Chapada dos Guimarães"
},
{
uf: "SP",
value: 17808,
cidade: "Paranapanema"
},
{
uf: "MA",
value: 17799,
cidade: "São Benedito do Rio Preto"
},
{
uf: "MA",
value: 17783,
cidade: "Morros"
},
{
uf: "PA",
value: 17768,
cidade: "Floresta do Araguaia"
},
{
uf: "RJ",
value: 17760,
cidade: "Porciúncula"
},
{
uf: "MA",
value: 17757,
cidade: "Formosa da Serra Negra"
},
{
uf: "BA",
value: 17731,
cidade: "Aporá"
},
{
uf: "MG",
value: 17720,
cidade: "Itacarambi"
},
{
uf: "PA",
value: 17697,
cidade: "Rio Maria"
},
{
uf: "RN",
value: 17692,
cidade: "Jucurutu"
},
{
uf: "MT",
value: 17679,
cidade: "Rosário Oeste"
},
{
uf: "MG",
value: 17674,
cidade: "Arinos"
},
{
uf: "PI",
value: 17671,
cidade: "Pio IX"
},
{
uf: "RS",
value: 17670,
cidade: "Imbé"
},
{
uf: "CE",
value: 17665,
cidade: "Solonópole"
},
{
uf: "BA",
value: 17652,
cidade: "Fátima"
},
{
uf: "MG",
value: 17639,
cidade: "Matipó"
},
{
uf: "MA",
value: 17622,
cidade: "Centro Novo do Maranhão"
},
{
uf: "MT",
value: 17599,
cidade: "Poxoréu"
},
{
uf: "CE",
value: 17593,
cidade: "Varjota"
},
{
uf: "MA",
value: 17587,
cidade: "Magalhães de Almeida"
},
{
uf: "PE",
value: 17586,
cidade: "Afrânio"
},
{
uf: "PB",
value: 17581,
cidade: "Remígio"
},
{
uf: "MA",
value: 17562,
cidade: "Passagem Franca"
},
{
uf: "PI",
value: 17556,
cidade: "Regeneração"
},
{
uf: "SP",
value: 17532,
cidade: "Capela do Alto"
},
{
uf: "SP",
value: 17532,
cidade: "Cerqueira César"
},
{
uf: "ES",
value: 17530,
cidade: "Rio Bananal"
},
{
uf: "MG",
value: 17528,
cidade: "Nova Era"
},
{
uf: "AM",
value: 17528,
cidade: "Maraã"
},
{
uf: "RJ",
value: 17525,
cidade: "Sapucaia"
},
{
uf: "MT",
value: 17515,
cidade: "Nova Olímpia"
},
{
uf: "MG",
value: 17486,
cidade: "Luz"
},
{
uf: "MA",
value: 17482,
cidade: "Gonçalves Dias"
},
{
uf: "MA",
value: 17474,
cidade: "São Raimundo das Mangabeiras"
},
{
uf: "RJ",
value: 17434,
cidade: "Carmo"
},
{
uf: "RJ",
value: 17425,
cidade: "Rio Claro"
},
{
uf: "AL",
value: 17424,
cidade: "Anadia"
},
{
uf: "PE",
value: 17419,
cidade: "Correntes"
},
{
uf: "MG",
value: 17412,
cidade: "Cássia"
},
{
uf: "GO",
value: 17407,
cidade: "Cocalzinho de Goiás"
},
{
uf: "GO",
value: 17398,
cidade: "Hidrolândia"
},
{
uf: "SP",
value: 17388,
cidade: "Paraibuna"
},
{
uf: "MA",
value: 17381,
cidade: "Pirapemas"
},
{
uf: "SP",
value: 17377,
cidade: "Pradópolis"
},
{
uf: "BA",
value: 17376,
cidade: "Madre de Deus"
},
{
uf: "SP",
value: 17371,
cidade: "Colina"
},
{
uf: "MG",
value: 17357,
cidade: "São Domingos do Prata"
},
{
uf: "MG",
value: 17345,
cidade: "Santo Antônio do Amparo"
},
{
uf: "SC",
value: 17330,
cidade: "Ibirama"
},
{
uf: "BA",
value: 17327,
cidade: "Cabaceiras do Paraguaçu"
},
{
uf: "CE",
value: 17315,
cidade: "Banabuiú"
},
{
uf: "PR",
value: 17308,
cidade: "Ampére"
},
{
uf: "SP",
value: 17297,
cidade: "Viradouro"
},
{
uf: "SC",
value: 17290,
cidade: "Jaguaruna"
},
{
uf: "BA",
value: 17282,
cidade: "Ibicoara"
},
{
uf: "SP",
value: 17266,
cidade: "Águas de Lindóia"
},
{
uf: "MG",
value: 17260,
cidade: "Peçanha"
},
{
uf: "SC",
value: 17260,
cidade: "Taió"
},
{
uf: "AL",
value: 17251,
cidade: "Estrela de Alagoas"
},
{
uf: "AL",
value: 17250,
cidade: "Canapi"
},
{
uf: "MG",
value: 17243,
cidade: "Bom Sucesso"
},
{
uf: "PR",
value: 17240,
cidade: "Clevelândia"
},
{
uf: "MA",
value: 17238,
cidade: "São João do Soter"
},
{
uf: "MG",
value: 17232,
cidade: "Piranga"
},
{
uf: "PB",
value: 17224,
cidade: "Araçagi"
},
{
uf: "BA",
value: 17209,
cidade: "Cafarnaum"
},
{
uf: "AC",
value: 17209,
cidade: "Plácido de Castro"
},
{
uf: "SP",
value: 17208,
cidade: "Jacupiranga"
},
{
uf: "PA",
value: 17206,
cidade: "Santa Maria das Barreiras"
},
{
uf: "AL",
value: 17203,
cidade: "Piaçabuçu"
},
{
uf: "PE",
value: 17183,
cidade: "Cumaru"
},
{
uf: "SE",
value: 17173,
cidade: "Ribeirópolis"
},
{
uf: "CE",
value: 17170,
cidade: "Santana do Cariri"
},
{
uf: "MA",
value: 17165,
cidade: "Presidente Sarney"
},
{
uf: "MG",
value: 17161,
cidade: "Lagoa Formosa"
},
{
uf: "MS",
value: 17146,
cidade: "Terenos"
},
{
uf: "PA",
value: 17141,
cidade: "Santa Bárbara do Pará"
},
{
uf: "RO",
value: 17135,
cidade: "Alto Paraíso"
},
{
uf: "PI",
value: 17135,
cidade: "Amarante"
},
{
uf: "MG",
value: 17134,
cidade: "Jaboticatubas"
},
{
uf: "MT",
value: 17124,
cidade: "São José do Rio Claro"
},
{
uf: "GO",
value: 17121,
cidade: "Pontalina"
},
{
uf: "MG",
value: 17118,
cidade: "Borda da Mata"
},
{
uf: "MG",
value: 17110,
cidade: "Rio Pomba"
},
{
uf: "PE",
value: 17104,
cidade: "Camocim de São Félix"
},
{
uf: "SC",
value: 17100,
cidade: "Abelardo Luz"
},
{
uf: "AM",
value: 17094,
cidade: "Urucará"
},
{
uf: "PB",
value: 17093,
cidade: "Belém"
},
{
uf: "BA",
value: 17093,
cidade: "Macarani"
},
{
uf: "MG",
value: 17089,
cidade: "Resplendor"
},
{
uf: "PR",
value: 17089,
cidade: "Quitandinha"
},
{
uf: "GO",
value: 17088,
cidade: "São Simão"
},
{
uf: "SP",
value: 17080,
cidade: "Araçariguama"
},
{
uf: "AM",
value: 17079,
cidade: "Tonantins"
},
{
uf: "SC",
value: 17078,
cidade: "Balneário Piçarras"
},
{
uf: "AL",
value: 17077,
cidade: "Capela"
},
{
uf: "AL",
value: 17076,
cidade: "Batalha"
},
{
uf: "RS",
value: 17075,
cidade: "Giruá"
},
{
uf: "BA",
value: 17072,
cidade: "Antas"
},
{
uf: "CE",
value: 17069,
cidade: "Croatá"
},
{
uf: "BA",
value: 17066,
cidade: "Coronel João Sá"
},
{
uf: "BA",
value: 17064,
cidade: "Abaré"
},
{
uf: "CE",
value: 17062,
cidade: "Capistrano"
},
{
uf: "SP",
value: 17059,
cidade: "Mirante do Paranapanema"
},
{
uf: "MG",
value: 17048,
cidade: "Carmópolis de Minas"
},
{
uf: "PR",
value: 17048,
cidade: "Mangueirinha"
},
{
uf: "MS",
value: 17043,
cidade: "Mundo Novo"
},
{
uf: "AP",
value: 17032,
cidade: "Mazagão"
},
{
uf: "PB",
value: 17032,
cidade: "Pocinhos"
},
{
uf: "RO",
value: 17029,
cidade: "Cerejeiras"
},
{
uf: "BA",
value: 17029,
cidade: "Tremedal"
},
{
uf: "ES",
value: 17025,
cidade: "Fundão"
},
{
uf: "PB",
value: 17024,
cidade: "Pitimbu"
},
{
uf: "BA",
value: 17013,
cidade: "Central"
},
{
uf: "BA",
value: 17008,
cidade: "Ibipeba"
},
{
uf: "CE",
value: 17002,
cidade: "Jijoca de Jericoacoara"
},
{
uf: "MA",
value: 17002,
cidade: "Sítio Novo"
},
{
uf: "PE",
value: 17000,
cidade: "São Vicente Ferrer"
},
{
uf: "BA",
value: 17000,
cidade: "Umburanas"
},
{
uf: "PB",
value: 16997,
cidade: "Itapororoca"
},
{
uf: "BA",
value: 16995,
cidade: "Pedro Alexandre"
},
{
uf: "MG",
value: 16994,
cidade: "Ladainha"
},
{
uf: "PA",
value: 16949,
cidade: "Terra Santa"
},
{
uf: "PR",
value: 16938,
cidade: "Cerro Azul"
},
{
uf: "SC",
value: 16936,
cidade: "Seara"
},
{
uf: "PE",
value: 16917,
cidade: "Dormentes"
},
{
uf: "BA",
value: 16898,
cidade: "Condeúba"
},
{
uf: "PA",
value: 16891,
cidade: "São Caetano de Odivelas"
},
{
uf: "PB",
value: 16888,
cidade: "Boqueirão"
},
{
uf: "PA",
value: 16875,
cidade: "Trairão"
},
{
uf: "SE",
value: 16864,
cidade: "Japaratuba"
},
{
uf: "SE",
value: 16857,
cidade: "Areia Branca"
},
{
uf: "RO",
value: 16853,
cidade: "Alvorada D'Oeste"
},
{
uf: "SP",
value: 16839,
cidade: "Alumínio"
},
{
uf: "CE",
value: 16827,
cidade: "Tejuçuoca"
},
{
uf: "AP",
value: 16809,
cidade: "Porto Grande"
},
{
uf: "PB",
value: 16776,
cidade: "Juazeirinho"
},
{
uf: "PR",
value: 16759,
cidade: "Terra Roxa"
},
{
uf: "GO",
value: 16757,
cidade: "Caiapônia"
},
{
uf: "SE",
value: 16749,
cidade: "Campo do Brito"
},
{
uf: "PB",
value: 16748,
cidade: "Cacimba de Dentro"
},
{
uf: "CE",
value: 16746,
cidade: "Carnaubal"
},
{
uf: "BA",
value: 16740,
cidade: "Filadélfia"
},
{
uf: "RS",
value: 16722,
cidade: "Agudo"
},
{
uf: "BA",
value: 16713,
cidade: "Nova Canaã"
},
{
uf: "MG",
value: 16708,
cidade: "Ipaba"
},
{
uf: "CE",
value: 16705,
cidade: "Monsenhor Tabosa"
},
{
uf: "PR",
value: 16655,
cidade: "Cândido de Abreu"
},
{
uf: "RS",
value: 16629,
cidade: "Tapes"
},
{
uf: "SP",
value: 16607,
cidade: "Cafelândia"
},
{
uf: "MA",
value: 16604,
cidade: "Bacuri"
},
{
uf: "RJ",
value: 16592,
cidade: "Porto Real"
},
{
uf: "BA",
value: 16585,
cidade: "Sapeaçu"
},
{
uf: "SE",
value: 16519,
cidade: "Cristinápolis"
},
{
uf: "BA",
value: 16516,
cidade: "Tapiramutá"
},
{
uf: "BA",
value: 16467,
cidade: "Jaguaripe"
},
{
uf: "BA",
value: 16466,
cidade: "Urandi"
},
{
uf: "PI",
value: 16451,
cidade: "Água Branca"
},
{
uf: "RR",
value: 16448,
cidade: "Alto Alegre"
},
{
uf: "MS",
value: 16432,
cidade: "Nova Alvorada do Sul"
},
{
uf: "BA",
value: 16425,
cidade: "Ourolândia"
},
{
uf: "SP",
value: 16414,
cidade: "Nazaré Paulista"
},
{
uf: "RS",
value: 16368,
cidade: "São Pedro do Sul"
},
{
uf: "CE",
value: 16359,
cidade: "Alto Santo"
},
{
uf: "PR",
value: 16354,
cidade: "Assaí"
},
{
uf: "SE",
value: 16343,
cidade: "Maruim"
},
{
uf: "PR",
value: 16338,
cidade: "Realeza"
},
{
uf: "AM",
value: 16338,
cidade: "Envira"
},
{
uf: "SC",
value: 16337,
cidade: "Otacílio Costa"
},
{
uf: "SC",
value: 16332,
cidade: "Pinhalzinho"
},
{
uf: "PA",
value: 16318,
cidade: "Belterra"
},
{
uf: "AM",
value: 16317,
cidade: "Anori"
},
{
uf: "PR",
value: 16314,
cidade: "Faxinal"
},
{
uf: "PR",
value: 16312,
cidade: "Corbélia"
},
{
uf: "PA",
value: 16311,
cidade: "Ourém"
},
{
uf: "SP",
value: 16288,
cidade: "Conchas"
},
{
uf: "BA",
value: 16279,
cidade: "Mirangaba"
},
{
uf: "SP",
value: 16259,
cidade: "Macatuba"
},
{
uf: "PB",
value: 16257,
cidade: "Cruz do Espírito Santo"
},
{
uf: "CE",
value: 16203,
cidade: "Aiuaba"
},
{
uf: "RS",
value: 16154,
cidade: "Getúlio Vargas"
},
{
uf: "MG",
value: 16149,
cidade: "Lima Duarte"
},
{
uf: "BA",
value: 16128,
cidade: "Tanque Novo"
},
{
uf: "SC",
value: 16126,
cidade: "Morro da Fumaça"
},
{
uf: "AC",
value: 16091,
cidade: "Xapuri"
},
{
uf: "SC",
value: 16083,
cidade: "Porto Belo"
},
{
uf: "PR",
value: 16078,
cidade: "Matelândia"
},
{
uf: "PB",
value: 16060,
cidade: "Sumé"
},
{
uf: "PE",
value: 16052,
cidade: "Venturosa"
},
{
uf: "RO",
value: 16035,
cidade: "São Francisco do Guaporé"
},
{
uf: "BA",
value: 16021,
cidade: "Belo Campo"
},
{
uf: "SC",
value: 16020,
cidade: "Palmitos"
},
{
uf: "BA",
value: 16014,
cidade: "Malhada"
},
{
uf: "PE",
value: 16007,
cidade: "Lagoa do Carro"
},
{
uf: "MA",
value: 15991,
cidade: "Governador Eugênio Barros"
},
{
uf: "BA",
value: 15961,
cidade: "América Dourada"
},
{
uf: "MG",
value: 15959,
cidade: "Poço Fundo"
},
{
uf: "TO",
value: 15950,
cidade: "Augustinópolis"
},
{
uf: "RS",
value: 15936,
cidade: "Não-Me-Toque"
},
{
uf: "BA",
value: 15899,
cidade: "Souto Soares"
},
{
uf: "MA",
value: 15895,
cidade: "Governador Edison Lobão"
},
{
uf: "PR",
value: 15891,
cidade: "Contenda"
},
{
uf: "PR",
value: 15880,
cidade: "Bituruna"
},
{
uf: "MG",
value: 15862,
cidade: "Montalvânia"
},
{
uf: "RO",
value: 15854,
cidade: "Cujubim"
},
{
uf: "RS",
value: 15849,
cidade: "Restinga Sêca"
},
{
uf: "PA",
value: 15849,
cidade: "Aveiro"
},
{
uf: "RN",
value: 15843,
cidade: "São Paulo do Potengi"
},
{
uf: "SE",
value: 15831,
cidade: "Indiaroba"
},
{
uf: "MG",
value: 15823,
cidade: "Tocantins"
},
{
uf: "PE",
value: 15819,
cidade: "Jataúba"
},
{
uf: "ES",
value: 15809,
cidade: "João Neiva"
},
{
uf: "BA",
value: 15785,
cidade: "Ibicuí"
},
{
uf: "PR",
value: 15776,
cidade: "Terra Boa"
},
{
uf: "SP",
value: 15775,
cidade: "Elias Fausto"
},
{
uf: "PE",
value: 15773,
cidade: "Joaquim Nabuco"
},
{
uf: "GO",
value: 15760,
cidade: "Crixás"
},
{
uf: "GO",
value: 15757,
cidade: "Abadiânia"
},
{
uf: "SC",
value: 15757,
cidade: "Santa Cecília"
},
{
uf: "CE",
value: 15757,
cidade: "Pereiro"
},
{
uf: "BA",
value: 15755,
cidade: "Cipó"
},
{
uf: "MT",
value: 15755,
cidade: "Pedra Preta"
},
{
uf: "CE",
value: 15752,
cidade: "Saboeiro"
},
{
uf: "BA",
value: 15742,
cidade: "Ponto Novo"
},
{
uf: "SP",
value: 15733,
cidade: "Pirapora do Bom Jesus"
},
{
uf: "BA",
value: 15732,
cidade: "Canudos"
},
{
uf: "BA",
value: 15731,
cidade: "Água Fria"
},
{
uf: "SP",
value: 15721,
cidade: "Engenheiro Coelho"
},
{
uf: "PR",
value: 15718,
cidade: "Morretes"
},
{
uf: "MG",
value: 15704,
cidade: "Sabinópolis"
},
{
uf: "BA",
value: 15702,
cidade: "Adustina"
},
{
uf: "SP",
value: 15700,
cidade: "Pedregulho"
},
{
uf: "PE",
value: 15692,
cidade: "Itaquitinga"
},
{
uf: "PA",
value: 15690,
cidade: "Brasil Novo"
},
{
uf: "AL",
value: 15682,
cidade: "Messias"
},
{
uf: "MG",
value: 15667,
cidade: "Poté"
},
{
uf: "MT",
value: 15644,
cidade: "Alto Araguaia"
},
{
uf: "PR",
value: 15638,
cidade: "Sertanópolis"
},
{
uf: "SP",
value: 15635,
cidade: "Salesópolis"
},
{
uf: "BA",
value: 15628,
cidade: "Pindaí"
},
{
uf: "PE",
value: 15615,
cidade: "Lagoa dos Gatos"
},
{
uf: "SP",
value: 15607,
cidade: "Altinópolis"
},
{
uf: "MG",
value: 15582,
cidade: "Passa Quatro"
},
{
uf: "MG",
value: 15553,
cidade: "São João Evangelista"
},
{
uf: "SP",
value: 15540,
cidade: "Cesário Lange"
},
{
uf: "SP",
value: 15524,
cidade: "Itirapina"
},
{
uf: "BA",
value: 15508,
cidade: "Ibitiara"
},
{
uf: "SP",
value: 15501,
cidade: "Severínia"
},
{
uf: "AM",
value: 15486,
cidade: "Beruri"
},
{
uf: "SP",
value: 15471,
cidade: "Itariri"
},
{
uf: "CE",
value: 15467,
cidade: "Piquet Carneiro"
},
{
uf: "PB",
value: 15465,
cidade: "Piancó"
},
{
uf: "CE",
value: 15453,
cidade: "Salitre"
},
{
uf: "SP",
value: 15449,
cidade: "Potirendaba"
},
{
uf: "MA",
value: 15440,
cidade: "Jenipapo dos Vieiras"
},
{
uf: "MG",
value: 15433,
cidade: "Campanha"
},
{
uf: "MA",
value: 15433,
cidade: "Joselândia"
},
{
uf: "SP",
value: 15418,
cidade: "Buritama"
},
{
uf: "MA",
value: 15412,
cidade: "Lago Verde"
},
{
uf: "BA",
value: 15411,
cidade: "Boa Nova"
},
{
uf: "SC",
value: 15409,
cidade: "Itapiranga"
},
{
uf: "BA",
value: 15401,
cidade: "Serra Preta"
},
{
uf: "PR",
value: 15394,
cidade: "Campina da Lagoa"
},
{
uf: "MG",
value: 15374,
cidade: "Nova Resende"
},
{
uf: "BA",
value: 15374,
cidade: "Cairu"
},
{
uf: "RS",
value: 15373,
cidade: "Sananduva"
},
{
uf: "MS",
value: 15372,
cidade: "Porto Murtinho"
},
{
uf: "MG",
value: 15364,
cidade: "Bom Jesus do Galho"
},
{
uf: "MT",
value: 15357,
cidade: "Brasnorte"
},
{
uf: "MG",
value: 15342,
cidade: "Raposos"
},
{
uf: "MT",
value: 15342,
cidade: "Araputanga"
},
{
uf: "CE",
value: 15338,
cidade: "Acarape"
},
{
uf: "BA",
value: 15331,
cidade: "Ipecaetá"
},
{
uf: "SP",
value: 15320,
cidade: "Fartura"
},
{
uf: "SC",
value: 15316,
cidade: "Schroeder"
},
{
uf: "PE",
value: 15309,
cidade: "Saloá"
},
{
uf: "PA",
value: 15298,
cidade: "Bom Jesus do Tocantins"
},
{
uf: "MG",
value: 15290,
cidade: "Capinópolis"
},
{
uf: "MG",
value: 15261,
cidade: "Alvinópolis"
},
{
uf: "RS",
value: 15240,
cidade: "Espumoso"
},
{
uf: "PR",
value: 15221,
cidade: "Terra Rica"
},
{
uf: "AC",
value: 15206,
cidade: "Mâncio Lima"
},
{
uf: "BA",
value: 15205,
cidade: "Igaporã"
},
{
uf: "MG",
value: 15195,
cidade: "Água Boa"
},
{
uf: "BA",
value: 15193,
cidade: "Itagibá"
},
{
uf: "MG",
value: 15189,
cidade: "Chapada do Norte"
},
{
uf: "SC",
value: 15159,
cidade: "Cocal do Sul"
},
{
uf: "AM",
value: 15153,
cidade: "Atalaia do Norte"
},
{
uf: "MA",
value: 15150,
cidade: "Mata Roma"
},
{
uf: "PB",
value: 15149,
cidade: "Coremas"
},
{
uf: "AL",
value: 15149,
cidade: "Ibateguara"
},
{
uf: "AC",
value: 15100,
cidade: "Epitaciolândia"
},
{
uf: "MA",
value: 15098,
cidade: "Fortuna"
},
{
uf: "SP",
value: 15085,
cidade: "Charqueada"
},
{
uf: "RJ",
value: 15082,
cidade: "Natividade"
},
{
uf: "PR",
value: 15079,
cidade: "Bela Vista do Paraíso"
},
{
uf: "BA",
value: 15076,
cidade: "Glória"
},
{
uf: "CE",
value: 15061,
cidade: "Porteiras"
},
{
uf: "PA",
value: 15060,
cidade: "São Francisco do Pará"
},
{
uf: "BA",
value: 15060,
cidade: "Santa Brígida"
},
{
uf: "BA",
value: 15052,
cidade: "Jussara"
},
{
uf: "TO",
value: 15051,
cidade: "Taguatinga"
},
{
uf: "BA",
value: 15051,
cidade: "Novo Triunfo"
},
{
uf: "CE",
value: 15049,
cidade: "Graça"
},
{
uf: "SP",
value: 15039,
cidade: "Pindorama"
},
{
uf: "MG",
value: 15024,
cidade: "Grão Mogol"
},
{
uf: "MG",
value: 15011,
cidade: "Santa Margarida"
},
{
uf: "PE",
value: 15006,
cidade: "Triunfo"
},
{
uf: "MT",
value: 15002,
cidade: "Nobres"
},
{
uf: "CE",
value: 15000,
cidade: "Quixelô"
},
{
uf: "PR",
value: 14983,
cidade: "Candói"
},
{
uf: "MT",
value: 14983,
cidade: "Cotriguaçu"
},
{
uf: "PR",
value: 14981,
cidade: "Iporã"
},
{
uf: "AM",
value: 14979,
cidade: "Boa Vista do Ramos"
},
{
uf: "PR",
value: 14970,
cidade: "Capitão Leônidas Marques"
},
{
uf: "MA",
value: 14959,
cidade: "Apicum-Açu"
},
{
uf: "MG",
value: 14945,
cidade: "Itaú de Minas"
},
{
uf: "MG",
value: 14941,
cidade: "Joaíma"
},
{
uf: "PB",
value: 14936,
cidade: "Taperoá"
},
{
uf: "MA",
value: 14925,
cidade: "Bacabeira"
},
{
uf: "BA",
value: 14924,
cidade: "Itaeté"
},
{
uf: "MG",
value: 14920,
cidade: "Botelhos"
},
{
uf: "RJ",
value: 14900,
cidade: "Sumidouro"
},
{
uf: "SC",
value: 14887,
cidade: "Presidente Getúlio"
},
{
uf: "AC",
value: 14880,
cidade: "Porto Acre"
},
{
uf: "MS",
value: 14875,
cidade: "Iguatemi"
},
{
uf: "PR",
value: 14865,
cidade: "Palmital"
},
{
uf: "PI",
value: 14845,
cidade: "Inhuma"
},
{
uf: "BA",
value: 14836,
cidade: "Biritinga"
},
{
uf: "BA",
value: 14836,
cidade: "Teolândia"
},
{
uf: "BA",
value: 14834,
cidade: "Bonito"
},
{
uf: "MS",
value: 14833,
cidade: "Sonora"
},
{
uf: "RJ",
value: 14827,
cidade: "Cambuci"
},
{
uf: "MA",
value: 14818,
cidade: "Bom Lugar"
},
{
uf: "CE",
value: 14817,
cidade: "Fortim"
},
{
uf: "BA",
value: 14815,
cidade: "Rio do Antônio"
},
{
uf: "SC",
value: 14811,
cidade: "Dionísio Cerqueira"
},
{
uf: "SC",
value: 14810,
cidade: "Pouso Redondo"
},
{
uf: "RR",
value: 14792,
cidade: "Mucajaí"
},
{
uf: "SC",
value: 14785,
cidade: "Correia Pinto"
},
{
uf: "MA",
value: 14784,
cidade: "Buritirana"
},
{
uf: "AL",
value: 14763,
cidade: "Passo de Camaragibe"
},
{
uf: "SC",
value: 14763,
cidade: "Itapoá"
},
{
uf: "SC",
value: 14761,
cidade: "Garuva"
},
{
uf: "AM",
value: 14723,
cidade: "Novo Airão"
},
{
uf: "PB",
value: 14719,
cidade: "Santa Luzia"
},
{
uf: "SP",
value: 14686,
cidade: "Tabatinga"
},
{
uf: "SC",
value: 14674,
cidade: "Massaranduba"
},
{
uf: "PR",
value: 14662,
cidade: "Cafelândia"
},
{
uf: "MG",
value: 14661,
cidade: "Brazópolis"
},
{
uf: "BA",
value: 14653,
cidade: "Acajutiba"
},
{
uf: "PA",
value: 14645,
cidade: "Nova Ipixuna"
},
{
uf: "SP",
value: 14641,
cidade: "Eldorado"
},
{
uf: "BA",
value: 14640,
cidade: "Mascote"
},
{
uf: "SP",
value: 14603,
cidade: "Bady Bassitt"
},
{
uf: "AL",
value: 14603,
cidade: "Satuba"
},
{
uf: "PR",
value: 14598,
cidade: "Tapejara"
},
{
uf: "MG",
value: 14595,
cidade: "Candeias"
},
{
uf: "MG",
value: 14591,
cidade: "Cruzília"
},
{
uf: "PB",
value: 14584,
cidade: "Uiraúna"
},
{
uf: "SP",
value: 14583,
cidade: "Panorama"
},
{
uf: "PR",
value: 14582,
cidade: "Guaraniaçu"
},
{
uf: "SP",
value: 14565,
cidade: "Guareí"
},
{
uf: "SP",
value: 14556,
cidade: "Itajobi"
},
{
uf: "SP",
value: 14549,
cidade: "Itaporanga"
},
{
uf: "PE",
value: 14541,
cidade: "Jurema"
},
{
uf: "PR",
value: 14537,
cidade: "Tijucas do Sul"
},
{
uf: "SP",
value: 14529,
cidade: "Borborema"
},
{
uf: "BA",
value: 14522,
cidade: "Itatim"
},
{
uf: "MA",
value: 14519,
cidade: "Paulino Neves"
},
{
uf: "PI",
value: 14512,
cidade: "Elesbão Veloso"
},
{
uf: "MT",
value: 14493,
cidade: "Vila Bela da Santíssima Trindade"
},
{
uf: "CE",
value: 14476,
cidade: "Barroquinha"
},
{
uf: "MG",
value: 14455,
cidade: "Ataléia"
},
{
uf: "MA",
value: 14436,
cidade: "Conceição do Lago-Açu"
},
{
uf: "MS",
value: 14424,
cidade: "Água Clara"
},
{
uf: "BA",
value: 14414,
cidade: "Andorinha"
},
{
uf: "CE",
value: 14408,
cidade: "Tururu"
},
{
uf: "MG",
value: 14407,
cidade: "Itinga"
},
{
uf: "MG",
value: 14404,
cidade: "Perdizes"
},
{
uf: "ES",
value: 14396,
cidade: "Muqui"
},
{
uf: "MG",
value: 14395,
cidade: "Santa Maria do Suaçuí"
},
{
uf: "MS",
value: 14391,
cidade: "Nioaque"
},
{
uf: "AC",
value: 14389,
cidade: "Rodrigues Alves"
},
{
uf: "BA",
value: 14387,
cidade: "Manoel Vitorino"
},
{
uf: "RS",
value: 14380,
cidade: "Dom Feliciano"
},
{
uf: "RS",
value: 14378,
cidade: "Santo Cristo"
},
{
uf: "SC",
value: 14367,
cidade: "Lauro Muller"
},
{
uf: "SP",
value: 14346,
cidade: "São Simão"
},
{
uf: "SP",
value: 14333,
cidade: "Santa Adélia"
},
{
uf: "PE",
value: 14308,
cidade: "Mirandiba"
},
{
uf: "BA",
value: 14307,
cidade: "Coribe"
},
{
uf: "MT",
value: 14305,
cidade: "Campinápolis"
},
{
uf: "GO",
value: 14300,
cidade: "Orizona"
},
{
uf: "MA",
value: 14297,
cidade: "Itaipava do Grajaú"
},
{
uf: "MG",
value: 14293,
cidade: "Tarumirim"
},
{
uf: "SC",
value: 14293,
cidade: "Bombinhas"
},
{
uf: "PE",
value: 14293,
cidade: "Frei Miguelinho"
},
{
uf: "MA",
value: 14288,
cidade: "Santo Antônio dos Lopes"
},
{
uf: "RS",
value: 14283,
cidade: "Sobradinho"
},
{
uf: "BA",
value: 14282,
cidade: "Brejões"
},
{
uf: "BA",
value: 14276,
cidade: "Ribeira do Amparo"
},
{
uf: "SP",
value: 14269,
cidade: "Tupi Paulista"
},
{
uf: "ES",
value: 14262,
cidade: "Marechal Floriano"
},
{
uf: "CE",
value: 14256,
cidade: "Nova Olinda"
},
{
uf: "RS",
value: 14253,
cidade: "Serafina Corrêa"
},
{
uf: "MG",
value: 14242,
cidade: "Entre Rios de Minas"
},
{
uf: "AL",
value: 14230,
cidade: "Barra de Santo Antônio"
},
{
uf: "AC",
value: 14227,
cidade: "Marechal Thaumaturgo"
},
{
uf: "MG",
value: 14226,
cidade: "Brasilândia de Minas"
},
{
uf: "MA",
value: 14218,
cidade: "Mirinzal"
},
{
uf: "MG",
value: 14216,
cidade: "Maria da Fé"
},
{
uf: "MG",
value: 14206,
cidade: "Capitão Enéas"
},
{
uf: "MG",
value: 14206,
cidade: "Campos Altos"
},
{
uf: "SP",
value: 14202,
cidade: "Auriflama"
},
{
uf: "MG",
value: 14201,
cidade: "Rio Casca"
},
{
uf: "ES",
value: 14199,
cidade: "Boa Esperança"
},
{
uf: "BA",
value: 14191,
cidade: "Barrocas"
},
{
uf: "PR",
value: 14189,
cidade: "Porecatu"
},
{
uf: "PI",
value: 14180,
cidade: "Simões"
},
{
uf: "PR",
value: 14176,
cidade: "Rebouças"
},
{
uf: "MG",
value: 14175,
cidade: "Itanhandu"
},
{
uf: "MG",
value: 14175,
cidade: "Papagaios"
},
{
uf: "RN",
value: 14175,
cidade: "Tangará"
},
{
uf: "MT",
value: 14174,
cidade: "Matupá"
},
{
uf: "BA",
value: 14171,
cidade: "Ibipitanga"
},
{
uf: "PB",
value: 14157,
cidade: "Barra de Santa Rosa"
},
{
uf: "PB",
value: 14153,
cidade: "Teixeira"
},
{
uf: "PR",
value: 14150,
cidade: "Ipiranga"
},
{
uf: "MG",
value: 14149,
cidade: "Rio Piracicaba"
},
{
uf: "SP",
value: 14148,
cidade: "Ipuã"
},
{
uf: "ES",
value: 14134,
cidade: "Itaguaçu"
},
{
uf: "MG",
value: 14121,
cidade: "Felixlândia"
},
{
uf: "BA",
value: 14118,
cidade: "Jiquiriçá"
},
{
uf: "BA",
value: 14115,
cidade: "Jitaúna"
},
{
uf: "RN",
value: 14114,
cidade: "Pedro Velho"
},
{
uf: "SP",
value: 14107,
cidade: "Piquete"
},
{
uf: "PB",
value: 14103,
cidade: "Tavares"
},
{
uf: "PA",
value: 14103,
cidade: "Jacareacanga"
},
{
uf: "CE",
value: 14102,
cidade: "Mucambo"
},
{
uf: "BA",
value: 14098,
cidade: "São Félix"
},
{
uf: "PR",
value: 14093,
cidade: "Rio Azul"
},
{
uf: "PE",
value: 14093,
cidade: "Xexéu"
},
{
uf: "RO",
value: 14091,
cidade: "Monte Negro"
},
{
uf: "AM",
value: 14088,
cidade: "Alvarães"
},
{
uf: "RS",
value: 14084,
cidade: "Crissiumal"
},
{
uf: "BA",
value: 14073,
cidade: "Angical"
},
{
uf: "MA",
value: 14065,
cidade: "Maranhãozinho"
},
{
uf: "MS",
value: 14064,
cidade: "Coronel Sapucaia"
},
{
uf: "RJ",
value: 14063,
cidade: "Italva"
},
{
uf: "MG",
value: 14041,
cidade: "Fronteira"
},
{
uf: "MG",
value: 14003,
cidade: "Itamonte"
},
{
uf: "BA",
value: 13987,
cidade: "Barra do Mendes"
},
{
uf: "RN",
value: 13983,
cidade: "Lagoa Nova"
},
{
uf: "GO",
value: 13976,
cidade: "Guapó"
},
{
uf: "AM",
value: 13974,
cidade: "Guajará"
},
{
uf: "SP",
value: 13973,
cidade: "São Lourenço da Serra"
},
{
uf: "MA",
value: 13973,
cidade: "Araguanã"
},
{
uf: "RS",
value: 13968,
cidade: "Santo Augusto"
},
{
uf: "PE",
value: 13963,
cidade: "Jatobá"
},
{
uf: "PR",
value: 13961,
cidade: "Mamborê"
},
{
uf: "BA",
value: 13960,
cidade: "Andaraí"
},
{
uf: "ES",
value: 13955,
cidade: "Alfredo Chaves"
},
{
uf: "MA",
value: 13954,
cidade: "Primeira Cruz"
},
{
uf: "RN",
value: 13949,
cidade: "Poço Branco"
},
{
uf: "PB",
value: 13942,
cidade: "Jacaraú"
},
{
uf: "PE",
value: 13941,
cidade: "São Benedito do Sul"
},
{
uf: "MA",
value: 13939,
cidade: "Anapurus"
},
{
uf: "BA",
value: 13934,
cidade: "Lagoa Real"
},
{
uf: "MT",
value: 13934,
cidade: "Guiratinga"
},
{
uf: "CE",
value: 13925,
cidade: "Apuiarés"
},
{
uf: "PR",
value: 13923,
cidade: "Curiúva"
},
{
uf: "PR",
value: 13906,
cidade: "Engenheiro Beltrão"
},
{
uf: "RR",
value: 13902,
cidade: "Cantá"
},
{
uf: "PR",
value: 13900,
cidade: "Marmeleiro"
},
{
uf: "PE",
value: 13881,
cidade: "Itapetim"
},
{
uf: "SE",
value: 13874,
cidade: "Frei Paulo"
},
{
uf: "AL",
value: 13872,
cidade: "Poço das Trincheiras"
},
{
uf: "MG",
value: 13872,
cidade: "Guapé"
},
{
uf: "PB",
value: 13872,
cidade: "Gurinhém"
},
{
uf: "RN",
value: 13856,
cidade: "Ipanguaçu"
},
{
uf: "SC",
value: 13852,
cidade: "Corupá"
},
{
uf: "BA",
value: 13850,
cidade: "Baianópolis"
},
{
uf: "ES",
value: 13830,
cidade: "Vila Valério"
},
{
uf: "GO",
value: 13826,
cidade: "Uruana"
},
{
uf: "MG",
value: 13823,
cidade: "Cabo Verde"
},
{
uf: "MA",
value: 13820,
cidade: "Santo Amaro do Maranhão"
},
{
uf: "PI",
value: 13817,
cidade: "Joaquim Pires"
},
{
uf: "PR",
value: 13811,
cidade: "Turvo"
},
{
uf: "RN",
value: 13809,
cidade: "Santana do Matos"
},
{
uf: "MG",
value: 13808,
cidade: "Miraí"
},
{
uf: "MA",
value: 13803,
cidade: "Peri Mirim"
},
{
uf: "MA",
value: 13794,
cidade: "Matões do Norte"
},
{
uf: "BA",
value: 13786,
cidade: "Várzea da Roça"
},
{
uf: "MG",
value: 13778,
cidade: "Dores do Indaiá"
},
{
uf: "PE",
value: 13766,
cidade: "Casinhas"
},
{
uf: "SP",
value: 13763,
cidade: "Santa Branca"
},
{
uf: "PE",
value: 13759,
cidade: "Alagoinha"
},
{
uf: "BA",
value: 13752,
cidade: "Pé de Serra"
},
{
uf: "MG",
value: 13750,
cidade: "Carmo de Minas"
},
{
uf: "BA",
value: 13750,
cidade: "Presidente Dutra"
},
{
uf: "PI",
value: 13745,
cidade: "Palmeirais"
},
{
uf: "BA",
value: 13743,
cidade: "Aracatu"
},
{
uf: "PB",
value: 13739,
cidade: "Soledade"
},
{
uf: "MG",
value: 13731,
cidade: "Areado"
},
{
uf: "CE",
value: 13722,
cidade: "Iracema"
},
{
uf: "RS",
value: 13719,
cidade: "Tenente Portela"
},
{
uf: "MG",
value: 13717,
cidade: "Alterosa"
},
{
uf: "PR",
value: 13706,
cidade: "Carlópolis"
},
{
uf: "PE",
value: 13705,
cidade: "Jupi"
},
{
uf: "PR",
value: 13704,
cidade: "São João do Triunfo"
},
{
uf: "BA",
value: 13695,
cidade: "Boninal"
},
{
uf: "CE",
value: 13693,
cidade: "Meruoca"
},
{
uf: "PR",
value: 13689,
cidade: "Salto do Lontra"
},
{
uf: "GO",
value: 13687,
cidade: "Indiara"
},
{
uf: "SC",
value: 13684,
cidade: "São José do Cedro"
},
{
uf: "MA",
value: 13681,
cidade: "Cidelândia"
},
{
uf: "RO",
value: 13678,
cidade: "Costa Marques"
},
{
uf: "RS",
value: 13676,
cidade: "Cacequi"
},
{
uf: "PA",
value: 13670,
cidade: "Nova Timboteua"
},
{
uf: "PR",
value: 13669,
cidade: "General Carneiro"
},
{
uf: "SP",
value: 13663,
cidade: "Ipaussu"
},
{
uf: "PR",
value: 13663,
cidade: "Alto Paraná"
},
{
uf: "PR",
value: 13661,
cidade: "Rio Bonito do Iguaçu"
},
{
uf: "MG",
value: 13656,
cidade: "Itapagipe"
},
{
uf: "PR",
value: 13654,
cidade: "Planalto"
},
{
uf: "MG",
value: 13653,
cidade: "Bicas"
},
{
uf: "BA",
value: 13652,
cidade: "Presidente Jânio Quadros"
},
{
uf: "BA",
value: 13651,
cidade: "Jacaraci"
},
{
uf: "PI",
value: 13646,
cidade: "Alto Longá"
},
{
uf: "SP",
value: 13645,
cidade: "Boa Esperança do Sul"
},
{
uf: "MG",
value: 13645,
cidade: "Rio Vermelho"
},
{
uf: "BA",
value: 13639,
cidade: "Caetanos"
},
{
uf: "PI",
value: 13639,
cidade: "São Pedro do Piauí"
},
{
uf: "BA",
value: 13636,
cidade: "Cotegipe"
},
{
uf: "MG",
value: 13633,
cidade: "Caldas"
},
{
uf: "PA",
value: 13630,
cidade: "Bonito"
},
{
uf: "SE",
value: 13627,
cidade: "Monte Alegre de Sergipe"
},
{
uf: "MS",
value: 13625,
cidade: "Camapuã"
},
{
uf: "BA",
value: 13625,
cidade: "Uibaí"
},
{
uf: "PR",
value: 13624,
cidade: "Peabiru"
},
{
uf: "AL",
value: 13619,
cidade: "Maribondo"
},
{
uf: "MG",
value: 13619,
cidade: "Virgem da Lapa"
},
{
uf: "ES",
value: 13612,
cidade: "Mantenópolis"
},
{
uf: "BA",
value: 13612,
cidade: "Barro Alto"
},
{
uf: "RS",
value: 13606,
cidade: "Arroio dos Ratos"
},
{
uf: "MG",
value: 13604,
cidade: "Urucuia"
},
{
uf: "PE",
value: 13596,
cidade: "Machados"
},
{
uf: "BA",
value: 13595,
cidade: "Aurelino Leal"
},
{
uf: "PE",
value: 13594,
cidade: "Santa Cruz"
},
{
uf: "PB",
value: 13576,
cidade: "Alagoinha"
},
{
uf: "SP",
value: 13570,
cidade: "Presidente Bernardes"
},
{
uf: "PR",
value: 13524,
cidade: "Ribeirão do Pinhal"
},
{
uf: "RN",
value: 13507,
cidade: "Alexandria"
},
{
uf: "RN",
value: 13506,
cidade: "Jardim de Piranhas"
},
{
uf: "SE",
value: 13503,
cidade: "Carmópolis"
},
{
uf: "BA",
value: 13456,
cidade: "Salinas da Margarida"
},
{
uf: "PE",
value: 13439,
cidade: "Primavera"
},
{
uf: "MG",
value: 13435,
cidade: "Matias Barbosa"
},
{
uf: "RN",
value: 13432,
cidade: "Pendências"
},
{
uf: "PA",
value: 13431,
cidade: "Vitória do Xingu"
},
{
uf: "PR",
value: 13419,
cidade: "Araruna"
},
{
uf: "GO",
value: 13404,
cidade: "Mozarlândia"
},
{
uf: "PE",
value: 13371,
cidade: "Santa Filomena"
},
{
uf: "MA",
value: 13369,
cidade: "Campestre do Maranhão"
},
{
uf: "RJ",
value: 13359,
cidade: "Carapebus"
},
{
uf: "BA",
value: 13344,
cidade: "Santa Luzia"
},
{
uf: "BA",
value: 13343,
cidade: "Igrapiúna"
},
{
uf: "SP",
value: 13332,
cidade: "Maracaí"
},
{
uf: "MG",
value: 13311,
cidade: "Abre Campo"
},
{
uf: "SC",
value: 13309,
cidade: "Nova Veneza"
},
{
uf: "RS",
value: 13289,
cidade: "Cerro Largo"
},
{
uf: "GO",
value: 13283,
cidade: "Caçu"
},
{
uf: "BA",
value: 13280,
cidade: "Cristópolis"
},
{
uf: "PI",
value: 13278,
cidade: "Demerval Lobão"
},
{
uf: "RJ",
value: 13237,
cidade: "Engenheiro Paulo de Frontin"
},
{
uf: "SP",
value: 13226,
cidade: "Pacaembu"
},
{
uf: "BA",
value: 13210,
cidade: "Candiba"
},
{
uf: "BA",
value: 13209,
cidade: "Itaguaçu da Bahia"
},
{
uf: "BA",
value: 13192,
cidade: "Heliópolis"
},
{
uf: "MG",
value: 13192,
cidade: "Mário Campos"
},
{
uf: "MA",
value: 13181,
cidade: "Olinda Nova do Maranhão"
},
{
uf: "PE",
value: 13180,
cidade: "Orocó"
},
{
uf: "PR",
value: 13169,
cidade: "Manoel Ribas"
},
{
uf: "PA",
value: 13155,
cidade: "São João do Araguaia"
},
{
uf: "SE",
value: 13137,
cidade: "Pacatuba"
},
{
uf: "PR",
value: 13132,
cidade: "Santa Izabel do Oeste"
},
{
uf: "PB",
value: 13123,
cidade: "Brejo do Cruz"
},
{
uf: "SP",
value: 13105,
cidade: "Pinhalzinho"
},
{
uf: "CE",
value: 13086,
cidade: "Milhã"
},
{
uf: "BA",
value: 13073,
cidade: "Várzea Nova"
},
{
uf: "PR",
value: 13067,
cidade: "Nova Londrina"
},
{
uf: "MG",
value: 13061,
cidade: "Monte Belo"
},
{
uf: "PE",
value: 13055,
cidade: "Tracunhaém"
},
{
uf: "BA",
value: 13051,
cidade: "Itagi"
},
{
uf: "MG",
value: 13049,
cidade: "Astolfo Dutra"
},
{
uf: "BA",
value: 13048,
cidade: "São Félix do Coribe"
},
{
uf: "AL",
value: 13047,
cidade: "Senador Rui Palmeira"
},
{
uf: "PA",
value: 13045,
cidade: "Senador José Porfírio"
},
{
uf: "MG",
value: 13042,
cidade: "Mirabela"
},
{
uf: "MT",
value: 13033,
cidade: "Querência"
},
{
uf: "PE",
value: 13021,
cidade: "Santa Maria do Cambucá"
},
{
uf: "BA",
value: 13007,
cidade: "Rio de Contas"
},
{
uf: "SP",
value: 13005,
cidade: "Sete Barras"
},
{
uf: "SP",
value: 13000,
cidade: "Patrocínio Paulista"
},
{
uf: "SC",
value: 12999,
cidade: "Governador Celso Ramos"
},
{
uf: "SC",
value: 12998,
cidade: "Siderópolis"
},
{
uf: "RN",
value: 12992,
cidade: "Upanema"
},
{
uf: "CE",
value: 12991,
cidade: "Frecheirinha"
},
{
uf: "RO",
value: 12974,
cidade: "Urupá"
},
{
uf: "PB",
value: 12973,
cidade: "Serra Branca"
},
{
uf: "PR",
value: 12973,
cidade: "Mallet"
},
{
uf: "SE",
value: 12969,
cidade: "Santa Luzia do Itanhy"
},
{
uf: "PR",
value: 12952,
cidade: "Cantagalo"
},
{
uf: "MG",
value: 12949,
cidade: "Conceição do Rio Verde"
},
{
uf: "SE",
value: 12938,
cidade: "Japoatã"
},
{
uf: "RN",
value: 12924,
cidade: "Arês"
},
{
uf: "PB",
value: 12923,
cidade: "Puxinanã"
},
{
uf: "CE",
value: 12922,
cidade: "Ibaretama"
},
{
uf: "PB",
value: 12902,
cidade: "Massaranduba"
},
{
uf: "SP",
value: 12885,
cidade: "Tarumã"
},
{
uf: "CE",
value: 12883,
cidade: "Uruoca"
},
{
uf: "SE",
value: 12855,
cidade: "Tomar do Geru"
},
{
uf: "CE",
value: 12853,
cidade: "Choró"
},
{
uf: "SP",
value: 12848,
cidade: "Flórida Paulista"
},
{
uf: "MG",
value: 12848,
cidade: "Jequeri"
},
{
uf: "BA",
value: 12836,
cidade: "Dário Meira"
},
{
uf: "RS",
value: 12833,
cidade: "Antônio Prado"
},
{
uf: "RO",
value: 12816,
cidade: "Alto Alegre dos Parecis"
},
{
uf: "PR",
value: 12815,
cidade: "Ivaí"
},
{
uf: "MG",
value: 12812,
cidade: "Nova Ponte"
},
{
uf: "BA",
value: 12803,
cidade: "Terra Nova"
},
{
uf: "CE",
value: 12800,
cidade: "Miraíma"
},
{
uf: "SP",
value: 12799,
cidade: "Quatá"
},
{
uf: "RJ",
value: 12793,
cidade: "Quatis"
},
{
uf: "BA",
value: 12783,
cidade: "Piripá"
},
{
uf: "RS",
value: 12780,
cidade: "Pinheiro Machado"
},
{
uf: "PE",
value: 12776,
cidade: "Barra de Guabiraba"
},
{
uf: "AM",
value: 12738,
cidade: "Canutama"
},
{
uf: "SP",
value: 12737,
cidade: "Tapiratiba"
},
{
uf: "PE",
value: 12725,
cidade: "Tacaimbó"
},
{
uf: "MG",
value: 12722,
cidade: "Águas Vermelhas"
},
{
uf: "SP",
value: 12714,
cidade: "Urupês"
},
{
uf: "PA",
value: 12697,
cidade: "Piçarra"
},
{
uf: "BA",
value: 12693,
cidade: "Itiruçu"
},
{
uf: "MG",
value: 12684,
cidade: "Mato Verde"
},
{
uf: "RS",
value: 12668,
cidade: "Cidreira"
},
{
uf: "RO",
value: 12665,
cidade: "Campo Novo de Rondônia"
},
{
uf: "PR",
value: 12656,
cidade: "Barbosa Ferraz"
},
{
uf: "PB",
value: 12653,
cidade: "Arara"
},
{
uf: "RS",
value: 12648,
cidade: "Arroio do Tigre"
},
{
uf: "TO",
value: 12623,
cidade: "Miranorte"
},
{
uf: "CE",
value: 12615,
cidade: "Chaval"
},
{
uf: "MG",
value: 12611,
cidade: "Martinho Campos"
},
{
uf: "PR",
value: 12606,
cidade: "Moreira Sales"
},
{
uf: "MG",
value: 12602,
cidade: "Cambuquira"
},
{
uf: "RJ",
value: 12600,
cidade: "Cardoso Moreira"
},
{
uf: "BA",
value: 12592,
cidade: "Sítio do Quinto"
},
{
uf: "BA",
value: 12592,
cidade: "Mansidão"
},
{
uf: "MA",
value: 12579,
cidade: "Davinópolis"
},
{
uf: "RS",
value: 12572,
cidade: "Barra do Ribeiro"
},
{
uf: "MA",
value: 12565,
cidade: "Centro do Guilherme"
},
{
uf: "AP",
value: 12563,
cidade: "Tartarugalzinho"
},
{
uf: "MA",
value: 12550,
cidade: "Igarapé do Meio"
},
{
uf: "GO",
value: 12548,
cidade: "Vianópolis"
},
{
uf: "AC",
value: 12538,
cidade: "Acrelândia"
},
{
uf: "PE",
value: 12537,
cidade: "Buenos Aires"
},
{
uf: "BA",
value: 12530,
cidade: "Nilo Peçanha"
},
{
uf: "ES",
value: 12523,
cidade: "Iconha"
},
{
uf: "BA",
value: 12491,
cidade: "Caldeirão Grande"
},
{
uf: "PB",
value: 12491,
cidade: "Mogeiro"
},
{
uf: "BA",
value: 12485,
cidade: "Wanderley"
},
{
uf: "BA",
value: 12477,
cidade: "Mortugaba"
},
{
uf: "MA",
value: 12464,
cidade: "Nina Rodrigues"
},
{
uf: "PE",
value: 12452,
cidade: "Cortês"
},
{
uf: "PR",
value: 12435,
cidade: "Santa Mariana"
},
{
uf: "RS",
value: 12434,
cidade: "Xangri-lá"
},
{
uf: "AP",
value: 12428,
cidade: "Vitória do Jari"
},
{
uf: "GO",
value: 12427,
cidade: "Iaciara"
},
{
uf: "PA",
value: 12411,
cidade: "Quatipuru"
},
{
uf: "PE",
value: 12404,
cidade: "Chã de Alegria"
},
{
uf: "RN",
value: 12404,
cidade: "Guamaré"
},
{
uf: "RN",
value: 12374,
cidade: "Governador Dix-Sept Rosado"
},
{
uf: "MG",
value: 12372,
cidade: "Itaguara"
},
{
uf: "BA",
value: 12371,
cidade: "Nordestina"
},
{
uf: "RS",
value: 12359,
cidade: "Feliz"
},
{
uf: "RN",
value: 12356,
cidade: "São José do Campestre"
},
{
uf: "SC",
value: 12355,
cidade: "Ilhota"
},
{
uf: "MS",
value: 12350,
cidade: "Paranhos"
},
{
uf: "BA",
value: 12344,
cidade: "Serrolândia"
},
{
uf: "CE",
value: 12332,
cidade: "São Luís do Curu"
},
{
uf: "AL",
value: 12325,
cidade: "Flexeiras"
},
{
uf: "PR",
value: 12324,
cidade: "Jardim Alegre"
},
{
uf: "RS",
value: 12320,
cidade: "Cruzeiro do Sul"
},
{
uf: "BA",
value: 12311,
cidade: "Licínio de Almeida"
},
{
uf: "MA",
value: 12309,
cidade: "São João do Carú"
},
{
uf: "RN",
value: 12305,
cidade: "Alto do Rodrigues"
},
{
uf: "MG",
value: 12300,
cidade: "Berilo"
},
{
uf: "PR",
value: 12262,
cidade: "Tamarana"
},
{
uf: "MG",
value: 12256,
cidade: "Lagoa Dourada"
},
{
uf: "PA",
value: 12254,
cidade: "Curuá"
},
{
uf: "SP",
value: 12251,
cidade: "Duartina"
},
{
uf: "BA",
value: 12249,
cidade: "Mulungu do Morro"
},
{
uf: "ES",
value: 12240,
cidade: "Santa Leopoldina"
},
{
uf: "PE",
value: 12230,
cidade: "Maraial"
},
{
uf: "SP",
value: 12226,
cidade: "Cananéia"
},
{
uf: "PR",
value: 12225,
cidade: "Jaguapitã"
},
{
uf: "SC",
value: 12190,
cidade: "Nova Trento"
},
{
uf: "MG",
value: 12176,
cidade: "Ibiraci"
},
{
uf: "MG",
value: 12173,
cidade: "Andrelândia"
},
{
uf: "SP",
value: 12173,
cidade: "Itapuí"
},
{
uf: "RN",
value: 12171,
cidade: "Ielmo Marinho"
},
{
uf: "MG",
value: 12159,
cidade: "Alto Rio Doce"
},
{
uf: "MA",
value: 12146,
cidade: "São Francisco do Maranhão"
},
{
uf: "MS",
value: 12139,
cidade: "Deodápolis"
},
{
uf: "SP",
value: 12135,
cidade: "Ribeirão Bonito"
},
{
uf: "MG",
value: 12134,
cidade: "Jacinto"
},
{
uf: "PE",
value: 12132,
cidade: "Lagoa do Ouro"
},
{
uf: "MT",
value: 12127,
cidade: "Nova Canaã do Norte"
},
{
uf: "RS",
value: 12124,
cidade: "Mostardas"
},
{
uf: "SP",
value: 12114,
cidade: "Chavantes"
},
{
uf: "RN",
value: 12113,
cidade: "Jardim do Seridó"
},
{
uf: "SP",
value: 12099,
cidade: "São Sebastião da Grama"
},
{
uf: "MA",
value: 12081,
cidade: "Guimarães"
},
{
uf: "PI",
value: 12077,
cidade: "Simplício Mendes"
},
{
uf: "RS",
value: 12074,
cidade: "Nonoai"
},
{
uf: "SP",
value: 12072,
cidade: "Piratininga"
},
{
uf: "GO",
value: 12066,
cidade: "Flores de Goiás"
},
{
uf: "TO",
value: 12064,
cidade: "Goiatins"
},
{
uf: "AL",
value: 12060,
cidade: "Novo Lino"
},
{
uf: "BA",
value: 12055,
cidade: "Retirolândia"
},
{
uf: "BA",
value: 12050,
cidade: "Sítio do Mato"
},
{
uf: "MA",
value: 12049,
cidade: "Bela Vista do Maranhão"
},
{
uf: "SE",
value: 12042,
cidade: "Malhador"
},
{
uf: "MG",
value: 12040,
cidade: "Ubaporanga"
},
{
uf: "SP",
value: 12038,
cidade: "Mineiros do Tietê"
},
{
uf: "AL",
value: 12029,
cidade: "Jequiá da Praia"
},
{
uf: "MA",
value: 12028,
cidade: "São Pedro da Água Branca"
},
{
uf: "CE",
value: 12009,
cidade: "Ipaumirim"
},
{
uf: "MT",
value: 12006,
cidade: "Marcelândia"
},
{
uf: "CE",
value: 12005,
cidade: "Palmácia"
},
{
uf: "PE",
value: 12003,
cidade: "Betânia"
},
{
uf: "CE",
value: 12001,
cidade: "Poranga"
},
{
uf: "MA",
value: 11990,
cidade: "Satubinha"
},
{
uf: "BA",
value: 11990,
cidade: "Iramaia"
},
{
uf: "PB",
value: 11976,
cidade: "Salgado de São Félix"
},
{
uf: "RN",
value: 11964,
cidade: "Patu"
},
{
uf: "GO",
value: 11927,
cidade: "Nova Crixás"
},
{
uf: "MA",
value: 11921,
cidade: "Governador Newton Bello"
},
{
uf: "BA",
value: 11918,
cidade: "Rio do Pires"
},
{
uf: "ES",
value: 11915,
cidade: "Brejetuba"
},
{
uf: "PI",
value: 11897,
cidade: "Porto"
},
{
uf: "AM",
value: 11891,
cidade: "Uarini"
},
{
uf: "MG",
value: 11885,
cidade: "Rio Paranaíba"
},
{
uf: "RS",
value: 11880,
cidade: "Salto do Jacuí"
},
{
uf: "RO",
value: 11878,
cidade: "Mirante da Serra"
},
{
uf: "PR",
value: 11875,
cidade: "Jataizinho"
},
{
uf: "PR",
value: 11866,
cidade: "Nova Aurora"
},
{
uf: "MG",
value: 11856,
cidade: "Itanhomi"
},
{
uf: "SC",
value: 11854,
cidade: "Turvo"
},
{
uf: "BA",
value: 11845,
cidade: "Saúde"
},
{
uf: "SC",
value: 11838,
cidade: "Lebon Régis"
},
{
uf: "RN",
value: 11836,
cidade: "Taipu"
},
{
uf: "MG",
value: 11836,
cidade: "Carmo da Cachoeira"
},
{
uf: "MS",
value: 11826,
cidade: "Brasilândia"
},
{
uf: "PR",
value: 11824,
cidade: "Três Barras do Paraná"
},
{
uf: "BA",
value: 11814,
cidade: "Banzaê"
},
{
uf: "SP",
value: 11805,
cidade: "Cardoso"
},
{
uf: "MG",
value: 11798,
cidade: "Itaipé"
},
{
uf: "RS",
value: 11789,
cidade: "Bom Princípio"
},
{
uf: "PB",
value: 11788,
cidade: "Paulista"
},
{
uf: "PE",
value: 11782,
cidade: "Carnaubeira da Penha"
},
{
uf: "PE",
value: 11779,
cidade: "Iguaracy"
},
{
uf: "MG",
value: 11775,
cidade: "Santo Antônio do Jacinto"
},
{
uf: "PR",
value: 11772,
cidade: "Paraíso do Norte"
},
{
uf: "ES",
value: 11771,
cidade: "Água Doce do Norte"
},
{
uf: "SP",
value: 11769,
cidade: "Morungaba"
},
{
uf: "PE",
value: 11768,
cidade: "Santa Cruz da Baixa Verde"
},
{
uf: "SP",
value: 11768,
cidade: "Joanópolis"
},
{
uf: "MG",
value: 11749,
cidade: "Mar de Espanha"
},
{
uf: "SC",
value: 11748,
cidade: "Campo Alegre"
},
{
uf: "PI",
value: 11733,
cidade: "Pimenteiras"
},
{
uf: "PB",
value: 11730,
cidade: "Lucena"
},
{
uf: "PR",
value: 11729,
cidade: "Querência do Norte"
},
{
uf: "ES",
value: 11723,
cidade: "Irupi"
},
{
uf: "MG",
value: 11715,
cidade: "São João das Missões"
},
{
uf: "MS",
value: 11694,
cidade: "Eldorado"
},
{
uf: "MG",
value: 11681,
cidade: "Ubaí"
},
{
uf: "ES",
value: 11681,
cidade: "Conceição do Castelo"
},
{
uf: "MG",
value: 11681,
cidade: "Gouveia"
},
{
uf: "SC",
value: 11672,
cidade: "Imaruí"
},
{
uf: "MA",
value: 11661,
cidade: "Santana do Maranhão"
},
{
uf: "MA",
value: 11646,
cidade: "Fortaleza dos Nogueiras"
},
{
uf: "MT",
value: 11643,
cidade: "Nova Bandeirantes"
},
{
uf: "RO",
value: 11629,
cidade: "Seringueiras"
},
{
uf: "RS",
value: 11612,
cidade: "Capela de Santana"
},
{
uf: "MT",
value: 11609,
cidade: "Nossa Senhora do Livramento"
},
{
uf: "CE",
value: 11607,
cidade: "Pacoti"
},
{
uf: "MA",
value: 11581,
cidade: "Água Doce do Maranhão"
},
{
uf: "GO",
value: 11580,
cidade: "Firminópolis"
},
{
uf: "RN",
value: 11577,
cidade: "Brejinho"
},
{
uf: "BA",
value: 11561,
cidade: "Araças"
},
{
uf: "BA",
value: 11554,
cidade: "Antônio Cardoso"
},
{
uf: "RN",
value: 11549,
cidade: "Angicos"
},
{
uf: "MA",
value: 11541,
cidade: "Presidente Juscelino"
},
{
uf: "TO",
value: 11539,
cidade: "Pedro Afonso"
},
{
uf: "PR",
value: 11537,
cidade: "Roncador"
},
{
uf: "CE",
value: 11529,
cidade: "Aratuba"
},
{
uf: "BA",
value: 11527,
cidade: "Capela do Alto Alegre"
},
{
uf: "PR",
value: 11525,
cidade: "São João do Ivaí"
},
{
uf: "GO",
value: 11521,
cidade: "Maurilândia"
},
{
uf: "RS",
value: 11519,
cidade: "Bom Jesus"
},
{
uf: "PE",
value: 11501,
cidade: "Jaqueira"
},
{
uf: "PR",
value: 11500,
cidade: "Santa Maria do Oeste"
},
{
uf: "MG",
value: 11488,
cidade: "Ilicínea"
},
{
uf: "CE",
value: 11485,
cidade: "Mulungu"
},
{
uf: "TO",
value: 11484,
cidade: "Xambioá"
},
{
uf: "AL",
value: 11480,
cidade: "Quebrangulo"
},
{
uf: "MT",
value: 11478,
cidade: "Itiquira"
},
{
uf: "MG",
value: 11476,
cidade: "Campo do Meio"
},
{
uf: "RS",
value: 11473,
cidade: "Jaguari"
},
{
uf: "RS",
value: 11472,
cidade: "Bom Retiro do Sul"
},
{
uf: "PR",
value: 11472,
cidade: "Uraí"
},
{
uf: "MG",
value: 11467,
cidade: "Pedralva"
},
{
uf: "BA",
value: 11431,
cidade: "Tabocas do Brejo Velho"
},
{
uf: "PE",
value: 11430,
cidade: "Ferreiros"
},
{
uf: "MT",
value: 11430,
cidade: "Juscimeira"
},
{
uf: "RJ",
value: 11423,
cidade: "Areal"
},
{
uf: "MA",
value: 11423,
cidade: "Lima Campos"
},
{
uf: "BA",
value: 11420,
cidade: "Caatiba"
},
{
uf: "RN",
value: 11413,
cidade: "Montanhas"
},
{
uf: "SE",
value: 11410,
cidade: "Santo Amaro das Brotas"
},
{
uf: "MA",
value: 11407,
cidade: "Axixá"
},
{
uf: "SE",
value: 11405,
cidade: "Gararu"
},
{
uf: "PB",
value: 11405,
cidade: "Fagundes"
},
{
uf: "MA",
value: 11390,
cidade: "Loreto"
},
{
uf: "RN",
value: 11385,
cidade: "Tibau do Sul"
},
{
uf: "PA",
value: 11381,
cidade: "Colares"
},
{
uf: "MG",
value: 11365,
cidade: "Canápolis"
},
{
uf: "SP",
value: 11363,
cidade: "Tabapuã"
},
{
uf: "MG",
value: 11355,
cidade: "Teixeiras"
},
{
uf: "BA",
value: 11355,
cidade: "Dom Basílio"
},
{
uf: "PE",
value: 11353,
cidade: "Belém de Maria"
},
{
uf: "PB",
value: 11352,
cidade: "Imaculada"
},
{
uf: "AL",
value: 11347,
cidade: "Paripueira"
},
{
uf: "MG",
value: 11345,
cidade: "Ponto dos Volantes"
},
{
uf: "CE",
value: 11343,
cidade: "Ipaporanga"
},
{
uf: "PR",
value: 11337,
cidade: "São Jerônimo da Serra"
},
{
uf: "MG",
value: 11337,
cidade: "Santa Juliana"
},
{
uf: "CE",
value: 11335,
cidade: "Ibicuitinga"
},
{
uf: "ES",
value: 11325,
cidade: "Rio Novo do Sul"
},
{
uf: "SP",
value: 11310,
cidade: "Avanhandava"
},
{
uf: "SP",
value: 11309,
cidade: "Queluz"
},
{
uf: "CE",
value: 11308,
cidade: "Paramoti"
},
{
uf: "PR",
value: 11300,
cidade: "Balsa Nova"
},
{
uf: "SP",
value: 11299,
cidade: "Holambra"
},
{
uf: "MT",
value: 11291,
cidade: "Terra Nova do Norte"
},
{
uf: "MG",
value: 11286,
cidade: "Cristais"
},
{
uf: "SP",
value: 11286,
cidade: "Luís Antônio"
},
{
uf: "PR",
value: 11274,
cidade: "Imbaú"
},
{
uf: "ES",
value: 11273,
cidade: "São Roque do Canaã"
},
{
uf: "GO",
value: 11272,
cidade: "São Domingos"
},
{
uf: "GO",
value: 11266,
cidade: "Edéia"
},
{
uf: "GO",
value: 11266,
cidade: "Piranhas"
},
{
uf: "MA",
value: 11258,
cidade: "Vila Nova dos Martírios"
},
{
uf: "SP",
value: 11256,
cidade: "Serra Azul"
},
{
uf: "PE",
value: 11242,
cidade: "Poção"
},
{
uf: "PR",
value: 11241,
cidade: "Nova Laranjeiras"
},
{
uf: "PE",
value: 11240,
cidade: "Sairé"
},
{
uf: "PR",
value: 11236,
cidade: "Piên"
},
{
uf: "BA",
value: 11229,
cidade: "Macajuba"
},
{
uf: "PR",
value: 11222,
cidade: "Florestópolis"
},
{
uf: "RS",
value: 11210,
cidade: "Santo Antônio das Missões"
},
{
uf: "SP",
value: 11208,
cidade: "Divinolândia"
},
{
uf: "MT",
value: 11201,
cidade: "Juruena"
},
{
uf: "BA",
value: 11201,
cidade: "Saubara"
},
{
uf: "PB",
value: 11191,
cidade: "Pilar"
},
{
uf: "PR",
value: 11190,
cidade: "Centenário do Sul"
},
{
uf: "ES",
value: 11178,
cidade: "Ibiraçu"
},
{
uf: "BA",
value: 11154,
cidade: "Botuporã"
},
{
uf: "BA",
value: 11145,
cidade: "Matina"
},
{
uf: "RS",
value: 11133,
cidade: "Barros Cassal"
},
{
uf: "PE",
value: 11132,
cidade: "Moreilândia"
},
{
uf: "PE",
value: 11125,
cidade: "Calçado"
},
{
uf: "PI",
value: 11117,
cidade: "Fronteiras"
},
{
uf: "MG",
value: 11114,
cidade: "Antônio Carlos"
},
{
uf: "GO",
value: 11111,
cidade: "Campinorte"
},
{
uf: "PI",
value: 11109,
cidade: "Itainópolis"
},
{
uf: "ES",
value: 11107,
cidade: "Marilândia"
},
{
uf: "RN",
value: 11100,
cidade: "Passa e Fica"
},
{
uf: "BA",
value: 11077,
cidade: "Brejolândia"
},
{
uf: "RS",
value: 11077,
cidade: "Vale do Sol"
},
{
uf: "PI",
value: 11067,
cidade: "Avelino Lopes"
},
{
uf: "MA",
value: 11063,
cidade: "Altamira do Maranhão"
},
{
uf: "PR",
value: 11062,
cidade: "Cidade Gaúcha"
},
{
uf: "SP",
value: 11051,
cidade: "Palestina"
},
{
uf: "AL",
value: 11047,
cidade: "Olivença"
},
{
uf: "PB",
value: 11041,
cidade: "São Sebastião de Lagoa de Roça"
},
{
uf: "MA",
value: 11041,
cidade: "Igarapé Grande"
},
{
uf: "SP",
value: 11036,
cidade: "Valentim Gentil"
},
{
uf: "RN",
value: 11035,
cidade: "Acari"
},
{
uf: "MG",
value: 11034,
cidade: "Cachoeira de Minas"
},
{
uf: "PR",
value: 11032,
cidade: "Céu Azul"
},
{
uf: "SC",
value: 11031,
cidade: "Ponte Serrada"
},
{
uf: "MT",
value: 11031,
cidade: "Porto Esperidião"
},
{
uf: "MT",
value: 11028,
cidade: "Cláudia"
},
{
uf: "BA",
value: 11015,
cidade: "Antônio Gonçalves"
},
{
uf: "SE",
value: 11001,
cidade: "Moita Bonita"
},
{
uf: "PE",
value: 11001,
cidade: "Paranatama"
},
{
uf: "BA",
value: 10995,
cidade: "Itapé"
},
{
uf: "SC",
value: 10993,
cidade: "São Ludgero"
},
{
uf: "PE",
value: 10991,
cidade: "Santa Terezinha"
},
{
uf: "MT",
value: 10990,
cidade: "Carlinda"
},
{
uf: "PR",
value: 10987,
cidade: "Bocaiúva do Sul"
},
{
uf: "TO",
value: 10981,
cidade: "Wanderlândia"
},
{
uf: "AM",
value: 10975,
cidade: "Caapiranga"
},
{
uf: "RS",
value: 10969,
cidade: "Palmares do Sul"
},
{
uf: "AL",
value: 10961,
cidade: "Santana do Mundaú"
},
{
uf: "PI",
value: 10953,
cidade: "Capitão de Campos"
},
{
uf: "RR",
value: 10943,
cidade: "Bonfim"
},
{
uf: "PR",
value: 10943,
cidade: "Inácio Martins"
},
{
uf: "MA",
value: 10940,
cidade: "Serrano do Maranhão"
},
{
uf: "MS",
value: 10936,
cidade: "Batayporã"
},
{
uf: "SP",
value: 10934,
cidade: "Palmares Paulista"
},
{
uf: "MA",
value: 10934,
cidade: "Lagoa do Mato"
},
{
uf: "MT",
value: 10933,
cidade: "Feliz Natal"
},
{
uf: "RJ",
value: 10930,
cidade: "Duas Barras"
},
{
uf: "MG",
value: 10927,
cidade: "Carmo da Mata"
},
{
uf: "AL",
value: 10926,
cidade: "Coité do Nóia"
},
{
uf: "SC",
value: 10922,
cidade: "Rodeio"
},
{
uf: "RN",
value: 10916,
cidade: "Cerro Corá"
},
{
uf: "MG",
value: 10913,
cidade: "Resende Costa"
},
{
uf: "AL",
value: 10912,
cidade: "Ouro Branco"
},
{
uf: "BA",
value: 10900,
cidade: "Iuiú"
},
{
uf: "RS",
value: 10897,
cidade: "Seberi"
},
{
uf: "SP",
value: 10896,
cidade: "Ibirá"
},
{
uf: "MG",
value: 10892,
cidade: "Bueno Brandão"
},
{
uf: "MG",
value: 10885,
cidade: "Setubinha"
},
{
uf: "ES",
value: 10881,
cidade: "Itarana"
},
{
uf: "AL",
value: 10880,
cidade: "Dois Riachos"
},
{
uf: "ES",
value: 10879,
cidade: "Jerônimo Monteiro"
},
{
uf: "SE",
value: 10878,
cidade: "Arauá"
},
{
uf: "ES",
value: 10869,
cidade: "Governador Lindenberg"
},
{
uf: "GO",
value: 10863,
cidade: "Paraúna"
},
{
uf: "MG",
value: 10862,
cidade: "Piraúba"
},
{
uf: "BA",
value: 10859,
cidade: "Érico Cardoso"
},
{
uf: "SP",
value: 10859,
cidade: "Bocaina"
},
{
uf: "RS",
value: 10856,
cidade: "Balneário Pinhal"
},
{
uf: "BA",
value: 10852,
cidade: "Pau Brasil"
},
{
uf: "MG",
value: 10845,
cidade: "Estiva"
},
{
uf: "SP",
value: 10844,
cidade: "Parapuã"
},
{
uf: "RN",
value: 10844,
cidade: "Afonso Bezerra"
},
{
uf: "MG",
value: 10837,
cidade: "Ferros"
},
{
uf: "PR",
value: 10832,
cidade: "Primeiro de Maio"
},
{
uf: "SP",
value: 10828,
cidade: "Taguaí"
},
{
uf: "RN",
value: 10827,
cidade: "São Tomé"
},
{
uf: "ES",
value: 10826,
cidade: "Laranja da Terra"
},
{
uf: "MA",
value: 10814,
cidade: "São João do Paraíso"
},
{
uf: "MG",
value: 10805,
cidade: "Chapada Gaúcha"
},
{
uf: "PB",
value: 10804,
cidade: "Bonito de Santa Fé"
},
{
uf: "AM",
value: 10802,
cidade: "Juruá"
},
{
uf: "MS",
value: 10780,
cidade: "Sete Quedas"
},
{
uf: "PE",
value: 10778,
cidade: "Cedro"
},
{
uf: "SP",
value: 10775,
cidade: "Bernardino de Campos"
},
{
uf: "AP",
value: 10772,
cidade: "Pedra Branca do Amapari"
},
{
uf: "CE",
value: 10771,
cidade: "Alcântaras"
},
{
uf: "SP",
value: 10769,
cidade: "Vera Cruz"
},
{
uf: "MA",
value: 10766,
cidade: "Alto Parnaíba"
},
{
uf: "SP",
value: 10765,
cidade: "Getulina"
},
{
uf: "PI",
value: 10761,
cidade: "Curimatá"
},
{
uf: "PB",
value: 10759,
cidade: "Manaíra"
},
{
uf: "MT",
value: 10748,
cidade: "Porto Alegre do Norte"
},
{
uf: "MG",
value: 10746,
cidade: "Icaraí de Minas"
},
{
uf: "PR",
value: 10736,
cidade: "Joaquim Távora"
},
{
uf: "BA",
value: 10734,
cidade: "Chorrochó"
},
{
uf: "MA",
value: 10729,
cidade: "Lago do Junco"
},
{
uf: "SP",
value: 10725,
cidade: "Nhandeara"
},
{
uf: "RN",
value: 10719,
cidade: "Vera Cruz"
},
{
uf: "RS",
value: 10719,
cidade: "Fontoura Xavier"
},
{
uf: "BA",
value: 10717,
cidade: "Brotas de Macaúbas"
},
{
uf: "MA",
value: 10717,
cidade: "Presidente Vargas"
},
{
uf: "AM",
value: 10705,
cidade: "São Sebastião do Uatumã"
},
{
uf: "SC",
value: 10699,
cidade: "Urubici"
},
{
uf: "MA",
value: 10698,
cidade: "Capinzal do Norte"
},
{
uf: "GO",
value: 10695,
cidade: "Goianápolis"
},
{
uf: "MG",
value: 10692,
cidade: "Itabirinha"
},
{
uf: "TO",
value: 10686,
cidade: "Nova Olinda"
},
{
uf: "MT",
value: 10684,
cidade: "Paranaíta"
},
{
uf: "PR",
value: 10678,
cidade: "Ribeirão Claro"
},
{
uf: "PI",
value: 10678,
cidade: "Itaueira"
},
{
uf: "BA",
value: 10673,
cidade: "Novo Horizonte"
},
{
uf: "SP",
value: 10670,
cidade: "Guaiçara"
},
{
uf: "SP",
value: 10669,
cidade: "General Salgado"
},
{
uf: "SC",
value: 10661,
cidade: "Faxinal dos Guedes"
},
{
uf: "BA",
value: 10660,
cidade: "Floresta Azul"
},
{
uf: "RN",
value: 10659,
cidade: "Umarizal"
},
{
uf: "MA",
value: 10649,
cidade: "Duque Bacelar"
},
{
uf: "RO",
value: 10649,
cidade: "Theobroma"
},
{
uf: "GO",
value: 10649,
cidade: "Mara Rosa"
},
{
uf: "MG",
value: 10647,
cidade: "São Sebastião do Maranhão"
},
{
uf: "TO",
value: 10645,
cidade: "Arraias"
},
{
uf: "MA",
value: 10635,
cidade: "Godofredo Viana"
},
{
uf: "SC",
value: 10635,
cidade: "Gravatal"
},
{
uf: "MT",
value: 10625,
cidade: "São Félix do Araguaia"
},
{
uf: "SP",
value: 10623,
cidade: "Pirangi"
},
{
uf: "PR",
value: 10622,
cidade: "Iretama"
},
{
uf: "BA",
value: 10622,
cidade: "Gentio do Ouro"
},
{
uf: "SC",
value: 10613,
cidade: "Cunha Porã"
},
{
uf: "SC",
value: 10609,
cidade: "Jacinto Machado"
},
{
uf: "PE",
value: 10604,
cidade: "Jucati"
},
{
uf: "SC",
value: 10603,
cidade: "Canelinha"
},
{
uf: "PR",
value: 10599,
cidade: "São João"
},
{
uf: "MA",
value: 10593,
cidade: "Cajapió"
},
{
uf: "AL",
value: 10583,
cidade: "Branquinha"
},
{
uf: "SP",
value: 10579,
cidade: "Areiópolis"
},
{
uf: "SP",
value: 10575,
cidade: "Riolândia"
},
{
uf: "GO",
value: 10572,
cidade: "Montividiu"
},
{
uf: "MG",
value: 10572,
cidade: "Virginópolis"
},
{
uf: "SP",
value: 10568,
cidade: "Sales Oliveira"
},
{
uf: "PB",
value: 10566,
cidade: "Natuba"
},
{
uf: "MG",
value: 10561,
cidade: "São Tiago"
},
{
uf: "RS",
value: 10558,
cidade: "Porto Xavier"
},
{
uf: "GO",
value: 10553,
cidade: "Cachoeira Alta"
},
{
uf: "MG",
value: 10552,
cidade: "Santa Maria de Itabira"
},
{
uf: "MG",
value: 10549,
cidade: "Serra do Salitre"
},
{
uf: "BA",
value: 10545,
cidade: "Mucugê"
},
{
uf: "MG",
value: 10540,
cidade: "Eugenópolis"
},
{
uf: "PB",
value: 10533,
cidade: "Nova Floresta"
},
{
uf: "PR",
value: 10531,
cidade: "Itapejara d'Oeste"
},
{
uf: "RS",
value: 10524,
cidade: "Planalto"
},
{
uf: "GO",
value: 10523,
cidade: "Rialma"
},
{
uf: "PB",
value: 10517,
cidade: "Dona Inês"
},
{
uf: "MA",
value: 10517,
cidade: "Lagoa Grande do Maranhão"
},
{
uf: "PI",
value: 10516,
cidade: "Baixa Grande do Ribeiro"
},
{
uf: "RO",
value: 10512,
cidade: "Governador Jorge Teixeira"
},
{
uf: "BA",
value: 10507,
cidade: "Mirante"
},
{
uf: "BA",
value: 10500,
cidade: "Marcionílio Souza"
},
{
uf: "SC",
value: 10498,
cidade: "Guaraciaba"
},
{
uf: "CE",
value: 10496,
cidade: "Abaiara"
},
{
uf: "BA",
value: 10495,
cidade: "Itapebi"
},
{
uf: "CE",
value: 10491,
cidade: "Ararendá"
},
{
uf: "TO",
value: 10481,
cidade: "São Miguel do Tocantins"
},
{
uf: "RN",
value: 10475,
cidade: "Espírito Santo"
},
{
uf: "PR",
value: 10474,
cidade: "Missal"
},
{
uf: "PI",
value: 10473,
cidade: "Matias Olímpio"
},
{
uf: "SP",
value: 10468,
cidade: "São Bento do Sapucaí"
},
{
uf: "MG",
value: 10468,
cidade: "Congonhal"
},
{
uf: "PA",
value: 10466,
cidade: "Cumaru do Norte"
},
{
uf: "MG",
value: 10457,
cidade: "Bom Repouso"
},
{
uf: "MT",
value: 10455,
cidade: "Jauru"
},
{
uf: "RS",
value: 10448,
cidade: "Tapera"
},
{
uf: "SC",
value: 10448,
cidade: "Irineópolis"
},
{
uf: "MA",
value: 10444,
cidade: "Sucupira do Norte"
},
{
uf: "RN",
value: 10441,
cidade: "Maxaranguape"
},
{
uf: "SC",
value: 10438,
cidade: "Luiz Alves"
},
{
uf: "RR",
value: 10433,
cidade: "Pacaraima"
},
{
uf: "PR",
value: 10432,
cidade: "Santa Fé"
},
{
uf: "TO",
value: 10424,
cidade: "Babaçulândia"
},
{
uf: "MG",
value: 10417,
cidade: "Porto Firme"
},
{
uf: "BA",
value: 10414,
cidade: "São Miguel das Matas"
},
{
uf: "SP",
value: 10414,
cidade: "Rincão"
},
{
uf: "BA",
value: 10412,
cidade: "Guajeru"
},
{
uf: "ES",
value: 10408,
cidade: "São José do Calçado"
},
{
uf: "PI",
value: 10402,
cidade: "Gilbués"
},
{
uf: "SC",
value: 10400,
cidade: "Sangão"
},
{
uf: "CE",
value: 10399,
cidade: "Jaguaribara"
},
{
uf: "MG",
value: 10398,
cidade: "São Gonçalo do Pará"
},
{
uf: "SP",
value: 10397,
cidade: "São Luiz do Paraitinga"
},
{
uf: "MT",
value: 10392,
cidade: "Tapurah"
},
{
uf: "BA",
value: 10392,
cidade: "Arataca"
},
{
uf: "MG",
value: 10388,
cidade: "Conceição dos Ouros"
},
{
uf: "MG",
value: 10384,
cidade: "Planura"
},
{
uf: "TO",
value: 10384,
cidade: "Peixe"
},
{
uf: "RN",
value: 10381,
cidade: "Lajes"
},
{
uf: "PR",
value: 10377,
cidade: "Nova Prata do Iguaçu"
},
{
uf: "BA",
value: 10371,
cidade: "Sebastião Laranjeiras"
},
{
uf: "BA",
value: 10368,
cidade: "Caém"
},
{
uf: "BA",
value: 10368,
cidade: "Lençóis"
},
{
uf: "MG",
value: 10368,
cidade: "Mercês"
},
{
uf: "MS",
value: 10366,
cidade: "Guia Lopes da Laguna"
},
{
uf: "MG",
value: 10364,
cidade: "Pirapetinga"
},
{
uf: "MS",
value: 10363,
cidade: "Dois Irmãos do Buriti"
},
{
uf: "BA",
value: 10363,
cidade: "Santa Inês"
},
{
uf: "GO",
value: 10361,
cidade: "Corumbá de Goiás"
},
{
uf: "RO",
value: 10352,
cidade: "Ministro Andreazza"
},
{
uf: "MT",
value: 10350,
cidade: "Alto Garças"
},
{
uf: "MG",
value: 10349,
cidade: "Itamogi"
},
{
uf: "MG",
value: 10349,
cidade: "Fervedouro"
},
{
uf: "PI",
value: 10345,
cidade: "Monte Alegre do Piauí"
},
{
uf: "BA",
value: 10342,
cidade: "Pintadas"
},
{
uf: "MG",
value: 10339,
cidade: "Novo Oriente de Minas"
},
{
uf: "TO",
value: 10338,
cidade: "Paranã"
},
{
uf: "SC",
value: 10336,
cidade: "Benedito Novo"
},
{
uf: "PI",
value: 10333,
cidade: "Monsenhor Gil"
},
{
uf: "PR",
value: 10332,
cidade: "Santa Tereza do Oeste"
},
{
uf: "BA",
value: 10331,
cidade: "Jandaíra"
},
{
uf: "PB",
value: 10326,
cidade: "Pirpirituba"
},
{
uf: "MG",
value: 10324,
cidade: "Jordânia"
},
{
uf: "RJ",
value: 10321,
cidade: "Santa Maria Madalena"
},
{
uf: "MT",
value: 10316,
cidade: "Arenápolis"
},
{
uf: "MG",
value: 10315,
cidade: "Pedras de Maria da Cruz"
},
{
uf: "MG",
value: 10315,
cidade: "Iapu"
},
{
uf: "ES",
value: 10314,
cidade: "Presidente Kennedy"
},
{
uf: "BA",
value: 10306,
cidade: "Milagres"
},
{
uf: "GO",
value: 10302,
cidade: "Santa Terezinha de Goiás"
},
{
uf: "MG",
value: 10299,
cidade: "Recreio"
},
{
uf: "MA",
value: 10297,
cidade: "Cedral"
},
{
uf: "MG",
value: 10292,
cidade: "Buenópolis"
},
{
uf: "MG",
value: 10291,
cidade: "Urucânia"
},
{
uf: "SC",
value: 10291,
cidade: "São Carlos"
},
{
uf: "BA",
value: 10290,
cidade: "Jucuruçu"
},
{
uf: "RJ",
value: 10289,
cidade: "Trajano de Moraes"
},
{
uf: "RN",
value: 10287,
cidade: "Serra do Mel"
},
{
uf: "SC",
value: 10284,
cidade: "Rio dos Cedros"
},
{
uf: "RS",
value: 10284,
cidade: "Roca Sales"
},
{
uf: "AL",
value: 10284,
cidade: "Maravilha"
},
{
uf: "PR",
value: 10283,
cidade: "Teixeira Soares"
},
{
uf: "PR",
value: 10283,
cidade: "Alvorada do Sul"
},
{
uf: "GO",
value: 10283,
cidade: "Petrolina de Goiás"
},
{
uf: "MG",
value: 10280,
cidade: "Engenheiro Caldas"
},
{
uf: "MG",
value: 10276,
cidade: "São Romão"
},
{
uf: "CE",
value: 10276,
cidade: "Potengi"
},
{
uf: "PI",
value: 10276,
cidade: "Parnaguá"
},
{
uf: "MG",
value: 10276,
cidade: "Açucena"
},
{
uf: "BA",
value: 10272,
cidade: "Muquém de São Francisco"
},
{
uf: "SE",
value: 10271,
cidade: "São Domingos"
},
{
uf: "MG",
value: 10270,
cidade: "Coroaci"
},
{
uf: "PA",
value: 10268,
cidade: "Primavera"
},
{
uf: "PI",
value: 10268,
cidade: "Guadalupe"
},
{
uf: "RS",
value: 10268,
cidade: "Cerro Grande do Sul"
},
{
uf: "RN",
value: 10266,
cidade: "Campo Redondo"
},
{
uf: "MG",
value: 10266,
cidade: "Centralina"
},
{
uf: "AL",
value: 10264,
cidade: "Pariconha"
},
{
uf: "MG",
value: 10263,
cidade: "São Geraldo"
},
{
uf: "PA",
value: 10262,
cidade: "Terra Alta"
},
{
uf: "PB",
value: 10262,
cidade: "Tacima"
},
{
uf: "MA",
value: 10261,
cidade: "São Francisco do Brejão"
},
{
uf: "GO",
value: 10257,
cidade: "São João d'Aliança"
},
{
uf: "MA",
value: 10256,
cidade: "Senador Alexandre Costa"
},
{
uf: "MS",
value: 10251,
cidade: "Aral Moreira"
},
{
uf: "MG",
value: 10251,
cidade: "Miradouro"
},
{
uf: "PR",
value: 10250,
cidade: "Paranacity"
},
{
uf: "SC",
value: 10248,
cidade: "Quilombo"
},
{
uf: "MG",
value: 10248,
cidade: "Francisco Badaró"
},
{
uf: "MG",
value: 10245,
cidade: "São João do Manhuaçu"
},
{
uf: "SC",
value: 10244,
cidade: "Lontras"
},
{
uf: "BA",
value: 10242,
cidade: "Anguera"
},
{
uf: "RO",
value: 10240,
cidade: "Novo Horizonte do Oeste"
},
{
uf: "PB",
value: 10237,
cidade: "Juripiranga"
},
{
uf: "MT",
value: 10235,
cidade: "Vera"
},
{
uf: "SC",
value: 10231,
cidade: "Mondaí"
},
{
uf: "PB",
value: 10230,
cidade: "São Vicente do Seridó"
},
{
uf: "CE",
value: 10228,
cidade: "Groaíras"
},
{
uf: "RS",
value: 10225,
cidade: "Arvorezinha"
},
{
uf: "PR",
value: 10224,
cidade: "Mariluz"
},
{
uf: "SP",
value: 10223,
cidade: "Bananal"
},
{
uf: "MG",
value: 10223,
cidade: "Guaraciaba"
},
{
uf: "RS",
value: 10222,
cidade: "Redentora"
},
{
uf: "BA",
value: 10222,
cidade: "Caraíbas"
},
{
uf: "RS",
value: 10221,
cidade: "Ronda Alta"
},
{
uf: "MG",
value: 10218,
cidade: "Caetanópolis"
},
{
uf: "RS",
value: 10217,
cidade: "Três Cachoeiras"
},
{
uf: "CE",
value: 10216,
cidade: "Pires Ferreira"
},
{
uf: "MS",
value: 10215,
cidade: "Tacuru"
},
{
uf: "AM",
value: 10214,
cidade: "Anamã"
},
{
uf: "CE",
value: 10214,
cidade: "Martinópole"
},
{
uf: "SC",
value: 10213,
cidade: "Coronel Freitas"
},
{
uf: "RJ",
value: 10213,
cidade: "Aperibé"
},
{
uf: "PI",
value: 10212,
cidade: "Caracol"
},
{
uf: "TO",
value: 10210,
cidade: "Lagoa da Confusão"
},
{
uf: "MG",
value: 10210,
cidade: "Cristina"
},
{
uf: "PR",
value: 10208,
cidade: "Pérola"
},
{
uf: "BA",
value: 10207,
cidade: "Itapitanga"
},
{
uf: "MA",
value: 10205,
cidade: "Governador Archer"
},
{
uf: "SP",
value: 10204,
cidade: "Pedro de Toledo"
},
{
uf: "PE",
value: 10202,
cidade: "Angelim"
},
{
uf: "PR",
value: 10202,
cidade: "Catanduvas"
},
{
uf: "PB",
value: 10201,
cidade: "Itatuba"
},
{
uf: "MG",
value: 10196,
cidade: "Senhora dos Remédios"
},
{
uf: "AL",
value: 10195,
cidade: "Cacimbinhas"
},
{
uf: "BA",
value: 10180,
cidade: "São José do Jacuípe"
},
{
uf: "PR",
value: 10179,
cidade: "Alto Piquiri"
},
{
uf: "PR",
value: 10167,
cidade: "São Pedro do Ivaí"
},
{
uf: "BA",
value: 10113,
cidade: "Bom Jesus da Serra"
},
{
uf: "RS",
value: 10068,
cidade: "Sinimbu"
},
{
uf: "MT",
value: 10066,
cidade: "Alto Paraguai"
},
{
uf: "BA",
value: 10062,
cidade: "Ibiassucê"
},
{
uf: "RN",
value: 10059,
cidade: "Rio do Fogo"
},
{
uf: "SP",
value: 10044,
cidade: "Estiva Gerbi"
},
{
uf: "PA",
value: 10037,
cidade: "Inhangapi"
},
{
uf: "BA",
value: 10036,
cidade: "Aramari"
},
{
uf: "SP",
value: 10013,
cidade: "Iacanga"
},
{
uf: "MG",
value: 10004,
cidade: "Bela Vista de Minas"
},
{
uf: "PI",
value: 9981,
cidade: "Cristino Castro"
},
{
uf: "MG",
value: 9979,
cidade: "Matias Cardoso"
},
{
uf: "SP",
value: 9976,
cidade: "Guaraci"
},
{
uf: "PR",
value: 9957,
cidade: "Ventania"
},
{
uf: "CE",
value: 9952,
cidade: "Catunda"
},
{
uf: "SP",
value: 9935,
cidade: "Rinópolis"
},
{
uf: "MT",
value: 9932,
cidade: "Tabaporã"
},
{
uf: "MG",
value: 9928,
cidade: "Itatiaiuçu"
},
{
uf: "PI",
value: 9928,
cidade: "Cabeceiras do Piauí"
},
{
uf: "MS",
value: 9927,
cidade: "Glória de Dourados"
},
{
uf: "MG",
value: 9919,
cidade: "Rubim"
},
{
uf: "PI",
value: 9911,
cidade: "Beneditinos"
},
{
uf: "RS",
value: 9895,
cidade: "Pantano Grande"
},
{
uf: "RN",
value: 9883,
cidade: "Tenente Ananias"
},
{
uf: "RS",
value: 9878,
cidade: "Terra de Areia"
},
{
uf: "TO",
value: 9865,
cidade: "Ananás"
},
{
uf: "ES",
value: 9850,
cidade: "Atilio Vivacqua"
},
{
uf: "PB",
value: 9826,
cidade: "Juru"
},
{
uf: "MG",
value: 9820,
cidade: "Conceição da Aparecida"
},
{
uf: "MG",
value: 9815,
cidade: "Ninheira"
},
{
uf: "BA",
value: 9810,
cidade: "Potiraguá"
},
{
uf: "BA",
value: 9799,
cidade: "Piraí do Norte"
},
{
uf: "MG",
value: 9777,
cidade: "São Gonçalo do Rio Abaixo"
},
{
uf: "TO",
value: 9768,
cidade: "Buriti do Tocantins"
},
{
uf: "SP",
value: 9768,
cidade: "Cajobi"
},
{
uf: "RN",
value: 9762,
cidade: "Carnaubais"
},
{
uf: "RS",
value: 9752,
cidade: "Constantina"
},
{
uf: "PR",
value: 9735,
cidade: "Barracão"
},
{
uf: "MG",
value: 9673,
cidade: "Bonito de Minas"
},
{
uf: "BA",
value: 9648,
cidade: "Santa Teresinha"
},
{
uf: "PI",
value: 9619,
cidade: "Sigefredo Pacheco"
},
{
uf: "SP",
value: 9618,
cidade: "Bofete"
},
{
uf: "RN",
value: 9610,
cidade: "Luís Gomes"
},
{
uf: "SC",
value: 9600,
cidade: "Apiúna"
},
{
uf: "SP",
value: 9599,
cidade: "Roseira"
},
{
uf: "SC",
value: 9586,
cidade: "Balneário Arroio do Silva"
},
{
uf: "SP",
value: 9585,
cidade: "Euclides da Cunha Paulista"
},
{
uf: "SP",
value: 9584,
cidade: "Palmeira d'Oeste"
},
{
uf: "MG",
value: 9573,
cidade: "Prudente de Morais"
},
{
uf: "MG",
value: 9565,
cidade: "Antônio Dias"
},
{
uf: "BA",
value: 9560,
cidade: "Lamarão"
},
{
uf: "SC",
value: 9555,
cidade: "Catanduvas"
},
{
uf: "BA",
value: 9554,
cidade: "Quixabeira"
},
{
uf: "PB",
value: 9546,
cidade: "Cachoeira dos Índios"
},
{
uf: "MG",
value: 9537,
cidade: "Tombos"
},
{
uf: "SC",
value: 9531,
cidade: "Irani"
},
{
uf: "MG",
value: 9521,
cidade: "Ipuiúna"
},
{
uf: "ES",
value: 9519,
cidade: "Águia Branca"
},
{
uf: "MG",
value: 9509,
cidade: "Arceburgo"
},
{
uf: "SC",
value: 9491,
cidade: "São Domingos"
},
{
uf: "TO",
value: 9476,
cidade: "Esperantina"
},
{
uf: "ES",
value: 9476,
cidade: "Bom Jesus do Norte"
},
{
uf: "RJ",
value: 9475,
cidade: "Varre-Sai"
},
{
uf: "SP",
value: 9471,
cidade: "Uchoa"
},
{
uf: "MG",
value: 9471,
cidade: "Carneirinho"
},
{
uf: "PB",
value: 9469,
cidade: "Mulungu"
},
{
uf: "AM",
value: 9467,
cidade: "Amaturá"
},
{
uf: "PB",
value: 9449,
cidade: "Água Branca"
},
{
uf: "RN",
value: 9440,
cidade: "Bom Jesus"
},
{
uf: "MA",
value: 9413,
cidade: "Montes Altos"
},
{
uf: "BA",
value: 9410,
cidade: "Canápolis"
},
{
uf: "SC",
value: 9410,
cidade: "Alfredo Wagner"
},
{
uf: "RN",
value: 9393,
cidade: "Grossos"
},
{
uf: "GO",
value: 9392,
cidade: "Cavalcante"
},
{
uf: "RO",
value: 9384,
cidade: "Vale do Anari"
},
{
uf: "RS",
value: 9377,
cidade: "Chapada"
},
{
uf: "SC",
value: 9370,
cidade: "Campo Erê"
},
{
uf: "MG",
value: 9360,
cidade: "Riacho dos Machados"
},
{
uf: "SE",
value: 9355,
cidade: "Riachuelo"
},
{
uf: "SP",
value: 9330,
cidade: "Torrinha"
},
{
uf: "PI",
value: 9327,
cidade: "Ipiranga do Piauí"
},
{
uf: "RR",
value: 9327,
cidade: "Amajari"
},
{
uf: "RS",
value: 9323,
cidade: "Catuípe"
},
{
uf: "SC",
value: 9323,
cidade: "Agrolândia"
},
{
uf: "PE",
value: 9312,
cidade: "Salgadinho"
},
{
uf: "SC",
value: 9312,
cidade: "Monte Carlo"
},
{
uf: "SP",
value: 9300,
cidade: "Nova Europa"
},
{
uf: "MG",
value: 9299,
cidade: "Dores de Campos"
},
{
uf: "PB",
value: 9298,
cidade: "Umbuzeiro"
},
{
uf: "RN",
value: 9289,
cidade: "Augusto Severo"
},
{
uf: "MG",
value: 9289,
cidade: "Coqueiral"
},
{
uf: "BA",
value: 9285,
cidade: "Ipupiara"
},
{
uf: "PE",
value: 9278,
cidade: "Terra Nova"
},
{
uf: "TO",
value: 9275,
cidade: "Axixá do Tocantins"
},
{
uf: "SC",
value: 9273,
cidade: "São José do Cerrito"
},
{
uf: "MG",
value: 9271,
cidade: "Paula Cândido"
},
{
uf: "MG",
value: 9264,
cidade: "Igaratinga"
},
{
uf: "PI",
value: 9245,
cidade: "Dom Inocêncio"
},
{
uf: "MA",
value: 9241,
cidade: "Fernando Falcão"
},
{
uf: "MG",
value: 9238,
cidade: "Juruaia"
},
{
uf: "BA",
value: 9226,
cidade: "São Domingos"
},
{
uf: "SE",
value: 9221,
cidade: "Rosário do Catete"
},
{
uf: "PB",
value: 9220,
cidade: "Triunfo"
},
{
uf: "MT",
value: 9218,
cidade: "Nova Ubiratã"
},
{
uf: "MS",
value: 9185,
cidade: "Angélica"
},
{
uf: "AC",
value: 9176,
cidade: "Porto Walter"
},
{
uf: "MG",
value: 9148,
cidade: "Carbonita"
},
{
uf: "TO",
value: 9148,
cidade: "Sítio Novo do Tocantins"
},
{
uf: "PE",
value: 9142,
cidade: "Verdejante"
},
{
uf: "MG",
value: 9117,
cidade: "Coronel Murta"
},
{
uf: "BA",
value: 9109,
cidade: "Varzedo"
},
{
uf: "GO",
value: 9100,
cidade: "Paranaiguara"
},
{
uf: "PI",
value: 9098,
cidade: "Anísio de Abreu"
},
{
uf: "CE",
value: 9095,
cidade: "Deputado Irapuan Pinheiro"
},
{
uf: "MG",
value: 9090,
cidade: "Rio Acima"
},
{
uf: "PR",
value: 9085,
cidade: "São Jorge d'Oeste"
},
{
uf: "GO",
value: 9054,
cidade: "Buriti Alegre"
},
{
uf: "AL",
value: 9032,
cidade: "Campo Grande"
},
{
uf: "MG",
value: 9030,
cidade: "Caputira"
},
{
uf: "MG",
value: 9027,
cidade: "Santa Rita de Caldas"
},
{
uf: "SP",
value: 9027,
cidade: "Sarapuí"
},
{
uf: "PR",
value: 9026,
cidade: "Itaipulândia"
},
{
uf: "SP",
value: 9025,
cidade: "Ilha Comprida"
},
{
uf: "MG",
value: 9024,
cidade: "Coluna"
},
{
uf: "SC",
value: 9016,
cidade: "Saudades"
},
{
uf: "RN",
value: 9011,
cidade: "Januário Cicco"
},
{
uf: "PR",
value: 9001,
cidade: "Jesuítas"
},
{
uf: "AP",
value: 9000,
cidade: "Calçoene"
},
{
uf: "TO",
value: 9000,
cidade: "Natividade"
},
{
uf: "PR",
value: 8996,
cidade: "Rondon"
},
{
uf: "SP",
value: 8992,
cidade: "Manduri"
},
{
uf: "MG",
value: 8986,
cidade: "Pocrane"
},
{
uf: "BA",
value: 8983,
cidade: "Wagner"
},
{
uf: "MG",
value: 8974,
cidade: "Divisópolis"
},
{
uf: "PR",
value: 8973,
cidade: "Vera Cruz do Oeste"
},
{
uf: "BA",
value: 8973,
cidade: "Jaborandi"
},
{
uf: "RN",
value: 8959,
cidade: "Florânia"
},
{
uf: "MG",
value: 8959,
cidade: "Cachoeira de Pajeú"
},
{
uf: "ES",
value: 8957,
cidade: "Ibitirama"
},
{
uf: "SC",
value: 8942,
cidade: "Bom Retiro"
},
{
uf: "RR",
value: 8940,
cidade: "Normandia"
},
{
uf: "RS",
value: 8938,
cidade: "Entre-Ijuís"
},
{
uf: "GO",
value: 8928,
cidade: "Carmo do Rio Verde"
},
{
uf: "MG",
value: 8920,
cidade: "Frei Inocêncio"
},
{
uf: "PI",
value: 8914,
cidade: "Ilha Grande"
},
{
uf: "MG",
value: 8912,
cidade: "Perdigão"
},
{
uf: "CE",
value: 8910,
cidade: "Tarrafas"
},
{
uf: "BA",
value: 8899,
cidade: "Cardeal da Silva"
},
{
uf: "BA",
value: 8895,
cidade: "Candeal"
},
{
uf: "RJ",
value: 8895,
cidade: "São Sebastião do Alto"
},
{
uf: "RO",
value: 8886,
cidade: "Santa Luzia D'Oeste"
},
{
uf: "MG",
value: 8881,
cidade: "Capim Branco"
},
{
uf: "MT",
value: 8881,
cidade: "Ribeirão Cascalheira"
},
{
uf: "CE",
value: 8866,
cidade: "Palhano"
},
{
uf: "PR",
value: 8863,
cidade: "Marilândia do Sul"
},
{
uf: "PE",
value: 8844,
cidade: "Brejão"
},
{
uf: "BA",
value: 8843,
cidade: "Caturama"
},
{
uf: "RS",
value: 8840,
cidade: "Nova Bassano"
},
{
uf: "PR",
value: 8839,
cidade: "Icaraíma"
},
{
uf: "SP",
value: 8836,
cidade: "Urânia"
},
{
uf: "SE",
value: 8833,
cidade: "Pedrinhas"
},
{
uf: "SP",
value: 8831,
cidade: "Igaratá"
},
{
uf: "RS",
value: 8829,
cidade: "Santa Bárbara do Sul"
},
{
uf: "BA",
value: 8822,
cidade: "Planaltino"
},
{
uf: "MG",
value: 8807,
cidade: "Pratápolis"
},
{
uf: "SP",
value: 8801,
cidade: "Vargem"
},
{
uf: "AC",
value: 8798,
cidade: "Capixaba"
},
{
uf: "PR",
value: 8791,
cidade: "Tomazina"
},
{
uf: "SP",
value: 8787,
cidade: "Salto Grande"
},
{
uf: "TO",
value: 8786,
cidade: "Araguaçu"
},
{
uf: "RO",
value: 8783,
cidade: "Corumbiara"
},
{
uf: "BA",
value: 8782,
cidade: "Maiquinique"
},
{
uf: "SP",
value: 8779,
cidade: "Lavínia"
},
{
uf: "BA",
value: 8776,
cidade: "Santanópolis"
},
{
uf: "SP",
value: 8772,
cidade: "Neves Paulista"
},
{
uf: "RS",
value: 8771,
cidade: "Candiota"
},
{
uf: "RN",
value: 8768,
cidade: "Serra Caiada"
},
{
uf: "SC",
value: 8767,
cidade: "Santa Terezinha"
},
{
uf: "PR",
value: 8760,
cidade: "Santa Isabel do Ivaí"
},
{
uf: "MG",
value: 8739,
cidade: "Dionísio"
},
{
uf: "GO",
value: 8716,
cidade: "Barro Alto"
},
{
uf: "MG",
value: 8712,
cidade: "Rio Novo"
},
{
uf: "MG",
value: 8707,
cidade: "Guiricema"
},
{
uf: "RR",
value: 8696,
cidade: "Iracema"
},
{
uf: "SP",
value: 8696,
cidade: "Herculândia"
},
{
uf: "PR",
value: 8695,
cidade: "Tuneiras do Oeste"
},
{
uf: "MG",
value: 8678,
cidade: "Guarani"
},
{
uf: "SC",
value: 8674,
cidade: "Tangará"
},
{
uf: "ES",
value: 8672,
cidade: "Vila Pavão"
},
{
uf: "RN",
value: 8670,
cidade: "São Miguel do Gostoso"
},
{
uf: "MG",
value: 8667,
cidade: "Cordisburgo"
},
{
uf: "MG",
value: 8664,
cidade: "Itapeva"
},
{
uf: "BA",
value: 8661,
cidade: "Várzea do Poço"
},
{
uf: "RS",
value: 8651,
cidade: "Casca"
},
{
uf: "SC",
value: 8634,
cidade: "Descanso"
},
{
uf: "MG",
value: 8631,
cidade: "Lagoa Grande"
},
{
uf: "PR",
value: 8626,
cidade: "São Sebastião da Amoreira"
},
{
uf: "MG",
value: 8623,
cidade: "Virgínia"
},
{
uf: "SC",
value: 8623,
cidade: "Anita Garibaldi"
},
{
uf: "SP",
value: 8612,
cidade: "Rafard"
},
{
uf: "TO",
value: 8611,
cidade: "Colméia"
},
{
uf: "SP",
value: 8609,
cidade: "Dourado"
},
{
uf: "BA",
value: 8602,
cidade: "Ribeirão do Largo"
},
{
uf: "BA",
value: 8599,
cidade: "Aratuípe"
},
{
uf: "PI",
value: 8592,
cidade: "Francisco Santos"
},
{
uf: "MG",
value: 8589,
cidade: "Pavão"
},
{
uf: "SP",
value: 8589,
cidade: "Paulo de Faria"
},
{
uf: "MG",
value: 8582,
cidade: "Santana do Manhuaçu"
},
{
uf: "GO",
value: 8575,
cidade: "Itauçu"
},
{
uf: "RN",
value: 8573,
cidade: "Baía Formosa"
},
{
uf: "MT",
value: 8567,
cidade: "Apiacás"
},
{
uf: "RO",
value: 8566,
cidade: "Itapuã do Oeste"
},
{
uf: "RJ",
value: 8561,
cidade: "Rio das Flores"
},
{
uf: "RS",
value: 8557,
cidade: "Tuparendi"
},
{
uf: "PR",
value: 8555,
cidade: "Mauá da Serra"
},
{
uf: "PI",
value: 8553,
cidade: "Queimada Nova"
},
{
uf: "PR",
value: 8549,
cidade: "Japurá"
},
{
uf: "SP",
value: 8547,
cidade: "Ariranha"
},
{
uf: "MA",
value: 8526,
cidade: "Jatobá"
},
{
uf: "MT",
value: 8523,
cidade: "Denise"
},
{
uf: "SP",
value: 8515,
cidade: "Nova Campina"
},
{
uf: "GO",
value: 8508,
cidade: "Nova Glória"
},
{
uf: "SE",
value: 8508,
cidade: "Nossa Senhora Aparecida"
},
{
uf: "SP",
value: 8505,
cidade: "Terra Roxa"
},
{
uf: "TO",
value: 8505,
cidade: "Filadélfia"
},
{
uf: "MS",
value: 8493,
cidade: "Anaurilândia"
},
{
uf: "AL",
value: 8491,
cidade: "Olho d'Água do Casado"
},
{
uf: "AC",
value: 8471,
cidade: "Bujari"
},
{
uf: "BA",
value: 8468,
cidade: "Malhada de Pedras"
},
{
uf: "PI",
value: 8464,
cidade: "Murici dos Portelas"
},
{
uf: "RS",
value: 8447,
cidade: "General Câmara"
},
{
uf: "MA",
value: 8446,
cidade: "Cachoeira Grande"
},
{
uf: "AM",
value: 8444,
cidade: "Silves"
},
{
uf: "RS",
value: 8440,
cidade: "São Vicente do Sul"
},
{
uf: "SP",
value: 8435,
cidade: "Guaraçaí"
},
{
uf: "SC",
value: 8430,
cidade: "Balneário Barra do Sul"
},
{
uf: "AL",
value: 8429,
cidade: "Porto de Pedras"
},
{
uf: "RN",
value: 8424,
cidade: "Pureza"
},
{
uf: "GO",
value: 8423,
cidade: "Bom Jardim de Goiás"
},
{
uf: "MG",
value: 8412,
cidade: "Serra dos Aimorés"
},
{
uf: "BA",
value: 8410,
cidade: "Palmeiras"
},
{
uf: "SC",
value: 8409,
cidade: "Iporã do Oeste"
},
{
uf: "SP",
value: 8406,
cidade: "São José da Bela Vista"
},
{
uf: "SP",
value: 8405,
cidade: "Ouroeste"
},
{
uf: "PI",
value: 8400,
cidade: "Redenção do Gurguéia"
},
{
uf: "MG",
value: 8397,
cidade: "Lontra"
},
{
uf: "MG",
value: 8391,
cidade: "Prados"
},
{
uf: "PB",
value: 8376,
cidade: "Gado Bravo"
},
{
uf: "RR",
value: 8375,
cidade: "Uiramutã"
},
{
uf: "TO",
value: 8374,
cidade: "Alvorada"
},
{
uf: "SE",
value: 8369,
cidade: "Pirambu"
},
{
uf: "GO",
value: 8365,
cidade: "Aragoiânia"
},
{
uf: "BA",
value: 8357,
cidade: "Gongogi"
},
{
uf: "MG",
value: 8356,
cidade: "São Pedro dos Ferros"
},
{
uf: "SE",
value: 8348,
cidade: "Ilha das Flores"
},
{
uf: "MG",
value: 8346,
cidade: "Verdelândia"
},
{
uf: "SC",
value: 8346,
cidade: "Monte Castelo"
},
{
uf: "RS",
value: 8331,
cidade: "Jóia"
},
{
uf: "SP",
value: 8326,
cidade: "Porangaba"
},
{
uf: "MG",
value: 8318,
cidade: "Alto Jequitibá"
},
{
uf: "BA",
value: 8316,
cidade: "Abaíra"
},
{
uf: "PB",
value: 8314,
cidade: "Riacho dos Cavalos"
},
{
uf: "BA",
value: 8305,
cidade: "Lajedo do Tabocal"
},
{
uf: "RO",
value: 8301,
cidade: "Chupinguaia"
},
{
uf: "BA",
value: 8298,
cidade: "Ouriçangas"
},
{
uf: "MG",
value: 8298,
cidade: "Japonvar"
},
{
uf: "MG",
value: 8298,
cidade: "Comercinho"
},
{
uf: "PR",
value: 8293,
cidade: "Figueira"
},
{
uf: "AL",
value: 8290,
cidade: "Carneiros"
},
{
uf: "BA",
value: 8280,
cidade: "Morpará"
},
{
uf: "PR",
value: 8279,
cidade: "Congonhinhas"
},
{
uf: "PR",
value: 8270,
cidade: "Agudos do Sul"
},
{
uf: "RN",
value: 8265,
cidade: "Marcelino Vieira"
},
{
uf: "MG",
value: 8255,
cidade: "Morada Nova de Minas"
},
{
uf: "GO",
value: 8254,
cidade: "Cachoeira Dourada"
},
{
uf: "SP",
value: 8248,
cidade: "Santa Lúcia"
},
{
uf: "RS",
value: 8242,
cidade: "Santana da Boa Vista"
},
{
uf: "MG",
value: 8236,
cidade: "Pimenta"
},
{
uf: "SC",
value: 8234,
cidade: "Balneário Gaivota"
},
{
uf: "MT",
value: 8231,
cidade: "Castanheira"
},
{
uf: "CE",
value: 8226,
cidade: "Penaforte"
},
{
uf: "PI",
value: 8221,
cidade: "Isaías Coelho"
},
{
uf: "RN",
value: 8218,
cidade: "Martins"
},
{
uf: "AM",
value: 8211,
cidade: "Itapiranga"
},
{
uf: "RO",
value: 8210,
cidade: "Vale do Paraíso"
},
{
uf: "SP",
value: 8208,
cidade: "Estrela d'Oeste"
},
{
uf: "MS",
value: 8208,
cidade: "Antônio João"
},
{
uf: "PB",
value: 8206,
cidade: "Barra de Santana"
},
{
uf: "PI",
value: 8206,
cidade: "Nossa Senhora dos Remédios"
},
{
uf: "MG",
value: 8197,
cidade: "Passa Tempo"
},
{
uf: "PE",
value: 8189,
cidade: "Palmeirina"
},
{
uf: "MG",
value: 8183,
cidade: "Capitólio"
},
{
uf: "GO",
value: 8181,
cidade: "Corumbaíba"
},
{
uf: "RJ",
value: 8180,
cidade: "Comendador Levy Gasparian"
},
{
uf: "MG",
value: 8177,
cidade: "Formoso"
},
{
uf: "PA",
value: 8177,
cidade: "Faro"
},
{
uf: "MT",
value: 8171,
cidade: "Dom Aquino"
},
{
uf: "BA",
value: 8168,
cidade: "Cordeiros"
},
{
uf: "MG",
value: 8161,
cidade: "Monsenhor Paulo"
},
{
uf: "SP",
value: 8160,
cidade: "Bálsamo"
},
{
uf: "PE",
value: 8156,
cidade: "Camutanga"
},
{
uf: "PA",
value: 8155,
cidade: "Santa Cruz do Arari"
},
{
uf: "MG",
value: 8152,
cidade: "Araponga"
},
{
uf: "PR",
value: 8147,
cidade: "Nova Fátima"
},
{
uf: "SP",
value: 8143,
cidade: "Dumont"
},
{
uf: "TO",
value: 8139,
cidade: "Campos Lindos"
},
{
uf: "GO",
value: 8129,
cidade: "Nova Veneza"
},
{
uf: "MA",
value: 8126,
cidade: "Feira Nova do Maranhão"
},
{
uf: "MA",
value: 8118,
cidade: "Milagres do Maranhão"
},
{
uf: "PA",
value: 8115,
cidade: "Magalhães Barata"
},
{
uf: "RS",
value: 8115,
cidade: "Guarani das Missões"
},
{
uf: "RR",
value: 8114,
cidade: "Caroebe"
},
{
uf: "RN",
value: 8111,
cidade: "São Rafael"
},
{
uf: "MT",
value: 8093,
cidade: "Nova Monte Verde"
},
{
uf: "PR",
value: 8092,
cidade: "Santa Cruz de Monte Castelo"
},
{
uf: "MG",
value: 8089,
cidade: "Delta"
},
{
uf: "GO",
value: 8084,
cidade: "Alvorada do Norte"
},
{
uf: "RS",
value: 8078,
cidade: "Iraí"
},
{
uf: "BA",
value: 8073,
cidade: "Macururé"
},
{
uf: "MT",
value: 8072,
cidade: "Alto Taquari"
},
{
uf: "CE",
value: 8070,
cidade: "Moraújo"
},
{
uf: "AP",
value: 8069,
cidade: "Amapá"
},
{
uf: "PR",
value: 8069,
cidade: "Califórnia"
},
{
uf: "PI",
value: 8068,
cidade: "Nazária"
},
{
uf: "SC",
value: 8054,
cidade: "Santa Rosa do Sul"
},
{
uf: "MA",
value: 8051,
cidade: "Marajá do Sena"
},
{
uf: "RS",
value: 8044,
cidade: "Paverama"
},
{
uf: "AM",
value: 8038,
cidade: "Itamarati"
},
{
uf: "BA",
value: 8034,
cidade: "Nova Redenção"
},
{
uf: "BA",
value: 8031,
cidade: "Jussiape"
},
{
uf: "MG",
value: 8029,
cidade: "Iguatama"
},
{
uf: "RS",
value: 8027,
cidade: "Alpestre"
},
{
uf: "MG",
value: 8016,
cidade: "Piranguinho"
},
{
uf: "MG",
value: 8014,
cidade: "Pains"
},
{
uf: "SP",
value: 8012,
cidade: "Tapiraí"
},
{
uf: "PB",
value: 8012,
cidade: "Baía da Traição"
},
{
uf: "MG",
value: 8009,
cidade: "Santana de Pirapama"
},
{
uf: "PI",
value: 8008,
cidade: "Lagoa Alegre"
},
{
uf: "BA",
value: 8008,
cidade: "Tanquinho"
},
{
uf: "MG",
value: 8007,
cidade: "Riachinho"
},
{
uf: "MG",
value: 8005,
cidade: "Jequitaí"
},
{
uf: "SE",
value: 8004,
cidade: "Siriri"
},
{
uf: "MG",
value: 8003,
cidade: "Angelândia"
},
{
uf: "ES",
value: 8001,
cidade: "São Domingos do Norte"
},
{
uf: "PR",
value: 7997,
cidade: "Tupãssi"
},
{
uf: "PB",
value: 7991,
cidade: "Desterro"
},
{
uf: "GO",
value: 7987,
cidade: "Montes Claros de Goiás"
},
{
uf: "MS",
value: 7985,
cidade: "Bodoquena"
},
{
uf: "AC",
value: 7981,
cidade: "Manoel Urbano"
},
{
uf: "PI",
value: 7974,
cidade: "Buriti dos Montes"
},
{
uf: "SP",
value: 7972,
cidade: "Cedral"
},
{
uf: "MG",
value: 7971,
cidade: "Delfim Moreira"
},
{
uf: "RN",
value: 7967,
cidade: "Cruzeta"
},
{
uf: "MS",
value: 7967,
cidade: "Pedro Gomes"
},
{
uf: "PI",
value: 7966,
cidade: "Brasileira"
},
{
uf: "BA",
value: 7956,
cidade: "Ibirapuã"
},
{
uf: "MG",
value: 7954,
cidade: "Nazareno"
},
{
uf: "MA",
value: 7949,
cidade: "Boa Vista do Gurupi"
},
{
uf: "BA",
value: 7947,
cidade: "Elísio Medrado"
},
{
uf: "SP",
value: 7939,
cidade: "Dobrada"
},
{
uf: "RN",
value: 7925,
cidade: "Jaçanã"
},
{
uf: "PE",
value: 7925,
cidade: "Tuparetama"
},
{
uf: "MG",
value: 7913,
cidade: "Baldim"
},
{
uf: "PR",
value: 7911,
cidade: "Boa Vista da Aparecida"
},
{
uf: "BA",
value: 7903,
cidade: "Itamari"
},
{
uf: "CE",
value: 7900,
cidade: "São João do Jaguaribe"
},
{
uf: "PR",
value: 7900,
cidade: "Guamiranga"
},
{
uf: "BA",
value: 7895,
cidade: "Teodoro Sampaio"
},
{
uf: "GO",
value: 7892,
cidade: "Doverlândia"
},
{
uf: "MA",
value: 7887,
cidade: "Central do Maranhão"
},
{
uf: "MG",
value: 7883,
cidade: "Araújos"
},
{
uf: "GO",
value: 7882,
cidade: "Leopoldo de Bulhões"
},
{
uf: "PR",
value: 7878,
cidade: "Borrazópolis"
},
{
uf: "PR",
value: 7878,
cidade: "Verê"
},
{
uf: "RS",
value: 7878,
cidade: "Erval Seco"
},
{
uf: "MG",
value: 7874,
cidade: "São João do Oriente"
},
{
uf: "MG",
value: 7874,
cidade: "Mata Verde"
},
{
uf: "GO",
value: 7874,
cidade: "Nazário"
},
{
uf: "PE",
value: 7873,
cidade: "Vertente do Lério"
},
{
uf: "PR",
value: 7871,
cidade: "Guaraqueçaba"
},
{
uf: "MG",
value: 7865,
cidade: "Santa Cruz de Minas"
},
{
uf: "PA",
value: 7854,
cidade: "Peixe-Boi"
},
{
uf: "SP",
value: 7841,
cidade: "Arealva"
},
{
uf: "MG",
value: 7839,
cidade: "Ibiaí"
},
{
uf: "GO",
value: 7835,
cidade: "Itapirapuã"
},
{
uf: "PI",
value: 7831,
cidade: "Cristalândia do Piauí"
},
{
uf: "PI",
value: 7816,
cidade: "Madeiro"
},
{
uf: "PI",
value: 7812,
cidade: "Marcolândia"
},
{
uf: "RS",
value: 7811,
cidade: "Pedro Osório"
},
{
uf: "SP",
value: 7800,
cidade: "Ouro Verde"
},
{
uf: "MA",
value: 7796,
cidade: "Tasso Fragoso"
},
{
uf: "MA",
value: 7794,
cidade: "Lago dos Rodrigues"
},
{
uf: "SP",
value: 7789,
cidade: "Irapuru"
},
{
uf: "MG",
value: 7775,
cidade: "Claro dos Poções"
},
{
uf: "BA",
value: 7775,
cidade: "Rodelas"
},
{
uf: "MG",
value: 7772,
cidade: "Rubelita"
},
{
uf: "RN",
value: 7770,
cidade: "Serra Negra do Norte"
},
{
uf: "SC",
value: 7765,
cidade: "Palma Sola"
},
{
uf: "PR",
value: 7764,
cidade: "Abatiá"
},
{
uf: "AL",
value: 7754,
cidade: "Japaratinga"
},
{
uf: "SC",
value: 7753,
cidade: "Armazém"
},
{
uf: "PB",
value: 7748,
cidade: "São Mamede"
},
{
uf: "RS",
value: 7748,
cidade: "Coronel Bicaco"
},
{
uf: "SE",
value: 7742,
cidade: "Brejo Grande"
},
{
uf: "RS",
value: 7740,
cidade: "Arroio do Sal"
},
{
uf: "MS",
value: 7731,
cidade: "Japorã"
},
{
uf: "GO",
value: 7730,
cidade: "Monte Alegre de Goiás"
},
{
uf: "SP",
value: 7729,
cidade: "Barra do Turvo"
},
{
uf: "MT",
value: 7696,
cidade: "Jangada"
},
{
uf: "MG",
value: 7682,
cidade: "Santa Bárbara do Leste"
},
{
uf: "RS",
value: 7679,
cidade: "Lavras do Sul"
},
{
uf: "BA",
value: 7678,
cidade: "Itaquara"
},
{
uf: "PB",
value: 7676,
cidade: "Aparecida"
},
{
uf: "RS",
value: 7673,
cidade: "Boqueirão do Leão"
},
{
uf: "MS",
value: 7669,
cidade: "Inocência"
},
{
uf: "SP",
value: 7663,
cidade: "Macaubal"
},
{
uf: "CE",
value: 7660,
cidade: "Jati"
},
{
uf: "TO",
value: 7659,
cidade: "Praia Norte"
},
{
uf: "CE",
value: 7650,
cidade: "Arneiroz"
},
{
uf: "PR",
value: 7641,
cidade: "Juranda"
},
{
uf: "RS",
value: 7631,
cidade: "Minas do Leão"
},
{
uf: "SP",
value: 7628,
cidade: "Iepê"
},
{
uf: "SP",
value: 7626,
cidade: "Santo Antônio do Aracanguá"
},
{
uf: "PR",
value: 7626,
cidade: "Nova Santa Rosa"
},
{
uf: "PB",
value: 7609,
cidade: "Marcação"
},
{
uf: "BA",
value: 7602,
cidade: "Nova Fátima"
},
{
uf: "MG",
value: 7600,
cidade: "Lagamar"
},
{
uf: "BA",
value: 7598,
cidade: "Itanagra"
},
{
uf: "MT",
value: 7591,
cidade: "Barão de Melgaço"
},
{
uf: "SP",
value: 7588,
cidade: "Cristais Paulista"
},
{
uf: "TO",
value: 7586,
cidade: "Almas"
},
{
uf: "SP",
value: 7584,
cidade: "Águas da Prata"
},
{
uf: "AL",
value: 7574,
cidade: "Barra de São Miguel"
},
{
uf: "PB",
value: 7564,
cidade: "São José da Lagoa Tapada"
},
{
uf: "RN",
value: 7564,
cidade: "Lagoa Salgada"
},
{
uf: "GO",
value: 7550,
cidade: "Sanclerlândia"
},
{
uf: "SP",
value: 7546,
cidade: "Itobi"
},
{
uf: "CE",
value: 7545,
cidade: "Umari"
},
{
uf: "GO",
value: 7545,
cidade: "Cezarina"
},
{
uf: "MG",
value: 7542,
cidade: "Serrania"
},
{
uf: "PR",
value: 7541,
cidade: "Formosa do Oeste"
},
{
uf: "PB",
value: 7538,
cidade: "Jericó"
},
{
uf: "GO",
value: 7536,
cidade: "Bonfinópolis"
},
{
uf: "MG",
value: 7536,
cidade: "Belo Vale"
},
{
uf: "PE",
value: 7534,
cidade: "Ibirajuba"
},
{
uf: "PR",
value: 7514,
cidade: "Ivaté"
},
{
uf: "ES",
value: 7512,
cidade: "Apiacá"
},
{
uf: "GO",
value: 7510,
cidade: "Araguapaz"
},
{
uf: "PR",
value: 7503,
cidade: "Goioxim"
},
{
uf: "PI",
value: 7503,
cidade: "Assunção do Piauí"
},
{
uf: "MG",
value: 7502,
cidade: "Jacuí"
},
{
uf: "GO",
value: 7496,
cidade: "Aruanã"
},
{
uf: "MA",
value: 7496,
cidade: "São José dos Basílios"
},
{
uf: "RO",
value: 7493,
cidade: "Nova União"
},
{
uf: "RJ",
value: 7487,
cidade: "Laje do Muriaé"
},
{
uf: "SC",
value: 7483,
cidade: "Campo Belo do Sul"
},
{
uf: "GO",
value: 7481,
cidade: "Serranópolis"
},
{
uf: "SC",
value: 7479,
cidade: "Major Vieira"
},
{
uf: "PB",
value: 7475,
cidade: "Pedra Lavrada"
},
{
uf: "PA",
value: 7475,
cidade: "Palestina do Pará"
},
{
uf: "MG",
value: 7464,
cidade: "Montezuma"
},
{
uf: "SP",
value: 7462,
cidade: "Icém"
},
{
uf: "BA",
value: 7459,
cidade: "Apuarema"
},
{
uf: "PB",
value: 7459,
cidade: "Juarez Távora"
},
{
uf: "SC",
value: 7458,
cidade: "Antônio Carlos"
},
{
uf: "SP",
value: 7454,
cidade: "Pereiras"
},
{
uf: "MG",
value: 7446,
cidade: "Estrela do Sul"
},
{
uf: "PR",
value: 7445,
cidade: "Douradina"
},
{
uf: "SP",
value: 7435,
cidade: "Sud Mennucci"
},
{
uf: "BA",
value: 7435,
cidade: "Nova Itarana"
},
{
uf: "PI",
value: 7433,
cidade: "Colônia do Piauí"
},
{
uf: "RN",
value: 7429,
cidade: "Carnaúba dos Dantas"
},
{
uf: "AL",
value: 7426,
cidade: "Paulo Jacinto"
},
{
uf: "PR",
value: 7425,
cidade: "Nova Cantu"
},
{
uf: "MG",
value: 7423,
cidade: "Durandé"
},
{
uf: "SP",
value: 7422,
cidade: "Ribeirão Grande"
},
{
uf: "RS",
value: 7421,
cidade: "São Miguel das Missões"
},
{
uf: "SC",
value: 7412,
cidade: "Ascurra"
},
{
uf: "PB",
value: 7407,
cidade: "Mataraca"
},
{
uf: "PR",
value: 7398,
cidade: "Nova Tebas"
},
{
uf: "MG",
value: 7398,
cidade: "Nova Porteirinha"
},
{
uf: "MT",
value: 7397,
cidade: "Santa Terezinha"
},
{
uf: "PI",
value: 7391,
cidade: "Monsenhor Hipólito"
},
{
uf: "PB",
value: 7373,
cidade: "Sobrado"
},
{
uf: "SC",
value: 7372,
cidade: "Ouro"
},
{
uf: "GO",
value: 7371,
cidade: "Vicentinópolis"
},
{
uf: "SC",
value: 7370,
cidade: "Salete"
},
{
uf: "PB",
value: 7370,
cidade: "Lagoa de Dentro"
},
{
uf: "GO",
value: 7354,
cidade: "Cabeceiras"
},
{
uf: "PR",
value: 7351,
cidade: "Antônio Olinto"
},
{
uf: "SE",
value: 7344,
cidade: "Muribeca"
},
{
uf: "PI",
value: 7341,
cidade: "Alagoinha do Piauí"
},
{
uf: "TO",
value: 7339,
cidade: "Palmeirópolis"
},
{
uf: "MA",
value: 7337,
cidade: "Governador Luiz Rocha"
},
{
uf: "RS",
value: 7336,
cidade: "Paraíso do Sul"
},
{
uf: "PI",
value: 7336,
cidade: "São João do Arraial"
},
{
uf: "MT",
value: 7332,
cidade: "Novo Mundo"
},
{
uf: "MG",
value: 7330,
cidade: "Indaiabira"
},
{
uf: "AM",
value: 7326,
cidade: "Japurá"
},
{
uf: "SP",
value: 7323,
cidade: "Reginópolis"
},
{
uf: "RS",
value: 7323,
cidade: "Ametista do Sul"
},
{
uf: "PI",
value: 7321,
cidade: "Nazaré do Piauí"
},
{
uf: "RN",
value: 7320,
cidade: "Portalegre"
},
{
uf: "MA",
value: 7318,
cidade: "Ribamar Fiquene"
},
{
uf: "ES",
value: 7317,
cidade: "Alto Rio Novo"
},
{
uf: "BA",
value: 7317,
cidade: "Muniz Ferreira"
},
{
uf: "PA",
value: 7317,
cidade: "Brejo Grande do Araguaia"
},
{
uf: "CE",
value: 7316,
cidade: "Itaiçaba"
},
{
uf: "PR",
value: 7315,
cidade: "Luiziana"
},
{
uf: "RS",
value: 7312,
cidade: "Caraá"
},
{
uf: "BA",
value: 7309,
cidade: "Itaju do Colônia"
},
{
uf: "PR",
value: 7307,
cidade: "Reserva do Iguaçu"
},
{
uf: "PE",
value: 7307,
cidade: "Brejinho"
},
{
uf: "MG",
value: 7284,
cidade: "Orizânia"
},
{
uf: "RS",
value: 7280,
cidade: "Cristal"
},
{
uf: "PB",
value: 7280,
cidade: "Nazarezinho"
},
{
uf: "SP",
value: 7275,
cidade: "Irapuã"
},
{
uf: "SC",
value: 7267,
cidade: "Praia Grande"
},
{
uf: "PB",
value: 7266,
cidade: "Santana dos Garrotes"
},
{
uf: "MG",
value: 7265,
cidade: "Guimarânia"
},
{
uf: "MS",
value: 7259,
cidade: "Santa Rita do Pardo"
},
{
uf: "RS",
value: 7255,
cidade: "Ajuricaba"
},
{
uf: "PR",
value: 7238,
cidade: "Coronel Domingos Soares"
},
{
uf: "PR",
value: 7236,
cidade: "Cambira"
},
{
uf: "TO",
value: 7234,
cidade: "Cristalândia"
},
{
uf: "MG",
value: 7231,
cidade: "Santana da Vargem"
},
{
uf: "MG",
value: 7230,
cidade: "Senador Firmino"
},
{
uf: "PB",
value: 7220,
cidade: "Caiçara"
},
{
uf: "SC",
value: 7220,
cidade: "Ipumirim"
},
{
uf: "SP",
value: 7214,
cidade: "Cosmorama"
},
{
uf: "MG",
value: 7211,
cidade: "Pintópolis"
},
{
uf: "MG",
value: 7206,
cidade: "Guidoval"
},
{
uf: "RS",
value: 7203,
cidade: "Roque Gonzales"
},
{
uf: "SP",
value: 7198,
cidade: "São Pedro do Turvo"
},
{
uf: "TO",
value: 7180,
cidade: "Ponte Alta do Tocantins"
},
{
uf: "MG",
value: 7173,
cidade: "Martins Soares"
},
{
uf: "MG",
value: 7172,
cidade: "Alpercata"
},
{
uf: "RS",
value: 7171,
cidade: "Ibiraiaras"
},
{
uf: "RN",
value: 7171,
cidade: "Pedro Avelino"
},
{
uf: "SC",
value: 7167,
cidade: "Timbó Grande"
},
{
uf: "PB",
value: 7164,
cidade: "Livramento"
},
{
uf: "AL",
value: 7163,
cidade: "São Miguel dos Milagres"
},
{
uf: "PI",
value: 7163,
cidade: "Cajueiro da Praia"
},
{
uf: "MG",
value: 7163,
cidade: "Maravilhas"
},
{
uf: "TO",
value: 7161,
cidade: "Dois Irmãos do Tocantins"
},
{
uf: "RS",
value: 7158,
cidade: "Segredo"
},
{
uf: "SP",
value: 7152,
cidade: "Monte Alegre do Sul"
},
{
uf: "AL",
value: 7146,
cidade: "Chã Preta"
},
{
uf: "PB",
value: 7143,
cidade: "Belém do Brejo do Cruz"
},
{
uf: "MG",
value: 7128,
cidade: "Sericita"
},
{
uf: "SP",
value: 7127,
cidade: "Catiguá"
},
{
uf: "PR",
value: 7125,
cidade: "Campo do Tenente"
},
{
uf: "MG",
value: 7122,
cidade: "Engenheiro Navarro"
},
{
uf: "GO",
value: 7118,
cidade: "Joviânia"
},
{
uf: "MG",
value: 7116,
cidade: "Jenipapo de Minas"
},
{
uf: "MG",
value: 7110,
cidade: "Piedade de Caratinga"
},
{
uf: "BA",
value: 7110,
cidade: "Itagimirim"
},
{
uf: "TO",
value: 7104,
cidade: "Itacajá"
},
{
uf: "MG",
value: 7101,
cidade: "Cônego Marinho"
},
{
uf: "RS",
value: 7096,
cidade: "Augusto Pestana"
},
{
uf: "MG",
value: 7093,
cidade: "São Tomás de Aquino"
},
{
uf: "SC",
value: 7090,
cidade: "Rio do Oeste"
},
{
uf: "MG",
value: 7089,
cidade: "Capetinga"
},
{
uf: "RS",
value: 7072,
cidade: "Manoel Viana"
},
{
uf: "RN",
value: 7067,
cidade: "Riachuelo"
},
{
uf: "SP",
value: 7065,
cidade: "Clementina"
},
{
uf: "MA",
value: 7061,
cidade: "Santa Filomena do Maranhão"
},
{
uf: "SP",
value: 7059,
cidade: "Saltinho"
},
{
uf: "PB",
value: 7058,
cidade: "Casserengue"
},
{
uf: "MG",
value: 7054,
cidade: "Coimbra"
},
{
uf: "PB",
value: 7050,
cidade: "Serra Redonda"
},
{
uf: "SP",
value: 7048,
cidade: "Bilac"
},
{
uf: "RS",
value: 7045,
cidade: "Alecrim"
},
{
uf: "PR",
value: 7045,
cidade: "Quatiguá"
},
{
uf: "BA",
value: 7038,
cidade: "Maetinga"
},
{
uf: "SE",
value: 7038,
cidade: "Santana do São Francisco"
},
{
uf: "MG",
value: 7036,
cidade: "Periquito"
},
{
uf: "AL",
value: 7030,
cidade: "Belo Monte"
},
{
uf: "MG",
value: 7028,
cidade: "Moema"
},
{
uf: "MG",
value: 7024,
cidade: "Divinolândia de Minas"
},
{
uf: "RS",
value: 7018,
cidade: "Barão do Triunfo"
},
{
uf: "RS",
value: 7014,
cidade: "Formigueiro"
},
{
uf: "SP",
value: 7011,
cidade: "Gália"
},
{
uf: "MG",
value: 7008,
cidade: "São Vicente de Minas"
},
{
uf: "RJ",
value: 7003,
cidade: "São José de Ubá"
},
{
uf: "MG",
value: 7002,
cidade: "Desterro de Entre Rios"
},
{
uf: "SC",
value: 7002,
cidade: "São João do Sul"
},
{
uf: "BA",
value: 7002,
cidade: "Irajuba"
},
{
uf: "GO",
value: 7001,
cidade: "Chapadão do Céu"
},
{
uf: "SC",
value: 7000,
cidade: "Meleiro"
},
{
uf: "AL",
value: 6997,
cidade: "Jacuípe"
},
{
uf: "RN",
value: 6989,
cidade: "Lagoa de Pedras"
},
{
uf: "CE",
value: 6984,
cidade: "Antonina do Norte"
},
{
uf: "GO",
value: 6983,
cidade: "Faina"
},
{
uf: "MA",
value: 6983,
cidade: "São Domingos do Azeitão"
},
{
uf: "ES",
value: 6979,
cidade: "Ponto Belo"
},
{
uf: "PB",
value: 6978,
cidade: "Pilões"
},
{
uf: "MG",
value: 6976,
cidade: "Machacalis"
},
{
uf: "SP",
value: 6966,
cidade: "Guatapará"
},
{
uf: "MG",
value: 6961,
cidade: "Tiradentes"
},
{
uf: "SC",
value: 6961,
cidade: "Água Doce"
},
{
uf: "MG",
value: 6955,
cidade: "Santo Antônio do Retiro"
},
{
uf: "MG",
value: 6951,
cidade: "Galiléia"
},
{
uf: "AL",
value: 6935,
cidade: "Monteirópolis"
},
{
uf: "RN",
value: 6932,
cidade: "Itajá"
},
{
uf: "MG",
value: 6931,
cidade: "Palmópolis"
},
{
uf: "PB",
value: 6931,
cidade: "Olho d'Água"
},
{
uf: "GO",
value: 6924,
cidade: "Santa Rita do Araguaia"
},
{
uf: "MA",
value: 6923,
cidade: "Lajeado Novo"
},
{
uf: "RS",
value: 6920,
cidade: "Palmitinho"
},
{
uf: "MG",
value: 6913,
cidade: "Curral de Dentro"
},
{
uf: "PR",
value: 6913,
cidade: "Paulo Frontin"
},
{
uf: "MG",
value: 6908,
cidade: "Inconfidentes"
},
{
uf: "RN",
value: 6907,
cidade: "Antônio Martins"
},
{
uf: "MG",
value: 6906,
cidade: "Tiros"
},
{
uf: "RS",
value: 6905,
cidade: "Maquiné"
},
{
uf: "RS",
value: 6904,
cidade: "São José do Ouro"
},
{
uf: "RS",
value: 6891,
cidade: "Glorinha"
},
{
uf: "AL",
value: 6891,
cidade: "Santa Luzia do Norte"
},
{
uf: "MG",
value: 6890,
cidade: "Limeira do Oeste"
},
{
uf: "PB",
value: 6889,
cidade: "Cuitegi"
},
{
uf: "MG",
value: 6887,
cidade: "São João Batista do Glória"
},
{
uf: "SP",
value: 6886,
cidade: "Vista Alegre do Alto"
},
{
uf: "GO",
value: 6885,
cidade: "Alto Paraíso de Goiás"
},
{
uf: "RS",
value: 6884,
cidade: "Bossoroca"
},
{
uf: "MG",
value: 6877,
cidade: "Felisburgo"
},
{
uf: "BA",
value: 6876,
cidade: "Pedrão"
},
{
uf: "SC",
value: 6876,
cidade: "Treze de Maio"
},
{
uf: "GO",
value: 6876,
cidade: "Abadia de Goiás"
},
{
uf: "GO",
value: 6871,
cidade: "Mambaí"
},
{
uf: "MG",
value: 6870,
cidade: "Campo Florido"
},
{
uf: "MG",
value: 6867,
cidade: "Rodeiro"
},
{
uf: "PB",
value: 6866,
cidade: "Cubati"
},
{
uf: "MG",
value: 6859,
cidade: "Salto da Divisa"
},
{
uf: "PR",
value: 6858,
cidade: "Marilena"
},
{
uf: "CE",
value: 6856,
cidade: "Altaneira"
},
{
uf: "PE",
value: 6855,
cidade: "Granito"
},
{
uf: "CE",
value: 6852,
cidade: "Senador Sá"
},
{
uf: "PI",
value: 6845,
cidade: "Ribeiro Gonçalves"
},
{
uf: "CE",
value: 6840,
cidade: "Ererê"
},
{
uf: "MG",
value: 6830,
cidade: "Delfinópolis"
},
{
uf: "MG",
value: 6818,
cidade: "Bonfim"
},
{
uf: "SP",
value: 6817,
cidade: "Nuporanga"
},
{
uf: "PB",
value: 6814,
cidade: "Cacimbas"
},
{
uf: "PR",
value: 6812,
cidade: "Renascença"
},
{
uf: "RS",
value: 6812,
cidade: "Paraí"
},
{
uf: "PI",
value: 6803,
cidade: "Campo Largo do Piauí"
},
{
uf: "RN",
value: 6801,
cidade: "Jandaíra"
},
{
uf: "BA",
value: 6800,
cidade: "Vereda"
},
{
uf: "SC",
value: 6798,
cidade: "Ipuaçu"
},
{
uf: "PA",
value: 6780,
cidade: "Abel Figueiredo"
},
{
uf: "MG",
value: 6778,
cidade: "São José da Barra"
},
{
uf: "MG",
value: 6772,
cidade: "Central de Minas"
},
{
uf: "RR",
value: 6769,
cidade: "São João da Baliza"
},
{
uf: "PI",
value: 6769,
cidade: "Milton Brandão"
},
{
uf: "PR",
value: 6761,
cidade: "Pérola d'Oeste"
},
{
uf: "MG",
value: 6760,
cidade: "São Miguel do Anta"
},
{
uf: "PR",
value: 6759,
cidade: "Itambaracá"
},
{
uf: "RS",
value: 6753,
cidade: "Herval"
},
{
uf: "RR",
value: 6750,
cidade: "São Luiz"
},
{
uf: "PI",
value: 6749,
cidade: "Acauã"
},
{
uf: "RS",
value: 6747,
cidade: "Salvador do Sul"
},
{
uf: "TO",
value: 6742,
cidade: "Arapoema"
},
{
uf: "PE",
value: 6739,
cidade: "Quixaba"
},
{
uf: "PE",
value: 6737,
cidade: "Terezinha"
},
{
uf: "TO",
value: 6736,
cidade: "Tocantínia"
},
{
uf: "PR",
value: 6736,
cidade: "Sapopema"
},
{
uf: "SP",
value: 6725,
cidade: "Ibirarema"
},
{
uf: "MG",
value: 6724,
cidade: "Inimutaba"
},
{
uf: "AL",
value: 6718,
cidade: "São Brás"
},
{
uf: "TO",
value: 6716,
cidade: "Monte do Carmo"
},
{
uf: "SP",
value: 6712,
cidade: "Lindóia"
},
{
uf: "MG",
value: 6708,
cidade: "Catuji"
},
{
uf: "MG",
value: 6704,
cidade: "Abadia dos Dourados"
},
{
uf: "PB",
value: 6696,
cidade: "São Miguel de Taipu"
},
{
uf: "TO",
value: 6694,
cidade: "Pium"
},
{
uf: "SC",
value: 6692,
cidade: "Paulo Lopes"
},
{
uf: "MG",
value: 6686,
cidade: "São Roque de Minas"
},
{
uf: "SP",
value: 6678,
cidade: "Natividade da Serra"
},
{
uf: "PI",
value: 6675,
cidade: "Dirceu Arcoverde"
},
{
uf: "MG",
value: 6673,
cidade: "Pedra Bonita"
},
{
uf: "BA",
value: 6673,
cidade: "Santa Cruz da Vitória"
},
{
uf: "PI",
value: 6672,
cidade: "Angical do Piauí"
},
{
uf: "RS",
value: 6672,
cidade: "Faxinal do Soturno"
},
{
uf: "PB",
value: 6658,
cidade: "Santa Cecília"
},
{
uf: "PI",
value: 6657,
cidade: "Padre Marcos"
},
{
uf: "AL",
value: 6656,
cidade: "Roteiro"
},
{
uf: "MG",
value: 6655,
cidade: "São Thomé das Letras"
},
{
uf: "BA",
value: 6648,
cidade: "Nova Ibiá"
},
{
uf: "PB",
value: 6643,
cidade: "Junco do Seridó"
},
{
uf: "SC",
value: 6627,
cidade: "Passo de Torres"
},
{
uf: "PR",
value: 6625,
cidade: "Grandes Rios"
},
{
uf: "RS",
value: 6618,
cidade: "Independência"
},
{
uf: "PB",
value: 6616,
cidade: "Diamante"
},
{
uf: "PR",
value: 6610,
cidade: "Jussara"
},
{
uf: "MS",
value: 6609,
cidade: "Bandeirantes"
},
{
uf: "PI",
value: 6607,
cidade: "Barro Duro"
},
{
uf: "SP",
value: 6607,
cidade: "Tarabai"
},
{
uf: "MG",
value: 6600,
cidade: "Florestal"
},
{
uf: "TO",
value: 6599,
cidade: "Santa Fé do Araguaia"
},
{
uf: "AL",
value: 6598,
cidade: "Campestre"
},
{
uf: "SP",
value: 6593,
cidade: "Barbosa"
},
{
uf: "SP",
value: 6592,
cidade: "Jaborandi"
},
{
uf: "PI",
value: 6591,
cidade: "São José do Piauí"
},
{
uf: "MT",
value: 6590,
cidade: "Nova Maringá"
},
{
uf: "SP",
value: 6590,
cidade: "Lavrinhas"
},
{
uf: "SP",
value: 6587,
cidade: "Restinga"
},
{
uf: "PB",
value: 6584,
cidade: "Condado"
},
{
uf: "RN",
value: 6581,
cidade: "Serrinha"
},
{
uf: "AC",
value: 6577,
cidade: "Jordão"
},
{
uf: "RS",
value: 6574,
cidade: "Boa Vista do Buricá"
},
{
uf: "MG",
value: 6569,
cidade: "Reduto"
},
{
uf: "PI",
value: 6569,
cidade: "Dom Expedito Lopes"
},
{
uf: "MG",
value: 6565,
cidade: "Guarda-Mor"
},
{
uf: "RS",
value: 6565,
cidade: "Aratiba"
},
{
uf: "GO",
value: 6561,
cidade: "Terezópolis de Goiás"
},
{
uf: "PR",
value: 6561,
cidade: "Bom Sucesso"
},
{
uf: "PR",
value: 6554,
cidade: "Boa Ventura de São Roque"
},
{
uf: "SC",
value: 6553,
cidade: "Trombudo Central"
},
{
uf: "MG",
value: 6553,
cidade: "São José do Jacuri"
},
{
uf: "RS",
value: 6552,
cidade: "Condor"
},
{
uf: "MG",
value: 6547,
cidade: "Cipotânea"
},
{
uf: "MG",
value: 6547,
cidade: "Santa Rita de Minas"
},
{
uf: "MG",
value: 6545,
cidade: "Palma"
},
{
uf: "RS",
value: 6542,
cidade: "Cambará do Sul"
},
{
uf: "RS",
value: 6535,
cidade: "Cândido Godói"
},
{
uf: "PR",
value: 6532,
cidade: "Janiópolis"
},
{
uf: "RS",
value: 6529,
cidade: "Barão de Cotegipe"
},
{
uf: "MG",
value: 6526,
cidade: "Conquista"
},
{
uf: "MA",
value: 6524,
cidade: "Belágua"
},
{
uf: "GO",
value: 6514,
cidade: "Simolândia"
},
{
uf: "PR",
value: 6513,
cidade: "Vitorino"
},
{
uf: "PR",
value: 6511,
cidade: "São José da Boa Vista"
},
{
uf: "MA",
value: 6510,
cidade: "Luís Domingues"
},
{
uf: "MG",
value: 6501,
cidade: "Bom Jardim de Minas"
},
{
uf: "PI",
value: 6499,
cidade: "Morro do Chapéu do Piauí"
},
{
uf: "PI",
value: 6498,
cidade: "Novo Oriente do Piauí"
},
{
uf: "MG",
value: 6497,
cidade: "Botumirim"
},
{
uf: "RN",
value: 6492,
cidade: "Doutor Severiano"
},
{
uf: "PR",
value: 6491,
cidade: "São Pedro do Iguaçu"
},
{
uf: "MS",
value: 6491,
cidade: "Laguna Carapã"
},
{
uf: "SP",
value: 6486,
cidade: "Santo Antônio do Pinhal"
},
{
uf: "MG",
value: 6484,
cidade: "Lassance"
},
{
uf: "MG",
value: 6483,
cidade: "São Francisco de Paula"
},
{
uf: "BA",
value: 6474,
cidade: "Jussari"
},
{
uf: "PB",
value: 6471,
cidade: "Santa Cruz"
},
{
uf: "PB",
value: 6470,
cidade: "Areial"
},
{
uf: "MG",
value: 6467,
cidade: "Iraí de Minas"
},
{
uf: "MG",
value: 6465,
cidade: "Laranjal"
},
{
uf: "RS",
value: 6461,
cidade: "Tiradentes do Sul"
},
{
uf: "MG",
value: 6461,
cidade: "Vargem Alegre"
},
{
uf: "BA",
value: 6453,
cidade: "Barro Preto"
},
{
uf: "MG",
value: 6453,
cidade: "Cabeceira Grande"
},
{
uf: "GO",
value: 6438,
cidade: "Mundo Novo"
},
{
uf: "MT",
value: 6436,
cidade: "Nortelândia"
},
{
uf: "MA",
value: 6431,
cidade: "Amapá do Maranhão"
},
{
uf: "SC",
value: 6426,
cidade: "Itá"
},
{
uf: "MG",
value: 6424,
cidade: "Imbé de Minas"
},
{
uf: "PI",
value: 6422,
cidade: "Lagoa de São Francisco"
},
{
uf: "SP",
value: 6419,
cidade: "Iacri"
},
{
uf: "PR",
value: 6418,
cidade: "Francisco Alves"
},
{
uf: "MG",
value: 6406,
cidade: "Piracema"
},
{
uf: "SP",
value: 6404,
cidade: "Guarantã"
},
{
uf: "SC",
value: 6404,
cidade: "Maracajá"
},
{
uf: "RS",
value: 6402,
cidade: "Cerrito"
},
{
uf: "SE",
value: 6401,
cidade: "Macambira"
},
{
uf: "MG",
value: 6400,
cidade: "Luislândia"
},
{
uf: "ES",
value: 6397,
cidade: "Dores do Rio Preto"
},
{
uf: "SC",
value: 6380,
cidade: "Anchieta"
},
{
uf: "SP",
value: 6376,
cidade: "Iaras"
},
{
uf: "PR",
value: 6376,
cidade: "Adrianópolis"
},
{
uf: "MA",
value: 6374,
cidade: "Presidente Médici"
},
{
uf: "RS",
value: 6364,
cidade: "São Paulo das Missões"
},
{
uf: "TO",
value: 6363,
cidade: "Divinópolis do Tocantins"
},
{
uf: "PR",
value: 6360,
cidade: "Laranjal"
},
{
uf: "BA",
value: 6357,
cidade: "Almadina"
},
{
uf: "PR",
value: 6354,
cidade: "São Carlos do Ivaí"
},
{
uf: "RS",
value: 6353,
cidade: "Amaral Ferrador"
},
{
uf: "RS",
value: 6342,
cidade: "Nova Palma"
},
{
uf: "SC",
value: 6341,
cidade: "Treze Tílias"
},
{
uf: "MS",
value: 6341,
cidade: "Jaraguari"
},
{
uf: "MG",
value: 6341,
cidade: "Naque"
},
{
uf: "SP",
value: 6339,
cidade: "Paulicéia"
},
{
uf: "MG",
value: 6331,
cidade: "Mendes Pimentel"
},
{
uf: "GO",
value: 6322,
cidade: "Fazenda Nova"
},
{
uf: "MG",
value: 6321,
cidade: "Mamonas"
},
{
uf: "SP",
value: 6318,
cidade: "Echaporã"
},
{
uf: "TO",
value: 6317,
cidade: "Araguacema"
},
{
uf: "RO",
value: 6313,
cidade: "Cabixi"
},
{
uf: "BA",
value: 6313,
cidade: "Barra do Rocha"
},
{
uf: "SP",
value: 6304,
cidade: "Santo Antônio da Alegria"
},
{
uf: "GO",
value: 6300,
cidade: "Itarumã"
},
{
uf: "PI",
value: 6298,
cidade: "São Francisco do Piauí"
},
{
uf: "MG",
value: 6298,
cidade: "Careaçu"
},
{
uf: "PI",
value: 6296,
cidade: "Boa Hora"
},
{
uf: "RS",
value: 6294,
cidade: "Sertão"
},
{
uf: "MG",
value: 6293,
cidade: "Tumiritinga"
},
{
uf: "MT",
value: 6293,
cidade: "Gaúcha do Norte"
},
{
uf: "SC",
value: 6290,
cidade: "Vidal Ramos"
},
{
uf: "MS",
value: 6287,
cidade: "Selvíria"
},
{
uf: "PI",
value: 6273,
cidade: "Rio Grande do Piauí"
},
{
uf: "PR",
value: 6268,
cidade: "Mariópolis"
},
{
uf: "MG",
value: 6264,
cidade: "São Gonçalo do Abaeté"
},
{
uf: "MG",
value: 6257,
cidade: "Munhoz"
},
{
uf: "PR",
value: 6256,
cidade: "Tunas do Paraná"
},
{
uf: "TO",
value: 6254,
cidade: "Rio Sono"
},
{
uf: "GO",
value: 6241,
cidade: "Campo Limpo de Goiás"
},
{
uf: "MG",
value: 6241,
cidade: "Sapucaí-Mirim"
},
{
uf: "SE",
value: 6238,
cidade: "Nossa Senhora de Lourdes"
},
{
uf: "PB",
value: 6238,
cidade: "Serraria"
},
{
uf: "RN",
value: 6235,
cidade: "São Pedro"
},
{
uf: "MG",
value: 6234,
cidade: "Luisburgo"
},
{
uf: "PI",
value: 6229,
cidade: "Sussuapara"
},
{
uf: "PB",
value: 6227,
cidade: "Boa Vista"
},
{
uf: "RN",
value: 6227,
cidade: "Lagoa d'Anta"
},
{
uf: "RS",
value: 6227,
cidade: "Morro Redondo"
},
{
uf: "SC",
value: 6223,
cidade: "Grão Pará"
},
{
uf: "PI",
value: 6220,
cidade: "Massapê do Piauí"
},
{
uf: "SC",
value: 6219,
cidade: "Caibi"
},
{
uf: "CE",
value: 6218,
cidade: "General Sampaio"
},
{
uf: "PR",
value: 6215,
cidade: "Pinhalão"
},
{
uf: "MG",
value: 6213,
cidade: "Pouso Alto"
},
{
uf: "PB",
value: 6202,
cidade: "Cuité de Mamanguape"
},
{
uf: "PB",
value: 6198,
cidade: "Brejo dos Santos"
},
{
uf: "PR",
value: 6197,
cidade: "Guairaçá"
},
{
uf: "PI",
value: 6193,
cidade: "Boqueirão do Piauí"
},
{
uf: "SC",
value: 6192,
cidade: "Rio do Campo"
},
{
uf: "MG",
value: 6190,
cidade: "Indianópolis"
},
{
uf: "RS",
value: 6185,
cidade: "Lagoão"
},
{
uf: "BA",
value: 6184,
cidade: "Feira da Mata"
},
{
uf: "PB",
value: 6173,
cidade: "Marizópolis"
},
{
uf: "GO",
value: 6164,
cidade: "Jandaia"
},
{
uf: "SP",
value: 6163,
cidade: "Riversul"
},
{
uf: "RS",
value: 6163,
cidade: "Progresso"
},
{
uf: "MG",
value: 6162,
cidade: "Aiuruoca"
},
{
uf: "PI",
value: 6157,
cidade: "São João da Serra"
},
{
uf: "PB",
value: 6156,
cidade: "Igaracy"
},
{
uf: "MG",
value: 6155,
cidade: "Ibiracatu"
},
{
uf: "MG",
value: 6144,
cidade: "Araporã"
},
{
uf: "MG",
value: 6143,
cidade: "Barra Longa"
},
{
uf: "SC",
value: 6143,
cidade: "Rio das Antas"
},
{
uf: "PA",
value: 6141,
cidade: "Santarém Novo"
},
{
uf: "MA",
value: 6140,
cidade: "Graça Aranha"
},
{
uf: "MG",
value: 6139,
cidade: "Itumirim"
},
{
uf: "MG",
value: 6137,
cidade: "Gurinhatã"
},
{
uf: "SC",
value: 6131,
cidade: "Petrolândia"
},
{
uf: "CE",
value: 6126,
cidade: "Potiretama"
},
{
uf: "SP",
value: 6123,
cidade: "Arandu"
},
{
uf: "AL",
value: 6122,
cidade: "Tanque d'Arca"
},
{
uf: "MG",
value: 6121,
cidade: "Heliodora"
},
{
uf: "GO",
value: 6120,
cidade: "São Francisco de Goiás"
},
{
uf: "RS",
value: 6117,
cidade: "Campina das Missões"
},
{
uf: "SC",
value: 6110,
cidade: "Águas de Chapecó"
},
{
uf: "PI",
value: 6105,
cidade: "Patos do Piauí"
},
{
uf: "PR",
value: 6103,
cidade: "Enéas Marques"
},
{
uf: "SP",
value: 6097,
cidade: "Oriente"
},
{
uf: "PR",
value: 6096,
cidade: "Sabáudia"
},
{
uf: "PI",
value: 6096,
cidade: "Santa Filomena"
},
{
uf: "MA",
value: 6090,
cidade: "São Raimundo do Doca Bezerra"
},
{
uf: "MG",
value: 6075,
cidade: "Alfredo Vasconcelos"
},
{
uf: "RS",
value: 6073,
cidade: "Anta Gorda"
},
{
uf: "AC",
value: 6072,
cidade: "Assis Brasil"
},
{
uf: "MG",
value: 6070,
cidade: "Rio Espera"
},
{
uf: "PB",
value: 6070,
cidade: "Nova Olinda"
},
{
uf: "MG",
value: 6069,
cidade: "Mesquita"
},
{
uf: "PR",
value: 6066,
cidade: "Ibema"
},
{
uf: "GO",
value: 6060,
cidade: "Campo Alegre de Goiás"
},
{
uf: "MG",
value: 6055,
cidade: "Santa Helena de Minas"
},
{
uf: "MG",
value: 6054,
cidade: "Varjão de Minas"
},
{
uf: "RS",
value: 6053,
cidade: "Santa Maria do Herval"
},
{
uf: "MG",
value: 6047,
cidade: "Crisólita"
},
{
uf: "RS",
value: 6043,
cidade: "Hulha Negra"
},
{
uf: "MT",
value: 6042,
cidade: "Novo São Joaquim"
},
{
uf: "PR",
value: 6041,
cidade: "São Jorge do Patrocínio"
},
{
uf: "SC",
value: 6036,
cidade: "São João do Oeste"
},
{
uf: "PI",
value: 6036,
cidade: "Colônia do Gurguéia"
},
{
uf: "PA",
value: 6033,
cidade: "Pau D'Arco"
},
{
uf: "PB",
value: 6031,
cidade: "Ibiara"
},
{
uf: "MA",
value: 6030,
cidade: "Porto Rico do Maranhão"
},
{
uf: "TO",
value: 6029,
cidade: "Itaguatins"
},
{
uf: "RN",
value: 6028,
cidade: "São Vicente"
},
{
uf: "MG",
value: 6027,
cidade: "Silvianópolis"
},
{
uf: "PI",
value: 6027,
cidade: "Santa Cruz do Piauí"
},
{
uf: "CE",
value: 6026,
cidade: "Baixio"
},
{
uf: "RO",
value: 6018,
cidade: "São Felipe D'Oeste"
},
{
uf: "RS",
value: 6016,
cidade: "Ipê"
},
{
uf: "SP",
value: 6016,
cidade: "Ipeúna"
},
{
uf: "RN",
value: 6016,
cidade: "Caiçara do Norte"
},
{
uf: "MG",
value: 6016,
cidade: "Ouro Verde de Minas"
},
{
uf: "PI",
value: 6015,
cidade: "Betânia do Piauí"
},
{
uf: "PR",
value: 6012,
cidade: "Xambrê"
},
{
uf: "RS",
value: 6011,
cidade: "Estação"
},
{
uf: "RS",
value: 6011,
cidade: "Passo do Sobrado"
},
{
uf: "PB",
value: 6010,
cidade: "São José de Caiana"
},
{
uf: "PI",
value: 6007,
cidade: "Santo Antônio de Lisboa"
},
{
uf: "SP",
value: 6004,
cidade: "Quintana"
},
{
uf: "SC",
value: 6004,
cidade: "Bela Vista do Toldo"
},
{
uf: "SC",
value: 6004,
cidade: "Laurentino"
},
{
uf: "MG",
value: 6001,
cidade: "Dona Eusébia"
},
{
uf: "MA",
value: 5996,
cidade: "Bernardo do Mearim"
},
{
uf: "SP",
value: 5994,
cidade: "Colômbia"
},
{
uf: "CE",
value: 5986,
cidade: "Pacujá"
},
{
uf: "PR",
value: 5979,
cidade: "Itambé"
},
{
uf: "SE",
value: 5973,
cidade: "Pinhão"
},
{
uf: "MA",
value: 5957,
cidade: "São Roberto"
},
{
uf: "PR",
value: 5956,
cidade: "Maria Helena"
},
{
uf: "PR",
value: 5955,
cidade: "Honório Serpa"
},
{
uf: "SP",
value: 5943,
cidade: "Santo Antônio do Jardim"
},
{
uf: "MG",
value: 5940,
cidade: "Fruta de Leite"
},
{
uf: "PB",
value: 5939,
cidade: "Maturéia"
},
{
uf: "MG",
value: 5936,
cidade: "Confins"
},
{
uf: "MG",
value: 5934,
cidade: "Pai Pedro"
},
{
uf: "PR",
value: 5932,
cidade: "Fernandes Pinheiro"
},
{
uf: "PR",
value: 5931,
cidade: "Floresta"
},
{
uf: "SP",
value: 5930,
cidade: "Tuiuti"
},
{
uf: "RN",
value: 5922,
cidade: "São João do Sabugi"
},
{
uf: "MG",
value: 5921,
cidade: "Gonzaga"
},
{
uf: "RS",
value: 5917,
cidade: "Chuí"
},
{
uf: "SP",
value: 5914,
cidade: "Itirapuã"
},
{
uf: "PR",
value: 5911,
cidade: "São João do Caiuá"
},
{
uf: "MA",
value: 5905,
cidade: "Afonso Cunha"
},
{
uf: "MS",
value: 5901,
cidade: "Vicentina"
},
{
uf: "MS",
value: 5900,
cidade: "Juti"
},
{
uf: "SP",
value: 5898,
cidade: "Paraíso"
},
{
uf: "RS",
value: 5898,
cidade: "Tucunduva"
},
{
uf: "SP",
value: 5894,
cidade: "Taiaçu"
},
{
uf: "SP",
value: 5891,
cidade: "Nova Aliança"
},
{
uf: "MG",
value: 5884,
cidade: "Divisa Alegre"
},
{
uf: "TO",
value: 5882,
cidade: "Aragominas"
},
{
uf: "MG",
value: 5879,
cidade: "Frei Gaspar"
},
{
uf: "RN",
value: 5868,
cidade: "José da Penha"
},
{
uf: "MG",
value: 5865,
cidade: "Bonfinópolis de Minas"
},
{
uf: "RS",
value: 5862,
cidade: "Gaurama"
},
{
uf: "MG",
value: 5859,
cidade: "Ijaci"
},
{
uf: "RS",
value: 5850,
cidade: "Sertão Santana"
},
{
uf: "PR",
value: 5836,
cidade: "Tapira"
},
{
uf: "MG",
value: 5834,
cidade: "Padre Carvalho"
},
{
uf: "MG",
value: 5830,
cidade: "Sobrália"
},
{
uf: "MG",
value: 5830,
cidade: "Itueta"
},
{
uf: "PR",
value: 5828,
cidade: "Doutor Camargo"
},
{
uf: "RN",
value: 5822,
cidade: "Equador"
},
{
uf: "PR",
value: 5817,
cidade: "Sertaneja"
},
{
uf: "MG",
value: 5805,
cidade: "São Sebastião do Oeste"
},
{
uf: "AP",
value: 5802,
cidade: "Ferreira Gomes"
},
{
uf: "MG",
value: 5800,
cidade: "Franciscópolis"
},
{
uf: "MG",
value: 5799,
cidade: "Itaverava"
},
{
uf: "SP",
value: 5792,
cidade: "Silveiras"
},
{
uf: "MG",
value: 5790,
cidade: "Córrego Fundo"
},
{
uf: "RS",
value: 5787,
cidade: "Trindade do Sul"
},
{
uf: "SP",
value: 5780,
cidade: "Pedra Bela"
},
{
uf: "RS",
value: 5780,
cidade: "Liberato Salzano"
},
{
uf: "PI",
value: 5779,
cidade: "Aroazes"
},
{
uf: "MG",
value: 5776,
cidade: "São Francisco de Sales"
},
{
uf: "RS",
value: 5773,
cidade: "São Martinho"
},
{
uf: "PB",
value: 5765,
cidade: "Pedro Régis"
},
{
uf: "MG",
value: 5764,
cidade: "Toledo"
},
{
uf: "MG",
value: 5763,
cidade: "Divisa Nova"
},
{
uf: "MG",
value: 5760,
cidade: "Inhaúma"
},
{
uf: "MG",
value: 5760,
cidade: "Cristália"
},
{
uf: "RN",
value: 5752,
cidade: "Severiano Melo"
},
{
uf: "GO",
value: 5751,
cidade: "Santa Bárbara de Goiás"
},
{
uf: "PB",
value: 5751,
cidade: "Boa Ventura"
},
{
uf: "PB",
value: 5749,
cidade: "Camalaú"
},
{
uf: "PE",
value: 5744,
cidade: "Solidão"
},
{
uf: "RS",
value: 5743,
cidade: "Rodeio Bonito"
},
{
uf: "RN",
value: 5743,
cidade: "Serra de São Bento"
},
{
uf: "RS",
value: 5741,
cidade: "Barão"
},
{
uf: "TO",
value: 5740,
cidade: "Palmeiras do Tocantins"
},
{
uf: "MG",
value: 5739,
cidade: "São Sebastião do Anta"
},
{
uf: "RO",
value: 5736,
cidade: "Cacaulândia"
},
{
uf: "PR",
value: 5735,
cidade: "Braganey"
},
{
uf: "RN",
value: 5734,
cidade: "Felipe Guerra"
},
{
uf: "PR",
value: 5727,
cidade: "Doutor Ulysses"
},
{
uf: "RS",
value: 5727,
cidade: "São Nicolau"
},
{
uf: "SP",
value: 5723,
cidade: "Santa Albertina"
},
{
uf: "PI",
value: 5722,
cidade: "Jacobina do Piauí"
},
{
uf: "MG",
value: 5720,
cidade: "Barão de Monte Alto"
},
{
uf: "BA",
value: 5715,
cidade: "São José da Vitória"
},
{
uf: "SP",
value: 5714,
cidade: "Taciba"
},
{
uf: "MG",
value: 5708,
cidade: "Juvenília"
},
{
uf: "SC",
value: 5707,
cidade: "Imbuia"
},
{
uf: "SP",
value: 5706,
cidade: "Américo de Campos"
},
{
uf: "GO",
value: 5699,
cidade: "Inaciolândia"
},
{
uf: "MG",
value: 5697,
cidade: "Santa Rita do Itueto"
},
{
uf: "RS",
value: 5697,
cidade: "Santa Clara do Sul"
},
{
uf: "PR",
value: 5692,
cidade: "Ouro Verde do Oeste"
},
{
uf: "PR",
value: 5684,
cidade: "Maripá"
},
{
uf: "MG",
value: 5683,
cidade: "Senhora de Oliveira"
},
{
uf: "MG",
value: 5676,
cidade: "Soledade de Minas"
},
{
uf: "RS",
value: 5676,
cidade: "Morro Reuter"
},
{
uf: "SP",
value: 5675,
cidade: "Orindiúva"
},
{
uf: "PI",
value: 5675,
cidade: "São Julião"
},
{
uf: "TO",
value: 5671,
cidade: "Aliança do Tocantins"
},
{
uf: "PI",
value: 5671,
cidade: "Caldeirão Grande do Piauí"
},
{
uf: "MG",
value: 5658,
cidade: "Virgolândia"
},
{
uf: "SP",
value: 5657,
cidade: "Jaci"
},
{
uf: "ES",
value: 5655,
cidade: "Mucurici"
},
{
uf: "PR",
value: 5653,
cidade: "Perobal"
},
{
uf: "SP",
value: 5653,
cidade: "Anhembi"
},
{
uf: "PE",
value: 5648,
cidade: "Calumbi"
},
{
uf: "SE",
value: 5645,
cidade: "Gracho Cardoso"
},
{
uf: "MG",
value: 5645,
cidade: "Chalé"
},
{
uf: "RN",
value: 5637,
cidade: "Senador Elói de Souza"
},
{
uf: "PB",
value: 5637,
cidade: "Caldas Brandão"
},
{
uf: "MG",
value: 5636,
cidade: "São José do Goiabal"
},
{
uf: "SE",
value: 5633,
cidade: "Cedro de São João"
},
{
uf: "PR",
value: 5628,
cidade: "Pranchita"
},
{
uf: "PB",
value: 5613,
cidade: "Malta"
},
{
uf: "PB",
value: 5611,
cidade: "Barra de São Miguel"
},
{
uf: "PI",
value: 5608,
cidade: "São João da Fronteira"
},
{
uf: "PB",
value: 5601,
cidade: "Capim"
},
{
uf: "SP",
value: 5601,
cidade: "Águas de Santa Bárbara"
},
{
uf: "SC",
value: 5600,
cidade: "Luzerna"
},
{
uf: "MA",
value: 5596,
cidade: "Tufilândia"
},
{
uf: "MG",
value: 5594,
cidade: "Sardoá"
},
{
uf: "PI",
value: 5592,
cidade: "Campo Grande do Piauí"
},
{
uf: "MG",
value: 5589,
cidade: "Cana Verde"
},
{
uf: "PR",
value: 5588,
cidade: "Rosário do Ivaí"
},
{
uf: "SP",
value: 5582,
cidade: "Pardinho"
},
{
uf: "MG",
value: 5579,
cidade: "Patis"
},
{
uf: "MA",
value: 5577,
cidade: "Brejo de Areia"
},
{
uf: "PI",
value: 5572,
cidade: "Cocal dos Alves"
},
{
uf: "MG",
value: 5570,
cidade: "São Pedro do Suaçuí"
},
{
uf: "SP",
value: 5568,
cidade: "Santa Ernestina"
},
{
uf: "SP",
value: 5567,
cidade: "Campina do Monte Alegre"
},
{
uf: "PI",
value: 5567,
cidade: "São Francisco de Assis do Piauí"
},
{
uf: "RN",
value: 5564,
cidade: "Itaú"
},
{
uf: "AL",
value: 5558,
cidade: "Jaramataia"
},
{
uf: "MG",
value: 5555,
cidade: "Nova União"
},
{
uf: "SC",
value: 5551,
cidade: "Romelândia"
},
{
uf: "SC",
value: 5549,
cidade: "Aurora"
},
{
uf: "MG",
value: 5549,
cidade: "Veredinha"
},
{
uf: "SC",
value: 5548,
cidade: "Águas Mornas"
},
{
uf: "MG",
value: 5537,
cidade: "Presidente Bernardes"
},
{
uf: "SP",
value: 5534,
cidade: "Fernando Prestes"
},
{
uf: "PB",
value: 5530,
cidade: "Aguiar"
},
{
uf: "AL",
value: 5526,
cidade: "Coqueiro Seco"
},
{
uf: "PI",
value: 5525,
cidade: "Caraúbas do Piauí"
},
{
uf: "RN",
value: 5522,
cidade: "Japi"
},
{
uf: "RS",
value: 5518,
cidade: "Rondinha"
},
{
uf: "PR",
value: 5517,
cidade: "São Jorge do Ivaí"
},
{
uf: "MT",
value: 5516,
cidade: "Acorizal"
},
{
uf: "PR",
value: 5516,
cidade: "Diamante do Norte"
},
{
uf: "PI",
value: 5513,
cidade: "Santa Luz"
},
{
uf: "RS",
value: 5510,
cidade: "Machadinho"
},
{
uf: "GO",
value: 5509,
cidade: "Britânia"
},
{
uf: "PB",
value: 5508,
cidade: "São José dos Ramos"
},
{
uf: "GO",
value: 5508,
cidade: "Americano do Brasil"
},
{
uf: "RS",
value: 5506,
cidade: "Campinas do Sul"
},
{
uf: "PR",
value: 5503,
cidade: "Nova Olímpia"
},
{
uf: "MG",
value: 5491,
cidade: "Bom Jesus do Amparo"
},
{
uf: "MT",
value: 5490,
cidade: "Cocalinho"
},
{
uf: "MA",
value: 5487,
cidade: "Sambaíba"
},
{
uf: "PI",
value: 5475,
cidade: "Geminiano"
},
{
uf: "MA",
value: 5469,
cidade: "Benedito Leite"
},
{
uf: "GO",
value: 5467,
cidade: "Ouvidor"
},
{
uf: "RS",
value: 5459,
cidade: "Campo Novo"
},
{
uf: "SP",
value: 5451,
cidade: "Sales"
},
{
uf: "MT",
value: 5449,
cidade: "Porto dos Gaúchos"
},
{
uf: "SP",
value: 5447,
cidade: "Taiúva"
},
{
uf: "PR",
value: 5443,
cidade: "Amaporã"
},
{
uf: "GO",
value: 5437,
cidade: "Itaguaru"
},
{
uf: "MT",
value: 5436,
cidade: "Nova Lacerda"
},
{
uf: "PR",
value: 5434,
cidade: "Paula Freitas"
},
{
uf: "MT",
value: 5431,
cidade: "Lambari D'Oeste"
},
{
uf: "SP",
value: 5427,
cidade: "Três Fronteiras"
},
{
uf: "MG",
value: 5425,
cidade: "Joanésia"
},
{
uf: "SP",
value: 5425,
cidade: "Guaimbê"
},
{
uf: "MG",
value: 5422,
cidade: "Luminárias"
},
{
uf: "PR",
value: 5420,
cidade: "Foz do Jordão"
},
{
uf: "SP",
value: 5413,
cidade: "Santa Maria da Serra"
},
{
uf: "AL",
value: 5413,
cidade: "Jacaré dos Homens"
},
{
uf: "RS",
value: 5413,
cidade: "Porto Lucena"
},
{
uf: "MG",
value: 5408,
cidade: "São Domingos das Dores"
},
{
uf: "PI",
value: 5408,
cidade: "Campinas do Piauí"
},
{
uf: "RN",
value: 5406,
cidade: "Tenente Laurentino Cruz"
},
{
uf: "RN",
value: 5405,
cidade: "Coronel Ezequiel"
},
{
uf: "MS",
value: 5398,
cidade: "Caracol"
},
{
uf: "SP",
value: 5395,
cidade: "Poloni"
},
{
uf: "MT",
value: 5395,
cidade: "Pontal do Araguaia"
},
{
uf: "MG",
value: 5395,
cidade: "Jeceaba"
},
{
uf: "PI",
value: 5393,
cidade: "Bonfim do Piauí"
},
{
uf: "BA",
value: 5384,
cidade: "Firmino Alves"
},
{
uf: "PI",
value: 5373,
cidade: "Júlio Borges"
},
{
uf: "PB",
value: 5369,
cidade: "Santa Helena"
},
{
uf: "MS",
value: 5364,
cidade: "Douradina"
},
{
uf: "PR",
value: 5361,
cidade: "Lindoeste"
},
{
uf: "RS",
value: 5357,
cidade: "Barracão"
},
{
uf: "RS",
value: 5351,
cidade: "Tavares"
},
{
uf: "SP",
value: 5349,
cidade: "Jambeiro"
},
{
uf: "PR",
value: 5349,
cidade: "São Tomé"
},
{
uf: "TO",
value: 5349,
cidade: "Barrolândia"
},
{
uf: "MG",
value: 5346,
cidade: "Liberdade"
},
{
uf: "RN",
value: 5345,
cidade: "Janduís"
},
{
uf: "TO",
value: 5340,
cidade: "Figueirópolis"
},
{
uf: "MG",
value: 5338,
cidade: "Bandeira do Sul"
},
{
uf: "PB",
value: 5331,
cidade: "Santana de Mangueira"
},
{
uf: "SE",
value: 5324,
cidade: "Feira Nova"
},
{
uf: "PI",
value: 5319,
cidade: "Bertolínia"
},
{
uf: "MT",
value: 5314,
cidade: "Bom Jesus do Araguaia"
},
{
uf: "RS",
value: 5313,
cidade: "Doutor Maurício Cardoso"
},
{
uf: "RS",
value: 5311,
cidade: "Viadutos"
},
{
uf: "SC",
value: 5308,
cidade: "Timbé do Sul"
},
{
uf: "PI",
value: 5304,
cidade: "Bom Princípio do Piauí"
},
{
uf: "MG",
value: 5297,
cidade: "Alto Caparaó"
},
{
uf: "MA",
value: 5293,
cidade: "Bacurituba"
},
{
uf: "MG",
value: 5292,
cidade: "Rio Preto"
},
{
uf: "SP",
value: 5289,
cidade: "Ubarana"
},
{
uf: "SP",
value: 5287,
cidade: "Piacatu"
},
{
uf: "MG",
value: 5287,
cidade: "Patrocínio do Muriaé"
},
{
uf: "RS",
value: 5285,
cidade: "Vicente Dutra"
},
{
uf: "MG",
value: 5284,
cidade: "Santa Maria do Salto"
},
{
uf: "PI",
value: 5281,
cidade: "Landri Sales"
},
{
uf: "MG",
value: 5276,
cidade: "Rio Manso"
},
{
uf: "MT",
value: 5276,
cidade: "Itanhangá"
},
{
uf: "AL",
value: 5275,
cidade: "Minador do Negrão"
},
{
uf: "TO",
value: 5273,
cidade: "Darcinópolis"
},
{
uf: "PR",
value: 5269,
cidade: "Santo Inácio"
},
{
uf: "RJ",
value: 5269,
cidade: "Macuco"
},
{
uf: "MG",
value: 5267,
cidade: "Olhos-d'Água"
},
{
uf: "PA",
value: 5265,
cidade: "São João da Ponta"
},
{
uf: "GO",
value: 5265,
cidade: "Goiandira"
},
{
uf: "BA",
value: 5255,
cidade: "Ichu"
},
{
uf: "SC",
value: 5250,
cidade: "Angelina"
},
{
uf: "PR",
value: 5249,
cidade: "Santana do Itararé"
},
{
uf: "MT",
value: 5247,
cidade: "Alto Boa Vista"
},
{
uf: "SP",
value: 5244,
cidade: "Barra do Chapéu"
},
{
uf: "MT",
value: 5240,
cidade: "São José do Xingu"
},
{
uf: "PB",
value: 5239,
cidade: "Alcantil"
},
{
uf: "SP",
value: 5238,
cidade: "Coroados"
},
{
uf: "RN",
value: 5236,
cidade: "Várzea"
},
{
uf: "PI",
value: 5235,
cidade: "Francinópolis"
},
{
uf: "RN",
value: 5231,
cidade: "Encanto"
},
{
uf: "PR",
value: 5227,
cidade: "Guaraci"
},
{
uf: "RS",
value: 5227,
cidade: "Lindolfo Collor"
},
{
uf: "MG",
value: 5223,
cidade: "Dores de Guanhães"
},
{
uf: "MG",
value: 5219,
cidade: "Senador Amaral"
},
{
uf: "MG",
value: 5217,
cidade: "Rio do Prado"
},
{
uf: "SP",
value: 5217,
cidade: "Sabino"
},
{
uf: "RN",
value: 5217,
cidade: "Porto do Mangue"
},
{
uf: "MG",
value: 5217,
cidade: "Piranguçu"
},
{
uf: "PI",
value: 5213,
cidade: "Manoel Emídio"
},
{
uf: "MG",
value: 5211,
cidade: "Datas"
},
{
uf: "MG",
value: 5209,
cidade: "Dom Cavati"
},
{
uf: "MG",
value: 5209,
cidade: "Caparaó"
},
{
uf: "PB",
value: 5209,
cidade: "Curral de Cima"
},
{
uf: "SC",
value: 5207,
cidade: "Vitor Meireles"
},
{
uf: "RS",
value: 5198,
cidade: "Sentinela do Sul"
},
{
uf: "MG",
value: 5196,
cidade: "Dom Silvério"
},
{
uf: "MG",
value: 5188,
cidade: "São João do Manteninha"
},
{
uf: "TO",
value: 5185,
cidade: "Brejinho de Nazaré"
},
{
uf: "RS",
value: 5182,
cidade: "Picada Café"
},
{
uf: "MG",
value: 5178,
cidade: "São Francisco do Glória"
},
{
uf: "PR",
value: 5178,
cidade: "Salto do Itararé"
},
{
uf: "MG",
value: 5175,
cidade: "Entre Folhas"
},
{
uf: "RS",
value: 5163,
cidade: "Erval Grande"
},
{
uf: "TO",
value: 5162,
cidade: "Aguiarnópolis"
},
{
uf: "PR",
value: 5160,
cidade: "Lunardelli"
},
{
uf: "MG",
value: 5158,
cidade: "Conceição do Pará"
},
{
uf: "MG",
value: 5156,
cidade: "Jequitibá"
},
{
uf: "PB",
value: 5155,
cidade: "Pilõezinhos"
},
{
uf: "RS",
value: 5154,
cidade: "Passa Sete"
},
{
uf: "MT",
value: 5154,
cidade: "Campos de Júlio"
},
{
uf: "PI",
value: 5153,
cidade: "Alegrete do Piauí"
},
{
uf: "SP",
value: 5152,
cidade: "Aramina"
},
{
uf: "SP",
value: 5151,
cidade: "Taquarivaí"
},
{
uf: "PI",
value: 5149,
cidade: "Santa Rosa do Piauí"
},
{
uf: "PI",
value: 5148,
cidade: "São José do Divino"
},
{
uf: "GO",
value: 5145,
cidade: "Vila Propício"
},
{
uf: "MG",
value: 5142,
cidade: "Felício dos Santos"
},
{
uf: "MG",
value: 5139,
cidade: "Gameleiras"
},
{
uf: "RS",
value: 5134,
cidade: "Marcelino Ramos"
},
{
uf: "MT",
value: 5123,
cidade: "Ipiranga do Norte"
},
{
uf: "RS",
value: 5118,
cidade: "Vale Real"
},
{
uf: "RN",
value: 5113,
cidade: "Bento Fernandes"
},
{
uf: "AL",
value: 5112,
cidade: "Palestina"
},
{
uf: "RS",
value: 5111,
cidade: "Mata"
},
{
uf: "PB",
value: 5111,
cidade: "Borborema"
},
{
uf: "MG",
value: 5102,
cidade: "Catuti"
},
{
uf: "PI",
value: 5100,
cidade: "Joca Marques"
},
{
uf: "PR",
value: 5098,
cidade: "Nova Esperança do Sudoeste"
},
{
uf: "PI",
value: 5098,
cidade: "Agricolândia"
},
{
uf: "GO",
value: 5090,
cidade: "Água Fria de Goiás"
},
{
uf: "PR",
value: 5088,
cidade: "Quinta do Sol"
},
{
uf: "PI",
value: 5074,
cidade: "Fartura do Piauí"
},
{
uf: "RS",
value: 5071,
cidade: "Caiçara"
},
{
uf: "MG",
value: 5070,
cidade: "Volta Grande"
},
{
uf: "MT",
value: 5070,
cidade: "Rio Branco"
},
{
uf: "TO",
value: 5068,
cidade: "Silvanópolis"
},
{
uf: "MG",
value: 5067,
cidade: "Jampruca"
},
{
uf: "GO",
value: 5062,
cidade: "Itajá"
},
{
uf: "TO",
value: 5054,
cidade: "Pequizeiro"
},
{
uf: "MG",
value: 5053,
cidade: "Amparo do Serra"
},
{
uf: "PR",
value: 5050,
cidade: "Floraí"
},
{
uf: "PI",
value: 5050,
cidade: "Alvorada do Gurguéia"
},
{
uf: "PA",
value: 5047,
cidade: "Sapucaia"
},
{
uf: "PR",
value: 5046,
cidade: "Mercedes"
},
{
uf: "PB",
value: 5045,
cidade: "Vieirópolis"
},
{
uf: "BA",
value: 5041,
cidade: "Cravolândia"
},
{
uf: "MG",
value: 5040,
cidade: "São Pedro da União"
},
{
uf: "SP",
value: 5039,
cidade: "Caiuá"
},
{
uf: "PI",
value: 5039,
cidade: "Caxingó"
},
{
uf: "MG",
value: 5036,
cidade: "Ibertioga"
},
{
uf: "MS",
value: 5036,
cidade: "Rio Negro"
},
{
uf: "PB",
value: 5035,
cidade: "Cabaceiras"
},
{
uf: "PB",
value: 5035,
cidade: "Bom Sucesso"
},
{
uf: "TO",
value: 5030,
cidade: "Araguanã"
},
{
uf: "MG",
value: 5030,
cidade: "Braúnas"
},
{
uf: "SP",
value: 5030,
cidade: "Luiziânia"
},
{
uf: "PR",
value: 5028,
cidade: "Saudade do Iguaçu"
},
{
uf: "PR",
value: 5027,
cidade: "Diamante D'Oeste"
},
{
uf: "MT",
value: 5027,
cidade: "General Carneiro"
},
{
uf: "SP",
value: 5021,
cidade: "Braúna"
},
{
uf: "RN",
value: 5020,
cidade: "Sítio Novo"
},
{
uf: "GO",
value: 5020,
cidade: "Campos Verdes"
},
{
uf: "SC",
value: 5012,
cidade: "São Cristovão do Sul"
},
{
uf: "RS",
value: 5010,
cidade: "Itaara"
},
{
uf: "TO",
value: 5009,
cidade: "Couto Magalhães"
},
{
uf: "MG",
value: 5007,
cidade: "Cristiano Otoni"
},
{
uf: "GO",
value: 5007,
cidade: "Mossâmedes"
},
{
uf: "MG",
value: 5007,
cidade: "Bocaina de Minas"
},
{
uf: "SP",
value: 5001,
cidade: "Coronel Macedo"
},
{
uf: "MG",
value: 4993,
cidade: "Santa Rita de Jacutinga"
},
{
uf: "PI",
value: 4993,
cidade: "Palmeira do Piauí"
},
{
uf: "MG",
value: 4992,
cidade: "Santa Cruz do Escalvado"
},
{
uf: "PB",
value: 4990,
cidade: "Montadas"
},
{
uf: "MG",
value: 4988,
cidade: "Itacambira"
},
{
uf: "MG",
value: 4987,
cidade: "Bandeira"
},
{
uf: "PR",
value: 4981,
cidade: "Marquinho"
},
{
uf: "SE",
value: 4972,
cidade: "Itabi"
},
{
uf: "MG",
value: 4968,
cidade: "Caiana"
},
{
uf: "MG",
value: 4963,
cidade: "Novorizonte"
},
{
uf: "GO",
value: 4962,
cidade: "Divinópolis de Goiás"
},
{
uf: "MG",
value: 4960,
cidade: "Augusto de Lima"
},
{
uf: "SP",
value: 4959,
cidade: "Avaí"
},
{
uf: "AL",
value: 4957,
cidade: "Olho d'Água Grande"
},
{
uf: "TO",
value: 4956,
cidade: "Goianorte"
},
{
uf: "RS",
value: 4954,
cidade: "Caibaté"
},
{
uf: "TO",
value: 4954,
cidade: "Palmeirante"
},
{
uf: "GO",
value: 4949,
cidade: "Gouvelândia"
},
{
uf: "MG",
value: 4948,
cidade: "São Sebastião da Bela Vista"
},
{
uf: "RS",
value: 4944,
cidade: "Chuvisca"
},
{
uf: "MG",
value: 4943,
cidade: "Congonhas do Norte"
},
{
uf: "MS",
value: 4940,
cidade: "Novo Horizonte do Sul"
},
{
uf: "MG",
value: 4937,
cidade: "Divino das Laranjeiras"
},
{
uf: "MT",
value: 4932,
cidade: "Nova Guarita"
},
{
uf: "RS",
value: 4929,
cidade: "Selbach"
},
{
uf: "MS",
value: 4928,
cidade: "Rochedo"
},
{
uf: "MG",
value: 4925,
cidade: "Ritápolis"
},
{
uf: "MG",
value: 4925,
cidade: "Capitão Andrade"
},
{
uf: "RS",
value: 4922,
cidade: "Ciríaco"
},
{
uf: "RS",
value: 4919,
cidade: "Humaitá"
},
{
uf: "MG",
value: 4918,
cidade: "Paulistas"
},
{
uf: "PI",
value: 4917,
cidade: "Santana do Piauí"
},
{
uf: "PI",
value: 4913,
cidade: "Várzea Branca"
},
{
uf: "RS",
value: 4911,
cidade: "Maximiliano de Almeida"
},
{
uf: "SC",
value: 4908,
cidade: "Guarujá do Sul"
},
{
uf: "SC",
value: 4904,
cidade: "Agronômica"
},
{
uf: "MG",
value: 4904,
cidade: "Madre de Deus de Minas"
},
{
uf: "PR",
value: 4903,
cidade: "Japira"
},
{
uf: "PR",
value: 4902,
cidade: "Jaboti"
},
{
uf: "PB",
value: 4900,
cidade: "Damião"
},
{
uf: "SC",
value: 4894,
cidade: "Ponte Alta"
},
{
uf: "RO",
value: 4888,
cidade: "Teixeirópolis"
},
{
uf: "MA",
value: 4885,
cidade: "Nova Colinas"
},
{
uf: "SP",
value: 4884,
cidade: "Alambari"
},
{
uf: "GO",
value: 4883,
cidade: "Formoso"
},
{
uf: "RN",
value: 4871,
cidade: "Almino Afonso"
},
{
uf: "PI",
value: 4869,
cidade: "Curral Novo do Piauí"
},
{
uf: "RS",
value: 4868,
cidade: "Cacique Doble"
},
{
uf: "BA",
value: 4866,
cidade: "Ibiquera"
},
{
uf: "MT",
value: 4866,
cidade: "Curvelândia"
},
{
uf: "RS",
value: 4864,
cidade: "Araricá"
},
{
uf: "MG",
value: 4863,
cidade: "Francisco Dumont"
},
{
uf: "MS",
value: 4862,
cidade: "Corguinho"
},
{
uf: "PR",
value: 4856,
cidade: "Quarto Centenário"
},
{
uf: "RS",
value: 4855,
cidade: "Miraguaí"
},
{
uf: "PI",
value: 4850,
cidade: "Lagoa do Sítio"
},
{
uf: "MG",
value: 4846,
cidade: "Catas Altas"
},
{
uf: "RN",
value: 4845,
cidade: "Parazinho"
},
{
uf: "SP",
value: 4841,
cidade: "Lagoinha"
},
{
uf: "GO",
value: 4839,
cidade: "Turvânia"
},
{
uf: "SC",
value: 4838,
cidade: "Riqueza"
},
{
uf: "PI",
value: 4826,
cidade: "Caridade do Piauí"
},
{
uf: "SP",
value: 4825,
cidade: "Indiana"
},
{
uf: "PR",
value: 4822,
cidade: "Pato Bragado"
},
{
uf: "SP",
value: 4818,
cidade: "Salmourão"
},
{
uf: "PB",
value: 4812,
cidade: "Catingueira"
},
{
uf: "SP",
value: 4812,
cidade: "Marabá Paulista"
},
{
uf: "RO",
value: 4810,
cidade: "Parecis"
},
{
uf: "SP",
value: 4809,
cidade: "Tejupá"
},
{
uf: "MG",
value: 4804,
cidade: "Leme do Prado"
},
{
uf: "PR",
value: 4802,
cidade: "Fênix"
},
{
uf: "SC",
value: 4793,
cidade: "Vargem Bonita"
},
{
uf: "RS",
value: 4791,
cidade: "Muçum"
},
{
uf: "SC",
value: 4786,
cidade: "Piratuba"
},
{
uf: "MT",
value: 4786,
cidade: "Canabrava do Norte"
},
{
uf: "PR",
value: 4784,
cidade: "Presidente Castelo Branco"
},
{
uf: "RN",
value: 4772,
cidade: "Coronel João Pessoa"
},
{
uf: "MG",
value: 4770,
cidade: "Aricanduva"
},
{
uf: "MG",
value: 4768,
cidade: "Descoberto"
},
{
uf: "MG",
value: 4768,
cidade: "Jesuânia"
},
{
uf: "GO",
value: 4762,
cidade: "Santa Fé de Goiás"
},
{
uf: "RN",
value: 4762,
cidade: "Santa Maria"
},
{
uf: "PB",
value: 4760,
cidade: "São José de Espinharas"
},
{
uf: "MG",
value: 4757,
cidade: "Crucilândia"
},
{
uf: "PI",
value: 4757,
cidade: "Juazeiro do Piauí"
},
{
uf: "MG",
value: 4755,
cidade: "Capela Nova"
},
{
uf: "PI",
value: 4754,
cidade: "São Gonçalo do Piauí"
},
{
uf: "SP",
value: 4754,
cidade: "Guzolândia"
},
{
uf: "SC",
value: 4752,
cidade: "Ipira"
},
{
uf: "RS",
value: 4738,
cidade: "Maçambará"
},
{
uf: "GO",
value: 4735,
cidade: "Vila Boa"
},
{
uf: "MG",
value: 4733,
cidade: "Vargem Grande do Rio Pardo"
},
{
uf: "RS",
value: 4726,
cidade: "São João da Urtiga"
},
{
uf: "PR",
value: 4726,
cidade: "Flor da Serra do Sul"
},
{
uf: "SC",
value: 4721,
cidade: "José Boiteux"
},
{
uf: "MG",
value: 4718,
cidade: "Guaraciama"
},
{
uf: "MG",
value: 4711,
cidade: "Ressaquinha"
},
{
uf: "RS",
value: 4710,
cidade: "Ibiaçá"
},
{
uf: "MG",
value: 4709,
cidade: "Piedade do Rio Grande"
},
{
uf: "PI",
value: 4704,
cidade: "Currais"
},
{
uf: "SC",
value: 4704,
cidade: "São Pedro de Alcântara"
},
{
uf: "GO",
value: 4703,
cidade: "Santo Antônio de Goiás"
},
{
uf: "MA",
value: 4702,
cidade: "São Félix de Balsas"
},
{
uf: "RN",
value: 4699,
cidade: "Ouro Branco"
},
{
uf: "AP",
value: 4696,
cidade: "Cutias"
},
{
uf: "PI",
value: 4693,
cidade: "Campo Alegre do Fidalgo"
},
{
uf: "RN",
value: 4692,
cidade: "Rafael Fernandes"
},
{
uf: "AC",
value: 4691,
cidade: "Santa Rosa do Purus"
},
{
uf: "MG",
value: 4689,
cidade: "Vermelho Novo"
},
{
uf: "MG",
value: 4689,
cidade: "Moeda"
},
{
uf: "PI",
value: 4688,
cidade: "Arraial"
},
{
uf: "MG",
value: 4687,
cidade: "Fronteira dos Vales"
},
{
uf: "PB",
value: 4687,
cidade: "Congo"
},
{
uf: "GO",
value: 4686,
cidade: "Caturaí"
},
{
uf: "RS",
value: 4683,
cidade: "David Canabarro"
},
{
uf: "PB",
value: 4681,
cidade: "Lagoa"
},
{
uf: "MG",
value: 4680,
cidade: "Cuparaque"
},
{
uf: "SC",
value: 4679,
cidade: "Guatambú"
},
{
uf: "PR",
value: 4677,
cidade: "Espigão Alto do Iguaçu"
},
{
uf: "RS",
value: 4675,
cidade: "Brochier"
},
{
uf: "RS",
value: 4671,
cidade: "Nova Esperança do Sul"
},
{
uf: "TO",
value: 4669,
cidade: "Combinado"
},
{
uf: "PI",
value: 4665,
cidade: "Eliseu Martins"
},
{
uf: "PR",
value: 4664,
cidade: "Tamboara"
},
{
uf: "BA",
value: 4663,
cidade: "Contendas do Sincorá"
},
{
uf: "MG",
value: 4658,
cidade: "Natércia"
},
{
uf: "MG",
value: 4658,
cidade: "Turvolândia"
},
{
uf: "MG",
value: 4656,
cidade: "Monte Formoso"
},
{
uf: "MG",
value: 4656,
cidade: "Pirajuba"
},
{
uf: "PI",
value: 4656,
cidade: "Jatobá do Piauí"
},
{
uf: "MG",
value: 4656,
cidade: "São João da Lagoa"
},
{
uf: "PI",
value: 4651,
cidade: "São João da Varjota"
},
{
uf: "SP",
value: 4650,
cidade: "Álvaro de Carvalho"
},
{
uf: "SC",
value: 4642,
cidade: "Lindóia do Sul"
},
{
uf: "MG",
value: 4640,
cidade: "Piedade dos Gerais"
},
{
uf: "SP",
value: 4640,
cidade: "Mendonça"
},
{
uf: "MG",
value: 4637,
cidade: "Brás Pires"
},
{
uf: "SC",
value: 4633,
cidade: "Tunápolis"
},
{
uf: "MG",
value: 4631,
cidade: "Paineiras"
},
{
uf: "CE",
value: 4629,
cidade: "Granjeiro"
},
{
uf: "MG",
value: 4628,
cidade: "Canaã"
},
{
uf: "GO",
value: 4617,
cidade: "São Luiz do Norte"
},
{
uf: "MA",
value: 4613,
cidade: "Sucupira do Riachão"
},
{
uf: "RN",
value: 4612,
cidade: "Lajes Pintadas"
},
{
uf: "TO",
value: 4608,
cidade: "São Bento do Tocantins"
},
{
uf: "MG",
value: 4607,
cidade: "Santana do Jacaré"
},
{
uf: "PR",
value: 4603,
cidade: "Marumbi"
},
{
uf: "BA",
value: 4602,
cidade: "Aiquara"
},
{
uf: "TO",
value: 4601,
cidade: "Caseara"
},
{
uf: "MG",
value: 4600,
cidade: "Santa Efigênia de Minas"
},
{
uf: "SP",
value: 4599,
cidade: "Pratânia"
},
{
uf: "MG",
value: 4595,
cidade: "Materlândia"
},
{
uf: "TO",
value: 4592,
cidade: "Dueré"
},
{
uf: "SP",
value: 4592,
cidade: "Novais"
},
{
uf: "PR",
value: 4592,
cidade: "Lupionópolis"
},
{
uf: "MA",
value: 4590,
cidade: "Nova Iorque"
},
{
uf: "TO",
value: 4588,
cidade: "Pau D'Arco"
},
{
uf: "MT",
value: 4587,
cidade: "Nova Brasilândia"
},
{
uf: "PB",
value: 4581,
cidade: "Santa Teresinha"
},
{
uf: "MG",
value: 4577,
cidade: "São Bento Abade"
},
{
uf: "RS",
value: 4575,
cidade: "Fortaleza dos Valos"
},
{
uf: "MT",
value: 4575,
cidade: "Itaúba"
},
{
uf: "MG",
value: 4574,
cidade: "Senador Modestino Gonçalves"
},
{
uf: "MG",
value: 4570,
cidade: "Santa Bárbara do Tugúrio"
},
{
uf: "MS",
value: 4569,
cidade: "Alcinópolis"
},
{
uf: "TO",
value: 4568,
cidade: "Santa Rosa do Tocantins"
},
{
uf: "PR",
value: 4568,
cidade: "Boa Esperança"
},
{
uf: "PR",
value: 4568,
cidade: "Itaguajé"
},
{
uf: "PR",
value: 4568,
cidade: "Serranópolis do Iguaçu"
},
{
uf: "MG",
value: 4566,
cidade: "Josenópolis"
},
{
uf: "GO",
value: 4566,
cidade: "Rianápolis"
},
{
uf: "SP",
value: 4565,
cidade: "Glicério"
},
{
uf: "PR",
value: 4563,
cidade: "Cruzeiro do Sul"
},
{
uf: "BA",
value: 4561,
cidade: "Gavião"
},
{
uf: "MG",
value: 4556,
cidade: "Carvalhos"
},
{
uf: "PI",
value: 4556,
cidade: "Nossa Senhora de Nazaré"
},
{
uf: "MG",
value: 4553,
cidade: "José Gonçalves de Minas"
},
{
uf: "AL",
value: 4551,
cidade: "Belém"
},
{
uf: "MG",
value: 4549,
cidade: "Miravânia"
},
{
uf: "PI",
value: 4546,
cidade: "Passagem Franca do Piauí"
},
{
uf: "TO",
value: 4544,
cidade: "Ponte Alta do Bom Jesus"
},
{
uf: "PB",
value: 4543,
cidade: "Caturité"
},
{
uf: "MG",
value: 4542,
cidade: "Claraval"
},
{
uf: "PI",
value: 4541,
cidade: "Coronel José Dias"
},
{
uf: "RN",
value: 4540,
cidade: "Serrinha dos Pintos"
},
{
uf: "SP",
value: 4539,
cidade: "Campos Novos Paulista"
},
{
uf: "MG",
value: 4535,
cidade: "Dom Joaquim"
},
{
uf: "PI",
value: 4525,
cidade: "Cocal de Telha"
},
{
uf: "PI",
value: 4523,
cidade: "Lagoa do Barro do Piauí"
},
{
uf: "PI",
value: 4522,
cidade: "Socorro do Piauí"
},
{
uf: "PI",
value: 4517,
cidade: "Jurema"
},
{
uf: "ES",
value: 4516,
cidade: "Divino de São Lourenço"
},
{
uf: "PR",
value: 4514,
cidade: "Porto Amazonas"
},
{
uf: "GO",
value: 4513,
cidade: "Itaguari"
},
{
uf: "PB",
value: 4508,
cidade: "Monte Horebe"
},
{
uf: "TO",
value: 4506,
cidade: "Pindorama do Tocantins"
},
{
uf: "PR",
value: 4506,
cidade: "Kaloré"
},
{
uf: "GO",
value: 4505,
cidade: "Alto Horizonte"
},
{
uf: "MG",
value: 4498,
cidade: "Bertópolis"
},
{
uf: "RS",
value: 4497,
cidade: "Pinheirinho do Vale"
},
{
uf: "PE",
value: 4496,
cidade: "Ingazeira"
},
{
uf: "MG",
value: 4493,
cidade: "Oratórios"
},
{
uf: "PI",
value: 4477,
cidade: "Francisco Ayres"
},
{
uf: "PI",
value: 4475,
cidade: "Conceição do Canindé"
},
{
uf: "RS",
value: 4471,
cidade: "Pinhal Grande"
},
{
uf: "SC",
value: 4468,
cidade: "Botuverá"
},
{
uf: "SP",
value: 4463,
cidade: "Planalto"
},
{
uf: "SP",
value: 4463,
cidade: "Ipiguá"
},
{
uf: "MG",
value: 4462,
cidade: "Dores do Turvo"
},
{
uf: "PI",
value: 4456,
cidade: "Marcos Parente"
},
{
uf: "MG",
value: 4456,
cidade: "Conceição de Ipanema"
},
{
uf: "TO",
value: 4456,
cidade: "Bernardo Sayão"
},
{
uf: "RS",
value: 4454,
cidade: "Cerro Branco"
},
{
uf: "SP",
value: 4450,
cidade: "Aparecida d'Oeste"
},
{
uf: "SC",
value: 4446,
cidade: "Rio Fortuna"
},
{
uf: "SP",
value: 4446,
cidade: "Ribeirão do Sul"
},
{
uf: "PI",
value: 4445,
cidade: "São João da Canabrava"
},
{
uf: "MG",
value: 4444,
cidade: "Alvarenga"
},
{
uf: "SP",
value: 4430,
cidade: "Júlio Mesquita"
},
{
uf: "MG",
value: 4429,
cidade: "Espírito Santo do Dourado"
},
{
uf: "PI",
value: 4427,
cidade: "São Lourenço do Piauí"
},
{
uf: "SP",
value: 4427,
cidade: "Ubirajara"
},
{
uf: "MA",
value: 4425,
cidade: "São Pedro dos Crentes"
},
{
uf: "SC",
value: 4425,
cidade: "Passos Maia"
},
{
uf: "MG",
value: 4425,
cidade: "Serranópolis de Minas"
},
{
uf: "GO",
value: 4423,
cidade: "Santo Antônio da Barra"
},
{
uf: "MG",
value: 4420,
cidade: "Pingo-d'Água"
},
{
uf: "SP",
value: 4419,
cidade: "Gavião Peixoto"
},
{
uf: "MG",
value: 4418,
cidade: "União de Minas"
},
{
uf: "RN",
value: 4418,
cidade: "Rodolfo Fernandes"
},
{
uf: "GO",
value: 4414,
cidade: "Matrinchã"
},
{
uf: "SC",
value: 4411,
cidade: "Caxambu do Sul"
},
{
uf: "PR",
value: 4407,
cidade: "Campo Bonito"
},
{
uf: "PR",
value: 4403,
cidade: "Salgado Filho"
},
{
uf: "PI",
value: 4401,
cidade: "Guaribas"
},
{
uf: "PR",
value: 4401,
cidade: "Lobato"
},
{
uf: "GO",
value: 4399,
cidade: "Turvelândia"
},
{
uf: "MG",
value: 4397,
cidade: "Santa Cruz de Salinas"
},
{
uf: "PB",
value: 4396,
cidade: "São João do Tigre"
},
{
uf: "SC",
value: 4395,
cidade: "Bom Jardim da Serra"
},
{
uf: "PB",
value: 4395,
cidade: "Sertãozinho"
},
{
uf: "RS",
value: 4395,
cidade: "Tunas"
},
{
uf: "RS",
value: 4394,
cidade: "Aceguá"
},
{
uf: "PI",
value: 4390,
cidade: "Jerumenha"
},
{
uf: "MG",
value: 4389,
cidade: "São Geraldo da Piedade"
},
{
uf: "TO",
value: 4386,
cidade: "Nazaré"
},
{
uf: "SP",
value: 4385,
cidade: "Canas"
},
{
uf: "TO",
value: 4383,
cidade: "São Valério"
},
{
uf: "RS",
value: 4381,
cidade: "Três Palmeiras"
},
{
uf: "AP",
value: 4380,
cidade: "Serra do Navio"
},
{
uf: "MG",
value: 4376,
cidade: "José Raydan"
},
{
uf: "RS",
value: 4371,
cidade: "Ibarama"
},
{
uf: "MG",
value: 4370,
cidade: "Berizal"
},
{
uf: "PE",
value: 4369,
cidade: "Itacuruba"
},
{
uf: "PI",
value: 4369,
cidade: "Bocaina"
},
{
uf: "SP",
value: 4369,
cidade: "Canitar"
},
{
uf: "PI",
value: 4366,
cidade: "Flores do Piauí"
},
{
uf: "SP",
value: 4365,
cidade: "Cabrália Paulista"
},
{
uf: "PB",
value: 4361,
cidade: "Nova Palmeira"
},
{
uf: "SP",
value: 4357,
cidade: "Itapura"
},
{
uf: "SP",
value: 4353,
cidade: "Lupércio"
},
{
uf: "TO",
value: 4352,
cidade: "Marianópolis do Tocantins"
},
{
uf: "SC",
value: 4352,
cidade: "Erval Velho"
},
{
uf: "AL",
value: 4345,
cidade: "Feliz Deserto"
},
{
uf: "PB",
value: 4344,
cidade: "São João do Cariri"
},
{
uf: "PI",
value: 4336,
cidade: "Várzea Grande"
},
{
uf: "RS",
value: 4330,
cidade: "Riozinho"
},
{
uf: "SE",
value: 4326,
cidade: "Divina Pastora"
},
{
uf: "PB",
value: 4321,
cidade: "Matinhas"
},
{
uf: "PI",
value: 4313,
cidade: "São Braz do Piauí"
},
{
uf: "PI",
value: 4309,
cidade: "Jardim do Mulato"
},
{
uf: "PR",
value: 4306,
cidade: "Altamira do Paraná"
},
{
uf: "MG",
value: 4305,
cidade: "Joaquim Felício"
},
{
uf: "RS",
value: 4301,
cidade: "Alegria"
},
{
uf: "SC",
value: 4301,
cidade: "Salto Veloso"
},
{
uf: "SP",
value: 4299,
cidade: "Iporanga"
},
{
uf: "PR",
value: 4299,
cidade: "Indianópolis"
},
{
uf: "SP",
value: 4295,
cidade: "Mirassolândia"
},
{
uf: "RN",
value: 4295,
cidade: "Olho-d'Água do Borges"
},
{
uf: "SP",
value: 4293,
cidade: "Analândia"
},
{
uf: "PR",
value: 4290,
cidade: "Cafezal do Sul"
},
{
uf: "SP",
value: 4290,
cidade: "Motuca"
},
{
uf: "SP",
value: 4288,
cidade: "Narandiba"
},
{
uf: "TO",
value: 4283,
cidade: "São Sebastião do Tocantins"
},
{
uf: "PI",
value: 4280,
cidade: "Wall Ferraz"
},
{
uf: "PR",
value: 4278,
cidade: "Cruzeiro do Iguaçu"
},
{
uf: "SP",
value: 4277,
cidade: "Santópolis do Aguapeí"
},
{
uf: "SC",
value: 4275,
cidade: "Nova Erechim"
},
{
uf: "SP",
value: 4274,
cidade: "Nipoã"
},
{
uf: "SP",
value: 4273,
cidade: "Ribeirão Corrente"
},
{
uf: "SP",
value: 4268,
cidade: "Boracéia"
},
{
uf: "SC",
value: 4267,
cidade: "Nova Itaberaba"
},
{
uf: "AP",
value: 4265,
cidade: "Itaubal"
},
{
uf: "PB",
value: 4264,
cidade: "Riachão do Bacamarte"
},
{
uf: "PI",
value: 4264,
cidade: "Domingos Mourão"
},
{
uf: "PI",
value: 4263,
cidade: "Ribeira do Piauí"
},
{
uf: "GO",
value: 4258,
cidade: "Guarani de Goiás"
},
{
uf: "RS",
value: 4254,
cidade: "Harmonia"
},
{
uf: "SC",
value: 4253,
cidade: "Iraceminha"
},
{
uf: "MG",
value: 4247,
cidade: "Rosário da Limeira"
},
{
uf: "SP",
value: 4244,
cidade: "Espírito Santo do Turvo"
},
{
uf: "RS",
value: 4243,
cidade: "Paim Filho"
},
{
uf: "PI",
value: 4241,
cidade: "Riacho Frio"
},
{
uf: "RN",
value: 4233,
cidade: "Frutuoso Gomes"
},
{
uf: "RN",
value: 4231,
cidade: "São José do Seridó"
},
{
uf: "MG",
value: 4225,
cidade: "Lagoa dos Patos"
},
{
uf: "SP",
value: 4223,
cidade: "Populina"
},
{
uf: "RS",
value: 4221,
cidade: "Vila Maria"
},
{
uf: "RS",
value: 4221,
cidade: "Vila Nova do Sul"
},
{
uf: "MG",
value: 4220,
cidade: "Gonçalves"
},
{
uf: "MG",
value: 4220,
cidade: "Serra Azul de Minas"
},
{
uf: "PB",
value: 4220,
cidade: "Baraúna"
},
{
uf: "MG",
value: 4219,
cidade: "Marilac"
},
{
uf: "PB",
value: 4219,
cidade: "São José de Princesa"
},
{
uf: "TO",
value: 4213,
cidade: "Aparecida do Rio Negro"
},
{
uf: "MG",
value: 4204,
cidade: "Couto de Magalhães de Minas"
},
{
uf: "AL",
value: 4202,
cidade: "Jundiá"
},
{
uf: "MG",
value: 4198,
cidade: "São José da Varginha"
},
{
uf: "MG",
value: 4195,
cidade: "Cantagalo"
},
{
uf: "SC",
value: 4193,
cidade: "Arabutã"
},
{
uf: "SP",
value: 4193,
cidade: "Gastão Vidigal"
},
{
uf: "TO",
value: 4191,
cidade: "Riachinho"
},
{
uf: "RN",
value: 4188,
cidade: "Messias Targino"
},
{
uf: "PI",
value: 4187,
cidade: "Nova Santa Rita"
},
{
uf: "SP",
value: 4186,
cidade: "Murutinga do Sul"
},
{
uf: "PI",
value: 4183,
cidade: "Curralinhos"
},
{
uf: "TO",
value: 4182,
cidade: "Conceição do Tocantins"
},
{
uf: "RS",
value: 4177,
cidade: "Jaquirana"
},
{
uf: "RS",
value: 4171,
cidade: "Itatiba do Sul"
},
{
uf: "CE",
value: 4164,
cidade: "Guaramiranga"
},
{
uf: "PB",
value: 4164,
cidade: "Riachão do Poço"
},
{
uf: "SP",
value: 4163,
cidade: "Ocauçu"
},
{
uf: "MT",
value: 4158,
cidade: "São Pedro da Cipa"
},
{
uf: "RN",
value: 4156,
cidade: "Riacho de Santana"
},
{
uf: "SP",
value: 4150,
cidade: "João Ramalho"
},
{
uf: "PI",
value: 4147,
cidade: "Paquetá"
},
{
uf: "PR",
value: 4145,
cidade: "Leópolis"
},
{
uf: "SC",
value: 4142,
cidade: "Xavantina"
},
{
uf: "RS",
value: 4141,
cidade: "Putinga"
},
{
uf: "PB",
value: 4138,
cidade: "São Bentinho"
},
{
uf: "MG",
value: 4135,
cidade: "Santo Antônio do Itambé"
},
{
uf: "PR",
value: 4134,
cidade: "Ramilândia"
},
{
uf: "RS",
value: 4131,
cidade: "Tabaí"
},
{
uf: "MG",
value: 4128,
cidade: "Pescador"
},
{
uf: "TO",
value: 4123,
cidade: "Barra do Ouro"
},
{
uf: "SP",
value: 4123,
cidade: "Presidente Alves"
},
{
uf: "GO",
value: 4122,
cidade: "Montividiu do Norte"
},
{
uf: "SP",
value: 4120,
cidade: "Monteiro Lobato"
},
{
uf: "PI",
value: 4116,
cidade: "Sebastião Leal"
},
{
uf: "MG",
value: 4113,
cidade: "Juramento"
},
{
uf: "MG",
value: 4112,
cidade: "Tapira"
},
{
uf: "SC",
value: 4107,
cidade: "Pedras Grandes"
},
{
uf: "MG",
value: 4107,
cidade: "Ipiaçu"
},
{
uf: "RS",
value: 4102,
cidade: "Ilópolis"
},
{
uf: "SP",
value: 4102,
cidade: "Alto Alegre"
},
{
uf: "MG",
value: 4098,
cidade: "Fortaleza de Minas"
},
{
uf: "RS",
value: 4098,
cidade: "Jaboticaba"
},
{
uf: "PR",
value: 4095,
cidade: "Planaltina do Paraná"
},
{
uf: "RS",
value: 4094,
cidade: "São José do Hortêncio"
},
{
uf: "MG",
value: 4085,
cidade: "Santo Antônio do Grama"
},
{
uf: "MT",
value: 4085,
cidade: "Santa Carmem"
},
{
uf: "SC",
value: 4080,
cidade: "Paraíso"
},
{
uf: "MG",
value: 4079,
cidade: "Itamarati de Minas"
},
{
uf: "MG",
value: 4079,
cidade: "Tabuleiro"
},
{
uf: "SP",
value: 4077,
cidade: "São José do Barreiro"
},
{
uf: "PR",
value: 4076,
cidade: "Campina do Simão"
},
{
uf: "MG",
value: 4076,
cidade: "Pequi"
},
{
uf: "MG",
value: 4075,
cidade: "São José da Safira"
},
{
uf: "SP",
value: 4074,
cidade: "Pontalinda"
},
{
uf: "SP",
value: 4072,
cidade: "Caiabu"
},
{
uf: "MT",
value: 4071,
cidade: "Torixoréu"
},
{
uf: "PI",
value: 4068,
cidade: "Morro Cabeça no Tempo"
},
{
uf: "RS",
value: 4068,
cidade: "Marques de Souza"
},
{
uf: "SP",
value: 4063,
cidade: "Monte Castelo"
},
{
uf: "MG",
value: 4062,
cidade: "Piedade de Ponte Nova"
},
{
uf: "RS",
value: 4061,
cidade: "Ibirapuitã"
},
{
uf: "MG",
value: 4060,
cidade: "São João do Pacuí"
},
{
uf: "PI",
value: 4059,
cidade: "Paes Landim"
},
{
uf: "MG",
value: 4054,
cidade: "Aguanil"
},
{
uf: "SP",
value: 4053,
cidade: "Buritizal"
},
{
uf: "MG",
value: 4047,
cidade: "Cajuri"
},
{
uf: "SC",
value: 4045,
cidade: "Modelo"
},
{
uf: "RS",
value: 4044,
cidade: "Chiapetta"
},
{
uf: "SC",
value: 4041,
cidade: "Jaborá"
},
{
uf: "GO",
value: 4034,
cidade: "Ouro Verde de Goiás"
},
{
uf: "GO",
value: 4029,
cidade: "Hidrolina"
},
{
uf: "MG",
value: 4023,
cidade: "Santana do Riacho"
},
{
uf: "PR",
value: 4020,
cidade: "Porto Vitória"
},
{
uf: "MA",
value: 4020,
cidade: "Junco do Maranhão"
},
{
uf: "PB",
value: 4019,
cidade: "Mãe d'Água"
},
{
uf: "MG",
value: 4012,
cidade: "Marliéria"
},
{
uf: "RS",
value: 4012,
cidade: "Barra do Quaraí"
},
{
uf: "MS",
value: 4011,
cidade: "Jateí"
},
{
uf: "PB",
value: 4010,
cidade: "São José do Sabugi"
},
{
uf: "PR",
value: 4002,
cidade: "Corumbataí do Sul"
},
{
uf: "SP",
value: 4002,
cidade: "Santa Cruz da Conceição"
},
{
uf: "RS",
value: 4001,
cidade: "Nova Araçá"
},
{
uf: "MG",
value: 3996,
cidade: "São José do Alegre"
},
{
uf: "GO",
value: 3995,
cidade: "Santa Tereza de Goiás"
},
{
uf: "MG",
value: 3992,
cidade: "Bugre"
},
{
uf: "PB",
value: 3985,
cidade: "São José dos Cordeiros"
},
{
uf: "PR",
value: 3982,
cidade: "Iguaraçu"
},
{
uf: "RS",
value: 3978,
cidade: "Novo Barreiro"
},
{
uf: "PB",
value: 3978,
cidade: "Poço de José de Moura"
},
{
uf: "PR",
value: 3973,
cidade: "Lidianópolis"
},
{
uf: "RS",
value: 3973,
cidade: "Pejuçara"
},
{
uf: "RS",
value: 3970,
cidade: "Gramado Xavier"
},
{
uf: "MG",
value: 3968,
cidade: "Santa Fé de Minas"
},
{
uf: "MG",
value: 3966,
cidade: "Ponto Chique"
},
{
uf: "SC",
value: 3961,
cidade: "Saltinho"
},
{
uf: "SE",
value: 3956,
cidade: "Canhoba"
},
{
uf: "GO",
value: 3956,
cidade: "Novo Planalto"
},
{
uf: "PR",
value: 3955,
cidade: "Rancho Alegre"
},
{
uf: "MG",
value: 3954,
cidade: "Conceição da Barra de Minas"
},
{
uf: "RN",
value: 3952,
cidade: "Paraná"
},
{
uf: "PR",
value: 3950,
cidade: "Virmond"
},
{
uf: "RN",
value: 3950,
cidade: "Barcelona"
},
{
uf: "MG",
value: 3950,
cidade: "Tocos do Moji"
},
{
uf: "MG",
value: 3948,
cidade: "Carrancas"
},
{
uf: "PR",
value: 3945,
cidade: "Bela Vista da Caroba"
},
{
uf: "PB",
value: 3942,
cidade: "Logradouro"
},
{
uf: "MG",
value: 3939,
cidade: "Japaraíba"
},
{
uf: "BA",
value: 3936,
cidade: "Lajedinho"
},
{
uf: "MG",
value: 3934,
cidade: "Cruzeiro da Fortaleza"
},
{
uf: "MG",
value: 3929,
cidade: "Guarará"
},
{
uf: "PR",
value: 3926,
cidade: "Entre Rios do Oeste"
},
{
uf: "PR",
value: 3925,
cidade: "Santa Lúcia"
},
{
uf: "RS",
value: 3925,
cidade: "Novo Machado"
},
{
uf: "RS",
value: 3924,
cidade: "Tupandi"
},
{
uf: "RN",
value: 3924,
cidade: "Senador Georgino Avelino"
},
{
uf: "PI",
value: 3921,
cidade: "Canavieira"
},
{
uf: "MG",
value: 3920,
cidade: "Acaiaca"
},
{
uf: "RS",
value: 3917,
cidade: "Cotiporã"
},
{
uf: "SP",
value: 3916,
cidade: "Mariápolis"
},
{
uf: "PR",
value: 3913,
cidade: "Atalaia"
},
{
uf: "MG",
value: 3913,
cidade: "Itutinga"
},
{
uf: "MG",
value: 3908,
cidade: "Presidente Juscelino"
},
{
uf: "MT",
value: 3908,
cidade: "Salto do Céu"
},
{
uf: "PR",
value: 3908,
cidade: "Nova Santa Bárbara"
},
{
uf: "RN",
value: 3905,
cidade: "São Bento do Trairí"
},
{
uf: "SP",
value: 3903,
cidade: "Indiaporã"
},
{
uf: "BA",
value: 3901,
cidade: "Lafaiete Coutinho"
},
{
uf: "PB",
value: 3899,
cidade: "Caraúbas"
},
{
uf: "PR",
value: 3898,
cidade: "Rio Branco do Ivaí"
},
{
uf: "SP",
value: 3897,
cidade: "Álvares Florence"
},
{
uf: "PR",
value: 3891,
cidade: "Guapirama"
},
{
uf: "SP",
value: 3891,
cidade: "Alfredo Marcondes"
},
{
uf: "RS",
value: 3890,
cidade: "Capivari do Sul"
},
{
uf: "MG",
value: 3887,
cidade: "Bom Jesus da Penha"
},
{
uf: "SP",
value: 3884,
cidade: "Onda Verde"
},
{
uf: "SP",
value: 3880,
cidade: "Itapirapuã Paulista"
},
{
uf: "PI",
value: 3878,
cidade: "Capitão Gervásio Oliveira"
},
{
uf: "MG",
value: 3875,
cidade: "Pedra do Indaiá"
},
{
uf: "BA",
value: 3874,
cidade: "Dom Macedo Costa"
},
{
uf: "SP",
value: 3874,
cidade: "Corumbataí"
},
{
uf: "RN",
value: 3874,
cidade: "São Francisco do Oeste"
},
{
uf: "SP",
value: 3873,
cidade: "Redenção da Serra"
},
{
uf: "RS",
value: 3865,
cidade: "Mato Leitão"
},
{
uf: "TO",
value: 3864,
cidade: "Sampaio"
},
{
uf: "PI",
value: 3863,
cidade: "Lagoa do Piauí"
},
{
uf: "MG",
value: 3860,
cidade: "Santana do Deserto"
},
{
uf: "RN",
value: 3859,
cidade: "Paraú"
},
{
uf: "RS",
value: 3857,
cidade: "Pontão"
},
{
uf: "MG",
value: 3855,
cidade: "Funilândia"
},
{
uf: "SP",
value: 3855,
cidade: "Meridiano"
},
{
uf: "RS",
value: 3855,
cidade: "Novo Cabrais"
},
{
uf: "PB",
value: 3854,
cidade: "Prata"
},
{
uf: "PI",
value: 3852,
cidade: "Barra D'Alcântara"
},
{
uf: "PI",
value: 3850,
cidade: "Brejo do Piauí"
},
{
uf: "GO",
value: 3849,
cidade: "Mutunópolis"
},
{
uf: "MG",
value: 3848,
cidade: "Diogo de Vasconcelos"
},
{
uf: "RS",
value: 3842,
cidade: "Severiano de Almeida"
},
{
uf: "MG",
value: 3840,
cidade: "Minduri"
},
{
uf: "GO",
value: 3839,
cidade: "Portelândia"
},
{
uf: "PR",
value: 3836,
cidade: "Nossa Senhora das Graças"
},
{
uf: "MG",
value: 3834,
cidade: "São José do Divino"
},
{
uf: "PR",
value: 3830,
cidade: "São José das Palmeiras"
},
{
uf: "MG",
value: 3826,
cidade: "Ribeirão Vermelho"
},
{
uf: "MG",
value: 3822,
cidade: "Santana dos Montes"
},
{
uf: "RN",
value: 3821,
cidade: "Venha-Ver"
},
{
uf: "PR",
value: 3818,
cidade: "Mato Rico"
},
{
uf: "SP",
value: 3815,
cidade: "Paranapuã"
},
{
uf: "SP",
value: 3815,
cidade: "Altair"
},
{
uf: "MG",
value: 3814,
cidade: "Dom Bosco"
},
{
uf: "SE",
value: 3813,
cidade: "Cumbe"
},
{
uf: "PI",
value: 3811,
cidade: "Coivaras"
},
{
uf: "TO",
value: 3805,
cidade: "Fátima"
},
{
uf: "GO",
value: 3803,
cidade: "Aporé"
},
{
uf: "PR",
value: 3803,
cidade: "Quatro Pontes"
},
{
uf: "PR",
value: 3803,
cidade: "Santa Amélia"
},
{
uf: "GO",
value: 3802,
cidade: "Araçu"
},
{
uf: "MT",
value: 3796,
cidade: "Figueirópolis D'Oeste"
},
{
uf: "PR",
value: 3796,
cidade: "Bom Jesus do Sul"
},
{
uf: "PI",
value: 3794,
cidade: "Santa Cruz dos Milagres"
},
{
uf: "MG",
value: 3794,
cidade: "Taquaraçu de Minas"
},
{
uf: "AP",
value: 3793,
cidade: "Pracuúba"
},
{
uf: "MG",
value: 3793,
cidade: "Bias Fortes"
},
{
uf: "MG",
value: 3790,
cidade: "Nova Módica"
},
{
uf: "PI",
value: 3778,
cidade: "Bela Vista do Piauí"
},
{
uf: "PI",
value: 3771,
cidade: "Hugo Napoleão"
},
{
uf: "TO",
value: 3770,
cidade: "Nova Rosalândia"
},
{
uf: "TO",
value: 3768,
cidade: "Bom Jesus do Tocantins"
},
{
uf: "RS",
value: 3768,
cidade: "Mariana Pimentel"
},
{
uf: "TO",
value: 3768,
cidade: "Recursolândia"
},
{
uf: "SC",
value: 3767,
cidade: "Cordilheira Alta"
},
{
uf: "TO",
value: 3762,
cidade: "Novo Acordo"
},
{
uf: "MG",
value: 3761,
cidade: "Matutina"
},
{
uf: "MT",
value: 3760,
cidade: "União do Sul"
},
{
uf: "GO",
value: 3757,
cidade: "São Miguel do Passa Quatro"
},
{
uf: "PI",
value: 3757,
cidade: "Pau D'Arco do Piauí"
},
{
uf: "TO",
value: 3756,
cidade: "Cariri do Tocantins"
},
{
uf: "MT",
value: 3754,
cidade: "Santo Antônio do Leste"
},
{
uf: "MG",
value: 3753,
cidade: "Ewbank da Câmara"
},
{
uf: "PB",
value: 3751,
cidade: "Poço Dantas"
},
{
uf: "MT",
value: 3749,
cidade: "Novo Horizonte do Norte"
},
{
uf: "SE",
value: 3749,
cidade: "Santa Rosa de Lima"
},
{
uf: "SP",
value: 3738,
cidade: "Anhumas"
},
{
uf: "BA",
value: 3733,
cidade: "Lajedão"
},
{
uf: "GO",
value: 3733,
cidade: "Edealina"
},
{
uf: "MG",
value: 3732,
cidade: "Nova Belém"
},
{
uf: "MG",
value: 3731,
cidade: "Vieiras"
},
{
uf: "MG",
value: 3730,
cidade: "Córrego do Bom Jesus"
},
{
uf: "TO",
value: 3725,
cidade: "Lizarda"
},
{
uf: "RS",
value: 3722,
cidade: "Água Santa"
},
{
uf: "PB",
value: 3721,
cidade: "Pedra Branca"
},
{
uf: "SC",
value: 3721,
cidade: "Dona Emma"
},
{
uf: "GO",
value: 3714,
cidade: "Baliza"
},
{
uf: "SP",
value: 3702,
cidade: "Balbinos"
},
{
uf: "RS",
value: 3702,
cidade: "Braga"
},
{
uf: "PI",
value: 3700,
cidade: "São José do Peixe"
},
{
uf: "SP",
value: 3699,
cidade: "Sandovalina"
},
{
uf: "SE",
value: 3698,
cidade: "São Miguel do Aleixo"
},
{
uf: "RS",
value: 3697,
cidade: "Fazenda Vilanova"
},
{
uf: "SP",
value: 3696,
cidade: "Areias"
},
{
uf: "RS",
value: 3693,
cidade: "Arambaré"
},
{
uf: "TO",
value: 3688,
cidade: "Carrasco Bonito"
},
{
uf: "RN",
value: 3687,
cidade: "Tibau"
},
{
uf: "GO",
value: 3686,
cidade: "Santa Isabel"
},
{
uf: "MG",
value: 3684,
cidade: "Campo Azul"
},
{
uf: "TO",
value: 3681,
cidade: "Presidente Kennedy"
},
{
uf: "PR",
value: 3672,
cidade: "Munhoz de Melo"
},
{
uf: "RS",
value: 3665,
cidade: "Áurea"
},
{
uf: "SP",
value: 3664,
cidade: "Macedônia"
},
{
uf: "PR",
value: 3663,
cidade: "Porto Barreiro"
},
{
uf: "PI",
value: 3663,
cidade: "Pavussu"
},
{
uf: "MG",
value: 3659,
cidade: "Goianá"
},
{
uf: "GO",
value: 3659,
cidade: "Varjão"
},
{
uf: "GO",
value: 3656,
cidade: "Campinaçu"
},
{
uf: "MG",
value: 3654,
cidade: "Cachoeira da Prata"
},
{
uf: "RS",
value: 3653,
cidade: "Quinze de Novembro"
},
{
uf: "AL",
value: 3652,
cidade: "Mar Vermelho"
},
{
uf: "GO",
value: 3650,
cidade: "Aurilândia"
},
{
uf: "MT",
value: 3649,
cidade: "Porto Estrela"
},
{
uf: "PI",
value: 3648,
cidade: "Santo Inácio do Piauí"
},
{
uf: "PR",
value: 3646,
cidade: "Santa Cecília do Pavão"
},
{
uf: "PB",
value: 3638,
cidade: "Duas Estradas"
},
{
uf: "GO",
value: 3638,
cidade: "Castelândia"
},
{
uf: "PR",
value: 3636,
cidade: "Conselheiro Mairinck"
},
{
uf: "RS",
value: 3633,
cidade: "Jacutinga"
},
{
uf: "RN",
value: 3633,
cidade: "Lucrécia"
},
{
uf: "RS",
value: 3632,
cidade: "São Valentim"
},
{
uf: "SP",
value: 3630,
cidade: "Inúbia Paulista"
},
{
uf: "RS",
value: 3628,
cidade: "Estrela Velha"
},
{
uf: "PB",
value: 3627,
cidade: "Olivedos"
},
{
uf: "MG",
value: 3622,
cidade: "Santana de Cataguases"
},
{
uf: "SP",
value: 3622,
cidade: "Sarutaiá"
},
{
uf: "RS",
value: 3616,
cidade: "Rio dos Índios"
},
{
uf: "GO",
value: 3609,
cidade: "Amorinópolis"
},
{
uf: "SC",
value: 3604,
cidade: "Doutor Pedrinho"
},
{
uf: "MT",
value: 3604,
cidade: "Rondolândia"
},
{
uf: "SC",
value: 3600,
cidade: "Witmarsum"
},
{
uf: "MG",
value: 3596,
cidade: "Romaria"
},
{
uf: "RN",
value: 3595,
cidade: "Ruy Barbosa"
},
{
uf: "MT",
value: 3592,
cidade: "São José do Povo"
},
{
uf: "MG",
value: 3583,
cidade: "Santa Rita de Ibitipoca"
},
{
uf: "PR",
value: 3583,
cidade: "Itaúna do Sul"
},
{
uf: "RN",
value: 3582,
cidade: "Jundiá"
},
{
uf: "SC",
value: 3581,
cidade: "Cerro Negro"
},
{
uf: "RS",
value: 3575,
cidade: "Jari"
},
{
uf: "RO",
value: 3575,
cidade: "Castanheiras"
},
{
uf: "GO",
value: 3571,
cidade: "Heitoraí"
},
{
uf: "SP",
value: 3571,
cidade: "Bom Sucesso de Itararé"
},
{
uf: "PR",
value: 3571,
cidade: "Santa Mônica"
},
{
uf: "MG",
value: 3564,
cidade: "Campanário"
},
{
uf: "PR",
value: 3561,
cidade: "Arapuã"
},
{
uf: "PI",
value: 3560,
cidade: "Sebastião Barros"
},
{
uf: "SP",
value: 3557,
cidade: "Adolfo"
},
{
uf: "PB",
value: 3557,
cidade: "Cacimba de Areia"
},
{
uf: "GO",
value: 3557,
cidade: "Palminópolis"
},
{
uf: "GO",
value: 3555,
cidade: "Cromínia"
},
{
uf: "RS",
value: 3550,
cidade: "Colorado"
},
{
uf: "MG",
value: 3546,
cidade: "Alvorada de Minas"
},
{
uf: "GO",
value: 3541,
cidade: "Taquaral de Goiás"
},
{
uf: "PB",
value: 3539,
cidade: "Santa Inês"
},
{
uf: "MG",
value: 3538,
cidade: "Santo Antônio do Aventureiro"
},
{
uf: "SP",
value: 3537,
cidade: "Piquerobi"
},
{
uf: "RN",
value: 3536,
cidade: "Major Sales"
},
{
uf: "SC",
value: 3532,
cidade: "Vargeão"
},
{
uf: "TO",
value: 3532,
cidade: "Itapiratins"
},
{
uf: "SC",
value: 3527,
cidade: "Treviso"
},
{
uf: "TO",
value: 3525,
cidade: "Lagoa do Tocantins"
},
{
uf: "RO",
value: 3524,
cidade: "Primavera de Rondônia"
},
{
uf: "GO",
value: 3523,
cidade: "Colinas do Sul"
},
{
uf: "RS",
value: 3522,
cidade: "Turuçu"
},
{
uf: "PB",
value: 3522,
cidade: "Assunção"
},
{
uf: "RN",
value: 3521,
cidade: "Pedra Grande"
},
{
uf: "GO",
value: 3519,
cidade: "Novo Brasil"
},
{
uf: "MS",
value: 3518,
cidade: "Taquarussu"
},
{
uf: "MG",
value: 3516,
cidade: "Estrela do Indaiá"
},
{
uf: "MG",
value: 3513,
cidade: "São Brás do Suaçuí"
},
{
uf: "PB",
value: 3512,
cidade: "Vista Serrana"
},
{
uf: "RS",
value: 3511,
cidade: "Pareci Novo"
},
{
uf: "PR",
value: 3510,
cidade: "Diamante do Sul"
},
{
uf: "PB",
value: 3508,
cidade: "Salgadinho"
},
{
uf: "TO",
value: 3507,
cidade: "Jaú do Tocantins"
},
{
uf: "GO",
value: 3503,
cidade: "Bonópolis"
},
{
uf: "SC",
value: 3502,
cidade: "Arroio Trinta"
},
{
uf: "MG",
value: 3497,
cidade: "Senhora do Porto"
},
{
uf: "RS",
value: 3494,
cidade: "Campos Borges"
},
{
uf: "MG",
value: 3490,
cidade: "Pedrinópolis"
},
{
uf: "MG",
value: 3486,
cidade: "São Geraldo do Baixio"
},
{
uf: "RS",
value: 3485,
cidade: "Vitória das Missões"
},
{
uf: "MG",
value: 3483,
cidade: "Veríssimo"
},
{
uf: "SP",
value: 3481,
cidade: "Pongaí"
},
{
uf: "PR",
value: 3478,
cidade: "Nova América da Colina"
},
{
uf: "SC",
value: 3472,
cidade: "Galvão"
},
{
uf: "PR",
value: 3472,
cidade: "Farol"
},
{
uf: "GO",
value: 3471,
cidade: "Nova Roma"
},
{
uf: "RS",
value: 3471,
cidade: "Charrua"
},
{
uf: "MT",
value: 3468,
cidade: "Nova Santa Helena"
},
{
uf: "MG",
value: 3462,
cidade: "Catas Altas da Noruega"
},
{
uf: "SC",
value: 3457,
cidade: "Braço do Trombudo"
},
{
uf: "SE",
value: 3456,
cidade: "Malhada dos Bois"
},
{
uf: "RN",
value: 3453,
cidade: "Pilões"
},
{
uf: "GO",
value: 3452,
cidade: "Trombas"
},
{
uf: "MG",
value: 3452,
cidade: "Lamim"
},
{
uf: "TO",
value: 3446,
cidade: "Aurora do Tocantins"
},
{
uf: "MG",
value: 3444,
cidade: "Medeiros"
},
{
uf: "SP",
value: 3441,
cidade: "Nova Luzitânia"
},
{
uf: "RS",
value: 3441,
cidade: "Itacurubi"
},
{
uf: "SP",
value: 3436,
cidade: "Rifaina"
},
{
uf: "SC",
value: 3435,
cidade: "São João do Itaperiú"
},
{
uf: "MG",
value: 3435,
cidade: "Cordislândia"
},
{
uf: "PR",
value: 3434,
cidade: "Prado Ferreira"
},
{
uf: "GO",
value: 3434,
cidade: "Amaralina"
},
{
uf: "PR",
value: 3433,
cidade: "Jundiaí do Sul"
},
{
uf: "PA",
value: 3431,
cidade: "Bannach"
},
{
uf: "MT",
value: 3418,
cidade: "Tesouro"
},
{
uf: "MG",
value: 3403,
cidade: "Belmiro Braga"
},
{
uf: "RS",
value: 3401,
cidade: "Dona Francisca"
},
{
uf: "RN",
value: 3401,
cidade: "São Fernando"
},
{
uf: "MG",
value: 3399,
cidade: "Morro do Pilar"
},
{
uf: "PR",
value: 3394,
cidade: "Sulina"
},
{
uf: "SE",
value: 3393,
cidade: "São Francisco"
},
{
uf: "MG",
value: 3391,
cidade: "Córrego Danta"
},
{
uf: "GO",
value: 3387,
cidade: "Campestre de Goiás"
},
{
uf: "SC",
value: 3387,
cidade: "Calmon"
},
{
uf: "MT",
value: 3385,
cidade: "Conquista D'Oeste"
},
{
uf: "SP",
value: 3383,
cidade: "Suzanápolis"
},
{
uf: "MG",
value: 3382,
cidade: "São Félix de Minas"
},
{
uf: "MG",
value: 3382,
cidade: "Ibitiúra de Minas"
},
{
uf: "PR",
value: 3380,
cidade: "Ourizona"
},
{
uf: "MG",
value: 3376,
cidade: "Faria Lemos"
},
{
uf: "SC",
value: 3373,
cidade: "Ibicaré"
},
{
uf: "GO",
value: 3371,
cidade: "Palestina de Goiás"
},
{
uf: "MG",
value: 3370,
cidade: "Mathias Lobato"
},
{
uf: "RN",
value: 3368,
cidade: "Triunfo Potiguar"
},
{
uf: "MG",
value: 3365,
cidade: "Pedra do Anta"
},
{
uf: "SC",
value: 3365,
cidade: "Leoberto Leal"
},
{
uf: "PB",
value: 3364,
cidade: "São Francisco"
},
{
uf: "PI",
value: 3363,
cidade: "Pajeú do Piauí"
},
{
uf: "SP",
value: 3358,
cidade: "Ribeira"
},
{
uf: "GO",
value: 3347,
cidade: "Porteirão"
},
{
uf: "RS",
value: 3343,
cidade: "Nova Roma do Sul"
},
{
uf: "PI",
value: 3343,
cidade: "Cajazeiras do Piauí"
},
{
uf: "MG",
value: 3341,
cidade: "Carvalhópolis"
},
{
uf: "PR",
value: 3337,
cidade: "Godoy Moreira"
},
{
uf: "PR",
value: 3334,
cidade: "Rio Bom"
},
{
uf: "MG",
value: 3329,
cidade: "Frei Lagonegro"
},
{
uf: "TO",
value: 3326,
cidade: "Sandolândia"
},
{
uf: "GO",
value: 3325,
cidade: "Caldazinha"
},
{
uf: "GO",
value: 3321,
cidade: "Buritinópolis"
},
{
uf: "GO",
value: 3320,
cidade: "Estrela do Norte"
},
{
uf: "PB",
value: 3317,
cidade: "Emas"
},
{
uf: "RO",
value: 3316,
cidade: "Rio Crespo"
},
{
uf: "RS",
value: 3315,
cidade: "São Pedro da Serra"
},
{
uf: "GO",
value: 3312,
cidade: "Rio Quente"
},
{
uf: "RN",
value: 3308,
cidade: "Caiçara do Rio do Vento"
},
{
uf: "MG",
value: 3303,
cidade: "Quartel Geral"
},
{
uf: "SC",
value: 3303,
cidade: "Ponte Alta do Norte"
},
{
uf: "MG",
value: 3301,
cidade: "Coronel Xavier Chaves"
},
{
uf: "SC",
value: 3300,
cidade: "Atalanta"
},
{
uf: "PR",
value: 3293,
cidade: "Bom Sucesso do Sul"
},
{
uf: "MG",
value: 3293,
cidade: "Divinésia"
},
{
uf: "GO",
value: 3292,
cidade: "Damianópolis"
},
{
uf: "SC",
value: 3290,
cidade: "Bocaina do Sul"
},
{
uf: "RS",
value: 3290,
cidade: "São José dos Ausentes"
},
{
uf: "MG",
value: 3288,
cidade: "Caranaíba"
},
{
uf: "SC",
value: 3285,
cidade: "Serra Alta"
},
{
uf: "PI",
value: 3284,
cidade: "Belém do Piauí"
},
{
uf: "MG",
value: 3280,
cidade: "Natalândia"
},
{
uf: "SC",
value: 3279,
cidade: "Major Gercino"
},
{
uf: "RS",
value: 3278,
cidade: "Dois Lajeados"
},
{
uf: "GO",
value: 3277,
cidade: "Arenópolis"
},
{
uf: "TO",
value: 3277,
cidade: "Chapada da Natividade"
},
{
uf: "GO",
value: 3275,
cidade: "Gameleira de Goiás"
},
{
uf: "RS",
value: 3272,
cidade: "Esperança do Sul"
},
{
uf: "PB",
value: 3266,
cidade: "Riachão"
},
{
uf: "SP",
value: 3266,
cidade: "Mombuca"
},
{
uf: "MG",
value: 3265,
cidade: "Pratinha"
},
{
uf: "PI",
value: 3260,
cidade: "Novo Santo Antônio"
},
{
uf: "RS",
value: 3253,
cidade: "Vale Verde"
},
{
uf: "RS",
value: 3247,
cidade: "Campestre da Serra"
},
{
uf: "SP",
value: 3246,
cidade: "Itaju"
},
{
uf: "GO",
value: 3239,
cidade: "Professor Jamil"
},
{
uf: "MG",
value: 3238,
cidade: "Santo Hipólito"
},
{
uf: "SP",
value: 3236,
cidade: "Quadra"
},
{
uf: "MG",
value: 3235,
cidade: "Uruana de Minas"
},
{
uf: "PB",
value: 3235,
cidade: "São Sebastião do Umbuzeiro"
},
{
uf: "RS",
value: 3234,
cidade: "Garruchos"
},
{
uf: "PI",
value: 3234,
cidade: "Barreiras do Piauí"
},
{
uf: "PB",
value: 3233,
cidade: "São José do Bonfim"
},
{
uf: "GO",
value: 3232,
cidade: "Brazabrantes"
},
{
uf: "SP",
value: 3228,
cidade: "Itaóca"
},
{
uf: "MG",
value: 3224,
cidade: "Santa Rosa da Serra"
},
{
uf: "SC",
value: 3214,
cidade: "Anitápolis"
},
{
uf: "SC",
value: 3209,
cidade: "São Martinho"
},
{
uf: "PR",
value: 3209,
cidade: "Brasilândia do Sul"
},
{
uf: "RS",
value: 3207,
cidade: "Vila Flores"
},
{
uf: "PR",
value: 3206,
cidade: "Alto Paraíso"
},
{
uf: "MG",
value: 3205,
cidade: "Leandro Ferreira"
},
{
uf: "PB",
value: 3204,
cidade: "Serra da Raiz"
},
{
uf: "RS",
value: 3201,
cidade: "São Martinho da Serra"
},
{
uf: "SP",
value: 3200,
cidade: "Magda"
},
{
uf: "MT",
value: 3197,
cidade: "Araguaiana"
},
{
uf: "SP",
value: 3192,
cidade: "Platina"
},
{
uf: "RS",
value: 3190,
cidade: "Derrubadas"
},
{
uf: "RS",
value: 3184,
cidade: "Nova Bréscia"
},
{
uf: "RS",
value: 3182,
cidade: "Morrinhos do Sul"
},
{
uf: "RS",
value: 3182,
cidade: "Nova Alvorada"
},
{
uf: "TO",
value: 3175,
cidade: "Angico"
},
{
uf: "GO",
value: 3173,
cidade: "Santa Rita do Novo Destino"
},
{
uf: "PB",
value: 3169,
cidade: "Sossêgo"
},
{
uf: "RS",
value: 3168,
cidade: "Esmeralda"
},
{
uf: "MG",
value: 3165,
cidade: "Pequeri"
},
{
uf: "RN",
value: 3165,
cidade: "Riacho da Cruz"
},
{
uf: "PR",
value: 3162,
cidade: "Cruzmaltina"
},
{
uf: "SP",
value: 3160,
cidade: "Jeriquara"
},
{
uf: "PB",
value: 3159,
cidade: "Gurjão"
},
{
uf: "MG",
value: 3154,
cidade: "Nacip Raydan"
},
{
uf: "TO",
value: 3154,
cidade: "Maurilândia do Tocantins"
},
{
uf: "MG",
value: 3154,
cidade: "Camacho"
},
{
uf: "TO",
value: 3152,
cidade: "Muricilândia"
},
{
uf: "SC",
value: 3147,
cidade: "Pinheiro Preto"
},
{
uf: "GO",
value: 3142,
cidade: "Santa Cruz de Goiás"
},
{
uf: "MG",
value: 3137,
cidade: "Taparuba"
},
{
uf: "MT",
value: 3135,
cidade: "Glória D'Oeste"
},
{
uf: "MG",
value: 3127,
cidade: "Córrego Novo"
},
{
uf: "PR",
value: 3127,
cidade: "Manfrinópolis"
},
{
uf: "TO",
value: 3122,
cidade: "Bandeirantes do Tocantins"
},
{
uf: "SP",
value: 3120,
cidade: "Elisiário"
},
{
uf: "SP",
value: 3116,
cidade: "Barão de Antonina"
},
{
uf: "RS",
value: 3104,
cidade: "Capão do Cipó"
},
{
uf: "RS",
value: 3102,
cidade: "Monte Alegre dos Campos"
},
{
uf: "RS",
value: 3089,
cidade: "Barra do Guarita"
},
{
uf: "RS",
value: 3088,
cidade: "Ernestina"
},
{
uf: "PI",
value: 3085,
cidade: "Prata do Piauí"
},
{
uf: "RS",
value: 3080,
cidade: "Entre Rios do Sul"
},
{
uf: "PI",
value: 3076,
cidade: "Vila Nova do Piauí"
},
{
uf: "PB",
value: 3075,
cidade: "Bernardino Batista"
},
{
uf: "GO",
value: 3074,
cidade: "Urutaí"
},
{
uf: "PI",
value: 3069,
cidade: "São Félix do Piauí"
},
{
uf: "SP",
value: 3068,
cidade: "Nova Independência"
},
{
uf: "RS",
value: 3064,
cidade: "Dilermando de Aguiar"
},
{
uf: "RN",
value: 3063,
cidade: "Rafael Godeiro"
},
{
uf: "MG",
value: 3056,
cidade: "São Gonçalo do Rio Preto"
},
{
uf: "MG",
value: 3055,
cidade: "Onça de Pitangui"
},
{
uf: "MG",
value: 3053,
cidade: "Goiabeira"
},
{
uf: "MT",
value: 3052,
cidade: "Vale de São Domingos"
},
{
uf: "PI",
value: 3039,
cidade: "Antônio Almeida"
},
{
uf: "RS",
value: 3036,
cidade: "Victor Graeff"
},
{
uf: "PB",
value: 3033,
cidade: "Cajazeirinhas"
},
{
uf: "SP",
value: 3031,
cidade: "Sebastianópolis do Sul"
},
{
uf: "MG",
value: 3030,
cidade: "Fernandes Tourinho"
},
{
uf: "MT",
value: 3029,
cidade: "Nova Nazaré"
},
{
uf: "RS",
value: 3023,
cidade: "Imigrante"
},
{
uf: "SP",
value: 3020,
cidade: "Emilianópolis"
},
{
uf: "SC",
value: 3018,
cidade: "Entre Rios"
},
{
uf: "GO",
value: 3016,
cidade: "Teresina de Goiás"
},
{
uf: "MG",
value: 3015,
cidade: "Desterro do Melo"
},
{
uf: "RS",
value: 3011,
cidade: "Sede Nova"
},
{
uf: "PR",
value: 3010,
cidade: "Ivatuba"
},
{
uf: "SC",
value: 3008,
cidade: "São Bonifácio"
},
{
uf: "RS",
value: 3007,
cidade: "Caseiros"
},
{
uf: "SP",
value: 3003,
cidade: "Floreal"
},
{
uf: "RS",
value: 3003,
cidade: "Mampituba"
},
{
uf: "SP",
value: 3000,
cidade: "Alvinlândia"
},
{
uf: "GO",
value: 3000,
cidade: "Jaupaci"
},
{
uf: "MG",
value: 2994,
cidade: "Dom Viçoso"
},
{
uf: "MT",
value: 2991,
cidade: "Santo Afonso"
},
{
uf: "SC",
value: 2991,
cidade: "Zortéa"
},
{
uf: "MG",
value: 2990,
cidade: "Jaguaraçu"
},
{
uf: "RS",
value: 2988,
cidade: "Muitos Capões"
},
{
uf: "SC",
value: 2988,
cidade: "Peritiba"
},
{
uf: "PR",
value: 2988,
cidade: "Inajá"
},
{
uf: "PI",
value: 2986,
cidade: "Vera Mendes"
},
{
uf: "MG",
value: 2983,
cidade: "Coronel Pacheco"
},
{
uf: "RN",
value: 2980,
cidade: "Água Nova"
},
{
uf: "PI",
value: 2976,
cidade: "São Miguel do Fidalgo"
},
{
uf: "RN",
value: 2975,
cidade: "São Bento do Norte"
},
{
uf: "PB",
value: 2975,
cidade: "Serra Grande"
},
{
uf: "SE",
value: 2974,
cidade: "Pedra Mole"
},
{
uf: "MG",
value: 2972,
cidade: "Comendador Gomes"
},
{
uf: "RS",
value: 2970,
cidade: "Erebango"
},
{
uf: "MG",
value: 2968,
cidade: "Marmelópolis"
},
{
uf: "RS",
value: 2966,
cidade: "Taquaruçu do Sul"
},
{
uf: "RS",
value: 2965,
cidade: "Centenário"
},
{
uf: "GO",
value: 2964,
cidade: "Cumari"
},
{
uf: "MG",
value: 2962,
cidade: "Glaucilândia"
},
{
uf: "PI",
value: 2960,
cidade: "João Costa"
},
{
uf: "MG",
value: 2959,
cidade: "Presidente Kubitschek"
},
{
uf: "SE",
value: 2957,
cidade: "Telha"
},
{
uf: "RS",
value: 2954,
cidade: "Herveiras"
},
{
uf: "RS",
value: 2952,
cidade: "Toropi"
},
{
uf: "MT",
value: 2951,
cidade: "Nova Marilândia"
},
{
uf: "GO",
value: 2950,
cidade: "Perolândia"
},
{
uf: "SP",
value: 2940,
cidade: "Pedrinhas Paulista"
},
{
uf: "GO",
value: 2933,
cidade: "Uirapuru"
},
{
uf: "PB",
value: 2933,
cidade: "Frei Martinho"
},
{
uf: "GO",
value: 2932,
cidade: "Cristianópolis"
},
{
uf: "SE",
value: 2929,
cidade: "General Maynard"
},
{
uf: "PB",
value: 2928,
cidade: "Ouro Velho"
},
{
uf: "MS",
value: 2928,
cidade: "Figueirão"
},
{
uf: "RS",
value: 2926,
cidade: "São Domingos do Sul"
},
{
uf: "TO",
value: 2920,
cidade: "Piraquê"
},
{
uf: "RS",
value: 2917,
cidade: "Alto Feliz"
},
{
uf: "RS",
value: 2914,
cidade: "Três Forquilhas"
},
{
uf: "MG",
value: 2913,
cidade: "Albertina"
},
{
uf: "SC",
value: 2910,
cidade: "União do Oeste"
},
{
uf: "TO",
value: 2910,
cidade: "São Salvador do Tocantins"
},
{
uf: "GO",
value: 2909,
cidade: "Santa Rosa de Goiás"
},
{
uf: "SC",
value: 2906,
cidade: "Bandeirante"
},
{
uf: "MG",
value: 2901,
cidade: "Argirita"
},
{
uf: "SC",
value: 2896,
cidade: "Santa Terezinha do Progresso"
},
{
uf: "RN",
value: 2895,
cidade: "Passagem"
},
{
uf: "TO",
value: 2894,
cidade: "Santa Maria do Tocantins"
},
{
uf: "SC",
value: 2890,
cidade: "Morro Grande"
},
{
uf: "GO",
value: 2887,
cidade: "Israelândia"
},
{
uf: "PI",
value: 2879,
cidade: "Francisco Macedo"
},
{
uf: "RN",
value: 2874,
cidade: "Francisco Dantas"
},
{
uf: "PR",
value: 2874,
cidade: "Anahy"
},
{
uf: "RS",
value: 2873,
cidade: "São Pedro do Butiá"
},
{
uf: "RN",
value: 2872,
cidade: "Vila Flor"
},
{
uf: "RS",
value: 2869,
cidade: "Saldanha Marinho"
},
{
uf: "MG",
value: 2866,
cidade: "Ibituruna"
},
{
uf: "RS",
value: 2866,
cidade: "Dezesseis de Novembro"
},
{
uf: "AL",
value: 2866,
cidade: "Pindoba"
},
{
uf: "SP",
value: 2862,
cidade: "Rubinéia"
},
{
uf: "PR",
value: 2859,
cidade: "Ângulo"
},
{
uf: "SP",
value: 2858,
cidade: "Pracinha"
},
{
uf: "MG",
value: 2857,
cidade: "Cascalho Rico"
},
{
uf: "RS",
value: 2855,
cidade: "Três Arroios"
},
{
uf: "PB",
value: 2855,
cidade: "São Domingos"
},
{
uf: "RN",
value: 2854,
cidade: "Fernando Pedroza"
},
{
uf: "SC",
value: 2850,
cidade: "Brunópolis"
},
{
uf: "PR",
value: 2847,
cidade: "Rancho Alegre D'Oeste"
},
{
uf: "MG",
value: 2847,
cidade: "Sem-Peixe"
},
{
uf: "GO",
value: 2844,
cidade: "Ipiranga de Goiás"
},
{
uf: "MG",
value: 2841,
cidade: "Piau"
},
{
uf: "PB",
value: 2841,
cidade: "Lastro"
},
{
uf: "SC",
value: 2839,
cidade: "Matos Costa"
},
{
uf: "RS",
value: 2832,
cidade: "Vista Alegre"
},
{
uf: "SP",
value: 2831,
cidade: "Santa Mercedes"
},
{
uf: "SP",
value: 2829,
cidade: "Florínea"
},
{
uf: "PR",
value: 2827,
cidade: "Novo Itacolomi"
},
{
uf: "RS",
value: 2826,
cidade: "Cristal do Sul"
},
{
uf: "GO",
value: 2826,
cidade: "Nova Iguaçu de Goiás"
},
{
uf: "RS",
value: 2826,
cidade: "Coxilha"
},
{
uf: "PI",
value: 2825,
cidade: "São Gonçalo do Gurguéia"
},
{
uf: "GO",
value: 2825,
cidade: "Sítio d'Abadia"
},
{
uf: "MG",
value: 2823,
cidade: "Arantina"
},
{
uf: "SP",
value: 2820,
cidade: "Mira Estrela"
},
{
uf: "GO",
value: 2819,
cidade: "Três Ranchos"
},
{
uf: "RS",
value: 2814,
cidade: "Senador Salgado Filho"
},
{
uf: "PR",
value: 2814,
cidade: "Pitangueiras"
},
{
uf: "PB",
value: 2813,
cidade: "Tenório"
},
{
uf: "SP",
value: 2808,
cidade: "Queiroz"
},
{
uf: "SC",
value: 2808,
cidade: "Vargem"
},
{
uf: "SP",
value: 2803,
cidade: "Santo Expedito"
},
{
uf: "RS",
value: 2798,
cidade: "Eugênio de Castro"
},
{
uf: "MG",
value: 2798,
cidade: "São Sebastião da Vargem Alegre"
},
{
uf: "SP",
value: 2798,
cidade: "Jumirim"
},
{
uf: "TO",
value: 2796,
cidade: "Porto Alegre do Tocantins"
},
{
uf: "RS",
value: 2793,
cidade: "Westfália"
},
{
uf: "SP",
value: 2793,
cidade: "São Francisco"
},
{
uf: "MG",
value: 2792,
cidade: "Chácara"
},
{
uf: "PR",
value: 2791,
cidade: "Paranapoema"
},
{
uf: "MG",
value: 2788,
cidade: "Santa Bárbara do Monte Verde"
},
{
uf: "MG",
value: 2788,
cidade: "Maripá de Minas"
},
{
uf: "MG",
value: 2785,
cidade: "Chiador"
},
{
uf: "RS",
value: 2776,
cidade: "Boa Vista do Sul"
},
{
uf: "MG",
value: 2775,
cidade: "Arapuá"
},
{
uf: "RS",
value: 2774,
cidade: "São Jorge"
},
{
uf: "TO",
value: 2773,
cidade: "Lajeado"
},
{
uf: "GO",
value: 2773,
cidade: "Pilar de Goiás"
},
{
uf: "SC",
value: 2771,
cidade: "Celso Ramos"
},
{
uf: "SC",
value: 2766,
cidade: "Sul Brasil"
},
{
uf: "PR",
value: 2764,
cidade: "Boa Esperança do Iguaçu"
},
{
uf: "SC",
value: 2762,
cidade: "Chapadão do Lageado"
},
{
uf: "RS",
value: 2759,
cidade: "Vista Gaúcha"
},
{
uf: "SC",
value: 2758,
cidade: "Princesa"
},
{
uf: "RS",
value: 2757,
cidade: "Pirapó"
},
{
uf: "PI",
value: 2753,
cidade: "Tamboril do Piauí"
},
{
uf: "SC",
value: 2753,
cidade: "Capão Alto"
},
{
uf: "RS",
value: 2751,
cidade: "Nova Candelária"
},
{
uf: "SC",
value: 2750,
cidade: "Novo Horizonte"
},
{
uf: "RS",
value: 2749,
cidade: "Mormaço"
},
{
uf: "MG",
value: 2749,
cidade: "Conceição das Pedras"
},
{
uf: "SC",
value: 2748,
cidade: "Rancho Queimado"
},
{
uf: "GO",
value: 2747,
cidade: "Damolândia"
},
{
uf: "SC",
value: 2739,
cidade: "Iomerê"
},
{
uf: "MG",
value: 2731,
cidade: "São João da Mata"
},
{
uf: "RS",
value: 2730,
cidade: "Arroio do Padre"
},
{
uf: "SP",
value: 2729,
cidade: "Rubiácea"
},
{
uf: "PR",
value: 2727,
cidade: "Barra do Jacaré"
},
{
uf: "PR",
value: 2727,
cidade: "Santo Antônio do Caiuá"
},
{
uf: "MT",
value: 2726,
cidade: "Planalto da Serra"
},
{
uf: "SP",
value: 2726,
cidade: "Taquaral"
},
{
uf: "RS",
value: 2724,
cidade: "Tio Hugo"
},
{
uf: "RS",
value: 2720,
cidade: "São José das Missões"
},
{
uf: "SP",
value: 2714,
cidade: "Lutécia"
},
{
uf: "RS",
value: 2710,
cidade: "Quevedos"
},
{
uf: "MG",
value: 2709,
cidade: "Alagoa"
},
{
uf: "SP",
value: 2708,
cidade: "Gabriel Monteiro"
},
{
uf: "SP",
value: 2707,
cidade: "Águas de São Pedro"
},
{
uf: "SP",
value: 2707,
cidade: "Nantes"
},
{
uf: "MG",
value: 2705,
cidade: "Fortuna de Minas"
},
{
uf: "MG",
value: 2705,
cidade: "Umburatiba"
},
{
uf: "PB",
value: 2702,
cidade: "Mato Grosso"
},
{
uf: "PR",
value: 2695,
cidade: "Cafeara"
},
{
uf: "GO",
value: 2685,
cidade: "Mimoso de Goiás"
},
{
uf: "GO",
value: 2682,
cidade: "Panamá"
},
{
uf: "SC",
value: 2677,
cidade: "São Bernardino"
},
{
uf: "SP",
value: 2674,
cidade: "Bento de Abreu"
},
{
uf: "SP",
value: 2673,
cidade: "Óleo"
},
{
uf: "RS",
value: 2670,
cidade: "Monte Belo do Sul"
},
{
uf: "RS",
value: 2669,
cidade: "Salvador das Missões"
},
{
uf: "SP",
value: 2668,
cidade: "Cândido Rodrigues"
},
{
uf: "RN",
value: 2668,
cidade: "Lagoa de Velhos"
},
{
uf: "GO",
value: 2663,
cidade: "Ivolândia"
},
{
uf: "RS",
value: 2662,
cidade: "Lagoa Bonita do Sul"
},
{
uf: "MG",
value: 2660,
cidade: "Morro da Garça"
},
{
uf: "SP",
value: 2658,
cidade: "Estrela do Norte"
},
{
uf: "PI",
value: 2656,
cidade: "Lagoinha do Piauí"
},
{
uf: "SC",
value: 2654,
cidade: "Planalto Alegre"
},
{
uf: "SC",
value: 2653,
cidade: "Abdon Batista"
},
{
uf: "RS",
value: 2647,
cidade: "São Valério do Sul"
},
{
uf: "SP",
value: 2646,
cidade: "Timburi"
},
{
uf: "PB",
value: 2638,
cidade: "Santo André"
},
{
uf: "RS",
value: 2636,
cidade: "Capitão"
},
{
uf: "SC",
value: 2635,
cidade: "Belmonte"
},
{
uf: "RS",
value: 2635,
cidade: "São João do Polêsine"
},
{
uf: "SP",
value: 2634,
cidade: "Cássia dos Coqueiros"
},
{
uf: "SP",
value: 2633,
cidade: "Marapoama"
},
{
uf: "GO",
value: 2632,
cidade: "Córrego do Ouro"
},
{
uf: "PE",
value: 2630,
cidade: "Fernando de Noronha"
},
{
uf: "MG",
value: 2630,
cidade: "Biquinhas"
},
{
uf: "MG",
value: 2629,
cidade: "Ingaí"
},
{
uf: "PI",
value: 2626,
cidade: "Olho D'Água do Piauí"
},
{
uf: "PR",
value: 2625,
cidade: "Pinhal de São Bento"
},
{
uf: "TO",
value: 2622,
cidade: "Luzinópolis"
},
{
uf: "PI",
value: 2620,
cidade: "Tanque do Piauí"
},
{
uf: "PB",
value: 2615,
cidade: "Joca Claudino"
},
{
uf: "BA",
value: 2612,
cidade: "Catolândia"
},
{
uf: "RN",
value: 2607,
cidade: "Jardim de Angicos"
},
{
uf: "SC",
value: 2601,
cidade: "Formosa do Sul"
},
{
uf: "RN",
value: 2601,
cidade: "João Dias"
},
{
uf: "RS",
value: 2595,
cidade: "Sagrada Família"
},
{
uf: "MG",
value: 2592,
cidade: "São José do Mantimento"
},
{
uf: "RS",
value: 2592,
cidade: "Camargo"
},
{
uf: "RN",
value: 2590,
cidade: "Pedra Preta"
},
{
uf: "RS",
value: 2584,
cidade: "Itati"
},
{
uf: "RS",
value: 2579,
cidade: "Fagundes Varela"
},
{
uf: "PR",
value: 2578,
cidade: "Iracema do Oeste"
},
{
uf: "SP",
value: 2573,
cidade: "Brejo Alegre"
},
{
uf: "MT",
value: 2572,
cidade: "Reserva do Cabaçal"
},
{
uf: "TO",
value: 2570,
cidade: "Rio dos Bois"
},
{
uf: "RS",
value: 2567,
cidade: "Faxinalzinho"
},
{
uf: "TO",
value: 2566,
cidade: "Centenário"
},
{
uf: "SP",
value: 2566,
cidade: "São João das Duas Pontes"
},
{
uf: "TO",
value: 2562,
cidade: "Talismã"
},
{
uf: "PI",
value: 2561,
cidade: "São Luis do Piauí"
},
{
uf: "GO",
value: 2560,
cidade: "Buriti de Goiás"
},
{
uf: "PI",
value: 2559,
cidade: "Porto Alegre do Piauí"
},
{
uf: "SP",
value: 2558,
cidade: "Pedranópolis"
},
{
uf: "MG",
value: 2553,
cidade: "Wenceslau Braz"
},
{
uf: "RS",
value: 2550,
cidade: "Dom Pedro de Alcântara"
},
{
uf: "RS",
value: 2546,
cidade: "Rolador"
},
{
uf: "SP",
value: 2543,
cidade: "Santa Rita d'Oeste"
},
{
uf: "PR",
value: 2543,
cidade: "Flórida"
},
{
uf: "RS",
value: 2542,
cidade: "Porto Mauá"
},
{
uf: "SP",
value: 2537,
cidade: "Oscar Bressane"
},
{
uf: "MG",
value: 2537,
cidade: "Simão Pereira"
},
{
uf: "MG",
value: 2533,
cidade: "Olímpio Noronha"
},
{
uf: "PR",
value: 2530,
cidade: "Porto Rico"
},
{
uf: "RS",
value: 2527,
cidade: "Maratá"
},
{
uf: "RN",
value: 2526,
cidade: "Santana do Seridó"
},
{
uf: "SC",
value: 2526,
cidade: "Bom Jesus"
},
{
uf: "TO",
value: 2523,
cidade: "Santa Tereza do Tocantins"
},
{
uf: "SP",
value: 2518,
cidade: "Pontes Gestal"
},
{
uf: "SC",
value: 2513,
cidade: "Mirim Doce"
},
{
uf: "RS",
value: 2513,
cidade: "Pinhal"
},
{
uf: "RS",
value: 2507,
cidade: "Jacuizinho"
},
{
uf: "MG",
value: 2505,
cidade: "Cachoeira Dourada"
},
{
uf: "PB",
value: 2505,
cidade: "Curral Velho"
},
{
uf: "PB",
value: 2504,
cidade: "Várzea"
},
{
uf: "SP",
value: 2493,
cidade: "Arapeí"
},
{
uf: "PR",
value: 2491,
cidade: "São Pedro do Paraná"
},
{
uf: "MT",
value: 2491,
cidade: "Santa Rita do Trivelato"
},
{
uf: "RS",
value: 2487,
cidade: "Lajeado do Bugre"
},
{
uf: "RS",
value: 2484,
cidade: "Presidente Lucena"
},
{
uf: "SC",
value: 2482,
cidade: "Urupema"
},
{
uf: "PI",
value: 2482,
cidade: "Floresta do Piauí"
},
{
uf: "GO",
value: 2479,
cidade: "Diorama"
},
{
uf: "RS",
value: 2479,
cidade: "Forquetinha"
},
{
uf: "GO",
value: 2477,
cidade: "Adelândia"
},
{
uf: "TO",
value: 2474,
cidade: "Santa Terezinha do Tocantins"
},
{
uf: "SC",
value: 2474,
cidade: "Frei Rogério"
},
{
uf: "RS",
value: 2470,
cidade: "Mato Castelhano"
},
{
uf: "MG",
value: 2470,
cidade: "Estrela Dalva"
},
{
uf: "PR",
value: 2466,
cidade: "Uniflor"
},
{
uf: "MG",
value: 2465,
cidade: "Rio Doce"
},
{
uf: "RS",
value: 2461,
cidade: "Santo Expedito do Sul"
},
{
uf: "RS",
value: 2459,
cidade: "Coronel Barros"
},
{
uf: "SC",
value: 2458,
cidade: "Coronel Martins"
},
{
uf: "TO",
value: 2457,
cidade: "Novo Jardim"
},
{
uf: "RS",
value: 2457,
cidade: "Coqueiros do Sul"
},
{
uf: "PR",
value: 2453,
cidade: "Ariranha do Ivaí"
},
{
uf: "RS",
value: 2450,
cidade: "Nova Pádua"
},
{
uf: "RS",
value: 2450,
cidade: "Unistalda"
},
{
uf: "GO",
value: 2450,
cidade: "Avelinópolis"
},
{
uf: "RS",
value: 2449,
cidade: "Silveira Martins"
},
{
uf: "MG",
value: 2446,
cidade: "Carmésia"
},
{
uf: "TO",
value: 2445,
cidade: "Itaporã do Tocantins"
},
{
uf: "RS",
value: 2441,
cidade: "Boa Vista do Cadeado"
},
{
uf: "PI",
value: 2440,
cidade: "Aroeiras do Itaim"
},
{
uf: "RS",
value: 2437,
cidade: "Nova Ramada"
},
{
uf: "SC",
value: 2436,
cidade: "Rio Rufino"
},
{
uf: "GO",
value: 2427,
cidade: "Aparecida do Rio Doce"
},
{
uf: "RS",
value: 2425,
cidade: "Boa Vista do Incra"
},
{
uf: "RN",
value: 2425,
cidade: "Bodó"
},
{
uf: "SC",
value: 2424,
cidade: "Águas Frias"
},
{
uf: "SP",
value: 2423,
cidade: "Embaúba"
},
{
uf: "RS",
value: 2420,
cidade: "Colinas"
},
{
uf: "PB",
value: 2420,
cidade: "São Domingos do Cariri"
},
{
uf: "TO",
value: 2419,
cidade: "Fortaleza do Tabocão"
},
{
uf: "RS",
value: 2417,
cidade: "Cerro Grande"
},
{
uf: "PR",
value: 2408,
cidade: "Santo Antônio do Paraíso"
},
{
uf: "PI",
value: 2407,
cidade: "Pedro Laurentino"
},
{
uf: "PB",
value: 2400,
cidade: "Bom Jesus"
},
{
uf: "MT",
value: 2397,
cidade: "Indiavaí"
},
{
uf: "SP",
value: 2395,
cidade: "Sagres"
},
{
uf: "TO",
value: 2391,
cidade: "Abreulândia"
},
{
uf: "SC",
value: 2382,
cidade: "Santa Helena"
},
{
uf: "PB",
value: 2378,
cidade: "Carrapateira"
},
{
uf: "GO",
value: 2376,
cidade: "Guaraíta"
},
{
uf: "GO",
value: 2374,
cidade: "Mairipotaba"
},
{
uf: "SC",
value: 2373,
cidade: "Palmeira"
},
{
uf: "TO",
value: 2369,
cidade: "Pugmil"
},
{
uf: "RS",
value: 2367,
cidade: "Barra Funda"
},
{
uf: "PB",
value: 2366,
cidade: "Algodão de Jandaíra"
},
{
uf: "MG",
value: 2360,
cidade: "Monjolos"
},
{
uf: "GO",
value: 2356,
cidade: "Morro Agudo de Goiás"
},
{
uf: "SC",
value: 2353,
cidade: "Painel"
},
{
uf: "RS",
value: 2352,
cidade: "Santa Margarida do Sul"
},
{
uf: "MG",
value: 2350,
cidade: "Fama"
},
{
uf: "RS",
value: 2344,
cidade: "Itapuca"
},
{
uf: "GO",
value: 2335,
cidade: "Palmelo"
},
{
uf: "SP",
value: 2335,
cidade: "Zacarias"
},
{
uf: "RS",
value: 2328,
cidade: "Bom Progresso"
},
{
uf: "PR",
value: 2327,
cidade: "Mirador"
},
{
uf: "RN",
value: 2317,
cidade: "Taboleiro Grande"
},
{
uf: "TO",
value: 2316,
cidade: "Carmolândia"
},
{
uf: "RO",
value: 2315,
cidade: "Pimenteiras do Oeste"
},
{
uf: "RS",
value: 2314,
cidade: "Travesseiro"
},
{
uf: "RS",
value: 2307,
cidade: "Benjamin Constant do Sul"
},
{
uf: "GO",
value: 2300,
cidade: "Jesúpolis"
},
{
uf: "GO",
value: 2299,
cidade: "Guarinos"
},
{
uf: "RS",
value: 2296,
cidade: "Ubiretama"
},
{
uf: "RN",
value: 2295,
cidade: "Timbaúba dos Batistas"
},
{
uf: "SP",
value: 2293,
cidade: "Borebi"
},
{
uf: "TO",
value: 2286,
cidade: "Novo Alegre"
},
{
uf: "SC",
value: 2284,
cidade: "Presidente Nereu"
},
{
uf: "MG",
value: 2283,
cidade: "Itambé do Mato Dentro"
},
{
uf: "RS",
value: 2281,
cidade: "Sério"
},
{
uf: "RS",
value: 2277,
cidade: "Novo Tiradentes"
},
{
uf: "SE",
value: 2275,
cidade: "Amparo de São Francisco"
},
{
uf: "SP",
value: 2274,
cidade: "Cruzália"
},
{
uf: "SC",
value: 2271,
cidade: "Ouro Verde"
},
{
uf: "RS",
value: 2269,
cidade: "Gramado dos Loureiros"
},
{
uf: "RS",
value: 2267,
cidade: "Inhacorá"
},
{
uf: "RN",
value: 2261,
cidade: "Monte das Gameleiras"
},
{
uf: "SC",
value: 2260,
cidade: "Arvoredo"
},
{
uf: "GO",
value: 2259,
cidade: "Nova América"
},
{
uf: "SP",
value: 2254,
cidade: "Torre de Pedra"
},
{
uf: "SP",
value: 2249,
cidade: "Lucianópolis"
},
{
uf: "MG",
value: 2244,
cidade: "Casa Grande"
},
{
uf: "MG",
value: 2243,
cidade: "Araçaí"
},
{
uf: "MG",
value: 2234,
cidade: "Santana do Garambéu"
},
{
uf: "PR",
value: 2234,
cidade: "Iguatu"
},
{
uf: "PB",
value: 2233,
cidade: "Passagem"
},
{
uf: "TO",
value: 2231,
cidade: "Juarina"
},
{
uf: "MT",
value: 2224,
cidade: "Luciara"
},
{
uf: "TO",
value: 2223,
cidade: "Mateiros"
},
{
uf: "PR",
value: 2219,
cidade: "Guaporema"
},
{
uf: "RS",
value: 2212,
cidade: "Pedras Altas"
},
{
uf: "RS",
value: 2210,
cidade: "Mariano Moro"
},
{
uf: "RS",
value: 2204,
cidade: "São José do Herval"
},
{
uf: "SC",
value: 2203,
cidade: "Marema"
},
{
uf: "RS",
value: 2200,
cidade: "São José do Inhacorá"
},
{
uf: "RS",
value: 2200,
cidade: "Bozano"
},
{
uf: "SC",
value: 2199,
cidade: "Lacerdópolis"
},
{
uf: "MT",
value: 2199,
cidade: "Ribeirãozinho"
},
{
uf: "RS",
value: 2196,
cidade: "Paulo Bento"
},
{
uf: "MG",
value: 2192,
cidade: "Silveirânia"
},
{
uf: "MG",
value: 2191,
cidade: "Pedra Dourada"
},
{
uf: "SP",
value: 2187,
cidade: "Ribeirão dos Índios"
},
{
uf: "SP",
value: 2177,
cidade: "Nova Guataporanga"
},
{
uf: "RS",
value: 2168,
cidade: "São Valentim do Sul"
},
{
uf: "MG",
value: 2163,
cidade: "Vargem Bonita"
},
{
uf: "RN",
value: 2159,
cidade: "Galinhos"
},
{
uf: "RS",
value: 2157,
cidade: "Dois Irmãos das Missões"
},
{
uf: "RS",
value: 2156,
cidade: "Ivorá"
},
{
uf: "RS",
value: 2155,
cidade: "Relvado"
},
{
uf: "RS",
value: 2152,
cidade: "Vila Lângaro"
},
{
uf: "SC",
value: 2148,
cidade: "Jupiá"
},
{
uf: "TO",
value: 2148,
cidade: "Cachoeirinha"
},
{
uf: "RS",
value: 2141,
cidade: "Cruzaltense"
},
{
uf: "RS",
value: 2139,
cidade: "Santo Antônio do Palma"
},
{
uf: "SP",
value: 2132,
cidade: "Monções"
},
{
uf: "SC",
value: 2132,
cidade: "Bom Jesus do Oeste"
},
{
uf: "RS",
value: 2130,
cidade: "Pinhal da Serra"
},
{
uf: "SP",
value: 2128,
cidade: "Lourdes"
},
{
uf: "TO",
value: 2128,
cidade: "Santa Rita do Tocantins"
},
{
uf: "RS",
value: 2124,
cidade: "Sete de Setembro"
},
{
uf: "MG",
value: 2123,
cidade: "Oliveira Fortes"
},
{
uf: "MG",
value: 2116,
cidade: "Rochedo de Minas"
},
{
uf: "RS",
value: 2114,
cidade: "Boa Vista das Missões"
},
{
uf: "SP",
value: 2114,
cidade: "Nova Canaã Paulista"
},
{
uf: "SP",
value: 2113,
cidade: "Marinópolis"
},
{
uf: "MG",
value: 2110,
cidade: "São Sebastião do Rio Verde"
},
{
uf: "PI",
value: 2110,
cidade: "São Miguel da Baixa Grande"
},
{
uf: "SP",
value: 2103,
cidade: "São João do Pau d'Alho"
},
{
uf: "PR",
value: 2098,
cidade: "São Manoel do Paraná"
},
{
uf: "TO",
value: 2097,
cidade: "Tupiratins"
},
{
uf: "SP",
value: 2096,
cidade: "Dolcinópolis"
},
{
uf: "SC",
value: 2096,
cidade: "Irati"
},
{
uf: "PB",
value: 2088,
cidade: "Amparo"
},
{
uf: "TO",
value: 2085,
cidade: "Monte Santo do Tocantins"
},
{
uf: "SP",
value: 2084,
cidade: "Santa Clara d'Oeste"
},
{
uf: "RS",
value: 2082,
cidade: "São José do Sul"
},
{
uf: "MG",
value: 2079,
cidade: "Passa-Vinte"
},
{
uf: "RN",
value: 2077,
cidade: "Ipueira"
},
{
uf: "PB",
value: 2075,
cidade: "Zabelê"
},
{
uf: "GO",
value: 2072,
cidade: "Marzagão"
},
{
uf: "RS",
value: 2067,
cidade: "Almirante Tamandaré do Sul"
},
{
uf: "SC",
value: 2065,
cidade: "Santa Rosa de Lima"
},
{
uf: "TO",
value: 2064,
cidade: "Brasilândia do Tocantins"
},
{
uf: "GO",
value: 2062,
cidade: "Nova Aurora"
},
{
uf: "PI",
value: 2059,
cidade: "Santo Antônio dos Milagres"
},
{
uf: "MG",
value: 2058,
cidade: "Aracitaba"
},
{
uf: "GO",
value: 2056,
cidade: "Davinópolis"
},
{
uf: "GO",
value: 2051,
cidade: "Aloândia"
},
{
uf: "SC",
value: 2050,
cidade: "Ermo"
},
{
uf: "SP",
value: 2032,
cidade: "Parisi"
},
{
uf: "RS",
value: 2030,
cidade: "Doutor Ricardo"
},
{
uf: "MG",
value: 2025,
cidade: "Água Comprida"
},
{
uf: "RS",
value: 2018,
cidade: "Floriano Peixoto"
},
{
uf: "RS",
value: 2017,
cidade: "Poço das Antas"
},
{
uf: "GO",
value: 2013,
cidade: "Água Limpa"
},
{
uf: "MT",
value: 2005,
cidade: "Novo Santo Antônio"
},
{
uf: "SC",
value: 2005,
cidade: "Alto Bela Vista"
},
{
uf: "RS",
value: 2003,
cidade: "Barra do Rio Azul"
},
{
uf: "RS",
value: 2000,
cidade: "Protásio Alves"
},
{
uf: "MG",
value: 1995,
cidade: "Serranos"
},
{
uf: "GO",
value: 1991,
cidade: "São Patrício"
},
{
uf: "MG",
value: 1988,
cidade: "Senador Cortes"
},
{
uf: "RS",
value: 1987,
cidade: "Santo Antônio do Planalto"
},
{
uf: "RS",
value: 1984,
cidade: "Vanini"
},
{
uf: "SP",
value: 1978,
cidade: "Turmalina"
},
{
uf: "MG",
value: 1976,
cidade: "Olaria"
},
{
uf: "RS",
value: 1974,
cidade: "Vespasiano Corrêa"
},
{
uf: "PR",
value: 1970,
cidade: "Esperança Nova"
},
{
uf: "SP",
value: 1970,
cidade: "Guarani d'Oeste"
},
{
uf: "RS",
value: 1960,
cidade: "Nova Boa Vista"
},
{
uf: "SP",
value: 1953,
cidade: "Santa Cruz da Esperança"
},
{
uf: "TO",
value: 1945,
cidade: "Taipas do Tocantins"
},
{
uf: "SC",
value: 1945,
cidade: "Ibiam"
},
{
uf: "RS",
value: 1944,
cidade: "Ipiranga do Sul"
},
{
uf: "RS",
value: 1944,
cidade: "São Vendelino"
},
{
uf: "SP",
value: 1930,
cidade: "Turiúba"
},
{
uf: "PB",
value: 1927,
cidade: "Areia de Baraúnas"
},
{
uf: "SP",
value: 1925,
cidade: "Arco-Íris"
},
{
uf: "SC",
value: 1904,
cidade: "São Miguel da Boa Vista"
},
{
uf: "MT",
value: 1900,
cidade: "Santa Cruz do Xingu"
},
{
uf: "RS",
value: 1886,
cidade: "São Pedro das Missões"
},
{
uf: "SP",
value: 1886,
cidade: "Mesópolis"
},
{
uf: "SC",
value: 1882,
cidade: "Cunhataí"
},
{
uf: "SC",
value: 1878,
cidade: "Barra Bonita"
},
{
uf: "RS",
value: 1875,
cidade: "Pouso Novo"
},
{
uf: "MG",
value: 1873,
cidade: "Tapiraí"
},
{
uf: "MG",
value: 1868,
cidade: "Senador José Bento"
},
{
uf: "PR",
value: 1862,
cidade: "Miraselva"
},
{
uf: "MG",
value: 1861,
cidade: "Queluzito"
},
{
uf: "RS",
value: 1852,
cidade: "Porto Vera Cruz"
},
{
uf: "RS",
value: 1848,
cidade: "Alto Alegre"
},
{
uf: "MG",
value: 1841,
cidade: "Douradoquara"
},
{
uf: "SC",
value: 1826,
cidade: "Macieira"
},
{
uf: "PR",
value: 1818,
cidade: "Santa Inês"
},
{
uf: "RS",
value: 1813,
cidade: "Muliterno"
},
{
uf: "SP",
value: 1809,
cidade: "Aspásia"
},
{
uf: "RS",
value: 1807,
cidade: "Canudos do Vale"
},
{
uf: "RS",
value: 1799,
cidade: "Mato Queimado"
},
{
uf: "MG",
value: 1789,
cidade: "Seritinga"
},
{
uf: "MG",
value: 1785,
cidade: "Pedro Teixeira"
},
{
uf: "SP",
value: 1780,
cidade: "São João de Iracema"
},
{
uf: "SP",
value: 1779,
cidade: "Paulistânia"
},
{
uf: "MG",
value: 1777,
cidade: "Santo Antônio do Rio Abaixo"
},
{
uf: "RS",
value: 1775,
cidade: "Quatro Irmãos"
},
{
uf: "PB",
value: 1771,
cidade: "Coxixola"
},
{
uf: "MT",
value: 1768,
cidade: "Ponte Branca"
},
{
uf: "MG",
value: 1766,
cidade: "Passabém"
},
{
uf: "SC",
value: 1766,
cidade: "Jardinópolis"
},
{
uf: "GO",
value: 1763,
cidade: "Moiporá"
},
{
uf: "SC",
value: 1763,
cidade: "Paial"
},
{
uf: "RS",
value: 1757,
cidade: "Novo Xingu"
},
{
uf: "SC",
value: 1757,
cidade: "Tigrinhos"
},
{
uf: "RS",
value: 1754,
cidade: "Capão Bonito do Sul"
},
{
uf: "SP",
value: 1752,
cidade: "Flora Rica"
},
{
uf: "RS",
value: 1750,
cidade: "Ponte Preta"
},
{
uf: "TO",
value: 1742,
cidade: "Sucupira"
},
{
uf: "SP",
value: 1737,
cidade: "Vitória Brasil"
},
{
uf: "MG",
value: 1727,
cidade: "Consolação"
},
{
uf: "RS",
value: 1725,
cidade: "Coronel Pilar"
},
{
uf: "SC",
value: 1725,
cidade: "Presidente Castello Branco"
},
{
uf: "PB",
value: 1722,
cidade: "Riacho de Santo Antônio"
},
{
uf: "RS",
value: 1721,
cidade: "Nicolau Vergueiro"
},
{
uf: "RS",
value: 1720,
cidade: "Santa Tereza"
},
{
uf: "TO",
value: 1714,
cidade: "Rio da Conceição"
},
{
uf: "PB",
value: 1699,
cidade: "Quixaba"
},
{
uf: "GO",
value: 1689,
cidade: "São João da Paraúna"
},
{
uf: "SP",
value: 1689,
cidade: "Dirce Reis"
},
{
uf: "PB",
value: 1684,
cidade: "São José do Brejo do Cruz"
},
{
uf: "RS",
value: 1677,
cidade: "Gentil"
},
{
uf: "MG",
value: 1671,
cidade: "Antônio Prado de Minas"
},
{
uf: "RS",
value: 1655,
cidade: "Santa Cecília do Sul"
},
{
uf: "SP",
value: 1641,
cidade: "Santana da Ponte Pensa"
},
{
uf: "TO",
value: 1639,
cidade: "Ipueiras"
},
{
uf: "RS",
value: 1624,
cidade: "Linha Nova"
},
{
uf: "RN",
value: 1618,
cidade: "Viçosa"
},
{
uf: "MG",
value: 1613,
cidade: "São Sebastião do Rio Preto"
},
{
uf: "RS",
value: 1607,
cidade: "Carlos Gomes"
},
{
uf: "TO",
value: 1605,
cidade: "Lavandeira"
},
{
uf: "SP",
value: 1599,
cidade: "União Paulista"
},
{
uf: "RS",
value: 1598,
cidade: "Lagoa dos Três Cantos"
},
{
uf: "RS",
value: 1598,
cidade: "Guabiju"
},
{
uf: "SC",
value: 1588,
cidade: "Flor do Sertão"
},
{
uf: "TO",
value: 1574,
cidade: "Tupirama"
},
{
uf: "RS",
value: 1573,
cidade: "Tupanci do Sul"
},
{
uf: "RS",
value: 1569,
cidade: "Vista Alegre do Prata"
},
{
uf: "TO",
value: 1564,
cidade: "Crixás do Tocantins"
},
{
uf: "SP",
value: 1563,
cidade: "Fernão"
},
{
uf: "MG",
value: 1558,
cidade: "Paiva"
},
{
uf: "SP",
value: 1544,
cidade: "Trabiju"
},
{
uf: "RS",
value: 1542,
cidade: "Montauri"
},
{
uf: "RS",
value: 1528,
cidade: "Coqueiro Baixo"
},
{
uf: "RS",
value: 1527,
cidade: "Engenho Velho"
},
{
uf: "SC",
value: 1490,
cidade: "Lajeado Grande"
},
{
uf: "RS",
value: 1487,
cidade: "União da Serra"
},
{
uf: "SC",
value: 1465,
cidade: "Santiago do Sul"
},
{
uf: "SP",
value: 1447,
cidade: "Santa Salete"
},
{
uf: "MG",
value: 1440,
cidade: "Doresópolis"
},
{
uf: "TO",
value: 1437,
cidade: "São Félix do Tocantins"
},
{
uf: "PR",
value: 1431,
cidade: "Nova Aliança do Ivaí"
},
{
uf: "GO",
value: 1417,
cidade: "Cachoeira de Goiás"
},
{
uf: "PR",
value: 1409,
cidade: "Jardim Olinda"
},
{
uf: "MG",
value: 1373,
cidade: "Grupiara"
},
{
uf: "MT",
value: 1365,
cidade: "Serra Nova Dourada"
},
{
uf: "TO",
value: 1335,
cidade: "Chapada de Areia"
},
{
uf: "PB",
value: 1256,
cidade: "Parari"
},
{
uf: "GO",
value: 1254,
cidade: "Lagoa Santa"
},
{
uf: "PI",
value: 1253,
cidade: "Miguel Leão"
},
{
uf: "SP",
value: 1251,
cidade: "Uru"
},
{
uf: "RS",
value: 1216,
cidade: "André da Rocha"
},
{
uf: "MG",
value: 1210,
cidade: "Cedro do Abaeté"
},
{
uf: "SP",
value: 1125,
cidade: "Nova Castilho"
},
{
uf: "MT",
value: 1096,
cidade: "Araguainha"
},
{
uf: "TO",
value: 1037,
cidade: "Oliveira de Fátima"
},
{
uf: "GO",
value: 1020,
cidade: "Anhanguera"
},
{
uf: "MG",
value: 815,
cidade: "Serra da Saudade"
},
{
uf: "SP",
value: 805,
cidade: "Borá"
}
];