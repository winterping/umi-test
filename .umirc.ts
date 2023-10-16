import { defineConfig } from 'umi';
import { IndexRoute } from './router/index';
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

export default defineConfig({
  // layout: {},
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    IndexRoute,
  ],
  fastRefresh: {},
  chainWebpack: function (config, { webpack }) {
    smp.wrap(webpack)
  }
});
