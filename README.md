# How To Use Lapak Comic 

Disclaimer: Prasyarat Penggunaan System ini 
1. Install Express JS (Required)
2. Install Sequelize 
3. Install Postgre
4. Install Postman
5. Install DBeaver

Penggunaan API :
` 
    Comic Controller : GET,POST,PUT,DEL
`
`
    Publisher Controller: GET,POST,PUT,DEL
`
Important !:

Jika kalian ingin menggunakan Aplikasi ini harap install terlebih dahulu Node Di Laptop/Pc Kalian seperti ini :
`npm install`  Setelah di install baru kalian bisa pakai.

Pengunaan API Dan DBeaver:
`npx sequelize-cli db:create` setelah di create akan muncul Config.json di folder Api kalian buka Config.json, isi filenya seperti ini 
```
{
    "development" :{
        "username":"postgres",
        "password":"<isi dengan Pass DBeaver>" 
        "database":"<isi dengan Nama database>"
        "host" : "127.0.0.1"
        "dialect":"postgres"
    },
    {
        "test":{
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
    }
}
```
Setelah kalian selesai isi jangan lupa untuk membuat model 
`npx sequelize-cli models:generate --name publisher --attributes name:string,avatar:string`

`npx sequelize-cli models:generate --name comic --atributtes title:string,image:string,genre:string,description:string,price:integer,page:integer,publisherId:integer`

setelah selesai membuat model silahkan gunakan perintah untuk migrate:
`npx sequelize-cli db:migrate`

Lihat di DBeaver untuk hasilnya.

Note :
Jika API Dan Frond end Bermasalah seperti `ACCESS-CONTROL-ALLOW-ORIGIN Block` Oleh `CORS` Kalian Bisa Pake extensi Cors Unblock di Google Chrome.
