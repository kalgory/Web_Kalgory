# Kalgory Web Convention

- [Naming](#Naming)
  - [file](#file)
    - [sfc](#sfc)
    - [js](#js)
    
  - [directory](#directory)
    
  - [options / data](#options--data)
    - [data](#data)
    - [props](#props)
    - [computed](#computed)
    - [methods](#methods)
    - [watch](#watch)
    
  - [options / DOM](#options--data)
    - [el](#el)
  
  - [options / assets](#options--assets)
    - [components](#components)
  
- [Git](#Git)
  - [branch](#branch)
  - [commit message](#commit-message)

  
## Naming


### File


#### sfc
```
PascalCase.vue
```


#### js
```
kebab-case.js
```


### Directory
```
kebab-case
```


### Options / Data


#### data, props
|Type|Object|Array|
|---|---|---|
|Prefix|obj_|arr_|
```
camelCase
```


#### computed, watch
```
camelCase
```


#### methods
```
verbObject
```


### Options / Assets


#### components
```
PascalCase
```


## Git


### branch
```
directory/camel_case

ex)
main
develop
  developer
feature
  developer
    feature_title
```


### [commit message](https://doublesprogramming.tistory.com/256)

