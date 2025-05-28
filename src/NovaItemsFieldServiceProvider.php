<?php

declare(strict_types=1);

namespace Jaspur\Nova5ItemsField;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Nova;

final class NovaItemsFieldServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Nova::serving(function (): void {
            Nova::script('nova5-items-field', __DIR__ . '/../dist/field');
        });
    }
}
