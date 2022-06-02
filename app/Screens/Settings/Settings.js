import React from "react";
import { Text, View, Button } from "react-native";
import Screen from "../../components/Layout/Screen";
import { useSelector, useDispatch } from "react-redux";
import {logout, reset} from "../../features/Auth/authSlice";
import { useState,useEffect } from "react";


function Settings(props) {
  const { emailUser, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(()=>{
    if(isSuccess && !emailUser){
      navigation.navigate("Login")
      dispatch(reset());
    }
    
  },[isSuccess,emailUser])
  return (
    <Screen>
      <View style={{ backgroundColor: "red" }}>
        <Text>this is settings page</Text>
        <Button title="logout" onPress={()=>{dispatch(logout())}}/>
      </View>
    </Screen>
  );
}

export default Settings;
