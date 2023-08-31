let repos = [];
let lastIndex = 0;

// Mock data for local development
const mockRepos = [
    { name: "Repo1", language: "JavaScript", description: "This is a mock repo" },
    { name: "Repo2", language: "Python", description: "This is another mock repo" },
    { name: "Repo3", language: "Java", description: "Java mock repo" },
    { name: "Repo4", language: "C++", description: "C++ mock repo" },
    { name: "Repo5", language: "Ruby", description: "Ruby mock repo" },
    { name: "Repo6", language: "Go", description: "Go mock repo" }
];

async function fetchGitHubRepos() {
    // Check if running on localhost
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        repos = mockRepos;
    } else {
        const response = await fetch('https://api.github.com/users/juliarodriguesamaral/repos');
        repos = await response.json();
    }
    displayRepos();
}

function displayRepos() {
    const projectsDiv = document.getElementById('projetos');
    const nextRepos = repos.slice(lastIndex, lastIndex + 6);

    nextRepos.forEach((repo) => {
        const card = `
            <div class="card rounded shadow-lg border border-black p-4 rounded w-full sm:bg-white sm:text-black md:bg-white md:text-black" id="card1">
                <h2 class="text-xl font-bold card-title md:text-2xl">${repo.name}</h2>
                <i class=" sm:text-2xl md:text-2xl fab fa-${repo.language ? repo.language.toLowerCase() : 'code'} card-icon"></i>
                <p class="text-sm mt-2 card-description sm:text-2xl md:text-2xl">${repo.description || 'Sem descrição'}</p>
            </div>
        `;
        projectsDiv.innerHTML += card;
    });

    lastIndex += 6;

    if (lastIndex >= repos.length) {
        document.getElementById('loadMore').disabled = true;
    }
}

document.getElementById('loadMore').addEventListener('click', displayRepos);

fetchGitHubRepos();
