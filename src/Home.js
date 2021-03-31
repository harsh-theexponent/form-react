import React from 'react';
import './App.css';
//Import link to routing to other components
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Home extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        data: []
              }
      }
      componentDidMount(){
        const value=localStorage.getItem('myvalue');
        console.log(value);

        const fd=new FormData();
        fd.append('email',value);

        axios.post('http://localhost:8080/form-react/view.php',fd).then(res => 
        {
        
        this.setState({data: res.data});
           }); 
        
        }
  render() {
   
    return (
     
      <div className="maincontainer">
        
        <h1 className="mr-5 ml-5 mt-5">DashBoard</h1>
        <div className="container mb-5 mt-5 text-left">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                 
                  <td>{result.id}</td>
                  <td>{result.email}</td>
                  <td>{result.name}</td>
                  
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
        
            
      </div>
    
      </div>
      
)
};
}
export default Home;