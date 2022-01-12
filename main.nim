import std/dom

proc edit() {.exportC.} =
    for x in document.getElementsByTagName("div"):
        x.contentEditable = "true"
    for x in document.getElementsByTagName("span"):
        x.contentEditable = "true"
edit()