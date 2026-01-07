import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "path";
const AiTagInjectorPlugin = require("./src/plugin/domMaker")

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  tools: {
    rspack: {
      plugins: [new AiTagInjectorPlugin({
      libs: ["antd", "element-ui"], // 可选：自定义需排除打标签的库
    })],
      module: {
        rules: [
        //配置swc:loader
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                },
              },
            },
            type: "javascript/auto",
          },
          // {
          //   test: /\.(jsx|tsx)$/,
          //   use: [
          //     {
          //       loader: path.resolve(__dirname, "./jsx-loader.cjs"),
          //       options: {
          //         root: path.resolve(__dirname, "src"),
          //         //root: "llllll ",
          //       },
          //     },
          //   ],
          //   enforce: "pre",
          // },
        ],
      },
    },
  },
});
