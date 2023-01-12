import MyComponents from "./MyComponents";

const FirstComponent = () => {
    return(
        <div>
            <h1>Meu Primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponents/>
        </div>
    );
};

export default FirstComponent;
