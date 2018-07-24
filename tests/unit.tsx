import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { AppComponent, Counter } from '../src/app';

describe('test my code', () => {
  it('should show my app', () => {
    const renderer = createRenderer();
    renderer.render(<AppComponent />);
    const output = renderer.getRenderOutput();

    expect(output.type).toBe('div');
    expect(output.props.children).toEqual([
      <Counter />
    ]);
  });
});
