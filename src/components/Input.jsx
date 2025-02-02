
function Input({placeholder, type = 'text', error, value, onChange, name}) {
   return (
   <>
     <input 
     type={type} 
     placeholder={placeholder} 
     className={` w-9/12 h-16 px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 
     ${error ? 'border-red-600 focus:ring-red-300' 
     : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'} `}
     value={value}
     onChange={onChange}
     name={name}
     />
      
     {error ? < small className="text-red-500">{error}</small> : null }
 </>
   )
 }
 
 export default Input