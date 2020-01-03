/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */

import Loading from '../packages/loading'
import Alert from '../packages/message/alert'
import Confirm from '../packages/message/confirm'
import Toast from '../packages/message/toast'
import Button from '../packages/button'
import Cell from '../packages/cell'
import Checkbox from '../packages/checkbox'
import Collapse from '../packages/collapse'
import Datetime from '../packages/datetime'
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

// TODO 属性与事件传递 v-bind="$props" v-on="$listeners"
const components = [
  Button,
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
];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading);
  Vue.use(Alert);
  Vue.use(Confirm);
  Vue.use(Toast);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  Button,
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
};
