import React from "react"
import { MdVisibility } from "react-icons/md";


export default function FloatingModal({children, isOpen, setIsOpen}){
        
    
    const [shouldRender, setShouldRender] = React.useState(false);

    React.useEffect(() => {
        let timeout;
      
        if (isOpen) {
          setShouldRender(true);
        } else {
          timeout = setTimeout(() => setShouldRender(false), 300);
        }
      
        return () => clearTimeout(timeout);
      }, [isOpen]);

      
      

      React.useEffect(() => {
        if(!isOpen)return

        function handleEsc(event) {
          if (event.key === "Escape") {
            setIsOpen(false);
          }
        }
      
        window.addEventListener("keydown", handleEsc);
      
        return () => {
          window.removeEventListener("keydown", handleEsc);
        };
      }, [isOpen]);

    

    
    const style = {
        borderColor: "red"
    }
    const screenStyle={
        backgroundColor:"transparent"
    }
    

    return (
        <>

        {shouldRender && <div 
            className="dialog-full-screen"
            onClick={() => setIsOpen(false) }
            style={!isOpen ? screenStyle : null}
        >
            
            <dialog 
                className={`${isOpen ? "scale-in" : "scale-out"}`}
                open={true}
                onClick={(e) => e.stopPropagation()}
                >
                    {children}
              
                
            </dialog>
        </div>}
        </>

    )
}