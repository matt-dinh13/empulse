---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model"
domain: "Modules"
element_id: 964985
diagrams: 4
connections: 11
tags:
  - class
  - modules
---

# 🔷 InstalmentMessageDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model

## 📝 Notes

Instalment CBS message.

## 🔗 Connections (9)

- ← Association: [[ModelGroup1]]
- → Dependency «use»: [[ReconciliationTypeDto (Enumeration 1266621)]]
- → Dependency: [[AccountTypeDto]]
- → Dependency «transformation»: [[INSTALMENT125]]
- → Dependency: [[BillingSystemType (Enumeration 1266627)]]
- → Dependency: [[Processing InstalmentMessageDto]]
- → Generalization «XSDextension»: [[MessageBaseTypeDto]]
- → Dependency «use»: [[InstalmentTypeDto]]
- → Dependency «use»: [[AllocationTypeDto (Enumeration 1223766)]]

## 📊 Appears In (4 diagrams)

- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: COMMON for consumed JMS messages from CaBus
- Logical: REL Installment schedule - Communication model
- Logical: REL Installment schedule - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| instalmentCode | string |  |
| contractCode | ContractCodeType |  |
| amount | hs:MoneyDto |  |
| prescribedDate | date |  |
| dueDate | date |  |
| cancelled | boolean |  |
| instalmentType | InstalmentTypeDto |  |
| reconciliationType | ReconciliationTypeDto |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
| billingSystem | BillingSystemType |  |
| accountType | ReconciliationTypeDto |  |
| allocation | AllocationTypeDto |  |
