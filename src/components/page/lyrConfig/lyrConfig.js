export var layerOptions = {
    // 各地图服务配置options
    options_yingxiang : {
        "id": "tianDiTu_yingxiang",
        "label": "天地图影像地图",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "c",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.1.58.37:7003/img_c/wmts?k=899262DB49B1050ECE1F48A7E620F4BA&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=img&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_yingxiang_zhuji : {
        "id": "tianDiTu_yingxiang_zhuji",
        "label": "天地图影像地图注记",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "c",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/sia_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=sia&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["tdt"]
    },
    //联通 外网 部署
    // var options_yingxiang : {
    //     "id": "tianDiTu_yingxiang",
    //     "label": "天地图影像地图",
    //     "visible": true,
    //     "opacity": 1,
    //     "style": "default",
    //     "wmtslayer": "vec",
    //     "tileMatrixSet": "c",
    //     "format": "tiles",
    //     "urlTemplate": "http://{subDomain}.tianditu.com/img_c/img_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=img&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
    //     "copyright": "TiandituWMTS",
    //     "subDomains": ["t0"]
    // },
    // var options_yingxiang_zhuji : {
    //     "id": "tianDiTu_yingxiang_zhuji",
    //     "label": "天地图影像地图注记",
    //     "visible": true,
    //     "opacity": 1,
    //     "style": "default",
    //     "wmtslayer": "vec",
    //     "tileMatrixSet": "c",
    //     "format": "tiles",
    //     "urlTemplate": "http://{subDomain}.tianditu.com/cia_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=cia&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
    //     "copyright": "TiandituWMTS",
    //     "subDomains": ["t0"]
    // },
    options_dixing : {
        "id": "tianDiTu_dixing",
        "label": "天地图地形地图",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "c",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.1.58.37:7003/ter_c/wmts?k=326F25FDDEE454504D5D93E0B5B06FB9&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ter&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_dixing_zhuji : {
        "id": "tianDiTu_dixing_zhuji",
        "label": "天地图地形地图注记",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "c",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/sia_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=sia&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["tdt"]
    },
    options_shiliang : {
        "id": "tianDiTu_shiliang",
        "label": "天地图矢量地图",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "c",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.1.58.37:7003/slb_c/wmts?k=D5F3B817F5152DDC71389D65A8B68972&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=slb&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_shiliang_zhuji : {
        "id": "tianDiTu_shiliang_zhuji",
        "label": "天地图矢量地图注记",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "c",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/sla_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=sla&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["tdt"]
    },
    options_2015 : {
        "id": "tianDiTu_2015",
        "label": "水利遥感影像2015镶嵌景元数据",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "TDTCRS84Quad",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.1.58.37:7003/seis/pub/wmts/6/14?k=C1F2C17DB80E274CABEA13987A49DD62&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ALL&STYLE=default&FORMAT=tiles&TILEMATRIXSET=TDTCRS84Quad&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_2016 : {
        "id": "tianDiTu_2016",
        "label": "水利遥感影像2016镶嵌景元数据",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "TDTCRS84Quad",
        "format": "tiles",
        "urlTemplate": "http://{subDomain}.1.58.37:7003/seis/pub/wmts/4/1?k=4AFF6622050281E0274D572D5F4533E4&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ALL&STYLE=default&FORMAT=tiles&TILEMATRIXSET=TDTCRS84Quad&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_shishi : {
        "id": "tianDiTu_shishi",
        "label": "资源三号卫星影像",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "satImage",
        "format": "image/png",
        "urlTemplate":"http://{subDomain}.1.58.37:7003/rest/wmts?k=586D67218FDAC68698A6ED7A0EC460B7&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=资源三号卫星影像&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=satImage&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_supermap_shiliangzhuji : {
        "id": "oneMap_xzqh",
        "label": "超图矢量注记",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "satImage",
        "format": "image/png",
        "urlTemplate":"http://{subDomain}.1.58.37:7003/iserver/services/XZQH_HZZV/wmts100?k=ED0F2F37E59E570D99B1DF1112A65E00&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZV&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZV&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_supermap_yingxiangzhuji : {
        "id": "oneMap_xzqh",
        "label": "超图影像注记",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "satImage",
        "format": "image/png",
        "urlTemplate":"http://{subDomain}.1.58.37:7003/iserver/services/XZQH_HZZR/wmts100?k=CF36000BBA2E31E84B100C0C4C3694C6&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZR&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZR&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_river_r : {
        "id": "oneMap_hl",
        "label": "超图影像水系图",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "Custom_RIVER_R",
        "format": "image/png",
        "urlTemplate":"http://{subDomain}.1.58.37:7003/iserver/services/RIVER_R/wmts100?k=D0068B86A8FF78D4595A3001B2848723&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_R&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_R&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
    options_river_v : {
        "id": "oneMap_hl",
        "label": "超图矢量水系图",
        "visible": true,
        "opacity": 1,
        "style": "default",
        "wmtslayer": "vec",
        "tileMatrixSet": "Custom_RIVER_V",
        "format": "image/png",
        "urlTemplate":"http://{subDomain}.1.58.37:7003/iserver/services/RIVER_V/wmts100?k=F320190342B9E4D642E991BF03007E88&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_V&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_V&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
        "copyright": "TiandituWMTS",
        "subDomains": ["10"]
    },
};
export var baseLayerOption = [
    {
        type:'yingxiang',
        title:'天地图影像地图',
        thumbnailUrl:'../assets/img/yingxiang.png',
        layers:[
            {
                oid:0,
                id:'tdt_yingxiang',
                type:'tdt',
                title:'天地图影像地图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "tdt_yingxiang",
                    "label": "天地图影像地图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "c",
                    "format": "tiles",
                    "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/img_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=img&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["tdt"]
                }
            },{
                oid:10,
                id:'supermap_yingxiangzhuji',
                type:'superMap',
                title:'超图影像注记',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_yingxiangzhuji",
                    "label": "超图影像注记",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "satImage",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.mwr.gov.cn/iserver/services/XZQH_HZZR/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZR&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZR&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["map"]
                }
            },{
                oid:11,
                id:'supermap_river_r',
                type:'superMap',
                title:'超图影像水系图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_river_r",
                    "label": "超图影像水系图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "Custom_RIVER_R",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.1.3.140/iserver/services/RIVER_R/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_R&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_R&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },
        ]
    },{
        type:"dixing",
        title:'天地图地形地图',
        thumbnailUrl:'../assets/img/dixing.png',
        layers:[
            {
                oid:2,
                id:'tdt_dixing',
                type:'tdt',
                title:'天地图地形地图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "tdt_dixing",
                    "label": "天地图地形地图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "c",
                    "format": "tiles",
                    "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/ter_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ter&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["tdt"]
                }
            },{
                oid:10,
                id:'supermap_yingxiangzhuji',
                type:'superMap',
                title:'超图影像注记',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_yingxiangzhuji",
                    "label": "超图影像注记",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "satImage",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.mwr.gov.cn/iserver/services/XZQH_HZZR/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZR&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZR&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["map"]
                }
            },{
                oid:11,
                id:'supermap_river_r',
                type:'superMap',
                title:'超图影像水系图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_river_r",
                    "label": "超图影像水系图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "Custom_RIVER_R",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.1.3.140/iserver/services/RIVER_R/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_R&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_R&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },
        ]
    },{
        type:'shiliang',
        title:'天地图矢量地图',
        thumbnailUrl:'../assets/img/shiliang.png',
        layers:[
            {
                oid:4,
                id:'tdt_shiliang',
                type:'tdt',
                title:'天地图矢量地图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "tdt_shiliang",
                    "label": "天地图矢量地图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "c",
                    "format": "tiles",
                    "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/slb_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=slb&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["tdt"]
                }
            },{
                oid:9,
                id:'supermap_shiliangzhuji',
                type:'superMap',
                title:'超图矢量注记',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_shiliangzhuji",
                    "label": "超图矢量注记",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "satImage",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.mwr.gov.cn/iserver/services/XZQH_HZZV/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZV&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZV&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["map"]
                }
            },{
                oid:12,
                id:'supermap_river_v',
                type:'superMap',
                title:'超图矢量水系图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_river_v",
                    "label": "超图矢量水系图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "Custom_RIVER_V",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.1.3.140/iserver/services/RIVER_V/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_V&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_V&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },
        ]
    },{
        type:'rs_2015',
        title:'水利遥感影像2015镶嵌景元数据',
        thumbnailUrl:'../assets/img/yingxiang.png',
        layers:[
            {
                oid:6,
                id:'rs_2015',
                type:'rs',
                title:'水利遥感影像2015镶嵌景元数据',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "rs_2015",
                    "label": "水利遥感影像2015镶嵌景元数据",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "TDTCRS84Quad",
                    "format": "tiles",
                    "urlTemplate": "http://{subDomain}.1.7.182:8080/seis/pub/wmts/6/14?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ALL&STYLE=default&FORMAT=tiles&TILEMATRIXSET=TDTCRS84Quad&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },{
                oid:10,
                id:'supermap_yingxiangzhuji',
                type:'superMap',
                title:'超图影像注记',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_yingxiangzhuji",
                    "label": "超图影像注记",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "satImage",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.mwr.gov.cn/iserver/services/XZQH_HZZR/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZR&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZR&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["map"]
                }
            },{
                oid:11,
                id:'supermap_river_r',
                type:'superMap',
                title:'超图影像水系图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_river_r",
                    "label": "超图影像水系图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "Custom_RIVER_R",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.1.3.140/iserver/services/RIVER_R/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_R&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_R&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },
        ]
    },{
        type:'rs_2016',
        title:'水利遥感影像2016镶嵌景元数据',
        thumbnailUrl:'../assets/img/yingxiang.png',
        layers:[
            {
                oid:7,
                id:'rs_2016',
                type:'rs',
                title:'水利遥感影像2016镶嵌景元数据',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "rs_2016",
                    "label": "水利遥感影像2016镶嵌景元数据",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "TDTCRS84Quad",
                    "format": "tiles",
                    "urlTemplate": "http://{subDomain}.1.7.182:8080/seis/pub/wmts/4/1?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ALL&STYLE=default&FORMAT=tiles&TILEMATRIXSET=TDTCRS84Quad&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },{
                oid:10,
                id:'supermap_yingxiangzhuji',
                type:'superMap',
                title:'超图影像注记',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_yingxiangzhuji",
                    "label": "超图影像注记",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "satImage",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.mwr.gov.cn/iserver/services/XZQH_HZZR/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZR&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZR&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["map"]
                }
            },{
                oid:11,
                id:'supermap_river_r',
                type:'superMap',
                title:'超图影像水系图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_river_r",
                    "label": "超图影像水系图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "Custom_RIVER_R",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.1.3.140/iserver/services/RIVER_R/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_R&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_R&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },
        ]
    },{
        type:'rs_time',
        title:'资源三号卫星影像',
        thumbnailUrl:'../assets/img/yingxiang.png',
        layers:[
            {
                oid:8,
                id:'rs_time',
                type:'rs',
                title:'资源三号卫星影像',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "rs_time",//实时影像服务
                    "label": "资源三号卫星影像",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "TDTCRS84Quad",
                    "format": "tiles",
                    "urlTemplate": "http://{subDomain}.1.7.182:8080/seis/pub/wmts/4/1?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ALL&STYLE=default&FORMAT=tiles&TILEMATRIXSET=TDTCRS84Quad&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },{
                oid:10,
                id:'supermap_yingxiangzhuji',
                type:'superMap',
                title:'超图影像注记',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_yingxiangzhuji",
                    "label": "超图影像注记",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "satImage",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.mwr.gov.cn/iserver/services/XZQH_HZZR/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=XZQH_HZZR&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_XZQH_HZZR&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["map"]
                }
            },{
                oid:11,
                id:'supermap_river_r',
                type:'superMap',
                title:'超图影像水系图',
                url:'',
                thumbnailUrl:'',
                option:{
                    "id": "supermap_river_r",
                    "label": "超图影像水系图",
                    "visible": true,
                    "opacity": 1,
                    "style": "default",
                    "wmtslayer": "vec",
                    "tileMatrixSet": "Custom_RIVER_R",
                    "format": "image/png",
                    "urlTemplate":"http://{subDomain}.1.3.140/iserver/services/RIVER_R/wmts100?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=RIVER_R&STYLE=Default&FORMAT=image/png&TILEMATRIXSET=Custom_RIVER_R&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
                    "copyright": "TiandituWMTS",
                    "subDomains": ["10"]
                }
            },
        ]
    },
]
var bak = [
    // {
    //     oid:1,
    //     id:'tdt_yingxiang_zhuji',
    //     type:'tdt',
    //     title:'天地图影像地图注记',
    //     url:'',
    //     thumbnailUrl:'',
    //     option:{
    //         "id": "tdt_yingxiang_zhuji",
    //         "label": "天地图影像地图注记",
    //         "visible": true,
    //         "opacity": 1,
    //         "style": "default",
    //         "wmtslayer": "vec",
    //         "tileMatrixSet": "c",
    //         "format": "tiles",
    //         "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/sia_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=sia&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
    //         "copyright": "TiandituWMTS",
    //         "subDomains": ["tdt"]
    //     }
    // },{
    //     oid:3,
    //     id:'tdt_dixing_zhuji',
    //     type:'tdt',
    //     title:'天地图地形地图注记',
    //     url:'',
    //     thumbnailUrl:'',
    //     option:{
    //         "id": "tdt_dixing_zhuji",
    //         "label": "天地图地形地图注记",
    //         "visible": true,
    //         "opacity": 1,
    //         "style": "default",
    //         "wmtslayer": "vec",
    //         "tileMatrixSet": "c",
    //         "format": "tiles",
    //         "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/sia_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=sia&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
    //         "copyright": "TiandituWMTS",
    //         "subDomains": ["tdt"]
    //     }
    // },{
    //     oid:5,
    //     id:'tdt_shiliang_zhuji',
    //     type:'tdt',
    //     title:'天地图矢量地图注记',
    //     url:'',
    //     thumbnailUrl:'',
    //     option:{
    //         "id": "tdt_shiliang_zhuji",
    //         "label": "天地图矢量地图注记",
    //         "visible": true,
    //         "opacity": 1,
    //         "style": "default",
    //         "wmtslayer": "vec",
    //         "tileMatrixSet": "c",
    //         "format": "tiles",
    //         "urlTemplate": "http://{subDomain}.mwr.gov.cn:81/sla_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=sla&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}",
    //         "copyright": "TiandituWMTS",
    //         "subDomains": ["tdt"]
    //     }
    // },
    
]