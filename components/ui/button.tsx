

const Button = (props: {children: React.JSX.Element, cl:string}) => {
  return (
    <button className={`text-[#ff6e3a] bg-[#e6542735] text-xl rounded-lg p-[6px] ${props.cl} mt-1 ml-[21.7rem]`}>
        {props.children}
    </button>
  )
}

export default Button