var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_reaurbanadoRioGrande_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Área urbana do Rio Grande",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/reaurbanadoRioGrande_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5828313.840353, -3801948.228291, -5795730.587858, -3766170.563862]
                            })
                        });
var lyr_DensidadedeKerneldosincndiosdejulho_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidade de Kernel dos incêndios de julho",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensidadedeKerneldosincndiosdejulho_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5828353.503444, -3801906.016517, -5795793.944668, -3766140.454862]
                            })
                        });
var lyr_DensidadedeKerneldosincndiosdejaneiro_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidade de Kernel dos incêndios de janeiro",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensidadedeKerneldosincndiosdejaneiro_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5828385.535901, -3801915.790979, -5795766.348115, -3766090.318259]
                            })
                        });
var format_RS734_4 = new ol.format.GeoJSON();
var features_RS734_4 = format_RS734_4.readFeatures(json_RS734_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RS734_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RS734_4.addFeatures(features_RS734_4);
var lyr_RS734_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RS734_4, 
                style: style_RS734_4,
                popuplayertitle: "RS-734",
                interactive: true,
                title: '<img src="styles/legend/RS734_4.png" /> RS-734'
            });
var format_Incndiosdejaneirode2022_5 = new ol.format.GeoJSON();
var features_Incndiosdejaneirode2022_5 = format_Incndiosdejaneirode2022_5.readFeatures(json_Incndiosdejaneirode2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incndiosdejaneirode2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incndiosdejaneirode2022_5.addFeatures(features_Incndiosdejaneirode2022_5);
var lyr_Incndiosdejaneirode2022_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incndiosdejaneirode2022_5, 
                style: style_Incndiosdejaneirode2022_5,
                popuplayertitle: "Incêndios de janeiro de 2022",
                interactive: true,
                title: '<img src="styles/legend/Incndiosdejaneirode2022_5.png" /> Incêndios de janeiro de 2022'
            });
var format_Incndiosdejulhode2022_6 = new ol.format.GeoJSON();
var features_Incndiosdejulhode2022_6 = format_Incndiosdejulhode2022_6.readFeatures(json_Incndiosdejulhode2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incndiosdejulhode2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incndiosdejulhode2022_6.addFeatures(features_Incndiosdejulhode2022_6);
var lyr_Incndiosdejulhode2022_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incndiosdejulhode2022_6, 
                style: style_Incndiosdejulhode2022_6,
                popuplayertitle: "Incêndios de julho de 2022",
                interactive: true,
                title: '<img src="styles/legend/Incndiosdejulhode2022_6.png" /> Incêndios de julho de 2022'
            });
var format_PelotodeBombeirosMilitares_7 = new ol.format.GeoJSON();
var features_PelotodeBombeirosMilitares_7 = format_PelotodeBombeirosMilitares_7.readFeatures(json_PelotodeBombeirosMilitares_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PelotodeBombeirosMilitares_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PelotodeBombeirosMilitares_7.addFeatures(features_PelotodeBombeirosMilitares_7);
var lyr_PelotodeBombeirosMilitares_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PelotodeBombeirosMilitares_7, 
                style: style_PelotodeBombeirosMilitares_7,
                popuplayertitle: "Pelotão de Bombeiros Militares",
                interactive: true,
                title: '<img src="styles/legend/PelotodeBombeirosMilitares_7.png" /> Pelotão de Bombeiros Militares'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_reaurbanadoRioGrande_1.setVisible(true);lyr_DensidadedeKerneldosincndiosdejulho_2.setVisible(true);lyr_DensidadedeKerneldosincndiosdejaneiro_3.setVisible(true);lyr_RS734_4.setVisible(true);lyr_Incndiosdejaneirode2022_5.setVisible(true);lyr_Incndiosdejulhode2022_6.setVisible(true);lyr_PelotodeBombeirosMilitares_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_reaurbanadoRioGrande_1,lyr_DensidadedeKerneldosincndiosdejulho_2,lyr_DensidadedeKerneldosincndiosdejaneiro_3,lyr_RS734_4,lyr_Incndiosdejaneirode2022_5,lyr_Incndiosdejulhode2022_6,lyr_PelotodeBombeirosMilitares_7];
lyr_RS734_4.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'maxspeed': 'maxspeed', });
lyr_Incndiosdejaneirode2022_5.set('fieldAliases', {'EMERGÊNCI': 'EMERGÊNCI', 'ENDEREÇO': 'ENDEREÇO', 'LONG': 'LONG', 'LAT': 'LAT', 'DATA': 'DATA', 'BATALHÃO': 'BATALHÃO', });
lyr_Incndiosdejulhode2022_6.set('fieldAliases', {'EMERGÊNCI': 'EMERGÊNCI', 'ENDEREÇO': 'ENDEREÇO', 'LONG': 'LONG', 'LAT': 'LAT', 'DATA': 'DATA', 'BATALHÃO': 'BATALHÃO', });
lyr_PelotodeBombeirosMilitares_7.set('fieldAliases', {'id': 'id', });
lyr_RS734_4.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'maxspeed': 'TextEdit', });
lyr_Incndiosdejaneirode2022_5.set('fieldImages', {'EMERGÊNCI': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'DATA': 'TextEdit', 'BATALHÃO': 'TextEdit', });
lyr_Incndiosdejulhode2022_6.set('fieldImages', {'EMERGÊNCI': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'DATA': 'TextEdit', 'BATALHÃO': 'TextEdit', });
lyr_PelotodeBombeirosMilitares_7.set('fieldImages', {'id': 'TextEdit', });
lyr_RS734_4.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'maxspeed': 'no label', });
lyr_Incndiosdejaneirode2022_5.set('fieldLabels', {'EMERGÊNCI': 'no label', 'ENDEREÇO': 'no label', 'LONG': 'hidden field', 'LAT': 'hidden field', 'DATA': 'no label', 'BATALHÃO': 'no label', });
lyr_Incndiosdejulhode2022_6.set('fieldLabels', {'EMERGÊNCI': 'no label', 'ENDEREÇO': 'no label', 'LONG': 'hidden field', 'LAT': 'hidden field', 'DATA': 'no label', 'BATALHÃO': 'no label', });
lyr_PelotodeBombeirosMilitares_7.set('fieldLabels', {'id': 'hidden field', });
lyr_PelotodeBombeirosMilitares_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});