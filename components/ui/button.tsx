

const Button = (props: {children: React.JSX.Element, cl:string}) => {
  return (
    <button className={`text-xl rounded-lg p-[6px] ${props.cl} `}>
        {props.children}
    </button>
  )
}

export default Button