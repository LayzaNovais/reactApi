import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export default function index() {
     return(
        <main>
            <h1>
                Cor Primária
            </h1>
            <p>
                Escolha uma cor <input type='text' value={cor} onChange={e => setSelectionRange(e.target.value)}></input>
            </p>
            <button> 
               Verificar
            </button>
            <p>
                Essa cor é primaria 
            </p>


        </main>
     )

}