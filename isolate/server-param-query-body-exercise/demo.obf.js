const _0x1caf = [
  'body',
  '/param/:value',
  'json',
  'body:\x20',
  'Example\x20app\x20listening\x20at\x20http://localhost:',
  'use',
  'stringify',
  './config',
  '/body',
  'post',
  'MODE',
  'urlencoded',
  'value',
  'params:\x20',
  'body-parser',
  './middleware/logger',
  'PORT',
  '/query',
  'params',
  'listen',
  'query',
  'public',
  'log',
];
(function(_0x4c8a9f, _0x1cafac) {
  const _0x16afe6 = function(_0x5f5022) {
    while (--_0x5f5022) {
      _0x4c8a9f['push'](_0x4c8a9f['shift']());
    }
  };
  _0x16afe6(++_0x1cafac);
})(_0x1caf, 0x1a5);
const _0x16af = function(_0x4c8a9f, _0x1cafac) {
  _0x4c8a9f = _0x4c8a9f - 0x0;
  let _0x16afe6 = _0x1caf[_0x4c8a9f];
  return _0x16afe6;
};
('use strict');
const _0x3dfe6e = require('express');
const _0x530d40 = require(_0x16af('0x7'));
const _0x2f8c5a = require(_0x16af('0x0'));
const _0x5c5e4d = require(_0x16af('0x8'));
const _0x440e64 = _0x3dfe6e();
_0x440e64[_0x16af('0x15')](_0x5c5e4d);
_0x440e64[_0x16af('0x15')](_0x530d40[_0x16af('0x12')]());
_0x440e64['use'](_0x530d40[_0x16af('0x4')]({ extended: ![] }));
_0x440e64[_0x16af('0x15')](_0x3dfe6e['static'](_0x16af('0xe')));
_0x440e64[_0x16af('0x2')](_0x16af('0x11'), (_0x5adf47, _0x2daaa9) => {
  const _0x3a6771 = _0x5adf47['params']['value'];
  console['log'](
    _0x16af('0x6') + JSON[_0x16af('0x16')](_0x5adf47[_0x16af('0xb')])
  );
  const _0x5021e3 = { paramValue: _0x3a6771 };
  _0x2daaa9[_0x16af('0x12')](_0x5021e3);
});
_0x440e64[_0x16af('0x2')](_0x16af('0xa'), (_0xf06c29, _0x258f5f) => {
  const _0x53d72d = _0xf06c29['query']['value'];
  console[_0x16af('0xf')](
    'queries:\x20' + JSON[_0x16af('0x16')](_0xf06c29[_0x16af('0xd')])
  );
  const _0x1c9de7 = { queryValue: _0x53d72d };
  _0x258f5f[_0x16af('0x12')](_0x1c9de7);
});
_0x440e64[_0x16af('0x2')](_0x16af('0x1'), (_0x44711c, _0x238745) => {
  const _0x324838 = _0x44711c['body'][_0x16af('0x5')];
  console['log'](
    _0x16af('0x13') + JSON[_0x16af('0x16')](_0x44711c[_0x16af('0x10')])
  );
  const _0x42bacd = { bodyValue: _0x324838 };
  _0x238745['json'](_0x42bacd);
});
_0x440e64[_0x16af('0xc')](_0x2f8c5a[_0x16af('0x9')], () => {
  console[_0x16af('0xf')](
    _0x16af('0x14') +
      _0x2f8c5a[_0x16af('0x9')] +
      '\x20(' +
      _0x2f8c5a[_0x16af('0x3')] +
      '\x20mode)'
  );
});