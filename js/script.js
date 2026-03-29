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

document.getElementById('langSwitch').addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLang();
});

function updateLang() {
    document.getElementById('title').innerText = text[currentLang].title;
    document.getElementById('desc').innerText = text[currentLang].desc;
    document.getElementById('analyzeBtn').innerText = text[currentLang].analyze;
}

document.getElementById('followersFile').addEventListener('change', e => {
    readFile(e.target.files[0], data => followersData = data);
});

document.getElementById('followingFile').addEventListener('change', e => {
    readFile(e.target.files[0], data => followingData = data);
});

function readFile(file, callback) {
    const reader = new FileReader();
    reader.onload = e => {
        callback(JSON.parse(e.target.result));
    };
    reader.readAsText(file);
}

function analyze() {
    if (!followersData || !followingData) {
        alert("Upload file dulu bro");
        return;
    }

    let followersSet = new Set();

    const rawFollowers = Array.isArray(followersData)
        ? followersData
        : followersData.relationships_followers || [];

    rawFollowers.forEach(item => {
        item.string_list_data?.forEach(entry => {
            if (entry.value) followersSet.add(entry.value);
        });
    });

    const rawFollowing = followingData.relationships_following || [];
    let result = [];

    rawFollowing.forEach(item => {
        item.string_list_data?.forEach(entry => {
            if (entry.value && !followersSet.has(entry.value)) {
                result.push(entry.value);
            }
        });
    });

    render(result);
}

function render(list) {
    const container = document.getElementById('result');

    if (list.length === 0) {
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
