/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */

import Loading from '../packages/loading'
import Alert from '../packages/alert'
import Confirm from '../packages/confirm'
import Toast from '../packages/toast'
import Button from '../packages/button'
import Canvas from '../packages/canvas'
import Cell from '../packages/cell'
import Checkbox from '../packages/checkbox'
import Collapse from '../packages/collapse'
import Datetime from '../packages/datetime'
import Fetch from '../packages/fetch'
import Form from '../packages/form'
import GoTopButton from '../packages/goTopButton'
import Icon from '../packages/icon'
import Input from '../packages/input'
import List from '../packages/list'
import Picker from '../packages/picker'
import Popup from '../packages/popup'
import Progress from '../packages/progress'
import Radio from '../packages/radio'
import Range from '../packages/range'
import Select from '../packages/select'
import StepItem from '../packages/stepItem'
import Steps from '../packages/steps'
import SwipeItem from '../packages/swipeItem'
import Swipe from '../packages/swipe'
import TabItem from '../packages/tabItem'
import Tabs from '../packages/tabs'
import Upload from '../packages/upload'
import './assets/less/variables.less'

function install (Vue) {
  [
    Button,
    Canvas,
    Cell,
    Checkbox,
    Collapse,
    Datetime,
    Form,
    GoTopButton,
    Icon,
    Input,
    List,
    Picker,
    Popup,
    Progress,
    Radio,
    Range,
    Select,
    StepItem,
    Steps,
    SwipeItem,
    Swipe,
    TabItem,
    Tabs,
    Upload
  ].forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading);
  Vue.use(Fetch);
  Vue.use(Alert);
  Vue.use(Confirm);
  Vue.use(Toast);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// TODO 添加开关 Switch
// TODO 添加步进器 Stepper
// TODO 添加层叠选择器 StackPicker
export default {
  version: '1.0.0',
  install,
  Button,
  Canvas,
  Cell,
  Checkbox,
  Collapse,
  Datetime,
  Fetch,
  Form,
  GoTopButton,
  Icon,
  Input,
  List,
  Picker,
  Popup,
  Progress,
  Radio,
  Range,
  Select,
  StepItem,
  Steps,
  SwipeItem,
  Swipe,
  TabItem,
  Tabs,
  Upload,
  Loading,
  Alert,
  Confirm,
  Toast
};
