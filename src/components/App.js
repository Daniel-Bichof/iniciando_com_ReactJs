import React from 'react';

import Post from './Post';


export default class App extends React.Component{
    render() {
        return(
            <div>
                <Post title="Aprendendo reactJs com o Diogo da rocketSeat"/>
                <Post title="Você pode passar uma propriedade do seu componente React"/>
                <Post title="Com a propriedade do seu componente react vc coloca {this.props.propriedade}"/>
            </div>
        )
    }

}