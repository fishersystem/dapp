<template>
    <!--<mu-container style="width: 100%; background-color:#fff;padding: 8px;">-->
    <div style="width: 100%;">
    <!--<mu-container style="width: 100%; padding: 8px;">-->
        <mu-flex align-items="left" style="padding-top: 5px;padding-bottom: 5px;" direction="column">
            <mu-flex align-items="left">
                <mu-sub-header>Mortage Operation</mu-sub-header>
            </mu-flex>

            <mu-flex align-items="left">
                <!--<mu-paper :z-depth="2" style="width:100%;padding-left:20px;padding-right:20px;background-color:#303030;/*background-color:rgba(156,39,176,0.05);*/">-->
                <mu-paper :z-depth="2" style="width:100%;padding-left:20px;padding-right:20px;background-color:#212121;/*background-color:rgba(156,39,176,0.05);*/">
                    <mu-form :model="form" class="operate-form" :label-position="labelPosition" label-width="150">
                        <mu-form-item prop="select" label="My role" style="padding-top:32px;">
                            <mu-select v-model="form.role">
                                <mu-option v-for="option,index in sides" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                        </mu-form-item>
                        <mu-form-item prop="input" label="Transaction id">
                            <mu-text-field v-model="form.id" ></mu-text-field>
                        </mu-form-item>

                        <mu-form-item prop="select" label="Mortgage asset type">
                            <mu-select v-model="form.select">
                                <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                        </mu-form-item>
                        <mu-form-item prop="input" label="Our side quantity">
                            <mu-text-field v-model="form.input0"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item prop="input" label="Peer side account">
                            <mu-text-field v-model="form.input1"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item prop="select" label="Mortgage asset type">
                            <mu-select v-model="form.select">
                                <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                        </mu-form-item>
                        <mu-form-item prop="input" label="Peer side quantity">
                            <mu-text-field v-model="form.input2"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item prop="Date Time" label="Expire time">
                            <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
                        </mu-form-item>
                        <mu-flex align-items="center" wrap="wrap" justify-content="around" align-content="stretch" style="padding-top: 8px;padding-bottom: 16px;">
                            <mu-button color="primary">Lock</mu-button>
                            <mu-button color="secondary">Clear</mu-button>
                        </mu-flex>
                    </mu-form>
                </mu-paper>
            </mu-flex>

            <mu-flex align-items="center" style="padding-top: 5px;padding-bottom: 5px;" wrap="wrap">
                <mu-divider style="margin-top: 8px;margin-bottom: 8px;"></mu-divider>
            </mu-flex>

            <mu-flex align-items="left" justify-content="start">
                <mu-sub-header>Mortage List</mu-sub-header>
            </mu-flex>

            <mu-flex align-items="left">
                <mu-paper class="listshow" :z-depth="2" style="width:100%;">
                    <mu-data-table selectable select-all checkbox :loading="true" :columns="columns" :data="list.slice(0, 6)" class="operate-form-list">
                        <template slot-scope="scope">
                            <td>{{scope.row.name}}</td>
                            <td class="is-right">{{scope.row.type}}</td>
                            <td class="is-right">{{scope.row.quantity1}}</td>
                            <td class="is-right">{{scope.row.quantity2}}</td>
                            <td class="is-right">{{scope.row.protein}}</td>
                            <td class="is-right">{{scope.row.iron}}%</td>
                        </template>
                    </mu-data-table>
                </mu-paper>
            </mu-flex>

            <mu-flex align-items="center" style="padding-top: 32px;padding-bottom: 64px;" wrap="wrap" justify-content="around">
                <mu-button color="primary">Reflesh</mu-button>
                <mu-button color="secondary" style="margin-left:32px;">Unlock</mu-button>
            </mu-flex>
        </mu-flex>
    <!--</mu-container>-->
    </div>
</template>

<script>
export default {
  name: 'Mortgage',
  data () {
    return {
      sides: [
        'Inviter', 'Invitee'
      ],
      options: [
        'EOS', 'USDT', 'USN'
      ],
      normal: {
        value1: '',
        value2: '',
        value3: '',
        value4: 'Option 1',
        value5: 'Option 2'
      },
      labelPosition: 'top',
      form: {
        role:'',
        id:'',
        input0: '',
        input1: '',
        input2: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      },
      columns: [
          { title: 'Peer account',  name: 'name',     width: 170 },
          { title: 'Asset type',    name: 'type',     width: 170, align: 'center', sortable: true },
          { title: 'My quantity',   name: 'quantity1',width: 170, align: 'center', sortable: true },
          { title: 'Peer Quantity', name: 'quantity2',width: 170, align: 'center', sortable: true },
          { title: 'State',         name: 'protein',  width: 170, align: 'center', sortable: true },
          { title: 'Operate',       name: 'iron',     width: 170, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'looklooklook',
            type: 'EOS',
            quantity1: 6.0,
            quantity2: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'appointsideu',
            type: 'USN',
            quantity1: 9.0,
            quantity2: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'invitesideus',
            type: 'USDT',
            quantity1: 16.0,
            quantity2: 23,
            protein: 6.0,
            iron: 7
          }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.operate-form {
  /*width: 100%;*/
  /* max-width: 460px;*/
  /* backgroud-color:#fff;*/
  /* background-color:rgba(156,39,176,0.05);*/
}
.operate-form-list {
  width: 100%;
  /* max-width: 460px;*/
  /* backgroud-color:white;*/
  /* padding-bottom:20px;*/
  /* padding-top:20px;*/
  /* padding-left:20px;*/
  /* padding-right:20px;*/
}
.mu-paper
{
  
}
.listshow
{
  /*background-color:white;*/
  /*padding-top:32px;*/
  /*padding-left:20px;*/
  /*padding-right:20px;*/
  /*padding-bottom:20px;*/
  /*  padding:32px 20px 20px 20px;*/
    padding:1px 2px 2px 1px;
}

/*padding-bottom: 24px; */
</style>

