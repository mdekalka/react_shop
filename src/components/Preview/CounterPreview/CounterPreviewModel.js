export default {
  react: {
    title: 'React',
    content: "// Fullscreen API позволяет приложению переходить в фулл-скрин режим.\n// document.fullscreenEnabled - возвращает boolean значение, показывающее доступен/разрешен ли\n// фулл-скрин режим.\n\n// element.requestFullscreen() - отправляет запрос на фулл-скрин режим для выбранного элемента.\n// Возвращает resolved Promise, если запрос был успешен.\n\n// document.fullscreenElement - возвращает ссылку на элемент, который сейчас находится в фулл-скрин\n// режиме.\n// document.addEventListener('fullscreenchange', eventHandler) - ивент, который триггерится \n// на включение/отключение фулл-скрин режима.\n\n// Передать элемент и сделать запрос на фулл-скрин режим\nfunction onFullScreenHandlerThis(element, event) {\n    var _this = this;\n\n    if (element) {\n        var fsPromise = element[requestFullscreen]();\n\n        if (fsPromise && fsPromise.catch) {\n            maybePromise.catch(function(error) {\n                _this.addLog('Cannot acquire fullscreen mode: ' + error);\n            });\n        }\n    }\n};\n\n// Закрыть фулл-скрин режим\ndocument.exitFullscreen();",
    links: []
  },
  redux: {
    title: 'Redux',
    content: '<div className="text"> akjsdgh kakjdgkak dg dsg\n asdsgjgd <spansdgkl sdkjg kjs</span><p>afsasf</p></div>',
    links: []
  }
};