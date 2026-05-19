import React,{useState} from "react";
import {Text,StyleSheet,TextInput,ScrollView} from "react-native";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import {useAppTheme} from "@/theme";
export default function SettingsScreen(){const t=useAppTheme();const [text,setText]=useState('');return <ScrollView style={{flex:1,backgroundColor:t.colors.background}} contentContainerStyle={styles.c}><Text style={[styles.h,{color:t.colors.text}]}>Settings</Text><Card><Text style={{color:t.colors.text}}>Theme, mock data mode, and policy links.</Text></Card></ScrollView>}
const styles=StyleSheet.create({c:{padding:16},h:{fontSize:28,fontWeight:'700',marginBottom:8}});
