import { mount, shallowMount } from '@vue/test-utils'
import { expect, it, test } from "vitest";
import BaseInput from '../BaseInput.vue'
import BaseButton from '../BaseButton.vue'
import App from '../../App.vue'

it('input exist', () => {
    const input = mount(BaseInput)
    expect(input).toBeTruthy()
})
it('button exist', () => {
    const button = mount(BaseButton)
    expect(button).toBeTruthy()
})
it('sets the value', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.base-input')
    await input.setValue('сзк')
    expect(input.element.value).toBe('сзк')
})
// it('sets the value 2', async () => {
//     const wrapper = mount(App)
//     const input = wrapper.find('.base-input')
//     await input.setValue('qwe')
//     expect(input.element.value).to.equal('')
// })
it('check placeholder', () => {
    const input = mount(BaseInput);
    expect(input.attributes('placeholder')).toBe('Test input');
});
it('buttons renders all', () => {
    const wrapper = mount(App)
    const buttons = wrapper.findAllComponents(BaseButton)
    expect(buttons.length).toBe(6)
});
it('blue letter exist', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.base-input')
    await input.setValue('сзк')
    const letterblue = wrapper.find('.blue')
    expect(letterblue).toBeTruthy()
})
it('green letter exist', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.base-input')
    await input.setValue('сзк')
    const lettergreen = wrapper.find('.green')
    expect(lettergreen).toBeTruthy()
})
it('red letter exist', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.base-input')
    await input.setValue('сзк')
    const letterred = wrapper.find('.red')
    expect(letterred).toBeTruthy()
})
it('letters exist right color', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.base-input')
    await input.setValue('сзк')
    const lettergreen = wrapper.find('.green')
    expect(lettergreen.text()).toMatch('з')
})
it('letters exist right color', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.base-input')
    await input.setValue('сзк')
    const letterblue = wrapper.find('.blue')
    expect(letterblue.text()).toMatch('с')
})
it('letters exist right color', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.base-input')
    await input.setValue('сзк')
    const letterred = wrapper.find('.red')
    expect(letterred.text()).toMatch('к')
})