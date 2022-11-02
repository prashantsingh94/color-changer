import colorNames from 'colornames';
const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name : </label>
      <input
       autoFocus
       type="text"
       placeholder="Enter a color name"
       required
       value={colorValue}
       onChange={(e) => {
         setColorValue(e.target.value)
         setHexValue(colorNames(e.target.value))
        }}
       />
       <button
          type="button"
          onClick={() => setIsDarkText(!isDarkText)}
          >
          Toggle text Color
          </button>
      </form>
  )
}

export default Input