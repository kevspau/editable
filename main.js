/* Generated by the Nim Compiler v1.6.2 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555124 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555128 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555130 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555083 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555165 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555113 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555120 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555122 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI33555122 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555122.node = NNI33555122;
var NNI33555120 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555120.node = NNI33555120;
var NNI33555113 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555113.node = NNI33555113;
NTI33555164.base = NTI33555112;
NTI33555165.base = NTI33555112;
var NNI33555112 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555164, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555165, name: "up", sons: null}]};
NTI33555112.node = NNI33555112;
var NNI33555083 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555083.node = NNI33555083;
NTI33555112.base = NTI33555083;
NTI33555113.base = NTI33555112;
NTI33555120.base = NTI33555113;
NTI33555122.base = NTI33555120;
var NNI33555130 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555130.node = NNI33555130;
NTI33555130.base = NTI33555113;
var NNI33555128 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555128.node = NNI33555128;
NTI33555128.base = NTI33555113;
var NNI33555124 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555124.node = NNI33555124;
NTI33555124.base = NTI33555113;

function makeNimstrLit(c_33556802) {
      var result = [];
  for (var i = 0; i < c_33556802.length; ++i) {
    result[i] = c_33556802.charCodeAt(i);
  }
  return result;
  

  
}

function mnewString(len_33556894) {
        return new Array(len_33556894);
  

  
}

function toJSStr(s_33556808) {
                    var Temporary5;
            var Temporary7;

  var result_33556809 = null;

    var res_33556843 = newSeq_33556826((s_33556808).length);
    var i_33556844 = 0;
    var j_33556845 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556844 < (s_33556808).length)) break Label2;
          var c_33556846 = s_33556808[i_33556844];
          if ((c_33556846 < 128)) {
          res_33556843[j_33556845] = String.fromCharCode(c_33556846);
          i_33556844 += 1;
          }
          else {
            var helper_33556858 = newSeq_33556826(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556859 = c_33556846.toString(16);
                  if ((((code_33556859) == null ? 0 : (code_33556859).length) == 1)) {
                  helper_33556858.push("%0");;
                  }
                  else {
                  helper_33556858.push("%");;
                  }
                  
                  helper_33556858.push(code_33556859);;
                  i_33556844 += 1;
                    if (((s_33556808).length <= i_33556844)) Temporary5 = true; else {                      Temporary5 = (s_33556808[i_33556844] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556846 = s_33556808[i_33556844];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556843[j_33556845] = decodeURIComponent(helper_33556858.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556843[j_33556845] = helper_33556858.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556845 += 1;
        }
    } while (false);
    if (res_33556843.length < j_33556845) { for (var i = res_33556843.length ; i < j_33556845 ; ++i) res_33556843.push(null); }
               else { res_33556843.length = j_33556845; };
    result_33556809 = res_33556843.join("");

  return result_33556809;

}

function raiseException(e_33556668, ename_33556669) {
    e_33556668.name = ename_33556669;
    if ((excHandler == 0)) {
    unhandledException(e_33556668);
    }
    
    throw e_33556668;

  
}

function addInt(a_33556941, b_33556942) {
        var result = a_33556941 + b_33556942;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557190, a_33557191, b_33557192) {
      var Temporary1;

  var result_33557193 = 0;

  BeforeRet: do {
      if (!(a_33557191 <= i_33557190)) Temporary1 = false; else {        Temporary1 = (i_33557190 <= b_33557192);      }    if (Temporary1) {
    result_33557193 = i_33557190;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  } while (false);

  return result_33557193;

}

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557141, src_33557142, ti_33557143) {
  var result_33557152 = null;

    switch (ti_33557143.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557132(ti_33557143))) {
      result_33557152 = src_33557142;
      }
      else {
        result_33557152 = [src_33557142[0], src_33557142[1]];
      }
      
      break;
    case 19:
            if (dest_33557141 === null || dest_33557141 === undefined) {
        dest_33557141 = {};
      }
      else {
        for (var key in dest_33557141) { delete dest_33557141[key]; }
      }
      for (var key in src_33557142) { dest_33557141[key] = src_33557142[key]; }
      result_33557152 = dest_33557141;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557143.base == null))) {
      result_33557152 = nimCopy(dest_33557141, src_33557142, ti_33557143.base);
      }
      else {
      if ((ti_33557143.kind == 17)) {
      result_33557152 = (dest_33557141 === null || dest_33557141 === undefined) ? {m_type: ti_33557143} : dest_33557141;
      }
      else {
        result_33557152 = (dest_33557141 === null || dest_33557141 === undefined) ? {} : dest_33557141;
      }
      }
      nimCopyAux(result_33557152, src_33557142, ti_33557143.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557142 === null) {
        result_33557152 = null;
      }
      else {
        if (dest_33557141 === null || dest_33557141 === undefined || dest_33557141.length != src_33557142.length) {
          dest_33557141 = new Array(src_33557142.length);
        }
        result_33557152 = dest_33557141;
        for (var i = 0; i < src_33557142.length; ++i) {
          result_33557152[i] = nimCopy(result_33557152[i], src_33557142[i], ti_33557143.base);
        }
      }
    
      break;
    case 28:
            if (src_33557142 !== null) {
        result_33557152 = src_33557142.slice(0);
      }
    
      break;
    default: 
      result_33557152 = src_33557142;
      break;
    }

  return result_33557152;

}

function chckIndx(i_33557185, a_33557186, b_33557187) {
      var Temporary1;

  var result_33557188 = 0;

  BeforeRet: do {
      if (!(a_33557186 <= i_33557185)) Temporary1 = false; else {        Temporary1 = (i_33557185 <= b_33557187);      }    if (Temporary1) {
    result_33557188 = i_33557185;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557185, a_33557186, b_33557187);
    }
    
  } while (false);

  return result_33557188;

}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}


function add_33556420(x_33556421, x_33556421_Idx, y_33556422) {
          if (x_33556421[x_33556421_Idx] === null) { x_33556421[x_33556421_Idx] = []; }
      var off = x_33556421[x_33556421_Idx].length;
      x_33556421[x_33556421_Idx].length += y_33556422.length;
      for (var i = 0; i < y_33556422.length; ++i) {
        x_33556421[x_33556421_Idx][off+i] = y_33556422.charCodeAt(i);
      }
    

  
}

function newSeq_33556826(len_33556828) {
  var result_33556829 = [];

    result_33556829 = new Array(len_33556828); for (var i = 0 ; i < len_33556828 ; ++i) { result_33556829[i] = null; }
  return result_33556829;

}

function unhandledException(e_33556664) {
    var buf_33556665 = [[]];
    if (!(((e_33556664.message).length == 0))) {
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556665[0].push.apply(buf_33556665[0], e_33556664.message);;
    }
    else {
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit(" ["));;
    add_33556420(buf_33556665, 0, e_33556664.name);
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("]\x0A"));;
    var cbuf_33556666 = toJSStr(buf_33556665[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556666);
  }
  else {
    throw cbuf_33556666;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555122, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556939) {
        if (a_33556939 > 2147483647 || a_33556939 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: makeNimstrLit("value out of range"), parent: null, m_type: NTI33555130, name: null, trace: [], up: null}, "RangeDefect");

  
}

function addChars_251658415(result_251658417, result_251658417_Idx, x_251658418, start_251658419, n_251658420) {
    var old_251658421 = (result_251658417[result_251658417_Idx]).length;
    (result_251658417[result_251658417_Idx].length = chckRange(addInt(old_251658421, n_251658420), 0, 2147483647));
    Label1: do {
      var iHEX60gensym4_251658435 = 0;
      var i_469762110 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762110 < n_251658420)) break Label3;
            iHEX60gensym4_251658435 = i_469762110;
            result_251658417[result_251658417_Idx][chckIndx(addInt(old_251658421, iHEX60gensym4_251658435), 0, (result_251658417[result_251658417_Idx]).length - 1)] = x_251658418.charCodeAt(chckIndx(addInt(start_251658419, iHEX60gensym4_251658435), 0, (x_251658418).length - 1));
            i_469762110 = addInt(i_469762110, 1);
          }
      } while (false);
    } while (false);

  
}

function addChars_251658411(result_251658413, result_251658413_Idx, x_251658414) {
    addChars_251658415(result_251658413, result_251658413_Idx, x_251658414, 0, ((x_251658414) == null ? 0 : (x_251658414).length));

  
}

function addInt_251658436(result_251658437, result_251658437_Idx, x_251658438) {
    addChars_251658411(result_251658437, result_251658437_Idx, ((x_251658438) + ""));

  
}

function addInt_251658457(result_251658458, result_251658458_Idx, x_251658459) {
    addInt_251658436(result_251658458, result_251658458_Idx, x_251658459);

  
}

function HEX24_335544323(x_335544324) {
  var result_335544325 = [[]];

    addInt_251658457(result_335544325, 0, x_335544324);

  return result_335544325[0];

}

function isFatPointer_33557132(ti_33557133) {
  var result_33557134 = false;

  BeforeRet: do {
    result_33557134 = !((ConstSet1[ti_33557133.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557134;

}

function nimCopyAux(dest_33557145, src_33557146, n_33557147) {
    switch (n_33557147.kind) {
    case 0:
      break;
    case 1:
            dest_33557145[n_33557147.offset] = nimCopy(dest_33557145[n_33557147.offset], src_33557146[n_33557147.offset], n_33557147.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557147.sons.length; i++) {
      nimCopyAux(dest_33557145, src_33557146, n_33557147.sons[i]);
    }
    
      break;
    case 3:
            dest_33557145[n_33557147.offset] = nimCopy(dest_33557145[n_33557147.offset], src_33557146[n_33557147.offset], n_33557147.typ);
      for (var i = 0; i < n_33557147.sons.length; ++i) {
        nimCopyAux(dest_33557145, src_33557146, n_33557147.sons[i][1]);
      }
    
      break;
    }

  
}

function raiseIndexError(i_33556755, a_33556756, b_33556757) {
    var Temporary1;

    if ((b_33556757 < a_33556756)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(HEX24_335544323(i_33556755) || [],makeNimstrLit(" not in ") || [],HEX24_335544323(a_33556756) || [],makeNimstrLit(" .. ") || [],HEX24_335544323(b_33556757) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555128, name: null, trace: [], up: null}, "IndexDefect");

  
}

function sysFatal_218103842(message_218103845) {
    raiseException({message: nimCopy(null, message_218103845, NTI33554439), m_type: NTI33555124, parent: null, name: null, trace: [], up: null}, "AssertionDefect");

  
}

function raiseAssert_218103840(msg_218103841) {
    sysFatal_218103842(msg_218103841);

  
}

function failedAssertImpl_218103864(msg_218103865) {
    raiseAssert_218103840(msg_218103865);

  
}

function edit() {
    Label1: do {
      var x_469762072 = null;
      var x_469762072_Idx = 0;
      var colontmp__469762096 = [];
      colontmp__469762096 = document.getElementsByTagName("div");
      var i_469762098 = 0;
      var L_469762099 = (colontmp__469762096).length;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762098 < L_469762099)) break Label3;
            x_469762072 = colontmp__469762096; x_469762072_Idx = chckIndx(i_469762098, 0, (colontmp__469762096).length - 1);
            x_469762072[x_469762072_Idx].contentEditable = "true";
            i_469762098 = addInt(i_469762098, 1);
            if (!(((colontmp__469762096).length == L_469762099))) {
            failedAssertImpl_218103864(makeNimstrLit("iterators.nim(240, 11) `len(a) == L` the length of the seq changed while iterating over it"));
            }
            
          }
      } while (false);
    } while (false);
    Label4: do {
      var x_469762076 = null;
      var x_469762076_Idx = 0;
      var colontmp__469762102 = [];
      colontmp__469762102 = document.getElementsByTagName("span");
      var i_469762103 = 0;
      var L_469762104 = (colontmp__469762102).length;
      Label5: do {
          Label6: while (true) {
          if (!(i_469762103 < L_469762104)) break Label6;
            x_469762076 = colontmp__469762102; x_469762076_Idx = chckIndx(i_469762103, 0, (colontmp__469762102).length - 1);
            x_469762076[x_469762076_Idx].contentEditable = "true";
            i_469762103 = addInt(i_469762103, 1);
            if (!(((colontmp__469762102).length == L_469762104))) {
            failedAssertImpl_218103864(makeNimstrLit("iterators.nim(240, 11) `len(a) == L` the length of the seq changed while iterating over it"));
            }
            
          }
      } while (false);
    } while (false);

  
}
edit();
