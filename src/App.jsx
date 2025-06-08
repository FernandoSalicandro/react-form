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
  const [inputCorrente, setInputCorrente] = useState("");
  const [postList, setPostList] = useState(blogPosts);
  const [postInModifica, setPostInModifica] = useState(null);


  //funzioni
  const aggiungiTitolo = () => {
    const newPost = {
      id: Date.now(),
      titolo: inputCorrente,
      contenuto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum exercitationem laudantium amet nisi libero "
    }

    setPostList([...postList, newPost])
    setInputCorrente("")
  }

  const eliminaPost = (postDaEliminare) => {

    const newArr = postList.filter(curPost => curPost.id !== postDaEliminare.id)

    setPostList(newArr)

  }

  const salva = () => {
    const listModificata = postList.map(curPost => {
      if (curPost.id === postInModifica) {
        return { ...curPost, titolo: inputCorrente }
      } return curPost
    })

    setPostList(listModificata);
    setInputCorrente("")
    setPostInModifica(null)


  }

  return (
    <>
      <h1>Benvenuti nel Blog</h1>
      <div className="container">
        <input
          type="text"
          value={inputCorrente}
          onChange={(e) => setInputCorrente(e.target.value)} />

        <button onClick={aggiungiTitolo}>aggiungi Articolo</button>
      </div>



      <div className="container">

        <ul>
          {postList.map(curPost => {
            if (curPost.id !== postInModifica) {
              return (
                <li key={curPost.id}>{curPost.titolo}

                  <div className='wrapper'>

                    <button onClick={() => eliminaPost(curPost)}><i className="fa-solid fa-trash-can trash"></i>
                    </button>

                    <button onClick={() => { setPostInModifica(curPost.id); setInputCorrente(curPost.titolo) }}>
                      <i className="fa-solid fa-pen-to-square edit"></i>
                    </button>


                  </div>


                </li>
              )
            } else {
              return (
                <>
                 <input type="text" value={inputCorrente} onChange={(e) => setInputCorrente(e.target.value)} />
                  <button onClick={() => salva()}>salva modifica</button>
                </>
                 
                  
                

              )
            }


          })}
        </ul>


      </div>



    </>
  )
}

export default App
