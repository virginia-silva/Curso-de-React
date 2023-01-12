/*const Challenge = () => {

    const Desafio2 = (x) => {
        if(x){

            return <h1>10</h1>;

        }else{

            return <h1>20</h1>;

        }
    };
    return(
        <div>
            <div>
                <h2>Desafio 2</h2>
            </div>

        {Desafio2(true)}
        {Desafio2(false)}

            <div>
            <button onClick={() => console.log(10+20)}>Somar</button>
            </div>

        </div>
    );
    
};
export default Challenge;*/

const Challenge = () => {
    const a = 10
    const b = 20

  return (
    <div>
        <p>A:{a}</p>
        <p>B:{b}</p>
        <button onClick={() => console.log(a + b)}>Somar</button>
    </div>
  )
}

export default Challenge