import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TestPage = () => {
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: 'https://via.placeholder.com/400' }} style={styles.productImage} />

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="heart-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Roller Rabbit</Text>
                <Text style={styles.subTitle}>Vado Odelle Dress</Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star-outline" size={16} color="gold" />
                    <Text style={styles.reviewText}>(320 Review)</Text>
                </View>
                <View style={styles.availabilityContainer}>
                    <Text style={styles.availabilityText}>Available in stock</Text>
                </View>
                <View style={styles.sizeContainer}>
                    <Text style={styles.sizeTitle}>Size</Text>
                    <View style={styles.sizeOptions}>
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <TouchableOpacity key={size} style={styles.sizeButton}>
                                <Text style={styles.sizeText}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>
                        Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.priceText}>Total Price</Text>
                    <Text style={styles.priceAmount}>$198.00</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default TestPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productImage: {
        width: '100%',
        height: 400,
    },
    iconsContainer: {
        position: 'absolute',
        top: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    iconButton: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 16,
    },
    detailsContainer: {
        padding: 16,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
        color: '#777',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    reviewText: {
        marginLeft: 8,
        color: '#777',
    },
    availabilityContainer: {
        marginVertical: 8,
    },
    availabilityText: {
        color: 'green',
        fontWeight: 'bold',
    },
    sizeContainer: {
        marginVertical: 16,
    },
    sizeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sizeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    sizeButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 4,
    },
    sizeText: {
        fontSize: 14,
    },
    descriptionContainer: {
        marginVertical: 16,
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    descriptionText: {
        color: '#777',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceAmount: {
        fontSize: 16,
        color: '#000',
    },
    addButton: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
