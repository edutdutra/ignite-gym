import {Heading, HStack, Icon, Text, VStack} from "native-base";
import {MaterialIcons} from '@expo/vector-icons';
import {UserPhoto} from "@components/UserPhoto";
import {TouchableOpacity} from "react-native";

export function HomeHeader() {
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto
                source={{uri: 'https://github.com/edutdutra.png'}}
                alt="Imagem do usuário"
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">
                    Olá,
                </Text>
                <Heading color="gray.100" fontSize="md" fontFamily="heading">
                    Eduardo
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}