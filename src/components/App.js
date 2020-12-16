import React from 'react';

import Post from './Post';


export default class App extends React.Component{
    render() {
        return(
            <div>
                <Post title="Aprendendo reactJs com o Diogo da rocketSeat"/>
                <Post title="O React funciona a base componentes, o componente é como uma Tag html em que você pode usar mexer no motorzinho debaixo do capô
"/>
                <Post title=" Na propriedade do seu componente react você pode usar {this.props.Nome-Da-propriedade} pra usar a propriedade do seu componente"/>
            </div>
        )
    }

}