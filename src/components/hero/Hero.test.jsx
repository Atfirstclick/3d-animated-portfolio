import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Hero from './Hero'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="canvas">{children}</div>
}))

vi.mock('./Shape', () => ({
  default: () => <div data-testid="shape">Shape Component</div>
}))

vi.mock('./Speech', () => ({
  default: () => <div data-testid="speech">Speech Component</div>
}))

describe('Hero', () => {
  it('renders hero title', () => {
    render(<Hero />)
    expect(screen.getByText('Hey There,')).toBeInTheDocument()
    expect(screen.getByText("I'm Kamil!")).toBeInTheDocument()
  })

  it('renders tech stack section', () => {
    render(<Hero />)
    expect(screen.getByText('My Tech Stack')).toBeInTheDocument()
    expect(screen.getByText('I use a wide array of tools to let you have a smooth experience.')).toBeInTheDocument()
  })

  it('renders contact links', () => {
    render(<Hero />)
    const contactLinks = screen.getAllByText(/Book a Call|Hire Me/)
    expect(contactLinks.length).toBeGreaterThan(0)
  })

  it('renders social media links', () => {
    render(<Hero />)
    expect(screen.getByText('FOLLOW ME')).toBeInTheDocument()

    const socialLinks = document.querySelectorAll('.follow a')
    expect(socialLinks).toHaveLength(3)
  })

  it('renders 3D canvas and components', () => {
    render(<Hero />)
    expect(screen.getByTestId('canvas')).toBeInTheDocument()
    expect(screen.getByTestId('speech')).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    render(<Hero />)
    const calendlyLinks = document.querySelectorAll('a[href="https://calendly.com/kamil-ulupinar/30min"]')
    expect(calendlyLinks).toHaveLength(2)

    const twitterLink = document.querySelector('a[href="https://x.com/kml_ai"]')
    expect(twitterLink).toBeInTheDocument()
  })
})