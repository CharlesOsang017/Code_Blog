import { useState } from "react"

const Category = () => {
    const [category, setCategory] = useState('startup')
  return (
    <div className="w-[200px] mt-6 mb-6">
    <label className="block mb-1 font-medium">Blog Category</label>
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full border rounded px-3 py-2 mt-1"
    >
     
      <option value="startup">startup</option>
      <option value="technology">technology</option>
      <option value="programming">programming</option>
      <option value="sports">sports</option>
      <option value="lifestyle">lifestyle</option>
    </select>
  </div>
  )
}

export default Category