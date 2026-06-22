---
type: Class
stereotype: "output"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 1206996
diagrams: 2
connections: 7
tags:
  - class
  - modules
---

# 🔷 PAYIN220

> **Type**: Class · **Stereotype**: «output»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

Communication table for messages used for closed-end and revolving loan. 
Message informs HoSel that a new incoming payment was identified or that some payment has been canceled.

All artificial payments (small deficit, gift payment...) are requested by HoSel from OBS by message REQUESTPAYMENT135. Then OBS sends to HoSel message PAYIN220 with requested artificial payment.

## 🔗 Connections (6)

- → Dependency «transformation»: [[IncomingPaymentRequest]]
- → Dependency «use»: [[CommResult]]
- → Usage: [[PAYIN220 Payment Type]]
- → Dependency «use»: [[RecordTypeInform]]
- → Dependency: [[Generating IncomingPaymentRequest]]
- ← Dependency «transformation»: [[IncomingPaymentResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Processing Incoming Payments - Communication Model
- Logical: Processing Incoming Payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount pay | decimal |  |
| Date pay | date |  |
| Desc payin | string |  |
| Fail reason | CommResult |  |
| Id | number |  |
| Id credit | number |  |
| Id payment | number |  |
| Source | {MOD}IncomingPaymentSourceSystem |  |
| Payment channel | string |  |
| Payment type | PAYIN220 Payment Type |  |
| Processed | boolean |  |
| Time stamp | datetime |  |
| TypeInform | RecordTypeInform |  |
