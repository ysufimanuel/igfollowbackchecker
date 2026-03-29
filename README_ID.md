---

# 🇮🇩 README (Versi Bahasa Indonesia)

```markdown
# Instagram Follow Back Checker

Aplikasi web sederhana untuk mengetahui siapa saja yang Anda follow di Instagram tetapi tidak follow back.

🔗 Demo: https://ysufimanuel.github.io/igfollowbackchecker/

---

## ✨ Fitur

- Upload file JSON langsung dari browser
- Menampilkan akun yang tidak follback
- Menampilkan:
  - Username
  - Waktu follow
  - Link profil
- Salin semua username dengan satu klik
- 100% berjalan di browser (tanpa upload ke server)

---

## 📥 Cara Mendapatkan File JSON dari Instagram

1. Buka Instagram (App atau Web)
2. Masuk ke **Settings**
3. Pilih:
   - **Accounts Center**
   - **Your Information and Permissions**
4. Klik **Download Your Information**
5. Pilih:
   - **Download or Transfer Information**
   - **Some of Your Information**
6. Centang:
   - ✅ Followers and Following
7. Atur:
   - Format: **JSON** (WAJIB)
   - Rentang Waktu: **All Time**
8. Kirim permintaan
9. Tunggu email dari Instagram
10. Download dan ekstrak file ZIP
11. Ambil file:
    - `followers_1.json`
    - `following.json`

---

## 🚀 Cara Menggunakan

1. Buka website:
   👉 https://ysufimanuel.github.io/igfollowbackchecker/

2. Upload:
   - `followers_1.json` ke bagian Followers
   - `following.json` ke bagian Following

3. Klik tombol **"Analisis Sekarang"**

4. Lihat daftar akun yang tidak follback

5. (Opsional) Klik **"Salin Semua Username"**

---

## 📁 Struktur File

### Followers
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
