// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 223.13,
          "height": 43.93,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Please click\nto enter the fullscreen mode",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 36.93,
          "height": 13.56,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "V.1.2.2",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "12",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.events['click'] = function() {
  // Launch fullscreen mode
  lab.util.fullscreen.launch(document.body)
    // ... if successful, move to next screen
    .then(() => this.end('Fullscreen mode enabled'))
    // ... otherwise, alert the user (this could
    // be changed to continue the study, as above)
    .catch(() => alert('Fullscreen mode not available'))
}

// Please note that that fullscreen mode (at present,
// this will change) needs one more line of code in
// the study style sheet to keep a consistent background
// color. Please find that setting in the study options
// (rightmost toolbar icon), in the CSS tab


////this.options.viewportScale = this.state.viewScale


}
      },
      "viewport": [
        800,
        600
      ],
      "title": "Start fullscreen"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cmain\u003E\n\n\u003Cp\u003EThis experiment should be performed on a fullscreen mode. Once the experiment is finished, the display will exit the fullscreen automatically. Do not exit in the middle of the experiment. If you exit for any reason, press 'F11' which may allow you to go back to the fullscreen again.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf the fullscreen mode is not available, please maximise this window. Make sure not to change the window size in the middle of the experiment for the best results.\u003C\u002Fp\u003E\n\n\u003Ccenter\u003E\n\u003Cbutton type=\"Submit\"\u003ENext\u003C\u002Fbutton\u003E\n\u003C\u002Fcenter\u003E\n\n\u003C\u002Fmain\u003E\n",
          "title": "\u003Ccenter\u003EWelcome to the experiment! \u003C\u002Fcenter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//window.moveTo(0, 0);
//window.resizeTo(screen.availWidth, screen.availHeight);

}
      },
      "title": "Welcome"
    },
    {
      "type": "lab.html.Form",
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {

this.options.events['input input'] = function() {
  const scale = document.getElementById('scale').value
  document.getElementById('credit_card')
    .setAttribute(
      'transform',
      `scale(${ scale / 100 })`
    )
}
},
        "end": function anonymous(
) {
// Get the image width and height in browser pixels
const { width, height } = document.querySelector('svg #credit_card rect.card')
  .getBoundingClientRect()

// Compute dpi and dpcm based on this information
this.data.dpi = width / 3.375
this.data.dpcm = width / 8.573
this.data.viewScale=this.data.dpi/100
}
      },
      "title": "ScalingScreen",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cstyle type=\"text\u002Fcss\"\u003E\n      #credit_card line {\n        stroke: var(--color-border);\n        stroke-dasharray: 4;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect {\n        fill: var(--color-gray-background);\n        stroke: var(--color-border);\n        stroke-width: 2;\n        stroke-linecap: butt;\n        stroke-linejoin: round;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect.background {\n        fill: white;\n        stroke: white;\n        stroke-width: 10;\n      }\n    \u003C\u002Fstyle\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\"\n      viewBox=\"-400 -250 800 500\"\n      style=\"width: 800px; height: 500px\"\u003E\n      \u003Cg\n        id=\"credit_card\"\n        transform=\"scale(1)\"\n      \u003E\n        \u003Cline x1=\"-168.75\" y1=\"-2000\" x2=\"-168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"168.75\" y1=\"-2000\" x2=\"168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"-106.25\" x2=\"2000\" y2=\"-106.25\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"106.25\" x2=\"2000\" y2=\"106.25\" \u002F\u003E\n        \u003Crect\n          class=\"background\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n        \u003Crect\n          class=\"card\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n      \u003C\u002Fg\u003E\n    \u003C\u002Fsvg\u003E\n    \u003Cdiv class=\"m-l\" \u003E\n      \u003Cp class=\"font-weight-bold content-horizontal-center\"\u003E\n        Please use the slide bar below to adjust the size of the rectangle to match the size of your University ID card or credit card (you can also use most membership cards that have the same size as a credit card). Click the 'submit' button if you are happy with the size of the rectangle.\n      \u003C\u002Fp\u003E\n      \u003Cform id=\"pumps-form\"\u003E\n        \u003Cinput \n          type=\"range\" \n          name=\"scale\" id=\"scale\"\n          class=\"w-l\"\n          min=\"20\" max=\"200\" value = \"100\"\n        \u003E\n        \u003Cbutton type=\"submit\"\u003ESumit\u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n",
      "parameters": {},
      "files": {}
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.state.block=0;

document.body.style.cursor = 'none';

let shapeArray=["Square","Diamond","Heart","Star"];
let colourArray=["Red","Green","Purple","Blue"];

shapeArray.sort(() => Math.random() - 0.5);
colourArray.sort(() => Math.random() - 0.5);

this.parameters.shape1=shapeArray[0];
this.parameters.shape2=shapeArray[1];
this.parameters.shape3=shapeArray[2];
this.parameters.shape4=shapeArray[3];

this.parameters.colour1=colourArray[0];
this.parameters.colour2=colourArray[1];
this.parameters.colour3=colourArray[2];
this.parameters.colour4=colourArray[3];



}
      },
      "title": "Main_sequence",
      "tardy": true,
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "TaskSwitch_pracInst_sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 765.11,
                  "height": 341.71,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "In this experiment, your task is to respond to stimuli on the display \nas quickly and as accurately as possible.\n\nUse a QWERTY keyboard and place your left index finger on the 'c' key \nand your right index finger on 'm' key.\n\nYou will start with a few blocks of practice trials.\nPlease read the instructions carefully before you start trials.\n\n\nPress SPACE",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Inst1"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 727.97,
                  "height": 404.63,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "In the first practice block, you will practise 'go' trials. \nEach trial will start with a Task Cue. Task Cue will be either \"SHAPE\"\nor \"COLOUR\" that appears in the upper portion of the display.\n\nTask Cue is followed by Target to which you have to respond\nby pressing an appropriate key as quickly and as accurately \nas you can. \n\nTarget is a simple coloured shape. The correct response \ndepends on both Target and the task you are required to perform.\n\n\nPress SPACE",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Inst2"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 835.58,
                  "height": 404.63,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "If Task Cue is SHAPE, then pay attention to the shape of Target:\n\nPress the left key (\"c\") if the shape is \"${state.shape1}\" or \"${state.shape2}\".\nPress the right key (\"m\") if the shape is \"${state.shape3}\" or \"${state.shape4}\". \n\n\nIf Task Cue is COLOUR, then pay attention to the colour of Target:\n\nPress the left key (\"c\") if the colour is \"${state.colour1}\" or \"${state.colour2}\".\nPress the right key (\"m\") if the colour is \"${state.colour3}\" or \"${state.colour4}\". \n\n\nPress SPACE",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
              },
              "title": "Inst3",
              "tardy": true
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 720.35,
                  "height": 215.88,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "It is very important that you respond to Target as quickly as possible\nwhile making as few errors. Try to keep your accuracy above 90%.\n\nOn each trial, your response time and accuracy will be recorded.\n\n\nPress SPACE",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
              },
              "title": "Inst4"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 284.96,
                  "height": 27.12,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "Press SPACE to start trials",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
              },
              "title": "ready"
            }
          ]
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "TEST": "0"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "24"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
          },
          "title": "TaskSwitch_Practice_loop",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var trialTyep
var handcue
var rNum

// record target features on a preceding trial
// this is used to avoid feature repetitions
preShape=this.state.stimShape;
preColour=this.state.stimColour;
this.parameters.preShape=preShape;
this.parameters.preColour=preColour;

// select task
if(Math.random()<.5){
  cue="SHAPE";
}else{
  cue="COLOUR";
}

// select correct response
if(Math.random()<.5){
  cResp="c";
}else{
  cResp="m";
}

// select target
if(cue==="SHAPE"){

  if(cResp==="c"){
    if(preShape===this.parameters.shape1){
      stimShape=this.parameters.shape2;
    }else if(preShape===this.parameters.shape2){
      stimShape=this.parameters.shape1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape1;
      }else{
        stimShape=this.parameters.shape2;
      }
    }

  }else if(cResp==="m"){
    if(preShape===this.parameters.shape3){
      stimShape=this.parameters.shape4;
    }else if(preShape===this.parameters.shape4){
      stimShape=this.parameters.shape3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape3;
      }else{
        stimShape=this.parameters.shape4;
      }
    }
  }

  // select irrelevant colour
  if(preColour===this.parameters.colour1){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour2){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour3){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour4;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }

  }else if(preColour===this.parameters.colour4){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour3;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }
  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimColour=this.parameters.colour1;
    }else if(rNum<.50){ 
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }

}else if(cue==="COLOUR"){
  if(cResp==="c"){
    if(preColour===this.parameters.colour1){
      stimColour=this.parameters.colour2;
    }else if(preColour===this.parameters.colour2){
      stimColour=this.parameters.colour1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour1;
      }else{
        stimColour=this.parameters.colour2;
      }
    }

  }else if(cResp==="m"){
    if(preColour=this.parameters.colour3){
      stimColour=this.parameters.colour4;
    }else if(preColour===this.parameters.colour4){
      stimColour=this.parameters.colour3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour3;
      }else{
        stimColour=this.parameters.colour4;
      }
    }
  }

  // select irrelevant shape
  if(preShape===this.parameters.shape1){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape2){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape3){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape4;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else if(preShape===this.parameters.shape4){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape3;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimShape=this.parameters.shape1;
    }else if(rNum<.50){ 
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }
}

// select hand cue
trialType="global-go";
handcue=""

//preShape=stimShape;
//preColour=stimColour;

this.parameters.stimColour=stimColour;
this.parameters.stimShape=stimShape;
this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.trialType=trialType
this.parameters.handCue=handcue;



// response congruity
var rComp
if(stimShape===this.parameters.shape1 || stimShape===this.parameters.shape2){
  if(stimColour===this.parameters.colour1 || stimColour===this.parameters.colour2){
    rComp=1;
  }else{
    rComp=2;
  }
}else{
  if(stimColour===this.parameters.colour3 || stimColour===this.parameters.colour4){
    rComp=1;
  }else{
    rComp=2;
  }
}
this.parameters.rComp=rComp

}
            },
            "title": "TaskSwitchTrial_sequence",
            "tardy": true,
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 327.3,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.taskCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "task_cue",
                "timeout": "1000"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "CTI",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 214,
                    "height": 214,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.target + \".bmp\"] }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.8,
                    "height": 36.16,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff",
                    "text": "${parameters.handCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape1} \u002F ${state.shape2}\n\n\n${state.colour1} \u002F ${state.colour2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape3} \u002F ${state.shape4}\n\n\n${state.colour3} \u002F ${state.colour4}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "BlueDiamond.bmp": "embedded\u002F42a8fedc24d5910e0313288675bdc954ee7dd788c23fa0aabf36e76706648e29.bmp",
                  "BlueHeart.bmp": "embedded\u002Fd432a5d2189ae629607a64b1030a736eb028f56b5fe03a4b87fd93fb080d140b.bmp",
                  "BlueSquare.bmp": "embedded\u002F7e95c1774ff72f667863b3383dc242103db3b416bd4a7ce57d3f84913f33c6d6.bmp",
                  "BlueStar.bmp": "embedded\u002F33c9cb3a6fd1de668021d101f957f1af5a96066c6633dfa5876fd952edaf726a.bmp",
                  "GreenHeart.bmp": "embedded\u002F809fc2c58125c92491e12f07e05a82056a7c937bf7da77acf87fe67d0e57a973.bmp",
                  "GreenStar.bmp": "embedded\u002F0e96d8d87ff3a5b114a697dec8511405a0009aa25ad88a0f32eb73da7f5b1aaa.bmp",
                  "PurpleDiamond.bmp": "embedded\u002F681a636ca611e9af614c280174b2222b8719dc432ebd9e2818bfc5b0e7e4ccc2.bmp",
                  "PurpleHeart.bmp": "embedded\u002F15af1123359bfcb49420dccf8dbe32daad408038e2a7c9b2983580770172fd05.bmp",
                  "PurpleSquare.bmp": "embedded\u002Fbce3c8f8db180edfce42ab348bcb5111423b2a0a9d127c4ff24f77c9f6b77243.bmp",
                  "PurpleStar.bmp": "embedded\u002F6a9b36033260587b69744d278c89adaafa87259c43af7c44e38eb4c4d8df8b29.bmp",
                  "RedHeart.bmp": "embedded\u002F1ea3317ef2d11fbece136b484f6d8eca452736322d93aa64b618797aa4eeeb28.bmp",
                  "RedStar.bmp": "embedded\u002F61eae104fbe51a2b7de4ebfbd900e56fe46df792f19d2c18b72ba1e477adf30e.bmp",
                  "GreenDiamond.bmp": "embedded\u002F92933dbd910dae62c885f4b3adf79f14734cf9e4052119564ed2c4bf723b3a64.bmp",
                  "GreenSquare.bmp": "embedded\u002F7bb1a4870631826d20010989d9fd63e8878a1b01f5a76bb537201d1e687100df.bmp",
                  "RedSquare.bmp": "embedded\u002Fcfdd30fda07901099aef471844b7c5aa3b4efd25a4e9dbc3a5dd46553a97bbd5.bmp",
                  "RedDiamond.bmp": "embedded\u002F2e070e5a452f5c3d3533aac98673f2a5019f389caeadaa1c9299cb4732f77365.bmp"
                },
                "responses": {
                  "keypress(c)": "c",
                  "keypress(m)": "m"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "stim",
                "timeout": "2000",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.78,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.feedback}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Don't respond!";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Too slow!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.corrResp){
      this.parameters.feedback="Correct";
      this.parameters.ACC = 1;
    }else{
      this.parameters.feedback="Incorrect";
      this.parameters.ACC = 0;
    }
  }
}


}
                },
                "title": "feedback",
                "timeout": "750",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 655.52,
              "height": 121.5,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "You can repeat the practice trials one more round if you need.\n\nDo you want to repeat practice?\nPress 'y' for YES or 'n' or NO.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(y)": "yes",
            "keypress(n)": "no"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "repeat_practice"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "TEST": "0"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "24"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "TaskSwitch_Practice_loop (optional)",
          "tardy": true,
          "skip": "${this.state.response}==='no'",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var trialTyep
var handcue
var rNum

// record target features on a preceding trial
// this is used to avoid feature repetitions
preShape=this.state.stimShape;
preColour=this.state.stimColour;
this.parameters.preShape=preShape;
this.parameters.preColour=preColour;

// select task
if(Math.random()<.5){
  cue="SHAPE";
}else{
  cue="COLOUR";
}

// select correct response
if(Math.random()<.5){
  cResp="c";
}else{
  cResp="m";
}

// select target
if(cue==="SHAPE"){

  if(cResp==="c"){
    if(preShape===this.parameters.shape1){
      stimShape=this.parameters.shape2;
    }else if(preShape===this.parameters.shape2){
      stimShape=this.parameters.shape1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape1;
      }else{
        stimShape=this.parameters.shape2;
      }
    }

  }else if(cResp==="m"){
    if(preShape===this.parameters.shape3){
      stimShape=this.parameters.shape4;
    }else if(preShape===this.parameters.shape4){
      stimShape=this.parameters.shape3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape3;
      }else{
        stimShape=this.parameters.shape4;
      }
    }
  }

  // select irrelevant colour
  if(preColour===this.parameters.colour1){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour2){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour3){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour4;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }

  }else if(preColour===this.parameters.colour4){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour3;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }
  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimColour=this.parameters.colour1;
    }else if(rNum<.50){ 
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }

}else if(cue==="COLOUR"){
  if(cResp==="c"){
    if(preColour===this.parameters.colour1){
      stimColour=this.parameters.colour2;
    }else if(preColour===this.parameters.colour2){
      stimColour=this.parameters.colour1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour1;
      }else{
        stimColour=this.parameters.colour2;
      }
    }

  }else if(cResp==="m"){
    if(preColour=this.parameters.colour3){
      stimColour=this.parameters.colour4;
    }else if(preColour===this.parameters.colour4){
      stimColour=this.parameters.colour3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour3;
      }else{
        stimColour=this.parameters.colour4;
      }
    }
  }

  // select irrelevant shape
  if(preShape===this.parameters.shape1){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape2){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape3){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape4;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else if(preShape===this.parameters.shape4){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape3;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimShape=this.parameters.shape1;
    }else if(rNum<.50){ 
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }
}

// select hand cue
trialType="global-go";
handcue=""

//preShape=stimShape;
//preColour=stimColour;

this.parameters.stimColour=stimColour;
this.parameters.stimShape=stimShape;
this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.trialType=trialType
this.parameters.handCue=handcue;



// response congruity
var rComp
if(stimShape===this.parameters.shape1 || stimShape===this.parameters.shape2){
  if(stimColour===this.parameters.colour1 || stimColour===this.parameters.colour2){
    rComp=1;
  }else{
    rComp=2;
  }
}else{
  if(stimColour===this.parameters.colour3 || stimColour===this.parameters.colour4){
    rComp=1;
  }else{
    rComp=2;
  }
}
this.parameters.rComp=rComp


}
            },
            "title": "TaskSwitchTrial_sequence",
            "tardy": true,
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 327.3,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.taskCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "task_cue",
                "timeout": "1000"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "CTI",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 214,
                    "height": 214,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.target + \".bmp\"] }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.8,
                    "height": 36.16,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff",
                    "text": "${parameters.handCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape1} \u002F ${state.shape2}\n\n\n${state.colour1} \u002F ${state.colour2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape3} \u002F ${state.shape4}\n\n\n${state.colour3} \u002F ${state.colour4}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "BlueDiamond.bmp": "embedded\u002F42a8fedc24d5910e0313288675bdc954ee7dd788c23fa0aabf36e76706648e29.bmp",
                  "BlueHeart.bmp": "embedded\u002Fd432a5d2189ae629607a64b1030a736eb028f56b5fe03a4b87fd93fb080d140b.bmp",
                  "BlueSquare.bmp": "embedded\u002F7e95c1774ff72f667863b3383dc242103db3b416bd4a7ce57d3f84913f33c6d6.bmp",
                  "BlueStar.bmp": "embedded\u002F33c9cb3a6fd1de668021d101f957f1af5a96066c6633dfa5876fd952edaf726a.bmp",
                  "GreenHeart.bmp": "embedded\u002F809fc2c58125c92491e12f07e05a82056a7c937bf7da77acf87fe67d0e57a973.bmp",
                  "GreenStar.bmp": "embedded\u002F0e96d8d87ff3a5b114a697dec8511405a0009aa25ad88a0f32eb73da7f5b1aaa.bmp",
                  "PurpleDiamond.bmp": "embedded\u002F681a636ca611e9af614c280174b2222b8719dc432ebd9e2818bfc5b0e7e4ccc2.bmp",
                  "PurpleHeart.bmp": "embedded\u002F15af1123359bfcb49420dccf8dbe32daad408038e2a7c9b2983580770172fd05.bmp",
                  "PurpleSquare.bmp": "embedded\u002Fbce3c8f8db180edfce42ab348bcb5111423b2a0a9d127c4ff24f77c9f6b77243.bmp",
                  "PurpleStar.bmp": "embedded\u002F6a9b36033260587b69744d278c89adaafa87259c43af7c44e38eb4c4d8df8b29.bmp",
                  "RedHeart.bmp": "embedded\u002F1ea3317ef2d11fbece136b484f6d8eca452736322d93aa64b618797aa4eeeb28.bmp",
                  "RedStar.bmp": "embedded\u002F61eae104fbe51a2b7de4ebfbd900e56fe46df792f19d2c18b72ba1e477adf30e.bmp",
                  "GreenDiamond.bmp": "embedded\u002F92933dbd910dae62c885f4b3adf79f14734cf9e4052119564ed2c4bf723b3a64.bmp",
                  "GreenSquare.bmp": "embedded\u002F7bb1a4870631826d20010989d9fd63e8878a1b01f5a76bb537201d1e687100df.bmp",
                  "RedSquare.bmp": "embedded\u002Fcfdd30fda07901099aef471844b7c5aa3b4efd25a4e9dbc3a5dd46553a97bbd5.bmp",
                  "RedDiamond.bmp": "embedded\u002F2e070e5a452f5c3d3533aac98673f2a5019f389caeadaa1c9299cb4732f77365.bmp"
                },
                "responses": {
                  "keypress(c)": "c",
                  "keypress(m)": "m"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "stim",
                "timeout": "2000",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.78,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.feedback}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Don't respond!";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Too slow!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.corrResp){
      this.parameters.feedback="Correct";
      this.parameters.ACC = 1;
    }else{
      this.parameters.feedback="Incorrect";
      this.parameters.ACC = 0;
    }
  }
}


}
                },
                "title": "feedback",
                "timeout": "750",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 684.33,
              "height": 184.42,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "In the next four blocks, you will perform test trials. \nThe task is the same as that you just performed in the last block.\n\nThere will be 96 trials in each block. \n\nPress SPACE to start trials.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InstTest"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "TEST": "1"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "96"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
          },
          "title": "TaskSwitchTest_loop1",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var trialTyep
var handcue
var rNum

// record target features on a preceding trial
// this is used to avoid feature repetitions
preShape=this.state.stimShape;
preColour=this.state.stimColour;
this.parameters.preShape=preShape;
this.parameters.preColour=preColour;

// select task
if(Math.random()<.5){
  cue="SHAPE";
}else{
  cue="COLOUR";
}

// select correct response
if(Math.random()<.5){
  cResp="c";
}else{
  cResp="m";
}

// select target
if(cue==="SHAPE"){

  if(cResp==="c"){
    if(preShape===this.parameters.shape1){
      stimShape=this.parameters.shape2;
    }else if(preShape===this.parameters.shape2){
      stimShape=this.parameters.shape1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape1;
      }else{
        stimShape=this.parameters.shape2;
      }
    }

  }else if(cResp==="m"){
    if(preShape===this.parameters.shape3){
      stimShape=this.parameters.shape4;
    }else if(preShape===this.parameters.shape4){
      stimShape=this.parameters.shape3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape3;
      }else{
        stimShape=this.parameters.shape4;
      }
    }
  }

  // select irrelevant colour
  if(preColour===this.parameters.colour1){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour2){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour3){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour4;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }

  }else if(preColour===this.parameters.colour4){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour3;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }
  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimColour=this.parameters.colour1;
    }else if(rNum<.50){ 
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }

}else if(cue==="COLOUR"){
  if(cResp==="c"){
    if(preColour===this.parameters.colour1){
      stimColour=this.parameters.colour2;
    }else if(preColour===this.parameters.colour2){
      stimColour=this.parameters.colour1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour1;
      }else{
        stimColour=this.parameters.colour2;
      }
    }

  }else if(cResp==="m"){
    if(preColour=this.parameters.colour3){
      stimColour=this.parameters.colour4;
    }else if(preColour===this.parameters.colour4){
      stimColour=this.parameters.colour3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour3;
      }else{
        stimColour=this.parameters.colour4;
      }
    }
  }

  // select irrelevant shape
  if(preShape===this.parameters.shape1){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape2){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape3){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape4;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else if(preShape===this.parameters.shape4){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape3;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimShape=this.parameters.shape1;
    }else if(rNum<.50){ 
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }
}

// select hand cue
trialType="global-go";
handcue=""

//preShape=stimShape;
//preColour=stimColour;

this.parameters.stimColour=stimColour;
this.parameters.stimShape=stimShape;
this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.trialType=trialType
this.parameters.handCue=handcue;



// response congruity
var rComp
if(stimShape===this.parameters.shape1 || stimShape===this.parameters.shape2){
  if(stimColour===this.parameters.colour1 || stimColour===this.parameters.colour2){
    rComp=1;
  }else{
    rComp=2;
  }
}else{
  if(stimColour===this.parameters.colour3 || stimColour===this.parameters.colour4){
    rComp=1;
  }else{
    rComp=2;
  }
}
this.parameters.rComp=rComp

}
            },
            "title": "TaskSwitchTrial_sequence",
            "tardy": true,
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 327.3,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.taskCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "task_cue",
                "timeout": "1000"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "CTI",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 214,
                    "height": 214,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.target + \".bmp\"] }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.8,
                    "height": 36.16,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff",
                    "text": "${parameters.handCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape1} \u002F ${state.shape2}\n\n\n${state.colour1} \u002F ${state.colour2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape3} \u002F ${state.shape4}\n\n\n${state.colour3} \u002F ${state.colour4}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "BlueDiamond.bmp": "embedded\u002F42a8fedc24d5910e0313288675bdc954ee7dd788c23fa0aabf36e76706648e29.bmp",
                  "BlueHeart.bmp": "embedded\u002Fd432a5d2189ae629607a64b1030a736eb028f56b5fe03a4b87fd93fb080d140b.bmp",
                  "BlueSquare.bmp": "embedded\u002F7e95c1774ff72f667863b3383dc242103db3b416bd4a7ce57d3f84913f33c6d6.bmp",
                  "BlueStar.bmp": "embedded\u002F33c9cb3a6fd1de668021d101f957f1af5a96066c6633dfa5876fd952edaf726a.bmp",
                  "GreenHeart.bmp": "embedded\u002F809fc2c58125c92491e12f07e05a82056a7c937bf7da77acf87fe67d0e57a973.bmp",
                  "GreenStar.bmp": "embedded\u002F0e96d8d87ff3a5b114a697dec8511405a0009aa25ad88a0f32eb73da7f5b1aaa.bmp",
                  "PurpleDiamond.bmp": "embedded\u002F681a636ca611e9af614c280174b2222b8719dc432ebd9e2818bfc5b0e7e4ccc2.bmp",
                  "PurpleHeart.bmp": "embedded\u002F15af1123359bfcb49420dccf8dbe32daad408038e2a7c9b2983580770172fd05.bmp",
                  "PurpleSquare.bmp": "embedded\u002Fbce3c8f8db180edfce42ab348bcb5111423b2a0a9d127c4ff24f77c9f6b77243.bmp",
                  "PurpleStar.bmp": "embedded\u002F6a9b36033260587b69744d278c89adaafa87259c43af7c44e38eb4c4d8df8b29.bmp",
                  "RedHeart.bmp": "embedded\u002F1ea3317ef2d11fbece136b484f6d8eca452736322d93aa64b618797aa4eeeb28.bmp",
                  "RedStar.bmp": "embedded\u002F61eae104fbe51a2b7de4ebfbd900e56fe46df792f19d2c18b72ba1e477adf30e.bmp",
                  "GreenDiamond.bmp": "embedded\u002F92933dbd910dae62c885f4b3adf79f14734cf9e4052119564ed2c4bf723b3a64.bmp",
                  "GreenSquare.bmp": "embedded\u002F7bb1a4870631826d20010989d9fd63e8878a1b01f5a76bb537201d1e687100df.bmp",
                  "RedSquare.bmp": "embedded\u002Fcfdd30fda07901099aef471844b7c5aa3b4efd25a4e9dbc3a5dd46553a97bbd5.bmp",
                  "RedDiamond.bmp": "embedded\u002F2e070e5a452f5c3d3533aac98673f2a5019f389caeadaa1c9299cb4732f77365.bmp"
                },
                "responses": {
                  "keypress(c)": "c",
                  "keypress(m)": "m"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "stim",
                "timeout": "2000",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.78,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.feedback}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Don't respond!";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Too slow!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.corrResp){
      this.parameters.feedback="Correct";
      this.parameters.ACC = 1;
    }else{
      this.parameters.feedback="Incorrect";
      this.parameters.ACC = 0;
    }
  }
}


}
                },
                "title": "feedback",
                "timeout": "750",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 404.23,
              "height": 58.58,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Take a rest and press SPACE \nto continue another block of test trials.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InstTest_continue"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "TEST": "1"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "96"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
          },
          "title": "TaskSwitchTest_loop2",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var trialTyep
var handcue

// select task
if(Math.random()<.5){
  cue="SHAPE";
}else{
  cue="COLOUR";
}

// select correct response
if(Math.random()<.5){
  cResp="c";
}else{
  cResp="m";
}

// select target
if(cue==="SHAPE"){
  if(cResp==="c"){
    if(Math.random()<.5){
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }
  }else if(cResp==="m"){
    if(Math.random()<.5){
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }
  }

  // select irrelevant colour
  if(Math.random()<.25){ 
    stimColour=this.parameters.colour1;
  }else if(Math.random()<.5){ 
    stimColour=this.parameters.colour2;
  }else if(Math.random()<.75){
    stimColour=this.parameters.colour3;
  }else{
    stimColour=this.parameters.colour4;
  }

}else if(cue==="COLOUR"){
  if(cResp==="c"){
    if(Math.random()<.5){
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }
  }else if(cResp==="m"){
    if(Math.random()<.5){
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }
  }

  // select irrelevant shape
  if(Math.random()<.25){ 
    stimShape=this.parameters.shape1;
  }else if(Math.random()<.5){ 
    stimShape=this.parameters.shape2;
  }else if(Math.random()<.75){
    stimShape=this.parameters.shape3;
  }else{
    stimShape=this.parameters.shape4;
  }
}

// select hand cue
trialType="global-go";
handcue=""


this.parameters.stimColour=stimColour;
this.parameters.stimShape=stimShape;
this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.trialType=trialType
this.parameters.handCue=handcue;



// response congruity
var rComp
if(stimShape===this.parameters.shape1 || stimShape===this.parameters.shape2){
  if(stimColour===this.parameters.colour1 || stimColour===this.parameters.colour2){
    rComp=1;
  }else{
    rComp=2;
  }
}else{
  if(stimColour===this.parameters.colour3 || stimColour===this.parameters.colour4){
    rComp=1;
  }else{
    rComp=2;
  }
}
this.parameters.rComp=rComp

}
            },
            "title": "TaskSwitchTrial_sequence",
            "tardy": true,
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 327.3,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.taskCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "task_cue",
                "timeout": "1000"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "CTI",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 214,
                    "height": 214,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.target + \".bmp\"] }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.8,
                    "height": 36.16,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff",
                    "text": "${parameters.handCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape1} \u002F ${state.shape2}\n\n\n${state.colour1} \u002F ${state.colour2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape3} \u002F ${state.shape4}\n\n\n${state.colour3} \u002F ${state.colour4}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "BlueDiamond.bmp": "embedded\u002F42a8fedc24d5910e0313288675bdc954ee7dd788c23fa0aabf36e76706648e29.bmp",
                  "BlueHeart.bmp": "embedded\u002Fd432a5d2189ae629607a64b1030a736eb028f56b5fe03a4b87fd93fb080d140b.bmp",
                  "BlueSquare.bmp": "embedded\u002F7e95c1774ff72f667863b3383dc242103db3b416bd4a7ce57d3f84913f33c6d6.bmp",
                  "BlueStar.bmp": "embedded\u002F33c9cb3a6fd1de668021d101f957f1af5a96066c6633dfa5876fd952edaf726a.bmp",
                  "GreenHeart.bmp": "embedded\u002F809fc2c58125c92491e12f07e05a82056a7c937bf7da77acf87fe67d0e57a973.bmp",
                  "GreenStar.bmp": "embedded\u002F0e96d8d87ff3a5b114a697dec8511405a0009aa25ad88a0f32eb73da7f5b1aaa.bmp",
                  "PurpleDiamond.bmp": "embedded\u002F681a636ca611e9af614c280174b2222b8719dc432ebd9e2818bfc5b0e7e4ccc2.bmp",
                  "PurpleHeart.bmp": "embedded\u002F15af1123359bfcb49420dccf8dbe32daad408038e2a7c9b2983580770172fd05.bmp",
                  "PurpleSquare.bmp": "embedded\u002Fbce3c8f8db180edfce42ab348bcb5111423b2a0a9d127c4ff24f77c9f6b77243.bmp",
                  "PurpleStar.bmp": "embedded\u002F6a9b36033260587b69744d278c89adaafa87259c43af7c44e38eb4c4d8df8b29.bmp",
                  "RedHeart.bmp": "embedded\u002F1ea3317ef2d11fbece136b484f6d8eca452736322d93aa64b618797aa4eeeb28.bmp",
                  "RedStar.bmp": "embedded\u002F61eae104fbe51a2b7de4ebfbd900e56fe46df792f19d2c18b72ba1e477adf30e.bmp",
                  "GreenDiamond.bmp": "embedded\u002F92933dbd910dae62c885f4b3adf79f14734cf9e4052119564ed2c4bf723b3a64.bmp",
                  "GreenSquare.bmp": "embedded\u002F7bb1a4870631826d20010989d9fd63e8878a1b01f5a76bb537201d1e687100df.bmp",
                  "RedSquare.bmp": "embedded\u002Fcfdd30fda07901099aef471844b7c5aa3b4efd25a4e9dbc3a5dd46553a97bbd5.bmp",
                  "RedDiamond.bmp": "embedded\u002F2e070e5a452f5c3d3533aac98673f2a5019f389caeadaa1c9299cb4732f77365.bmp"
                },
                "responses": {
                  "keypress(c)": "c",
                  "keypress(m)": "m"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "stim",
                "timeout": "2000",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.78,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.feedback}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Don't respond!";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Too slow!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.corrResp){
      this.parameters.feedback="Correct";
      this.parameters.ACC = 1;
    }else{
      this.parameters.feedback="Incorrect";
      this.parameters.ACC = 0;
    }
  }
}


}
                },
                "title": "feedback",
                "timeout": "750",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 404.23,
              "height": 58.58,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Take a rest and press SPACE \nto continue another block of test trials.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InstTest_continue"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "TEST": "1"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "96"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
          },
          "title": "TaskSwitchTest_loop3",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var trialTyep
var handcue
var rNum

// record target features on a preceding trial
// this is used to avoid feature repetitions
preShape=this.state.stimShape;
preColour=this.state.stimColour;
this.parameters.preShape=preShape;
this.parameters.preColour=preColour;

// select task
if(Math.random()<.5){
  cue="SHAPE";
}else{
  cue="COLOUR";
}

// select correct response
if(Math.random()<.5){
  cResp="c";
}else{
  cResp="m";
}

// select target
if(cue==="SHAPE"){

  if(cResp==="c"){
    if(preShape===this.parameters.shape1){
      stimShape=this.parameters.shape2;
    }else if(preShape===this.parameters.shape2){
      stimShape=this.parameters.shape1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape1;
      }else{
        stimShape=this.parameters.shape2;
      }
    }

  }else if(cResp==="m"){
    if(preShape===this.parameters.shape3){
      stimShape=this.parameters.shape4;
    }else if(preShape===this.parameters.shape4){
      stimShape=this.parameters.shape3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape3;
      }else{
        stimShape=this.parameters.shape4;
      }
    }
  }

  // select irrelevant colour
  if(preColour===this.parameters.colour1){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour2){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour3){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour4;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }

  }else if(preColour===this.parameters.colour4){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour3;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }
  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimColour=this.parameters.colour1;
    }else if(rNum<.50){ 
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }

}else if(cue==="COLOUR"){
  if(cResp==="c"){
    if(preColour===this.parameters.colour1){
      stimColour=this.parameters.colour2;
    }else if(preColour===this.parameters.colour2){
      stimColour=this.parameters.colour1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour1;
      }else{
        stimColour=this.parameters.colour2;
      }
    }

  }else if(cResp==="m"){
    if(preColour=this.parameters.colour3){
      stimColour=this.parameters.colour4;
    }else if(preColour===this.parameters.colour4){
      stimColour=this.parameters.colour3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour3;
      }else{
        stimColour=this.parameters.colour4;
      }
    }
  }

  // select irrelevant shape
  if(preShape===this.parameters.shape1){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape2){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape3){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape4;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else if(preShape===this.parameters.shape4){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape3;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimShape=this.parameters.shape1;
    }else if(rNum<.50){ 
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }
}

// select hand cue
trialType="global-go";
handcue=""

//preShape=stimShape;
//preColour=stimColour;

this.parameters.stimColour=stimColour;
this.parameters.stimShape=stimShape;
this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.trialType=trialType
this.parameters.handCue=handcue;



// response congruity
var rComp
if(stimShape===this.parameters.shape1 || stimShape===this.parameters.shape2){
  if(stimColour===this.parameters.colour1 || stimColour===this.parameters.colour2){
    rComp=1;
  }else{
    rComp=2;
  }
}else{
  if(stimColour===this.parameters.colour3 || stimColour===this.parameters.colour4){
    rComp=1;
  }else{
    rComp=2;
  }
}
this.parameters.rComp=rComp

}
            },
            "title": "TaskSwitchTrial_sequence",
            "tardy": true,
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 327.3,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.taskCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "task_cue",
                "timeout": "1000"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "CTI",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 214,
                    "height": 214,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.target + \".bmp\"] }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.8,
                    "height": 36.16,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff",
                    "text": "${parameters.handCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape1} \u002F ${state.shape2}\n\n\n${state.colour1} \u002F ${state.colour2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape3} \u002F ${state.shape4}\n\n\n${state.colour3} \u002F ${state.colour4}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "BlueDiamond.bmp": "embedded\u002F42a8fedc24d5910e0313288675bdc954ee7dd788c23fa0aabf36e76706648e29.bmp",
                  "BlueHeart.bmp": "embedded\u002Fd432a5d2189ae629607a64b1030a736eb028f56b5fe03a4b87fd93fb080d140b.bmp",
                  "BlueSquare.bmp": "embedded\u002F7e95c1774ff72f667863b3383dc242103db3b416bd4a7ce57d3f84913f33c6d6.bmp",
                  "BlueStar.bmp": "embedded\u002F33c9cb3a6fd1de668021d101f957f1af5a96066c6633dfa5876fd952edaf726a.bmp",
                  "GreenHeart.bmp": "embedded\u002F809fc2c58125c92491e12f07e05a82056a7c937bf7da77acf87fe67d0e57a973.bmp",
                  "GreenStar.bmp": "embedded\u002F0e96d8d87ff3a5b114a697dec8511405a0009aa25ad88a0f32eb73da7f5b1aaa.bmp",
                  "PurpleDiamond.bmp": "embedded\u002F681a636ca611e9af614c280174b2222b8719dc432ebd9e2818bfc5b0e7e4ccc2.bmp",
                  "PurpleHeart.bmp": "embedded\u002F15af1123359bfcb49420dccf8dbe32daad408038e2a7c9b2983580770172fd05.bmp",
                  "PurpleSquare.bmp": "embedded\u002Fbce3c8f8db180edfce42ab348bcb5111423b2a0a9d127c4ff24f77c9f6b77243.bmp",
                  "PurpleStar.bmp": "embedded\u002F6a9b36033260587b69744d278c89adaafa87259c43af7c44e38eb4c4d8df8b29.bmp",
                  "RedHeart.bmp": "embedded\u002F1ea3317ef2d11fbece136b484f6d8eca452736322d93aa64b618797aa4eeeb28.bmp",
                  "RedStar.bmp": "embedded\u002F61eae104fbe51a2b7de4ebfbd900e56fe46df792f19d2c18b72ba1e477adf30e.bmp",
                  "GreenDiamond.bmp": "embedded\u002F92933dbd910dae62c885f4b3adf79f14734cf9e4052119564ed2c4bf723b3a64.bmp",
                  "GreenSquare.bmp": "embedded\u002F7bb1a4870631826d20010989d9fd63e8878a1b01f5a76bb537201d1e687100df.bmp",
                  "RedSquare.bmp": "embedded\u002Fcfdd30fda07901099aef471844b7c5aa3b4efd25a4e9dbc3a5dd46553a97bbd5.bmp",
                  "RedDiamond.bmp": "embedded\u002F2e070e5a452f5c3d3533aac98673f2a5019f389caeadaa1c9299cb4732f77365.bmp"
                },
                "responses": {
                  "keypress(c)": "c",
                  "keypress(m)": "m"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "stim",
                "timeout": "2000",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.78,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.feedback}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Don't respond!";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Too slow!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.corrResp){
      this.parameters.feedback="Correct";
      this.parameters.ACC = 1;
    }else{
      this.parameters.feedback="Incorrect";
      this.parameters.ACC = 0;
    }
  }
}


}
                },
                "title": "feedback",
                "timeout": "750",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 404.23,
              "height": 58.58,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Take a rest and press SPACE \nto continue another block of test trials.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InstTest_continue"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "TEST": "1"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "96"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
          },
          "title": "TaskSwitchTest_loop4",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var trialTyep
var handcue
var rNum

// record target features on a preceding trial
// this is used to avoid feature repetitions
preShape=this.state.stimShape;
preColour=this.state.stimColour;
this.parameters.preShape=preShape;
this.parameters.preColour=preColour;

// select task
if(Math.random()<.5){
  cue="SHAPE";
}else{
  cue="COLOUR";
}

// select correct response
if(Math.random()<.5){
  cResp="c";
}else{
  cResp="m";
}

// select target
if(cue==="SHAPE"){

  if(cResp==="c"){
    if(preShape===this.parameters.shape1){
      stimShape=this.parameters.shape2;
    }else if(preShape===this.parameters.shape2){
      stimShape=this.parameters.shape1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape1;
      }else{
        stimShape=this.parameters.shape2;
      }
    }

  }else if(cResp==="m"){
    if(preShape===this.parameters.shape3){
      stimShape=this.parameters.shape4;
    }else if(preShape===this.parameters.shape4){
      stimShape=this.parameters.shape3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimShape=this.parameters.shape3;
      }else{
        stimShape=this.parameters.shape4;
      }
    }
  }

  // select irrelevant colour
  if(preColour===this.parameters.colour1){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour2){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }else if(preColour===this.parameters.colour3){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour4;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }

  }else if(preColour===this.parameters.colour4){
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour3;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour1;
    }else{
      stimColour=this.parameters.colour2;
    }
  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimColour=this.parameters.colour1;
    }else if(rNum<.50){ 
      stimColour=this.parameters.colour2;
    }else if(rNum<.75){ 
      stimColour=this.parameters.colour3;
    }else{
      stimColour=this.parameters.colour4;
    }

  }

}else if(cue==="COLOUR"){
  if(cResp==="c"){
    if(preColour===this.parameters.colour1){
      stimColour=this.parameters.colour2;
    }else if(preColour===this.parameters.colour2){
      stimColour=this.parameters.colour1;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour1;
      }else{
        stimColour=this.parameters.colour2;
      }
    }

  }else if(cResp==="m"){
    if(preColour=this.parameters.colour3){
      stimColour=this.parameters.colour4;
    }else if(preColour===this.parameters.colour4){
      stimColour=this.parameters.colour3;
    }else{
      rNum=Math.random();
      if(rNum<.5){
        stimColour=this.parameters.colour3;
      }else{
        stimColour=this.parameters.colour4;
      }
    }
  }

  // select irrelevant shape
  if(preShape===this.parameters.shape1){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape2){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }else if(preShape===this.parameters.shape3){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape4;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else if(preShape===this.parameters.shape4){
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape3;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape1;
    }else{
      stimShape=this.parameters.shape2;
    }

  }else{
    rNum=Math.random();
    if(rNum<.25){
      stimShape=this.parameters.shape1;
    }else if(rNum<.50){ 
      stimShape=this.parameters.shape2;
    }else if(rNum<.75){ 
      stimShape=this.parameters.shape3;
    }else{
      stimShape=this.parameters.shape4;
    }

  }
}

// select hand cue
trialType="global-go";
handcue=""

//preShape=stimShape;
//preColour=stimColour;

this.parameters.stimColour=stimColour;
this.parameters.stimShape=stimShape;
this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.trialType=trialType
this.parameters.handCue=handcue;



// response congruity
var rComp
if(stimShape===this.parameters.shape1 || stimShape===this.parameters.shape2){
  if(stimColour===this.parameters.colour1 || stimColour===this.parameters.colour2){
    rComp=1;
  }else{
    rComp=2;
  }
}else{
  if(stimColour===this.parameters.colour3 || stimColour===this.parameters.colour4){
    rComp=1;
  }else{
    rComp=2;
  }
}
this.parameters.rComp=rComp

}
            },
            "title": "TaskSwitchTrial_sequence",
            "tardy": true,
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 327.3,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.taskCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "task_cue",
                "timeout": "1000"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "CTI",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 214,
                    "height": 214,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.target + \".bmp\"] }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.8,
                    "height": 36.16,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff",
                    "text": "${parameters.handCue}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape1} \u002F ${state.shape2}\n\n\n${state.colour1} \u002F ${state.colour2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 275,
                    "top": 0,
                    "angle": 0,
                    "width": 294.7,
                    "height": 101.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${state.shape3} \u002F ${state.shape4}\n\n\n${state.colour3} \u002F ${state.colour4}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "20",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "BlueDiamond.bmp": "embedded\u002F42a8fedc24d5910e0313288675bdc954ee7dd788c23fa0aabf36e76706648e29.bmp",
                  "BlueHeart.bmp": "embedded\u002Fd432a5d2189ae629607a64b1030a736eb028f56b5fe03a4b87fd93fb080d140b.bmp",
                  "BlueSquare.bmp": "embedded\u002F7e95c1774ff72f667863b3383dc242103db3b416bd4a7ce57d3f84913f33c6d6.bmp",
                  "BlueStar.bmp": "embedded\u002F33c9cb3a6fd1de668021d101f957f1af5a96066c6633dfa5876fd952edaf726a.bmp",
                  "GreenHeart.bmp": "embedded\u002F809fc2c58125c92491e12f07e05a82056a7c937bf7da77acf87fe67d0e57a973.bmp",
                  "GreenStar.bmp": "embedded\u002F0e96d8d87ff3a5b114a697dec8511405a0009aa25ad88a0f32eb73da7f5b1aaa.bmp",
                  "PurpleDiamond.bmp": "embedded\u002F681a636ca611e9af614c280174b2222b8719dc432ebd9e2818bfc5b0e7e4ccc2.bmp",
                  "PurpleHeart.bmp": "embedded\u002F15af1123359bfcb49420dccf8dbe32daad408038e2a7c9b2983580770172fd05.bmp",
                  "PurpleSquare.bmp": "embedded\u002Fbce3c8f8db180edfce42ab348bcb5111423b2a0a9d127c4ff24f77c9f6b77243.bmp",
                  "PurpleStar.bmp": "embedded\u002F6a9b36033260587b69744d278c89adaafa87259c43af7c44e38eb4c4d8df8b29.bmp",
                  "RedHeart.bmp": "embedded\u002F1ea3317ef2d11fbece136b484f6d8eca452736322d93aa64b618797aa4eeeb28.bmp",
                  "RedStar.bmp": "embedded\u002F61eae104fbe51a2b7de4ebfbd900e56fe46df792f19d2c18b72ba1e477adf30e.bmp",
                  "GreenDiamond.bmp": "embedded\u002F92933dbd910dae62c885f4b3adf79f14734cf9e4052119564ed2c4bf723b3a64.bmp",
                  "GreenSquare.bmp": "embedded\u002F7bb1a4870631826d20010989d9fd63e8878a1b01f5a76bb537201d1e687100df.bmp",
                  "RedSquare.bmp": "embedded\u002Fcfdd30fda07901099aef471844b7c5aa3b4efd25a4e9dbc3a5dd46553a97bbd5.bmp",
                  "RedDiamond.bmp": "embedded\u002F2e070e5a452f5c3d3533aac98673f2a5019f389caeadaa1c9299cb4732f77365.bmp"
                },
                "responses": {
                  "keypress(c)": "c",
                  "keypress(m)": "m"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "stim",
                "timeout": "2000",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.78,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.feedback}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Don't respond!";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Too slow!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.corrResp){
      this.parameters.feedback="Correct";
      this.parameters.ACC = 1;
    }else{
      this.parameters.feedback="Incorrect";
      this.parameters.ACC = 0;
    }
  }
}


}
                },
                "title": "feedback",
                "timeout": "750",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cp style=\"text-align: center;\"\u003EYou have completed all trials!\u003C\u002Fp\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": ""
      },
      "parameters": {},
      "messageHandlers": {
        "end": function anonymous(
) {
document.body.style.cursor = 'pointer';
}
      },
      "title": "Bye",
      "timeout": "1000"
    }
  ]
})

// Let's go!
study.run()