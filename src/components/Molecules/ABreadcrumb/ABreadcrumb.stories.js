import { ABreadcrumb } from '.';

export default {
  title: 'Design System/Molecules/ABreadcrumb',
};

export const withText = () => ({
  components: { ABreadcrumb },
  template: '<a-breadcrumb icon="fas fa-user" :items="[{ text: \'Home\', url: \'/\' }]">Hello Button</a-breadcrumb>',
});

export const withItems = () => ({
  render() {
    return (
      <div>
        <ABreadcrumb items={[{ text: 'Home', url: '/' }]} />
        <p />
        <ABreadcrumb items={[{ text: 'Home', url: '/' }, { text: 'Subpage', url: '/#' }]} />
        <p />
        <ABreadcrumb items={[{ text: 'Home', url: '/' }, { text: 'Subpage', url: '/#' }, { text: 'Subpage2', url: '/#' }]} />
      </div>
    );
  },
});
