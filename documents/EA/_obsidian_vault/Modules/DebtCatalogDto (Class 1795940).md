---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt"
domain: "Modules"
element_id: 1795940
diagrams: 1
connections: 24
tags:
  - class
  - modules
---

# 🔷 DebtCatalogDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt

## 📝 Notes

Data object used to exchange information about debt catalogue of any contract.

## 🔗 Connections (24)

- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- ← Dependency: [[GetOnlineDebtResponse (Class 1795941)]]
- → Usage: [[Debt Catalogue]]
- → Dependency «use»: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]

## 📊 Appears In (1 diagrams)

- Logical: GetOnlineDebtResponse - Mapping to DebtCatalog

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| payableCollServiceFeeAmount | decimal |  |
| debtPrincipalFut | decimal |  |
| debtInterestFut | decimal |  |
| debtFeeFut | decimal |  |
| debtPenaltyFut | decimal |  |
| debtOthersFut | decimal |  |
| debtPrincipalAct | decimal |  |
| debtInterestAct | decimal |  |
| debtFeeAct | decimal |  |
| debtOthersAct | decimal |  |
| minPayDate | dateTime |  |
| dateLastPaid | dateTime |  |
| maxPayAmount | decimal |  |
| penaltiesPaidSum | decimal |  |
| incomingPaymentsSum | decimal |  |
| minDueDate | date |  |
| maxDueNumber | long |  |
| maxDueDate | date |  |
| overdueNumber | decimal |  |
| nextDueDate | date |  |
| nextDueAmount | decimal |  |
| prePayment | decimal |  |
| businessDate | date |  |
| nextInstallmentDueDateWithPrepayment | date |  |
| nextInstallmentAmountWithPrepayment | decimal |  |
| overduePenalty | decimal |  |
| totalDebt | decimal |  |
