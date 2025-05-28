# 🧩 Jaspur\Nova5ItemsField for Laravel Nova 5

A Nova 5 field for managing dynamic repeatable **non-empty string** items using a simple, intuitive input list. Supports drag-and-drop reordering and paste-to-split functionality.

---

## ⚙️ Installation

```bash
composer require jaspur/nova5-items-field
npm install && npm run build
php artisan vendor:publish
```

---

## 📦 Usage in a Nova Resource

```php
use Jaspur\Nova5ItemsField\Items;

public function fields(Request $request): array
{
    return [
        Items::make('Tags')
            ->placeholder('Add a tag')
            ->reorderable()
            ->split(','),
    ];
}
```

---

## 🧪 Example Laravel Migration

Your database column should be `TEXT` or `JSON`:

```php
$table->json('tags')->nullable();
```

---

## 🛠 Model Setup (optional)

You may define the `$casts` entry to auto-handle JSON conversion:

```php
protected $casts = [
    'tags' => 'array',
];
```

This converts to `list<non-empty-string>` automatically.

---

## ✅ Features

| Feature       | Description                             |
|---------------|-----------------------------------------|
| Reorderable   | Drag-and-drop with persistent order     |
| Split Support | Paste comma-separated values            |
| Placeholder   | Customize prompt label                  |

---
