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
3、数据+模板 生成真实dom，来显示
4、state 发生改变
5、生成新的虚拟dom
6、比较原始虚拟dom和新的虚拟dom的区别，找到差异
7、根据差异直接操作dom

# render重新渲染机制

1、当组件的state或则props发生变化的时候，render就会重新执行
2、当父组件的render被重新执行，子组件的render也会被重新执行

