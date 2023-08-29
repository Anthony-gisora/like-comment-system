import { useState } from 'react';
import { AiOutlineLike, AiFillLike, AiOutlineMessage, AiOutlineSend } from 'react-icons/ai'


function App () {
  const [ like, setLike ] = useState( false )
  const [likes, setLikes] = useState(0)
  const [ message, setMessage ] = useState( true )
  const [ comment, setComment ] = useState( [ {} ] )
  const [currentComment, setCurrentComment] = useState()
  
  const handleComments = ( ) => {
    setComment( [ ...comment, { message: currentComment } ] )
    
  }

  const handleSend = (e) => {
    e.preventDefault()
    handleComments()
    console.log(comment)
  }

  const handleLike = () => {
    setLike( !like )
    like ? setLikes(0) : setLikes(1)
  }

  const handleMessage = () => {
    setMessage(!message)
  }

  return (
    <div className=" flex-col h-[100vh] w-[100vw] flex items-center justify-center bg-slate-500">
      <div className='container flex flex-col items-center justify-center h-[60%] w-[95%] md:h-[45%] my-auto md:w-[40%]'>
        <div>  
          <div className='container bg-slate-900 w-[90%] h-[80%]'>
            <img src={ process.env.PUBLIC_URL + '/assets/prof.jpg' } alt='Post' className='w-full h-full object-fill' />
            <div>
              {`${likes} like`}
            </div>
          </div>
          <div className='flex justify-evenly w-[90%] p-2 mt-3 '>
            {!message ? null : 
              <div className=''>
                { like ? <AiFillLike className='text-[28px] text-blue-800 ' onClick={() => handleLike()} /> : <AiOutlineLike className='text-[28px] ' onClick={() => handleLike()} /> }
              </div>
              }
            <div className=''>
              { message ? <AiOutlineMessage className='text-[28px] ' onClick={ () => handleMessage() } /> :
                <div className='flex'>
                  <button onClick={ () => handleMessage() } className='text-red-900'>X</button>
                  <form className='flex items-center'>
                    <input type="text"  className='border focus:outline-none px-2 mx-1' onChange={(event)=>{setCurrentComment(event.target.value)}}/>
                    <button type='submit'> <AiOutlineSend onClick={(e) =>{handleSend(e)}} className='border bg-green-700 text-[24px] p-1 text-white active:bg-green-300 active:text-green-700'/></button>
                  </form>
                </div> }
            </div>
          </div>
        </div>
      </div>
      <div className='h-[35%] md:h-[20%] m-auto  overflow-y-auto w-[80%] border p-2'>
        <h3 className='text-[16px] font-bold'>Comments</h3>
            {
              comment.map( ( com, index ) => {
                if ( com.message !== undefined ) {
                  return (  
                    <div key={index}>
                      <p className='border rounded-md w-fit my-4 p-1'>{ com.message }</p>
                    </div>
                  )
                } else {
                  return null
                }
              }) 
            }
          </div>
    </div>
  );
}

export default App;
