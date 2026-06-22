---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2"
domain: "Analysis Model"
element_id: 1755466
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2

## 🔗 Connections (2)

- → Dependency: [[MoneyType (Class 1878205)]]
- ← Dependency: [[InstallmentsType (Class 1755456)]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentNumber | int |  |
| paymentDate | date |  |
| installmentAmount | MoneyType |  |
| outstandingPrincipal | MoneyType |  |
| partPrincipal | MoneyType |  |
| partInterest | MoneyType |  |
| partFee | MoneyType |  |
| prescribeDate | date |  |
