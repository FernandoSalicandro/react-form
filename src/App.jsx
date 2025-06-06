// **Esercizio

// **Milestone 2**
// Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
// **BONUS**
// 1. Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
// 2. Implementare la funzionalità di modifica del titolo di un post.
// 3. Fare refacotring, estrapolando qualche componente
// Buon lavoro!




import { useState } from 'react'


const blogPosts = [
  {
    id: 1717668000000,
    titolo: "Benvenuti nel nostro blog",
    contenuto: "Scopri le ultime novità, consigli e storie direttamente dalla nostra redazione."
  },
  {
    id: 1717668005000,
    titolo: "Come coltivare un orto biologico",
    contenuto: "Una guida pratica per iniziare a coltivare ortaggi sani e naturali nel proprio giardino."
  },
  {
    id: 1717668010000,
    titolo: "5 ricette con il miele da provare subito",
    contenuto: "Dalle tisane ai dolci: ecco alcune idee semplici e gustose per usare il miele in cucina."
  },
  {
    id: 1717668015000,
    titolo: "La vita in campagna: un ritorno alla natura",
    contenuto: "Un racconto quotidiano fatto di animali, stagioni e silenzio rigenerante."
  },
  {
    id: 1717668020000,
    titolo: "Perché scegliere prodotti a km zero",
    contenuto: "Un approfondimento sui vantaggi ambientali ed economici del consumo locale."
  }
];

function App() {
  const [newArticle, setNewArticle] = useState("")
  const [newBlogPosts, setNewBlogPosts] = useState(blogPosts)
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
        id: Date.now(),
        titolo: newArticle,
        contenuto: ""
    }
    const copyArr = [newPost, ...newBlogPosts]
    setNewBlogPosts(copyArr)
    setNewArticle("")
  }

  const handleDelete = (idToDelete) => {
    const filteredPosts = newBlogPosts.filter(post => post.id !== idToDelete)
    setNewBlogPosts(filteredPosts)
  }


  return (
    <>
      <div className="listGroup container">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newArticle}
            onChange={(event) => setNewArticle(event.target.value)}
            autoComplete='off'
          />
          <button>Aggiungi Articolo</button>
        </form>
        
        <ul>
          {newBlogPosts.map(singlePost => {
            return (
              <li key={singlePost.id}>
                {singlePost.titolo}
                <span>
                  <button onClick={() => handleDelete(singlePost.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}


export default App
