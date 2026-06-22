---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878254
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 FinancingPackageType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Data about the financing package used for the calculation of selected product offer.

Values of individual sub-elements are retrieved by calling the respective REST API provided by PRC module (i.e. GET financing-packages) with following parameters on the input:
     - codeversions = FinancingPackageCode + ":" + FinancingPackageVersion //e.g. 'FIN_PACK:2'

- where FinancingPackageCode is got from Contract->Offer_Financial_Parameters[.Chosen=TRUE].Financing_Package_Code
   and FinancingPackageVersion is got from Contract->Offer_Financial_Parameters[.Chosen=TRUE].Financing_Package_Version

## 🔗 Connections (2)

- → Dependency: [[financing-packages]]
- ← Dependency «use»: [[{MOD}ConsumerLoanParametersType (Class 1878252)]]

## 📊 Appears In (2 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
