import { Components as CoreUIComponents } from "@components";
import { CoreUIPlugin as CoreUI } from "@plugins/core-ui-plugin";
import { Utilities } from '@utils';
import '@styles/index.scss';

const CoreUIItems = { CoreUIComponents, CoreUI, ...Utilities };

export default CoreUIItems;
