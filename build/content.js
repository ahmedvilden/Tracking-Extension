/* global chrome */
let opened = false
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if(!opened){
    main();
    opened = true;
  }else{
    chrome.runtime.sendMessage({text: "reload"},function(response){
      main();
    });
  }
});
if(localStorage.getItem('TWroute')=='TrackingSession'){
  main();
}
function main() {
  // eslint-disable-next-line no-undef
  const extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  // eslint-disable-next-line no-restricted-globals
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
    // Fetch the local React index.html page
    // eslint-disable-next-line no-undef
    fetch(chrome.runtime.getURL('index.html') /*, options */)
      .then((response) => response.text())
      .then((html) => {
        const styleStashHTML = html.replace(/\/static\//g, `${extensionOrigin}/static/`);
        // eslint-disable-next-line no-undef
        $(styleStashHTML).prependTo('body');
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

let started = false;

window.addEventListener("message", function(event) {
  if (event.source !== window) return;
  onDidReceiveMessage(event);
});

async function onDidReceiveMessage(event) {
  if (event.data.type && (event.data.type === "GET_EXTENSION_ID")) {
    window.postMessage({ type: "EXTENSION_ID_RESULT", extensionId: chrome.runtime.id }, "*");
  }else if(event.data.type === "newtab"){    
    chrome.runtime.sendMessage({from: "content",url:event.data.url}); 
}else if(event.data.type === "started"){    
  started = true;
}
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.from == "backgroundnewtab") {
      console.log('tab created succe....');
  }
  });

function Get_All_Forms_Data(Element)
{
    Element = Element || '';
    var All_Page_Data = [];
    var All_Forms_Data_Temp = {};
    if(!Element)
    {
        Element = 'body';
    }

    $(Element).find('input,select,textarea').each(function(i){
        All_Forms_Data_Temp[i] = $(this);
    });

    $.each(All_Forms_Data_Temp,function(){
        var input = $(this);
        var Element_Name;
        var Element_Value;
        var pathinput = getPathTo($(this)[0]);
        let ElementObj = {}
        ElementObj.xpath = pathinput;
        if((input.attr('type') == 'submit') || (input.attr('type') == 'button'))
        {          
          return true;
        }

        if((input.attr('name') !== undefined) && (input.attr('name') != ''))
        {
        	ElementObj.name = input.attr('name').trim();
            Element_Name = input.attr('name').trim();            
        }
        else if((input.attr('id') !== undefined) && (input.attr('id') != ''))
        {
        	ElementObj.id = input.attr('id').trim();
            Element_Name = input.attr('id').trim();            
        }
        else if((input.attr('class') !== undefined) && (input.attr('class') != ''))
        {
        	ElementObj.class = input.attr('class').trim();
            Element_Name = input.attr('class').trim();            
        }

        if(input.val() !== undefined)
        {
            if(input.attr('type') == 'checkbox')
            {
                Element_Value = input.parent().find('input[name="'+Element_Name+'"]:checked').val();
                ElementObj.value = Element_Value;
            }
            else if((input.attr('type') == 'radio'))
            {
                Element_Value = $('input[name="'+Element_Name+'"]:checked',Element).val();
                ElementObj.value = Element_Value;
            }
            else
            {
                Element_Value = input.val();
                ElementObj.value = Element_Value;
            }
        }
        else if(input.text() != undefined)
        {
            Element_Value = input.text();
            ElementObj.value = Element_Value;
        }

        if(Element_Value === undefined)
        {
            Element_Value = '';
            ElementObj.value = '';
        }

        if(Element_Name !== undefined)
        {
            var Element_Array = new Array();
            if(Element_Name.indexOf(' ') !== -1)
            {
                Element_Array = Element_Name.split(/(\s+)/);                
            }
            else
            {
                Element_Array.push(Element_Name);                                
            }
            var ElementObjArray = new Array();
            ElementObjArray.push(ElementObj);

            $.each(Element_Array,function(index, Name)
            	
            {
           	            	          
                Name = Name.trim();
                if(Name != '')
                {                	                    
                    All_Page_Data.push(ElementObj);
                }
            });
        }
    });

    return All_Page_Data;
}

function getPathTo(element) {
  if (element.id!=='')
      return '//'+element.tagName+'[@id='+'"'+element.id+'"]';      
  if (element===document.body)
      return element.tagName;

  var ix= 0;
  var siblings= element.parentNode.childNodes;
  for (var i= 0; i<siblings.length; i++) {
      var sibling= siblings[i];
      if (sibling===element)
          return getPathTo(element.parentNode)+'/'+element.tagName+'['+(ix+1)+']';
      if (sibling.nodeType===1 && sibling.tagName===element.tagName)
          ix++;
  }
}
  let sawBeforeUnload = false;
  let waitForFormSubmit = false;
 // window.onbeforeunload = function(){alert(window.event.srcElement)} 
  window.addEventListener("beforeunload", function (e) {
    if(localStorage.getItem('TSid')!== undefined && localStorage.getItem('TSid')!==null && localStorage.getItem('TWroute')!== undefined && localStorage.getItem('TWroute')!==null && localStorage.getItem('TWroute')==='TrackingSession'){
    setTimeout(function() {
      if (waitForFormSubmit) {
        console.log('waitforsubmit')
        e.preventDefault();
        return;
      }else{
    sawBeforeUnload = true;
    console.log(sawBeforeUnload)
    action = {}
    action.type = "navigate"
    action.name = action['type']+Date.now();
    action.element = document.activeElement.tagName;    
    action.currentPage= window.location.href  
    action.navigateTO = document.activeElement.href;
    action.xpath = getPathTo(document.activeElement)    
    if(action['navigateTO']){      
    console.log(action); 
    window.postMessage({ type: "Action", action: action }, "*");
  }
  }  
  },0)
  }
  });  
  function checkP(element,arr) {    
    if(element.parentNode != null) {    
      arr.push(element.parentNode.id);
      checkP(element.parentNode,arr);       
    } 
    }

document.body.addEventListener('click',function(event){    
  if(localStorage.getItem('TSid')!== undefined && localStorage.getItem('TSid')!==null && localStorage.getItem('TWroute')!== undefined && localStorage.getItem('TWroute')!==null && localStorage.getItem('TWroute')==='TrackingSession'){
  // getting the attributes of an element (var attrs = event.target.attributes;)
  //checkElement($(event.target));
  //getting the name of the html element : console.log($(event.target)[0].tagName);
  domElement = $(event.target);  
  console.dir(domElement);
  let arr = [];
  checkP(domElement[0],arr);
  console.log(arr);
  let checked = false;  
  if(domElement[0].id=='ExtModal' || domElement[0].id=='ExtBtn'){
    checked = true
  }
  for (var i = 0 ; i < arr.length ;i++){
    if(arr[i]=='ExtModal' || arr[i] == 'ExtBtn'){
      checked = true;
    }
  }
  let action = {}    
  setTimeout(function() {
    if (sawBeforeUnload) {
      event.stopImmediatePropagation();
      return;
  }else{
  /*if(domElement.closest('a').length){
  console.log('before unload');*/
  if(!(domElement[0].tagName == 'INPUT') && (domElement[0].getAttribute('type') == 'submit') == false && (domElement[0].getAttribute('id')=='deleteBtnExtn') == false ){         
    action.type = "click_selenium"    
    action.element = domElement[0].tagName;
    action.currentPage= window.location.href
    action.xpath = getPathTo(domElement[0])    
  }      
    if(action != null && action['type'] != null && !checked){         
     action.name = action['type']+Date.now();
     localStorage.setItem('aelement',JSON.stringify(action));
     console.log(action);
     window.postMessage({ type: "Action", action: action }, "*");
  }
}
},5)
}

  }, true)
 

 //hashchange

 $(window).on('hashchange', function() {
  action = {}
  action.type = "click_selenium"
  action.name = action['type']+Date.now();
  action.element = document.activeElement.tagName;    
  action.currentPage= window.location.href
  action.xpath = getPathTo(document.activeElement)  
  window.postMessage({ type: "Action", action: action }, "*");
});
  

  
  Array.from(document.querySelectorAll('form')).forEach((element,index) =>
  {
    const submitButton = element.querySelector('[type=Submit]');    
    if(submitButton != null){
      console.log(submitButton)
      console.dir(element);
      submitButton.addEventListener('click', function(event){                
        setTimeout(function() {        
        waitForFormSubmit = true;
        action = {}
        form = element;
        action.type = "FormSubmit"
        action.currentPage= window.location.href     
        if(form.getAttribute('id')){
          action.formID = form.getAttribute('id');
          }else
          {
            action.formID="noID"
          }
          if(form.getAttribute('action')){
          action.FormAction = form.getAttribute('action');
          }
          action.xpath = getPathTo(form);  
          action.formData = Get_All_Forms_Data(form)
          localStorage.setItem('formsubmit',JSON.stringify(action));
          action.name = action['type']+Date.now();
          window.postMessage({ type: "Action", action: action }, "*");
        },0)
  },true);
  }
  });
  function submitted (event){
    event.preventDefault();
  }
  
  var timeout;
  document.addEventListener('mouseout', (e) => {
    clearTimeout(timeout);
  });

  document.addEventListener('mouseover', function (e) {  
    timeout = setTimeout(function(){
      domElement = $(e.target);
      action = {}
      action.type = "read"
      action.name = action['type']+Date.now();
      action.element = domElement[0].tagName;
      action.xpath = getPathTo(domElement[0]);
      action.targettype='simple';
      let arr = [];
      checkP(domElement[0],arr);      
      let checked = false;  
      if(domElement[0].id=='ExtModal' || domElement[0].id=='ExtBtn'){
        checked = true
      }
      for (var i = 0 ; i < arr.length ;i++){
      if(arr[i]=='ExtModal' || arr[i] == 'ExtBtn'){
      checked = true;
      }
      }      
      if(!checked && localStorage.getItem('TWroute')==='TrackingSession'){     
      window.postMessage({ type: "Action", action: action }, "*");
    }
    },3000)
});