import React, { Component } from 'react';

export class Counter extends Component<{}, { value: number }> {
  state = {
    value: 0
  };

  intervalId: number | null = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState(({ value }) => ({ value: value + 1 })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <p>Value is: {this.state.value * 100}</p>;
  }
}

/**
 * This is our app component.
 */
export const AppComponent = () => (
  <div>
    <Counter />
    {process.env.NODE_ENV === 'production' ? (
      <p>Production Build</p>
    ) : (
      <p>Dev Build</p>
    )}
  </div>
);
