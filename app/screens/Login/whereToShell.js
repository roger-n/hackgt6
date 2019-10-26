import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

export default class whereToShell extends Component {
    
    constructor () {
        super()
        this.state = { result: 'Result of editing should appear here.' }
      }

    render() {
        return (
            <View>
                <Text>{this.state.result}</Text>
                    <TextInput
                        onSubmitEditing={({ nativeEvent }) => this.setState({ result: nativeEvent.text })}/>
            </View>
            ); 
    }
 
}
