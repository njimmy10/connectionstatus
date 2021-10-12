import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button} from "react-native";
import NetInfo from "@react-native-community/netinfo";


 class ConnectionStatus extends Component {

  NetInfoSubcribition = null;

  constructor(props) {
    super(props);
    this.state = {
      connction_status: false,
    };
  }

  componentDidMount() {

    this.NetInfoSubcribition = NetInfo.addEventListener(
   this._handleConnectivityChange,
    );

  }

  componentWillUnmount(){
    this.NetInfoSubcribition && this.NetInfoSubcribition();
  }

  _handleConnectivityChange = (state) => {
    this.setState({ connction_status: state.isConnected })
  }

  render() {

	const {text, textColor, backgroundColor, activate} = this.props;

	const Styles = StyleSheet.create({
		notArea: {
		  backgroundColor: backgroundColor,
		  height: 30,
		  justifyContent: 'center',
		  alignItems: 'center',
		  flexDirection: 'row',
		  position: 'absolute',
		  width: 375,
		},
		textStyle: {
		  color: textColor,
		  fontSize: 18,
		  fontWeight: "bold",
		}
	  });
	  

    if (activate == false ){
      return (
		  <View style={Styles.notArea}>
			  <Text style={Styles.textStyle}>{text}</Text>
		  </View>
	  );
	  }
      if (this.state.connction_status && activate ) {
		  return (
			  <View>
			  </View>
		  );
		  
	  } else { return (
		  <View style={Styles.notArea}>
			  <Text style={Styles.textStyle}>{text}</Text>
		  </View>
	  );
		  
	  }
    }
    
  }



export default ConnectionStatus;