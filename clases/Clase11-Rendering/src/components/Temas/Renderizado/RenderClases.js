import './RenderClases.css';

export const RenderClases = ()=>{
    const isDark = "dark";
    return(
        <div className={isDark === "light" || 'dark'}>
            render clases
        </div>
    )
}