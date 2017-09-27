class App extends React.Component{
 
  render(){
    return(
      <h1>
        Hello World
        <Greeting club = {"Rob"}/>
       </h1>
    )
  }
}

const Greeting = (props) => {
  const{club} = props;
  return(
    <h1>Hello {club}</h1>
  );
}
ReactDOM.render(
  <App/>,
  document.getElementById('container')
)
