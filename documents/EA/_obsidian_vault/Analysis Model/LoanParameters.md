---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879496
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 LoanParameters

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

Financial parameters of the loan

Getting source of chosen offer from SQS by Get Offer by offerId from SQS 
Getting source of tariff items related to the account from AP by Get tariff items related to the account

## 🔗 Connections (7)

- → Dependency: [[Get tariff items related to the account]]
- → Dependency: [[ChargedFee]]
- → Dependency: [[Get Offer by offerId from SQS]]
- → Dependency: [[ApplicableTariffItem]]
- ← Dependency: [[AlopRequestDocument]]
- → Dependency: [[ChargedInterest]]
- → Dependency: [[Get Installment Plan data from ASQ]]

## 📊 Appears In (1 diagrams)

- Logical: HO_ALOP_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicableTariffItems | ApplicableTariffItem |  |
| transactionAmount | decimal |  |
| firstInstallmentDueDate | date |  |
| lastInstallmentDueDate | date |  |
| monthlyInstallmentAmount | decimal |  |
| numberOfInstallments | int |  |
| fees | ChargedFee |  |
| interests | ChargedInterest |  |
