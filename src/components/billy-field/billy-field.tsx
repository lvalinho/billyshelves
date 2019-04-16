import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'billy-field',
  styleUrl: 'billy-field.css',
  shadow: true
})
export class BillyField {
  /**
   * Field Name
   */
  @Prop() name: string;

  private getText(): string {
    return this.name;
  }

  render() {
    return <div>I'm a billy field: {this.getText()}</div>;
  }
}
