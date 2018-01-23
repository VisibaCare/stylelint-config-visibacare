# stylelint-config-visibacare
Visiba Care's stylelint config
## Getting started
Add the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) to your VS Code.

Add [Stylelint](https://stylelint.io/) and `stylelint-config-visibacare` to the repo.
#### npm
```
$ npm install --save-dev stylelint stylelint-config-visibacare
```

#### Yarn
```
$ yarn add --dev stylelint stylelint-config-visibacare
``` 


Set the stylelint config to: 
#### For a package.json property
```javascript
"stylelint": {
  "extends": ["stylelint-config-visibacare"]
}
```
#### For a .stylelintrc file
```javascript
{
  "extends": ["stylelint-config-visibacare"]
}
```
***
### Enable the Stylelint extention, reload VS Code and we're done!
