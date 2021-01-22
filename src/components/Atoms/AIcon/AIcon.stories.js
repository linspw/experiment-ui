import { AIcon } from '.';

export default {
  title: 'Design System/Atoms/AIcon',
}

export const withText = () => ({
  components: { AIcon },
  template: '<a-icon icon="fas fa-home" />',
})

export const withColors = () => ({
  render() {
    return (
      <div>
        <AIcon color="inherit" icon="fas fa-home" />
        <p />
        <AIcon color="primary" icon="fas fa-home" />
        <p />
        <AIcon color="secundary" icon="fas fa-home" />
        <p />
        <AIcon color="tertiary" icon="fas fa-home" />
        <p />
        <AIcon color="interactive" icon="fas fa-home" />
        <p />
        <AIcon color="inverse" icon="fas fa-home" />
        <p />
        <AIcon color="grey" icon="fas fa-home" />
      </div>
    );
  }
})

export const withSize = () => ({
  render() {
    return (
      <div>
        <AIcon size="inherit" icon="fas fa-home" />
        <p />
        <AIcon size="extra-small" icon="fas fa-home" />
        <p />
        <AIcon size="small" icon="fas fa-home" />
        <p />
        <AIcon size="medium" icon="fas fa-home" />
        <p />
        <AIcon size="large" icon="fas fa-home" />
        <p />
        <AIcon size="extra-large" icon="fas fa-home" />
      </div>
    );
  }
})

export const withAnimation = () => ({
  render() {
    return (
      <div>
        <AIcon size="medium" icon="fas fa-spinner fa-spin" />
        <AIcon size="medium" icon="fas fa-circle-notch fa-spin" />
        <AIcon size="medium" icon="fas fa-sync fa-spin" />
        <AIcon size="medium" icon="fas fa-cog fa-spin" />
        <AIcon size="medium" icon="fas fa-spinner fa-pulse" />
        <AIcon size="medium" icon="fas fa-stroopwafel fa-spin" />
      </div>
    );
  }
})