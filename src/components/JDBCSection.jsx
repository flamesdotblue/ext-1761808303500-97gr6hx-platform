import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const codeJava = `import java.sql.*;

public class StudentRecordViewer {
    // Update these for your DB
    private static final String URL = "jdbc:mysql://localhost:3306/college"; // database: college
    private static final String USER = "root";
    private static final String PASS = "password";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASS)) {
            ensureTable(conn);
            // Uncomment to insert sample records
            // seedData(conn);
            displayRecords(conn);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void ensureTable(Connection conn) throws SQLException {
        String ddl = """
            CREATE TABLE IF NOT EXISTS StuRec (
              EnrollNo VARCHAR(20) PRIMARY KEY,
              Name VARCHAR(100) NOT NULL,
              Address VARCHAR(200),
              MobileNo VARCHAR(20),
              EmailID VARCHAR(150)
            )
        """;
        try (Statement st = conn.createStatement()) {
            st.executeUpdate(ddl);
        }
    }

    private static void seedData(Connection conn) throws SQLException {
        String sql = "INSERT INTO StuRec (EnrollNo, Name, Address, MobileNo, EmailID) VALUES (?,?,?,?,?) ON DUPLICATE KEY UPDATE Name=VALUES(Name), Address=VALUES(Address), MobileNo=VALUES(MobileNo), EmailID=VALUES(EmailID)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            Object[][] data = new Object[][]{
                {"ENR001", "Aarav Mehta", "221B Baker Street", "9876543210", "aarav@example.com"},
                {"ENR002", "Kiran Shah", "MG Road", "9123456780", "kiran@example.com"},
                {"ENR003", "Riya Patel", "Park Avenue", "9988776655", "riya@example.com"}
            };
            for (Object[] row : data) {
                ps.setString(1, (String) row[0]);
                ps.setString(2, (String) row[1]);
                ps.setString(3, (String) row[2]);
                ps.setString(4, (String) row[3]);
                ps.setString(5, (String) row[4]);
                ps.addBatch();
            }
            ps.executeBatch();
        }
    }

    private static void displayRecords(Connection conn) throws SQLException {
        String select = "SELECT EnrollNo, Name, Address, MobileNo, EmailID FROM StuRec ORDER BY EnrollNo";
        try (Statement st = conn.createStatement(); ResultSet rs = st.executeQuery(select)) {
            System.out.printf("%-10s %-20s %-25s %-15s %-25s%n", "EnrollNo", "Name", "Address", "MobileNo", "EmailID");
            System.out.println("-".repeat(100));
            while (rs.next()) {
                System.out.printf(
                    "%-10s %-20s %-25s %-15s %-25s%n",
                    rs.getString("EnrollNo"),
                    rs.getString("Name"),
                    rs.getString("Address"),
                    rs.getString("MobileNo"),
                    rs.getString("EmailID")
                );
            }
        }
    }
}
`;

const codeSQL = `-- MySQL schema (run once)
CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE IF NOT EXISTS StuRec (
  EnrollNo VARCHAR(20) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Address VARCHAR(200),
  MobileNo VARCHAR(20),
  EmailID VARCHAR(150)
);
`;

const codeGradle = `// If using Gradle, add dependency
// implementation 'mysql:mysql-connector-j:8.4.0'
`;

export default function JDBCSection() {
  const [copied, setCopied] = useState('');

  const onCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(''), 1500);
    } catch {}
  };

  return (
    <section id="jdbc" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">JDBC Overview</h2>
            <p className="mt-3 text-white/80">
              This example uses JDBC to display student records from table StuRec. Fields include Enroll No, Name, Address, Mobile No, and Email-ID.
            </p>
            <ol className="mt-6 space-y-3 list-decimal list-inside text-white/90">
              <li>Add MySQL Connector/J to your project (Maven/Gradle or jar).</li>
              <li>Create database and table using the SQL below.</li>
              <li>Update JDBC URL, username, and password in the Java file.</li>
              <li>Run the Java program to print records in a formatted table.</li>
            </ol>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-semibold">MySQL Table DDL</h3>
              <div className="relative mt-2">
                <button
                  onClick={() => onCopy(codeSQL, 'sql')}
                  className="absolute right-2 top-2 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 hover:bg-white/20 px-2.5 py-1.5 text-xs"
                >
                  <Copy className="w-3.5 h-3.5" /> {copied === 'sql' ? 'Copied' : 'Copy'}
                </button>
                <pre className="overflow-auto text-sm leading-relaxed"><code>{codeSQL}</code></pre>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-semibold">Gradle Dependency</h3>
              <div className="relative mt-2">
                <button
                  onClick={() => onCopy(codeGradle, 'gradle')}
                  className="absolute right-2 top-2 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 hover:bg-white/20 px-2.5 py-1.5 text-xs"
                >
                  <Copy className="w-3.5 h-3.5" /> {copied === 'gradle' ? 'Copied' : 'Copy'}
                </button>
                <pre className="overflow-auto text-sm leading-relaxed"><code>{codeGradle}</code></pre>
              </div>
            </div>
          </div>
          <div id="code">
            <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Java Program: StudentRecordViewer.java</h3>
                <button
                  onClick={() => onCopy(codeJava, 'java')}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 hover:bg-white/20 px-2.5 py-1.5 text-xs"
                >
                  <Copy className="w-3.5 h-3.5" /> {copied === 'java' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="mt-2 bg-slate-950/60 rounded-lg p-3">
                <pre className="overflow-auto text-xs md:text-sm leading-relaxed"><code>{codeJava}</code></pre>
              </div>
              <div className="mt-4 text-white/80 text-sm">
                Notes:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Ensure MySQL is running and database "college" exists.</li>
                  <li>Use correct credentials and network access for your environment.</li>
                  <li>Uncomment seedData(conn) to insert sample rows.</li>
                  <li>For PostgreSQL, change URL to jdbc:postgresql://host:port/db and use suitable driver.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
