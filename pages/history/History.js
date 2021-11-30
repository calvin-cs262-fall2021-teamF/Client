import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, View, TouchableOpacity, FlatList} from "react-native";
import { historyStyles } from "./historyStyles";

export default function HistoryScreen({route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBrushes = async () => {
     try {
      const response = await fetch('https://testing-tooth-service.herokuapp.com/brushLogs');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBrushes();
  }, []);

  return (
    
      <View style={historyStyles.container}>
          <Text style={historyStyles.headerText}> Brushing History </Text>
          <Text style={historyStyles.subtitleText}> "You don't have to brush all your teeth, just the ones you want to keep" </Text>
          {/* if isLoading is true then render the objects of the link into readable text */}
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  renderItem={({item}) => (
                      <TouchableOpacity style={historyStyles.box} onPress={() => navigation.navigate('HistoryDetails', item)}>
                          <Text style={historyStyles.btnText}>Brush Log {item.id}</Text>
    
                      </TouchableOpacity>
                  )}
              />

          )}
      </View>
  );
}
