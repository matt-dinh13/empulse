---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8726 RELIP cleanup - datasource"
domain: "Requirements Model"
element_id: 1821421
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 InstallmentsType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8726 RELIP cleanup - datasource

## 🔗 Connections (2)

- → Dependency «use»: [[InstallmentType (Class 1878219)]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8726 RELIP cleanup - datasource
- Logical: HO_CONTRACT_DATA - financial data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installment | InstallmentType |  |
| installmentEffectiveRate | decimal |  |
| annualInterestRate | decimal |  |
| initialAnnualInterestRate | decimal |  |
| initTerm | int |  |
