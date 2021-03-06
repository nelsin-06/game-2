"use strict";
exports.__esModule = true;
exports.GildedRose = exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    return Item;
}());
exports.Item = Item;
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    GildedRose.prototype.updateQuality = function () {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Conjured') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }
            }
            else {
                if (this.items[i].name == 'Conjured') {
                    if (this.items[i].quality >= 1) {
                        if (this.items[i].quality == 1) {
                            this.items[i].quality = this.items[i].quality - 1;
                        }
                        else {
                            this.items[i].quality = this.items[i].quality - 2;
                        }
                    }
                }
                else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                            if (this.items[i].sellIn < 11) {
                                if (this.items[i].quality < 50) {
                                    this.items[i].quality = this.items[i].quality + 1;
                                }
                            }
                            if (this.items[i].sellIn < 6) {
                                if (this.items[i].quality < 50) {
                                    this.items[i].quality = this.items[i].quality + 1;
                                }
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name == 'Conjured') {
                    if (this.items[i].quality >= 1) {
                        if (this.items[i].quality == 1) {
                            this.items[i].quality = this.items[i].quality - 1;
                        }
                        else {
                            this.items[i].quality = this.items[i].quality - 2;
                        }
                    }
                }
                else {
                    if (this.items[i].name != 'Aged Brie') {
                        if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                            if (this.items[i].quality > 0) {
                                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                    this.items[i].quality = this.items[i].quality - 1;
                                }
                            }
                        }
                        else {
                            this.items[i].quality = this.items[i].quality - this.items[i].quality;
                        }
                    }
                    else {
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                }
            }
        }
        return this.items;
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
