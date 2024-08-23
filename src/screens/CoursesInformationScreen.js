import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformationScreen() {
  return (
    <ScrollView>

    
    <View>
        <Information 
        title="Angular Eğitimi"
        imageSource={require('../../assets/1.jpg')}
        desc="Kapsamlı Angular Eğitimi"
        /> 

        <Information
         title="React Eğitimi"
        imageSource={require('../../assets/2.jpg')}
        desc="Kapsamlı React Eğitimi"/> 

        <Information
         title="Bootstrap 5 Eğitimi"
        imageSource={require('../../assets/3.jpg')}
        desc="Kapsamlı Bootstrap 5 Eğitimi"/> 

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})