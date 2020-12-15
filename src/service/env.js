let host = ''; // 域名地址
let imgBaseUrl = ''; // 图片所在域名地址
let imgUpload = ''; // 七牛云地址
let viewWord = 'https://view.officeapps.live.com/op/view.aspx?src='

// 开发环境
if (process.env.NODE_ENV == 'development') {
  host = 'http://virus25.gzwmdy.cn'
  imgBaseUrl = 'http://qiniu.gzyanlian.com/';
  imgUpload = 'http://up-z2.qiniu.com';
  // 线上环境
} else if (process.env.NODE_ENV == 'production') {
  host = 'http://virus25.gzwmdy.cn'
  imgBaseUrl = 'http://qiniu.gzyanlian.com/';
  imgUpload = 'http://up-z2.qiniu.com';
}

export {
  host,
  imgBaseUrl,
  imgUpload,
  viewWord
}
