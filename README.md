# Instagram Follow Back Checker

A simple web-based tool to find out which Instagram users you follow but do not follow you back.

🔗 Live Demo: https://ysufimanuel.github.io/igfollowbackchecker/

---

## ✨ Features

- Upload Instagram JSON files (Followers & Following)
- Automatically detects non-follow-back users
- Displays:
  - Username
  - Follow timestamp
  - Direct profile link
- Copy all usernames to clipboard
- Clean and responsive UI (Tailwind CSS)

---

## 📥 How to Get Instagram JSON Files

To use this tool, you need to download your Instagram data:

1. Open Instagram (Web or Mobile App)
2. Go to **Settings**
3. Navigate to:
   - **Accounts Center**
   - **Your Information and Permissions**
4. Click **Download Your Information**
5. Select:
   - **Download or Transfer Information**
   - **Some of Your Information**
6. Choose:
   - ✅ **Followers and Following**
7. Set:
   - Format: **JSON** (Important)
   - Date Range: **All Time**
8. Submit your request
9. Wait for Instagram to send a download link via email
10. Download and extract the ZIP file
11. Locate these files:
    - `followers_1.json`
    - `following.json`

---

## 🚀 How to Use

1. Open the website:
   👉 https://ysufimanuel.github.io/igfollowbackchecker/

2. Upload your files:
   - `followers_1.json` (Followers section)
   - `following.json` (Following section)

3. Click **"Analisis Sekarang"**

4. View the results:
   - List of users who do NOT follow you back

5. (Optional) Click **"Salin Semua Username"** to copy all usernames

---

## 📁 Expected File Structure

### followers_1.json
```json
[
  {
    "string_list_data": [
      {
        "value": "username",
        "timestamp": 1234567890
      }
    ]
  }
]
```

### following.json
```json
{
  "relationships_following": [
    {
      "string_list_data": [
        {
          "value": "username",
          "timestamp": 1234567890,
          "href": "https://instagram.com/username"
        }
      ]
    }
  ]
}
```

---

## ⚠️ Notes

- Make sure files are in `.json` format
- File structure may vary slightly depending on Instagram export version
- This tool runs entirely in your browser (no data is uploaded to any server)

---

## 🛠 Tech Stack

- HTML
- Tailwind CSS
- Vanilla JavaScript

---

## 📄 License

Free to use for personal and educational purposes.
