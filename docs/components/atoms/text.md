<script setup lang="ts">
import { HText } from '@components/atoms';
</script>

# Text

### Default use:

<br>

<h-text>Example of paragraph.</h-text>

```vue
<h-text>Example of paragraph.</h-text>
```

### Variants:

<br>


::: raw
<h-text variant="h1">h1</h-text>

<h-text variant="h2">h2</h-text>

<h-text variant="h3">h3</h-text>

<h-text variant="h4">h4</h-text>

<h-text variant="h5">h5</h-text>

<h-text variant="h6">h6</h-text>

<h-text variant="subtitle1">subtitle1</h-text>

<h-text variant="subtitle2">subtitle2</h-text>

<h-text variant="body1">body1</h-text>

<h-text variant="body2">body2</h-text>

<h-text variant="button">button</h-text>

<h-text variant="caption">caption</h-text>

<h-text variant="overline">overline</h-text>
:::


```vue
<h-text variant="h1">h1</h-text>
<h-text variant="h2">h2</h-text>
<h-text variant="h3">h3</h-text>
<h-text variant="h4">h4</h-text>
<h-text variant="h5">h5</h-text>
<h-text variant="h6">h6</h-text>
<h-text variant="subtitle1">subtitle1</h-text>
<h-text variant="subtitle2">subtitle2</h-text>
<h-text variant="body1">body1</h-text>
<h-text variant="body2">body2</h-text>
<h-text variant="button">button</h-text>
<h-text variant="caption">caption</h-text>
<h-text variant="overline">overline</h-text>
```


### Colors:

<br>

<h-text color="primary">Primary</h-text>
<h-text color="secondary">Secondary</h-text>
<h-text color="interactive">Interactive</h-text>
<h-text color="grey">Grey</h-text>
<h-text color="success">Success</h-text>
<h-text color="danger">Danger</h-text>
<h-text color="warn">Warn</h-text>
<h-text color="info">Info</h-text>


```vue
<h-text color="primary">Primary</h-text>
<h-text color="secondary">Secondary</h-text>
<h-text color="interactive">Interactive</h-text>
<h-text color="grey">Grey</h-text>
<h-text color="success">Success</h-text>
<h-text color="danger">Danger</h-text>
<h-text color="warn">Warn</h-text>
<h-text color="info">Info</h-text>
```


### Emphasize

<br>

<h-text emphasis="low">low</h-text>
<h-text emphasis="medium">medium</h-text>
<h-text emphasis="high">high</h-text>

```vue
<h-text emphasis="low">low</h-text>
<h-text emphasis="medium">medium</h-text>
<h-text emphasis="high">high</h-text>
```


### Tag use:

<br>

<h-text tag="router-link">router-link</h-text>
<h-text tag="h1">H1</h-text>
<h-text tag="h2">H2</h-text>
<h-text tag="h3">H3</h-text>
<h-text tag="h4">H4</h-text>
<h-text tag="h5">H5</h-text>
<h-text tag="h6">H6</h-text>
<h-text tag="a">a</h-text>
<h-text tag="p">p</h-text>
<h-text tag="span">span</h-text>
<h-text tag="caption">caption</h-text>
<h-text tag="strong">strong</h-text>

```vue
<h-text tag="router-link">router-link</h-text>
<h-text tag="h1">H1</h-text>
<h-text tag="h2">H2</h-text>
<h-text tag="h3">H3</h-text>
<h-text tag="h4">H4</h-text>
<h-text tag="h5">H5</h-text>
<h-text tag="h6">H6</h-text>
<h-text tag="a">a</h-text>
<h-text tag="p">p</h-text>
<h-text tag="span">span</h-text>
<h-text tag="caption">caption</h-text>
<h-text tag="strong">strong</h-text>
```

### Sizes:

<br>

<h-text size="nano">nano</h-text>
<h-text size="micro">micro</h-text>
<h-text size="extra-small">extra-small</h-text>
<h-text size="small">small</h-text>
<h-text size="medium">medium</h-text>
<h-text size="large">large</h-text>
<h-text size="extra-large">extra-large</h-text>
<h-text size="jumbo">jumbo</h-text>
<h-text size="extra-jumbo">extra-jumbo</h-text>
<h-text size="giant">giant</h-text>
<h-text size="extra-giant">extra-giant</h-text>
<h-text size="colossal">colossal</h-text>
<h-text size="extra-colossal">extra-colossal</h-text>
<h-text size="mega">mega</h-text>
<h-text size="extra-mega">extra-mega</h-text>
<h-text size="mega">immense</h-text>

```vue
<h-text size="nano">nano</h-text>
<h-text size="micro">micro</h-text>
<h-text size="extra-small">extra-small</h-text>
<h-text size="small">small</h-text>
<h-text size="medium">medium</h-text>
<h-text size="large">large</h-text>
<h-text size="extra-large">extra-large</h-text>
<h-text size="jumbo">jumbo</h-text>
<h-text size="extra-jumbo">extra-jumbo</h-text>
<h-text size="giant">giant</h-text>
<h-text size="extra-giant">extra-giant</h-text>
<h-text size="colossal">colossal</h-text>
<h-text size="extra-colossal">extra-colossal</h-text>
<h-text size="mega">mega</h-text>
<h-text size="extra-mega">extra-mega</h-text>
<h-text size="mega">immense</h-text>
```

### Align:

<br>

<h-text align="left">Left</h-text>
<h-text align="center">center</h-text>
<h-text align="right">Right</h-text>
<h-text align="justify">Justify</h-text>

```vue
<h-text align="left">Left</h-text>
<h-text align="center">center</h-text>
<h-text align="right">Right</h-text>
<h-text align="justify">Justify</h-text>
```

### Weight and some behaviors:

<br>

<h-text weight="regular">Regular</h-text>
<h-text weight="medium">Medium</h-text>
<h-text weight="bold">Bold</h-text>
<h-text uppercase>uppercase</h-text>
<h-text lowercase>LOWERCASE</h-text>
<h-text capitalize>capitalize</h-text>
<h-text italic>Italic</h-text>
<h-text ellipsis-nowrap style="width: 150px;">ellipsisNowrap example</h-text>
<h-text link tag="a" href="#">Link</h-text>
<h-text dynamic>
  <b>dynamic bold</b> <i>dynamic italic</i> <a>dynamic link</a>
</h-text>


```vue
<h-text weight="regular">Regular</h-text>
<h-text weight="medium">Medium</h-text>
<h-text weight="bold">Bold</h-text>
<h-text uppercase>uppercase</h-text>
<h-text lowercase>LOWERCASE</h-text>
<h-text capitalize>capitalize</h-text>
<h-text italic>Italic</h-text>
<h-text ellipsis-nowrap style="width: 150px;">ellipsisNowrap example</h-text>
<h-text link tag="a" href="#">Link</h-text>
<h-text dynamic>
  <b>dynamic bold</b> <i>dynamic italic</i> <a>dynamic link</a>
</h-text>
```