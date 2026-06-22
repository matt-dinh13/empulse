---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9849 Consumer Loan : Need Annual Interest Rate in the contract XML/LOR-9855 Add Annual Interest Rate in the contract XML"
domain: "Requirements Model"
element_id: 1878255
diagrams: 3
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD} PresentedInterestRateTypeItems

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9849 Consumer Loan : Need Annual Interest Rate in the contract XML/LOR-9855 Add Annual Interest Rate in the contract XML

## 📝 Notes

{ADD LOR-9855} Edited multiplicity of PresentedInterestRate to 1...N {/ADD}

## 🔗 Connections (3)

- ← Dependency «use»: [[{MOD}ConsumerLoanParametersType (Class 1878252)]]
- ← Dependency «use»: [[ProductOfferDetailType]]
- → Dependency «use»: [[PresentedInterestRateType (Class 1878232)]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9855 Add Annual Interest Rate in the contract XML
- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| presentedInterestRate | PresentedInterestRateType |  |
