<?php

declare(strict_types=1);

namespace Jaspur\Nova5ItemsField;

use Laravel\Nova\Fields\Field;

/**
 * @phpstan-type Item non-empty-string
 * @phpstan-type Items list<Item>
 */
final class Items extends Field
{
    public const COMPONENT = 'nova5-items-field';

    public function __construct(string $name, string|null $attribute = null, callable|null $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);
        $this->component = self::COMPONENT;
    }


    public function reorderable(bool $enabled = true): static
    {
        return $this->withMeta([
            'reorderable' => $enabled,
        ]);
    }

    public function split(string $delimiter): static
    {
        return $this->withMeta([
            'split' => $delimiter,
        ]);
    }

    /**
     * @param int<1, max> $max
     */
    public function max(int $max): static
    {
        return $this->withMeta([
            'max' => $max,
        ]);
    }

    public function draggable(bool $enabled = true): static
    {
        return $this->withMeta([
            'draggable' => $enabled,
        ]);
    }

    public function fullWidth(bool $enabled = true): static
    {
        return $this->withMeta([
            'fullWidth' => $enabled,
        ]);
    }

    /**
     * @param non-empty-string $text
     */
    public function createButtonValue(string $text): static
    {
        return $this->withMeta([
            'createButtonValue' => $text,
        ]);
    }

}