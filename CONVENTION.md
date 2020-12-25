# Kalgory Web Naming Convention

## Index
- Naming
  - file
    - sfc
    - js
    
  - directory
    
  - options / data
    - data
    - props
    - computed
    - methods
    - watch
    
  - options / DOM
    - el
  
  - options / assets
    - components
  
- Git
  - branch
  - commit message


---

### File

#### sfc
```
PascalCase.vue
```
#### js
```
kebab-case.js
```

---

### Directory
```
kebab-case
```

---

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

---

### Options / Assets

#### components
```
PascalCase
```

---

### Git

#### branch
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

#### [commit message](https://doublesprogramming.tistory.com/256)
