import { render as rtlRender } from '@testing-library/react'
import { Suspense } from 'react'

// Custom render function that includes common providers
export function render(ui, options = {}) {
  const Wrapper = ({ children }) => (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  )

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  })
}

// Re-export everything from React Testing Library
export * from '@testing-library/react'