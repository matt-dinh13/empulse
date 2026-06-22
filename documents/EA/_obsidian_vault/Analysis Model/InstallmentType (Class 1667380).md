---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3"
domain: "Analysis Model"
element_id: 1667380
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3

## 🔗 Connections (2)

- ← Dependency: [[InstallmentsType]]
- → Dependency: [[MoneyType (Class 1667383)]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentAmount | MoneyType |  |
| installmentNumber | int |  |
| outstandingPrincipal | MoneyType |  |
| partFee | MoneyType |  |
| partInterest | MoneyType |  |
| partPrincipal | MoneyType |  |
| paymentDate | date |  |
| prescribeDate | date |  |
