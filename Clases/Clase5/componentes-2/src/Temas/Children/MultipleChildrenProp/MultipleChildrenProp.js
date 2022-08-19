export const MultipleChildrenProp = ({children})=>{
    console.log('multiple-children',children)
    return(
        <div style={{background: "pink", margin:"10px"}}>
            {children}
        </div>
    )
}