EXPERIMENT NO. 10

TITLE:
Version Control Operations using Git and GitHub

AIM:
To demonstrate version control operations using Git and GitHub.

OBJECTIVE:
To understand Git commands and perform repository creation, commit, push, pull and clone operations using GitHub.

SOFTWARE REQUIREMENTS:

1. Git
2. GitHub Account
3. Visual Studio Code
4. Internet Connection

THEORY

What is Version Control?

Version Control is a system that tracks changes made to files and allows developers to manage different versions of a project.

Examples:
• Git
• SVN
• Mercurial

What is Git?

Git is a distributed version control system used to track source code changes.

What is GitHub?

GitHub is a cloud-based platform used to host Git repositories online.

ADVANTAGES OF GIT

1. Tracks changes in files
2. Supports team collaboration
3. Maintains project history
4. Allows rollback to previous versions
5. Supports branching and merging

---

STEP 1 : INSTALL GIT

Download Git:

https://git-scm.com

Verify Installation:

git --version

Expected Output:

git version 2.xx.x

---

STEP 2 : CONFIGURE GIT

Set Username:

git config --global user.name "Swayam Panchal"

Set Email:

git config --global user.email "[yourmail@gmail.com](mailto:yourmail@gmail.com)"

Check Configuration:

git config --list

---

STEP 3 : CREATE PROJECT FOLDER

Example:

WebDevelopmentPractical

Open folder in VS Code.

---

STEP 4 : INITIALIZE GIT REPOSITORY

Command:

git init

Output:

Initialized empty Git repository

Purpose:

Creates a local Git repository.

---

STEP 5 : CHECK STATUS

Command:

git status

Purpose:

Displays current status of files.

Possible Output:

Untracked files:
index.html

---

STEP 6 : ADD FILES

Add Single File:

git add index.html

Add All Files:

git add .

Purpose:

Moves files to staging area.

---

STEP 7 : CREATE COMMIT

Command:

git commit -m "Initial Commit"

Purpose:

Creates a snapshot of project files.

Output:

1 file changed

---

STEP 8 : CREATE GITHUB REPOSITORY

1. Login to GitHub
2. Click New Repository
3. Enter Repository Name
4. Click Create Repository

Example:

Web-Development-Practical

---

STEP 9 : CONNECT LOCAL REPOSITORY TO GITHUB

Command:

git remote add origin https://github.com/username/repository.git

Check Remote:

git remote -v

Purpose:

Links local repository to GitHub repository.

---

STEP 10 : PUSH CODE TO GITHUB

Command:

git push -u origin main

OR

git push -u origin master

Purpose:

Uploads project files to GitHub.

Output:

Branch linked successfully.

---

STEP 11 : CLONE REPOSITORY

Command:

git clone https://github.com/username/repository.git

Purpose:

Downloads repository from GitHub.

Output:

Repository copied to local system.

---

STEP 12 : PULL LATEST CHANGES

Command:

git pull origin main

Purpose:

Downloads latest updates from GitHub.

---

STEP 13 : VIEW COMMIT HISTORY

Command:

git log

Purpose:

Displays commit history.

Output:

commit 123abc456
Author: Swayam Panchal

---

STEP 14 : CREATE NEW BRANCH

Command:

git branch feature1

Check Branches:

git branch

Purpose:

Creates a new branch.

---

STEP 15 : SWITCH BRANCH

Command:

git checkout feature1

OR

git switch feature1

Purpose:

Moves to another branch.

---

STEP 16 : MERGE BRANCH

Command:

git checkout main

git merge feature1

Purpose:

Combines branch changes.

---

STEP 17 : DELETE BRANCH

Command:

git branch -d feature1

Purpose:

Removes branch after merge.

---

IMPORTANT GIT COMMANDS

git init
Initialize Repository

git status
Check Status

git add .
Add Files

git commit -m "message"
Create Commit

git log
View History

git clone <url>
Clone Repository

git pull
Download Changes

git push
Upload Changes

git branch
View Branches

git checkout
Switch Branch

git merge
Merge Branches

git remote -v
View Remote Repository

---

WORKFLOW OF GIT

Working Directory
↓
Staging Area
↓
Local Repository
↓
GitHub Repository

Commands:

git add
↓
git commit
↓
git push

---

EXPECTED OUTPUT

Repository Initialized

Files Added

Commit Created

Repository Connected to GitHub

Code Uploaded Successfully

Commit History Displayed

Branch Created and Merged

---

MOST IMPORTANT VIVA QUESTIONS

What is Git?

Git is a distributed version control system used to track changes in source code.

What is GitHub?

GitHub is an online platform used to host Git repositories.

What is Version Control?

A system that manages changes to files over time.

Difference between Git and GitHub?

Git:
Local Version Control Tool

GitHub:
Cloud Hosting Platform for Git Repositories

What is Repository?

A storage location containing project files and version history.

What is Commit?

A snapshot of project files at a particular time.

What is Staging Area?

Temporary area where changes are prepared before committing.

What is Branch?

An independent line of development.

What is Merge?

Combining changes from one branch into another.

What is Clone?

Copying a repository from GitHub to a local machine.

What is Pull?

Fetching latest changes from GitHub.

What is Push?

Uploading local commits to GitHub.

RESULT

Successfully demonstrated Version Control Operations using Git and GitHub including repository creation, commit, push, pull, clone, branching and merging operations.
