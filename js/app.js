var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        //imgAttribution: 'http://www.flickr.com/photos/bigtallguy/22252709',
        nickName: ['Lily']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        //imgAttribution: 'http://www.flickr.com/photos/bigtallguy/434164568',
        nickName: ['Bob']
    },
    {
        clickCount: 0,
        name: 'Sss',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        //imgAttribution: 'http://www.flickr.com/photos/bigtallguy/1413379559',
        nickName: ['TT']
    },
    {
        clickCount: 0,
        name: 'luna',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        //imgAttribution: 'http://www.flickr.com/photos/bigtallguy/4154543904',
        nickName: ['Ricy']
    },
    {
        clickCount: 0,
        name: 'yoyo',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        //imgAttribution: 'http://www.flickr.com/photos/bigtallguy/9648464288',
        nickName: ['QQ']
    }
]
var cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickName = ko.observableArray(data.nickName);
    //this.level1=ko.observable('New born');
    //this.level2=ko.observable('Kitten');
    this.level = ko.computed(function () {
        if (this.clickCount() <= 15) {
            //return this.level1();
            return 'Newborn';
        }
        else if (this.clickCount() <= 30) {
            //return this.level2();
            return 'Infant';
        }
        else if (this.clickCount() <= 50) {
            return 'Child';
        }
        else if (this.clickCount() <= 80) {
            return 'Teen';
        }
        else if (this.clickCount() <= 120) {
            return 'Adult';
        }
        else { return 'Ninja'; }
    }, this);

};

var ViewModel = function () {
    //or var that=tnis;
    var self = this;//(self awayls is defined as the view model)mean this.currentCat bindings context
    this.catList = ko.observableArray([]);
    initialCats.forEach(function (catItem) {
        self.catList.push(new cat(catItem));
    });
    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function () {
        //this.clickCount(this.clickCount() + 1);another way
        //that.currentCat().clickCount(that.currentCat().clickCount() + 1);
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    this.setCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());