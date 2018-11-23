<template>
<div class="onemap" style="width: 100%;height: 100%;">
    <ul class="left-bar" style="position: absolute;top: 30px;left: 0;height: calc(100% - 30px);width: 40px;background-color: grey;z-index: 999;opacity: .9;">
        <li v-for='(it, index) in tabletit' :key='index' @click="tab(index)">{{it}}</li>
    </ul>
    <div class="show1" v-for='(it1, index) in menuContent' :key='index' v-show='index == num'
         v-if='showMenuContent'>
        <div class="list-tab" v-for='(it2, index2) in it1.pageone' :key='index2'>
            <h3 class="river-jc">
                    <span>
                        <i class="el-icon-tickets"></i>
                        <span>{{it2.title}}</span>
                    </span>
            </h3>
            <ul class="river-ul">
                <li style="cursor:pointer;" :class="{'layerShown':it3.checked}" @click="leftContentClick(it3)"
                    v-for='(it3, index3) in it2.fil' :key='index3'>
                    <i :class="it3.icon"></i>
                    <span>{{it3.name}}
                            <span :class="it3.label" @click="childdialog(index3)"></span>
                        </span>
                </li>
            </ul>
        </div>
    </div>
    <div class="imgcon"><img class="" :src="imgUrl.src" alt=""></div>

</div>
</template>

<script>
    import {tablecont,tabletit1} from './lyrConfig/leftLayerMenuConfig.js'//除矢量底图以外
    import {tablecont_shiliang} from './lyrConfig/leftLayerMenuConfig_shiliang.js'//当切换到矢量底图时，用该配置信息
    export default {
        name: "OneMap",
        data(){
            return {
                tabletit:[],//左侧分类
                showMenuContent:false,
                num:null,
                imgUrl: {
                    src: require('./images/sx.png')
                },
            }
        },
        watch:{
            currentBaseMap:function(newval,oldval){
                var _self = this;
                if(newval == "shiliang"){
                    _self.menuContent = tablecont_shiliang;
                }else{
                    _self.menuContent = tablecont;
                }
            }
        },
        mounted:function(){
            this.menuContent = tablecont;
            this.tabletit = tabletit1;
        },
        methods:{
            tab:function(event) {
                this.showMenuContent = !this.showMenuContent;
                this.num = event;
            },
            childdialog(index3){
                console.log(index3)
                this.tex_p = !this.tex_p
                alert(index3)
            },
            leftContentClick(it3){
                console.log(it3.id);

                if(it3.id == 'oneMap_hl'){
                    this.imgUrl.src = require('./images/hd.png');
                }else if(it3.id == 'oneMap_swz'){
                    this.imgUrl.src = require('./images/hlhp.png');
                }//观测站
                this.showMenuContent = !this.showMenuContent;
            },
        }
    }
</script>

<style scoped>
    /*@import url("../../../static/css/iconfont.css");*/
.left-bar li{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    cursor: pointer;
    writing-mode: tb-rl!important;
    width: 100%;
    color: #fff;
}
.left-bar li:hover{
    background: gainsboro;
}
.imgcon{
    width: 100%;
    height: 100%;
    position: absolute;
    /*background: url() no-repeat;*/
    /*overflow-y: scroll;*/
    z-index: 10;
    -webkit-background-size: cover;
    background-size: cover;
}
.imgcon img{
    max-width: 100%;
    /*max-height: 100%;*/
}
.show1 {
    width: 357px;
    height: calc(100% - 30px);
    border: 1px solid #ccc;
    border: 1px solid rgb(204, 204, 204);
    background-color: rgba(255, 255, 255, 0.8);
    border-left: none;
    position: absolute;
    overflow-y: scroll;
    left: 40px;
    top: 30px;
    z-index: 99;
}
.river-jc{
    margin: 0px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-top: 15px;
    /* color: #ff5200; */
    color: rgb(255, 82, 0)
}
.river-jc .tit-btn{
    margin-right: 15px;
    font-size: 12px;
    width: 40px;
    height: 20px;
}
.river-jc i{
    font-size: 16px;
    padding-right: 5px;
}
.river-ul{
    padding: 0px;
    margin: 0px;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.river-ul li{
    width: 33%;
    margin-top: 10px;
    font-size: 14px;
    padding: 5px 0;
    /* color: #383838; */
    color: rgb(56, 56, 56);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.river-ul li i{
    padding-bottom: 5px;
}
.river-ul li:hover{
    /* background: #cccccc; */
    background: rgb(204, 204, 204)
}
.river-ul li:checked{
    /* background: #ff5200; */
    background: rgb(255, 82, 0)
}
.layerShown{
    /* background-color:#530133; */
    background-color: rgba(255, 82, 0, 0.2)
}
.e-spp:hover{
    /* color: red; */
    color:rgb(255, 0, 0)
}
</style>
