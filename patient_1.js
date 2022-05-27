class Patient {
    constructor(f, i, o, d, s, sh) {
    this.F = f;
    this.I = i;
    this.O = o;
    this.D = new Date(d);
    this.S = s;
    this.SH = sh;
    }
    setById() {
    document.getElementById("F").textContent = this.F;
    document.getElementById("I").textContent = this.I;
    document.getElementById("O").textContent = this.O;
    document.getElementById("Y").textContent = this.D.getFullYear();
    document.getElementById("S").textContent = this.S;
    document.getElementById("SH").textContent = this.SH;
    }
   }
   let Obabkova = new Patient('Обабкова', 'Анна', 'Викторовна', new Date(1995, 08, 25),"ж","Назначено");
   let Alekseeva = new Patient('Алексеева', 'Таисия', 'Романовна', new Date(1997, 01, 14),"ж","Медотвод");
   let Ivanko = new Patient('Иванко', 'Елена', 'Ильинична', new Date(2002, 07, 17),"ж","Исполнено");
   Obabkova.setById();
   Alekseeva.setById();
   Ivanko.setById();