export var tablecont = [
    {
      pageone: [
        {
          title:'基础地理数据',
          fil: [
            {id:'xzqh',name:'行政区划',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            // {id:'jtwl',name:'交通网络',icon:'iconfont icon-kongjian',checked:false},
            {id:'dmdx',name:'地貌地形',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'jmd',name:'居民地',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'tl',name:'铁路',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'gsgl',name:'高速公路',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'gd',name:'国道',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
          ]
        },{
          title:'基础水利数据',
          fil: [
            {id:'hl',name:'河流',icon:'watericon1-heliu',value:100,checked:false,comeFrom:'service',url:''},
            {id:'hp',name:'湖泊',icon:'watericon1-hubo',value:100,checked:false,comeFrom:'service',url:''},
            {id:'sk_base',name:'水库',icon:'watericon1-shuiku',value:100,checked:false,comeFrom:'service',url:''},
            {id:'sxwl',name:'水系网络',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            // {id:'station',name:'监测站',icon:'iconfont icon-kongjian',checked:true,label:'iconfont icon-xiangyou2',
            //   child:[
            //     {name:'水文站',icon:'iconfont icon-kongjian'},
            //     {name:'雨量站',icon:'iconfont icon-kongjian'},
            //     {name:'墑情监测站',icon:'iconfont icon-kongjian'},
            //     {name:'水质监测站',icon:'iconfont icon-kongjian'},
            //     {name:'取用水测站',icon:'iconfont icon-kongjian'}
            //   ],
            // }
          ]
        }
      ]
    },
    {
      pageone: [
        {
          title:'水利工程',
          fil: [
            {id:'hz',name:'涵闸',icon:'watericon1-shuizha',value:100,checked:false,comeFrom:'service'},
            {id:'bz',name:'泵站',icon:'watericon1-bengzhan',value:100,checked:false,comeFrom:'service'},
            {id:'df',name:'堤防',icon:'watericon1-difanggongcheng',value:100,checked:false,comeFrom:'service',url:''},
            {id:'db',name:'大坝',icon:'watericon1-daba',value:100,checked:false,comeFrom:'service',url:''},
            {id:'wq',name:'圩区',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'ydsgc',name:'引调水工程',icon:'watericon1-yintiaoshuigongchengdabilichitiaoshui',value:100,checked:false,comeFrom:'service',url:''},
            {id:'sk',name:'水库',icon:'watericon1-shuikushuiwenzhan',value:100,checked:false,comeFrom:'service',url:''}
          ]
        },
        {
          title:'水资源水环境',
          fil: [
            {id:'syd',name:'水源地',icon:'watericon1-dibiaoshuishuiyuandi1',value:100,checked:false,comeFrom:'service',url:''},
            {id:'qsk',name:'取水口',icon:'watericon1-hehuqushuikou',value:100,checked:false,comeFrom:'service',url:''},
            {id:'pwk',name:'排污口',icon:'watericon1-ruhehupaiwukou',value:100,checked:false,comeFrom:'service',url:''},
            {id:'qysh',name:'取用水户',icon:'watericon1-quyongshuicezhan',value:100,checked:false,comeFrom:'service',url:''},
            {id:'sgnq',name:'水功能区',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'szyfq',name:'水资源分区',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'lz',name:'蓝藻',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'sjszdm',name:'省界水质断面',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'sjsldm',name:'省界水量断面',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'hthjcdm',name:'环太湖监测断面',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''}
          ]
        },
        {
          title:'水文',
          fil: [
            {id:'swenz',name:'水文站',icon:'watericon1-hedaoshuiwenzhan',value:100,checked:false,comeFrom:'service',url:''},
            {id:'sweiz',name:'水位站',icon:'watericon1-hedaoshuiweizhan',value:100,checked:false,comeFrom:'service',url:''},
            {id:'ylz',name:'雨量站',icon:'watericon1-yuliangzhan',value:100,checked:false,comeFrom:'service',url:''},
            {id:'szz',name:'水质站',icon:'watericon1-shuizhijiancezhan',value:100,checked:false,comeFrom:'service',url:''},
            {id:'zfz',name:'蒸发站',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            // {name:'小流域',icon:'iconfont icon-kongjian'},
            // {name:'遥测站',icon:'iconfont icon-kongjian'},
          ]
        },
        {
          title:'防汛抗旱',
          fil: [
            {id:'xzhq',name:'蓄滞洪区',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'ylq',name:'易涝区',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
            {id:'yhq',name:'易旱区',icon:'iconfont icon-kongjian',value:100,checked:false,comeFrom:'service',url:''},
          ]
        }
      ]
    },
    {
      pageone: [
        {
          title:'国家基础数据',
          fil: [
            // {id:'oneMap_slpcq',name:'水利普查区',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/XZQH/wmts100',tileMatrixSet:'Custom_XZQH'},
            {id:'oneMap_sjxzqh',name:'省级行政区划',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/MWR_PROV_5T_V/wmts100?k=9CA3BF16C376D2120058BB4C67CF94D4',tileMatrixSet:'Custom_MWR_PROV_5T_V'},
            {id:'oneMap_dsjxzqh',name:'地市级行政区划',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/MWR_CITY_5T_V/wmts100?k=F593DF2205ACBEE00753D64D672C8C04',tileMatrixSet:'Custom_MWR_CITY_5T_V'},
            {id:'oneMap_xjxzqh',name:'县级行政区划',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/MWR_CNTY_5T_V/wmts100?k=8B52AB71E0FCB3B19E5F9CF9643359E6',tileMatrixSet:'Custom_MWR_CNTY_5T_V'},
          ]
        },{
          title:'水利基础数据',
          fil: [
            {id:'oneMap_sxzx',name:'水系轴线',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/RIVER_V/wmts100?k=18E4F11F78E962787CCF92D641B6DC5B',tileMatrixSet:'Custom_RIVER_V'},
            // {id:'oneMap_hp',name:'湖泊',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/LAKE_V/wmts100?k=9ABA5B6CA888E16A99270C2B5D5D1E07',tileMatrixSet:'Custom_LAKE_V'},
            {id:'oneMap_lyfq',name:'流域分区',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/BAS_V/wmts100?k=DA3F02B583B8FF68A8FC5E4FDD129A06',tileMatrixSet:'Custom_BAS_V'},
            {id:'oneMap_sk',name:'水库',icon:'watericon1-shuiku',checked:false,url:'/iserver/services/RSWB_V/wmts100?k=6FB32ACEC8E6B6C664D2C11BC669A61B',tileMatrixSet:'Custom_RSWB_V'},
            {id:'oneMap_skdb',name:'水库大坝',icon:'watericon1-daba',checked:false,url:'/iserver/services/DAM_V/wmts100?k=4FDDC20207D95F7A17DBADE1890AF689',tileMatrixSet:'Custom_DAM_V0106'},
            {id:'oneMap_sdz',name:'水电站',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/HYPO_V/wmts100?k=B383F63E52F35D21BF3C4993401713EE',tileMatrixSet:'Custom_HYPO_V0106'},
            {id:'oneMap_sz',name:'水闸',icon:'watericon1-shuizha',checked:false,url:'/iserver/services/GATE_V/wmts100?k=8895A4CDB81D7D2184AC9E10DDA446A4',tileMatrixSet:'Custom_GATE_V'},
            {id:'oneMap_bz',name:'泵站',icon:'watericon1-bengzhan',checked:false,url:'/iserver/services/PUMP_V/wmts100?k=2D5D90605A8BC795538EC7C6234879FF',tileMatrixSet:'Custom_PUMP_V'},
            {id:'oneMap_ydsgc',name:'引调水工程',icon:'watericon1-yintiaoshuigongchengdabilichitiaoshui',checked:false,url:'/iserver/services/DITR_V/wmts100?k=1E5861EC2B10FBCF5D70B1BFEC5457D0',tileMatrixSet:'Custom_DITR_V'},
            {id:'oneMap_df',name:'堤防',icon:'watericon1-difanggongcheng',checked:false,url:'/iserver/services/DIKE_V/wmts100?k=A9F78B1C59D902C3B16BB5B5254A8CAD',tileMatrixSet:'Custom_DIKE_V'},
            {id:'oneMap_xjb',name:'橡胶坝',icon:'watericon1-xiangjiaoba',checked:false,url:'/iserver/services/RUB_V/wmts100?k=432132901C04E2EC354B620FEAD58E53',tileMatrixSet:'Custom_RUB_V'},
            {id:'oneMap_ncgsgc',name:'农村供水工程',icon:'watericon1-nongcungongshuigongcheng',checked:false,url:'/iserver/services/CWS_V/wmts100?k=9A4A451588C8CDDDAEA3D27DC524818A',tileMatrixSet:'Custom_CWS_V'},
            {id:'oneMap_gq',name:'灌区',icon:'watericon1-guanqu',checked:false,url:'/iserver/services/IRR_V/wmts100?k=7FF31D61489959EEA053AA459E1B55DF',tileMatrixSet:'Custom_IRR_V'},
          ]
        },{
          title:'水资源业务专题数据',
          fil: [
            {id:'oneMap_szyfq',name:'水资源分区',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/WRZ_V/wmts100?k=800CCC3FE334FB90C8FEDE7AE46D39D1',tileMatrixSet:'Custom_WRZ_V'},
            {id:'oneMap_qysh',name:'取用水户',icon:'watericon1-quyongshuicezhan',checked:false,url:'/iserver/services/WIU_V/wmts100?k=9E11AD30746007F0EDF758BA24F7FF63',tileMatrixSet:'Custom_WIU_V'},
            {id:'oneMap_qyscz',name:'取用水测站',icon:'watericon1-quyongshuicezhan',checked:false,url:'/iserver/services/WIUST_V/wmts100?k=A9EA564450974CAE4F1522D3B1E1A892',tileMatrixSet:'Custom_WIUST_V'},
            {id:'oneMap_dbsqsk',name:'地表水取水口',icon:'watericon1-hehuqushuikou',checked:false,url:'/iserver/services/WINT_V/wmts100?k=C3392287B33EA6CB502BD8A92E5D09B5',tileMatrixSet:'Custom_WINT_V'},
            {id:'oneMap_dbssyd',name:'地表水水源地',icon:'watericon1-dibiaoshuishuiyuandi1',checked:false,url:'/iserver/services/SUWS_V/wmts100?k=9D347082F05AA5650CC6A3A3C8C816D3',tileMatrixSet:'Custom_SUWS_V'},
            {id:'oneMap_sgnqh',name:'水功能区划',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/WFZ_V/wmts100?k=B5DBC237FC85AFFA2B288A2BB18E64C3',tileMatrixSet:'Custom_WFZ_V'},
            {id:'oneMap_dxsqsj',name:'地下水取水井',icon:'watericon1-shuijing',checked:false,url:'/iserver/services/WELL_V/wmts100?k=4DE05853AF531CEC9F8334DF7A90865F',tileMatrixSet:'Custom_WELL_V'},
            {id:'oneMap_rhpwk',name:'入河排污口',icon:'watericon1-ruhehupaiwukou',checked:false,url:'/iserver/services/PDO_V/wmts100?k=1869496A45069AADE15553A3E8CF7ABE',tileMatrixSet:'Custom_PDO_V'},
            // {id:'oneMap_sgnqjcdm',name:'水功能区监测断面',icon:'iconfont icon-kongjian',checked:false,url:'/iserver/services/WFZB_V/wmts100?k=234CD7DDC1E6A947344E22968E037E41',tileMatrixSet:'Custom_WFZB_V'},
          ]
        },{
          title:'水利单位',
          fil: [
            {id:'oneMap_slxzjg',name:'水利行政机关',icon:'watericon1-shuilihangzhengjiguan',checked:false,url:'/iserver/services/OFLP_V/wmts100?k=0AD096FB84A68530511CD28557002BBA',tileMatrixSet:'Custom_OFLP_V'},
            {id:'oneMap_slqy',name:'水利企业',icon:'watericon1-shuiliqiye',checked:false,url:'/iserver/services/ENLP_V/wmts100?k=3C4F44D3AC80FBBC25A3DC6F59EC7A4D',tileMatrixSet:'Custom_ENLP_V'},
            {id:'oneMap_slshtt',name:'水利社会团体',icon:'watericon1-shuilishehuituanti',checked:false,url:'/iserver/services/COLP_V/wmts100?k=AD370CEA588AA724951B96DFAC9D22BC',tileMatrixSet:'Custom_COLP_V'},
            {id:'oneMap_slsydw',name:'水利事业单位',icon:'watericon1-shuilihangyedanwei',checked:false,url:'/iserver/services/INLP_V/wmts100?k=D98855B0466C0CA38E39C59F6CB13E82',tileMatrixSet:'Custom_INLP_V'},
            {id:'oneMap_xzslgldw',name:'乡镇水利管理单位',icon:'watericon1-xiangzhenshuiliguanlidanwei',checked:false,url:'/iserver/services/UNORTOWN_V/wmts100?k=B40CB5A27FCDFCD8DE507A746C2D3878',tileMatrixSet:'Custom_UNORTOWN_V'},
          ]
        },
      ]
    },
];
export var options = [
    {
        label: '太湖',
        cities: [{
          label: '江苏省',
        },{
          label: '浙江省',
        },{
          label: '上海市',
        }]
    }
];
export var tabletit1=['基础数据','专题数据','水利一张图'];
export var leftbarList2=[
    {tit:'影像对比检索系统'},
    {tit:'影像对比检索系统'},
    {tit:'影像对比检索系统'},
    {tit:'影像对比检索系统'},
    {tit:'影像对比检索系统'}
];
export var leftbarList12=[{tit:'数据服务管理'},{tit:'功能服务管理'},{tit:'平台应用管理'}];

