const uploadInput = document.getElementById("pdfFile");
const loading = document.getElementById("loading");
const results = document.getElementById("results");

const summaryEl = document.getElementById("summary");
const eligibilityEl = document.getElementById("eligibility");
const documentsEl = document.getElementById("documents");
const risksEl = document.getElementById("risks");
const deadlineEl = document.getElementById("deadline");


async function analyzeTender() {

    const file = uploadInput.files[0];

    if (!file) {
        alert("Please select a PDF file first.");
        return;
    }

    if (!file.name.toLowerCase().endsWith(".pdf")) {
        alert("Only PDF files are allowed.");
        return;
    }

    showLoading();

    try {



        await delay(2000);

        const mockResponse = {
            summary:
                "Supply and installation of computer equipment for public offices.",

            eligibility:
                "Eligible",

            documents: [
                "Business Registration Certificate",
                "Tax Clearance Certificate",
                "Financial Statements (3 Years)",
                "Technical Proposal"
            ],

            risks: [
                "Very short submission period",
                "Strict financial requirements",
                "High competition expected"
            ],

            deadline:
                "2026-08-15"
        };

        renderResults(mockResponse);



    } catch (error) {

        console.error(error);

        alert(
            "Failed to analyze tender. Please try again."
        );

    } finally {

        hideLoading();

    }
}



function renderResults(data) {

    results.classList.remove("hidden");

    summaryEl.textContent =
        data.summary || "No summary available.";

    eligibilityEl.textContent =
        data.eligibility || "Unknown";

    deadlineEl.textContent =
        data.deadline || "Not specified";

    renderDocuments(data.documents || []);

    renderRisks(data.risks || []);
}


function renderDocuments(documents) {

    documentsEl.innerHTML = "";

    if (documents.length === 0) {

        documentsEl.innerHTML =
            "<li>No documents found.</li>";

        return;
    }

    documents.forEach(doc => {

        const li = document.createElement("li");

        li.textContent = doc;

        documentsEl.appendChild(li);
    });
}


function renderRisks(risks) {

    risksEl.innerHTML = "";

    if (risks.length === 0) {

        risksEl.innerHTML =
            "<li>No risks detected.</li>";

        return;
    }

    risks.forEach(risk => {

        const li = document.createElement("li");

        li.textContent = risk;

        risksEl.appendChild(li);
    });
}

function showLoading() {

    loading.classList.remove("hidden");

    results.classList.add("hidden");
}

function hideLoading() {

    loading.classList.add("hidden");
}


function delay(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });
}


uploadInput.addEventListener("change", () => {

    const file = uploadInput.files[0];

    if (!file) return;

    console.log("Selected File:", file.name);
});
                      