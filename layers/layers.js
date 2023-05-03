var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OsVASnist_1 = new ol.format.GeoJSON();
var features_OsVASnist_1 = format_OsVASnist_1.readFeatures(json_OsVASnist_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OsVASnist_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OsVASnist_1.addFeatures(features_OsVASnist_1);
var lyr_OsVASnist_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OsVASnist_1, 
                style: style_OsVASnist_1,
                interactive: false,
    title: '% Os.  VAS äänistä<br />\
    <img src="styles/legend/OsVASnist_1_0.png" /> 0<br />\
    <img src="styles/legend/OsVASnist_1_1.png" /> 0,47<br />\
    <img src="styles/legend/OsVASnist_1_2.png" /> 0,52<br />\
    <img src="styles/legend/OsVASnist_1_3.png" /> 0,57<br />\
    <img src="styles/legend/OsVASnist_1_4.png" /> 0,92<br />\
    <img src="styles/legend/OsVASnist_1_5.png" /> 0,93<br />\
    <img src="styles/legend/OsVASnist_1_6.png" /> 0,95<br />\
    <img src="styles/legend/OsVASnist_1_7.png" /> 0,99<br />\
    <img src="styles/legend/OsVASnist_1_8.png" /> 1<br />\
    <img src="styles/legend/OsVASnist_1_9.png" /> 1,01<br />\
    <img src="styles/legend/OsVASnist_1_10.png" /> 1,05<br />\
    <img src="styles/legend/OsVASnist_1_11.png" /> 1,1<br />\
    <img src="styles/legend/OsVASnist_1_12.png" /> 1,19<br />\
    <img src="styles/legend/OsVASnist_1_13.png" /> 1,2<br />\
    <img src="styles/legend/OsVASnist_1_14.png" /> 1,22<br />\
    <img src="styles/legend/OsVASnist_1_15.png" /> 1,23<br />\
    <img src="styles/legend/OsVASnist_1_16.png" /> 1,24<br />\
    <img src="styles/legend/OsVASnist_1_17.png" /> 1,27<br />\
    <img src="styles/legend/OsVASnist_1_18.png" /> 1,28<br />\
    <img src="styles/legend/OsVASnist_1_19.png" /> 1,3<br />\
    <img src="styles/legend/OsVASnist_1_20.png" /> 1,31<br />\
    <img src="styles/legend/OsVASnist_1_21.png" /> 1,35<br />\
    <img src="styles/legend/OsVASnist_1_22.png" /> 1,36<br />\
    <img src="styles/legend/OsVASnist_1_23.png" /> 1,41<br />\
    <img src="styles/legend/OsVASnist_1_24.png" /> 1,43<br />\
    <img src="styles/legend/OsVASnist_1_25.png" /> 1,44<br />\
    <img src="styles/legend/OsVASnist_1_26.png" /> 1,45<br />\
    <img src="styles/legend/OsVASnist_1_27.png" /> 1,48<br />\
    <img src="styles/legend/OsVASnist_1_28.png" /> 1,53<br />\
    <img src="styles/legend/OsVASnist_1_29.png" /> 1,6<br />\
    <img src="styles/legend/OsVASnist_1_30.png" /> 1,65<br />\
    <img src="styles/legend/OsVASnist_1_31.png" /> 1,67<br />\
    <img src="styles/legend/OsVASnist_1_32.png" /> 1,68<br />\
    <img src="styles/legend/OsVASnist_1_33.png" /> 1,7<br />\
    <img src="styles/legend/OsVASnist_1_34.png" /> 1,71<br />\
    <img src="styles/legend/OsVASnist_1_35.png" /> 1,72<br />\
    <img src="styles/legend/OsVASnist_1_36.png" /> 1,73<br />\
    <img src="styles/legend/OsVASnist_1_37.png" /> 1,75<br />\
    <img src="styles/legend/OsVASnist_1_38.png" /> 1,77<br />\
    <img src="styles/legend/OsVASnist_1_39.png" /> 1,81<br />\
    <img src="styles/legend/OsVASnist_1_40.png" /> 1,86<br />\
    <img src="styles/legend/OsVASnist_1_41.png" /> 1,87<br />\
    <img src="styles/legend/OsVASnist_1_42.png" /> 1,89<br />\
    <img src="styles/legend/OsVASnist_1_43.png" /> 1,9<br />\
    <img src="styles/legend/OsVASnist_1_44.png" /> 1,92<br />\
    <img src="styles/legend/OsVASnist_1_45.png" /> 1,94<br />\
    <img src="styles/legend/OsVASnist_1_46.png" /> 1,95<br />\
    <img src="styles/legend/OsVASnist_1_47.png" /> 1,96<br />\
    <img src="styles/legend/OsVASnist_1_48.png" /> 1,98<br />\
    <img src="styles/legend/OsVASnist_1_49.png" /> 1,99<br />\
    <img src="styles/legend/OsVASnist_1_50.png" /> 2,01<br />\
    <img src="styles/legend/OsVASnist_1_51.png" /> 2,05<br />\
    <img src="styles/legend/OsVASnist_1_52.png" /> 2,12<br />\
    <img src="styles/legend/OsVASnist_1_53.png" /> 2,14<br />\
    <img src="styles/legend/OsVASnist_1_54.png" /> 2,16<br />\
    <img src="styles/legend/OsVASnist_1_55.png" /> 2,22<br />\
    <img src="styles/legend/OsVASnist_1_56.png" /> 2,24<br />\
    <img src="styles/legend/OsVASnist_1_57.png" /> 2,27<br />\
    <img src="styles/legend/OsVASnist_1_58.png" /> 2,28<br />\
    <img src="styles/legend/OsVASnist_1_59.png" /> 2,29<br />\
    <img src="styles/legend/OsVASnist_1_60.png" /> 2,31<br />\
    <img src="styles/legend/OsVASnist_1_61.png" /> 2,32<br />\
    <img src="styles/legend/OsVASnist_1_62.png" /> 2,33<br />\
    <img src="styles/legend/OsVASnist_1_63.png" /> 2,36<br />\
    <img src="styles/legend/OsVASnist_1_64.png" /> 2,38<br />\
    <img src="styles/legend/OsVASnist_1_65.png" /> 2,42<br />\
    <img src="styles/legend/OsVASnist_1_66.png" /> 2,45<br />\
    <img src="styles/legend/OsVASnist_1_67.png" /> 2,5<br />\
    <img src="styles/legend/OsVASnist_1_68.png" /> 2,51<br />\
    <img src="styles/legend/OsVASnist_1_69.png" /> 2,52<br />\
    <img src="styles/legend/OsVASnist_1_70.png" /> 2,53<br />\
    <img src="styles/legend/OsVASnist_1_71.png" /> 2,55<br />\
    <img src="styles/legend/OsVASnist_1_72.png" /> 2,59<br />\
    <img src="styles/legend/OsVASnist_1_73.png" /> 2,64<br />\
    <img src="styles/legend/OsVASnist_1_74.png" /> 2,66<br />\
    <img src="styles/legend/OsVASnist_1_75.png" /> 2,71<br />\
    <img src="styles/legend/OsVASnist_1_76.png" /> 2,74<br />\
    <img src="styles/legend/OsVASnist_1_77.png" /> 2,78<br />\
    <img src="styles/legend/OsVASnist_1_78.png" /> 2,8<br />\
    <img src="styles/legend/OsVASnist_1_79.png" /> 2,81<br />\
    <img src="styles/legend/OsVASnist_1_80.png" /> 2,82<br />\
    <img src="styles/legend/OsVASnist_1_81.png" /> 2,89<br />\
    <img src="styles/legend/OsVASnist_1_82.png" /> 2,9<br />\
    <img src="styles/legend/OsVASnist_1_83.png" /> 2,91<br />\
    <img src="styles/legend/OsVASnist_1_84.png" /> 2,92<br />\
    <img src="styles/legend/OsVASnist_1_85.png" /> 2,95<br />\
    <img src="styles/legend/OsVASnist_1_86.png" /> 2,99<br />\
    <img src="styles/legend/OsVASnist_1_87.png" /> 3<br />\
    <img src="styles/legend/OsVASnist_1_88.png" /> 3,04<br />\
    <img src="styles/legend/OsVASnist_1_89.png" /> 3,11<br />\
    <img src="styles/legend/OsVASnist_1_90.png" /> 3,13<br />\
    <img src="styles/legend/OsVASnist_1_91.png" /> 3,17<br />\
    <img src="styles/legend/OsVASnist_1_92.png" /> 3,21<br />\
    <img src="styles/legend/OsVASnist_1_93.png" /> 3,23<br />\
    <img src="styles/legend/OsVASnist_1_94.png" /> 3,24<br />\
    <img src="styles/legend/OsVASnist_1_95.png" /> 3,25<br />\
    <img src="styles/legend/OsVASnist_1_96.png" /> 3,28<br />\
    <img src="styles/legend/OsVASnist_1_97.png" /> 3,29<br />\
    <img src="styles/legend/OsVASnist_1_98.png" /> 3,3<br />\
    <img src="styles/legend/OsVASnist_1_99.png" /> 3,31<br />\
    <img src="styles/legend/OsVASnist_1_100.png" /> 3,33<br />\
    <img src="styles/legend/OsVASnist_1_101.png" /> 3,4<br />\
    <img src="styles/legend/OsVASnist_1_102.png" /> 3,43<br />\
    <img src="styles/legend/OsVASnist_1_103.png" /> 3,54<br />\
    <img src="styles/legend/OsVASnist_1_104.png" /> 3,55<br />\
    <img src="styles/legend/OsVASnist_1_105.png" /> 3,59<br />\
    <img src="styles/legend/OsVASnist_1_106.png" /> 3,62<br />\
    <img src="styles/legend/OsVASnist_1_107.png" /> 3,63<br />\
    <img src="styles/legend/OsVASnist_1_108.png" /> 3,66<br />\
    <img src="styles/legend/OsVASnist_1_109.png" /> 3,69<br />\
    <img src="styles/legend/OsVASnist_1_110.png" /> 3,72<br />\
    <img src="styles/legend/OsVASnist_1_111.png" /> 3,77<br />\
    <img src="styles/legend/OsVASnist_1_112.png" /> 3,93<br />\
    <img src="styles/legend/OsVASnist_1_113.png" /> 3,96<br />\
    <img src="styles/legend/OsVASnist_1_114.png" /> 4,07<br />\
    <img src="styles/legend/OsVASnist_1_115.png" /> 4,11<br />\
    <img src="styles/legend/OsVASnist_1_116.png" /> 4,12<br />\
    <img src="styles/legend/OsVASnist_1_117.png" /> 4,15<br />\
    <img src="styles/legend/OsVASnist_1_118.png" /> 4,26<br />\
    <img src="styles/legend/OsVASnist_1_119.png" /> 4,39<br />\
    <img src="styles/legend/OsVASnist_1_120.png" /> 4,41<br />\
    <img src="styles/legend/OsVASnist_1_121.png" /> 4,42<br />\
    <img src="styles/legend/OsVASnist_1_122.png" /> 4,55<br />\
    <img src="styles/legend/OsVASnist_1_123.png" /> 4,58<br />\
    <img src="styles/legend/OsVASnist_1_124.png" /> 4,62<br />\
    <img src="styles/legend/OsVASnist_1_125.png" /> 4,64<br />\
    <img src="styles/legend/OsVASnist_1_126.png" /> 4,67<br />\
    <img src="styles/legend/OsVASnist_1_127.png" /> 4,68<br />\
    <img src="styles/legend/OsVASnist_1_128.png" /> 4,76<br />\
    <img src="styles/legend/OsVASnist_1_129.png" /> 5,13<br />\
    <img src="styles/legend/OsVASnist_1_130.png" /> 5,53<br />\
    <img src="styles/legend/OsVASnist_1_131.png" /> 5,8<br />\
    <img src="styles/legend/OsVASnist_1_132.png" /> 8<br />\
    <img src="styles/legend/OsVASnist_1_133.png" /> 8,82<br />\
    <img src="styles/legend/OsVASnist_1_134.png" /> <br />'
        });
var format_OsKaikistanist_2 = new ol.format.GeoJSON();
var features_OsKaikistanist_2 = format_OsKaikistanist_2.readFeatures(json_OsKaikistanist_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OsKaikistanist_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OsKaikistanist_2.addFeatures(features_OsKaikistanist_2);
var lyr_OsKaikistanist_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OsKaikistanist_2, 
                style: style_OsKaikistanist_2,
                interactive: false,
    title: '% Os.  Kaikista äänistä<br />\
    <img src="styles/legend/OsKaikistanist_2_0.png" /> 0<br />\
    <img src="styles/legend/OsKaikistanist_2_1.png" /> 0,04<br />\
    <img src="styles/legend/OsKaikistanist_2_2.png" /> 0,07<br />\
    <img src="styles/legend/OsKaikistanist_2_3.png" /> 0,08<br />\
    <img src="styles/legend/OsKaikistanist_2_4.png" /> 0,09<br />\
    <img src="styles/legend/OsKaikistanist_2_5.png" /> 0,1<br />\
    <img src="styles/legend/OsKaikistanist_2_6.png" /> 0,11<br />\
    <img src="styles/legend/OsKaikistanist_2_7.png" /> 0,12<br />\
    <img src="styles/legend/OsKaikistanist_2_8.png" /> 0,13<br />\
    <img src="styles/legend/OsKaikistanist_2_9.png" /> 0,14<br />\
    <img src="styles/legend/OsKaikistanist_2_10.png" /> 0,15<br />\
    <img src="styles/legend/OsKaikistanist_2_11.png" /> 0,16<br />\
    <img src="styles/legend/OsKaikistanist_2_12.png" /> 0,17<br />\
    <img src="styles/legend/OsKaikistanist_2_13.png" /> 0,18<br />\
    <img src="styles/legend/OsKaikistanist_2_14.png" /> 0,19<br />\
    <img src="styles/legend/OsKaikistanist_2_15.png" /> 0,2<br />\
    <img src="styles/legend/OsKaikistanist_2_16.png" /> 0,21<br />\
    <img src="styles/legend/OsKaikistanist_2_17.png" /> 0,22<br />\
    <img src="styles/legend/OsKaikistanist_2_18.png" /> 0,23<br />\
    <img src="styles/legend/OsKaikistanist_2_19.png" /> 0,24<br />\
    <img src="styles/legend/OsKaikistanist_2_20.png" /> 0,25<br />\
    <img src="styles/legend/OsKaikistanist_2_21.png" /> 0,26<br />\
    <img src="styles/legend/OsKaikistanist_2_22.png" /> 0,28<br />\
    <img src="styles/legend/OsKaikistanist_2_23.png" /> 0,29<br />\
    <img src="styles/legend/OsKaikistanist_2_24.png" /> 0,3<br />\
    <img src="styles/legend/OsKaikistanist_2_25.png" /> 0,31<br />\
    <img src="styles/legend/OsKaikistanist_2_26.png" /> 0,32<br />\
    <img src="styles/legend/OsKaikistanist_2_27.png" /> 0,33<br />\
    <img src="styles/legend/OsKaikistanist_2_28.png" /> 0,34<br />\
    <img src="styles/legend/OsKaikistanist_2_29.png" /> 0,36<br />\
    <img src="styles/legend/OsKaikistanist_2_30.png" /> 0,37<br />\
    <img src="styles/legend/OsKaikistanist_2_31.png" /> 0,38<br />\
    <img src="styles/legend/OsKaikistanist_2_32.png" /> 0,39<br />\
    <img src="styles/legend/OsKaikistanist_2_33.png" /> 0,4<br />\
    <img src="styles/legend/OsKaikistanist_2_34.png" /> 0,41<br />\
    <img src="styles/legend/OsKaikistanist_2_35.png" /> 0,42<br />\
    <img src="styles/legend/OsKaikistanist_2_36.png" /> 0,43<br />\
    <img src="styles/legend/OsKaikistanist_2_37.png" /> 0,44<br />\
    <img src="styles/legend/OsKaikistanist_2_38.png" /> 0,45<br />\
    <img src="styles/legend/OsKaikistanist_2_39.png" /> 0,46<br />\
    <img src="styles/legend/OsKaikistanist_2_40.png" /> 0,47<br />\
    <img src="styles/legend/OsKaikistanist_2_41.png" /> 0,48<br />\
    <img src="styles/legend/OsKaikistanist_2_42.png" /> 0,49<br />\
    <img src="styles/legend/OsKaikistanist_2_43.png" /> 0,51<br />\
    <img src="styles/legend/OsKaikistanist_2_44.png" /> 0,53<br />\
    <img src="styles/legend/OsKaikistanist_2_45.png" /> 0,54<br />\
    <img src="styles/legend/OsKaikistanist_2_46.png" /> 0,55<br />\
    <img src="styles/legend/OsKaikistanist_2_47.png" /> 0,58<br />\
    <img src="styles/legend/OsKaikistanist_2_48.png" /> 0,59<br />\
    <img src="styles/legend/OsKaikistanist_2_49.png" /> 0,61<br />\
    <img src="styles/legend/OsKaikistanist_2_50.png" /> 0,62<br />\
    <img src="styles/legend/OsKaikistanist_2_51.png" /> 0,63<br />\
    <img src="styles/legend/OsKaikistanist_2_52.png" /> 0,64<br />\
    <img src="styles/legend/OsKaikistanist_2_53.png" /> 0,65<br />\
    <img src="styles/legend/OsKaikistanist_2_54.png" /> 0,75<br />\
    <img src="styles/legend/OsKaikistanist_2_55.png" /> 0,81<br />\
    <img src="styles/legend/OsKaikistanist_2_56.png" /> <br />'
        });
var format_nimr_3 = new ol.format.GeoJSON();
var features_nimr_3 = format_nimr_3.readFeatures(json_nimr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nimr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nimr_3.addFeatures(features_nimr_3);
var lyr_nimr_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nimr_3, 
                style: style_nimr_3,
                interactive: false,
    title: 'Äänimäärä<br />\
    <img src="styles/legend/nimr_3_0.png" /> 0<br />\
    <img src="styles/legend/nimr_3_1.png" /> 1<br />\
    <img src="styles/legend/nimr_3_2.png" /> 2<br />\
    <img src="styles/legend/nimr_3_3.png" /> 3<br />\
    <img src="styles/legend/nimr_3_4.png" /> 4<br />\
    <img src="styles/legend/nimr_3_5.png" /> 5<br />\
    <img src="styles/legend/nimr_3_6.png" /> 6<br />\
    <img src="styles/legend/nimr_3_7.png" /> 7<br />\
    <img src="styles/legend/nimr_3_8.png" /> 8<br />\
    <img src="styles/legend/nimr_3_9.png" /> 9<br />\
    <img src="styles/legend/nimr_3_10.png" /> 10<br />\
    <img src="styles/legend/nimr_3_11.png" /> 11<br />\
    <img src="styles/legend/nimr_3_12.png" /> 12<br />\
    <img src="styles/legend/nimr_3_13.png" /> 13<br />\
    <img src="styles/legend/nimr_3_14.png" /> 14<br />\
    <img src="styles/legend/nimr_3_15.png" /> 15<br />\
    <img src="styles/legend/nimr_3_16.png" /> 16<br />\
    <img src="styles/legend/nimr_3_17.png" /> 17<br />\
    <img src="styles/legend/nimr_3_18.png" /> 19<br />\
    <img src="styles/legend/nimr_3_19.png" /> <br />'
        });
var format_nestysalueidenrajat_4 = new ol.format.GeoJSON();
var features_nestysalueidenrajat_4 = format_nestysalueidenrajat_4.readFeatures(json_nestysalueidenrajat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nestysalueidenrajat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nestysalueidenrajat_4.addFeatures(features_nestysalueidenrajat_4);
var lyr_nestysalueidenrajat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nestysalueidenrajat_4, 
                style: style_nestysalueidenrajat_4,
                interactive: true,
                title: '<img src="styles/legend/nestysalueidenrajat_4.png" /> Äänestysalueiden rajat'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OsVASnist_1.setVisible(false);lyr_OsKaikistanist_2.setVisible(false);lyr_nimr_3.setVisible(true);lyr_nestysalueidenrajat_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OsVASnist_1,lyr_OsKaikistanist_2,lyr_nimr_3,lyr_nestysalueidenrajat_4];
lyr_OsVASnist_1.set('fieldAliases', {'id': 'id', 'tunnus': 'tunnus', 'nimi': 'nimi', 'äänimäärä': 'äänimäärä', 'ääniprosentti': 'ääniprosentti', 'vasprosentti': 'vasprosentti', });
lyr_OsKaikistanist_2.set('fieldAliases', {'id': 'id', 'tunnus': 'tunnus', 'nimi': 'nimi', 'äänimäärä': 'äänimäärä', 'ääniprosentti': 'ääniprosentti', 'vasprosentti': 'vasprosentti', });
lyr_nimr_3.set('fieldAliases', {'id': 'id', 'tunnus': 'tunnus', 'nimi': 'nimi', 'äänimäärä': 'äänimäärä', 'ääniprosentti': 'ääniprosentti', 'vasprosentti': 'vasprosentti', });
lyr_nestysalueidenrajat_4.set('fieldAliases', {'id': 'id', 'tunnus': 'tunnus', 'nimi': 'nimi', 'äänimäärä': 'äänimäärä', 'ääniprosentti': 'ääniprosentti', 'vasprosentti': 'vasprosentti', });
lyr_OsVASnist_1.set('fieldImages', {'id': 'TextEdit', 'tunnus': 'TextEdit', 'nimi': 'TextEdit', 'äänimäärä': 'TextEdit', 'ääniprosentti': 'TextEdit', 'vasprosentti': 'TextEdit', });
lyr_OsKaikistanist_2.set('fieldImages', {'id': 'TextEdit', 'tunnus': 'TextEdit', 'nimi': 'TextEdit', 'äänimäärä': 'TextEdit', 'ääniprosentti': 'TextEdit', 'vasprosentti': 'TextEdit', });
lyr_nimr_3.set('fieldImages', {'id': 'TextEdit', 'tunnus': 'TextEdit', 'nimi': 'TextEdit', 'äänimäärä': 'TextEdit', 'ääniprosentti': 'TextEdit', 'vasprosentti': 'TextEdit', });
lyr_nestysalueidenrajat_4.set('fieldImages', {'id': 'TextEdit', 'tunnus': 'TextEdit', 'nimi': 'TextEdit', 'äänimäärä': 'TextEdit', 'ääniprosentti': 'TextEdit', 'vasprosentti': 'TextEdit', });
lyr_OsVASnist_1.set('fieldLabels', {'id': 'no label', 'tunnus': 'no label', 'nimi': 'no label', 'äänimäärä': 'no label', 'ääniprosentti': 'no label', 'vasprosentti': 'no label', });
lyr_OsKaikistanist_2.set('fieldLabels', {'id': 'no label', 'tunnus': 'no label', 'nimi': 'no label', 'äänimäärä': 'no label', 'ääniprosentti': 'no label', 'vasprosentti': 'no label', });
lyr_nimr_3.set('fieldLabels', {'id': 'no label', 'tunnus': 'no label', 'nimi': 'inline label', 'äänimäärä': 'inline label', 'ääniprosentti': 'inline label', 'vasprosentti': 'inline label', });
lyr_nestysalueidenrajat_4.set('fieldLabels', {'id': 'inline label', 'tunnus': 'inline label', 'nimi': 'inline label', 'äänimäärä': 'inline label', 'ääniprosentti': 'inline label', 'vasprosentti': 'inline label', });
lyr_nestysalueidenrajat_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});