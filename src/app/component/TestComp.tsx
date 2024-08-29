"Use client"
import { useCallback, useEffect, useRef } from 'react';

function TestComp({handleChange2}) {
    const debounceTimeout = useRef(null);

    const handleMapBoundaryChange = useCallback(() => {
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }
    
        // Set a timeout to call the parent function after 2 seconds
        debounceTimeout.current = setTimeout(() => {
            handleChange2(); // Trigger the parent function
        }, 2000);
      }, [handleChange2]);

      useEffect(() => {
        // Assuming map is initialized and a 'bounds_changed' event is available
       
    
        // Cleanup function to clear timeout and remove event listener
        return () => {
          clearTimeout(debounceTimeout.current);
        };
      }, [handleMapBoundaryChange]);

  return (
    <div onMouseMove={handleMapBoundaryChange}
    className="w-full h-full mt-10 p-10 bg-slate-400 text-yellow-500"
    >TestComp</div>
  )
}

export default TestComp