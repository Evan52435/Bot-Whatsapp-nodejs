# Introduction to Node.js
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking. In addition, libraries in Node.js are generally written using non-blocking paradigms. Accordingly, blocking behavior is the exception rather than the norm in Node.js.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.

# How To Use
// I assume you already installed node js, if not go to https://nodejs.org/en/download //<br>
Open terminal, type : "npm install whatsapp-web.js" wait until the installation is complete, and type "npm i qrcode-terminal". Wait until the installation is finished. <br>
Open your file directory where the "botwamain.js" is saved from the terminal and type this : <br>
"node *yourfilename(botwamain.js by default)*" <br>
Scan the qr code and wait for the message "server side ready" <br>
**server side ready means the bot is ready to use**
## NOTE
Do not run the file from an IDE *eg vscode*. run it directly from the nodejs

# Bot Specifiation Requirement
## Minimum     : 
CPU         : Any 64Bit Based CPU <br>
GPU         : Anything as long as it can show up in monitor <br>
RAM         : (Optional) <br>
STORAGE     : Anything that fit nodejs <br>
## Recommended : 
CPU         : CPU That has 9999+ Core <br>
GPU         : GPU That can render a CLI <br>
RAM         : 68999 GiB of RAM <br>
STORAGE     : Storage that has 79000MB/s transfer speed <br>
