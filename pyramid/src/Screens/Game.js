import React, { Component } from 'react';
import { Image, ImageBackground, Modal, StyleSheet, ScrollView , View, Button, Text, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import background from '../../assets/Background.png';
import BackgroundCard from '../../assets/BackgroundCard.png';

export default class Game extends Component{
  constructor(props){
    super(props)
    this.state = {
      pyramid_height : props.route.params.pyramid_height,
      users: props.route.params.users.players,
      hard: props.route.params.hard,
      card_list_users: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      card_list_game: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      structure: [],
      remaining_cards: 0,
      disabledButtons: [],
      playedButtons: [],
      modalCard: false,
      textModal: "",
      userModal: "",
      activeCard: ""
    }
  }

  get cardImage() {
    switch (this.state.activeCard) {
      case "A":
        return require('../../assets/Cards/A.png');
      case "2":
        return require('../../assets/Cards/2.png');
      case "3":
        return require('../../assets/Cards/3.png');
      case "4":
        return require('../../assets/Cards/4.png');
      case "5":
        return require('../../assets/Cards/5.png');
      case "6":
        return require('../../assets/Cards/6.png');
      case "7":
        return require('../../assets/Cards/7.png');
      case "8":
        return require('../../assets/Cards/8.png');
      case "9":
        return require('../../assets/Cards/9.png');
      case "10":
        return require('../../assets/Cards/10.png');
      case "J":
        return require('../../assets/Cards/J.png');
      case "Q":
        return require('../../assets/Cards/Q.png');
      case "K":
        return require('../../assets/Cards/K.png');
    }
  }


  componentDidMount(){
    const cards = this.setUserCards();
    this.setStructure(cards);
    this.state.disabledButtons.push(`${0}.${0}`)
  }

  setUserCards(){
    if (this.state.card_list_users.length === 0){
        alert("No quedan más cartas")
    }
    else{
      user_list = this.state.users
      new_user_list = []
      let user_cards = []
      let new_card_list_cleaned = this.state.card_list_users
      user_list.forEach(user => {
        const randomCard1 = new_card_list_cleaned[Math.floor(Math.random()*new_card_list_cleaned.length)];
        const randomCard2 = new_card_list_cleaned[Math.floor(Math.random()*new_card_list_cleaned.length)];
        new_user_list = new_user_list.concat([{ "name": user.name , cards: [randomCard1,randomCard2], drinks: 0 }])
        user_cards.push(randomCard1)
        user_cards.push(randomCard2)
        // Remove cards from list
        const new_card_list = new_card_list_cleaned;
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
        new_card_list_cleaned = new_card_list_clean
      });
      this.setState({
        users: new_user_list
      })
      return user_cards
    }
  };

  setStructure(cards){
    // To drink more to set structure only use cards that users have
    // This to be hard mode in new version. Testing now
    // To back use card_list_game and no cards var
    // OBS: It's good when play more than 7 players
    
    const structure_array = [];
    if (this.state.hard) {
      const height = this.state.pyramid_height;
      let type_card = false;
      let number_of_cards = 0;
      let card_list = cards;
      for (let index = height; index > 0; index--) {
          let row = []
          for (let index_row = index; index_row > 0; index_row--) {
              // Get Random card associated
              let randomCard = card_list[Math.floor(Math.random()*card_list.length)];
              row.push(["X", randomCard, type_card])
              number_of_cards = number_of_cards + 1
          }
          type_card = !type_card
          structure_array.push(row)
      }
      this.setState({structure: structure_array, number_of_cards: number_of_cards})
    }else{
      const height = this.state.pyramid_height;
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
    }
    let card_list = []
    for (let i = 0; i < structure_array.length; i += 1) {
      for (let j = 0; j < structure_array[i].length; j += 1) {
        if (i === 0 && j === 0) {
          continue
        }else{
          card_list.push(`${i}.${j}`)
        }
      }
    }
    this.setState({
      disabledButtons: card_list
    })
  }

  addDrinks(name){
    user_list = this.state.users
    new_user_list = []
    user_list.forEach(user => {
      let newDrinks = user.drinks
      if (user.name === name) {
        newDrinks = newDrinks + 1
        new_user_list.push({ "name": user.name , cards: user.cards, drinks: newDrinks })
      }else{
        new_user_list.push({ "name": user.name , cards: user.cards, drinks: user.drinks })
      }
      
    });
    this.setState({
      users: new_user_list
    })
  }

  playCard(nDrinks, id, card, type_card){
    this.setState({
      activeCard: card
    })
    const drink_users = []
    this.state.users.forEach(user => {
      if (user.cards.includes(card)) {
        drink_users.push(user.name)
        if (type_card) {
          this.addDrinks(user.name)
        }                
      }
    });
    if (drink_users.length > 0) {
      if (type_card) {
        if (nDrinks === 0) {
          this.setState({
            textModal: "BEBEN "+ (nDrinks + 1) + " TRAGO:",
            userModal: drink_users.join(", "),
            modalCard: true
          })
        } else {
          this.setState({
            textModal: "BEBEN "+ (nDrinks + 1) + " TRAGOS:",
            userModal: drink_users.join(", "),
            modalCard: true
          })
        }
      }else{
        if (nDrinks === 0) {
          this.setState({
            textModal: "REGALAN "+ (nDrinks + 1) + " TRAGO:",
            userModal: drink_users.join(", "),
            modalCard: true
          })
        } else {
          this.setState({
            textModal: "REGALAN "+ (nDrinks + 1) + " TRAGOS:",
            userModal: drink_users.join(", "),
            modalCard: true
          })
        }
      }      
    }else{
      this.setState({
        textModal: "Nadie Bebe",
        userModal: "",
        modalCard: true
      })
    }
    // Change number of remaining cards
    this.setState({
      number_of_cards: this.state.number_of_cards - 1
    })
    // Disable card
    const playedCard = this.state.playedButtons.push(id)
    const removeCard = this.state.disabledButtons.shift()
  }

  isDisabled(id){
    if (this.state.playedButtons.includes(id) ) {
      return true
    }
    else{
      if (this.state.disabledButtons.includes(id)) {
        return true
      }else{
        return false
      }
    }
  }

  render(){
    const structure_array = this.state.structure
    const widthArr = new Array(structure_array.length)
    const tableData = []
    for (let i = 0; i < structure_array.length; i += 1) {
      const rowData = [];
      for (let j = 0; j < structure_array[i].length; j += 1) {
        const var_id = `${i}.${j}`
        widthArr[i] = 35
        rowData.push(
        <View style={styles.button} >
          <Button
            id = {var_id}
            key = {var_id}
            ref = {(id) => id}
            disabled = {this.isDisabled(var_id)}
            value={structure_array[i][j][0]}
            title="X"
            onPress={() => 
              this.playCard(i ,var_id,structure_array[i][j][1],structure_array[i][j][2])
            }
          >
          <Text>X</Text>
          </Button>
        </View>
        );
      }
      tableData.push(rowData);
    }
    return(
      <View style={styles.containerTable}>
        <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
        <ScrollView horizontal={true}>
          <Modal            
            animationType = {"fade"}  
            transparent = {true}  
            visible = {this.state.modalCard}  
          >  
            <View style = {styles.modal}>  
            <ImageBackground source={BackgroundCard} resizeMethod="resize" style={styles.image_modal}>
              <Text style = {{...styles.textModal, top: -30, left: -15, fontSize: 30}}>{this.state.textModal}</Text>
              <Text style = {{...styles.textModal, top: -30}}>{this.state.userModal}</Text>
              <Image fadeDuration={3} source={this.cardImage} style={{width:210, height:330, top: -10}} />
              <TouchableOpacity
                onPress = {() => {this.setState({ modalCard:!this.state.modalCard})}}
                style={styles.buttonClose}>
                <Text style={{ fontSize: 20, color: '#474442' }}>CERRAR</Text>
              </TouchableOpacity>
            </ImageBackground>
            </View>  
          </Modal>
          <View style={{top: 100}}>
              <Table>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={widthArr}
                      style={[styles.row]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Statistics', {users: this.state.users})}
          style={styles.buttonSubmit}>
          <Text style={{ fontSize: 20, color: '#474442' }}>¿Quien bebió más?</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  containerTable: { 
    alignItems:"center",
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
    fontWeight: '100'
  },
  row: { 
    height: 40,
    justifyContent: 'center',
    marginBottom: 3,
  },
  button: {
    flex:1,
    marginRight: 3
  },  
  modal: {  
    justifyContent: 'space-around',  
    alignItems: 'center',   
    height: 720 ,  
    width: '90%',  
    borderWidth: 1,  
    borderColor: '#ff887f',    
    marginTop: 35,  
    marginLeft: 20,  
  },  
  textModal: {
    fontSize: 25,
    color: '#474442',  
    marginTop: 30,
    textAlign: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: 'center', 
    width: "120%",
    height: "100%"
  },
  image_modal: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: 'center', 
    width: "100%",
    height: "100%"
  },
  buttonSubmit: {
    marginTop: 30,
    padding: 10,
    alignSelf:"center",
    borderColor: '#474442',
    borderWidth: 2,
    top: -150
  },
  buttonClose: {
    padding: 5,
    alignSelf:"center",
    borderColor: '#474442',
    borderWidth: 2,
    top: 10
  }
});