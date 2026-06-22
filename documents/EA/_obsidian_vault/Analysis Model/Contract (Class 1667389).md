---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3"
domain: "Analysis Model"
element_id: 1667389
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3

## 🔗 Connections (3)

- ← Dependency: [[GetContractJFSPartnershipRequest (Class 1615964)]]
- → Dependency: [[InstallmentsType]]
- → Dependency: [[OfferFinancialParameters]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| statusCode | string |  |
| assumedSignatureDate | date |  |
| saleroomCode | string |  |
| offerFinancialParameters | OfferFinancialParameters |  |
| approvalDate | dateTime |  |
| loanPurpose | string |  |
| numberOfCommodities | int |  |
| activeInstallments | InstallmentsType |  |
