function Button({text, onClick}) {
  return (
  	<button type="button" className="btn bg-[#878BCE] h-14 w-14 rounded-2xl" onClick={onClick}>{text}</button>
  )
}

export {Button};
