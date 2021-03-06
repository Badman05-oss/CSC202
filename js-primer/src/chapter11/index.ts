import log from './tools';
export interface Props {
 x: number;
 y: number;
} 
export class Value {
    private value = 10
    private props: Props = { x: 0, y: 0 };
   
    getValue(): number {
    return this.value;
    }
   
    setValue(value: number): void {
    this.value = value;
    }
   
    setProps(props: Props) {
    this.props = props;
    }
   
    getProps(): Props {
    return this.props;
    }
   } 
   const value = new Value();
value.setValue(1000);
value.setProps({ x: 1000, y: 2000 });
log(`Value is ${value.getValue()} and Props are { x: ${value.getProps().x}, y: ${value.getProps().y}}`);