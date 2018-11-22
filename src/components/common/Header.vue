<template>
    <div class="header">
        <div>
            <img style="width: 50px;vertical-align: middle;" src="../../../static/img/logo.png" alt="">
        </div>
        <div class="logo">山西省河长制湖长制综合管理平台</div>
        <div class="nav">
            <div class="nav-a">
                <ul class="nav-a-ul">
                    <li class="nav-a-li" :class="classA == index ? 'active' : '' "  @click="selected(index)"  v-for="(item,index) in configNav">
                        <router-link :to='item.path' class="nav-a-text" @click="showToggle(index)">{{item.name}}</router-link>
                            <ul class="menu_ul" :class="{'active' :index===isShow}">
                                <li class="menu_li" v-for = "nav in item.subItems" :class="classB == nav ? 'active' : '' "  @click="menuselected(nav)">
                                    <router-link class="menu_ul_text" :to="nav.link" :class="{'active':nav.link == linkClick}"  @click = "treeNavSwitch(nav)">{{nav.text}}</router-link>
                                </li>
                            </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    // import vSidebar from './Sidebar.vue';
    export default {
        data() {
            return {
                collapse  : false,
                fullscreen: false,
                message   : 2,
                show      : false,
                classA    : 0,
                classB    : 0,
                isShow    : 0,
                linkClick : "",
                configNav : [
                    {
                    name: "一张图",
                    path: '/OneMap',
                    },
                    {
                    name    : "河长事务",
                    path    : '',
                    subItems: [
                                    { link:'/xhgl',text: '巡河管理'},
                                    { link:'/wtcl',text: '问题处理' }
                                ]
                    },
                    // {
                    // name: "巡河管理",
                    // path: '/xhgl',
                    // },
                    {
                    name    : "信息报送",
                    path    : '',
                    subItems: [
                                    { link:'/shengbs',text: '省级报送'},
                                    { link:'/shibs',text: '市级报送' },
                                    { link:'/xjbs',text: '县级报送' }
                                ]
                    },
                ]
            }
        },
        components:{
            // vSidebar
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username: this.name;
            }
        },
        methods:{

            selected: function(index) {
            this.classA = index;
            },
            menuselected: function(nav) {
            this.classB = nav;
            },
            showToggle: function(index) {
            this.isShow = index;
            },
            treeNavSwitch: function(nav) {
            this.linkClick = nav.link;
            },
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
    .header {
        display        : flex;
        flex-direction : row;
        justify-content: space-between;
        align-items    : center;
        /* position       : relative; */
        box-sizing: border-box;
        /* width          : 100%; */
        height   : 70px;
        font-size: 22px;
        color    : #fff;

    }
    .collapse-btn{
        width      : 50px;
        line-height: 70px;
    }
    .header .logo{
        float      : left;
        width      : 500px;
        line-height: 70px;
        text-shadow: 1px 1px 10px rgb(255,255,255,1);
        font-family: inherit!important;
    }
    .header-right{
        float        : right;
        padding-right: 50px;
    }
    .header-user-con{
        display    : flex;
        height     : 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform   : rotate(45deg);
        margin-right: 5px;
        font-size   : 24px;
    }
    .btn-bell, .btn-fullscreen{
        position     : relative;
        width        : 30px;
        height       : 30px;
        text-align   : center;
        border-radius: 15px;
        cursor       : pointer;
    }
    .btn-bell-badge{
        position     : absolute;
        right        : 0;
        top          : -2px;
        width        : 8px;
        height       : 8px;
        border-radius: 4px;
        background   : #f56c6c;
        color        : #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display      : block;
        width        : 40px;
        height       : 40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color : #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }

    .nav {
  min-width: 50%;
  /* height       : auto;
  margin: 0px auto; */
  /* border-bottom: none; */
  line-height: 70px;
}
.nav-a {
  cursor        : pointer;
  float         : left;
  margin-left   : 50px;
  letter-spacing: 4px;
  position      : relative;
}
.nav-a-ul {
  list-style: none;
}
.nav-a-li {
  display    : inline-block;
  margin-left: 30px;
  height     : 68px;
}
.nav-a-text {
  font-size      : 16px;
  color          : #fff;
  line-height    : 58px;
  text-decoration: none;
}
.menu_ul {
  width        : 130px;
  list-style   : none;
  background   : #fff;
  border-radius: 3px;
  z-index      : 999;
  position     : absolute;
  top          : 58px;
  display      : none;
}
.menu_li {
  height      : 30px;
  line-height : 30px;
  padding-left: 12px;
}
.menu_ul_text {
  font-size      : 14px;
  color          : #666;
  letter-spacing : 0;
  line-height    : 30px;
  text-decoration: none;
  padding-left   : 6px;
}
.nav-a-li:hover {
  border-bottom: 2px solid #fff;
}
.nav-a-li.active {
  border-bottom: 2px solid #fff;
}
/* .nav-a-li:active {
  border-bottom: 2px solid #fff;
} */
.nav-a-li:hover .menu_ul {
  display: block;
}
.menu_ul_text:hover {
  color: #2589ff;
}
.menu_li.active .menu_ul_text{
    color: #2589ff;
}
</style>
