// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import 'typeface-roboto'
import 'material-design-icons/iconfont/material-icons.css'
// import theme from 'muse-ui/lib/theme'
import 'muse-ui/lib/styles/base.less'
import {
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,// BottomNav,
  BottomSheet,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  LoadMore,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Stepper,
  SubHeader,
  Switch,
  Tabs,
  TextField,
  Tooltip,
  theme
} from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import App from './App'
import router from './router'
// import Helpers from 'muse-ui/lib/Helpers'
import dataV from '@jiaminghi/data-view'
// import * as echarts from 'echarts/core';
// import { BarChart } from 'echarts/charts'
import 'echarts'
import Echarts from 'vue-echarts'
// import 'echarts/lib/chart/line'
console.log(Echarts)
Vue.component('v-chart',Echarts)
Vue.use(dataV)
// echarts.use(BarChart)

// Vue.use(Helpers);
Vue.use(Alert)
Vue.use(AppBar)
Vue.use(Avatar)
Vue.use(BottomNav)
Vue.use(BottomSheet)
Vue.use(Breadcrumbs)
Vue.use(Button)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Chip)
Vue.use(DateInput)
Vue.use(DataTable)
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(ExpansionPanel)
Vue.use(Form)
Vue.use(Grid)
Vue.use(GridList)
Vue.use(Helpers)
Vue.use(Icon)
Vue.use(List)
Vue.use(LoadMore)
Vue.use(Menu)
Vue.use(Pagination)
Vue.use(Paper)
Vue.use(Picker)
Vue.use(Popover)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Select)
Vue.use(SlidePicker)
Vue.use(Slider)
Vue.use(Snackbar)
Vue.use(Stepper)
Vue.use(SubHeader)
Vue.use(Switch)
Vue.use(Tabs)
Vue.use(TextField)
Vue.use(Tooltip)

console.log('-----------++++=====1')

/*
theme.add('purple',{
  primary: '#9c27b0',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#757575',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)'
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: '#242424',
    chip: '#616161',
    default: '#303030'
  }
},'dark')
*/

theme.add('purple',{
  primary: '#9c27b0',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#757575',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)'
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    /*paper: '#242424',*/
    paper: '#121212',
    chip: '#616161',
    default: '#121212'
    /*default: '#121212'*/
  }
},'dark')

theme.use('purple')
// theme.use('light')
console.log('-----------++++=====5')
// Vue.use(MuseUI)

console.log('-----------++++=====6')
let mv = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
console.log('-----------++++=====7')
Vue.use({
  mv
})
console.log('-----------++++=====8')
// var myChart = echarts.init(document.getElementById('app'))
