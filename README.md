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
- **Docker Desktop:** Ensure Docker Desktop is installed on your machine. You can down it [here](https://www.docker.com/products/docker-desktop).
- **Visual Studio Code:** Ensure Visual Studio Code is installed. You can download it [here](https://code.visualstudio.com/).

### Steps
1. **Clone the repository:**
```sh
    https://github.com/JohnYu2000/Real-Estate-Dashboard.git
```
2. **Download the dataset:** Go to [this link](https://www.kaggle.com/datasets/jeremylarcher/canadian-house-prices-for-top-cities) and download the dataset.
3. **Move the dataset to the project root directory:** After downloading, move the `.csv` file to the root directory of the project.
4. **Navigate to the root directory of the project:**
```sh
    cd Real-Estate-Dashboard
```
5. **Build and start the Docker containers:**
```sh
    docker compose up --build
```
6. **Access the application:** Open your browser and go to http://localhost:3000.