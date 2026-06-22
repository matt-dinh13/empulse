---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date"
domain: "Requirements Model"
element_id: 1366145
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 Display original last due date in GUI

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date

## 📝 Notes

Based on a new global parameter we will display an original last installment due date on Installment schedule page in GUI (on hover of the last intallment due date together with the customer due date). This original due date value will be taken from FP.Expected End Date. We will add one tiny hack for contracts with applied change due date service (as VN doesn't want to see the changed due day on GUI but we recalculate expected end date for KZ reporting purposes).

## 🔗 Connections (1)

- → Generalization: [[PAYM-1728 (CBL-4595) Change of the last duedate]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1728 (CBL-4595) Change of the last due date
