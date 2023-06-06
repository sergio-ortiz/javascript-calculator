import BtnRow from "./components/btn-row"
import BtnCol from "./components/btn-col";
import { useSelector } from "react-redux";

function App() {
  const display = useSelector(state => state.display.value)

  return (
    <div className="container vh-100">
      <div id="display" className="row h-25 bg-light align-items-end">
        <div className="col text-end fs-1 py-0">{display}</div>
      </div>
      <div className="row h-75 bg-warning">
        <div className="col">
          <BtnRow>
            <BtnCol id={"zero"} textContent={"0"} />
            <BtnCol id={"decimal"} textContent={"."} />
            <BtnCol id={"clear"} textContent={"C"}/>
            <BtnCol id={"equals"} textContent={"="}/>
            <BtnCol id={"add"} textContent={"+"} />
          </BtnRow>
          <BtnRow>
            <BtnCol id={"one"} textContent={"1"} />
            <BtnCol id={"two"} textContent={"2"} />
            <BtnCol id={"three"} textContent={"3"} />
            <BtnCol id={"subtract"} textContent={"-"} />
          </BtnRow>
          <BtnRow>
            <BtnCol id={"four"} textContent={"4"} />
            <BtnCol id={"five"} textContent={"5"} />
            <BtnCol id={"six"} textContent={"6"} />
            <BtnCol id={"multiply"} textContent={"x"} />
          </BtnRow>
          <BtnRow>
            <BtnCol id={"seven"} textContent={"7"} />
            <BtnCol id={"eight"} textContent={"8"} />
            <BtnCol id={"nine"} textContent={"9"} />
            <BtnCol id={"divide"} textContent={"/"} />
          </BtnRow>
        </div>
      </div>
    </div>
  )
}

export default App
