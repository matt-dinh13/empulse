---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model"
domain: "Analysis Model"
element_id: 1820663
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Allow change of Installment Schedule method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model

## 📝 Notes

Following has to be fulfilled together:

	
- User is in Role with granted access right


	
- {ADD PCG-707}
Product.UseFinancingScheme = False
{/ADD}


	
- More than one method is obtained from the Product Profile setting (Product Profile ->Product Profile Installment Schedule Method of Product linked to Contract by contract.FinancialParameters.Product.ProductProfile.

## 🔗 Connections (1)

- ← Dependency: [[01.077 Change product offer parameters (UseCase 1827715)]]

## 📊 Appears In (1 diagrams)

- Use Case: Offer detail
