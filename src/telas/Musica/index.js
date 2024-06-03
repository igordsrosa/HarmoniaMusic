import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CardMusica from '../../componentes/CardMusica.js';
import musicas from '../../mocks/musicas.js';

export default function Filmes() {
    return (
        <View style={styles.container}>
            <FlatList
                data={musicas}
                renderItem={({ item }) => (
                    <CardMusica nome={item.nome} imagem={item.imagem} preco={item.preco} />
                )}
                keyExtractor={item => item.id}
                numColumns={1}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33C1BA',
    },
    flatListContent: {
        padding: 16,
    },
});
