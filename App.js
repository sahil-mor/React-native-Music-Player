import React, { Component } from "react";
import {  StyleSheet, Text, View,ScrollView} from "react-native";
import {Audio} from 'expo-av'
import {Button} from "native-base"
var songs = {
  moment : require("./assets/moment.mp3"),
  gumshuda : require("./assets/gumshudda.mp3"),
  usool : require("./assets/usool.mp3"),
  ayeJaani: require("./assets/ayeJaani.mp3"),
  badnaamRaja : require("./assets/badnaamRaja.mp3"),
  goldDigger : require("./assets/goldDigger.mp3"),
  mahool : require("./assets/mahool.mp3"),
  memories : require("./assets/memories.mp3"),
  sheMoveIt : require("./assets/sheMoveItlike.mp3"),
  sceneMein : require("./assets/sceneMein.mp3"),

  voidKonH : require("./assets/voidKonH.mp3"),
  seedhaPahadSe : require("./assets/SeedaPahadSe.mp3"),
  rapKaMdaya : require("./assets/rapKaMdaya.mp3"),
  soloRide : require("./assets/soloRide.mp3"),
  bekhayali : require("./assets/bekhayali.mp3"),

  acidAttack : require("./assets/acidAttack.mp3"),
  akelaChalo : require("./assets/akelaChalo.mp3"),
  milesToGo : require("./assets/milesToGo.mp3"),
  politics : require("./assets/politics.mp3"),
  rastaMaan : require("./assets/rastaMaan.mp3"),
  suicide : require("./assets/suicide.mp3"),
  suitKarda : require("./assets/suitKarda.mp3"),
  woPahliBaar : require("./assets/woPahliBaar.mp3"),
  mRavaa : require("./assets/mRavaa.mp3"),

  nakliInsaan : require("./assets/rcr/NakliInsaan.mp3"),
  aajaMereNedeNede : require("./assets/rcr/AajaMereNedeNede.mp3"),
  aeDilhMuskil : require("./assets/rcr/AeDilHmuskil.mp3"),
  dilChupChup : require("./assets/rcr/dilChupChap.mp3"),
  forDad : require("./assets/rcr/forHisDad.mp3"),
  harNiManiMaine : require("./assets/rcr/HarNahiMani.mp3"),
  terrorism : require("./assets/rcr/terrorism.mp3"),
  tumHoJaali : require("./assets/rcr/tumHoJaali.mp3"),
  pagloKaPagal : require("./assets/rcr/PagloKaPagal.mp3")
}
const listBackgroundColors = {
  1 : "#B83227",
  2 : "#47535E",
  3 : "#E5B143",
  4 : "#6AB04A",
  5 : "#487EB0",
  6 : "#30336B",
  7 : "#2475B0",
  8 : "#333945",
  9 : "#E74292",
  10 : "#2B2B52"
}
const soundObject = new Audio.Sound();
export default class HomeActivity extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        status : 'Pause Song',isStarted : false
     }
   }
   async playSong(song){
   soundObject
   .unloadAsync()
   .then(async ()=>{
    path = songs[song]
    await soundObject.loadAsync(path)
    await soundObject
    .playAsync()
    .then( playbackStatus => {
      this.setState({ status : "Pause Song" })
      this.setState({ isStarted : true })
      console.log(playbackStatus.playableDurationMillis)
      setTimeout(() => {
        soundObject.unloadAsync()
      },60000)
    } )
   })
    
   }
   async stopSong(){
     if(this.state.isStarted){
      if(this.state.status == "Pause Song"){
        soundObject.pauseAsync()
        status = "continue"
        this.setState({ status : "Continue Song" })
      }else{
        soundObject.playFromPositionAsync();
        status = "pauseIt"
        this.setState({ status : "Pause Song" })
      }
     }
   }
  render() {
    return (
      <ScrollView>
       <View style={styles.container}>
        <View style={styles.Container}>
          <Text style={[styles.singer,{ marginTop : "3%" }]}> King </Text>
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[1] }]} onPress={ ()=> this.playSong('moment')}>
              <Text style={styles.SongText}> Moments </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[2] }]}  onPress={ ()=> this.playSong('badnaamRaja')}>
              <Text style={styles.SongText}> Badnaam Raja </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[3] }]} onPress={ ()=> this.playSong('goldDigger')}>
              <Text style={styles.SongText}> Gold Digger </Text>
            </Button>
          </View>  
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[4] }]} onPress={ ()=> this.playSong('memories')}>
              <Text style={styles.SongText}> Memories </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[5] }]}  onPress={ ()=> this.playSong('gumshuda')}>
              <Text style={styles.SongText}> Gumshuda </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[6] }]} onPress={ ()=> this.playSong('usool')}>
              <Text style={styles.SongText}> Usool </Text>
            </Button>
          </View>  
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[7] }]} onPress={ ()=> this.playSong('ayeJaani')}>
              <Text style={styles.SongText}> Aye Jaani </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[8] }]}  onPress={ ()=> this.playSong('mahool')}>
              <Text style={styles.SongText}> Mahool </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[9]}]} onPress={ ()=> this.playSong('sheMoveIt')}>
              <Text style={styles.SongText}> She Move It </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[10] }]} onPress={ ()=> this.playSong('sceneMein')}>
              <Text style={styles.SongText}> Scene Main </Text>
            </Button>
          </View>  
        </View>
        <View style={styles.Container}>
          <Text style={styles.singer}> EPR </Text>
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[1] }]} onPress={ ()=> this.playSong('acidAttack')}>
              <Text style={styles.SongText}> Agnipath </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[2] }]}  onPress={ ()=> this.playSong('akelaChalo')}>
              <Text style={styles.SongText}> Akela Chalo Re </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[3] }]} onPress={ ()=> this.playSong('milesToGo')}>
              <Text style={styles.SongText}> Miles To Go </Text>
            </Button>
          </View>  
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[4] }]} onPress={ ()=> this.playSong('politics')}>
              <Text style={styles.SongText}> Politics </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[5] }]}  onPress={ ()=> this.playSong('woPahliBaar')}>
              <Text style={styles.SongText}> Wo Pahli Baar </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[6] }]} onPress={ ()=> this.playSong('suitKarda')}>
              <Text style={styles.SongText}> Suit Suit Karda </Text>
            </Button>
          </View>  
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[7] }]} onPress={ ()=> this.playSong('suicide')}>
              <Text style={styles.SongText}> Aatmhatya </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[8] }]}  onPress={ ()=> this.playSong('rastaMaan')}>
              <Text style={styles.SongText}> Rasta Maan </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[9] }]} onPress={ ()=> this.playSong('mRavaa')}>
              <Text style={styles.SongText}> M Ravaa </Text>
            </Button>
          </View>  
        </View>      
        <View style={styles.Container}>
          <Text style={styles.singer}> RCR </Text>
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[1] }]} onPress={ ()=> this.playSong('nakliInsaan')}>
              <Text style={styles.SongText}> Nakli Bna Insaan </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[2] }]}  onPress={ ()=> this.playSong('aajaMereNedeNede')}>
              <Text style={styles.SongText}> Aaja Mere Nede Nede </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[3] }]} onPress={ ()=> this.playSong('aeDilhMuskil')}>
              <Text style={styles.SongText}> Ae Dil H Muskil </Text>
            </Button>
          </View>  
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[4] }]} onPress={ ()=> this.playSong('dilChupChup')}>
              <Text style={styles.SongText}> Dil Chupp Chaap </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[5] }]}  onPress={ ()=> this.playSong('harNiManiMaine')}>
              <Text style={styles.SongText}> Haar Ni Mani </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[6] }]} onPress={ ()=> this.playSong('terrorism')}>
              <Text style={styles.SongText}> Terrorism </Text>
            </Button>
          </View>  
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[7] }]} onPress={ ()=> this.playSong('tumHoJaali')}>
              <Text style={styles.SongText}> Tum Ho Jaali </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[8] }]}  onPress={ ()=> this.playSong('mahool')}>
              <Text style={styles.SongText}> Tribute To Dad </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[9] }]} onPress={ ()=> this.playSong('pagloKaPagal')}>
              <Text style={styles.SongText}> Paglo Ka Pagal </Text>
            </Button>
          </View>  
        </View>
        <View style={styles.Container}>
          <Text style={styles.singer}> VOID </Text>
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[1] }]} onPress={ ()=> this.playSong('seedhaPahadSe')}>
              <Text style={styles.SongText}> Seede Pahad Se </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[2] }]}  onPress={ ()=> this.playSong('bekhayali')}>
              <Text style={styles.SongText}> Bekhayali </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[3] }]} onPress={ ()=> this.playSong('soloRide')}>
              <Text style={styles.SongText}> Solo Ride </Text>
            </Button>
          </View>  
          <View style={styles.song}>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[4] }]} onPress={ ()=> this.playSong('rapKaMdaya')}>
              <Text style={styles.SongText}> Rap Ka M Daya </Text>
            </Button>
            <Button style={[styles.songName,{ backgroundColor : listBackgroundColors[5] }]}  onPress={ ()=> this.playSong('voidKonH')}>
              <Text style={styles.SongText}> Void Kon H </Text>
            </Button>
          </View>  
        </View>
        <View style={styles.stopSong}>
            <Button style={{backgroundColor : "#2C3335",width : "80%",marginLeft : "10%"}} onPress={()=> this.stopSong()  }>
              <Text style={{paddingLeft : "27%",fontSize : 25,color : "white"}}> {this.state.status} </Text>
            </Button>
        </View>
   
       </View>
      </ScrollView>
     
    );
  }
}

const styles = StyleSheet.create({
   container : {
      backgroundColor : "black"
   }, 
   Container : {
     marginTop : "6%",marginLeft : "2%"
   } ,
  songName : {
    flex : 1,
  },
  singer : {
    fontSize : 40,color : "white",textAlign : "center"
  },
  song : {
    flexDirection : "row",marginTop : "2%"
  },
  SongText : {
    color : "white",fontSize : 15,paddingLeft : "3%"
  },
  stopSong : {
    marginTop : "5%"
  }
}
)