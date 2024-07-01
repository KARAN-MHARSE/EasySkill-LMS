import Card from '../components/Card'

function Cources() {
  return (
    <div className='px-5 font-openSans'>
      <h1 className='text-lg font-bold mb-3'>My Courses</h1>
      <div className=' grid grid-cols-2 md:grid-cols-4 gap-4'>
        <Card type="mycourse"/>
        <Card type="mycourse"/>
        <Card type="mycourse"/>
        <Card type="mycourse"/>
      </div>
      {/* Recommended for studying */}
      <h1 className='text-lg font-bold mt-6 mb-3'>Recommended for studying</h1>
      <div className=' grid grid-cols-2 md:grid-cols-4 gap-4'>
        <Card type="buycourse"/>
        <Card type="buycourse"/>
        <Card type="buycourse"/>
        <Card type="buycourse"/>
      </div>
    </div>
    
  )
}

export default Cources