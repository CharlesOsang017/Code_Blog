import { CloudUpload} from 'lucide-react'
import { Button } from '../ui/button'
import MyEditor from './Editor'
import Category from './Category'

const AddBlog = () => {
  return (
    <div className='w-full '>    
      <div>
        <h2>Upload Thumbnail</h2>
        <div>
        <CloudUpload /> 
        <p>upload</p>
        </div>     
      </div>
      <div>
        <h2>Blog Title</h2>
        <input type="text" placeholder='type here...'/>
      </div>
      <div>
        <h2>Blog Description</h2>
        <MyEditor />
      </div>
      <Category />
      <Button className='cursor-pointer'>Add Blog</Button>
    </div>
  )
}

export default AddBlog