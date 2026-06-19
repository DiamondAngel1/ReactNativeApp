// import { Image } from 'expo-image';
// import {ActivityIndicator, Pressable, StyleSheet, View, Text} from 'react-native';

// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
import {Redirect} from 'expo-router';
import { useAppSelector } from "@/store";
// import {useMeQuery} from "@/service/AuthService";
// import { useDispatch } from "react-redux";
// import {Ionicons} from "@expo/vector-icons";
// import {BASE_URL_IMAGES} from "@/api";


export default function HomeScreen() {
    const auth = useAppSelector(x => x.auth);
    //const { data: me, isLoading, isError } = useMeQuery();
    //const dispatch = useDispatch();

    if (auth == null) {
        return <Redirect href='/login'/>;
    } else {
        return <Redirect href="/chat/home"/>;
    }
}