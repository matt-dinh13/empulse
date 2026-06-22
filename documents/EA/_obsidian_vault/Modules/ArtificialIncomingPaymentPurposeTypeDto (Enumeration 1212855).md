---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1212855
diagrams: 1
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 ArtificialIncomingPaymentPurposeTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages

## 📝 Notes

Enumeration with purpose types of requested artificial payments (e.g. in case of "Damages and deficits" payment type there must be distinguish of which payment purpose is going on - 'Write-off' or 'Contract sale').

## 🔗 Connections (1)

- ← Dependency: [[ArtificialIncomingPaymentRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Incoming Payments Processing - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| WRITE-OFF |  |  |
| OTHER |  |  |
| CONTRACT_SALE |  |  |
