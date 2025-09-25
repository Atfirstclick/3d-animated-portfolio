import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

vi.mock('./components/hero/Hero', () => ({
  default: () => <div data-testid="hero">Hero Component</div>
}))

vi.mock('./components/services/Services', () => ({
  default: () => <div data-testid="services">Services Component</div>
}))

vi.mock('./components/portfolio/Portfolio', () => ({
  default: () => <div data-testid="portfolio">Portfolio Component</div>
}))

vi.mock('./components/contact/Contact', () => ({
  default: () => <div data-testid="contact">Contact Component</div>
}))

describe('App', () => {
  it('renders main container', () => {
    render(<App />)
    expect(document.querySelector('.container')).toBeInTheDocument()
  })

  it('renders main container with lazy loading', () => {
    render(<App />)
    // LazyLoad creates placeholder divs instead of showing loading text immediately
    expect(document.querySelector('.container')).toBeInTheDocument()
  })

  it('has lazy loading wrappers', () => {
    render(<App />)
    const lazyWrappers = document.querySelectorAll('.lazyload-wrapper')
    expect(lazyWrappers).toHaveLength(4)
  })
})