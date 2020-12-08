import React from 'react';

class Test extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      user : null

    }
  }

  async componentDidMount(){


  //NOTE VERIFIE DANS LA BDD

  //si dans la base, si non on fetch majdi , insert dans la bd et res.send
    const responsebd = await fetch("http://localhost:4242/users/majdi")
    const respbdjson = responsebd.json()
    respbdjson.body.lens

    const responseapi = await fetch("https://api.github.com/users/majdi")
    const infos = await responsedb.json()
    console.log(infos)

  }



  render(){

   return (
        <div >

        BONJOUR
        </div>

    );
  }






  }
export default Test;