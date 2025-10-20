## 📦 Changelog: Sass Migration & Modernization

Дата: 20 октября 2025

## ✅ Миграция Sass на модульную систему

Переведён проект с устаревшего @import на современный @use / @forward синтаксис. Использован
sass-migrator module для автоматической конверсии. Все переменные и миксины теперь доступны через
namespace (utils.$var, mixins.$mixin и т.д.). Обновлены пути и структура sass/utils,
sass/components, sass/base.

## ⚠️ Устранение предупреждений mixed-decls

Перенесены CSS-свойства (position, transition, padding и др.) выше вложенных селекторов. В случаях,
где порядок важен — обёрнуты свойства в & {} для совместимости с Sass 2.0. Обновлены файлы:

- utils/variables
- components/page-general
- components/page-header
- components/page-section-hero
- components/page-secrion-work
- components/page-section-command
- components/page-section-client
- components/portfolio-btn
- components/portfolio-.projects
- components/page-footer
- components/page-modal

## 🧼 Общая чистка

Удалены дублирующие @import и устаревшие конструкции. Добавлены комментарии к новым @use и @forward
точкам. Обновлены пути в main.scss и main.min.scss.
