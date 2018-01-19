import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', ()/* 不能使用 _ */ => {
    // const Constructor = Vue.extend(HelloWorld)
    // const vm = new Constructor().$mount()

    // it('innerHTML初始化测试', () => {
    //     expect(vm.$el.querySelector('.hello h1').textContent)
    //         .toEqual('Welcome to Your Vue.js App')
    // })

    // it('函数测试', () => {
    //     expect(vm.unitTest(1, 1))
    //         .toEqual(2)
    // })

    // it('检测渲染输出', () => {
    //     vm.changeMsg()

    //     vm.$nextTick( _ => {
    //         expect(vm.$el.querySelector('.hello h1').textContent)
    //             .toEqual('zpTest')
    //     } )
    // })

    // it('点击测试', () => {
    //     let btn = vm.$el.querySelector('.hello h1')
    //     btn.click();

    //     // 可以手动监听 | 或者说更新 DOM
    //     vm._watcher.run()

    //     expect(vm.$el.querySelector('.hello h1').textContent)
    //         .toEqual('zpTest')

    //     // 可以等页面更新来断言
    //     // vm.$nextTick( _ => {
    //     //     expect(vm.$el.querySelector('.hello h1').textContent)
    //     //         .toEqual('xxx')
    //     // } )
    // })

    // npm install inject-loader --save-dev
    let MyComponent, ExampleInjector
    ExampleInjector = require('inject-loader!./main.js')
    MyComponent = ExampleInjector({
        'STATIC/mork.js': { name: 'xxxxx' },
    })

    // it('截断数据', () => {

    //     let btn = MyComponent.$el.querySelector('.hello h1')
    //     btn.click();
    //     MyComponent.$nextTick( _ => {
    //         expect(MyComponent.$el.querySelector('.hello h1').textContent)
    //             .toEqual('xxxxx')
    //     } )
    // })
})
