import { HomeContainer , IntroStyle , CoffeList} from "./style"
import coffe from "../../assets/images/structure/coffe-intro.svg"
import { ShoppingCart , Package , Coffee, Timer} from "phosphor-react"
import { defaultTheme } from "../../styles/themes/default"
import { listCoffes } from "../../fakeAPI/dataBase/coffes"
import {useState} from "react"
import ButtonFilter from "./components/buttonFilter"
import CoffeItem from "./components/CoffeItem"


function Home() {
  const [listCoffesState , setListCoffesState] = useState(listCoffes)
  const listOfFiltersStatic = [
    'Tradicional',
    'Especial',
    'Com leite',
    'Alcoólico',
    'Gelado'
  ]
  
  const [listOfFilters, setListOfFilters] = useState<string[]>([])

  function filterListCoffes(text:string){
    var listOfFiltersCopy = [...listOfFilters]

    if (listOfFiltersCopy.includes(text)){
      listOfFiltersCopy = listOfFiltersCopy.filter((item) => item !== text);
    } else {
      listOfFiltersCopy.push(text)
    }
    setListOfFilters(listOfFiltersCopy)

    var listCoffesFiltered = [...listCoffes]
    for(var i = 0;i < listOfFiltersCopy.length ; i++){
      listCoffesFiltered = listCoffesFiltered.filter(item => item.type.includes(listOfFiltersCopy[i]))
    }
    setListCoffesState(listCoffesFiltered)
  }
  
  return (
    <HomeContainer>
        <IntroStyle>
          <div className="container">
            <div>
              <div>
                <h1>
                  Encontre o café perfeito para qualquer hora dia
                </h1>
                <p className="text-l">
                  Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>
                <ul>
                  <li>
                    <div className="circle cart">
                      <ShoppingCart weight="fill" color={defaultTheme.background}/>
                    </div>
                    <p className="text-m">Compra simples e segura</p>
                  </li>
                  <li>
                    <div className="circle box">
                      <Package weight="fill" color={defaultTheme.background}/>
                    </div>
                    <p className="text-m">Entrega rápida e rastreada</p>
                  </li>
                  <li>
                    <div className="circle clock">
                      <Timer weight="fill" color={defaultTheme.background}/>
                    </div>
                    <p className="text-m">Embalagem mantém o café intacto</p>
                  </li>
                  <li>
                    <div className="circle coffe">
                      <Coffee weight="fill" color={defaultTheme.background}/>
                    </div>
                    <p className="text-m">O café chega fresquinho até você</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img src={coffe}></img>
            </div>
          </div>
        </IntroStyle>

        <CoffeList>
          <div className="container">
            <header>
              <h2>
                Nossos cafés
              </h2>
              <ul>
                {
                  listOfFiltersStatic.map((item) => 
                    <ButtonFilter key={item} text={item} handleFilterListCoffes={() => filterListCoffes(item)}/>
                  )
                }
              </ul>
            </header>
            <ul>
              {
                listCoffesState.map(coffee => 
                  <CoffeItem coffe={coffee} key={coffee.name}/>
                )
              }
            </ul>
          </div>
        </CoffeList>
    </HomeContainer>
  )
}

export default Home