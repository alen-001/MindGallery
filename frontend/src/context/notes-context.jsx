import { useContext } from "react";
function NotesContext({children}) {
    const [notes, setNotes] = useState([]);
    const addNote = (note) => {
        setNotes(prevNotes => [...prevNotes, { ...note, id: Date.now() }])
    }
    return(
        <div>
            {children}
        </div>
    )
}

export default NotesContext
