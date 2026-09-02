// EPLAN 2025 学习站 · 浏览/观看记录（localStorage，纯前端，无后端）
(function () {
  var K_VIEW = 'eplan_view_hist';      // 观看记录：视频
  var K_BROWSE = 'eplan_browse_hist';  // 浏览记录：页面
  var MAX_VIEW = 100;
  var MAX_BROWSE = 60;

  function load(k) {
    try { return JSON.parse(localStorage.getItem(k)) || []; }
    catch (e) { return []; }
  }
  function save(k, a) {
    var max = k === K_VIEW ? MAX_VIEW : MAX_BROWSE;
    try { localStorage.setItem(k, JSON.stringify(a.slice(0, max))); }
    catch (e) {}
  }

  function fmt(ts) {
    var d = Date.now() - ts;
    if (d < 60000) return '刚刚';
    if (d < 3600000) return Math.floor(d / 60000) + ' 分钟前';
    if (d < 86400000) return Math.floor(d / 3600000) + ' 小时前';
    if (d < 604800000) return Math.floor(d / 86400000) + ' 天前';
    var x = new Date(ts);
    return (x.getMonth() + 1) + '/' + x.getDate() + ' ' + x.getHours() + ':' + String(x.getMinutes()).padStart(2, '0');
  }

  window.EplanHistory = {
    // 记录视频观看（去重置顶）
    recordVideo: function (o) {
      if (!o || !o.title) return;
      var a = load(K_VIEW).filter(function (x) { return x.url !== o.url; });
      a.unshift({
        title: o.title,
        source: o.source || '',
        url: o.url || '',
        section: o.section || '',
        ts: Date.now()
      });
      save(K_VIEW, a);
    },
    // 记录页面浏览
    recordBrowse: function (title, url) {
      if (!title) return;
      var u = url || (location.pathname + location.hash);
      var a = load(K_BROWSE).filter(function (x) { return x.url !== u; });
      a.unshift({ title: title, url: u, ts: Date.now() });
      save(K_BROWSE, a);
    },
    // 自动记录当前页面（每个页面引入后调用）
    autoBrowse: function () {
      var t = (document.title.replace(/\s*[·\-—]\s*.*/, '').trim()) || '页面';
      this.recordBrowse(t, location.pathname + location.hash);
    },
    getView: function () { return load(K_VIEW); },
    getBrowse: function () { return load(K_BROWSE); },
    clearView: function () { localStorage.removeItem(K_VIEW); },
    clearBrowse: function () { localStorage.removeItem(K_BROWSE); },
    clearAll: function () { localStorage.removeItem(K_VIEW); localStorage.removeItem(K_BROWSE); },
    fmt: fmt
  };
})();
