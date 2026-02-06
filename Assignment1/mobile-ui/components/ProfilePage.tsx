import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfilePage() {
return (
    <View style={styles.container}>
        <View style={styles.topBar}>
        <Text style={styles.topIcon}>＋</Text>

        <View style={styles.titleWrap}>
            <Text style={styles.lock}>🔒</Text>
            <Text style={styles.username}>asian_guy_nyi</Text>
            <Text style={styles.down}>⌄</Text>
        </View>

        <Text style={styles.topIcon}>≡</Text>
        </View>

        <View style={styles.headerRow}>
        <View style={styles.avatar} />

            <View style={styles.statsRow}>
                <Stat number="12" label="posts" />
                <Stat number="359" label="followers" />
                <Stat number="581" label="following" />
            </View>
        </View>

        <Text style={styles.name}>Sek San Wangkhiree</Text>
        <Text style={styles.bio}>I live to drift them fork lifts.</Text>

        <View style={styles.buttonsRow}>
            <View style={[styles.btn, styles.btnWide]}>
                <Text style={styles.btnText}>Edit profile</Text>
            </View>

            <View style={[styles.btn, styles.btnWide]}>
                <Text style={styles.btnText}>Share profile</Text>
            </View>

            <View style={[styles.btn, styles.btnSmall]}>
                <Text style={styles.btnText}>+</Text>
            </View>
        </View>
    </View>
    );
}

function Stat({ number, label }: { number: string; label: string }) {
return (
    <View style={styles.stat}>
        <Text style={styles.statNumber}>{number}</Text>
        <Text style={styles.statLabel}>{label}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingBottom: 12,
    },

  // Top bar
    topBar: {
        height: 56,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    topIcon: {
        fontSize: 26,
        color: "#111",
    },
    titleWrap: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    lock: { fontSize: 16 },
    username: {
        fontSize: 26,
        fontWeight: "800",
        color: "#111",
    },
    down: { fontSize: 18, marginTop: 4 },

  // Header row
    headerRow: {
        flexDirection: "row",
        paddingHorizontal: 12,
        paddingTop: 8,
        alignItems: "center",
    },
    avatar: {
        width: 86,
        height: 86,
        borderRadius: 43,
        backgroundColor: "#D0D0D0",
    },
    statsRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    stat: { alignItems: "center" },
    statNumber: { fontSize: 20, fontWeight: "800", color: "#111" },
    statLabel: { fontSize: 14, color: "#111" },

  // Name + bio
    name: {
        paddingHorizontal: 12,
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "700",
        color: "#111",
    },
    bio: {
        paddingHorizontal: 12,
        paddingTop: 4,
        fontSize: 16,
        color: "#111",
    },

  // Buttons
    buttonsRow: {
        flexDirection: "row",
        gap: 8,
        paddingHorizontal: 12,
        paddingTop: 12,
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    btnWide: { flex: 1 },
    btnSmall: { width: 44 },
    btnText: { fontWeight: "700", color: "#111" },

  // Placeholder
    placeholder: {
        marginTop: 18,
        marginHorizontal: 12,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E6E6E6",
    },
    placeholderText: { color: "#555" },
});
