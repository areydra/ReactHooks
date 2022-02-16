import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';

interface Store {
    name: string,
    address: string,
    phone: string,
};

interface Action {
    type: string,
    payload: Store,
};

const storeReducer = (state: Array<Store>, action: Action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'DELETE':
            return state.filter(store => store.name !== action.payload.name);
        default:
            throw new Error('Type is not supported!')
    }
};

const defaultStores = [
    {
        name: 'Tk. Buah Tangan Nusantara',
        address: 'Kab. Bogor',
        phone: '+6286472182'
    },
    {
        name: 'Tk. Baju Nusantara',
        address: 'Kab. Bogor',
        phone: '+62864721855'
    }
];

const UseReducerScene: React.FC = () => {
    const [stores, dispatch] = React.useReducer(storeReducer, defaultStores);

    const handleAddNewStore = () => {
        dispatch({
            type: 'ADD',
            payload: defaultStores[0],
        });
    };

    const handleDeleteStore = () => {
        dispatch({
            type: 'DELETE',
            payload: defaultStores[1],
        });
    };

    return (
        <View style={{flex: 1, padding: 8}}> 
            <TouchableOpacity
                onPress={handleAddNewStore}
                style={{backgroundColor: 'blue', padding: 8, borderRadius: 4, width: 150}}
            >
                <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Tambah Toko Baru</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleDeleteStore}
                style={{backgroundColor: 'red', padding: 8, borderRadius: 4, width: 150, marginTop: 8}}
            >
                <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Hapus Toko</Text>
            </TouchableOpacity>
            <FlatList
                data={stores}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={{borderWidth: 1, borderRadius: 4, borderColor: 'black', marginTop: 16, padding: 8}}>
                        <Text>{item.name}</Text>
                        <Text>{item.address}</Text>
                        <Text>{item.phone}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default UseReducerScene;