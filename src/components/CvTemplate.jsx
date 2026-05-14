import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F9F9FA",
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B3B60",
  },
  job: {
    fontSize: 14,
    color: "#E86A33",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E86A33",
    borderBottom: "1 solid #0B3B60",
    marginVertical: 10,
  },
  text: {
    fontSize: 11,
    color: "#1E1E24",
    marginBottom: 4,
  },
  skillChip: {
    fontSize: 9,
    backgroundColor: "#E86A33",
    color: "white",
    padding: "2 6",
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
});

const cvData = {
  name: "LEBOUE ELIE",
  title: "Developpeur Full Stack & E-administration",
  email: "leboue.elie@email.com",
  linkedin: "linkedin.com/in/leboue-elie",
  github: "github.com/LBT-ELIE",
  phone: "+225 XX XX XX XX",
  bio: "Developpeur full stack passionne, etudiant en E-administration a l'UVCI. Je cree des solutions web modernes pour la transformation digitale des services publics et des entreprises.",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
    "Node.js",
    "Express",
    "NestJS",
    "Django DRF",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Docker",
    "Git",
  ],
  experience: [
    {
      date: "2025 - 2026",
      title: "Developpeur Full Stack Freelance",
      desc: "Conception de CV Builder, AfriCode, Dashboard Admin et plusieurs applications web.",
    },
    {
      date: "2024 - 2025",
      title: "Etudiant en E-administration, UVCI",
      desc: "Approfondissement des systemes d'information publics, transformation digitale.",
    },
  ],
  education: [
    {
      date: "2024 - 2026",
      title: "Licence E-administration & Transformation Digitale",
      school: "Universite Virtuelle de Cote d'Ivoire",
    },
  ],
};

export default function CvDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{cvData.name}</Text>
            <Text style={styles.job}>{cvData.title}</Text>
          </View>
          <View>
            <Text style={styles.text}>{cvData.email}</Text>
            <Text style={styles.text}>{cvData.phone}</Text>
            <Text style={styles.text}>{cvData.linkedin}</Text>
            <Text style={styles.text}>{cvData.github}</Text>
          </View>
        </View>

        <Text style={styles.text}>{cvData.bio}</Text>

        <Text style={styles.sectionTitle}>COMPETENCES</Text>
        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}
        >
          {cvData.skills.map((s, i) => (
            <Text key={i} style={styles.skillChip}>
              {s}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        {cvData.experience.map((exp, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>
              {exp.date} - {exp.title}
            </Text>
            <Text style={styles.text}>{exp.desc}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>FORMATION</Text>
        {cvData.education.map((edu, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>
              {edu.date} - {edu.title}
            </Text>
            <Text style={styles.text}>{edu.school}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
