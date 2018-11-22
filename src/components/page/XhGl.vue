<template>
    <div id="xhgl">
        <el-tabs type="border-card">
            <el-tab-pane label="巡河记录信息">
                <el-row :gutter="20">
                    <el-col :span="4" style="height: 500px; border:1px solid #ddd; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
                        <!--<h1>行政区划</h1>-->
                        <div style="width:100%;height:40px; text-align:left; border-bottom:1px solid #ececec; line-height:40px; font-size:15px; padding-left:10px;">
                            <span class="glyphicon glyphicon-home">&nbsp;行政地区</span>
                        </div>
                    </el-col>
                    <el-col :span="20" style="height: 500px;">
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
            }
        }
    }
</script>

<style>
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
</style>
