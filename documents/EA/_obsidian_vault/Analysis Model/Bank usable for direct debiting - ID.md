---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID"
domain: "Analysis Model"
element_id: 1328131
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Bank usable for direct debiting - ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID

## 📝 Notes

If this field is used as part of DDM definition (e.g. DDM definition on application form or create / update / receive DDM functionality), then additional filter will be applied on offered banks and only those which are able to process direct debits will be offered (bank is able to process direct debits when Bank.DDSupport = "true").

## 🔗 Connections (1)

- ← Dependency: [[Bank name (GUIElement 1747188)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank account for DD - ID
