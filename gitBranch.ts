const fs = require('fs');
const { execSync } = require('child_process');

const getCurrentBranch = () => {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim();
    return branch;
  } catch (error) {
    console.error('Failed to get branch name', error);
    return '';
  }
};

const branchData = {
  name: getCurrentBranch()
};

const filePath = './src/data/branchName.json';
fs.writeFile(filePath, JSON.stringify(branchData), (err) => {
  if (err) {
    console.error('Error writing branch name to file', err);
    process.exit(1);
  }
});
