window.addEventListener('load', function () {
    (function (_0x6093x1) {
        var _0x6093x2 = {
            items: {},
            container: null,
            totalPages: 1,
            perPage: 3,
            currentPage: 0,
            createNavigation: function () {
                this.totalPages = Math.ceil(this.items.length / this.perPage);
                _0x6093x1('.pagination', this.container.parent()).remove();
                var _0x6093x3 = _0x6093x1('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false">«</a>');
                for (var _0x6093x4 = 0; _0x6093x4 < this.totalPages; _0x6093x4++) {
                    var _0x6093x5 = 'page';
                    if (!_0x6093x4) {
                        _0x6093x5 = 'page current'
                    };
                    var _0x6093x6 = '<a class="' + _0x6093x5 + '" data-page="' + (_0x6093x4 + 1) + '">' + (_0x6093x4 + 1) + '</a>';
                    _0x6093x3.append(_0x6093x6)
                };
                _0x6093x3.append('<a class="nav next" data-next="true">»</a>');
                this.container.after(_0x6093x3);
                var _0x6093x7 = this;
                _0x6093x1('body').off('click', '.nav');
                this.navigator = _0x6093x1('body').on('click', '.nav', function () {
                    var _0x6093x8 = _0x6093x1(this);
                    _0x6093x7.navigate(_0x6093x8.data('next'))
                });
                _0x6093x1('body').off('click', '.page');
                this.pageNavigator = _0x6093x1('body').on('click', '.page', function () {
                    var _0x6093x8 = _0x6093x1(this);
                    _0x6093x7.goToPage(_0x6093x8.data('page'))
                })
            },
            navigate: function (_0x6093x9) {
                if (isNaN(_0x6093x9) || _0x6093x9 === undefined) {
                    _0x6093x9 = true
                };
                _0x6093x1('.pagination .nav').removeClass('disabled');
                if (_0x6093x9) {
                    this.currentPage++;
                    if (this.currentPage > (this.totalPages - 1)) {
                        this.currentPage = (this.totalPages - 1)
                    };
                    if (this.currentPage == (this.totalPages - 1)) {
                        _0x6093x1('.pagination .nav.next').addClass('disabled')
                    }
                } else {
                    this.currentPage--;
                    if (this.currentPage < 0) {
                        this.currentPage = 0
                    };
                    if (this.currentPage == 0) {
                        _0x6093x1('.pagination .nav.prev').addClass('disabled')
                    }
                };
                this.showItems()
            },
            updateNavigation: function () {
                var _0x6093xa = _0x6093x1('.pagination .page');
                _0x6093xa.removeClass('current');
                _0x6093x1('.pagination .page[data-page="' + (this.currentPage + 1) + '"]').addClass('current')
            },
            goToPage: function (_0x6093xb) {
                this.currentPage = _0x6093xb - 1;
                _0x6093x1('.pagination .nav').removeClass('disabled');
                if (this.currentPage == (this.totalPages - 1)) {
                    _0x6093x1('.pagination .nav.next').addClass('disabled')
                };
                if (this.currentPage == 0) {
                    _0x6093x1('.pagination .nav.prev').addClass('disabled')
                };
                this.showItems()
            },
            showItems: function () {
                this.items.hide();
                var _0x6093xc = this.perPage * this.currentPage;
                this.items.slice(_0x6093xc, _0x6093xc + this.perPage).show();
                this.updateNavigation()
            },
            init: function (_0x6093xd, _0x6093xe, _0x6093xf) {
                this.container = _0x6093xd;
                this.currentPage = 0;
                this.totalPages = 1;
                this.perPage = _0x6093xf;
                this.items = _0x6093xe;
                this.createNavigation();
                this.showItems()
            }
        };
        _0x6093x1.fn.pagify = function (_0x6093xf, _0x6093x10) {
            var _0x6093x8 = _0x6093x1(this);
            var _0x6093xe = _0x6093x1(_0x6093x10, _0x6093x8);
            if (isNaN(_0x6093xf) || _0x6093xf === undefined) {
                _0x6093xf = 3
            };
            if (_0x6093xe.length <= _0x6093xf) {
                return true
            };
            _0x6093x2.init(_0x6093x8, _0x6093xe, _0x6093xf)
        }
    })(jQuery);
    $('#Update').pagify(18, 'div.bookItem') //change post impressions on a page
})
