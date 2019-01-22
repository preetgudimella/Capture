import React from 'react'
import { Button, Clipboard, ImageBackground, StyleSheet, Text, View } from 'react-native';


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
      <View style={[styles.container]}>
        <Text style={styles.appName}>{'\n'}Capture</Text>
        <Text style={styles.translationTitle}>{'\n'}Please see your translated text below:</Text>
        <Text style={styles.translationText}>{'\n\n\n\n\n\n\n\n'}{this.getTranslation()}{'\n'}</Text>
        <Button
          title="Copy"
          onPress={this._setContent}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'orange',
  },
  translationTitle: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'orange',
  },
  translationText: {
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    includeFontPadding: true
  }
})
