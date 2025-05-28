<?php

declare(strict_types=1);

namespace Jaspur\Nova5ItemsField;

use Laravel\Nova\Fields\Field;

final class Items extends Field
{
    /** @var string */
    public $component = 'nova5-items-field';

    public function __construct(string $name, ?string $attribute = null, $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);
    }
}
