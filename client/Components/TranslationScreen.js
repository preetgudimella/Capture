import React from 'react'
import { Button, Clipboard, StyleSheet, Text, View } from 'react-native';


export default class TranslationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.getTranslation = this.getTranslation.bind(this)
    this._setContent = this._setContent.bind(this)
  }

  getTranslation() {
    const defaultText = `Please take a new picture ${'\n'} or retake the current one`
    return this.props.navigation.getParam('translation', defaultText)
  }
  _setContent() {
    Clipboard.setString(this.getTranslation());
  }

  render() {
    return (
      <View style={[styles.container, styles.translation]}>
        <Text style={styles.translationTitle}>{'\n'}Your Translated Text{'\n'}</Text>
        <Text style={styles.translationText}>{this.getTranslation()}{'\n'}</Text>
        <Button title="Copy" onPress={this._setContent}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  translationTitle: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'orange',
    textDecorationLine: 'underline'
  },
  translationText: {
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'orange',
    includeFontPadding: true
  }
})
