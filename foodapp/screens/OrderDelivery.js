import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Restaurant from './Restaurant'

export default function OrderDelivery({route}) {
    const [artitulo, setArticulo] = useState([])

    console.log("Datos agregados al carrito")
    const DatosEnviados = route.params.restaurant
    console.log(DatosEnviados)
    
    console.log("....")
    
    let lenf = DatosEnviados.length
    for (let index = 0; index < lenf; index++) {
        const element = DatosEnviados[index];
        console.log(element)
    }

    
    return (
        <View>
            <Text style={{marginTop:44}} >Order template</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
