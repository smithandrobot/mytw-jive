MYTW
=========
Source for my.thoughtworks.com marketing content.

Install
---
* ```cd <this repo>```
* ```npm install``` 

Build
---
Compiles CSS, concats js and put all the modules on one page
* Default - ```gulp```
* Compile CSS - ```gulp css```
* Concat JS  - ```gulp js```
* Copy Images from src to build  - ```gulp imgs```

Deploy
---
You'll need your SSH key on Fileburst for this to work
```fab sync```