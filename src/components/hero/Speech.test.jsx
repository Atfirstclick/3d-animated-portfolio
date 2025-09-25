import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Suspense } from 'react'
import Speech from './Speech'

// Mock TypeAnimation component
vi.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence, wrapper: Component = 'span', ...props }) =>
    <Component {...props} data-testid="type-animation">
      {Array.isArray(sequence) ? sequence[0] : sequence}
    </Component>
}))

describe('Speech', () => {
  it('renders without crashing', () => {
    render(
      <Suspense fallback="Loading...">
        <Speech />
      </Suspense>
    )

    expect(screen.getByTestId('type-animation')).toBeInTheDocument()
  })

  it('has bubble styling class', () => {
    render(
      <Suspense fallback="Loading...">
        <Speech />
      </Suspense>
    )

    const bubble = document.querySelector('.bubble')
    expect(bubble).toBeInTheDocument()
  })
})