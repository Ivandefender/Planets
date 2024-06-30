<h1 align="center">Planets-fact-site</h1>

<div align="center">
    <a href="https://ivandefender.github.io/Planets/">View Project |</a>
    <a href="https://github.com/Ivandefender/Planets">View Code</a>
</div>

<p align="center">
<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html&logoColor=orange">
<img src="https://img.shields.io/badge/css-blue?style=for-the-badge&logo=css&logoColor=blue">
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=yellow&labelColor=black">
</p>

# Start HTML

## Start Header

**Будова:**

1. Логотип сайта
2. Навігаційне меню 

## End Header

## Start Main

**Будова:**

1. Секція 1:
- Дві колонки (ліва - зображення планети, справа - детальна інформація про неї, про її поверхність, внутрішню будову)
2. Секція 2:
- Коротка інформація про планету: час оберту планети, час оберту навколо сонця, радіус планети, середня температура

## End Main

# End HTML

# Footer - відсутній 

# Start CSS

**Є два файли стилів:**

1. **Reset.css** - скидує базові налаштування сторінки браузера
2. **Style.css** - основні стилі з адаптивом на мобільні пристрої

**Специфічні селектори класів:**

Змінні з кольорами для кращого орієнтування
```css
:root {
    --white: #FFF;
    --btn-hover: rgba(216, 216, 216, 0.2);
    --btn-border: rgba(255, 255, 255, 0.2);
    --bg: #070724;
    --mercury: #419EBB;
    --venus: #EDA249;
    --earth: #6D2ED5;
    --mars: #D14C32;
    --jupiter: #D83A34;
    --saturn: #CD5120;
    --uranus: #1EC1A2;
    --neptune: #2D68F0;

    --header-padding: 25px;
}
```

**Приклад використання змінної з кольором:**
```css
.header__nav-item:nth-child(3) .header__nav-link:hover::before,
.earth .header__nav-item:nth-child(3) .header__nav-link::before,
.earth .planet__button.active {
    background-color: var(--earth);
}
```

Будь-який клас, який містить в собі частину **__container**
```css
[class*=__container] {
    padding: 0 15px;
    margin: 0 auto;
}
```
# End CSS

# Start JS

**Є два файли -** .js та .json:

1. **Data.json** - файл з даними які підвантажуються на HTML-сторінку. Кожні дані в свою секцію.
2. **Script.js** - основний файл програми.

**Функції:**

```javascript

addContent(); // підвантажує дані на веб-сторінку в залежності від адреси сторінки (планети)

loadData(); // отримуємо дані з data.json 

getCurrentPlanetData(); // отримання конкретних даних про планету через посилання

insertPlanetData(); // механізм підвантаження даних (створення тегів, додавання інформації в теги, зміна стилів)

changePlanetInfo(); // зміна інформації про планету при натисненні на відповідну кнопку з набору (наведений нижче)
```

```html
<div class="planet__buttons">
	<button class="planet__button button"><span>01</span>overview</button>
	<button class="planet__button button"><span>02</span>internal structure</button>
	<button class="planet__button button"><span>03</span>surface geology</button>
</div>
```
# End JS

### Дизайн був взятий з [FrontendMentor.io](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f);

### Розробив: [Ivan Krysak (github: Ivandefender)](https://github.com/Ivandefender);
