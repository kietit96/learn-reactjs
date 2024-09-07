import ColorPicker from "./color.jsx"
function App() {
  const name = "box thứ 1"
  const state = true
  const obj = { name: "abc", age: "18" }
  const arr = ["item1", "item2", "item3"]
  return (
    <section>
      <ColorPicker color="#ff2000" ></ColorPicker>
      <h2>{name}</h2>
      <p>{state ? "true" : "false"}</p>
      {state && <p>true</p>}
      {!state && <p>false</p>}
      <p>{obj.name}-{obj.age}</p>
      <ul>
        {arr.map(val => {
          return (<li key={val}>{val}</li>)
        })}
      </ul>
    </section>
  )
}


export default App
