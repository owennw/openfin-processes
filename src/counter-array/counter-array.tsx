import * as React from 'react'

import { Responsive, WidthProvider } from 'react-grid-layout'

import { createLayouts } from './layouts'

import { Counter } from '../counter'

const NUMBER_OF_COUNTERS = 36

const layouts = createLayouts(NUMBER_OF_COUNTERS)

const ResponsiveGridLayout = WidthProvider(Responsive)

const DRAGGABLE_CANCEL = 'draggableCancel'

const CounterArray = () => (
  <ResponsiveGridLayout
    layouts={{ lg: layouts }}
    breakpoints={{ lg: 1800, md: 1500, sm: 900, xs: 600, xxs: 0 }}
    draggableCancel={`.${DRAGGABLE_CANCEL}`}
    isResizable={false}
    autoSize={false}
  >
    {layouts.map(l => (
      <div key={l.i}>
        <Counter label={l.i} dragCancel={DRAGGABLE_CANCEL} />
      </div>
    ))}
  </ResponsiveGridLayout>
)

export { CounterArray }