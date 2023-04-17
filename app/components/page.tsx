'use client'
interface FirstProps{
    id:string,
    num:number
}
const First:React.FC<FirstProps> = ({id,num}) => {
    return (
        <div>First Page {id} {num}</div>
      );
}
 
export default First;