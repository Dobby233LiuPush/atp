jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '122',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 81
  },

  // 节点配置
  node_map: {
    'demo-hk': {
      label: 'etherdream演示服务 香港节点',
      lines: {
        // 主机:权重
        'node-aliyun-hk-0.etherdream.com:8443': 1,
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 1,
      }
    },
    'demo-sg': {
      label: 'etherdream演示服务 新加坡节点',
      lines: {
        'node-aliyun-sg.etherdream.com:8443': 1,
      },
    },
'HongKong':{label:'52proxy香港节点',hidden:true,lines:{'5.180.97.160.nip.io:8443':1,}},'mycfworker':{label:'52proxyCloudflare节点-备用',lines:{'shiny-block-3d50.52proxy.workers.dev':1,}},
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: 'CFWorker',
      lines: {
        'node-cfworker-2.etherdream.com': 1,
        // free
        'jsp.d2l.workers.dev': 1,
        'odd-paper-3fc0.52proxy.workers.dev':1
      },
    '52proxy':{label:'52proxy',lines:{"js.52proxy.fun":1}}
    }
  },

  /**
   * 默认节点
   */
  // node_default: 'mysite',
  node_default: /github\.io$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  //assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {}
})
