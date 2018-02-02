import Vue from 'vue'
import Carousel from '@/components/Carousel'
import axios from 'axios'

describe('Carousel.vue', () => {
  it('container width', () => {
    const Constructor = Vue.extend(Carousel);
    const vm = new Constructor({ propsData: { width: 500 } }).$mount();
    expect(vm.$el.style.width).to.equal(500 + 'px')
  })

  it('render item', () => {
    const Constructor = Vue.extend(Carousel);
    const vm = new Constructor({ propsData: { items: ['https://...', 'https://...', 'https://...'] } }).$mount();
    expect(vm.$el.querySelectorAll('.carousel-item').length).to.equal(3)
  })

  it('container transition effect', done => {
    const Constructor = Vue.extend(Carousel);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.carousel-inner').className).to.include('smooth');
    vm.transition = false;
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.carousel-inner').className).to.not.include('smooth');
      done();
    })
  })

  it('innerStyle', done => {
    const Constructor = Vue.extend(Carousel);
    const vm = new Constructor({ propsData: { items: ['https://...', 'https://...', 'https://...'] } }).$mount();
    const inner = vm.$el.querySelector('.carousel-inner');
    expect(inner.style.width).to.equal('900px');
    expect(inner.style.webkitTransform).to.equal('translateX(0px)');

    // 展示图片更换
    vm.index = 1;
    Vue.nextTick(() => {
      expect(inner.style.webkitTransform).to.equal('translateX(-300px)');
      done();
    })
  })

it('mousedown', done => {
  const Constructor = Vue.extend(Carousel);
  const vm = new Constructor({ propsData: { items: ['https://...', 'https://...', 'https://...'] } }).$mount();
  const inner = vm.$el.querySelector('.carousel-inner');
  const evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('mousedown', true, true, window, 0, 0, 0, 10, 0, false, false, false, false, 0, null);
  inner.dispatchEvent(evt)
  Vue.nextTick(() => {
    expect(vm.mouse.isDown).to.equal(true);
    expect(vm.transition).to.equal(false);
    expect(vm.mouse.startX).to.equal(10);
    done();
  })
})

  it('mousemove moved', done => {
    const Constructor = Vue.extend(Carousel);
    const vm = new Constructor({ propsData: { items: ['https://...', 'https://...', 'https://...'] } }).$mount();
    const inner = vm.$el.querySelector('.carousel-inner');

    const evt1 = document.createEvent('MouseEvents');
    evt1.initMouseEvent('mousedown', true, true, window, 0, 0, 0, 10, 0, false, false, false, false, 0, null);
    inner.dispatchEvent(evt1)

    const evt2 = document.createEvent('MouseEvents');
    evt2.initMouseEvent('mousemove', true, true, window, 0, 0, 0, 50, 0, false, false, false, false, 0, null);
    evt2.initEvent('mousemove');
    inner.dispatchEvent(evt2);
    Vue.nextTick(() => {
      expect(vm.mouse.disX).to.equal(40);
      done();
    })
  })

  it('mousemove not moved', done => {
    const Constructor = Vue.extend(Carousel);
    const vm = new Constructor({ propsData: { items: ['https://...', 'https://...', 'https://...'] } }).$mount();
    const inner = vm.$el.querySelector('.carousel-inner');

    const evt1 = document.createEvent('MouseEvents');
    evt1.initMouseEvent('mousedown', true, true, window, 0, 0, 0, 10, 0, false, false, false, false, 0, null);
    inner.dispatchEvent(evt1)

    const evt2 = document.createEvent('MouseEvents');
    evt2.initMouseEvent('mousemove', true, true, window, 0, 0, 0, 15, 0, false, false, false, false, 0, null);
    evt2.initEvent('mousemove');
    inner.dispatchEvent(evt2);
    Vue.nextTick(() => {
      expect(vm.mouse.disX).to.equal(0);
      done();
    })
  })

  it("receive", done => {
    const Constructor = Vue.extend(Carousel);
    const vm = new Constructor().$mount();
    sinon.stub(vm, 'fetch').usingPromise(Promise).resolves({ body: 5 });

    vm.receive()
    Vue.nextTick(() => {
      console.log('received', vm.received);
      expect(vm.received).to.equal(5)
      vm.fetch.restore()
      done();
    })
  });

})
