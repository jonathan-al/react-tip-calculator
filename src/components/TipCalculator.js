import { useState } from "react"
import BillInput from "./BillInput"
import Output from "./Output"
import Reset from "./Reset"
import SelectPercentage from "./SelectPercentage"

const TipCalculator = () => {
  const [bill, setBill] = useState(80)
  const [percentage1, setPercentage1] = useState(10)
  const [percentage2, setPercentage2] = useState(20)

  const handleReset = () => {
    setBill("")
    setPercentage1(0)
    setPercentage2(0)
  }

  const average = Math.round((percentage1 + percentage2) / 2)
  const tip = (average / 100) * bill

  return (
    <>
      <BillInput
        bill={bill}
        onSetBill={(e) =>
          setBill(e.target.value ? Number(e.target.value) : "")
        }
      />

      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={(e) =>
          setPercentage1(Number(e.target.value))
        }
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>

      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={(e) =>
          setPercentage2(Number(e.target.value))
        }
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>

      {bill > 0 && (
        <h1>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </h1>
      )}
    </>
  )
}

export default TipCalculator
