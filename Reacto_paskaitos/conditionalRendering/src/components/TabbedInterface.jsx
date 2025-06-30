const tasks = ["Do the dishes", "Clean the kitchen", "Drink coffee"];

const TabbedInteface = () => {
    return(
      <div className="m-7 flex flex-col items-center justify-center gap-2.5">
        <p>Exercise 10</p>
          {features.map((feature, index) => (
            <div key={index} className="mb-2 p-2 bg-blue-300 rounded flex gap-2">
              {feature.name}
              <div>
                    {feature.new ? <div className="bg-green-300 rounded p-1.5">New Feature!</div> : null}
                    {feature.deprecated ? <div className="bg-red-400 rounded p-1.5">Deprecated Feature</div> : null}
                  </div>
            </div>
          ))}
        </div>
    )
  }
  
  export default TabbedInteface;