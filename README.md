# ReactApp

Created with CodeSandbox

## Hooks 函数

### useState:

### useEffect:

### useCallback:

作用：useCallback 函数会生成一个记忆函数，这样更新时就能保证这个函数不会发生渲染。 从而达到规避性能浪费的目标。

比如 button 绑定 onClick,由于其他原因触发 render 重新渲染,导致产生新的 OnClick 方法,这会造成不必要的渲染而引起性能浪费。

因此,类式组件通常在 constructor:

> this.buttonClick = this.buttonClick.bind(this);

函数式组件中,采用 useCallback()函数:

```JS
const buttonClick = useCallback(() => {
  console.log('Hello World！！')
},[])
```
