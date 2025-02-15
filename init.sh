#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Initializing Casas Malibu project...${NC}"

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo -e "${GREEN}Initializing git repository...${NC}"
    git init
fi

# Add remote repository
echo -e "${GREEN}Adding remote repository...${NC}"
git remote add origin https://github.com/EmilyThaHuman/casasmalibu.git

# Create necessary directories if they don't exist
echo -e "${GREEN}Creating project directories...${NC}"
mkdir -p netlify/functions
mkdir -p public
mkdir -p src/assets

# Stage all files
echo -e "${GREEN}Staging files...${NC}"
git add .

# Initial commit
echo -e "${GREEN}Creating initial commit...${NC}"
git commit -m "Initial commit: Project setup with Netlify configuration"

# Set main as default branch
echo -e "${GREEN}Setting main as default branch...${NC}"
git branch -M main

# Push to remote
echo -e "${GREEN}Pushing to remote repository...${NC}"
git push -u origin main

# Install Netlify CLI if not installed
echo -e "${GREEN}Checking Netlify CLI installation...${NC}"
if ! command -v netlify &> /dev/null; then
    echo -e "${GREEN}Installing Netlify CLI...${NC}"
    npm install netlify-cli -g
fi

# Initialize Netlify
echo -e "${GREEN}Initializing Netlify...${NC}"
netlify init

echo -e "${BLUE}Setup complete! Your project is now configured with GitHub and Netlify.${NC}" 