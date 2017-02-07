
# vueJs与Webpack的配合使用
### 为何使用vue.js？
- 在以Jquery为主的Web前端开发时代，各种网页交互效果都是通过操作Dom来实现的，但随着Web浏览器的不断发展网页的复杂度也不断在提升，导致了原来以Dom操作为主的开发方式在后期项目维护变得愈加艰难。因此为了应对不断上升的业务复杂度和减少后期维护成本，各种以数据驱动和组件化思想的前端框架开始展露头角，这其中尤以Angular，React，Vue应用最为广泛。Vue作为当下很火的一个JavaScript MVVM库，同样采用了以数据驱动和组件化的思想，借鉴和吸收了另外两个框架的一些特点，但又相较于于Angular.js，React.js在保证强大功能的同时提供了更加简洁、更易于理解的API，降低了学习成本，使得我们能够快速地上手并使用Vue.js。

### 什么是vue-cli？
- vue-cli是vueJs官方提供的一个脚手架工具，与模块化打包工具Webpack相结合，可以快速构建一个完善的Vue.js起始项目结构
- vue-cli#2.0版本构建的完整项目结构
```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                   // vue公共组件
|   |-- store                        // vuex的状态管理
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                         // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
```
### 为何要使用Webpack？
- 在之前的项目开发中当我们需要使用一个外部的JS框架或库的时候，通常是将需要的JS文件下载下来，然后放入项目文件夹 中，在html中通过script标签引入进来或者是加上CDN的地址即可。但是，这并不是一个好的项目开发形式，不利于项目的维护与更新。在一个完整的vue实际应用中，必须要一系列的工具，包括：模块化，转译，预处理，热加载，静态检测和自动化测试等。对于一个需要长期维护和大型的项目而言，这些工具是很重要的，虽然刚开始刚开始配置初始化这些很痛苦.这就是我们发布vue-cli的原因，一个简单的构建工具，通过几个默认的步骤帮助你快速的构建Vue.js项目。
