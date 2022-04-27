<template>
    <!--<mu-container style="width: 100%; padding: 8px;">-->
    <div style="width: 100%;">
        <mu-flex align-items="left">
            <mu-sub-header>My Assets</mu-sub-header>
        </mu-flex>

        <mu-paper :z-depth="1" style="width:100%;padding-left:20px;padding-right:20px;background-color:rgba(156,39,176,0.05);">
            <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="150">
                <mu-form-item prop="select" label="Asset type">
                    <mu-select v-model="form.select">
                        <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                </mu-form-item>
                <mu-form-item prop="input" label="Quantity">
                    <mu-text-field v-model="form.input2" color="red" underline-color="yellow"></mu-text-field>
                </mu-form-item>
                <mu-flex align-items="center" style="padding: 8px;" wrap="wrap">
                    <span style="margin-right:20px;"><mu-button color="primary">Add</mu-button></span>
                    <span><mu-button color="secondary">Clear</mu-button></span>
                </mu-flex>
            </mu-form>
        </mu-paper>

        <mu-flex align-items="center" style="padding: 20px;" wrap="wrap">
            <mu-divider style="margin-top:6px;margin-buttom:6px;"></mu-divider>
        </mu-flex>

        <mu-flex align-items="left" justify-content="start">
            <mu-sub-header>Assets List</mu-sub-header>
        </mu-flex>

        <mu-paper :z-depth="1" style="width:100%;padding-left:20px;padding-right:20px;background-color:rgba(156,39,176,0.05);">
            <mu-data-table selectable select-all :selects.sync="selects" checkbox :loading="true" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
                <template slot-scope="scope">
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.calories}}</td>
                    <td class="is-right">{{scope.row.fat}}</td>
                    <td class="is-right">{{scope.row.carbs}}</td>
                    <td class="is-right">{{scope.row.protein}}</td>
                    <td class="is-right">{{scope.row.iron}}%</td>
                </template>
            </mu-data-table>
        </mu-paper>

        <mu-flex align-items="center" style="padding: 8px;" wrap="wrap">
            <mu-button color="secondary">Retrieve</mu-button>
        </mu-flex>

    <!--</mu-container>-->
    </div>
</template>

<script>
export default {
  name: 'Assets',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
          { title: 'Asset type',        name: 'name',     width: 100},
          { title: 'Total Quantity',    name: 'calories', width: 120, align: 'center', sortable: true },
          { title: 'Avalible',          name: 'fat',      width: 120, align: 'center', sortable: true }/*,
          { title: 'Peer Quantity',     name: 'carbs',    width: 126, align: 'center', sortable: true },
          { title: 'State',             name: 'protein',  width: 126, align: 'center', sortable: true },
          { title: 'Operate',           name: 'iron',     width: 126, align: 'center', sortable: true }*/
      ],
      list: [
        {
            name: 'USN',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'EOS',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'USDT',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          }
        ]
    }
  }
}
</script>

<style lang="less" scoped>
.demo-container {
  .row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-cell {
    border-radius: 4px;
    height: 36px;
    background: rgba(255, 255, 255, 0.8);
  }
}
.demo-container.is-stripe .col:nth-child(2n) .grid-cell{
  background: rgba(0, 0, 0, 0.54);
}
.flex-wrapper {
  width: 100%;

  height: 66px;
  margin-top: 8px;
}

.flex-demo {
  width: 200px;
  height: 50px;
  background-color: #e0e0e0;
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
.mu-demo-form {
  width: 100%;
  /*max-width: 460px;*/
  /*background-color:#fff;*/
}

</style>
