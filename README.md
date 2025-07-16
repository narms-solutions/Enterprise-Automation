## Project Setup and Environment Variables

This project requires setting up some environment variables to work correctly.  
We **do NOT** commit the `.env` file to the repository to keep sensitive information (such as usernames and passwords) safe.  
Instead, we use a `.env.example` file as a template.

### How to set up environment variables

After cloning the repository, copy the `.env.example` file to create your own `.env` file:

```bash
cp src/config/.env.example src/config/.env
# Open the .env file and replace the place holders with your credentials

Important: Make sure NOT to commit the .env file to the Git repository.
The .env file is already included in .gitignore to prevent accidental commits..


