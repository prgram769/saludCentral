function Button({text, onClick}) {
  return (
  	<button type="button" className="btn bg-[#73B3D1] h-14 w-14 rounded-3xl" onClick={onClick}>{text}</button>
  )
}

export {Button};
