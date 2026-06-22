---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention"
domain: "Requirements Model"
element_id: 1299209
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-992 Extended Warranty Service Dealer subvention

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention

## 📝 Notes

New outgoing payment type for subvention for VAS (in fact bonus to dealers).
Adjust calculation of outgoing payment to retailer (this subvention should increase payment amount).

From PCG:
V případě Service Subvention budeme do OFP.Offer Service Subvention Item ukládat hodnotu ItemAmount = SubventionAmount se záporným znaménkem, protože Service Subvention je placená ve směru HC -> Partner (je to spíš Commission) na rozdíl od Product Subvention, která je placená ve směru Partner -> HC.
Berte to prosím na vědomí při vaší implementaci.

## 🔗 Connections (1)

- ← Generalization: [[Extended Warranty Service Dealer subvention]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
