const express = require('express')
const app = express()
// 自定义跨域中间件
var allowCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCors);//使用跨域中间件
app.get('/app', (req, res) => res.json({
    code: 0,
    parent: [
        { name: '文件夹1', pid: 0, id: 1 },
        { name: '文件夹2', pid: 0, id: 2 },
        { name: '文件夹3', pid: 0, id: 3 },
        { name: '文件夹1-1', pid: 1, id: 4 },
        { name: '文件夹2-1', pid: 2, id: 5 },
    ],
    child: [
        { name: '文件1', pid: 1, id: 10001 },
        { name: '文件2', pid: 1, id: 10002 },
        { name: '文件夹2-1', pid: 2, id: 10003 },
        { name: '文件夹2-2', pid: 2, id: 10004 },
        { name: '文件夹1-1-1', pid: 4, id: 10005 },
        { name: '文件夹2-1-1', pid: 5, id: 10006 },
        { name: '文件3-1', pid: 3, id: 10007},
    ]
}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))