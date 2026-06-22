---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821411
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}InsuranceType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

This data source entity holds information about insurance products arranged as part of loan contract.

## 🔗 Connections (4)

- → Dependency «use»: [[InsuranceCustomDataItems]]
- → Dependency «use»: [[AddressType (Class 1878263)]]
- ← Dependency «use»: [[InsurancesType]]
- → Dependency «use»: [[InsuredCommodityType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - financial data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceCompanyName | string |  |
| insuranceCompanyAddress | AddressType |  |
| insuranceContractNumber | string |  |
| insuredAmount | MoneyType |  |
| insurancePremium | MoneyType |  |
| insuranceNextPremium | MoneyType |  |
| insuranceNetPremium | MoneyType |  |
| insuranceTerm | int |  |
| insuranceTerminationDate | dateTime |  |
| signDate | dateTime |  |
| expectedEndDate | dateTime |  |
| insuredCommodity | InsuredCommodityType |  |
| insuranceCustomDataItems | InsuranceCustomDataItems |  |
| estimatedInsuredAmount | MoneyType |  |
| estimatednsurancePremium | MoneyType |  |
| insuranceServiceCode | string |  |
| sellerPlaceCode | string |  |
