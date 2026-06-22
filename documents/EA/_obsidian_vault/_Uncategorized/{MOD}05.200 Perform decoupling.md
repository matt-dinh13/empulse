---
type: UseCase
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1519194
diagrams: 0
connections: 0
tags:
  - usecase
  - _uncategorized
---

# 🎯 {MOD}05.200 Perform decoupling

> **Type**: UseCase
> **Package**: N/A

## 📝 Notes

This use case is called from other use cases to perform decoupling between payments and installment parts. Status paired and paired contract on incoming payments remain.
After that all the system generates a system event IncomingPaymentPairingChangedCELSE.
