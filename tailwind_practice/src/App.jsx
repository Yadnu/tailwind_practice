import './App.css'
import { RevenueCard } from '../components/RevenueCard'

function App() {
  return (
    <div className='grid grid-cols-4 shadow-md'>
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
    </div>
    
  )
}
function Component1(){
  return(
    <>
    <div className='grid grid-cols-3'>
    <div  className='bg-red-500 col-span-3 md:col-span-1 md:bg-cyan-400' >1111111111</div>
    <div className='bg-orange-100 col-span-3 md:col-span-1 md:bg-red-400'>2222222222</div>
    <div className='bg-green-100'>333333333333333</div>
    <div className='bg-blue-200'>444444444444444</div>
    <div className='bg-gray-400'>55555555555555555</div>
    <div className='bg-cyan-200'>66666666666666</div>
  </div> 
    </>
  )
}
function Component2(){
return <>
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-red-500 rounded-full '>11111111111111111111</div>
      <div className='bg-yellow-500 rounded-full'>22222222222222222222</div>
      <div className='bg-cyan-500 rounded-full'>33333333333333333333</div>
    </div>
  </>
}

export default App
