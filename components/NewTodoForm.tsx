import { useState } from "react"

const NewTodoForm = () => {
    const [state, updateState] = useState('')

    return (
        <form action="">
            <div>
                <input title="input" type="text" />
            </div>
        </form>
    )
}

export default NewTodoForm
