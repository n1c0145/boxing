var data = [
    {
        user: "nico",
        password: "12345",
        userData: {

            nombre: "Nicolas",
            apellido: "Loza",
            ci: 1719088161,
            telefono: 0998790522,
            correo: "nicolas.lozalml@gmail.com",
            direccion: "Tumbaco"

        }

    },
    {
        user: "juan",
        password: "12345",
        userData: {

            nombre: "Juan",
            apellido: "Perez",
            ci: 1756845725,
            telefono: 096738773,
            correo: "jaunp@gmail.com",
            direccion: "Cumbaya"

        }

    },
    {
        user: "diego",
        password: "12345",
        userData: {

            nombre: "Diego",
            apellido: "Yanez",
            ci: 1789466862,
            telefono: 0997846882,
            correo: "diegoyanez@gmail.com",
            direccion: "Pifo"

        }

    }
];




function login() {
   
    var user = document.getElementById("user").value;
var password = document.getElementById("password").value;


     result = JSON.stringify(data); 

       for (var key in data) {


          if (user === data[key]['user']) {
              if (password === result[key]['password']) {
                  alert("ok")
              }
          }
      }
}





