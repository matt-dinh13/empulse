---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Access Rights"
domain: "Modules"
element_id: 1673180
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {MOD}05.380 Create incoming payment on local request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Access Rights

## 📝 Notes

The use case receives request to create an incoming payment from a local HoSel system (i.e. CaBus, Loxon), create the payment and pair it to the contract. If the pairing of payment is not successful the payment is canceled.

## 🔗 Connections (6)

- → UseCase «include»: [[05.182 Pair payment with contract (UseCase 1875793)]]
- → Dependency: [[Create Incoming Payment request validation]]
- → Realisation: [[05.380 Create incoming payment on local request]]
- → Dependency: [[{MOD CBL-4472}Contract pairing allowed]]
- → Dependency: [[Create incoming payment rule]]
- ← UseCase: [[System (Actor 1877517)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Logical: Incoming Payments Module - PaymentManagementWS (for local systems)
- Use Case: Creating incoming payment on internal component request
