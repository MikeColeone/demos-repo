import TodoList from '../examples/todoList';
import Countdown from '../examples/countdown';
import React from 'react';
import CanvasTable from '../examples/canvasTable/index'
import Counter from '../examples/count';
import BigDataCharts from '../examples/BigDataCharts'
import Selector from '../examples/selector'
const routes = [
  {
    path: '/todoList',
    name: '待办',
    element: <TodoList />,
  },
   {
    path: '/countdown',
    name: '倒计时',
    element: <Countdown initialSeconds={10} />,
  },
  {
    path:'/tableCanvas',
    name:'表格优化',
    element:<CanvasTable/>
  },
  {
    path:'/count',
    name:'计数器',
    element:<Counter/>
  },
  {
    path:'/echarts',
    name:'echarts',
    element:<BigDataCharts/>
  },
  {
    path:'/selector',
    name:'selector',
    element:<Selector/>
  }
];


export default routes;
