# koa-framework 自定义koa框架

### 简介
    自定义封装简版koa框架，主要用来处理简单业务，采用MVC模式

### 使用方法
    本框架已经封装了路由控件，只需要按照格式填写service和contorllers层的文件，即可自动生成路由。
    格式说明：
        1、在controllers文件夹中可以处理逻辑，已经写了一个user.js示例，可以在里面添加Function，重要的是要module.exports导出的格式不能变，type类型可选GET、POST、PUT、DELETE;path是你想要的请求路径；方法即为你自己编写的Function。
        2、在service中进行与数据库交互，本框架数据采用MongoDB，与数据库交互采用中间件monk,已经都封装好，使用方法见https://automattic.github.io/monk/。
        3、使用了koa-body中间件，传递json数据请使用ctx.body={};
        4、middleware为抽离的中间件文件夹，用于存放中间件，减少server.js的臃肿。
        5、router.js为封装的路由文件，可以自动读取controllers文件夹下的所有文件，并且读取每个文件的导出数组，分别添加路由，如果认为controllers文件夹不符合你的审美，也可以更改其名字，然后在server.js中router(koa,"符合审美的名字")即可....
        6、未完待续......
