---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 1206997
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 REQUESTPAYMENT135

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

Source: HoSel
Destination: Banking system

Throw this table the banking system is informed that some of the HoSel systems requests a creation of an artificial incoming payment (e.g. small uderpayment, gift payment etc.) 

Payment is then generated (by the banking system) and sent via PAYIN220 table.

## 🔗 Connections (5)

- → Dependency «use»: [[REQUESTPAYMENT135 Payment Purpose]]
- → Dependency «use»: [[REQUESTPAYMENT135 Payment type]]
- → Dependency «use»: [[RecordTypeInform]]
- → Dependency «use»: [[CommResult]]
- ← Dependency «transformation»: [[ArtificialIncomingPaymentRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Processing Incoming Payments - Communication Model
- Logical: Processing Incoming Payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| Amount | decimal |  |
| IdCredit | number |  |
| Id payment | number |  |
| Source | {MOD}IncomingPaymentSourceSystem |  |
| Payment type | REQUESTPAYMENT135 Payment type |  |
| Payment purpose | REQUESTPAYMENT135 Payment Purpose |  |
| Time stamp | datetime |  |
| Result code | CommResult |  |
| Id result190 | number |  |
| TypeInform | RecordTypeInform |  |
