/* eslint-disable no-param-reassign */
import Vue from 'vue';
import ATooltipContent from './a-tooltip-content.vue';

const ATooltipDirective = {
  bind(el, binding) {
    const options = (typeof binding.value === 'string') ? { content: binding.value } : { ...binding.value };
    const uniqueID = `a-tooltip${Math.random().toString(36).substr(2, 9)}`;
    const parent = document.createElement('span');
    const initialPosition = el.style.position;
    const propsData = Vue.observable(options);

    let tooltip = null;
    el.style.position = initialPosition || 'relative';
    parent.id = uniqueID;
    parent.style.position = 'relative';

    el.addEventListener('mouseenter', () => {
      tooltip = new (Vue.extend(ATooltipContent))({ propsData });
      el.appendChild(parent);
      tooltip.$mount(`#${uniqueID}`);
    });

    el.addEventListener('mouseleave', () => {
      tooltip.$destroy();
      (tooltip.$el).remove();
    });
  },
};

export { ATooltipDirective };
