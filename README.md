# todolist
列表学习

# 虚拟dom
1、state 数据
2、jsx模板
3、数据+模板 生成真实dom，来显示
4、state 发生改变
5、数据+模板 生成真实dom，替换原始dom

缺陷：
第一次生成完整的dom
第二次生成完整的dom
第二次dom替换第一次dom，非常耗费性能

修改（1）：
5、数据+模板 生成真实dom，并不替换原始dom
6、新的dom (documentFragment) 和原始dom做对比，找差异
7、只对差异部分进行替换

缺陷：
比对dom找差异任然耗费性能

修改（2）
2、jsx模板
0、生成虚拟dom（一个js对象，用来描述真实dom）
['div',{id:'abc'},'helloWorld']
[标签，属性，内容]
3、数据+模板 生成真实dom，来显示
4、state 发生改变
5、生成新的虚拟dom
6、比较原始虚拟dom和新的虚拟dom的区别，找到差异 diff
7、根据差异直接操作dom

虚拟dom好处
性能提升，
使得跨端应用得已实现

# render重新渲染机制

1、当组件的state或则props发生变化的时候，render就会重新执行
2、当父组件的render被重新执行，子组件的render也会被重新执行

# 虚拟dom中的diff算法
setState 异步 可以将多次setState合并为一次
同级比较 逐次从最外层到内层，外层不同则删除子层
key值不能为index，可以用本身做key

# react 生命周期
指某一时刻组件会自动调用执行的函数

constructor (初始化，构造函数)

mounting  (挂载)
[
    componentWillMount (组件挂载前，只执行一次)，
    render （组件渲染中或挂载中），
    componentDidMount(组件挂载完成，只执行一次)
]

updation (更新)
[
    props
    [
        componentWillReceiveProps(接收到父组件传过来参数，父组件render更新时执行，而不是子组件挂载时),
        shouldComponentUpdate (组件被更新之前，返回boolean),
        componentWillUpdate ()，
        render ()，
        componentDidUpdate(组件更新完成之后)，
    ]

    states
    [
        shouldComponentUpdate (组件被更新之前，返回boolean),
        componentWillUpdate ()，
        render ()，
        componentDidUpdate(组件更新完成之后)，
    ]
]

unmounting (卸载)
[
    componentWillUnmount (组件即将卸载时)
]