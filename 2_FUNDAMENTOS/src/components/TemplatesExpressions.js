const TemplatesExpressions = () => {

    const name= "Virginia";
    const data = {
        age: 38,
        job: "developer",
    };
    
    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    );
};

export default TemplatesExpressions;