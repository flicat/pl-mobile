/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */

import Loading from '../packages/PlLoading'
import Alert from '../packages/PlAlert'
import Confirm from '../packages/PlConfirm'
import Toast from '../packages/PlToast'
import Button from '../packages/PlButton'
import Canvas from '../packages/PlCanvas'
import Cell from '../packages/PlCell'
import Checkbox from '../packages/PlCheckbox'
import Collapse from '../packages/PlCollapse'
import Datetime from '../packages/PlDatetime'
import Fetch from '../packages/PlFetch'
import Form from '../packages/PlForm'
import GoTopButton from '../packages/PlGoTopButton'
import Icon from '../packages/PlIcon'
import Input from '../packages/PlInput'
import List from '../packages/PlList'
import Picker from '../packages/PlPicker'
import Popup from '../packages/PlPopup'
import Progress from '../packages/PlProgress'
import Radio from '../packages/PlRadio'
import Range from '../packages/PlRange'
import Select from '../packages/PlSelect'
import StepItem from '../packages/PlStepItem'
import Steps from '../packages/PlSteps'
import SwipeItem from '../packages/PlSwipeItem'
import Swipe from '../packages/PlSwipe'
import TabItem from '../packages/PlTabItem'
import Tabs from '../packages/PlTabs'
import Upload from '../packages/PlUpload'
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
