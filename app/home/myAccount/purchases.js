import { ScrollView, View, Text, SafeAreaView, Button, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Accordion from 'react-native-collapsible/Accordion'
import Icon from '@expo/vector-icons/Feather'
import { FontAwesome6 } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../constants/theme'
import styles from './myAccount.styles'

export default function Purchases() {
  const [activeSections, setActiveSections] = useState('');
  const sections = [
    {
      title: 'Compra 1',
      content: 
        <View className="py-2 flex-row justify-between">
          <View className="max-w-[200px]">
            <Text style={{fontSize: SIZES.xSmall}}>Enim aliqua ex amet do ullamco aliqua cillum irure consequat sint sunt.</Text>
          </View>
          <View className="">
            <View className="flex-row space-x-1">
              <FontAwesome6 name='credit-card' size={16} color='black'/>
              <Text style={styles.text}>Final 1234</Text>
            </View>
            <Text style={styles.price}>R$150 x 2</Text>
          </View>
        </View>,
    },
    {
      title: 'Compra 2',
      content: 
        <View className="py-2 flex-row justify-between">
          <View className="max-w-[200px]">
            <Text style={{fontSize: SIZES.xSmall}}>Enim aliqua ex amet do ullamco aliqua cillum irure consequat sint sunt.</Text>
          </View>
          <View className="">
            <View className="flex-row space-x-1">
              <FontAwesome6 name='credit-card' size={16} color='black'/>
              <Text style={styles.text}>Final 5678</Text>
            </View>
            <Text style={styles.price}>R$350 x 3</Text>
          </View>
        </View>,
      
    },
    {
      title: 'Compra 3',
      content: 
        <View className="py-2 flex-row justify-between">
          <View className="max-w-[200px]">
            <Text style={{fontSize: SIZES.xSmall}}>Enim aliqua ex amet do ullamco aliqua cillum irure consequat sint sunt.</Text>
          </View>
          <View className="">
            <View className="flex-row space-x-1">
              <FontAwesome6 name='credit-card' size={16} color='black'/>
              <Text style={styles.text}>Final 1234</Text>
            </View>
            <Text style={styles.price}>R$200 x 1</Text>
          </View>
        </View>,
      
    },
    {
      title: 'Compra 4',
      content: 
        <View className="py-2 flex-row justify-between">
          <View className="max-w-[200px]">
            <Text style={{fontSize: SIZES.xSmall}}>Enim aliqua ex amet do ullamco aliqua cillum irure consequat sint sunt.</Text>
          </View>
          <View className="">
            <View className="flex-row space-x-1 self-end">
              <FontAwesome6 name='pix' size={16} color='black'/>
              <Text style={styles.text}>Pix</Text>
            </View>
            <Text style={styles.price}>R$99,90</Text>
          </View>
        </View>,
      
    },
  ];

  function renderHeader(section, _, isActive) {
    return (
      <View className="flex-row space-x-3" style={styles.accordHeader}>
        <View className="p-2 bg-gray-200 rounded-xl items-center justify-center">
          <Icon name='shopping-bag' size={22} color='black'/>
        </View>
        <View className="flex-1 flex-row justify-between items-center">
          <Text style={styles.accordTitle}>{section.title}</Text>
          <Icon name={isActive ? 'chevron-up' : 'chevron-down'} size={20} color='black' />
        </View>
      </View>
    )
  }

  function renderContent(section, _, isActive) {
    return (
      <View style={styles.accordBody}>
        {section.content}
        {section.bottom}
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentInsetAdjustmentBehavior='automatic'>
        <View className="items-center mb-4">
          <Text style={styles.nameText}>Minhas Compras</Text>
          </View>
        <Accordion
          align="bottom"
          sections={sections}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(sections) => setActiveSections(sections)}
          sectionContainerStyle={{paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: COLORS.white}}
          underlayColor='white'
        />
      </ScrollView>
    </SafeAreaView>
  );
}
