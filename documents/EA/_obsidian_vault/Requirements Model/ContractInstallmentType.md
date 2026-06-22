---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1634486
diagrams: 2
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 ContractInstallmentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

Header of the installment schedule.

## 🔗 Connections (6)

- → Dependency: [[{MOD}NameType]]
- → Dependency: [[AddressType (Class 1878263)]]
- ← Generalization: [[contractInstallment]]
- → Dependency: [[Product Transaction Type]]
- → Dependency: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[InstallmentType]]

## 📊 Appears In (2 diagrams)

- Custom: Overview
- Logical: HO_INSTALLMENT_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientAddress | AddressType |  |
| contractStatus | string |  |
| client | {MOD}NameType |  |
| contractCode | string |  |
| contractSignDate | DateTime |  |
| installments | InstallmentType |  |
| installmentScheduleVersion | int |  |
| loanAmount | MoneyType |  |
| loanType | string |  |
| versionRecalculationDate | DateTime |  |
| versionRecalculationReason | string |  |
| clientPrefferedLanguage | string |  |
| terms | int |  |
