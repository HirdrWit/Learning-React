class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      numCookies:1
    }
    this.handleCookieUpdate = this.handleCookieUpdate.bind(this);
  }
  handleCookieUpdate(numCookies){
    this.setState({
      numCookies
    });
  }
  render(){
    const {numCookies} = this.state;
    return(
      <div>
        <Greeting/>
        <CookieCounter numCookies = {numCookies}/>
        <AddRemoveCookie 
          numCookies = {numCookies}
          onCookieUpdate={this.handleCookieUpdate}
          />
       </div>
    )
  }
}
class AddRemoveCookie extends React.Component{
  render(){
    const {onCookieUpdate, numCookies} = this.props;
    return(
    <div>
        <button onClick = { ()=> onCookieUpdate(numCookies +1) }>Add </button>
        <button onClick = { ()=> onCookieUpdate(numCookies -1) }>Remove </button>
        </div>
    )
  }
}
const CookieCounter = ({numCookies=0})=> {
  return(
    <h3> 
      We have {numCookies} {numCookies ===1 ? 'cookie':'cookies'}.
    </h3>
  )
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
