---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules"
domain: "Analysis Model"
element_id: 1860909
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Requested credit limit match product settings

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules

## 📝 Notes

System checks if CreditLimitChangeSupplement.requestedCreditLimit is less than or equal to Credit Limit Max from Contract Product; a message is written (MSG_CreditLimitNotMatchOfProduct; e.g. "Provided credit limit doesn't match the product setting.")
Credit Limit Max is got as follow:

	
- {ADD CSI-1295}System gets Contract Financial Parameters (CFP)
	
- System get used Product data from calling PRC .../product-calculation-data with parameters:
{"financingPackageCode" = CFP.FPCode,
"financingPackageVersion" = CFP.FPVersion,
"financingSchemeCode" = CFP.FSCode,
"financingSchemeVariantCode"= CFP.FSVariantCode,
"financingSchemeVersion"= CFP.FSVariantVersion,
"productCode"= CFP.ProductCode,
"productVariantCode"= ProductVariantCode from ProductVariant based on CFP.ProductVariantId, --missing ProductVariantCode in the Financial Parameters !!!
"productVersion"= CFP.ProductVersion{/ADD}
	
- If Product.Use Financing Scheme = 1, then get Credit Amount Max from Service.Service Type = MTCACC
else get Product Variant.Credit Amount Max

## 🔗 Connections (2)

- ← Dependency: [[Required credit limit for CLDP]]
- ← Dependency: [[Required credit limit for CLIP]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
