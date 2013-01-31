/* ==========================================================
 * jquery-slider.js v0.1 Beta
 * https://github.com/colynb/jquery-slider
 * ==========================================================
 * Copyright 2013, Colyn Brown.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

(function(){

    $.widget( "cb.slider", {
        _create: function() {
            
            this.element
                .wrap( "<div class='slider-container'></div>" );

            this.element.attr('rel', this.options.slideDirection);

            this._items = $('li', this.element);

            this._items.each(function(i,item){
                var $item = $(item);
                $item.addClass('slider-item');
                if (i === 0) {
                    $item.addClass('active');
                }
            });
            this._current = 0;
            this._run();
        },

        _setInterval: function(func, delay, context) {
            return setInterval(function(){
                func.call(context);
            }, delay);
        },

        _showSlide: function(i) {
            this._current = i;
            var opts = null;
            if (this.options.slideDirection == 'left') {
                opts = {left: -(this.options.width * i)};
            } else {
                opts = {top: -(this.options.height * i)};
            }
            this.element.animate(opts, this.options.duration);
        },

        _run: function() {
            this._interval = this._setInterval(function(){
                this._rotateSlides();
            }, this.options.delay, this);
        },

        _rotateSlides: function() {
            var next = 0;

            if (this._current == this._items.length - 1) {
                next = 0;
            } else {
                next = this._current + 1;
            }
            this._showSlide(next);
        }

    });
})();