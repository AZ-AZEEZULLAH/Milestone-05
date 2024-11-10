// Fetching necessary elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var gradYearInput = document.getElementById('grad-year');
var workExperienceInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
// Resume output fields
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeDegree = document.getElementById('resume-degree');
var resumeSchool = document.getElementById('resume-school');
var resumeGradYear = document.getElementById('resume-grad-year');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Buttons
var generateResumeButton = document.getElementById('generate-resume');
var shareResumeButton = document.getElementById('share-resume');
var downloadPdfButton = document.getElementById('download-pdf');
// Generate Resume functionality
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', function () {
    if (!resumeName || !resumeEmail || !resumeDegree || !resumeSchool || !resumeGradYear || !resumeWorkExperience || !resumeSkills || !nameInput || !emailInput || !degreeInput || !schoolInput || !gradYearInput || !workExperienceInput || !skillsInput) {
        console.error('Missing elements in the DOM');
        return;
    }
    // Fill resume with input data
    resumeName.textContent = nameInput.value || 'Not provided';
    resumeEmail.textContent = emailInput.value || 'Not provided';
    resumeDegree.textContent = degreeInput.value || 'Not provided';
    resumeSchool.textContent = schoolInput.value || 'Not provided';
    resumeGradYear.textContent = gradYearInput.value || 'Not provided';
    resumeWorkExperience.textContent = workExperienceInput.value || 'Not provided';
    resumeSkills.textContent = skillsInput.value || 'Not provided';
    // Show the resume
    var resumeSection = document.getElementById('resume');
    if (resumeSection)
        resumeSection.style.display = 'block';
});
// Generate unique URL
shareResumeButton === null || shareResumeButton === void 0 ? void 0 : shareResumeButton.addEventListener('click', function () {
    if (!nameInput || !emailInput) {
        console.error('Name or email input is missing');
        return;
    }
    var baseUrl = window.location.href;
    var resumeId = btoa(encodeURIComponent("".concat(nameInput.value, "-").concat(emailInput.value)));
    var shareableUrl = "".concat(baseUrl, "?resumeId=").concat(resumeId);
    alert("Your unique resume URL: ".concat(shareableUrl));
    navigator.clipboard.writeText(shareableUrl); // Copy the URL to clipboard
});
// Download Resume as PDF
downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener('click', function () {
    if (!resumeName || !resumeEmail || !resumeDegree || !resumeSchool || !resumeGradYear || !resumeWorkExperience || !resumeSkills) {
        console.error('Missing elements in the DOM');
        return;
    }
    /* const { jsPDF } = window.jspdf;
     const doc = new jsPDF();
 
     // Fill PDF content
     doc.text(`Name: ${resumeName.textContent}`, 10, 10);
     doc.text(`Email: ${resumeEmail.textContent}`, 10, 20);
     doc.text(`Degree: ${resumeDegree.textContent}`, 10, 30);
     doc.text(`School: ${resumeSchool.textContent}`, 10, 40);
     doc.text(`Graduation Year: ${resumeGradYear.textContent}`, 10, 50);
     doc.text(`Work Experience: ${resumeWorkExperience.textContent}`, 10, 60);
     doc.text(`Skills: ${resumeSkills.textContent}`, 10, 70);
 
     // Save as PDF
     doc.save('resume.pdf');*/
});
// Load resume from URL if present
window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var resumeId = urlParams.get('resumeId');
    if (resumeId) {
        var decodedResume = decodeURIComponent(atob(resumeId)).split('-');
        if (nameInput && emailInput) {
            nameInput.value = decodedResume[0];
            emailInput.value = decodedResume[1];
            generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.click(); // Automatically generate resume if URL contains data
        }
    }
};
