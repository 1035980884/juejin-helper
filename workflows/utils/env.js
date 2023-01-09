const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  COOKIE: "_ga=GA1.2.1002346384.1659400989; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%7B%22web_id%22%3A%227127072932489479714%22%2C%22user_unique_id%22%3A%227127072932489479714%22%2C%22timestamp%22%3A1659400989875%7D; sid_guard=4eec66264f7b70b642b4d4702fbede98|1659401003|31536000|Wed,+02-Aug-2023+00:43:23+GMT; uid_tt=829ab5eace132fbedc4827bd120757e0; uid_tt_ss=829ab5eace132fbedc4827bd120757e0; sid_tt=4eec66264f7b70b642b4d4702fbede98; sessionid=4eec66264f7b70b642b4d4702fbede98; sessionid_ss=4eec66264f7b70b642b4d4702fbede98; sid_ucp_v1=1.0.0-KDg5MzAwMDg3ZGQzY2ZkMmI4MjU3ZTA5N2EyMjhhN2NiOGRhYTgxOWMKFgi48ZDX542KARCr5qGXBhiwFDgIQAsaAmxmIiA0ZWVjNjYyNjRmN2I3MGI2NDJiNGQ0NzAyZmJlZGU5OA; ssid_ucp_v1=1.0.0-KDg5MzAwMDg3ZGQzY2ZkMmI4MjU3ZTA5N2EyMjhhN2NiOGRhYTgxOWMKFgi48ZDX542KARCr5qGXBhiwFDgIQAsaAmxmIiA0ZWVjNjYyNjRmN2I3MGI2NDJiNGQ0NzAyZmJlZGU5OA; MONITOR_WEB_ID=b8f8895f-b9c8-4e75-81de-04fdac274005; msToken=pot4FGLf5Sl6-H-Ewzydc30Qo90TlQOiQT8VpgpSVUIDTheGDxD-Lnp1U7Gs5Pjws5_vjLD8VNj1xl-XM1EgvYpTXajGgzFXIMyjJ7cQTHE=",
,
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  COOKIE_2: env.COOKIE_2,
  COOKIE_3: env.COOKIE_3,
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  /**
   * 邮箱配置
   * user 发件人邮箱, pass, 发件人密码, to收件人
   */
  EMAIL_USER: "1035980884@qq.com",
  EMAIL_PASS: "qwdigqklvfehbdfg",
  EMAIL_TO: "1035980884@qq.com",
  /**
   * 钉钉配置
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
  /**
   * PushPlus配置
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
 PUSHPLUS_TOKEN: "8274532d495e4df1b749cfbdf3fc0e9f",
  /**
   * 企业微信机器人配置
   * https://developer.work.weixin.qq.com/document/path/91770
   */
  WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK
};
