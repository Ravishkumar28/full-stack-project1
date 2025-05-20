# 🌸 Menstrual Story Sharing Platform

A safe, multilingual space for individuals to share and explore stories related to menstruation — aiming to raise awareness, fight stigma, and build empathy.

---

## 🚀 Tech Stack Used

- **React.js** – Frontend development (UI/UX)
- **Firebase Authentication** – User login via email & password
- **Firebase Firestore** – Storing user-submitted stories
- **Firebase Hosting** – Deploying the live website
- **Tailwind CSS** – Responsive design and styling

---

## 🏠 Homepage

- Clean and accessible introduction to the platform’s mission
- Call-to-action buttons: **Explore Stories**, **Share Your Story**

---

## 🔐 Login Page

- Built with **Firebase Auth**
- Only logged-in users can submit stories

---

## ✍️ Submit Your Story

- Form includes: **Name, Age, State, Language, and Story**
- Input validation before saving to Firestore
- Logged-in users only

---

## 📖 Read Stories Page

- Filter stories by **State** or **Language**
- Displays 5 stories per page
- Interactive reactions: ❤️ Love, 🤝 Support, 💖 Like
- Features: **Theme toggle**, **Copy**, **Print**

---

## 💡 Information Panel

- Educational content on menstruation:
  - Biological facts
  - Social issues
  - Addressing myths & taboos

---

## 📞 Contact Page

- Includes a support email and social media links

---

## 🔐 Backend Workflow

- **Authentication**:
  - Firebase Auth (email/password login)
  - Only authenticated users can write stories

- **Database (Firestore)**:
  - Stores user-submitted stories with fields:
    - Email, Timestamp, State, Language, Age, Content
  - Uses `getDocs()` to fetch stories for reading

- **Permissions**:
  - Public read access
  - Write access for logged-in users only

---

## 🌐 Deployment

- Build the project:
  ```bash
  npm run build
