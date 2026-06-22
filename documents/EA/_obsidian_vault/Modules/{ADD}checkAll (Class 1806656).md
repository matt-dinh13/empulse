---
type: Class
stereotype: "resources"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/checkAll"
domain: "Modules"
element_id: 1806656
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}checkAll

> **Type**: Class · **Stereotype**: «resources»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/checkAll

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
- ← Dependency: [[{MOD}Check all registration documents]]

## 📊 Appears In (1 diagrams)

- Logical: checkAll
