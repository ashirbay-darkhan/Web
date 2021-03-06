import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `http://localhost/test/api/post/read.php`
            )

            console.log(result.data.data);
            setItems(result.data.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [])

    const usersComp = items.map(item => (
                        <div class="card" key={item.id}>
                            <div class="card-body">
                            {item.author}
                            </div>
                        </div>
                        ))

    return (
        <div>
            { isLoading ? (<h1>Loading...</h1>) : usersComp }
        </div>
    )
}

export default Users