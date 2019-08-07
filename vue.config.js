const menuList = [
    {pid: -1, path: '/cart', name: '购物车', id: 1, auth: 'cart'},
    {pid: 1, path: '/cart/cart-list', name: '购物车列表', id: 4, auth: 'cart-list'},
    {pid: 4, path: '/cart/cart-list/lottery', name: '彩票', id: 5, auth: 'lottery'},
    {pid: 4, path: '/cart/cart-list/product', name: '商品', id: 6, auth: 'product'},
    {pid: -1, path: '/shop', name: '商店', id: 2, auth: 'shop'},
    {pid: -1, path: '/profile', name: '个人中心', id: 3, auth: 'profile'},
]
module.exports = {
    devServer: {
        open: true, //浏览器自动打开页面
        //     proxy: {
        //         '/api': {
        //         target: 'http://localhost:5000',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //     }
        //   }
        before(app) {
            app.get('/api/menuList', function (req, res) {
                res.json({
                    menuList
                });
            });
        }
    }
}