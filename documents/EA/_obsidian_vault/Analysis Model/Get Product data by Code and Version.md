---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Replacement of Insurance on running contract/Use case model"
domain: "Analysis Model"
element_id: 1826879
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get Product data by Code and Version

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Replacement of Insurance on running contract/Use case model

## 📝 Notes

The rule describes way of obtaining Product data based on Product code and version

Input:

	
- ProductCode
	
- ProductVersion


Output:

	
- ProductData



	
- {ADD CSI-617}Set codeversions = ProductCode&':'&ProductVersion{/ADD}


	
- System calls {ADD CSI-617}https://prcwl.<environment>/product-catalog/openapi/v1/products/{codeversions} with deps parameters: FLAG {DEL CSI-617}ProvideProductDataWS.GetProductData with ProductCode and ProductVersion as parameters{/DEL}
	
- If a Product is found, the returned data is set into the ProductData
	
- In case an error occurred, it is forwarded to the calling use case{/DEL}
	
- {ADD CSI-617}If 200 (OK) is returned, system returns ProductData and ends
	
- If 404

## 🔗 Connections (1)

- ← Dependency: [[11.780 Process Insurance cancellation or termination event]]

## 📊 Appears In (1 diagrams)

- Use Case: Replacement of standard insurance upon its cancelation or termination
