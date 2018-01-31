const prefix = 'fa fa-';
let iconMapper = {
  // 通用按钮
  backBtn: '038',
  closeBtn: '071',
  minBtn: '072',
  maxBtn: '073',
  reductionBtn: '074',
  menuOn: '045',
  menuOff: '045',
  star: '012',
  starLight: '011',
  file: '023',
  date: '023',
  home: '081',
  check: '101',
  logout: '070',
  lock: '038',
  mail: '114',
  mailbox: '015',
  tour: '045',
  phone: '106',
  lock: '075',
  security: '033',
  pin: '066',
  money: '003',
  download: '004',
  face: '035',
  flight: '020',
  setting: '021',
  eyeOn: '028',
  eyeOff: '027',
  soundOn: '037',
  soundOff: '036',
  fire: '039',
  newAdd: '040',
  day: '088',
  night: '089',
  plus: '041',
  allLot: '048',
  more: '107',
  award: '083',
  hangup: '083',

  // 安全中心
  warn: '010',
  error: '112',
  circleCheck: '046',
  loginPwd: '013',
  secQuestion: '016',
  write: '112',
  fundPwd: '014',
  greeting: '027',
  // 客服系统
  online: '024',
  uper: '023',
  // 个人中心图标
  AGGame: '083',
  game: '001',
  account: '002',
  helpers: '007',
  activity: '006',
  recharge: '003',
  gifts: '006',
  systemMsg: '005',
  report: '004',
  userManager: '004',
  createUser: '108',
  daili: '019',
  wanjia: '020',
  customer: '009',
  gateSelector: '008',

  android: '029',
  iOS: '030',
  windows: '031',
  iMac: '032',
  spec: '103',
  normal: '090',

  // AG 游戏
  pokerGames: '122',
  slotGames: '124',
  tableGames: '120',
  allGames: '119',
  agIcon: '118'
}

Object.keys(iconMapper).forEach(iconName => {
  let currIcon = iconMapper[iconName];
  iconMapper[iconName] = prefix + currIcon;
});
export default iconMapper;
