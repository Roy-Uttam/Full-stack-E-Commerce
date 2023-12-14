import React, { useEffect, useState } from 'react'
import ReactDropdown from 'react-dropdown';

const AdminCategory = () => { const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${window.baseUrl}Category`)
          .then((res) => {
            if (res.status === 200) {
              return res.json()
            }
            else {
              throw new Error(res.status)
            }
          })
          .then(data => setCategories(data.category)
          )
          .catch((error) => {
            console.log(error);
          })
      }, []);


  return (
    <div>

          <label htmlFor="" className='input_field_label'>Category</label>
          <ReactDropdown options={categories} value={0} placeholder="Select an option" />


    </div>
  )
}

export default AdminCategory