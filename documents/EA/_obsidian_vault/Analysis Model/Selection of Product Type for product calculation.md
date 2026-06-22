---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model"
domain: "Analysis Model"
element_id: 1708941
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Selection of Product Type for product calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model

## 📝 Notes

Rules used for selection of product type in product calculator.
Allowed Product Types (A_ProductType) depend on
- set of product types assigned to salesroom (SAL_ProductType)
- list of available product types from input
- set of product types assigned to selected X-sell/bound offer (CO_ProductType) 
Product type in this rule is defined as combination of product type, initial transaction type, IsDebit.

CO_ProductType is empty by default.
If an X-sell or bound offer is selected then CO_ProductType is defined by the rule Get Product Type of Marketing Offer. IsDebit is set to FALSE for all combinations in CO_ProductType.
SAL_ProductType (product type, initial transaction type, isDebit from corresponding Product Profile) is a set of all product types allowed according to the rule Get allowed Product Types on POS for the salesroom assigned to currently logged used.
If CO_ProductType is empty then A_ProductType = SAL_ProductType.
Else A_ProductType is defined as intersection of CO_ProductType and SAL_ProductType.

Following options are offered:

	
- Consumer loan - visible if any Product Type with Initial Transation Type = POS is defined in A_ProductType
	
- Cash loan - visible if any Product type with Initial Transation Type = CASH is defined in A_ProductType


	
- Revolving loan without initial transaction - visible if Product Type = REL with Initial Transation Type = NDF and Is Debit = false is defined in A_ProductType
	
- Debit card - visible if Product Type = REL with Initial Transation Type = NDF and IsDebit = true is defined in A_ProductType
	
- Standalone insurance - visible if Product Type = SAI is defined in A_ProductType

Product Type, Initial Transaction Type and Is Debit are attributes of Product Profile corresponding to evaluated Product.
Initially no product type is selected and the selection is mandatory.
Product types are filtered by the list of available product types.
If there is exactly one option available, it is automatically selected. 
For bound-product and x-sell calculation method the panel is hidden until a Marketing Offer is selected.

## 🔗 Connections (3)

- → Dependency: [[Get Product Type of Marketing Offer]]
- → Dependency: [[{MOD}Get allowed Product Types on POS]]
- ← Dependency: [[{ADD}Create new debit card]]

## 📊 Appears In (3 diagrams)

- Custom: HC Debit card account selection - panel
- Custom: Panel of buttons
- Use Case: Choose product offer
