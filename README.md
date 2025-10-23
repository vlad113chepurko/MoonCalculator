# 🌙 Moon Calculator / Калькулятор фаз Луны

A modern web application for calculating moon phases and illumination percentages. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

Современное веб-приложение для расчета фаз Луны и процента освещенности. Разработано на Next.js 15, React 19, TypeScript и Tailwind CSS.

---

## ✨ Features / Возможности

- 🌓 **Moon Phase Calculation** - Calculate the current phase of the moon for any date
- 📊 **Illumination Percentage** - Get precise moon illumination percentage
- 📅 **Date Selection** - Interactive calendar for date selection
- 🎯 **Adjustable Precision** - Set calculation precision from 0 to 20 decimal places
- 🌑 **Moon Direction** - Determine if the moon is waxing or waning
- ⚡ **Real-time Calculation** - Instant results with precision adjustment
- 🎨 **Modern UI** - Clean, responsive interface built with Tailwind CSS

---

- 🌓 **Расчет фазы Луны** - Вычисление текущей фазы Луны для любой даты
- 📊 **Процент освещенности** - Точный процент освещенности Луны
- 📅 **Выбор даты** - Интерактивный календарь для выбора даты
- 🎯 **Настраиваемая точность** - Установка точности расчетов от 0 до 20 знаков после запятой
- 🌑 **Направление Луны** - Определение, растет Луна или убывает
- ⚡ **Расчет в реальном времени** - Мгновенные результаты при изменении точности
- 🎨 **Современный интерфейс** - Чистый, адаптивный интерфейс на Tailwind CSS

---

## 🚀 Getting Started / Начало работы

### Prerequisites / Требования

- Node.js 20.x or higher / Node.js 20.x или выше
- npm or yarn / npm или yarn

### Installation / Установка

1. Clone the repository / Клонируйте репозиторий:
```bash
git clone https://github.com/vlad113chepurko/MoonCalculator.git
cd MoonCalculator
```

2. Install dependencies / Установите зависимости:
```bash
npm install
```

3. Run the development server / Запустите сервер разработки:
```bash
npm run dev
```

4. Open your browser / Откройте браузер:
```
http://localhost:3000
```

---

## 📦 Scripts / Скрипты

- `npm run dev` - Start development server with Turbopack / Запуск сервера разработки с Turbopack
- `npm run build` - Build production application / Сборка production версии
- `npm start` - Start production server / Запуск production сервера
- `npm run lint` - Run ESLint / Запуск ESLint

---

## 🏗️ Project Structure / Структура проекта

```
MoonCalculator/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Calendar/          # Calendar component
│   ├── MoonCalculator/    # Main calculator component
│   ├── Result/            # Results display component
│   └── index.ts           # Component exports
├── hooks/                 # Custom React hooks
├── services/              # Business logic and calculations
│   └── Moon.service.ts    # Moon calculation service
├── store/                 # Zustand state management
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

---

## 🧮 Moon Calculation Algorithm / Алгоритм расчета

The application uses astronomical algorithms to calculate:

Приложение использует астрономические алгоритмы для расчета:

1. **Julian Day** - Converts Gregorian calendar date to Julian Day number / Преобразование даты григорианского календаря в юлианский день
2. **Moon Age** - Calculates days since new moon / Вычисление дней с момента новолуния
3. **Illumination Percentage** - Determines moon illumination based on phase / Определение освещенности на основе фазы
4. **Moon Phase** - Identifies current moon phase (New Moon, First Quarter, Full Moon, etc.) / Определение текущей фазы Луны (Новолуние, Первая четверть, Полнолуние и т.д.)
5. **Moon Direction** - Determines if moon is waxing or waning / Определение, растет Луна или убывает

---

## 🛠️ Technologies / Технологии

- **Framework:** Next.js 15.5.6
- **React:** 19.1.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4.x
- **State Management:** Zustand 5.0.8
- **Build Tool:** Turbopack (Next.js)
- **Linting:** ESLint 9.x

---

## 📱 Moon Phases / Фазы Луны

The calculator recognizes the following moon phases:

Калькулятор распознает следующие фазы Луны:

- 🌑 **Новолуние** (New Moon) - 0% illumination
- 🌒 **Растущий полумесяц** (Waxing Crescent) - 1-24% illumination
- 🌓 **Первый квартал** (First Quarter) - 25% illumination
- 🌔 **Растущая луна** (Waxing Gibbous) - 26-49% illumination
- 🌕 **Полнолуние** (Full Moon) - 50% illumination
- 🌖 **Убывающая луна** (Waning Gibbous) - 51-74% illumination
- 🌗 **Последний квартал** (Last Quarter) - 75% illumination
- 🌘 **Старая луна** (Waning Crescent) - 76-99% illumination

---

## 🤝 Contributing / Вклад в проект

Contributions are welcome! Please feel free to submit a Pull Request.

Приветствуются любые улучшения! Не стесняйтесь отправлять Pull Request.

---

## 📄 License / Лицензия

This project is open source and available under the MIT License.

Этот проект является открытым и доступен под лицензией MIT.

---

## 👤 Author / Автор

Vlad Chepurko - [@vlad113chepurko](https://github.com/vlad113chepurko)

---

## 🌟 Acknowledgments / Благодарности

- Moon phase calculation algorithms based on astronomical formulas
- Inspired by [PlanetCalc](https://planetcalc.ru)

Алгоритмы расчета фаз Луны основаны на астрономических формулах
Вдохновлено [PlanetCalc](https://planetcalc.ru)
