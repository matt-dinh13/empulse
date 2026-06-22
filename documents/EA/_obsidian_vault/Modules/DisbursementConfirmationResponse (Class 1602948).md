---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1602948
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 DisbursementConfirmationResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

Response on STATEMENT 240 message.

## 🔗 Connections (4)

- → Dependency: [[Processing DisbursementConfirmationResponse]]
- → Dependency «transformation»: [[STATEMENT240]]
- → Dependency «transformation»: [[RESULT290]]
- → Dependency: [[DisbursementConfirmationResultTypeDto (Enumeration 1671297)]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageID | string |  |
| resultCode | DisbursementConfirmationResultTypeDto |  |
