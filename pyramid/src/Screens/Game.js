import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Game extends Component{
  constructor(props){
    super(props)
    this.state = {
      pyramid_height : props.route.params.pyramid_height,
      users: props.route.params.users.players,
      card_list_users: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      card_list_game: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      structure: [],
      remaining_cards: 0
    }
  }

  componentDidMount(){
    this.setUserCards();
    this.setStructure();
  }

  setUserCards(){
    if (this.state.card_list_users.length === 0){
        alert("No quedan más cartas")
    }
    else{
      user_list = this.state.users
      new_user_list = []
      user_list.forEach(user => {
        const randomCard1 = this.state.card_list_users[Math.floor(Math.random()*this.state.card_list_users.length)];
        const randomCard2 = this.state.card_list_users[Math.floor(Math.random()*this.state.card_list_users.length)];
        new_user_list = new_user_list.concat([{ "name": user.name , cards: [randomCard1,randomCard2], drinks: 0 }])

        // Remove cards from list
        const new_card_list = this.state.card_list_users;
        for (let index = 0; index < new_card_list.length; index++) {
            if ( randomCard1 === new_card_list[index] ) {
                delete new_card_list[index]
                break
            }
        }
        for (let index = 0; index < new_card_list.length; index++) {
            if ( randomCard2 === new_card_list[index] ) {
                delete new_card_list[index]
                break
            }
        }
        // Remove undefined items
        const new_card_list_clean = []
        for (let index = 0; index < new_card_list.length; index++) {
            if ( new_card_list[index] !== undefined ) {
                new_card_list_clean.push(new_card_list[index])
            }
        }
        this.setState({
          card_list_users: new_card_list_clean
        })
      });
      this.setState({
        users: new_user_list
      })
    }
  };

  setStructure(){
    const height = this.state.pyramid_height;
    const structure_array = [];
    let type_card = false;
    let number_of_cards = 0;
    let card_list = this.state.card_list_game;
    for (let index = height; index > 0; index--) {
        let row = []
        for (let index_row = index; index_row > 0; index_row--) {
            // Get Random card associated
            let randomCard = card_list[Math.floor(Math.random()*card_list.length)];
            row.push(["X", randomCard, type_card])
            number_of_cards = number_of_cards + 1
            // Remove cards from list
            const new_card_list = card_list;
            for (let index = 0; index < new_card_list.length; index++) {
                if ( randomCard === new_card_list[index] ) {
                    delete new_card_list[index]
                    break
                }
            }
            // Remove undefined items
            const new_card_list_clean = []
            for (let index = 0; index < new_card_list.length; index++) {
                if ( new_card_list[index] !== undefined ) {
                    new_card_list_clean.push(new_card_list[index])
                }
            }
            card_list = new_card_list_clean
        }
        type_card = !type_card
        structure_array.push(row)
    }
    this.setState({
      card_list_game: card_list
    })
    this.setState({structure: structure_array, number_of_cards: number_of_cards})
    console.log(structure_array)
  }
  
  render(){
    return(
      <View>
        <Text>{this.state.pyramid_height}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
