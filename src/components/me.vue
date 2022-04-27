<template>
    <div style="width: 100%;">
      
        <mu-card style="width: 96%; margin: 8px auto;border-radius: 5px;">
          <mu-card-header title="developeroot" sub-title="Registed">
            <mu-avatar slot="avatar">
              <mu-icon value="account_circle"></mu-icon>
            </mu-avatar>
          </mu-card-header>
        <!--
          <mu-avatar color="indigo">
            <mu-icon value="account_circle"></mu-icon>
          </mu-avatar>
        -->
          <!--<mu-card-title title="developeroot" sub-title="[ Registed ] 3000 credit"></mu-card-title>-->
        </mu-card>

        <mu-tabs :value.sync="active" class="flex-wrapper-0" full-width>
            <mu-tab>Manage</mu-tab>
            <mu-tab>Informations</mu-tab>
            <mu-tab>More</mu-tab>
            <!--<mu-tab>TAB ITEM 4</mu-tab>-->
            <!--<mu-tab>TAB ITEM 5</mu-tab>-->
        </mu-tabs>
        <!--
        <mu-flex class="flex-wrapper-1" justify-content="start" v-if="active === 0">
            <mu-flex class="flex-demo" justify-content="center" >
                <mu-paper class="demo-paper" round :z-depth="0">
                  <mu-text-field full-width icon="confirmation_number" style="margin: 8px auto; background-color:rgba(133,133,33,0.1);"></mu-text-field>
                </mu-paper>
            </mu-flex>
        </mu-flex>
        -->
        <mu-list class="badge-list-wrap" v-if="active === 0">
          <!-- inviter -->
          <mu-list-item button :ripple="true">
            <mu-list-item-action>
              <mu-icon value="person"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>My inviter</mu-list-item-title>
            <mu-list-item-action>
              <mu-badge content="122" color="primary">bussygenesis</mu-badge>
            </mu-list-item-action>
          </mu-list-item>
          <!-- invitees -->
          <mu-list-item button :ripple="true" @click="openScrollDialog">
            <mu-list-item-action>
              <mu-icon value="groups"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>My invitees</mu-list-item-title>
            <mu-list-item-action>
              <mu-badge content="122" color="primary">25</mu-badge>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>

        <!--<mu-flex class="flex-wrapper-1" align-items="center" v-if="active === 1">-->
            <!--<mu-flex class="flex-demo" justify-content="center" fill>-->
              <mu-list class="badge-list-wrap" v-if="active === 1">
                <!-- Transactions -->
                <mu-list-item button :ripple="true">
                  <mu-list-item-action>
                    <mu-icon value="import_export"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>Transctions</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-badge content="122" color="primary">125</mu-badge>
                  </mu-list-item-action>
                </mu-list-item>
                <!--
                <mu-list-item button :ripple="true">
                  <mu-list-item-content>
                    <mu-list-item-title>Menu Item 1</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-badge content="55"></mu-badge>
                  </mu-list-item-action>
                </mu-list-item>
                -->
              </mu-list>
                <!--<mu-paper class="demo-paper" :z-depth="0">padding2</mu-paper>-->
            <!--</mu-flex>-->
        <!--</mu-flex>-->

        <mu-flex class="flex-wrapper-1" align-items="center" v-if="active === 2">
            <mu-flex class="flex-demo" justify-content="center" fill>
              <mu-list>
                  <!-- Invite -->
                  <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                      <mu-icon value="groups"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Invite code</mu-list-item-title>
                    <mu-list-item-action>
                      <mu-icon value="keyboard_arrow_right"></mu-icon>
                    </mu-list-item-action>
                  </mu-list-item>
                  <!-- Language -->
                  <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                      <mu-icon value="language"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Language</mu-list-item-title>
                    <mu-list-item-action>
                      <mu-icon value="keyboard_arrow_right"></mu-icon>
                    </mu-list-item-action>
                  </mu-list-item>
                  <!-- Help -->
                  <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                      <mu-icon value="headset_mic"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Help</mu-list-item-title>
                    <mu-list-item-action>
                      <mu-icon value="keyboard_arrow_right"></mu-icon>
                    </mu-list-item-action>
                  </mu-list-item>
                  <!-- About us-->
                  <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                      <mu-icon value="info"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>About us</mu-list-item-title>
                    <mu-list-item-action>
                      <mu-icon value="keyboard_arrow_right"></mu-icon>
                    </mu-list-item-action>
                  </mu-list-item>
              </mu-list>
            </mu-flex>
        </mu-flex>

        <mu-flex class="flex-wrapper-1" align-items="center" v-if="active === 3">
            <mu-flex class="flex-demo" justify-content="center" fill>
                <mu-paper class="demo-paper" :z-depth="0">padding4</mu-paper>
            </mu-flex>
        </mu-flex>

        <mu-flex class="flex-wrapper-4" align-items="center" v-if="active === 4">
            <mu-flex class="flex-demo" justify-content="center" fill>
                <mu-paper class="demo-paper" :z-depth="0">padding5</mu-paper>
            </mu-flex>
        </mu-flex>

      <mu-dialog title="Invitee List" width=360 scrollable :open.sync="openScroll">
        <mu-list>
          <!--
          <mu-list-item :key="option" v-for="option in options">
            <mu-list-item-content>
              <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
            </mu-list-item-content>
          </mu-list-item>
          -->
          <mu-list-item>
            <mu-list-item-title>helpworldsbp</mu-list-item-title>
          </mu-list-item>
          <mu-list-item>
            <mu-list-item-title>helpworldsbq</mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>
      </mu-dialog>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 0,
      openScroll: false,
    };
  },
  methods: {
    openScrollDialog () {
      this.openScroll = true;
    },
    closeScrollDialog () {
      this.openScroll = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge-list-wrap {
  width: 100%;
  /*max-width: 360px;*/
  /*background-color: #000;*/
  /*margin: 0 auto;*/
}
.flex-wrapper {
  width: 100%;
  height: 200px;
  /*margin-top: 15px;*/
}
.flex-wrapper-0 {
  width: 100%;
  margin-top: 20px;
  /*background-color:yellow;*/
  background-color:rgba(32,32,32,0.1);
  color:white;
}
.flex-wrapper-1 {
  width: 100%;
  /*height: 400px;*/
  /*margin-top: 20px;*/
}
.flex-wrapper-2 {
  width: 100%;
  height: 50px;
  margin-top: 0px;
}
.flex-wrapper-3 {
  width: 100%;
  height: 200px;
  margin-top: 5px;
  /*padding-bottom: 20px;*/
}
.flex-wrapper-4 {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  /*padding-bottom: 20px;*/
}
.flex-demo {
  width: 100%;
  height: 100%;
  /*background-color: blue;*/
  text-align: center;
  line-height: 32px;
  margin-left: 8px;
}
.flex-wrapper:first-child {
  margin-top: 0;
}
.flex-demo:first-child {
  margin-left: 0;
}
.demo-paper{
  width: 100%;
  height: 90%;
  /*margin-top: 10px;*/
  /*margin-left: 10px;*/
  /*margin-right: 10px;*/
  /*border-radius: 5px;*/
  /*background-color: blue;*/
  /*background-color: #1D2030;*/
}
.demo-paper-2{
  width: 100%;
  height: 90%;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius:15px;
  background-color: green;
}
</style>
