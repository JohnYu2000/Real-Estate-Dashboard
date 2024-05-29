# Real-Estate-Dashboard

This project is a simple dashboard to view and analyze real estate trends in Canada. This dashboard uses a dataset from Kaggle thus the trends and data in this dataset are not representative of market trends in the real world.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Credits](#credits)
- [Contact](#contact)

## Installation
### Prerequisites
- **Docker Desktop:** Ensure Docker Desktop is installed on your machine. You can download it [here](https://www.docker.com/products/docker-desktop).
- **Visual Studio Code:** Ensure Visual Studio Code is installed. You can download it [here](https://code.visualstudio.com/).

### Steps
1. **Clone the repository:**
```sh
    https://github.com/JohnYu2000/Real-Estate-Dashboard.git
```
2. **Download the dataset:** Go to [this link](https://www.kaggle.com/datasets/jeremylarcher/canadian-house-prices-for-top-cities) and download the dataset.
3. **Move the dataset to the project root directory:** After downloading, move the `.csv` file to the root directory of the project.
4. Run the clean_csv.py script. This is to ensure the `.csv` file is in the correct format.
```sh
    python3 clean_csv.py
```
4. **Navigate to the root directory of the project:**
```sh
    cd Real-Estate-Dashboard
```
5. **Build and start the Docker containers:**
```sh
    docker compose up --build
```
6. **Access the application:** Open your browser and go to http://localhost:3000.

### Setup PgAdmin4
Follow these steps to configure PgAdmin 4:
1. Navigate to `localhost:5050`.
2. Type in the username: `admin@example.com` and password: `admin`.
3. Click on "Add New Server".
4. Ensure you are on the "General" tab.
5. Set the name to be "My_PostgreSQL".
6. Navigate to the "Connection" tab.
7. Set "Host name/address" to be `postgres`.
8. Set "Port" to be `5432`.
9. Set "Maintenance database" to be `mydatabase`.
10. Set "Username" to be `admin`.
11. Set "Password" to be `admin`.

## Usage