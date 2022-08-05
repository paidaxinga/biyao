// pages/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        arr:[
            {
                name:"手机转账",
                date:"11-16 19:30:22",
                money:"-6,000"
            },{
                name:"工资",
                date:"11-16 19:30:22",
                money:"+12,000"
            },{
                name:"连连通电子支付有限公司",
                date:"11-16 19:30:22",
                money:"-1,000"
            },{
                name:"淘宝",
                date:"11-01 19:30:22",
                money:"- 1,000"
            }
        ],
        arr1:[
            {
                name:"手机转账",
                date:"11-16 19:30:22",
                money:"-6,000"
            },{
                name:"工资",
                date:"11-16 19:30:22",
                money:"+12,000"
            },{
                name:"连连通电子支付有限公司",
                date:"11-16 19:30:22",
                money:"-1,000"
            }
        ],
         arr2:[
            {
                name:"手机转账",
                date:"11-16 19:30:22",
                money:"-6,000"
            },{
                name:"工资",
                date:"11-16 19:30:22",
                money:"+ 11,200"
            },{
                name:"奖金",
                date:"11-16 19:30:22",
                money:"+ 1,000"
            }
            
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log( parseInt(this.data.arr[0].money));
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})