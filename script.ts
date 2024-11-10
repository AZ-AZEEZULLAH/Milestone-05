// Extend the Window interface to include jspdf
declare global {
    interface Window {
      jspdf: any; // Declare jsPDF globally on the window object
    }
  }
  
  // Fetching necessary elements
  const nameInput = document.getElementById('name') as HTMLInputElement | null;
  const emailInput = document.getElementById('email') as HTMLInputElement | null;
  const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
  const schoolInput = document.getElementById('school') as HTMLInputElement | null;
  const gradYearInput = document.getElementById('grad-year') as HTMLInputElement | null;
  const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement | null;
  const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;
  
  // Resume output fields
  const resumeName = document.getElementById('resume-name') as HTMLElement | null;
  const resumeEmail = document.getElementById('resume-email') as HTMLElement | null;
  const resumeDegree = document.getElementById('resume-degree') as HTMLElement | null;
  const resumeSchool = document.getElementById('resume-school') as HTMLElement | null;
  const resumeGradYear = document.getElementById('resume-grad-year') as HTMLElement | null;
  const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLElement | null;
  const resumeSkills = document.getElementById('resume-skills') as HTMLElement | null;
  
  // Buttons
  const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement | null;
  const shareResumeButton = document.getElementById('share-resume') as HTMLButtonElement | null;
  const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement | null;
  
  // Download Resume as PDF
  downloadPdfButton?.addEventListener('click', () => {
      if (!resumeName || !resumeEmail || !resumeDegree || !resumeSchool || !resumeGradYear || !resumeWorkExperience || !resumeSkills) {
          console.error('Missing elements in the DOM');
          return;
      }
      
      const { jsPDF } = window.jspdf;
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
      doc.save('resume.pdf');
  });
  