import React from 'react'
import { Button, Clipboard, StyleSheet, Text, View } from 'react-native';


export default class TranslationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.getTranslation = this.getTranslation.bind(this)
    this._setContent = this._setContent.bind(this)
  }

  getTranslation() {
    const defaultText = 'Please take another picture'
    return this.props.navigation.getParam('translation', defaultText)
  }
  _setContent() {
    Clipboard.setString(this.getTranslation());
  }

  render() {
    return (
      <View style={[styles.container, styles.translation]}>
        <Text />
        <Text style={styles.translation}>Your translated text:</Text>
        <Text />
        <Text style={styles.translation}>{this.getTranslation()}</Text>
        <Button title='Copy' onPress={this._setContent} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  translation: {
    fontSize: 30
  }
})
