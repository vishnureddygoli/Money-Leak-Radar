import React,{useState} from "react";
import {Text,StyleSheet,TextInput,ScrollView} from "react-native";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import {useAppTheme} from "@/theme";
export default function ManualMessageScanScreen(){const t=useAppTheme();const [text,setText]=useState('');return <ScrollView style={{flex:1,backgroundColor:t.colors.background}} contentContainerStyle={styles.c}><Text style={[styles.h,{color:t.colors.text}]}>Manual Message Scan</Text><Card><Text style={{color:t.colors.text}}>Paste promo SMS text below.</Text></Card><TextInput value={text} onChangeText={setText} placeholder='Paste message' style={{borderWidth:1,padding:12,borderRadius:10,marginTop:12}}/><PrimaryButton label='Scan for STOP' onPress={()=>{}}/></ScrollView>}
const styles=StyleSheet.create({c:{padding:16},h:{fontSize:28,fontWeight:'700',marginBottom:8}});
