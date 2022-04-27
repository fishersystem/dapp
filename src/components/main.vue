<template>
    <div style="width: 100%;margin-bottom: 64px;">
        <mu-flex align-items="left">
            <mu-sub-header>System Information</mu-sub-header>
        </mu-flex>
        <mu-flex align-items="start">
            <mu-flex style="width:40%;" align-items="center" wrap="wrap" fill>
                <mu-paper @click="clickinside(0)" style="width:100%; height:250px;" class="content contentleft">
                  <div style="padding-top:2.5rem;" v-if="selid !== 0">
                    <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                      <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="home"></mu-icon></mu-avatar>
                      <h1 class="unitcontent1" >5123450 USD</h1>
                      <p class="unittitle">TVL(Total Value Locked)</p>
                    </mu-flex>
                  </div>
                  <dv-border-box-1 :color="['#e146eb','purple']" v-if="selid === 0">
                    <div style="padding-top:2.5rem;">
                      <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center" fill>
                        <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="36" value="home"></mu-icon></mu-avatar>
                        <h1 class="unitcontent1" >5123450 USD</h1>
                        <p class="unittitle">TVL(Total Value Locked)</p>
                      </mu-flex>
                    </div>
                  </dv-border-box-1>
                </mu-paper>
                
                <!--     Left page second one    -->
                <mu-paper @click="clickinside(1)" v-bind:class="{'selcard':issel1}" style="width:100%;height:400px;/*background-color:rgba(156,39,176,0.05);*/" class="content contentleft" :z-depth.sync="sel">
                    <div style="text-align:left;padding:10px;" v-if="selid != 1">
                        <mu-sub-header class="unittitle">System usage</mu-sub-header>
                        <mu-sub-header class="unitcontent">500000 times</mu-sub-header>
                        <v-chart ref="vchartref" autoresize :option="orgOptions" style="height:280px;"></v-chart>
                    </div>
                    <dv-border-box-1 style="text-align:left;" :color="['#e146eb','purple']"  v-if="selid === 1">
                      <div style="text-align:left;padding:10px;">
                        <mu-sub-header class="unittitle">System usage</mu-sub-header>
                        <mu-sub-header class="unitcontent">500000 times</mu-sub-header>
                        <v-chart ref="vchartref" autoresize :option="orgOptions" style="height:280px;"></v-chart>
                      </div>
                    </dv-border-box-1>
                </mu-paper>

                <!--     Left page third one    -->
                <mu-paper @click="clickinside(2)" style="width:100%;height:300px;/*background-color:rgba(156,39,176,0.05);*/" class="content contentleft" :z-depth="1">
                    <div style="text-align:left;padding-top:80px;" v-if="selid != 2">
                      <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                        <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="account_balance_wallet"></mu-icon></mu-avatar>
                        <h1 class="unitcontent1" >3</h1>
                        <p class="unittitle">Current support asset type</p>
                      </mu-flex>
                    </div>
                    <dv-border-box-1 :color="['#e146eb','purple']"  v-if="selid === 2">
                      <div style="text-align:left;padding-top:80px;">
                        <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                          <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="account_balance_wallet"></mu-icon></mu-avatar>
                          <h1 class="unitcontent1" >3</h1>
                          <p class="unittitle">Current support asset type</p>
                        </mu-flex>
                      </div>
                    </dv-border-box-1>
                </mu-paper>

                <!--     Left page forth one    -->
                <mu-paper  @click="clickinside(3)"  style="width:100%;height:430px;/*background-color:rgba(156,39,176,0.05);*/" class="content contentleft" :z-depth="1">
                    <div style="text-align:left;padding-top:40px;" v-if="selid !== 3">
                      <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                        <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="table_rows"></mu-icon></mu-avatar>
                        <p class="unittitle">Credit rank</p>
                          <mu-list textline="two-line">
                            <mu-list-item avatar button :ripple="false">
                              <mu-list-item-action>
                                <mu-avatar size=32>
                                  <mu-icon size=16 value="people"></mu-icon>
                                </mu-avatar>
                              </mu-list-item-action>
                              <mu-list-item-content>
                                <mu-list-item-title>supper1</mu-list-item-title>
                                <mu-list-item-sub-title>3000 credit</mu-list-item-sub-title>
                              </mu-list-item-content>
                            </mu-list-item>
                            <mu-list-item avatar button :ripple="false">
                              <mu-list-item-action>
                                <mu-avatar size=32>
                                  <mu-icon size=16 value="person"></mu-icon>
                                </mu-avatar>
                              </mu-list-item-action>
                              <mu-list-item-content>
                                <mu-list-item-title>supper2</mu-list-item-title>
                                <mu-list-item-sub-title>2500 credit</mu-list-item-sub-title>
                              </mu-list-item-content>
                            </mu-list-item>
                            <mu-list-item avatar button :ripple="false">
                              <mu-list-item-action>
                                <mu-avatar size=32>
                                  <mu-icon  size=16 value="people"></mu-icon>
                                </mu-avatar>
                              </mu-list-item-action>
                              <mu-list-item-content>
                                <mu-list-item-title>supper3</mu-list-item-title>
                                <mu-list-item-sub-title>2000 credit</mu-list-item-sub-title>
                              </mu-list-item-content>
                            </mu-list-item>
                          </mu-list>
                      </mu-flex>
                    </div>
                    <dv-border-box-1 :color="['#e146eb','purple']"  v-if="selid === 3">
                      <div style="text-align:left;padding-top:40px;">
                        <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                          <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="table_rows"></mu-icon></mu-avatar>
                          <p class="unittitle" sytle="margin-top:20px;">Credit rank</p>
                          <mu-list textline="two-line">
                            <mu-list-item avatar button :ripple="false">
                              <mu-list-item-action>
                                <mu-avatar size=32>
                                  <mu-icon size=16 value="people"></mu-icon>
                                </mu-avatar>
                              </mu-list-item-action>
                              <mu-list-item-content>
                                <mu-list-item-title>supper1</mu-list-item-title>
                                <mu-list-item-sub-title>3000 credit</mu-list-item-sub-title>
                              </mu-list-item-content>
                            </mu-list-item>
                            <mu-list-item avatar button :ripple="false">
                              <mu-list-item-action>
                                <mu-avatar size=32>
                                  <mu-icon size=16 value="person"></mu-icon>
                                </mu-avatar>
                              </mu-list-item-action>
                              <mu-list-item-content>
                                <mu-list-item-title>supper2</mu-list-item-title>
                                <mu-list-item-sub-title>2500 credit</mu-list-item-sub-title>
                              </mu-list-item-content>
                            </mu-list-item>
                            <mu-list-item avatar button :ripple="false">
                              <mu-list-item-action>
                                <mu-avatar size=32>
                                  <mu-icon size=16 value="people"></mu-icon>
                                </mu-avatar>
                              </mu-list-item-action>
                              <mu-list-item-content>
                                <mu-list-item-title>supper3</mu-list-item-title>
                                <mu-list-item-sub-title>2000 credit</mu-list-item-sub-title>
                              </mu-list-item-content>
                            </mu-list-item>
                          </mu-list>
                        </mu-flex>
                      </div>
                    </dv-border-box-1>
                </mu-paper>
            </mu-flex>

<!-- right list -->
            <mu-flex style="width:40%;height:200px;" justify-content="center" wrap="wrap" fill>
                <mu-paper  @click="clickinside(4)" style="width:100%;height:300px;text-align:center;/*background-color:rgba(156,39,176,0.05);*/" class="content contentright" :z-depth="1">
                    <div style="text-align:center;padding-top:2.5rem" v-if="selid!==4">
                      <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                        <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="group"></mu-icon></mu-avatar>
                        <h1 class="unitcontent1" >5123450</h1>
                        <p class="unittitle">Total registed users</p>
                        <h1 class="unitcontent1" >450</h1>
                        <p class="unittitle">Registed this month</p>
                      </mu-flex>
                    </div>
                    <dv-border-box-1 :color="['#e146eb','purple']"   v-if="selid===4">
                      <div style="text-align:center;padding-top:2.5rem">
                        <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                          <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="group"></mu-icon></mu-avatar>
                          <h1 class="unitcontent1" >5123450</h1>
                          <p class="unittitle">Total registed users</p>
                          <h1 class="unitcontent1" >450</h1>
                          <p class="unittitle">Registed this month</p>
                        </mu-flex>
                      </div>
                    </dv-border-box-1>
                </mu-paper>

                <mu-paper @click="clickinside(5)" style="width:100%;height:400px;" class="content contentright errorpage" :z-depth="24">
                    <div style="padding-top:50px;text-align:center;" v-if="selid!==5">
                      <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                        <!--<dv-decoration-9 :color="['#e146eb','purple']" style="width:150px;height:150px;">20 days</dv-decoration-9>-->
                        <dv-decoration-9 style="width:130px;height:130px;">20 days</dv-decoration-9>
                          <h1 class="unitcontent">{{nowDate}}</h1>
                          <p class="unittitle">Current time</p>
                      </mu-flex>
                    </div>
                    <dv-border-box-1 :color="['#e146eb','purple']" style="text-align:left;" v-if="selid===5">
                      <div style="padding-top:50px;text-align:center;">
                        <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                          <dv-decoration-9 style="width:130px;height:130px;">20 days</dv-decoration-9>
                          <h1 class="unitcontent">{{nowDate}}</h1>
                          <p class="unittitle">Current time</p>
                        </mu-flex>
                      </div>
                    </dv-border-box-1>
                </mu-paper>

                <mu-paper @click="clickinside(6)" style="width:100%;height:300px;/*background-color:rgba(156,39,176,0.05);*/" class="content contentright" :z-depth="1">
                  <div style="text-align:left;padding-top:2.5rem" v-if="selid!==6">
                    <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                      <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="group"></mu-icon></mu-avatar>
                      <h1 class="unitcontent1" >5123450</h1>
                      <p class="unittitle">Total registed users</p>
                      <h1 class="unitcontent1" >450</h1>
                      <p class="unittitle">Registed this month</p>
                    </mu-flex>
                  </div>
                  <dv-border-box-1 :color="['#e146eb','purple']" style="text-align:left;" v-if="selid===6">
                      <div style="text-align:center;padding-top:2.5rem">
                        <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                          <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="group"></mu-icon></mu-avatar>
                          <h1 class="unitcontent1" >5123450</h1>
                          <p class="unittitle">Total registed users</p>
                          <h1 class="unitcontent1" >450</h1>
                          <p class="unittitle">Registed this month</p>
                        </mu-flex>
                      </div>
                  </dv-border-box-1>
                </mu-paper>

                <mu-paper @click="clickinside(7)" style="width:100%;height:200px;/*background-color:rgba(156,39,176,0.05);*/" class="content contentright" :z-depth="1">
                    <div style="text-align:left;padding-top:2.5rem" v-if="selid!==7">
                      <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                        <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="account_balance"></mu-icon></mu-avatar>
                        <h1 class="unitcontent1" >10000 USD</h1>
                        <p class="unittitle">Current system income</p>
                      </mu-flex>
                    </div>
                    <dv-border-box-1 :color="['#e146eb','purple']" style="text-align:left;" v-if="selid===7">
                      <div style="text-align:center;padding-top:2.5rem">
                        <mu-flex align-items="center" direction="column" justify-content="center" align-content="center" align-self="center">
                          <mu-avatar size="58" text-color="primary" color="white"><mu-icon size="32" value="account_balance"></mu-icon></mu-avatar>
                          <h1 class="unitcontent1" >10000 USD</h1>
                          <p class="unittitle">Current system income</p>
                        </mu-flex>
                      </div>
                    </dv-border-box-1>
                </mu-paper>
            </mu-flex>
        </mu-flex>
    </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Fisher System dApp',
      sel:8,
      issel:false,
      selid:0,
      orgOptions: {
        xAxis: {
            type: 'category',
            data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820,932,901,934,1290,1330,1320],
          type: 'line',
          smooth: true
        }]
      },
      nowDate: '2022-04-12 22:01:05'
    }
  },
  mounted(){
    this.orgOptions = {
      title:{
        text:"System usage"
      },
      xAxis: {
        type: 'category',
        axisLine:{
          show:false,
          symbol:'none'
        },
        axisTick:{
          show: false
        },
        data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820,932,901,934,1290,1330,1320],
        type: 'line',
        smooth: true
      }]
    }

    window.addEventListener("resize",()=>this.$refs.vchartref.resize())
  },
  methods: {
    clickoutside (sid) {
      this.sel = 0
      this.issel = false

      let self = this
      self.selid = sid
    },
    clickinside (sid) {
      this.sel = 8
      this.issel = true
      this.selid = sid
      console.log("clickinside",sid,this.selarr)
    },
    clickoutside1 (sid) {
      this.issel1 = false
    },
    clickinside1 () {
      let self = this
      self.selid = 1
      this.issel1 = true
      console.log("clickinside1",this.selarr)
    },
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      hour = hour < 10 ? "0" + hour : hour;
      let minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      let second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      this.nowDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
  },
  mounted() {
    this.currentTime();
  },

  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selcard{
  background-color:rgba(33,33,33,0.28);
}
.selcardb{
  display:none;
  background-color:rgba(33,33,33,0.28);
}
.content{
  margin-top:12px;
    background-color:rgba(33,33,33,0.28);
}
.content:first-child{
  margin-top:0px;
}
.contentleft{
  margin-right:6px;
  margin-left:12px;
}
.contentright{
  margin-left:6px;
  margin-right:12px;
}
.unittitle
{
  font-size:1em;
  color:rgba(255,255,255,.72);
  margin-top:0.1em;
}
.unitcontent
{
  font-size:1.5em;
  color:rgba(255,255,255,.72);
}
.unitcontent1
{
  font-size:1.5em;
  font-weight:bold;
  color:rgba(255,255,255,.85);
  margin-bottom:0;
}
</style>
