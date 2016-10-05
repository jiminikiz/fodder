angular.module('module.keyboard', ['ngSanitize'])
    .controller('controller.keyboard', function() {
        console.info('controller.keyboard loaded');

        var keyboard = this;

        keyboard.keys = [{
            name: "backspace",
            symbol: "",
            code: 8,
        },{
            name: "tab",
            symbol: "",
            code: 9,
        },{
            name: "enter",
            symbol: "",
            code: 13,
        },{
            name: "shift",
            symbol: "",
            code: 16,
        },{
            name: "ctrl",
            symbol: "",
            code: 17,
        },{
            name: "alt",
            symbol: "",
            code: 18,
        },{
            name: "pause",
            symbol: "",
            code: 19,
        },{
            name: "break",
            symbol: "",
            code: 19,
        },{
            name: "caps-lock",
            symbol: "",
            code: 20,
        },{
            name: "escape",
            symbol: "",
            code: 27,
        },{
            name: "page-up",
            symbol: "",
            code:33,
        },{
            name: "page-down",
            symbol: "",
            code:34,
        },{
            name: "end",
            symbol: "",
            code: 35,
        },{
            name: "home",
            symbol: "",
            code: 36,
        },{
            name: "left-arrow",
            symbol: "&ltrif;",
            code: 37,
        },{
            name: "up-arrow",
            symbol: "&utrif;",
            code: 38,
        },{
            name: "right-arrow",
            symbol: "&rtrif;",
            code: 39,
        },{
            name: "down-arrow",
            symbol: "&dtrif;",
            code: 40,
        },{
            name: "insert",
            symbol: "",
            code: 45,
        },{
            name: "delete",
            symbol: "",
            code: 46,
        },{
            name: "0",
            symbol: "",
            code: 48,
        },{
            name: "1",
            symbol: "",
            code: 49,
        },{
            name: "2",
            symbol: "",
            code: 50,
        },{
            name: "3",
            symbol: "",
            code: 51,
        },{
            name: "4",
            symbol: "",
            code: 52,
        },{
            name: "5",
            symbol: "",
            code: 53,
        },{
            name: "6",
            symbol: "",
            code: 54,
        },{
            name: "7",
            symbol: "",
            code: 55,
        },{
            name: "8",
            symbol: "",
            code: 56,
        },{
            name: "9",
            symbol: "",
            code: 57,
        },{
            name: "a",
            symbol: "",
            code: 65,
        },{
            name: "b",
            symbol: "",
            code: 66,
        },{
            name: "c",
            symbol: "",
            code: 67,
        },{
            name: "d",
            symbol: "",
            code: 68,
        },{
            name: "e",
            symbol: "",
            code: 69,
        },{
            name: "f",
            symbol: "",
            code: 70,
        },{
            name: "g",
            symbol: "",
            code: 71,
        },{
            name: "h",
            symbol: "",
            code: 72,
        },{
            name: "i",
            symbol: "",
            code: 73,
        },{
            name: "j",
            symbol: "",
            code: 74,
        },{
            name: "k",
            symbol: "",
            code: 75,
        },{
            name: "l",
            symbol: "",
            code: 76,
        },{
            name: "m",
            symbol: "",
            code: 77,
        },{
            name: "n",
            symbol: "",
            code: 78,
        },{
            name: "o",
            symbol: "",
            code: 79,
        },{
            name: "p",
            symbol: "",
            code: 80,
        },{
            name: "q",
            symbol: "",
            code: 81,
        },{
            name: "r",
            symbol: "",
            code: 82,
        },{
            name: "s",
            symbol: "",
            code: 83,
        },{
            name: "t",
            symbol: "",
            code: 84,
        },{
            name: "u",
            symbol: "",
            code: 85,
        },{
            name: "v",
            symbol: "",
            code: 86,
        },{
            name: "w",
            symbol: "",
            code: 87,
        },{
            name: "x",
            symbol: "",
            code: 88,
        },{
            name: "y",
            symbol: "",
            code: 89,
        },{
            name: "z",
            symbol: "",
            code: 90,
        },{
            name: "left-win",
            symbol: "",
            code: 91,
        },{
            name: "right-win",
            symbol: "",
            code: 92,
        },{
            name: "select-key",
            symbol: "",
            code: 93,
        },{
            name: "numpad-0",
            symbol: "",
            code: 96,
        },{
            name: "numpad-1",
            symbol: "",
            code: 97,
        },{
            name: "numpad-2",
            symbol: "",
            code: 98,
        },{
            name: "numpad-3",
            symbol: "",
            code: 99,
        },{
            name: "numpad-4",
            symbol: "",
            code: 100,
        },{
            name: "numpad-5",
            symbol: "",
            code: 101,
        },{
            name: "numpad-6",
            symbol: "",
            code: 102,
        },{
            name: "numpad-7",
            symbol: "",
            code: 103,
        },{
            name: "numpad-8",
            symbol: "",
            code: 104,
        },{
            name: "numpad-9",
            symbol: "",
            code: 105,
        },{
            name: "multiply",
            symbol: "",
            code: 106,
        },{
            name: "add",
            symbol: "",
            code: 107,
        },{
            name: "subtract",
            symbol: "",
            code: 109,
        },{
            name: "decimal point",
            symbol: "",
            code: 110,
        },{
            name: "divide",
            symbol: "",
            code: 111,
        },{
            name: "f1",
            symbol: "",
            code: 112,
        },{
            name: "f2",
            symbol: "",
            code: 113,
        },{
            name: "f3",
            symbol: "",
            code: 114,
        },{
            name: "f4",
            symbol: "",
            code: 115,
        },{
            name: "f5",
            symbol: "",
            code: 116,
        },{
            name: "f6",
            symbol: "",
            code: 117,
        },{
            name: "f7",
            symbol: "",
            code: 118,
        },{
            name: "f8",
            symbol: "",
            code: 119,
        },{
            name: "f9",
            symbol: "",
            code: 120,
        },{
            name: "f10",
            symbol: "",
            code: 121,
        },{
            name: "f11",
            symbol: "",
            code: 122,
        },{
            name: "f12",
            symbol: "",
            code: 123,
        },{
            name: "num-lock",
            symbol: "",
            code: 144,
        },{
            name: "scroll-lock",
            symbol: "",
            code: 145,
        },{
            name: "semi-colon",
            symbol: "",
            code: 186,
        },{
            name: "equal-sign",
            symbol: "",
            code: 187,
        },{
            name: "comma",
            symbol: "",
            code: 188,
        },{
            name: "dash",
            symbol: "",
            code: 189,
        },{
            name: "period",
            symbol: "",
            code: 190,
        },{
            name: "forward-slash",
            symbol: "",
            code: 191,
        },{
            name: "grave",
            symbol: "",
            code: 192,
        },{
            name: "open-bracket",
            symbol: "",
            code: 219,
        },{
            name: "back-slash",
            symbol: "",
            code: 220,
        },{
            name: "close-braket",
            symbol: "",
            code: 221,
        },{
            name: "single-quote",
            symbol: "",
            code: 222
        }];
    });
