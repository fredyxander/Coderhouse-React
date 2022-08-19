export const SinlgeChildrenProp = ({children})=>{
    console.log('single-children',children)
    return(
        <div style={{background: "blue", margin:"10px"}}>
            {children}
        </div>
    )
}