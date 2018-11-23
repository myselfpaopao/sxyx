<template>
    <div id="xhgl">
        <el-tabs type="border-card">
            <el-tab-pane label="巡河记录信息">
                <el-row :gutter="20">
                    <el-col :span="4" style=" border:1px solid #ddd; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
                        <div id="left" style=" border:1px solid #ececec; background-color:#FCFCFC; margin-top:10px;">
                            <div style="width:100%;height:40px; text-align:left; border-bottom:1px solid #ececec; line-height:40px; font-size:15px; padding-left:10px;">
                                <span class="glyphicon glyphicon-home">&nbsp;行政地区</span>
                            </div>
                            <div style="width:100%;height:40px; text-align:left; border-bottom:1px solid #ececec; line-height:40px; font-size:15px; padding-left:10px;">
                                <span class="glyphicon">&nbsp;当前地区：<span id="curAreaName">山西省</span></span>
                            </div>
                            <!--树-->
                            <div style="padding-right:0px; padding:10px; background-color:#FCFCFC; ">
                                <div style="width: 100%; overflow: auto;" id="districtTree" class="jstree jstree-1 jstree-default" role="tree" aria-multiselectable="true" tabindex="0" aria-activedescendant="140000000000" aria-busy="false"><ul class="jstree-container-ul jstree-children" role="group"><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="140000000000_anchor" aria-expanded="true" id="140000000000" class="jstree-node  jstree-open jstree-last"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140000000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>山西省</a><ul role="group" class="jstree-children"><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140100000000_anchor" id="140100000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140100000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>太原市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140200000000_anchor" id="140200000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140200000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>大同市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140300000000_anchor" id="140300000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140300000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;/Images/area.png&quot;); background-position: center center; background-size: auto;"></i>阳泉市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140400000000_anchor" id="140400000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140400000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>长治市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140500000000_anchor" id="140500000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140500000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>晋城市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140600000000_anchor" id="140600000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140600000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>朔州市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140700000000_anchor" id="140700000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140700000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>晋中市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140800000000_anchor" id="140800000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140800000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>运城市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="140900000000_anchor" id="140900000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="140900000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>忻州市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="141000000000_anchor" id="141000000000" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="141000000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>临汾市</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="141100000000_anchor" id="141100000000" class="jstree-node  jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="#" tabindex="-1" id="141100000000_anchor"><i class="jstree-icon jstree-themeicon jstree-themeicon-custom" role="presentation" style="background-image: url(&quot;./images/area.png&quot;); background-position: center center; background-size: auto;"></i>吕梁市</a></li></ul></li></ul></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" style="">
                        <div class="container">
                            <div class="handle-box mgb20">
                                <span>起始时间</span>
                                <el-date-picker
                                    v-model="dataS"
                                    type="date"
                                    value-format=" yyyy-MM-dd"
                                    format="yyyy-MM-dd"
                                    placeholder="选择开始时间">
                                </el-date-picker>
                                <span class="ml10">结束时间</span>
                                <el-date-picker
                                    v-model="dataE"
                                    type="date"
                                    value-format=" yyyy-MM-dd"
                                    format="yyyy-MM-dd"
                                    placeholder="选择结束时间">
                                </el-date-picker>
                                <span class="ml10">巡河人员</span>
                                <el-input v-model="xhry" placeholder="请输入姓名"></el-input>
                                <el-select v-model="select_cate" placeholder="巡河状态" class="handle-select mr10">
                                    <el-option key="1" label="全部" value="全部"></el-option>
                                    <el-option key="2" label="巡河中" value="巡河中"></el-option>
                                    <el-option key="3" label="已结束" value="已结束"></el-option>
                                    <el-option key="4" label="取消巡河" value="取消巡河"></el-option>
                                    <el-option key="5" label="里程无效" value="里程无效"></el-option>
                                    <el-option key="6" label="时长无效" value="时长无效"></el-option>
                                </el-select>
                                <div style="float: right;">
                                    <el-button type="primary" icon="search" @click="search">查询</el-button>
                                    <el-button type="primary" icon="search" @click="shuaxin">刷新</el-button>
                                    <el-button type="primary" icon="search" @click="daochu">导出</el-button>
                                </div>

                            </div>
                            <div>
                                <div class="alert-info">当前显示 山西省 相关的所有巡河记录！</div>
                            </div>
                            <div id="lb_all" border="1" style=" width:100%; margin-bottom:0px; text-align:center;">
                                <div id="tblContent" style="text-align: center; height: 45vh;overflow-y: scroll"><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">运城市 运城市河长办<span style="margin-left:50px;">亳清河</span></div>                        <div><span>巡河时间：2018-11-02 19:24:26  ~  2018-11-02 19:43:57</span></div>                        <div style="height:24px;">巡河时长：19.5 分钟<span style="margin-left:50px;">巡河里程：0.93483 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(56)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(56)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">运城市 运城市河长办<span style="margin-left:50px;">姚暹渠</span></div>                        <div><span>巡河时间：2018-11-02 19:16:52  ~  2018-11-02 19:24:18</span></div>                        <div style="height:24px;">巡河时长：7.4 分钟<span style="margin-left:50px;">巡河里程：0.85145 公里</span></div>                        <div style="height:24px;">巡河问题：1个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(55)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(55)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">永定河</span></div>                        <div><span>巡河时间：2018-11-01 15:37:36  ~  2018-11-01 15:47:45</span></div>                        <div style="height:24px;">巡河时长：10.1 分钟<span style="margin-left:50px;">巡河里程：0.57357 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(39)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(39)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">黄河</span></div>                        <div><span>巡河时间：2018-11-01 15:24:13  ~  2018-11-01 15:30:56</span></div>                        <div style="height:24px;">巡河时长：6.7 分钟<span style="margin-left:50px;">巡河里程：0.72113 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(38)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(38)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">汾河</span></div>                        <div><span>巡河时间：2018-11-01 15:06:55  ~  2018-11-01 15:12:14</span></div>                        <div style="height:24px;">巡河时长：5.3 分钟<span style="margin-left:50px;">巡河里程：1.01448 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(36)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(36)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">汾河</span></div>                        <div><span>巡河时间：2018-11-01 10:17:58  ~  2018-11-01 10:23:31</span></div>                        <div style="height:24px;">巡河时长：5.5 分钟<span style="margin-left:50px;">巡河里程：0.26404 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(29)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(29)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">汾河</span></div>                        <div><span>巡河时间：2018-11-01 09:24:20  ~  2018-11-01 09:34:45</span></div>                        <div style="height:24px;">巡河时长：10.4 分钟<span style="margin-left:50px;">巡河里程：0.2628 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(27)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(27)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">汾河</span></div>                        <div><span>巡河时间：2018-10-30 12:22:28  ~  2018-10-30 12:31:04</span></div>                        <div style="height:24px;">巡河时长：8.6 分钟<span style="margin-left:50px;">巡河里程：18.36117 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(24)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(24)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">汾河</span></div>                        <div><span>巡河时间：2018-10-30 08:15:02  ~  2018-10-30 08:46:42</span></div>                        <div style="height:24px;">巡河时长：31.7 分钟<span style="margin-left:50px;">巡河里程：0.48822 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(23)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(23)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div><div class="inspectitem">                    <div style="float:left;width:50%;">                        <div style="height:24px;">山西省 山西省河长办(测试账户)<span style="margin-left:50px;">黄河</span></div>                        <div><span>巡河时间：2018-10-30 07:52:28  ~  2018-10-30 08:06:44</span></div>                        <div style="height:24px;">巡河时长：14.3 分钟<span style="margin-left:50px;">巡河里程：1.61886 公里</span></div>                        <div style="height:24px;">巡河问题：0个</div>                        <div><a data-toggle="modal" data-target="#InspectRecordModal" @click="getInspectRecord(21)"><span><i class="fa fa-search" aria-hidden="true"></i>查看巡河轨迹</span></a>  <a style="margin-left:30px;" data-toggle="modal" data-target="#DelModal" @click="del(21)"><i class="fa fa-times" aria-hidden="true"></i>删除巡河记录</a></div>                    </div>                    <div style="float:left;width:50%; max-height:100px; overflow-x:auto; overflow-y:auto;">                <div class="bigbox"></div></div></div></div>
                                <img src="" alt="" class="bigimg">
                                <div class="mask">
                                    <img src="/js/zoomimg/close.png" alt="">
                                </div>
                            </div>
                            <div class="pagination">
                                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                                </el-pagination>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="巡河统计信息">巡河统计信息</el-tab-pane>
        </el-tabs>


        <!--巡河详细信息-->
        <el-dialog
            title="  巡河详细信息
"
            :visible.sync="xhxx"
            width="70%"
            :before-close="handleClose">
            <el-tabs type="border-card">
                <el-tab-pane label="巡河基本信息">
                    <div class="modal-body" style="border:0px;width:100%;">
                        <div style="width:100%; border:0px;">
                            <table class="tblForm" style="margin:0px auto; background-color:#eee; border:0px;width:100%;">
                                <tbody><tr>
                                    <td style=" border:0px; width:100%;">

                                        <div id="xhtabContent" class="tab-content" style="margin-top:0.5%;">

                                            <div class="tab-pane fade active in" id="xhjbxxtabcontent">
                                                <div style="width:100%; float:left; overflow:auto; ">
                                                    <div class="panel-body">
                                                        <table style="width:100%;">
                                                            <tbody><tr>
                                                                <th>巡河轨迹</th>
                                                                <!--<td colspan="3">-->
                                                                <!--<div id="container" style="padding: 5px; width: 98%; height: 300px; margin: 0px auto; position: relative; background: rgb(252, 249, 242); cursor: url(&quot;http://webapi.amap.com/theme/v1.3/openhand.cur&quot;), default;" class="amap-container"><object style="display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;" type="text/html" data="about:blank"></object><div class="amap-maps"><div class="amap-drags" style=""><div class="amap-layers" style="transform: translateZ(0px);"><div class="amap-markers" style="position: absolute; z-index: 120; top: 150px; left: 487px;"><div class="amap-marker" style="top: -135px; left: -174px; z-index: 100; transform: rotate(0deg); transform-origin: 20px 60px 0px; display: block;"><div class="amap-icon" title="起点" style="position: absolute; overflow: inherit; opacity: 1;"><img src="/images/map/start.png" style="top: 0px; left: 0px;"></div></div><div class="amap-marker" style="top: -125px; left: -197px; z-index: 100; transform: rotate(0deg); transform-origin: 20px 60px 0px; display: block;"><div class="amap-icon" title="终点" style="position: absolute; overflow: inherit; opacity: 1;"><img src="/images/map/end.png" style="top: 0px; left: 0px;"></div></div></div><canvas class="amap-layer amap-vectors" width="1217" height="375" style="position: absolute; z-index: 110; transform-origin: 608.5px 187.5px 0px; transform: scale3d(0.8, 0.8, 1); top: -38px; left: -122px;"></canvas><canvas class="amap-layer" width="1217" height="375" style="position: absolute; z-index: 0; transform-origin: 608.5px 187.5px 0px; transform: scale3d(0.8, 0.8, 1); top: -38px; left: -122px; height: 375px; width: 1217px;"></canvas><canvas class="amap-labels" draggable="false" width="1948" height="600" style="position: absolute; z-index: 99; height: 300px; width: 974px; top: 0px; left: 0px;"></canvas></div><div class="amap-overlays" style=""></div></div></div><div style="display: none;"></div><div class="amap-controls"></div><a class="amap-logo" href="http://gaode.com" target="_blank" style="display: block;"><img src="http://webapi.amap.com/theme/v1.3/logo@2x.png"></a><div class="amap-copyright" style="display: none; visibility: visible;">&lt;!&ndash;v1.4.4&ndash;&gt; © 2018 AutoNavi <span class="amap-mcode">- GS(2018)1709号</span></div></div>-->
                                                                <!--</td>-->
                                                            </tr>
                                                            <tr>
                                                                <th style="width:150px;">巡河时间段</th>
                                                                <td style="width:250px;">
                                                                    <span id="ksxhsj">2018-11-02 19:24:26</span> ~ <span id="jsxhsj">2018-11-02 19:43:57</span>
                                                                </td>
                                                                <th style="width:150px;">巡河人员</th>
                                                                <td><label id="xhry">运城市河长办</label></td>
                                                            </tr>
                                                            <tr>
                                                                <th>巡河河段</th>
                                                                <td><label id="xhhd">亳清河</label></td>
                                                                <th>巡河地区</th>
                                                                <td><label id="xhdq"></label></td>
                                                            </tr>
                                                            <tr>
                                                                <th>巡河时长(分钟)</th>
                                                                <td><label id="xhsc">19.5</label></td>
                                                                <th>巡河里程（公里）</th>
                                                                <td><label id="xhlc">0.93483</label></td>
                                                            </tr>
                                                            <tr>
                                                                <th style="height:100px; vertical-align:middle;">巡河照片</th>
                                                                <td colspan="3">
                                                                    <div style="overflow-x:auto; padding-top:10px; height:200px; overflow:auto;" id="divInspectPic"><div class="bigbox"></div></div>
                                                                </td>
                                                            </tr>
                                                            </tbody></table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="xhsbsjtabcontent" style="overflow:auto;"></div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody></table>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="巡河上报事件">配置管理</el-tab-pane>
            </el-tabs>

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="xhxx = false">返  回</el-button>
              </span>
        </el-dialog>
        <!--巡河记录删除-->
        <el-dialog
            title="   删除记录"
            :visible.sync="xhjl"
            width="70%"
            :before-close="handleClose">
            <div class="modal-body" style="padding-top:10px;overflow-y:hidden;">
                确认删除该信息吗？
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="xhjl = false">取 消</el-button>
                <el-button type="primary" @click="xhjl = false">确 定</el-button>
              </span>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "XhGl",
        data() {
            return {
                dataS:'',
                dataE:'',
                xhry:'',
                select_cate: '',
                select_word: '',
                xhxx:false,
                xhjl:false,
            }
        },
        methods:{
            getInspectRecord(){
                this.xhxx = true;
            },
            del(){
                this.xhjl = true;
            }
        }
    }
</script>

<style>
    @import "../../../static/css/common.css";
    #xhgl{
        width: 100%;
        height: 100%;
    }
    #xhgl .el-input {
        width: 150px;
    }
    #xhgl .ml10{
        margin-left: 10px;
    }
    #xhgl .alert-info {
        height: 40px;
        line-height: 40px;
        color: #31708f;
        background-color: #d9edf7;
        border-color: #bce8f1;
    }
    .inspectitem {
        width: 100%;
        margin: 0px auto;
        height: 140px;
        padding: 10px;
        background-color: #fff;
        color: #000;
        margin-bottom: 10px;
        text-align: left;
    }
</style>
