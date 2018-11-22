<template>
    <div id="wtcl">
        <el-tabs type="border-card">
            <el-tab-pane label="待处理">
                <el-row :gutter="20">
                    <el-col :span="4" style=" -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
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
                                <span>河流等级</span>
                                <el-select v-model="select_cate" placeholder="河流等级" class="handle-select mr10">
                                    <el-option key="1" label="全部" value="全部"></el-option>
                                    <el-option key="2" label="省级河流" value="省级河流"></el-option>
                                    <el-option key="3" label="市级河流" value="市级河流"></el-option>
                                </el-select>
                                <span class="ml10">问题编号</span>
                                <el-input v-model="wtbh" placeholder="请输入问题编号"></el-input>
                                <span class="ml10">起始时间</span>
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
                                <span class="ml10">提交人</span>
                                <el-input v-model="tjr" placeholder="请输入提交人姓名"></el-input>
                                <div style="float: right;">
                                    <el-button type="primary" icon="search" @click="search">查询</el-button>
                                    <el-button type="primary" icon="search" @click="shuaxin">刷新</el-button>
                                    <el-button type="primary" icon="search" @click="daochu">导出</el-button>
                                </div>
                            </div>
                            <div id="right" style="height: 390px; padding-left:0px; margin-top:20px; width:100%; line-height:25px; font-size:12px; ">
                                <div class="tab-pane fade" id="tableTab"></div>
                                <div id="divDataList" style="overflow: auto;">
                                    <table class="table table-striped m-b-none" id="lb_all" border="1" style="  width:100%; margin-top:10px;border-collapse:collapse; margin-bottom:0px; border:1px solid #ececec; text-align:center;" cellspacing="0" cellpadding="0">
                                        <thead>
                                        <tr>
                                            <!--<th style="width:150px;">
                                <span>问题编号</span>
                            </th>-->
                                            <th style="width:80px">
                                                <span>问题类型</span>
                                            </th>
                                            <th style="width:8%">
                                                <span>相关河道</span>
                                            </th>
                                            <th style="width:100px">
                                                <span>问题状态 </span>
                                            </th>
                                            <th style="width:200px">
                                                <span>问题描述</span>
                                            </th>
                                            <th style="width:80px">
                                                <span>上报人</span>
                                            </th>
                                            <th style="width:100px">
                                                <span>问题地址</span>
                                            </th>
                                            <th style="width:150px">
                                                <span>上报时间</span>
                                            </th>
                                            <th>
                                                <span>操作</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody id="pendingProcessContent" style="text-align:center;"><tr><td style="width:6%;">河湖巡查</td><td>黄河</td><td><font style="color:red;">待派遣</font></td><td>偷排问题严重</td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">北京市西城区牛街街道广安门内大街300号普明大厦</td><td style="width:10%;">2018-11-01 10:09:18</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(5,5)"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="sb(5,5)"><span>上报</span></a><a @click="viewEventAssign(5,5)"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(5,5)"><span>结案</span></a><a @click="GetEventMap(5)"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(5,5)"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(5,5)"> <span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td></td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;"></td><td style="width:10%;">2018-11-01 09:47:26</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(4,4)"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="sb(4,4)"><span>上报</span></a><a @click="viewEventAssign(4,4)"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(4,4)"><span>结案</span></a><a @click="GetEventMap(4)"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(4,4)"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(4,4)"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td>汾河</td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">山西省太原市迎泽区庙前街道桃园四巷4号山西省水利厅</td><td style="width:10%;">2018-10-25 14:50:06</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(3,3)"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="sb(3,3)"> <span>上报</span></a><a @click="viewEventAssign(3,3)"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(3,3)"><span>结案</span></a><a @click="GetEventMap(3)"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(3,3)"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(3,3)"><span>删除</span></a></td></tr></tbody>
                                    </table>
                                </div>
                                <div id="pendingProcessPager" style="text-align:right;"><div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-1"><span class="layui-laypage-count">共 3 条</span><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0">上一页</a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" class="layui-laypage-next layui-disabled" data-page="2">下一页</a><span class="layui-laypage-limits"><select lay-ignore=""><option value="10" selected="">10 条/页</option><option value="20">20 条/页</option><option value="30">30 条/页</option><option value="40">40 条/页</option><option value="50">50 条/页</option></select></span><span class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button type="button" class="layui-laypage-btn">确定</button></span></div></div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="已交办">
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
                                <span>河流等级</span>
                                <el-select v-model="select_cate" placeholder="河流等级" class="handle-select mr10">
                                    <el-option key="1" label="全部" value="全部"></el-option>
                                    <el-option key="2" label="省级河流" value="省级河流"></el-option>
                                    <el-option key="3" label="市级河流" value="市级河流"></el-option>
                                </el-select>
                                <span class="ml10">问题编号</span>
                                <el-input v-model="wtbh" placeholder="请输入问题编号"></el-input>
                                <span class="ml10">起始时间</span>
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
                                <span class="ml10">提交人</span>
                                <el-input v-model="tjr" placeholder="请输入提交人姓名"></el-input>
                                <div style="float: right;">
                                    <el-button type="primary" icon="search" @click="search">查询</el-button>
                                    <el-button type="primary" icon="search" @click="shuaxin">刷新</el-button>
                                    <el-button type="primary" icon="search" @click="daochu">导出</el-button>
                                </div>

                            </div>
                            <div id="divDataList" style="overflow: auto; height: 469px;">
                                <table class="table table-striped m-b-none" id="lb_all" border="1" style="  width:100%; margin-top:10px;border-collapse:collapse; margin-bottom:0px; border:1px solid #ececec; text-align:center;" cellspacing="0" cellpadding="0">
                                    <thead>
                                    <tr>
                                        <!--<th style="width:150px;">
                            <span>问题编号</span>
                        </th>-->
                                        <th style="width:80px">
                                            <span>问题类型</span>
                                        </th>
                                        <th style="width:8%">
                                            <span>相关河道</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题状态 </span>
                                        </th>
                                        <th style="width:200px">
                                            <span>问题描述</span>
                                        </th>
                                        <th style="width:80px">
                                            <span>上报人</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题地址</span>
                                        </th>
                                        <th style="width:150px">
                                            <span>上报时间</span>
                                        </th>
                                        <th>
                                            <span>操作</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="pendingProcessContent" style="text-align:center;"><tr></tr></tbody>
                                </table>
                            </div>
                            <div id="pendingProcessPager" style="text-align:right;"><div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-1"><span class="layui-laypage-count">共 3 条</span><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0">上一页</a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" class="layui-laypage-next layui-disabled" data-page="2">下一页</a><span class="layui-laypage-limits"><select lay-ignore=""><option value="10" selected="">10 条/页</option><option value="20">20 条/页</option><option value="30">30 条/页</option><option value="40">40 条/页</option><option value="50">50 条/页</option></select></span><span class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button type="button" class="layui-laypage-btn">确定</button></span></div></div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="已结案">
                <el-row :gutter="20">
                    <el-col :span="4" style=" -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
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
                                <span>河流等级</span>
                                <el-select v-model="select_cate" placeholder="河流等级" class="handle-select mr10">
                                    <el-option key="1" label="全部" value="全部"></el-option>
                                    <el-option key="2" label="省级河流" value="省级河流"></el-option>
                                    <el-option key="3" label="市级河流" value="市级河流"></el-option>
                                </el-select>
                                <span class="ml10">问题编号</span>
                                <el-input v-model="wtbh" placeholder="请输入问题编号"></el-input>
                                <span class="ml10">起始时间</span>
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
                                <span class="ml10">提交人</span>
                                <el-input v-model="tjr" placeholder="请输入提交人姓名"></el-input>
                                <div style="float: right;">
                                    <el-button type="primary" icon="search" @click="search">查询</el-button>
                                    <el-button type="primary" icon="search" @click="shuaxin">刷新</el-button>
                                    <el-button type="primary" icon="search" @click="daochu">导出</el-button>
                                </div>

                            </div>
                            <div id="divDataList" style="overflow: auto;">
                                <table class="table table-striped m-b-none" id="lb_all" border="1" style="  width:100%; margin-top:10px;border-collapse:collapse; margin-bottom:0px; border:1px solid #ececec; text-align:center;" cellspacing="0" cellpadding="0">
                                    <thead>
                                    <tr>
                                        <!--<th style="width:150px;">
                            <span>问题编号</span>
                        </th>-->
                                        <th style="width:80px">
                                            <span>问题类型</span>
                                        </th>
                                        <th style="width:8%">
                                            <span>相关河道</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题状态 </span>
                                        </th>
                                        <th style="width:200px">
                                            <span>问题描述</span>
                                        </th>
                                        <th style="width:80px">
                                            <span>上报人</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题地址</span>
                                        </th>
                                        <th style="width:150px">
                                            <span>上报时间</span>
                                        </th>
                                        <th>
                                            <span>操作</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="" style="text-align:center;"><tr><td style="width:6%;">河湖巡查</td><td>黄河</td><td><font style="color:green;">已结案</font></td><td>偷排问题严重</td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">北京市西城区牛街街道广安门内大街300号普明大厦</td><td style="width:10%;">2018-11-01 10:09:18</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(5,5)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(5,5)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(5,5)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(5,5)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(5)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(5,5)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(5,5)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td></td><td><font style="color:green;">已结案</font></td><td>钱钱钱钱去去去</td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;"></td><td style="width:10%;">2018-09-12 17:48:04</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(1,1)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(1,1)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(1,1)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(1,1)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(1)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(1,1)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(1,1)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr></tbody>
                                </table>
                            </div>
                            <div id="pendingProcessPager" style="text-align:right;"><div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-1"><span class="layui-laypage-count">共 3 条</span><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0">上一页</a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" class="layui-laypage-next layui-disabled" data-page="2">下一页</a><span class="layui-laypage-limits"><select lay-ignore=""><option value="10" selected="">10 条/页</option><option value="20">20 条/页</option><option value="30">30 条/页</option><option value="40">40 条/页</option><option value="50">50 条/页</option></select></span><span class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button type="button" class="layui-laypage-btn">确定</button></span></div></div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="全部（本级）">
                <el-row :gutter="20">
                    <el-col :span="4" style=" -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
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
                                <span>河流等级</span>
                                <el-select v-model="select_cate" placeholder="河流等级" class="handle-select mr10">
                                    <el-option key="1" label="全部" value="全部"></el-option>
                                    <el-option key="2" label="省级河流" value="省级河流"></el-option>
                                    <el-option key="3" label="市级河流" value="市级河流"></el-option>
                                </el-select>
                                <span class="ml10">问题编号</span>
                                <el-input v-model="wtbh" placeholder="请输入问题编号"></el-input>
                                <span class="ml10">起始时间</span>
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
                                <span class="ml10">提交人</span>
                                <el-input v-model="tjr" placeholder="请输入提交人姓名"></el-input>
                                <div style="float: right;">
                                    <el-button type="primary" icon="search" @click="search">查询</el-button>
                                    <el-button type="primary" icon="search" @click="shuaxin">刷新</el-button>
                                    <el-button type="primary" icon="search" @click="daochu">导出</el-button>
                                </div>

                            </div>
                            <div id="divDataList" style="overflow: auto;">
                                <table class="table table-striped m-b-none" id="lb_all" border="1" style="  width:100%; margin-top:10px;border-collapse:collapse; margin-bottom:0px; border:1px solid #ececec; text-align:center;" cellspacing="0" cellpadding="0">
                                    <thead>
                                    <tr>
                                        <!--<th style="width:150px;">
                            <span>问题编号</span>
                        </th>-->
                                        <th style="width:80px">
                                            <span>问题类型</span>
                                        </th>
                                        <th style="width:8%">
                                            <span>相关河道</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题状态 </span>
                                        </th>
                                        <th style="width:200px">
                                            <span>问题描述</span>
                                        </th>
                                        <th style="width:80px">
                                            <span>上报人</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题地址</span>
                                        </th>
                                        <th style="width:150px">
                                            <span>上报时间</span>
                                        </th>
                                        <th>
                                            <span>操作</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="" style="text-align:center;"><tr><td style="width:6%;">河湖巡查</td><td>黄河</td><td><font style="color:green;">已结案</font></td><td>偷排问题严重</td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">北京市西城区牛街街道广安门内大街300号普明大厦</td><td style="width:10%;">2018-11-01 10:09:18</td><td style="width:12%;"><a @click="GetEventMap(5)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(5,5)"> <img src="./images/xq.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(5,5)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td></td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;"></td><td style="width:10%;">2018-11-01 09:47:26</td><td style="width:12%;"><a @click="GetEventMap(4)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(4,4)"> <img src="./images/xq.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(4,4)"><img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td>汾河</td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">山西省太原市迎泽区庙前街道桃园四巷4号山西省水利厅</td><td style="width:10%;">2018-10-25 14:50:06</td><td style="width:12%;"><a @click="GetEventMap(3)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(3,3)"> <img src="./images/xq.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(3,3)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td>黄河</td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">山西省太原市迎泽区庙前街道桃园四巷4号山西省水利厅</td><td style="width:10%;">2018-10-25 14:47:39</td><td style="width:12%;"><a @click="GetEventMap(2)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(2,2)"> <img src="./images/xq.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(2,2)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td></td><td><font style="color:green;">已结案</font></td><td>钱钱钱钱去去去</td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;"></td><td style="width:10%;">2018-09-12 17:48:04</td><td style="width:12%;"><a @click="GetEventMap(1)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(1,1)"> <img src="./images/xq.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(1,1)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr></tbody>
                                </table>
                            </div>
                            <div id="pendingProcessPager" style="text-align:right;"><div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-1"><span class="layui-laypage-count">共 3 条</span><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0">上一页</a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" class="layui-laypage-next layui-disabled" data-page="2">下一页</a><span class="layui-laypage-limits"><select lay-ignore=""><option value="10" selected="">10 条/页</option><option value="20">20 条/页</option><option value="30">30 条/页</option><option value="40">40 条/页</option><option value="50">50 条/页</option></select></span><span class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button type="button" class="layui-laypage-btn">确定</button></span></div></div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="全部">
                <el-row :gutter="20">
                    <el-col :span="4" style=" -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
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
                                <span>河流等级</span>
                                <el-select v-model="select_cate" placeholder="河流等级" class="handle-select mr10">
                                    <el-option key="1" label="全部" value="全部"></el-option>
                                    <el-option key="2" label="省级河流" value="省级河流"></el-option>
                                    <el-option key="3" label="市级河流" value="市级河流"></el-option>
                                </el-select>
                                <span class="ml10">问题编号</span>
                                <el-input v-model="wtbh" placeholder="请输入问题编号"></el-input>
                                <span class="ml10">起始时间</span>
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
                                <span class="ml10">提交人</span>
                                <el-input v-model="tjr" placeholder="请输入提交人姓名"></el-input>
                                <div style="float: right;">
                                    <el-button type="primary" icon="search" @click="search">查询</el-button>
                                    <el-button type="primary" icon="search" @click="shuaxin">刷新</el-button>
                                    <el-button type="primary" icon="search" @click="daochu">导出</el-button>
                                </div>

                            </div>
                            <div id="divDataList" style="overflow: auto; height: 390px;">
                                <table class="table table-striped m-b-none" id="lb_all" border="1" style="  width:100%; margin-top:10px;border-collapse:collapse; margin-bottom:0px; border:1px solid #ececec; text-align:center;" cellspacing="0" cellpadding="0">
                                    <thead>
                                    <tr>
                                        <!--<th style="width:150px;">
                            <span>问题编号</span>
                        </th>-->
                                        <th style="width:80px">
                                            <span>问题类型</span>
                                        </th>
                                        <th style="width:8%">
                                            <span>相关河道</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题状态 </span>
                                        </th>
                                        <th style="width:200px">
                                            <span>问题描述</span>
                                        </th>
                                        <th style="width:80px">
                                            <span>上报人</span>
                                        </th>
                                        <th style="width:100px">
                                            <span>问题地址</span>
                                        </th>
                                        <th style="width:150px">
                                            <span>上报时间</span>
                                        </th>
                                        <th>
                                            <span>操作</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="pendingProcessContent" style="text-align:center;"><tr><td style="width:6%;">河湖巡查</td><td>姚暹渠</td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">运城市河长办 运城市河长办<br>暂无号码</td><td style="width:11%;">山西省运城市盐湖区东城街道人民南路129号</td><td style="width:10%;">2018-11-02 19:23:57</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(7,7)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(7,7)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(7,7)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(7,7)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(7)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(7,7)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(7,7)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td>三交河</td><td><font style="color:red;">待派遣</font></td><td>有人偷采沙</td><td style="width:12%;">运城市河长办 运城市河长办<br>暂无号码</td><td style="width:11%;">山西省运城市夏县水头镇S75侯平高速</td><td style="width:10%;">2018-11-01 18:52:40</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(6,6)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(6,6)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(6,6)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(6,6)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(6)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(6,6)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(6,6)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td>黄河</td><td><font style="color:green;">已结案</font></td><td>偷排问题严重</td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">北京市西城区牛街街道广安门内大街300号普明大厦</td><td style="width:10%;">2018-11-01 10:09:18</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(5,5)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(5,5)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(5,5)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(5,5)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(5)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(5,5)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(5,5)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td></td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;"></td><td style="width:10%;">2018-11-01 09:47:26</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(4,4)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(4,4)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(4,4)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(4,4)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(4)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(4,4)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(4,4)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td>汾河</td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">山西省太原市迎泽区庙前街道桃园四巷4号山西省水利厅</td><td style="width:10%;">2018-10-25 14:50:06</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(3,3)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(3,3)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(3,3)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(3,3)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(3)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(3,3)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(3,3)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td>黄河</td><td><font style="color:red;">待派遣</font></td><td></td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;">山西省太原市迎泽区庙前街道桃园四巷4号山西省水利厅</td><td style="width:10%;">2018-10-25 14:47:39</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(2,2)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(2,2)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(2,2)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(2,2)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(2)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(2,2)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(2,2)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr><tr><td style="width:6%;">河湖巡查</td><td></td><td><font style="color:green;">已结案</font></td><td>钱钱钱钱去去去</td><td style="width:12%;">山西省河长办 山西省河长办<br>暂无号码</td><td style="width:11%;"></td><td style="width:10%;">2018-09-12 17:48:04</td><td style="width:27%;"><a data-toggle="modal" data-target="#myModal4" @click="assignment(1,1)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>处置</span></a><a data-toggle="modal" data-target="#myModal6" @click="assignment(1,1)"> <img src="./images/pf.png" style="width: 16px; height: 16px;"><span>上报</span></a><a @click="viewEventAssign(1,1)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span>交 办</span></a><a data-toggle="modal" data-target="#myModalJA" @click="jieA(1,1)"> <img src="./images/disposition.png" style="width: 16px; height: 16px;"><span>结案</span></a><a @click="GetEventMap(1)"> <img src="./images/jb.png" style="width: 16px; height: 16px;"><span style="color:#3582C4">位置</span></a><a data-toggle="modal" data-target="#myModal2" @click="selectDetail(1,1)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>详情</span></a><a data-toggle="modal" data-target="#myModal8" @click="deleteSB(1,1)"> <img src="./images/detail.png" style="width: 16px; height: 16px;"><span>删除</span></a></td></tr></tbody>
                                </table>
                            </div>
                            <div id="pendingProcessPager" style="text-align:right;margin-top: 10px;"><div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-1"><span class="layui-laypage-count">共 7 条</span><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0">上一页</a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" class="layui-laypage-next layui-disabled" data-page="2">下一页</a><span class="layui-laypage-limits"><select lay-ignore=""><option value="10" selected="">10 条/页</option><option value="20">20 条/页</option><option value="30">30 条/页</option><option value="40">40 条/页</option><option value="50">50 条/页</option></select></span><span class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button type="button" class="layui-laypage-btn">确定</button></span></div></div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>


        <!--问题处置-->
        <el-dialog
            title="问题处置"
            :visible.sync="chuzhi"
            width="50%"
            :before-close="handleClose">
            <div class="modal-body" style="border:0px;width:100%;">
                <table class="tblForm" style="margin:0px auto;width:100%;">
                    <tbody><tr>
                        <th style="width:20%;">上传图片</th>
                        <td>
                            <form id="infoBTTPForm" enctype="multipart/form-data">
                                <table style="border:0px; height:180px;">
                                    <tbody><tr>
                                        <td style="border:0px;"><input style="width:100%;height:26px ;border:none;" id="BTTP" name="test" type="file"></td>
                                        <td style="border:0px;">
                                            <div>
                                                <img id="imgBTTP" src="" style="width: 200px; height: 160px; display: none;">
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <th style="width:20%;">处置描述</th>
                        <td colspan="5">
                            <textarea style="width:100%;height:120px;font-size:15px;" rows="2" cols="20" class="form-control" id="DispatchCZ" placeholder="请输入描述"></textarea>
                        </td>
                    </tr>
                    </tbody></table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="chuzhi = false">取 消</el-button>
                <el-button type="primary" @click="chuzhi = false">确 定</el-button>
              </span>
        </el-dialog>
        <!--问题上报-->
        <el-dialog
            title="问题上报"
            :visible.sync="shangbao"
            width="50%"
            :before-close="handleClose">
            <div class="modal-body" style="border:0px;width:100%;">
                确认上报吗？
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="shangbao = false">取 消</el-button>
                <el-button type="primary" @click="shangbao = false">确 定</el-button>
              </span>
        </el-dialog>
        <!--问题交办-->
        <el-dialog
            title="问题交办"
            :visible.sync="jiaoban"
            width="50%"
            :before-close="handleClose">
            <div class=" " style="padding:10px;padding-left:40px;width:95%;">
                <table style="margin:0px auto;width:100%;">
                    <tbody><tr>
                        <th style="width:12%;">选择交办对象</th>
                        <td>
                            <div id="" style="width:100%;padding-left:10px;padding-top:10px;padding-bottom:10px; overflow:hidden;max-height:330px;overflow-x:hidden;">
                                <div id="DepartmentByRiverOwnerList" style="align-content:center; padding:0px; overflow-y:hidden; border-bottom:1px solid #ececec;"><div class="searchbox-lab" style="width:150px; height: 30px; float:left; padding-right:0px; ">                                <label><input name="Dempartment1&quot;" class="ace" type="radio" @click="QueryDepartmentByRiverOwnerList()" value="">                                <span class="lbl">同级成员单位</span></label></div>                            <div class="searchbab" style="width:150px; height: 30px; float:left; padding-right:0px; ">                                <label><input name="Dempartment1&quot;" class="ace" type="radio" @click="QueryDepartmentBySubRiverOwnerOfficeList()" value="">                                <span class="lbl">下级河长办</span></label></div>                            <div class="searchbab" style="width:150px; height: 30px; float:left; padding-right:0px;  ">                                <label><input name="Dempartment1&quot;" class="ace" type="radio" @click="QueryUserListByAdCode()" value="">                                <span class="lbl">同级河长</span></label></div>                            <div class="searchbab" style="width:150px; height:30px; float:left; ">                                <label><input name="Dempartment1&quot;" class="ace" type="radio" @click="QuerySubUserListByAdCode()" value="">                                <span class="lbl">下级河长</span></label></div>                            </div>
                                <div class="panel-body" style=" text-align:left; padding:5px; overflow-y:scroll;max-height:300px;overflow-x:hidden;padding:10px;">
                                    <input type="hidden" id="selDepartmentID" value="">
                                    <div id="jstree5">
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th style="width:12%;padding-top:15px;">填写交办描述</th>
                        <td colspan="5" style="padding-top:15px; ">
                            <textarea style="width:100%;height:120px;font-size:15px;" rows="2" cols="20" class="form-control" id="DispatchJB" placeholder="请输入描述"></textarea>
                        </td>
                    </tr>
                    </tbody></table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="jiaoban = false">取 消</el-button>
                <el-button type="primary" @click="jiaoban = false">确 定</el-button>
              </span>
        </el-dialog>
        <!--问题结案-->
        <el-dialog
            title=" 问题结案"
            :visible.sync="wtja"
            width="70%"
            :before-close="handleClose">
            <div class="modal-body" style="border:0px;width:100%;">
                <table class="tblForm" style="margin:0px auto;width:100%;">
                    <tbody><tr>
                        <th style="width:20%;">结案描述</th>
                        <td colspan="5">
                            <textarea style="width:100%;height:120px;font-size:15px;" rows="2" cols="20" class="form-control" id="CloseSuggestion" placeholder="请输入描述"></textarea>
                        </td>
                    </tr>
                    </tbody></table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="wtja = false">取 消</el-button>
                <el-button type="primary" @click="wtja = false">确 定</el-button>
              </span>
        </el-dialog>

        <!--上报详情-->
        <el-dialog
            title=" 问题详细信息"
            :visible.sync="wtxq"
            width="70%"
            :before-close="handleClose">
            <el-row :gutter="20">
                <el-col :span="12" style="height: 300px; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
                    <div class="modal-body" style="width:100%;padding-left:0px;padding-right:0px;">
                        <div style="width:100%;">
                            <div style="padding:5px; width:100%;">
                                <table class="tblForm" style="margin:0px;">
                                    <tbody><tr>
                                        <th>问题编号</th>
                                        <td>
                                            <label id="EVENTCODE">20181101094726429</label>
                                        </td>
                                        <th>问题类型</th>
                                        <td>
                                            <label id="EVENTTYPE">河湖巡查</label>
                                        </td>
                                        <th>问题处理状态</th>
                                        <td>
                                            <label id="EVENTSTATUS"><font style="color:red;">待派遣</font></label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>所在地区</th>
                                        <td>
                                            <label id="EVENTAREANAME"></label>
                                        </td>
                                        <th>相关河段</th>
                                        <td>
                                            <label id="EVENTRIVERNAME"></label>
                                        </td>
                                        <th>相关河长</th>
                                        <td>
                                            <label id="EVENTRIVEROWNERNAME">暂无河长</label>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th>上报人</th>
                                        <td>
                                            <label id="EVENTREPORTNAME">山西省河长办</label>
                                        </td>
                                        <th>联系电话</th>
                                        <td>
                                            <label id="REPORTERTEL"></label>
                                        </td>
                                        <th>上报时间</th>
                                        <td>
                                            <span id="EVENTCREATETIME">2018-11-01 09:47:26</span>
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>问题描述</th>
                                        <td colspan="5">
                                            <label style="width:100%;" id="EVENTDESC"></label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>上报事件</th>
                                        <td colspan="5" id="EventProblemList"><span style="margin-right:10px;height:25px;width:70px;line-height:20px;" class="label label-success">漂浮物</span></td>
                                    </tr>
                                    <tr style="height:60px;">
                                        <th>问题上报图片</th>
                                        <td colspan="5">
                                            <div>
                                                <ul id="ulInspectEventPictrueList" class="ace-thumbnails clearfix"><li><a target="_blank" id="picture0" title="巡河问题照片" data-rel="colorbox" href="" class="cboxElement"><img id="img1" src="" width="100" height="100" alt="100x100"></a></li></ul>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" style="height: 300px; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
                    <div id="flowviews" style="width:380px;min-height:342px;float:left;display:none;margin-top:30px;overflow:auto;overflow-x:hidden;"></div>
                    <div id="container" style="width: 380px; min-height: 342px; position: absolute; top: 10px; border: 2px solid rgb(204, 204, 204); border-radius: 0.7em; left: 550px; display: block;  overflow: hidden; background: rgb(252, 249, 242); cursor: url(&quot;http://webapi.amap.com/theme/v1.3/openhand.cur&quot;), default;" class="amap-container"><object style="display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;" type="text/html" data="about:blank"></object><div class="amap-maps"><div class="amap-drags" style=""><div class="amap-layers" style="transform: translateZ(0px);"><div class="amap-markers" style="position: absolute; z-index: 120; top: 169px; left: 188px;"><div class="amap-marker" style="top: -31px; left: -9px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;"><div class="amap-icon" style="position: absolute; overflow: inherit; opacity: 1;"><img src="http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png" style="top: 0px; left: 0px;"></div></div></div><canvas class="amap-labels" draggable="false" style="position: absolute; z-index: 99; height: 338px; width: 376px; top: 0px; left: 0px;" width="752" height="676"></canvas><canvas class="amap-layer" width="470" height="422" style="position: absolute; z-index: 0; transform-origin: 235px 211px 0px; transform: scale3d(0.8, 0.8, 1); top: -42px; left: -47px; height: 422px; width: 470px;"></canvas></div><div class="amap-overlays" style=""></div></div></div><div style="display: none;"></div><div class="amap-controls"></div><a class="amap-logo" href="http://gaode.com" target="_blank" style="display: block;"><img src="http://webapi.amap.com/theme/v1.3/logo@2x.png"></a><div class="amap-copyright" style="display: none; visibility: visible;"><!--v1.4.1--> © 2018 AutoNavi <span class="amap-mcode">- GS(2018)1709号</span></div></div>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="wtxq = false">返  回</el-button>
                <!--<el-button type="primary" @click="wtxq = false">确 定</el-button>-->
              </span>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "wtcl",
        data() {
            return {
                dataS:'',
                dataE:'',
                wtbh:'',
                tjr:'',
                select_cate: '',
                select_word: '',
                dialogVisible:false,
                chuzhi:false,
                pafa:false,
                jiaoban:false,
                jieA:false,
                shangbao:false,
                shanchu:false,
                wtxq:false,
                wtja:false,
            }
        },
        methods:{
            //
            assignment(){
                this.chuzhi = true;
            },
            sb(){
                this.shangbao = true;
            },
            viewEventAssign(){
                this.jiaoban = true;
            },
            selectDetail(){
                this.wtxq = true;
            },
            jieA(){
                alert(10)
                this.wtja = true;
            }
        },
        mounted(){

        }

    }
</script>

<style>
    @import "../../../static/css/common.css";
    #wtcl .el-input {
        width: 110px;
    }
    #wtcl .ml10{
        margin-left: 10px;
    }
    #wtcl .alert-info {
        height: 40px;
        line-height: 40px;
        color: #31708f;
        background-color: #d9edf7;
        border-color: #bce8f1;
    }
    #pendingProcessContent a {
        margin-left: 10px;
    }
    .layui-laypage .layui-laypage-curr .layui-laypage-em {
        background-color: #3582c4;
    }
</style>
