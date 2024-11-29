import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const teamMembers = [
    {
        name: 'Jerico Evangelista',
        role: 'UI/UX Designer',
        image: 'https://via.placeholder.com/100',
        links: {
            email: 'mailto:jerico@example.com',
            github: 'https://github.com/jerico',
            twitter: 'https://twitter.com/jerico',
        },
    },
    {
        name: 'Jameel Tutungan',
        role: 'Frontend Developer',
        image: 'https://via.placeholder.com/100',
        links: {
            email: 'mailto:gg.com',
            github: 'https://github.com/gg',
            twitter: 'https://twitter.com/gg',
        },
    },
    {
        name: 'GG2',
        role: 'QA',
        image: 'https://via.placeholder.com/100',
        links: {
            email: 'mailto:gg2@example.com',
            github: 'https://github.com/gg2',
            twitter: 'https://twitter.com/gg2',
        },
    },
   // add niyo nalang name nyo. di ko alam mga name niyo guys :(
];

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>About Us</Text>

                <Text style={styles.generalFunctionTitle}>General Function of the Application</Text>
                <Text style={styles.description}>
                    Our application is designed to provide accurate real-time temperature and humidity data,
                    ensuring users can monitor environmental conditions efficiently. With user-friendly features,
                    intuitive design, and reliable functionality, it caters to daily needs for tracking and managing
                    environmental information.
                </Text>

                <Text style={styles.teamTitle}>Team Specialization and Contributions</Text>
                <View style={styles.teamContainer}>
                    {teamMembers.map((member, index) => (
                        <View key={index} style={styles.profileCard}>
                            <Image source={{ uri: member.image }} style={styles.profileImage} />
                            <Text style={styles.profileName}>{member.name}</Text>
                            <Text style={styles.profileRole}>{member.role}</Text>
                            <View style={styles.profileLinks}>
                                <TouchableOpacity onPress={() => openLink(member.links.email)}>
                                    <Ionicons name="mail-outline" size={20} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => openLink(member.links.github)}>
                                    <Ionicons name="logo-github" size={20} color="#fff" style={styles.iconSpacing} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => openLink(member.links.twitter)}>
                                    <Ionicons name="logo-twitter" size={20} color="#fff" style={styles.iconSpacing} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* navbar */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('DashboardScreen')}>
                    <Ionicons name="grid-outline" size={24} color="#888" />
                    <Text style={styles.navText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AboutScreen')}>
                    <Ionicons name="information-circle-outline" size={24} color="#4A87F4" />
                    <Text style={[styles.navText, { color: '#4A87F4' }]}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('WelcomeScreen')}>
                    <Ionicons name="log-out-outline" size={24} color="#888" />
                    <Text style={styles.navText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const openLink = (url) => {
    // link redirector
    Linking.openURL(url).catch((err) => console.error("Couldn't load URL", err));
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#08051D',
        padding: 20,
    },
    scrollContainer: {
        paddingBottom: 60,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 20,
    },
    generalFunctionTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#CCCCCC',
        marginBottom: 10,
        marginLeft: 10,
    },
    teamTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#CCCCCC',
        marginBottom: 10,
    },
    description: {
        fontSize: 19,
        color: '#CCCCCC',
        lineHeight: 22,
        marginBottom: 40,
        marginLeft: 10,
    },
    teamContainer: {
        marginTop: 20,
    },
    profileCard: {
        backgroundColor: '#262438',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 50,
        borderWidth: 2.5,
        borderColor: '#434064',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    profileRole: {
        fontSize: 19,
        color: '#CCCCCC',
        marginBottom: 14,
    },
    profileLinks: {
        flexDirection: 'row',
    },
    iconSpacing: {
        marginLeft: 15,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#262438',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#888',
        fontSize: 12,
        marginTop: 4,
    },
});

export default AboutScreen;
