import React, {useState, useEffect} from 'react';
import {
  Provider,
  Dialog,
  Button,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  Stack,
} from '@react-native-material/core';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {Divider} from '@rneui/themed';
import {Icon} from '@rneui/base';
import {Input, Card} from '@rneui/themed';
import ListItemInjuries from '../../../components/ListItemInjuries';
import ListItemSesions from '../../../components/ListItemSesions';

const Separator = () => <View style={styles.separator} />;

export default ({route, navigation}) => {
  const [template, setTemplate] = useState(route.params ? route.params : {});
  const [touche, setTouch] = useState(false);

  useEffect(() => {
    console.log('template: ');
    console.log(template);
    console.log('lesiones: ');
    console.log(template.lesion);
    console.log('sesiones: ');
    console.log(template.sesion);
  }, []);

  function InjuriesList() {
    return (
      <>
        <Card.Title>LESIONES</Card.Title>
        <Card.Divider />
        <ListItemInjuries injuryx={template.lesion} />
        <Card.Divider />
      </>
    );
  }

  function SesionList() {
    return (
      <>
        <Card.Title>SESIONES</Card.Title>
        <Card.Divider />
        <ListItemSesions sesionx={template.sesion} />

        <Card.Divider />
      </>
    );
  }
  function Component() {
    return (
      <>
        <Text style={styles.textNombre}>
          {template.deportista.nombre} {template.deportista.apellido}
        </Text>
        <Text style={styles.textTipoFicha}>
          {template.entrenador.rol} - {template.fecha}
        </Text>

        <SafeAreaView style={styles.container}>
          {/* <ScrollView style={styles.scrollView}>*/}

          <View style={styles.view}>
            <Card>
              <FlatList
                ListHeaderComponent={<>{InjuriesList()}</>}
                ListFooterComponent={<>{SesionList()}</>}
              />
            </Card>
          </View>

          <Separator />

          <View style={styles.fixToText}>
            <View style={styles.vertical}>
              <Button
                title="Modificar"
                onPress={() => Alert.alert('Seguro?')}
              />
            </View>
            <View style={styles.vertical}>
              <Button
                title="Eliminar"
                onPress={() => Alert.alert('Seguriiiisimo?')}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <Provider>
      <Component />
    </Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  view: {
    height: 50,
    flex: 1,
  },

  vertical: {
    display: 'flex',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  fixToText: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  separator: {
    paddingTop: StatusBar.currentHeight,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  input: {
    paddingTop: StatusBar.currentHeight,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textNombre: {
    color: 'white',
    fontSize: 40,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  textTipoFicha: {
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
  },
  viewButton: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});