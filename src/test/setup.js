import '@testing-library/jest-dom'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock WebGL context for Three.js tests
HTMLCanvasElement.prototype.getContext = function(contextId) {
  if (contextId === 'webgl' || contextId === 'webgl2') {
    return {
      getParameter: () => '',
      getExtension: () => null,
      createShader: () => ({}),
      shaderSource: () => {},
      compileShader: () => {},
      createProgram: () => ({}),
      attachShader: () => {},
      linkProgram: () => {},
      useProgram: () => {},
      deleteShader: () => {},
      deleteProgram: () => {},
      getProgramParameter: () => true,
      getShaderParameter: () => true,
      viewport: () => {},
      enable: () => {},
      disable: () => {},
      clear: () => {},
      clearColor: () => {},
      getUniformLocation: () => ({}),
      uniform1f: () => {},
      uniform2f: () => {},
      uniform3f: () => {},
      uniform4f: () => {},
      uniformMatrix4fv: () => {},
      bindBuffer: () => {},
      bufferData: () => {},
      createBuffer: () => ({}),
      enableVertexAttribArray: () => {},
      vertexAttribPointer: () => {},
      drawArrays: () => {},
      drawElements: () => {},
      canvas: document.createElement('canvas')
    }
  }
  return null
}