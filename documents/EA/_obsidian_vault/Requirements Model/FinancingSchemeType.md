---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9363 - FinancingSchemeWS decomission - LOR"
domain: "Requirements Model"
element_id: 1878228
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 FinancingSchemeType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9363 - FinancingSchemeWS decomission - LOR

## 📝 Notes

Data about the financing scheme used for the calculation of selected product offer.

Values of individual sub-elements are retrieved by calling the respective REST API provided by PRC module (i.e. GET financing-schemes) with following parameters on the input:
     - codeversions = FinancingSchemeCode + ":" + FinancingSchemeVersion //e.g. 'FIN_SCHM:2'

- where FinancingSchemeCode is got from Contract->Offer_Financial_Parameters[.Chosen=TRUE].Financing_Scheme_Code
   and FinancingSchemeVersion is got from Contract->Offer_Financial_Parameters[.Chosen=TRUE].Financing_Scheme_Version

## 🔗 Connections (2)

- ← Dependency «use»: [[{MOD}ConsumerLoanParametersType (Class 1878252)]]
- → Dependency: [[financing-schemes]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9363 - FinancingSchemeWS decomission - LOR
- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| numberOfGiftPaymentTerms | int |  |
