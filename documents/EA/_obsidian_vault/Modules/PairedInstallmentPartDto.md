---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 815992
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 PairedInstallmentPartDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

This object represents information about paring or unpairing an incoming payment on installment part.

## 🔗 Connections (1)

- ← Dependency: [[PaymentPairingInfoDto]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Payment Pairing - Communication Model
- Logical: CEL Payment Pairing - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPartDataExchangeID | string |  |
| pairedAmount | MoneyDto |  |
