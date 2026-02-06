/* 
Mobile Application Development CPRG 303-C Group 12
Members:
- 930016 - Seksan Wangkhiree
- student number  - John Mckay
- student number - Yufeng Fan

ASSIGNMENT:
Assignment: Building a Mobile UI with Expo and React Native

Purpose:
A Bottom navigation bar component that allows switching between "home" and "profile" tabs. 
The active tab is visually indicated, and the "home" tab displays an alert button while the "profile" tab shows a profile page.
*/
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export type TabKey = "home" | "profile";

export default function BottomNav({
    activeTab,
    onChangeTab,
}: {
    activeTab: TabKey;
    onChangeTab: (t: TabKey) => void;
}) {
return (
    <View style={styles.nav}>
        <TouchableOpacity onPress={() => onChangeTab("home")} style={styles.item}>
            <Text style={[styles.icon, activeTab === "home" && styles.active]}>⌂</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.item}>
            <Text style={styles.icon}>🔍</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.item}>
            <Text style={styles.icon}>＋</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.item}>
            <Text style={styles.icon}>▶︎</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeTab("profile")} style={styles.item}>
            <View style={[styles.avatar, activeTab === "profile" && styles.avatarActive]} />
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        height: 56,
        borderTopWidth: 1,
        borderTopColor: "#EDEDED",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    item: { padding: 8 },
    icon: { fontSize: 18, color: "#555" },
    active: { fontWeight: "800" },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#ddd",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    avatarActive: { borderColor: "#111", borderWidth: 2 },
});
