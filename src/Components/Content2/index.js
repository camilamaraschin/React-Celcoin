function Content2 ({titulo,foto,nome}){
    
    
    return(

<div className="post">
        <h1 className="titulo">{titulo}</h1>
        <img src={foto} alt="{nome}" />
      </div>

    )
}

export default Content2