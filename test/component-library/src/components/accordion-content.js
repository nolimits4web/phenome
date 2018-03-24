import Utils from '../utils/utils';
import Mixins from '../utils/mixins';

export default {
  props: Mixins.colorProps,
  name: 'f7-accordion-content',
  render() {
    return (
      <div id={this.props.id} style={this.props.style} className={this.classes}>
        <slot></slot>
      </div>
    );
  },
  computed: {
    classes() {
      const self = this;
      return Utils.classNames(
        self.props.className,
        {
          'accordion-item-content': true,
        },
        Mixins.colorClasses(self)
      );
    },
  },
};
