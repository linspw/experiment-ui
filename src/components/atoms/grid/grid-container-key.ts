import type { InjectionKey } from 'vue'

interface GridProps {
  tag: string
  padding: boolean,
  dense: boolean,
  responsive: boolean,
  columns: number
}

interface InjectionProps {
  gridContainerProps: GridProps
}

export const GridContainerKey = Symbol('GridContainerKey') as InjectionKey<InjectionProps>;
