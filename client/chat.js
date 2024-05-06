// import { useCallback, useEffect, useLayoutEffect, useState } from "react";
// import { Text, TouchableOpacity } from "react-native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { IMessage, GiftedChat } from "react-native-gifted-chat";
//import { useAuth } from "../hooks/useAuth";
//import { getMessages, addMessage } from "../api/messageApi"; // Assuming you have API functions for interacting with MongoDB

/*type ChatScreenNavigationProp = NativeStackNavigationProp<{}>;

interface ChatScreenProps {
    navigation: ChatScreenNavigationProp;
}

export default function chat({ navigation }: ChatScreenProps) {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const user = useAuth();

    const onLogout = async () => {
        // Implement logout functionality here
    };

    const onSend = useCallback(async (newMessages: IMessage[] = []) => {
        // Update state optimistically
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessages)
        );

        // Send message to MongoDB
        await addMessage(newMessages[0]);
    }, []);

    useEffect(() => {
        // Fetch initial messages from MongoDB
        const fetchMessages = async () => {
            const fetchedMessages = await getMessages();
            setMessages(fetchedMessages);
        };

        fetchMessages();

        // Clean up function
        return () => {
            // Any cleanup needed can be done here
        };
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onLogout} style={{ marginRight: 10 }}>
                    <Text>Déconnexion</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation, onLogout]);

    return (
        <GiftedChat
            messages={messages}
            onSend={(newMessages) => onSend(newMessages)}
            user={{ _id: user?.uid }}
        />
    );
}
*/