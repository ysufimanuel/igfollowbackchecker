let followersData = null;
let followingData = null;

const text = {
    id: {
        title: "IG Follow Back Checker",
        desc: "Cek siapa yang tidak follback",
        analyze: "Analisis",
        empty: "Semua follback 🎉",
        result: "Tidak follback"
    },
    en: {
        title: "IG Follow Back Checker",
        desc: "Check who didn't follow you back",
        analyze: "Analyze",
        empty: "Everyone followed back 🎉",
        result: "Not following back"
    }
};

let currentLang = "id";

// ================= LANG =================
document.getElementById('langSwitch').addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLang();
});

function updateLang() {
    document.getElementById('title').innerText = text[currentLang].title;
    document.getElementById('desc').innerText = text[currentLang].desc;
    document.getElementById('analyzeBtn').innerText = text[currentLang].analyze;
}

// ================= FILE READER =================
document.getElementById('followersFile').addEventListener('change', e => {
    readFile(e.target.files[0], data => followersData = data);
});

document.getElementById('followingFile').addEventListener('change', e => {
    readFile(e.target.files[0], data => followingData = data);
});

function readFile(file, callback) {
    if (!file) return;

    if (!file.name.endsWith('.json')) {
        alert("File harus JSON bro 🗿");
        return;
    }

    const reader = new FileReader();
    reader.onload = e => {
        try {
            const parsed = JSON.parse(e.target.result);
            callback(parsed);
        } catch (err) {
            alert("JSON rusak atau format salah 😭");
        }
    };
    reader.readAsText(file);
}

// ================= CORE LOGIC =================
function analyze() {
    if (!followersData || !followingData) {
        alert("Upload dua file dulu bro");
        return;
    }

    let followersSet = new Set();

    // HANDLE MULTIPLE FORMAT FOLLOWERS
    const rawFollowers = Array.isArray(followersData)
        ? followersData
        : followersData.relationships_followers || [];

    rawFollowers.forEach(item => {
        if (!item || !item.string_list_data) return;

        item.string_list_data.forEach(entry => {
            if (entry && typeof entry.value === "string") {
                followersSet.add(entry.value.trim());
            }
        });
    });

    // HANDLE FOLLOWING
    const rawFollowing = followingData.relationships_following || [];
    let result = [];

    rawFollowing.forEach(item => {
        if (!item || !item.string_list_data) return;

        item.string_list_data.forEach(entry => {
            if (!entry || typeof entry.value !== "string") return;

            const username = entry.value.trim();

            if (!followersSet.has(username)) {
                result.push(username);
            }
        });
    });

    render(result);
}

// ================= RENDER =================
function render(list) {
    const container = document.getElementById('result');

    if (!Array.isArray(list) || list.length === 0) {
        container.innerHTML = `<p>${text[currentLang].empty}</p>`;
        return;
    }

    container.innerHTML = `
        <p><b>${text[currentLang].result} (${list.length})</b></p>
        <ul>
            ${list.map(u => `<li>@${u}</li>`).join('')}
        </ul>
    `;
}
