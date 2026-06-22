---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/IN"
domain: "Analysis Model"
element_id: 1761542
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 List of bank branches

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/IN

## 📝 Notes

List of branches of currently displayed bank.

Localization code:
GEN_TabBankBranches

Sort order: 
Branch name asc

Paging:
Yes

## 🔗 Connections (2)

- → Dependency: [[00.140 Show bank branch detail]]
- → Dependency: [[{MOD} 00.130 Update bank branch]]

## 📊 Appears In (2 diagrams)

- Custom: Additional bank data - IN specific
- Custom: Bank detail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {DEL}E-mandate Support | Boolean |  |
| Branch name | Text |  |
| Branch code | Text |  |
| Branch code - secondary | Text |  |
| Branch region | Text |  |
| Branch district | Text |  |
| Branch status | Text |  |
| Show branch detail | Button |  |
| Update branch | Button |  |
