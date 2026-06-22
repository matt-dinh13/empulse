---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2"
domain: "Analysis Model"
element_id: 1755454
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2

## 🔗 Connections (3)

- ← Dependency: [[GetContractJFSPartnershipRequest]]
- → Dependency: [[InstallmentsType (Class 1755456)]]
- → Dependency: [[OfferFinancialParameters (Class 1755462)]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| statusCode | string |  |
| assumedSignatureDate | date |  |
| saleroomCode | string |  |
| offerFinancialParameters | OfferFinancialParameters |  |
| loanPurpose | string |  |
| approvalDate | dateTime |  |
| activeInstallments | InstallmentsType |  |
| numberOfCommodities | int |  |
