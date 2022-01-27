const { GildedRose, Item } = require("../app/gilded-rose");

test("Los articulos conjurados se degradan el doble de rapido", () => {
    let items = [new Item("Conjured", 10, 10)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(8);
});

test("Los articulos se degradan el doble de rapido cuando su fecha de caducidad a pasado", () => {
    let items = [new Item("Conjured", 0, 10)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(6);
});

test("La calidad de un articulo nunca es negativa", () => {
    let items = [new Item("Conjured", 0, 1)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
});

test("El Aged Brie en realidad aumenta en calidad a medida que envejece", () => {
    let items = [new Item("Aged Brie", 10, 1)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(2);
});

test("El Aged Brie aumenta en calidad el doble si su valor Sellin llega a 0", () => {
    let items = [new Item("Aged Brie", 0, 1)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(3);
});

test("La calidad de ningun producto puede superar 50", () => {
    let items = [new Item("Aged Brie", 0, 50)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(50);
});

test("La calidad de los Backstage passes al igual que el Aged Brie aumenta su calidad a medida que se acerca a su valor Sellin", () => {
    let items = [new Item("Backstage passes to a TAFKAL80ETC concert", 20, 12)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(13);
});

test("La calidad de los Backstage passes aumenta el doble cuando hay 10 dias o menos para su fecha", () => {
    let items = [new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(12);
});

test("La calidad de los Backstage passes aumenta el triple cuando hay 5 dias o menos para su fecha", () => {
    let items = [new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(13);
});


test("La calidad de los Backstage passes cae a 0 despues de la fecha del concierto", () => {
    let items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
});

test("Sulfuras es un articulo legendario por ende su calidad no se degrada", () => {
    let items = [new Item("Sulfuras, Hand of Ragnaros", 10, 50)]
    let gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(50);
});