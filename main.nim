
import std/[dom]

let x = $(window.prompt("whos joe mama", ""))
if x != "":
    document.write("<h1>" & x & "</h1>")
    if x == "barack obama":
        document.write("nigger")