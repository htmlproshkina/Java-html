<!doctype HTML>
<html lang="Ru-Ru">

<head>
    <meta charset="utf-8">
    <title>Шаблон страницы</title>
    <meta name="description" content="The HTML5 sample">
    <meta name="author" content="from internet">
    <link rel="stylesheet" href="css\styles.css">
</head>

<body>
    <header>
        <hr>
        <h1>Заголовок страницы</h1>
        <hr>
    </header>
    <nav>
        <h2>Навигация</h2>
        <hr>
    </nav>
    <main>
        <header>
            <h2>Заголовк контента</h2>
            <hr>
        </header>

        <article>
            <header>
                <h3>Статья 1</h3>
            </header>
            <section>
                <h4>Введение</h4>
            </section>
            <section>
                <h4>Основная часть</h4>
            </section>
            <section>
                <h4>Заключение</h4>
            </section>
            <footer>
                <hr>
                <h4>Источник информации</h4>
                <address>
                    Ссылка на источник в сети интернет
                </address>
            </footer>
        </article>

    </main>
    <footer>
        <hr>
        <h4>Информация о разработчиках, контакты</h4>
        <hr>
    </footer>
    <script src="Dialog_1.js"></script>
<body>

<script>
    let infoPazient=["Иванов", "Иван", "Иванович", 15, "мая", 1974, "м"];
    console.log(infoPazient);
    console.log(infoPazient[0]);
    console.log(infoPazient[1]);
    console.log(infoPazient[2]);
    console.log(infoPazient[3]);
    console.log(infoPazient[4]);
    console.log(infoPazient[5]);
    console.log(infoPazient[6]);
    /*
    let lastname;
    lastname=prompt("Введите имя пациента", lastname);
    console.log(lastname);
    infoPazient[0]= lastname;
    console.log(infoPazient);
    */
    var person = {
        "SNILS 1": ["Иванов", "Иван", "Иванович", 15, "мая", 1974, "м","исполнено"],
        "SNILS 2": ["Сидоров", "Петр", "Сидорович", 20, "мая", 1980, "м","медотвод"],
        "SNILS 3": ["Прошкина", "Ульяна", "Батьковна", 02, "марта", 1900, "ж","назначено"],
        "SNILS 4": ["Макарова", "Софья", "Сергеевна", 12, "апреля", 1997, "ж", "медотвод"],
        "SNILS 5": ["Васильева", "Яна", "Сергеевна", 2, "апреля", 1983, "ж", "исполнено"],
        "SNILS 6": ["Дмитриева", "Ольга", "Викторовна", 22, "марта", 1984, "ж", "назначено"],
        "SNILS 7": ["Буханкин", "Виктор", "Сергеевич", 13, "декабря", 1987, "м", "назначено"],
        "SNILS 8": ["Цветков", "Дмитрий", "Денисович", 17, "июня", 1989, "м", "медотвод"],
        "SNILS 9": ["Андреева", "Анастасия", "Максимовна", 4, "августа", 2002, "ж", "исполнено"],
        "SNILS 10": ["Курочкина", "Софья", "Викторовна", 14, "июля", 1996, "ж", "медотвод"],
    };
    console.log(person);

    
    let SNILS;
    var FirstFunction = function (person,SNILS) {
        SNILS=prompt("Введите SNILS пациента", SNILS);
        infoname=person[SNILS];
        //console.log(infoname);
        alert("Информация о пациенте"+infoname);
        statusPriv = person[SNILS][7];
        console.log(statusPriv);
    };
 
    // Извлекаем информацию ог текущем статусе прививки
    SecondFunction = function (statusPriv,infoname) {

        //statusPriv = person[SNILS][7];
    
       //Проверяем возможность изменения статуса
    if (statusPriv === "исполнено") {
        alert("Отказано в прививке пациенту" + infoname);
    } else if (statusPriv === "медотвод") {
        alert("Отказано в прививке пациенту" + infoname);
    } else {
        alert("Исполнить прививку пациенту" + infoname);      
    } 
}
ForSecond = FirstFunction(person,SNILS);
SecondFunction(statusPriv,infoname);

    //Предлагаем закончить или продолжить работу в этом окне
    while (confirm("Продолжить проверку прививочного статутса?")) {
        ForSecond = FirstFunction(person,SNILS);
        SecondFunction(statusPriv,infoname);
    }
    
    console.log("Сеанс проверки прививочного статутса закончен");

</script>

</body>
</html>