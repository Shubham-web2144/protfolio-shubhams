function downloadResume() {
    // Create temporary link
    const link = document.createElement('a');
    link.href = './asset/resume/Resume-04.pdf';
    link.download = 'ShubhamJadhavResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Add download tracking
    console.log('Resume downloaded at:', new Date().toLocaleString());
  }