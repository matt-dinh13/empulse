---
type: Class
stereotype: "resources"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/uncheckAll"
domain: "Modules"
element_id: 1806669
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}uncheckAll

> **Type**: Class · **Stereotype**: «resources»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/uncheckAll

## 📝 Notes

{ADD CLM-4666/}

POST 
https://rem.ph00c1.ph.infra/rest/v1/registrations/contracts/xxx/check-all


https://rem.ph00c1.ph.infra/rest/v1/registrations/contracts/xxx/uncheck-all
where xxx is a contractCode of the contract

This api gets all registration documents and sets their registration attributes.

## 🔗 Connections (3)

- → Dependency: [[ErrorMessageRestApi (Class 1859214)]]
- → Dependency: [[setDocumentAttribute]]
- ← Dependency: [[{MOD}Uncheck all registration documents]]

## 📊 Appears In (1 diagrams)

- Logical: uncheckAll
