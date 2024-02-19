import { mount, shallowMount } from '@vue/test-utils'
import { expect, it } from "vitest";
import BaseInput from '../BaseInput.vue'
import BaseButton from '../BaseButton.vue'

it('input exist', () => {
    const input = mount(BaseInput)
    expect(input).toBeTruthy()
})
it('button exist', () => {
    const button = mount(BaseButton)
    expect(button).toBeTruthy()
})
// it('emitted input when value set', () => {
//     const input = mount(BaseInput)
//     input.setValue('сзк');
//     //input.trigger('input');
//     expect(input.element.value).toBeTruthy();
//})
it('false letter !exist', () => {
    const input = mount(BaseInput)
    input.setValue('qQ1!{]')
    expect(input.element.value).toBe('')
})
it('check placeholder', () => {
    const input = mount(BaseInput);
    expect(input.attributes('placeholder')).toBe('Test input');
});
it('buttons renders all', () => {
    const button = .findAll('base-button')
    expect(button.length).toBe(6)
});