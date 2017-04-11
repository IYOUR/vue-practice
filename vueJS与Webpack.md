
# 详解vue-cli#2.x中Webpack与Vue的配合使用

> 在以Jquery为主的Web前端开发时代，各种网页交互效果都是通过操作Dom来实现 的，但随着Web浏览器的不断发展网页的复杂度也不断在提升，导致了原来以Dom操作为主的开发方式在后期项目维护变得愈加艰难。因此为了应对不断上升的业务复杂度和减少后期维护成本，各种以数据驱动和组件化思想的前端框架开始展露头角，这其中尤以Angular，React，Vue应用最为广泛。VueJs是一个新出来但很火的JavaScript MVVM库，同样采用了以数据驱动和组件化的思想，借鉴和吸收了另外两个框架的一些特点，但又相较于Angular.js，React.js在保证强大功能的同时提供了更加简洁、更易于理解的API，降低了学习成本，使得我们能够快速地上手并使用Vue.js。Webpack通过各种Loader来管理和处理各种项目依赖文件，同时也可以来处理通过VueJs开发的vue组件，最后根据文件类型统一打包到指定的输出目录，可直接用以部署到线上环境。

### 什么是vue-cli？
- vue-cli是vueJs官方提供的一个脚手架工具，与模块化打包工具Webpack相结合，可以快速构建一个完善的Vue.js起始项目结构

### gulp与webpack
- Gulp是一个工具，而webpack等等是模块化方案。Gulp 是一种工具，通过配置各种需要的插件，预先定义好一系列的任务，定义好这些任务分别做些什么，然后定义好执行顺序，最后由 gulp 来执行这些任务，以此来优化前端工作流程。自动完成页面刷新、combo、压缩css、js、编译less等之前需要手工完成的工作。webpack 主要以entry文件为入口形成的依赖链，对依赖文件的类型，进行监听，loader任务，打包合并，专业处理打包各种规范模块。gulp也可以来调用 webpack 来打包 js 等文件，然后拷贝一些资源文件到输出目录，比如图片、字体等，也就是gulp负责工作流生命周期里面的样式图片等资源整理合并，webpack负责脚本模块打包合并完成组件化开发。
### 为何使用Webpack?
- 在之前的项目开发中当我们需要使用一个外部的JS框架或库的时候，通常是将需要的JS文件下载下来，然后放入项目文件夹 中，在html中通过script标签引入进来或者是加上CDN的地址即可。但是，这并不是一个好的项目开发形式，不利于项目的维护与更新。在一个完整的vue实际应用中，必须要一系列的工具，包括：模块化，转译，预处理，热加载，静态检测和自动化测试等。对于一个需要长期维护和大型的项目而言，这些工具是很重要的，虽然刚开始刚开始配置初始化这些并不是很容易.但通过vue-cli这个简单的构建工具，用几个默认的步骤就可以快速的构建一个完善的初始化Vue.js项目。在vueJs官方工具vue-cli中使用了Webpack作为模块化打包工具，同时webpack也完全适用于vue.js进行组件化开发。

> 开始上手安装
#### 开始安装前得确保你的电脑上已经装好Node JS环境以及相应的包管理器NPM
```
# 安装vue-cli
npm install -g vue-cli

# 使用vue-cli初始化项目
vue init webpack demo

# 进入到目录
cd demo

# 安装依赖
npm install

# 开始运行
npm run dev
```
- vue-cli#2.x版本构建的完整项目结构如下
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
|   |-- data                         
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico                      // 浏览器标签图标
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
```