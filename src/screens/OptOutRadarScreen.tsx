import React,{useState} from "react";
import {Text,StyleSheet,TextInput,ScrollView} from "react-native";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import {useAppTheme} from "@/theme";
export default function OptOutRadarScreen(){const t=useAppTheme();const [text,setText]=useState('');return <ScrollView style={{flex:1,backgroundColor:t.colors.background}} contentContainerStyle={styles.c}><Text style={[styles.h,{color:t.colors.text}]}>Opt-Out Radar</Text><Card><Text style={{color:t.colors.text}}>Reply STOP opportunities from pasted text and screenshots.</Text></Card></ScrollView>}
const styles=StyleSheet.create({c:{padding:16},h:{fontSize:28,fontWeight:'700',marginBottom:8}});
