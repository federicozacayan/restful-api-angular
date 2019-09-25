# RESTful API client dockerized with Angular

This is a basic Hello-Wolrd application.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Requirements

- A browser.
- Internet access.
- Docker & Docker-compose installed.
- Git installed.


## Set up

It is assumed it is used linux environment.

### Prepare

Clone this repository.

```bash
git clone https://github.com/federicozacayan/restful-api-angular.git .
```
### Run

Execute the following command in the root folder.
```bash
sudo docker-compose up
```

### Stop

To stop the server press `CTRL+C`.

### Clean your disk

Execute the following command in the root folder to remove container.
```bash
sudo docker-compose down
```
Execute the following command in the root folder to remove the images.
```bash
sudo docker rmi angular_cli:8.3 node:12.4
```



## Tutorial

You can find a tutorial of this project in the following site.

[https://federicozacayan.github.io/tutorial/restful-api-angular/](https://federicozacayan.github.io/tutorial/restful-api-angular/)

## Usage

Open the index.html file with a browser.

- Bring 10 user (Automatically).
- Create a new user.
- Update a user.
- Delete a user.

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.
