/*jshint esversion: 6 */
window.onload = function(){
    "use strict";
    const textareaEle = document.getElementById("textArea");
    const animationEle = document.getElementById("animation");
    const fontsizeEle = document.getElementById("fontSize");
    const startEle = document.getElementById("start");
    const stopEle = document.getElementById("stop");
    const turboEle = document.getElementById("turbo");

    startEle.onclick = start;
    stopEle.onclick = stop;
    animationEle.onchange = setAnimationText;
    fontsizeEle.onchange = updateFontSize;
    turboEle.onchange = turbo;


    function setAnimationText() {
        textareaEle.value = ANIMATIONS[animationEle.value];
    }

    function updateFontSize() {
        textareaEle.style.fontSize = fontsizeEle.value;
    }

    function start() {
        animation.start(textareaEle, true);
        startEle.disabled = true;
        stopEle.disabled = false;
        animationEle.disabled = true;
    }

    function stop() {
        textareaEle.value = animation.stop();
        startEle.disabled = false;
        stopEle.disabled = true;
        animationEle.disabled = false;
    }

    function turbo() {
        animation.turbo(textareaEle, turboEle.checked);
    }

    let animation = {
        speed: 250,
        frameIndex: 0,
        frames: [],
        interval: null,
        textarea: '',
        stop: function () {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            return this.textarea;
        },
        start: function (textarea, reset) {
            if(this.interval){
                console.log(this.interval);
            }
            if (reset) {
                this.frameIndex = 0;
                this.textarea = textarea.value;
                this.frames = (textarea.value || "").split("=====\n");
            }

            let parent = this;
            this.interval = setInterval(function () {
                textarea.value = parent.frames[parent.frameIndex];
                parent.frameIndex++;
                if (parent.frameIndex >= parent.frames.length) {
                    parent.frameIndex = 0;
                }
            }, this.speed);
        },
        turbo: function (textarea, isChecked) {
            this.speed = isChecked ? 50 : 250;
            if (this.interval) {
                this.stop();
                this.start(textarea);
            }

        }
    };

};

