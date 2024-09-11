 import {Link} from 'react-router-dom'
export default function Dashboard(){
    return <>
        This is dashboard
        <Link to="/products" className="underline">Go to Products</Link>
    </>
}