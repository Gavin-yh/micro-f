import Nprogress from "nprogress";
import "nprogress/nprogress.css";

import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start
} from "qiankun";

import apps from "./app";

registerMicroApps(apps, {
  beforeLoad(app) {
    Nprogress.start();
    /* eslint-disable no-console */
    console.log("before load", app.name);
    return Promise.resolve();
  },

  afterMount(app) {
    Nprogress.done();
    /* eslint-disable no-console */
    console.log("after mount", app.name);
    return Promise.resolve();
  }
});

addGlobalUncaughtErrorHandler((event) => {
  /* eslint-disable no-console */
  console.log(event);

  const { message: msg } = event;

  /* eslint-disable no-console */
  console.log(msg, "错误信息");
  // if (msg && msg.includs('died in status LOADING_SOURCE_CODE')) {
  //   throw new Error("微应用加载失败，请检查应用是否可运行")
  // }
});

export default start;
