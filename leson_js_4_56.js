let temperature = 14;
let isWindy = true;

if (temperature < 15 && isWindy) {
    console.log(`Вдягніться тепліше і візьміть шапку`);
} else if (temperature > 15 && !isWindy) {
    console.log(`Хороший день для прогулянки`);
} else {
    console.log(`Так собі`);
}