---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/CheckPaymentDisciplineFromDC"
domain: "Modules"
element_id: 1795379
diagrams: 1
connections: 2
tags:
  - interface
  - modules
---

# 🔶 CheckPaymentDisciplineFromDC

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/CheckPaymentDisciplineFromDC

## 📝 Notes

{IS-2037}
Checks client's payment discipline from debt catalog. This is a positive check. That means that if the check is true, it is 100% sure that client has correct payment discipline. However it does not mean that if the check is false, client's payment discipline must be checked further from the installments and his incoming payments. That's because we are not able to check payment discipline ie. for incoming payments paired after its deposit date (debt catalogue does not update its history).

## 🔗 Connections (2)

- → Dependency: [[checkPaymentDisciplineRequest]]
- → Dependency: [[checkPaymentDisciplineResponse]]

## 📊 Appears In (1 diagrams)

- Logical: CheckPaymentDisciplineFromDC
