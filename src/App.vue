<template>
    <!--<div id="app" style="width: 100%; padding: 0px;">-->
        <mu-container class="maincontainer">
            <mu-appbar>
                <mu-button icon slot="left">
                    <mu-icon value="home"></mu-icon>
                </mu-button>
                Fisher System
                <mu-button flat slot="right">Login</mu-button>
            </mu-appbar>

            <div style="border:0px solid red"><router-view /></div>
<!--
            <div class="clearfix"></div>
-->
            <!--<mu-container class="navcontainer">-->
                <!--<mu-bottom-nav color="#fdd835" :value="bottomNav" @change="handleChange">-->
                <!--<mu-bottom-nav color="#fdd835">-->
                <mu-bottom-nav class="navcontainer">
                    <mu-bottom-nav-item value="main"      title="Main"        icon="home"                   to='/'/>
                    <mu-bottom-nav-item value="people"    title="Pledge"    icon="people"                   to='/mortgage'/>
                    <mu-bottom-nav-item value="books"     title="Collateral"  icon="account_balance_wallet" to='/assets'/>
                    <mu-bottom-nav-item value="pictures"  title="Me"          icon="person"                 to='/me'/>
                </mu-bottom-nav>
            <!--</mu-container>-->
        </mu-container>
    <!--</div>-->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #acb0cc;*/
  /*color: #acb0cc;*/
  /*margin: auto;*/
  /*margin-bottom: 0;*/
  /*background-color:black;*/
  /*background-color:#161921;*/
  /*background-color:#121212;*/
  background-color:#090909;
}

.maincontainer{
  padding:0px;
}

.navcontainer{
  bottom:0px;
  position:fixed;
  padding:0px;
}

.mu-bottom-nav{
  width:100%;
  left:0px;
}

.clearfix{
    overflow:hidden;
    clear:both;
}

</style>
