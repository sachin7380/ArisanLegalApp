// import React from 'react';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, IconButton, Provider as PaperProvider } from 'react-native-paper';

const ClientList = () => {
    function alert(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.text}>Client List</Text>
                        <View style={styles.iconContainer}>
                            <IconButton
                                icon="share"
                                size={18}
                                // onPress={() => alert('Share pressed')}
                            />
                            <IconButton
                                icon="plus"
                                size={18}
                                // onPress={() => alert('Add pressed')}
                            />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '30%',
    },
    card: {
        width: '90%',
        maxHeight: 50,
        justifyContent: 'center',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',  // Ensure card content takes full height of card
    },
    text: {
        fontSize: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ClientList;

